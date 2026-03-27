import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kestra Agent Skills - Case Study | Benoit",
  description: "The official Kestra agent skills for Claude Code — enabling AI agents to migrate tools to Kestra, deploy flows, automate QA, and drive product workflows from natural language.",
};

export default function KestraAgentSkillsPage() {
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
          <span>2026</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>AI & Developer Tools</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Kestra <span className="italic">Agent Skills</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          The official Claude Code skills for Kestra — letting AI agents deploy flows, migrate tools,
          run QA, and automate product workflows entirely through natural language.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["AI", "Claude Code", "Kestra", "Agentic Coding", "Developer Tools", "Workflow Automation"].map((tag) => (
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
            href="https://kestra.io/docs/ai-tools/agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Documentation
          </a>
        </div>
      </header>

      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/kestra-agent-skills-thumbnail.png"
          alt="Kestra Agent Skills"
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
              Kestra Agent Skills are the official Claude Code integration for Kestra — the open-source
              workflow orchestration platform. They give AI agents a structured, reliable interface to
              interact with Kestra: deploying flows, reading namespace files, triggering executions,
              and navigating the full platform surface through natural language.
            </p>
            <p>
              I wrote the skills, created the official Kestra repository, and battle-tested them across
              a wide range of real-world use cases. The result is a set of capabilities that make Kestra
              genuinely usable from an agentic context — not just as a tool to query, but as an environment
              to reason about and operate autonomously.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Battle-Tested Use Cases</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Tool Migration to Kestra
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Agents can take existing automation scripts, Airflow DAGs, or ad-hoc pipelines and
                migrate them into idiomatic Kestra flows — preserving logic, mapping to the right
                plugins, and deploying in a single session.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Flow Deployment
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Write a flow description in plain language and let the agent generate, validate, and
                deploy it to the right namespace — without touching the UI or running any CLI commands manually.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                QA Automation
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Agents can trigger executions, monitor their status, inspect logs and outputs, and
                surface failures with context — closing the feedback loop between development and validation
                without human intervention at each step.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Product Automation
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Internal product workflows — content pipelines, data syncs, scheduled reports — can be
                built, deployed, and iterated on entirely through conversation, accelerating the path
                from idea to running workflow.
              </p>
            </div>
          </div>
        </section>

        {/* What the Skills Expose */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">What the Skills Expose</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The skills wrap Kestra&apos;s core API surface into agent-friendly operations that compose naturally:
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 mt-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-text-main-light dark:text-text-main-dark">Flow management</strong> — list, retrieve, create, update, and deploy flows across namespaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-text-main-light dark:text-text-main-dark">Execution control</strong> — trigger executions with inputs, wait for completion, inspect outputs and logs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-text-main-light dark:text-text-main-dark">Namespace files</strong> — read, upload, and manage scripts and config files stored alongside flows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-text-main-light dark:text-text-main-dark">Plugin discovery</strong> — query available plugins and their task schemas to generate valid flow YAML</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Design Philosophy</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Building agent skills is a different discipline than building APIs or CLIs. The interface isn&apos;t
              consumed by a human reading docs — it&apos;s consumed by a language model reasoning about what to do next.
              That shifts the design constraints entirely.
            </p>
            <p>
              Each skill was designed to minimize ambiguity: clear names, predictable outputs, and enough context
              in responses for the agent to reason correctly without needing to ask follow-up questions.
              Error messages are written to be interpretable by an LLM, not just a human.
            </p>
            <p>
              The test for a good skill isn&apos;t whether a developer can use it — it&apos;s whether an agent can
              complete a real task end-to-end without getting stuck. Every use case I tested pushed that boundary
              further, and the skills evolved with each round.
            </p>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Try Kestra Agent Skills</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Official documentation and setup guide.
            </p>
          </div>
          <a
            href="https://kestra.io/docs/ai-tools/agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            View Documentation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
