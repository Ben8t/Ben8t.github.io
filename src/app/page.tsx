import { Newsletter } from "@/components/Newsletter";

const EMAIL = "pimpaudben@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/pimpaudben/";

export default function Home() {
  return (
    <main className="page">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="portrait"
        src="/portrait.png"
        alt="ASCII portrait of Benoit"
        width={360}
        height={360}
      />

      <p className="intro">
        <span>Hi, my name is Benoit.</span>
        <span>
          I build product at{" "}
          <a href="https://kestra.io/">Kestra</a>.
        </span>
      </p>

      <p className="prompt">Curious about my thoughts? Click below.</p>

      <Newsletter />

      <p className="contact">
        <span>
          Want to say hi? <a href={`mailto:${EMAIL}`}>Click here.</a>
        </span>
        <span>
          Want to connect? <a href={LINKEDIN}>Click here.</a>
        </span>
      </p>
    </main>
  );
}
