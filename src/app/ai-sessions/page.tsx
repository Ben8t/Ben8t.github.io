import AiSessionsForm from "@/components/AiSessionsForm";
import type { AiSessionsTranslations } from "@/components/AiSessionsForm";

const en: AiSessionsTranslations = {
  badge: "Free Session",
  heading: "AI Sessions",
  headingItalic: "first 30 minutes free",
  subtitle: "Focused sessions tailored to where you are — pick your profile below.",
  whoAreYou: "Who are you?",
  personas: [
    {
      tagline: "Discover what's possible",
      title: "New to AI",
      description:
        "Discover daily automation, boost personal and professional projects — no technical background needed.",
    },
    {
      tagline: "Go deeper, go faster",
      title: "AI Professional",
      description:
        "Discuss latest developments, how teams ship AI at scale, and best practices from inside a Series A startup.",
    },
  ],
  emailPlaceholder: "your@email.com",
  submitIdle: "Book my free session →",
  submitLoading: "Booking…",
  errorDuplicate: "You're already signed up — I'll be in touch soon.",
  errorGeneric: "Something went wrong. Please try again.",
  successHeading: "You're",
  successHeadingItalic: "in.",
  successBody: "I'll reach out within 48 hours to schedule your free 30-minute session.",
};

export default function AiSessionsPage() {
  return <AiSessionsForm t={en} />;
}
