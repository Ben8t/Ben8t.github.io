import AiSessionsForm from "@/components/AiSessionsForm";
import type { AiSessionsTranslations } from "@/components/AiSessionsForm";

const fr: AiSessionsTranslations = {
  badge: "Séance Gratuite",
  heading: "Sessions IA",
  headingItalic: "30 premières minutes offertes",
  subtitle: "Des sessions adaptées à votre profil — choisissez ci-dessous.",
  whoAreYou: "Qui êtes-vous ?",
  personas: [
    {
      tagline: "Découvrez ce qui est possible",
      title: "Nouveau dans l'IA",
      description:
        "Automatisez votre quotidien, boostez vos projets pro et perso — aucune compétence technique requise.",
    },
    {
      tagline: "Allez plus loin, plus vite",
      title: "Professionnel de l'IA",
      description:
        "Discutez des dernières actualités, de la mise en prod à grande échelle et des meilleures pratiques dans une startup Série A.",
    },
  ],
  emailPlaceholder: "votre@email.com",
  submitIdle: "Réserver ma session gratuite →",
  submitLoading: "Réservation…",
  errorDuplicate: "Vous êtes déjà inscrit — je vous contacterai bientôt.",
  errorGeneric: "Une erreur s'est produite. Veuillez réessayer.",
  successHeading: "C'est",
  successHeadingItalic: "noté.",
  successBody:
    "Je vous contacterai dans les 48h pour planifier votre session gratuite de 30 minutes.",
};

export default function AiSessionsFrPage() {
  return <AiSessionsForm t={fr} />;
}
