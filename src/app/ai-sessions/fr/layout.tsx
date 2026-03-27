import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions IA — Benoit",
  description:
    "Réservez une session IA gratuite de 30 minutes. Adaptée aux débutants et aux professionnels.",
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
