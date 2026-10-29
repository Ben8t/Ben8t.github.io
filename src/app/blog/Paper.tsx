"use client";

import { useEffect, useRef } from "react";

/*
 * A sheet of paper, drawn once by a fragment shader and laid over the page
 * with mix-blend-mode: multiply, so the grain sits on the ink as well as the
 * margins. It is static: one draw on mount, one per resize. Without WebGL the
 * canvas stays blank and the flat paper colour from the CSS is what you get.
 */

const VERTEX = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAGMENT = `
precision highp float;
uniform vec2 res;
uniform float dpr;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
             mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec2 px = gl_FragCoord.xy;
  vec2 css = px / dpr;

  // Fine grain at device-pixel scale, plus a coarser speckle.
  float grain = hash(px) - 0.5;
  float speckle = noise(css * 0.9) - 0.5;

  // Soft clouding, like uneven pulp.
  float cloud = fbm(css / 220.0) - 0.5;

  // Fibres: noise stretched along a slight diagonal.
  vec2 q = mat2(0.94, -0.34, 0.34, 0.94) * css;
  float fibre = smoothstep(0.62, 0.9, fbm(vec2(q.x / 60.0, q.y / 2.5)));

  // A faint darkening towards the edges of the sheet.
  vec2 uv = px / res - 0.5;
  float vignette = dot(uv, uv);

  float v = 1.0
    + grain * 0.099
    + speckle * 0.045
    + cloud * 0.063
    - fibre * 0.045
    - vignette * 0.108;

  gl_FragColor = vec4(vec3(clamp(v, 0.0, 1.0)), 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

export function Paper() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const res = gl.getUniformLocation(program, "res");
    const dpr = gl.getUniformLocation(program, "dpr");

    const draw = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(res, canvas.width, canvas.height);
      gl.uniform1f(dpr, ratio);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return <canvas ref={ref} className="paper-grain" aria-hidden="true" />;
}
