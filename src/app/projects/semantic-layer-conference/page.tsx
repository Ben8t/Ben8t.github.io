import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL is not designed for analytics - Conference Talk | Benoit",
  description: "A conference presentation challenging conventional wisdom about SQL for analytics, exploring the shift from Text-to-SQL to Text-to-Semantic Layer.",
};

export default function SemanticLayerConferencePage() {
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
          <span>Conference & Thought Leadership</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          SQL is not <span className="italic">designed for analytics</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A conference talk challenging conventional wisdom about SQL for analytics, presented to 300+ data professionals.
          Exploring the paradigm shift from Text-to-SQL toward the emerging Text-to-Semantic Layer era.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Public Speaking", "Data Analytics", "Thought Leadership", "Semantic Layer", "AI/LLM"].map((tag) => (
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
            href="https://fromanengineersight.substack.com/p/what-syntax-for-the-semantic-layer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            Read the Blog Post
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/semantic-layer-conference-thumbnail.png"
          alt="Semantic Layer conference presentation"
          fill
          className="object-cover"
        />
      </div>

      {/* Content sections */}
      <div className="prose-custom space-y-16 md:space-y-24">
        {/* Overview */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Talk</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Getting on stage with my &quot;SQL is not designed for analytics&quot; hot take in front of 300 people
              was stressful. But I felt validated when several C-levels, data influencers, and industry veterans
              came by to congratulate me, relate to my story, and share that they learned something new.
            </p>
            <p>
              The presentation challenged a fundamental assumption in the data industry: that SQL, designed for
              transactional database operations, is the right tool for analytical workloads. I argued that while
              SQL has been adapted for analytics, it wasn&apos;t originally designed for this purpose, and we&apos;re
              seeing the limitations of this approach as data complexity grows.
            </p>
          </div>
        </section>

        {/* The Core Argument */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Core Argument</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              SQL was created in the 1970s for managing structured data in relational databases, optimized for
              transactional consistency and data integrity. Analytical workloads have fundamentally different requirements:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Context is Missing:</strong>
                  {" "}SQL queries don&apos;t carry the business context needed to understand what data means
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Semantic Understanding:</strong>
                  {" "}Analytics requires understanding relationships, hierarchies, and business logic that SQL alone can&apos;t express
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">LLM Limitations:</strong>
                  {" "}When you dump tons of tables and queries on a new recruit, they won&apos;t understand anything without context. The same applies to LLMs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">The Abstraction Gap:</strong>
                  {" "}We need a semantic layer that bridges the gap between raw data and business understanding
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Paradigm Shift */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Paradigm Shift</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The after-talk discussions revealed a palpable sense that we&apos;re all experiencing FOMO around
              a new paradigm: <strong className="text-text-main-light dark:text-text-main-dark">Text-to-SQL is fading,
              and we&apos;re moving toward the &quot;Text-to-Semantic Layer&quot; era.</strong>
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-4 text-lg">
                From Text-to-SQL to Text-to-Semantic Layer
              </h3>
              <p className="text-sm mb-4">
                The industry is recognizing that generating SQL queries from natural language isn&apos;t enough.
                What we need is a semantic layer that understands business concepts, relationships, and context,
                enabling both humans and AI to interact with data at a higher level of abstraction.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Voices */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Industry Voices & Validation</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The conference brought together thought leaders who validated and expanded on these ideas:
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Arnaud de Turckheim (CastorDoc)
                </h3>
                <p>
                  Highlighted a crucial insight: &quot;If you dump tons of tables and queries on a new recruit,
                  he won&apos;t understand anything without context. The same applies to LLM.&quot; This perfectly
                  captures why we need semantic layers—context is everything in data understanding.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  David Jayatillake (Cube)
                </h3>
                <p>
                  Gave a terrific talk about &quot;Text to Semantic Layer&quot; that shared common ground with
                  my presentation. It was validating to see multiple speakers converging on the same fundamental
                  shift in how we think about data interaction.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Ethan Ding (TextQL)
                </h3>
                <p>
                  Recent pivot toward semantic layers demonstrates the market recognizing this shift. The evolution
                  from pure SQL generation to semantic understanding reflects where the industry is heading.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emerging Solutions */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Emerging Solutions</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Looker&apos;s spiritual successors are emerging, bringing semantic layer concepts to the forefront:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Malloy</h3>
                <p className="text-sm">
                  An open-source project at Meta led by Lloyd Tabb, bringing semantic modeling to data exploration
                  and analytics. Malloy represents a new approach to data querying that prioritizes business logic
                  and relationships.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Omni</h3>
                <p className="text-sm">
                  Developed by the ex-Looker team, continuing the semantic layer vision that made Looker powerful.
                  These tools are proving that semantic layers aren&apos;t just nice-to-have—they&apos;re essential
                  for modern analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Aftermath */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Aftermath</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The conversations after the talk were amazing. There&apos;s a sense that we&apos;re at an inflection
              point—still in the &quot;evangelism&quot; phase, with the solution landscape remaining blurry. But
              the convergence of ideas from multiple speakers and the validation from industry leaders convinced
              me that things would unfold soon.
            </p>
            <p>
              The fact that C-level executives, data influencers, and industry veterans took the time to engage
              with these ideas—sharing their own experiences and acknowledging they learned something new—signals
              that this isn&apos;t just academic discussion. It&apos;s a real shift happening in how we approach
              data analytics.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Takeaways</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">SQL has limitations for analytics:</strong>
                  {" "}While powerful, SQL wasn&apos;t designed for the semantic understanding required in modern analytics
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Context is critical:</strong>
                  {" "}Both humans and LLMs need semantic context to understand data, not just raw tables and queries
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">The industry is shifting:</strong>
                  {" "}From Text-to-SQL toward Text-to-Semantic Layer, with multiple companies and projects converging on this vision
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">We&apos;re in the early days:</strong>
                  {" "}The solution landscape is still forming, but the direction is clear and momentum is building
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Personal Reflection */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Personal Reflection</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Presenting a contrarian viewpoint to 300 people was nerve-wracking, but the response validated
              that these ideas resonate with the data community. The fact that industry veterans and C-levels
              engaged deeply with the topic—not just politely, but with genuine interest and shared experiences—showed
              that we&apos;re touching on something fundamental.
            </p>
            <p>
              The convergence of multiple speakers on similar themes, the emergence of new tools, and the thoughtful
              discussions afterward all point to a moment of transition. We&apos;re moving from treating SQL as
              the universal language of data toward recognizing that analytics requires semantic understanding
              that goes beyond syntax.
            </p>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Want to dive deeper?</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Read the full blog post exploring the syntax and design of semantic layers.
            </p>
          </div>
          <a
            href="https://fromanengineersight.substack.com/p/what-syntax-for-the-semantic-layer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Read the Blog Post
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
