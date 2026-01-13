import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gotta Grid'em All - Case Study | Benoit",
  description: "Exploring how strategic gridline design can enhance chart comprehension and reveal data relationships.",
};

export default function GottaGridemAllPage() {
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
          <span>2024</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Data Visualization</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Gotta <span className="italic">Grid&apos;em All</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          How strategic gridline design can transform chart comprehension by revealing hidden data relationships
          and providing meaningful context at a glance.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Data Visualization", "Design", "Python", "Matplotlib", "Typography"].map((tag) => (
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
            href="https://fromanengineersight.substack.com/p/gotta-gridem-all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            Read on Substack
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/gotta-gridem-all-thumbnail.png"
          alt="Gotta Grid'em All project overview"
          fill
          className="object-cover"
        />
      </div>

      {/* Content sections */}
      <div className="prose-custom space-y-16 md:space-y-24">
        {/* Overview */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Overview</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Data visualization is often approached as a technical exercise: plot the data, add axes,
              maybe throw in some gridlines, and call it done. But the most effective visualizations
              go beyond mere accuracy—they guide the viewer&apos;s attention and reveal patterns that
              raw data alone cannot communicate.
            </p>
            <p>
              This project explores a deceptively simple question: what if we rethought the humble gridline?
              Instead of the standard horizontal and vertical lines that serve as mere measurement aids,
              what if background patterns could themselves encode meaning and highlight relationships within the data?
            </p>
          </div>
        </section>

        {/* The Concept */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Concept</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Traditional gridlines serve a single purpose: helping viewers estimate values along each axis.
              They&apos;re utilitarian—functional but uninspired. Yet the background of a chart represents
              valuable real estate that could communicate more than just measurement scales.
            </p>
            <p>
              The core insight is that <strong className="text-text-main-light dark:text-text-main-dark">
              gridline orientation and distribution can highlight meaningful data relationships</strong>.
              Rather than defaulting to perpendicular lines aligned with axes, we can strategically
              position lines to represent:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Aggregate metrics (like sums or ratios of two variables)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Percentile groupings or statistical bands</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Natural clustering boundaries in the data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Domain-specific thresholds or reference points</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Case Study: Pokémon Stats */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Case Study: Pokémon Battle Stats</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              To demonstrate this approach, I analyzed Pokémon battle statistics—specifically the
              relationship between Attack and Defense values across different Pokémon species.
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3 text-lg">
                The Standard Approach
              </h3>
              <p className="text-sm">
                A conventional scatter plot with standard horizontal/vertical gridlines shows the
                distribution but requires mental arithmetic to identify Pokémon with similar total
                combat stats (Attack + Defense).
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3 text-lg">
                The Enhanced Approach
              </h3>
              <p className="text-sm mb-4">
                By replacing vertical/horizontal lines with diagonal parallel lines representing
                constant Attack+Defense sums, the chart immediately reveals power tiers. Pokémon
                falling along the same diagonal line share similar total combat stats, making it
                trivial to identify balanced fighters versus specialized attackers or defenders.
              </p>
              <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark">
                Result: Viewers can instantly grasp both individual stats AND aggregate power level
                without additional cognitive load.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technical Implementation</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The approach translates cleanly into Python using Matplotlib, where custom gridline
              generation offers precise control over positioning and styling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Line Distribution</h3>
                <p className="text-sm">
                  Lines can be distributed using regular intervals, percentiles, or domain-specific
                  clustering. Percentile-based distribution ensures even visual density across
                  the data range.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Visual Hierarchy</h3>
                <p className="text-sm">
                  Subtle styling—muted colors, low opacity, fine line weights—ensures gridlines
                  support rather than dominate the data. The background should guide, not distract.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Contextual Labeling</h3>
                <p className="text-sm">
                  Strategic annotation of key gridlines helps viewers understand what the patterns
                  represent without requiring deep analysis or legend consultation.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Matplotlib Integration</h3>
                <p className="text-sm">
                  Custom gridline generation integrates seamlessly with existing plotting workflows,
                  requiring minimal code changes to adopt the technique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Design Principles</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Encode Meaning, Not Just Measurement
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Every visual element should serve a purpose beyond decoration. If gridlines can reveal
                relationships, they become analytical tools rather than passive reference marks.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Reduce Cognitive Load
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Effective visualization minimizes the mental effort required to extract insights.
                Strategic gridlines allow patterns to emerge naturally without forcing viewers to
                perform calculations or comparisons manually.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Context Over Precision
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Not every chart needs to support precise value reading. When the goal is understanding
                relationships, patterns, or distributions, contextual gridlines can be more valuable
                than measurement accuracy.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Subtlety is Strength
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                The best gridlines fade into the background until needed. They should guide attention
                without demanding it, supporting the data story rather than competing for focus.
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Practical Applications</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              This approach extends beyond Pokémon stats to any bivariate analysis where aggregate
              metrics or relationships matter:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Financial Analysis:</strong>
                  {" "}Revenue vs. costs with iso-profit lines revealing margin bands
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Performance Metrics:</strong>
                  {" "}Speed vs. accuracy trade-offs with iso-performance curves
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Resource Allocation:</strong>
                  {" "}Time vs. cost with iso-budget lines showing feasible combinations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Scientific Data:</strong>
                  {" "}Any X-Y relationship where sum, ratio, or product has domain significance
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Impact & Insights */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact & Insights</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              This exploration reinforces a fundamental principle: <strong className="text-text-main-light dark:text-text-main-dark">
              effective visualization is about thoughtful design choices, not just technical execution</strong>.
              The same data can tell dramatically different stories depending on how we choose to frame it.
            </p>
            <p>
              By questioning default conventions—like standard perpendicular gridlines—we open up
              opportunities to create more insightful, contextual visualizations. The technique is
              simple to implement yet powerful in impact, requiring no specialized tools or complex
              algorithms.
            </p>
            <p>
              The positive response from the data visualization community on Substack confirmed that
              even experienced practitioners appreciate fresh perspectives on foundational elements.
              Sometimes the most impactful innovations come from rethinking the basics rather than
              chasing complexity.
            </p>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "Python",
              "Matplotlib",
              "NumPy",
              "Pandas",
              "Seaborn",
              "Jupyter Notebooks"
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
            <h3 className="font-display text-2xl mb-2">Interested in the full article?</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Read the complete case study with code examples on Substack.
            </p>
          </div>
          <a
            href="https://fromanengineersight.substack.com/p/gotta-gridem-all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Read on Substack
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
