import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-border-dark px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-display text-xl">
            Benoit<span className="text-accent">.</span>
          </span>
          <span className="text-xs text-text-muted-dark">
            © {new Date().getFullYear()} — Beyond engineering.
          </span>
        </div>

        <div className="flex gap-6 text-[11px] uppercase tracking-[0.18em] text-text-muted-dark">
          <a
            href="https://www.linkedin.com/in/pimpaudben/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text-main-dark"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ben8t"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text-main-dark"
          >
            GitHub
          </a>
          <Link
            href="mailto:pimpaudben@gmail.com"
            className="transition-colors hover:text-text-main-dark"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
