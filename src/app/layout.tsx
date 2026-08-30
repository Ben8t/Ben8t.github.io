import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pimpaudben.fr"),
  title: "Benoit Pimpaud",
  description: "I build product at Kestra.",
  openGraph: {
    title: "Benoit Pimpaud",
    description: "I build product at Kestra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
