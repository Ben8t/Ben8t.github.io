import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kestractl - Case Study | Benoit",
  description: "A Go-based CLI for managing Kestra flows, executions, and namespaces — designed from scratch and fully agent-coded.",
};

export default function KestractlPage() {
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
          <span>CLI Tool & Go Engineering</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Kestra<span className="italic">ctl</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A production-grade CLI for managing Kestra workflows — designed from command architecture to release pipeline,
          and built end-to-end through agentic coding in Go.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Go", "CLI", "Cobra", "Viper", "Kestra", "Agentic Coding", "Developer Tools"].map((tag) => (
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
            href="https://github.com/kestra-io/kestractl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </header>

      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/kestractl-thumbnail.png"
          alt="kestractl GitHub README"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content sections */}
      <div className="prose-custom space-y-16 md:space-y-24">

        {/* Overview */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Overview</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              kestractl is the official command-line interface for Kestra — the open-source workflow orchestration platform.
              It lets engineers deploy flows, trigger executions, manage namespaces, and synchronize files directly
              from the terminal, without touching the UI.
            </p>
            <p>
              I owned this project end-to-end: from defining which commands to expose, how they should behave,
              and how the configuration system should work, to the overall Go architecture and the release pipeline.
              The implementation itself is a fully agent-coded project — I designed every interface and decision,
              while AI wrote the code under my direction.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">My Role</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Command Design
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Defined the full command surface: which verbs to expose, how flags should compose, how errors
                surface to users, and what the output format should look like for both humans and scripts.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Architecture
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Designed the Go package structure, the configuration resolution strategy (flags → env vars → config file → defaults),
                and the multi-context system that lets engineers switch between development, staging, and production instances.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Agentic Implementation
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Directed AI agents to write all Go code — from Cobra command definitions and Viper config wiring
                to the Kestra Go SDK integration and e2e test suite. Every architectural decision was mine;
                every line of code was generated under that direction.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Release Pipeline
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Set up the full CI/CD pipeline with GoReleaser — cross-platform binaries for macOS, Linux, and Windows,
                a convenience install script, and automated GitHub Releases with changelogs.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Architecture</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The CLI is built around a single principle: minimal abstraction, maximum predictability.
              Operators shouldn&apos;t have to guess what a command will do or why it behaves differently
              in different environments.
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">
                Configuration Resolution Order
              </h3>
              <ol className="space-y-2 text-sm list-none">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">1</span>
                  <span><strong>CLI flags</strong> — highest priority, always wins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">2</span>
                  <span><strong>Environment variables</strong> — <code className="text-xs bg-border-light dark:bg-border-dark px-1 rounded">KESTRACTL_*</code> prefix</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">3</span>
                  <span><strong>Config file</strong> — <code className="text-xs bg-border-light dark:bg-border-dark px-1 rounded">~/.kestractl/config.yaml</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">4</span>
                  <span><strong>Defaults</strong> — sensible fallbacks for local development</span>
                </li>
              </ol>
            </div>

            <p>
              The multi-context system mirrors how kubectl works: engineers maintain named profiles for each
              Kestra environment and switch between them with a single command. No more copy-pasting URLs and tokens.
            </p>
          </div>
        </section>

        {/* Commands */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Command Surface</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">Flows</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                List, retrieve, deploy, and validate workflow definitions. Deploy supports namespace override and
                continues-on-error flags for CI pipelines where partial failures are acceptable.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">Executions</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Trigger flow executions with inputs and optional wait-for-completion. Useful for scripted workflows
                that need to block until a pipeline finishes before the next step runs.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">Namespaces</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                List and query namespaces with filtering — a fast way to inspect how workflows are organized across
                a Kestra instance without opening the UI.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">Namespace Files</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Upload, download, and delete files within namespaces — including recursive directory operations.
                Critical for teams that manage shared SQL, Python scripts, or config files alongside their workflows.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">Config & Contexts</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Add, list, switch, and remove named contexts. Each context holds a Kestra API endpoint and credentials,
                making environment switching a one-liner.
              </p>
            </div>
          </div>
        </section>

        {/* On Agentic Coding */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">On Agentic Coding</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              kestractl is an experiment in what it means to be an engineer when AI writes the code.
              The answer, at least for this project, is that the engineering work shifts — but doesn&apos;t shrink.
            </p>
            <p>
              The hard thinking happened before any code was written: what commands does an operator actually need?
              What&apos;s the right configuration model? Where does the CLI fit in a GitOps workflow?
              How should errors be structured so they&apos;re useful in both interactive and scripted contexts?
            </p>
            <p>
              Those decisions shaped a project that feels intentional rather than assembled. The AI handled
              the Go plumbing — Cobra wiring, Viper bindings, HTTP client setup, test scaffolding.
              I handled the product thinking. The result is a tool I&apos;d actually reach for.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Tech Stack</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong className="text-text-main-light dark:text-text-main-dark">Go</strong> — chosen for its single-binary distribution, fast startup, and excellent CLI ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong className="text-text-main-light dark:text-text-main-dark">Cobra</strong> — the standard Go CLI framework, used by kubectl and Docker</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong className="text-text-main-light dark:text-text-main-dark">Viper</strong> — hierarchical configuration management with env var and file support</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong className="text-text-main-light dark:text-text-main-dark">Kestra Go SDK</strong> — official API client for interacting with Kestra&apos;s REST API</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong className="text-text-main-light dark:text-text-main-dark">GoReleaser</strong> — cross-platform binary builds and automated GitHub Releases</span>
              </li>
            </ul>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Try kestractl</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Open source. One install command.
            </p>
          </div>
          <a
            href="https://github.com/kestra-io/kestractl"
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
