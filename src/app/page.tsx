"use client";

import { Newsletter } from "@/components/Newsletter";
import posthog from "posthog-js";

const EMAIL = "pimpaudben@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/pimpaudben/";
const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

export default function Home() {
  const handleEmailContactClick = () => {
    if (isPostHogConfigured) {
      posthog.capture("email_contact_clicked", { contact_method: "email" });
      posthog.logger.info("portfolio contact navigation requested", {
        contact_method: "email",
      });
    }
  };

  const handleProfessionalProfileClick = () => {
    if (isPostHogConfigured) {
      posthog.capture("professional_profile_clicked", { profile: "linkedin" });
      posthog.logger.info("portfolio professional profile navigation requested", {
        profile: "linkedin",
      });
    }
  };
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
          Want to say hi?{" "}
          <a href={`mailto:${EMAIL}`} onClick={handleEmailContactClick}>
            Click here.
          </a>
        </span>
        <span>
          Want to connect?{" "}
          <a href={LINKEDIN} onClick={handleProfessionalProfileClick}>
            Click here.
          </a>
        </span>
      </p>
    </main>
  );
}
