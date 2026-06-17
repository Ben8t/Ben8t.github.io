"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as opentype from "opentype.js";

export function RefractionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("pimpaudben@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = containerRef.current;
    if (!canvas || !heroEl) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // transparent — the page's CSS starfield is the single, continuous background
    renderer.setClearColor(0x000000, 0);

    let W = heroEl.clientWidth;
    let H = heroEl.clientHeight;
    renderer.setSize(W, H, false);

    const scene = new THREE.Scene();
    scene.background = null;

    // wider FOV + closer → stronger perspective on the angled text
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // FBO targets for the FBO-trick + backside normal pass
    const dpr = renderer.getPixelRatio();
    const makeFBO = () =>
      new THREE.WebGLRenderTarget(W * dpr, H * dpr, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
      });
    const mainFBO = makeFBO();
    const backFBO = makeFBO();

    // --- chrome refraction shader ---
    const vertexShader = `
      varying vec3 worldNormal;
      varying vec3 eyeVector;
      varying float vDepth;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vec4 mvPos   = viewMatrix * worldPos;
        vDepth = -mvPos.z;
        gl_Position = projectionMatrix * mvPos;
        worldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        eyeVector = normalize(worldPos.xyz - cameraPosition);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform sampler2D uTexture;
      uniform sampler2D uBackTexture;
      uniform vec2 winResolution;
      uniform float uIorR;
      uniform float uIorG;
      uniform float uIorB;
      uniform float uRefractPower;
      uniform float uChromaticAberration;
      uniform float uReflectivity;
      uniform float uFresnelPower;
      uniform float uFluteCount;
      uniform float uFluteAmp;
      uniform vec3  uFogColor;
      uniform float uFogDensity;

      varying vec3 worldNormal;
      varying vec3 eyeVector;
      varying float vDepth;

      const int LOOP = 8;
      const float TAU = 6.2831853;

      float fresnel(vec3 e, vec3 n, float p) {
        return pow(1.0 - abs(dot(e, n)), p);
      }

      // metallic studio dome — base gradient + colored key reflections
      vec3 envSample(vec3 r) {
        vec3 nr = normalize(r);
        float y = nr.y * 0.5 + 0.5;

        vec3 ground = vec3(0.02, 0.022, 0.028);
        vec3 sky    = vec3(0.32, 0.31, 0.36);
        vec3 col = mix(ground, sky, smoothstep(0.0, 1.0, y));

        vec3 titanium  = vec3(0.48, 0.50, 0.56);
        vec3 gold      = vec3(0.92, 0.70, 0.28);
        vec3 silver    = vec3(0.85, 0.87, 0.92);
        vec3 champagne = vec3(0.98, 0.88, 0.72);
        vec3 xenon     = vec3(0.55, 0.72, 1.00);

        vec3 dTi  = normalize(vec3( 0.85,  0.45,  0.45));
        vec3 dAu  = normalize(vec3(-0.70,  0.55,  0.50));
        vec3 dAg  = normalize(vec3( 0.05,  0.85,  0.55));
        vec3 dCh  = normalize(vec3(-0.25, -0.15,  0.95));
        vec3 dXe  = normalize(vec3( 0.30, -0.60,  0.75));

        float sTi = pow(max(dot(nr, dTi), 0.0), 24.0);
        float sAu = pow(max(dot(nr, dAu), 0.0), 28.0);
        float sAg = pow(max(dot(nr, dAg), 0.0), 36.0);
        float sCh = pow(max(dot(nr, dCh), 0.0), 22.0);
        float sXe = pow(max(dot(nr, dXe), 0.0), 20.0);

        col += titanium  * sTi * 1.4;
        col += gold      * sAu * 1.2;
        col += silver    * sAg * 1.1;
        col += champagne * sCh * 0.9;
        col += xenon     * sXe * 1.3;
        return col;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / winResolution.xy;

        // --- fluted glass: vertical ribs in screen space ---
        float fluteRad   = uv.x * uFluteCount * TAU;
        float fluteShift = sin(fluteRad) * uFluteAmp;
        vec2  fluteUVOff = vec2(fluteShift, 0.0);
        float fluteSlope = cos(fluteRad) * uFluteAmp * 6.0;
        vec3  fluteNormal = normalize(worldNormal + vec3(fluteSlope, 0.0, 0.0));
        vec3  normal = fluteNormal;

        // --- chromatic refraction sampled around the fluted UV ---
        vec3 refractedColor = vec3(0.0);
        for (int i = 0; i < LOOP; i++) {
          float slide = float(i) / float(LOOP) * 0.05;
          vec3 rR = refract(eyeVector, normal, 1.0 / uIorR);
          vec3 rG = refract(eyeVector, normal, 1.0 / uIorG);
          vec3 rB = refract(eyeVector, normal, 1.0 / uIorB);
          vec2 baseUV = uv + fluteUVOff;
          refractedColor.r += texture2D(uTexture, baseUV + rR.xy * (uRefractPower + slide) * uChromaticAberration).r;
          refractedColor.g += texture2D(uTexture, baseUV + rG.xy * (uRefractPower + slide) * uChromaticAberration).g;
          refractedColor.b += texture2D(uTexture, baseUV + rB.xy * (uRefractPower + slide) * uChromaticAberration).b;
        }
        refractedColor /= float(LOOP);

        // --- reflection of the metallic studio dome ---
        vec3 reflVec = reflect(eyeVector, normal);
        vec3 envColor = envSample(reflVec);

        float f = fresnel(eyeVector, normal, uFresnelPower);
        float reflectMix = clamp(uReflectivity + f * 0.4, 0.0, 1.0);
        vec3 color = mix(refractedColor, envColor, reflectMix);

        // --- colored studio speculars (matching the env directions) ---
        vec3 titanium  = vec3(0.48, 0.50, 0.56);
        vec3 gold      = vec3(0.92, 0.70, 0.28);
        vec3 silver    = vec3(0.85, 0.87, 0.92);
        vec3 champagne = vec3(0.98, 0.88, 0.72);
        vec3 xenon     = vec3(0.55, 0.72, 1.00);

        vec3 lTi = normalize(vec3( 0.85,  0.45,  0.45));
        vec3 lAu = normalize(vec3(-0.70,  0.55,  0.50));
        vec3 lAg = normalize(vec3( 0.05,  0.85,  0.55));
        vec3 lCh = normalize(vec3(-0.25, -0.15,  0.95));
        vec3 lXe = normalize(vec3( 0.30, -0.60,  0.75));

        float shin = 120.0;
        float sTi = pow(max(dot(normal, normalize(lTi - eyeVector)), 0.0), shin);
        float sAu = pow(max(dot(normal, normalize(lAu - eyeVector)), 0.0), shin);
        float sAg = pow(max(dot(normal, normalize(lAg - eyeVector)), 0.0), shin);
        float sCh = pow(max(dot(normal, normalize(lCh - eyeVector)), 0.0), shin);
        float sXe = pow(max(dot(normal, normalize(lXe - eyeVector)), 0.0), shin);

        color += titanium  * sTi * 1.1;
        color += gold      * sAu * 1.0;
        color += silver    * sAg * 0.9;
        color += champagne * sCh * 0.7;
        color += xenon     * sXe * 1.0;

        color += champagne * f * 0.35;

        float fog = 1.0 - exp(-vDepth * uFogDensity);
        color = mix(color, uFogColor, fog);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const backFragmentShader = `
      varying vec3 worldNormal;
      varying vec3 eyeVector;
      void main() {
        gl_FragColor = vec4(worldNormal * 0.5 + 0.5, 1.0);
      }
    `;

    const uniforms = {
      uTexture: { value: null as THREE.Texture | null },
      uBackTexture: { value: null as THREE.Texture | null },
      winResolution: { value: new THREE.Vector2(W, H).multiplyScalar(dpr) },
      uIorR: { value: 1.05 },
      uIorG: { value: 1.07 },
      uIorB: { value: 1.09 },
      uRefractPower: { value: 0.18 },
      uChromaticAberration: { value: 0.35 },
      uReflectivity: { value: 0.55 },
      uFresnelPower: { value: 2.5 },
      uFluteCount: { value: 55.0 },
      uFluteAmp: { value: 0.0035 },
      uFogColor: { value: new THREE.Color(0x0a0a0c) },
      uFogDensity: { value: 0.042 },
    };

    const glassMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.FrontSide,
    });
    const backMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: backFragmentShader,
      uniforms,
      side: THREE.BackSide,
    });

    // placeholder while font loads
    const glass: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial> =
      new THREE.Mesh(new THREE.BoxGeometry(0.001, 0.001, 0.001), glassMat);
    glass.visible = false;
    scene.add(glass);

    let disposed = false;

    (async () => {
      const font = await opentype.load("/PPMondwest-Regular.otf");
      if (disposed) return;
      const fontSize = 100;
      const path = font.getPath("Engineering.", 0, 0, fontSize);
      const pathData = path.toPathData(3);

      const svgString = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${pathData}"/></svg>`;
      const svg = new SVGLoader().parse(svgString);
      const shapes: THREE.Shape[] = [];
      for (const p of svg.paths) shapes.push(...SVGLoader.createShapes(p));

      // slim extrusion + subtle bevel = minimalist, not chunky
      const textGeo = new THREE.ExtrudeGeometry(shapes, {
        depth: fontSize * 0.12,
        bevelEnabled: true,
        bevelThickness: fontSize * 0.018,
        bevelSize: fontSize * 0.015,
        bevelSegments: 5,
        curveSegments: 8,
      });

      // SVG Y-down → three.js Y-up (rotation preserves face winding)
      textGeo.rotateX(Math.PI);

      // scale to a target width
      textGeo.computeBoundingBox();
      let bb = textGeo.boundingBox!;
      const targetWidth = 4.6;
      const s = targetWidth / (bb.max.x - bb.min.x);
      textGeo.scale(s, s, s);

      // recenter, then nudge slightly down so it sits below the "Beyond" italic
      textGeo.computeBoundingBox();
      bb = textGeo.boundingBox!;
      textGeo.translate(
        -(bb.max.x + bb.min.x) / 2,
        -(bb.max.y + bb.min.y) / 2,
        -(bb.max.z + bb.min.z) / 2
      );

      glass.geometry.dispose();
      glass.geometry = textGeo;
      glass.position.y = -0.25;
      glass.visible = true;
    })();

    // resting tilt + pointer parallax
    const baseRotX = -0.18;
    const baseRotY = 0.32;
    let targetRotX = 0;
    let targetRotY = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotY = nx * 0.55;
      targetRotX = -ny * 0.35;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      W = heroEl.clientWidth;
      H = heroEl.clientHeight;
      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      mainFBO.setSize(W * dpr, H * dpr);
      backFBO.setSize(W * dpr, H * dpr);
      uniforms.winResolution.value.set(W, H).multiplyScalar(dpr);
    };
    window.addEventListener("resize", resize);

    let raf = 0;
    function tick(t: number) {
      glass.rotation.x +=
        (baseRotX + targetRotX + Math.sin(t * 0.0003) * 0.1 - glass.rotation.x) *
        0.05;
      glass.rotation.y +=
        (baseRotY + targetRotY + Math.sin(t * 0.0002) * 0.14 - glass.rotation.y) *
        0.05;

      // back-face normal pass
      glass.material = backMat;
      glass.visible = true;
      renderer.setRenderTarget(backFBO);
      renderer.render(scene, camera);

      // scene-behind snapshot
      glass.visible = false;
      renderer.setRenderTarget(mainFBO);
      renderer.render(scene, camera);

      // composite to screen
      uniforms.uTexture.value = mainFBO.texture;
      uniforms.uBackTexture.value = backFBO.texture;
      glass.material = glassMat;
      glass.visible = true;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      mainFBO.dispose();
      backFBO.dispose();
      glass.geometry.dispose();
      glassMat.dispose();
      backMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* overlays */}
      <div className="pointer-events-none absolute inset-0">
        <h1 className="absolute left-1/2 top-[24%] -translate-x-1/2 whitespace-nowrap font-display italic leading-[0.9] tracking-tight text-[#f4f1ea] text-[clamp(56px,9vw,128px)] [text-shadow:0_0_40px_rgba(0,0,0,0.6)]">
          Beyond
        </h1>
        <p className="absolute bottom-[9%] left-1/2 max-w-[540px] -translate-x-1/2 px-6 text-center text-[15px] leading-relaxed text-[rgba(232,230,225,0.7)]">
          If you want to know more about me, send me an email at{" "}
          <span className="inline-flex items-center gap-2 align-middle">
            <a
              href="mailto:pimpaudben@gmail.com"
              className="pointer-events-auto font-display not-italic text-[#e8e6e1] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              pimpaudben@gmail.com
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              title={copied ? "Copied!" : "Copy email"}
              className="pointer-events-auto inline-flex items-center text-[#e8e6e1] opacity-60 transition-opacity hover:opacity-100"
            >
              {copied ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="9" y="9" width="11" height="11" rx="2" ry="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V5a2 2 0 012-2h10" />
                </svg>
              )}
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}
