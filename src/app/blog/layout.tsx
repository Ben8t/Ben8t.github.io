import { Libre_Baskerville, Pinyon_Script } from "next/font/google";
import { Paper } from "./Paper";
import "./blog.css";

/*
 * The one place on the site with web fonts. next/font downloads them at build
 * time and serves them from our own origin, and only /blog pages load them.
 */

const serif = Libre_Baskerville({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const script = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`blog ${serif.variable} ${script.variable}`}>
      {children}
      <Paper />
    </div>
  );
}
