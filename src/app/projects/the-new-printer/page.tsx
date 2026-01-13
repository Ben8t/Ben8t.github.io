import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New Printer - Case Study | Benoit",
  description: "A lightweight CLI tool that transforms web articles into print-ready PDFs with magazine-style aesthetic.",
};

export default function TheNewPrinterPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors mb-12"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-wider mb-6">
          <span>2025</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>CLI Tool</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          The New <span className="italic">Printer</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A lightweight CLI tool that transforms web articles into print-ready PDFs with magazine-style aesthetic.
          Because reading on paper just feels better.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Python", "CLI", "LaTeX", "Typography", "Open Source"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-xs font-medium text-text-muted-light dark:text-text-muted-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://github.com/Ben8t/TheNewPrinter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark flex items-center justify-center">
        <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Project Visual</span>
      </div>

      {/* Content sections */}
      <div className="prose-custom space-y-16 md:space-y-24">
        {/* Overview */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Overview</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The New Printer emerged from a simple observation: despite the convenience of digital reading,
              there&apos;s something irreplaceable about engaging with text on paper. It&apos;s slower, more deliberate,
              and allows for a different kind of focus that screens rarely afford.
            </p>
            <p>
              Rather than building yet another read-it-later app or simple PDF generator, I wanted to create
              something that honored the craft of print design. The goal was to transform web articles into
              documents that felt like they belonged in a curated magazine collection—something you&apos;d actually
              want to print, bind, and keep.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Problem</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              As someone who regularly reads blog posts, essays, and newsletters, I found myself constantly
              battling with the limitations of digital reading:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Browser &quot;Print to PDF&quot; features produce poorly formatted, inconsistent results</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Most websites aren&apos;t optimized for print, with navigation, ads, and other clutter</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Generic PDF converters lack the typographic sophistication for comfortable reading</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>No easy way to batch process articles for a curated print collection</span>
              </li>
            </ul>
            <p>
              I wanted a tool that could extract just the content that matters and present it with the same
              care and attention to detail as a professionally designed magazine.
            </p>
          </div>
        </section>

        {/* Technical Approach */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technical Approach</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The system operates through a clean processing pipeline that prioritizes reliability and quality at each stage:
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 font-mono text-sm">
              Web Article → Content Extraction → Markdown → Pandoc → LaTeX → PDF
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Content Extraction</h3>
                <p className="text-sm">
                  Dual-extraction strategy using Trafilatura as the primary engine with Readability as fallback.
                  This maximizes compatibility across diverse website structures.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Document Processing</h3>
                <p className="text-sm">
                  Pandoc handles the conversion from markdown to LaTeX, with custom templates controlling
                  the final styling and layout.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Typography</h3>
                <p className="text-sm">
                  LaTeX&apos;s superior typographic capabilities enable precise control over font rendering,
                  spacing, and layout elegance.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">CLI Interface</h3>
                <p className="text-sm">
                  Built on Click framework, emphasizing simplicity for basic usage while providing
                  advanced options for power users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Features</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Multi-Template System
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Two primary templates serve different reading preferences: a clean article layout and
                a magazine-style two-column format inspired by publications like The New Yorker.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Intelligent Image Handling
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Automatic image optimization for print addresses practical concerns about file sizes
                and print quality without manual intervention.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Batch Processing
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Convert multiple articles simultaneously via URL lists, perfect for creating curated
                collections or processing reading lists.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Flexible Configuration
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                YAML configuration file support (.new-printer.yml) allows customization of defaults
                without modifying each command invocation.
              </p>
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Design Decisions</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              <strong className="text-text-main-light dark:text-text-main-dark">
                Why LaTeX over simpler PDF generators?
              </strong>
              <br />
              While HTML-to-PDF converters are easier to implement, they lack the typographic sophistication
              needed for comfortable long-form reading. LaTeX has been the gold standard for academic and
              professional typesetting for decades, offering unmatched control over layout, spacing, and font rendering.
            </p>
            <p>
              <strong className="text-text-main-light dark:text-text-main-dark">
                Why a CLI tool instead of a web service?
              </strong>
              <br />
              The target audience—developers and technical readers—are already comfortable with command-line tools.
              A CLI also means no server costs, no data privacy concerns, and complete local control over processing.
            </p>
            <p>
              <strong className="text-text-main-light dark:text-text-main-dark">
                Multiple installation methods
              </strong>
              <br />
              Supporting uvx for one-time usage, uv tool install for system-wide access, and traditional pip
              installation ensures the tool is accessible regardless of users&apos; Python environment preferences.
            </p>
          </div>
        </section>

        {/* Results & Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Results & Impact</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The New Printer represents a deliberate counterpoint to digital-native information management.
              It enables a specific workflow: discovering articles online, printing curated selections,
              annotating on paper, and archiving in physical form.
            </p>
            <p>
              The project has found resonance among readers who value physical engagement with long-form content.
              Released as open source under the MIT license, it serves both as a practical tool and as a
              demonstration of how modern automation can enhance rather than replace traditional media experiences.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "Python 3.8+",
              "Pandoc 3.0+",
              "LaTeX / TeX Live",
              "Trafilatura",
              "Readability",
              "Click (CLI)",
              "pytest",
              "Black",
              "MyPy",
              "uv (package manager)"
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Interested in the project?</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Check out the source code and documentation on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Ben8t/TheNewPrinter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
