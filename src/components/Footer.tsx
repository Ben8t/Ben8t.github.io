import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full px-6 py-12 md:px-12 border-t border-border-light dark:border-border-dark mt-auto bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-display text-2xl">Benoit</span>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark max-w-xs">
            Product & Data Engineer<br />
            Based in Paris, France 🇫🇷
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/pimpaudben/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Ben8t"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <Link href="mailto:pimpaudben@gmail.com" className="hover:text-primary transition-colors">
              Email
            </Link>
          </div>
          <div className="text-xs text-text-muted-light dark:text-text-muted-dark font-mono">
            © {new Date().getFullYear()} Benoit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
