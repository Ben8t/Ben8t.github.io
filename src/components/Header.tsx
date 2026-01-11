"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <header className="w-full px-6 py-8 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* Left: Name and social links */}
        <div className="flex flex-col gap-1">
          <Link href="/" className="font-display text-2xl md:text-3xl font-normal tracking-wide hover:text-primary transition-colors">
            Benoit
          </Link>
          <nav className="flex gap-4 text-xs tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark mt-1 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors ${
                  pathname === link.href
                    ? "text-primary border-b border-primary pb-0.5"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Newsletter link and theme toggle */}
        <div className="flex items-center gap-4">
          {/* Newsletter link */}
          <a
            href="https://fromanengineersight.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 group"
          >
            <span className="font-display italic text-sm text-text-muted-light dark:text-text-muted-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark transition-colors">
              From an Engineer&apos;s Sight
            </span>
            <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </span>
          </a>
          
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-border-light dark:border-border-dark">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg ${
                  pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://fromanengineersight.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-primary"
            >
              Newsletter →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
