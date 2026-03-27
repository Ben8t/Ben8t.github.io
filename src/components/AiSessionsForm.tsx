"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import type { EnrollmentInsert } from "@/lib/supabase";

type Persona = "beginner" | "professional";

export type AiSessionsTranslations = {
  badge: string;
  heading: string;
  headingItalic: string;
  subtitle: string;
  whoAreYou: string;
  personas: [
    { tagline: string; title: string; description: string },
    { tagline: string; title: string; description: string }
  ];
  emailPlaceholder: string;
  submitIdle: string;
  submitLoading: string;
  errorDuplicate: string;
  errorGeneric: string;
  successHeading: string;
  successHeadingItalic: string;
  successBody: string;
};

const PERSONA_ICONS: [string, string] = ["✦", "⬡"];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function AiSessionsForm({ t }: { t: AiSessionsTranslations }) {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit() {
    if (!selectedPersona || !isValidEmail(email)) return;
    setStatus("loading");
    setErrorMessage("");

    const payload: EnrollmentInsert = { email: email.trim(), persona: selectedPersona };
    const { error } = await supabase.from("ai_session_enrollments").insert(payload);

    if (error) {
      setStatus("error");
      setErrorMessage(
        error.code === "23505" ? t.errorDuplicate : t.errorGeneric
      );
    } else {
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="mt-8 p-10 md:p-14 bg-surface-light dark:bg-surface-dark border border-[#C9A96E] rounded-2xl text-center flex flex-col items-center gap-4 selected-gold-card">
          <span className="text-5xl">✓</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            {t.successHeading} <span className="italic">{t.successHeadingItalic}</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-md leading-relaxed">
            {t.successBody}
          </p>
        </div>
      </div>
    );
  }

  const personaIds: Persona[] = ["beginner", "professional"];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-8 md:py-12">
      {/* Page header */}
      <section className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest gold-gradient-text">
          {t.badge}
        </span>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.0] mt-2 mb-3">
          {t.heading} — <span className="italic">{t.headingItalic}</span>
        </h1>
        <p className="text-base text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed font-light">
          {t.subtitle}
        </p>
      </section>

      {/* Persona selection */}
      <section className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark mb-3">
          {t.whoAreYou}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.personas.map((p, i) => {
            const id = personaIds[i];
            const isSelected = selectedPersona === id;
            return (
              <button
                key={id}
                onClick={() => setSelectedPersona(id)}
                className={[
                  "text-left rounded-xl p-5 transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "border-2 border-[#C9A96E] selected-gold-card"
                    : "border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-[#C9A96E]",
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={[
                      "text-xl mt-0.5 shrink-0 transition-colors",
                      isSelected
                        ? "text-[#C9A96E]"
                        : "text-text-muted-light dark:text-text-muted-dark",
                    ].join(" ")}
                  >
                    {PERSONA_ICONS[i]}
                  </span>
                  <div>
                    <p
                      className={[
                        "text-xs font-bold uppercase tracking-widest mb-1 transition-colors",
                        isSelected
                          ? "text-[#C9A96E]"
                          : "text-text-muted-light dark:text-text-muted-dark",
                      ].join(" ")}
                    >
                      {p.tagline}
                    </p>
                    <h3 className="text-base font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Email + submit (shown after persona selected) */}
      {selectedPersona && (
        <section className="pt-4">
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="flex-1 px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:border-[#C9A96E] text-base transition-colors"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading" || !isValidEmail(email)}
              className="px-6 py-3 btn-gold rounded-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? t.submitLoading : t.submitIdle}
            </button>
          </div>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errorMessage}</p>
          )}
        </section>
      )}
    </div>
  );
}
