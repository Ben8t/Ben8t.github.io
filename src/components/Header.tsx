"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 md:px-12">
        {/* Left: brand + nav */}
        <div className="flex items-center gap-5 md:gap-9">
          <Link
            href="/"
            className="font-display text-2xl tracking-wide text-text-main-dark transition-opacity hover:opacity-80"
          >
            Benoit<span className="text-accent">.</span>
          </Link>
          <nav className="flex gap-4 md:gap-6 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted-dark">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-text-main-dark ${
                  pathname === link.href ? "text-text-main-dark" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: newsletter */}
        <a
          href="https://fromanengineersight.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3"
        >
          <span className="hidden font-display italic text-sm text-text-muted-dark transition-colors group-hover:text-text-main-dark md:inline">
            From an Engineer&apos;s Sight
          </span>
          <span className="whitespace-nowrap rounded-full border border-border-dark px-4 py-1.5 text-xs tracking-wide text-text-main-dark transition-colors group-hover:border-accent group-hover:text-accent">
            Subscribe
          </span>
        </a>
      </div>
    </header>
  );
}
