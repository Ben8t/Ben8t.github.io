import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kestra Notion Plugin - Case Study | Benoit",
  description: "A complete Notion integration for Kestra built end-to-end from Java implementation to QA. Full ownership of plugin development enabling seamless database operations within workflows.",
};

export default function KestraNotionPluginPage() {
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
          <span>Plugin Development</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Kestra <span className="italic">Notion Plugin</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A complete Notion integration for Kestra's workflow orchestration platform. Built end-to-end from Java
          implementation to QA, enabling seamless database operations and content management within workflows.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Java", "Plugin Development", "API Integration", "Kestra", "Notion API", "Quality Assurance"].map((tag) => (
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
            href="https://kestra.io/plugins/plugin-notion/notion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            View Plugin Documentation
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/kestra-notion-plugin-thumbnail.png"
          alt="Kestra Notion Plugin overview"
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
              The Kestra Notion Plugin represents a complete integration between Kestra's workflow orchestration
              platform and Notion's powerful API. Unlike many plugin development projects where I focus on design
              or product direction, this project required full technical ownership—I wrote every line of Java code,
              implemented all API integrations, and conducted comprehensive QA testing.
            </p>
            <p>
              This plugin enables Kestra users to automate Notion operations within their data workflows: creating
              pages from workflow outputs, reading content for processing, updating documentation programmatically,
              and archiving obsolete pages. It bridges the gap between operational workflows and team documentation,
              allowing teams to maintain living documentation that stays synchronized with their data pipelines.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Challenge</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Building a production-grade plugin for Kestra required addressing several technical challenges:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">API Complexity:</strong>
                  {" "}Notion's API has intricate data structures for blocks, pages, and databases. The plugin needed to handle these structures elegantly while remaining intuitive for users
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Type Safety:</strong>
                  {" "}Java's type system required careful modeling of Notion's flexible content structures without sacrificing usability
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Error Handling:</strong>
                  {" "}Robust error handling for network issues, authentication failures, rate limits, and invalid inputs was essential for production reliability
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Documentation Workflows:</strong>
                  {" "}Designing tasks that feel natural within Kestra workflows while leveraging Notion's capabilities required careful API design
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Implementation</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              I implemented the complete plugin in Java, following Kestra's plugin architecture patterns:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Core Tasks</h3>
                <p className="text-sm">
                  Developed four primary tasks: Create (pages from markdown/blocks), Read (retrieve page content),
                  Update (modify existing pages), and Archive (mark pages as archived). Each task is fully documented
                  with examples.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">API Integration</h3>
                <p className="text-sm">
                  Integrated with Notion's REST API, handling authentication, pagination, rate limiting, and
                  error responses. Implemented proper retry logic and timeout handling for production stability.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Data Modeling</h3>
                <p className="text-sm">
                  Created Java models for Notion's block types, page properties, and database schemas. Balanced
                  flexibility with type safety to provide a clean API for workflow authors.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Output Handling</h3>
                <p className="text-sm">
                  Designed task outputs to return useful information (page IDs, URLs, content) that can be used
                  by downstream tasks in workflows, enabling complex automation scenarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plugin Architecture */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Plugin Architecture</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The plugin follows Kestra's task-based architecture, with each operation exposed as a separate task
              that can be composed in workflows:
            </p>

            <div className="space-y-4 mt-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  io.kestra.plugin.notion.page.Create
                </h3>
                <p>
                  Creates Notion pages from markdown content or structured blocks. Supports parent page/database
                  specification, rich property values, and returns the created page ID and URL for downstream use.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  io.kestra.plugin.notion.page.Read
                </h3>
                <p>
                  Retrieves page content as structured data or markdown. Enables workflows to process Notion
                  content, extract information, or sync documentation to other systems.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  io.kestra.plugin.notion.page.Archive
                </h3>
                <p>
                  Archives pages based on workflow conditions. Useful for cleaning up temporary documentation,
                  archiving completed project pages, or maintaining documentation lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Quality Assurance</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Beyond implementing the plugin, I conducted comprehensive QA testing to ensure production readiness:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Functional Testing:</strong>
                  {" "}Verified all tasks work correctly with various page types, content structures, and database configurations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Integration Testing:</strong>
                  {" "}Tested the plugin in real Kestra workflows, ensuring proper task chaining, output handling, and error propagation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Edge Cases:</strong>
                  {" "}Validated behavior with edge cases including empty pages, malformed content, permission issues, and API rate limits
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Documentation Verification:</strong>
                  {" "}Ensured all examples in the documentation work correctly and demonstrate common use cases effectively
                </span>
              </li>
            </ul>

            <p className="mt-6">
              This comprehensive QA process caught several subtle issues before release, including character
              encoding edge cases, timezone handling inconsistencies, and improvements to error messages that
              significantly enhanced the user experience.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Use Cases</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The plugin enables several powerful workflow automation scenarios:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Living Documentation</h3>
                <p className="text-sm">
                  Automatically update Notion pages with pipeline status, data quality metrics, or execution
                  summaries. Keep documentation synchronized with actual workflow state.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Incident Reporting</h3>
                <p className="text-sm">
                  Create Notion pages automatically when workflows fail or detect anomalies, including context,
                  logs, and debugging information for rapid incident response.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Data Cataloging</h3>
                <p className="text-sm">
                  Maintain a Notion database of data assets, automatically updating schemas, lineage information,
                  and quality metrics as workflows process data.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Report Generation</h3>
                <p className="text-sm">
                  Generate formatted reports from workflow outputs, creating structured Notion pages with
                  visualizations, tables, and analysis for stakeholder communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technical Challenges</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Several technical challenges required careful consideration during implementation:
            </p>

            <div className="space-y-4 mt-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Block Structure Complexity
                </h3>
                <p>
                  Notion's block-based content model is highly flexible but complex. I needed to design an API
                  that supports both simple markdown input (for common cases) and full block composition (for
                  advanced scenarios) without overwhelming users.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Authentication Flow
                </h3>
                <p>
                  Implementing secure credential handling within Kestra's secret management system while ensuring
                  the plugin works seamlessly with Notion's OAuth and internal integration tokens required careful
                  design of the authentication layer.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Rate Limit Handling
                </h3>
                <p>
                  Notion's API has rate limits that vary by plan and operation type. The plugin implements
                  intelligent retry logic with exponential backoff, respecting rate limit headers while maintaining
                  workflow reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact & Results</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The Notion plugin expands Kestra's integration ecosystem, enabling users to bridge operational
              workflows with team collaboration tools. It demonstrates:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Full-Stack Capability:</strong>
                  {" "}Complete ownership from Java implementation through QA and documentation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">API Integration Expertise:</strong>
                  {" "}Deep understanding of REST API design, authentication patterns, and error handling
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Quality Focus:</strong>
                  {" "}Thorough testing and documentation ensuring production-ready software
                </span>
              </li>
            </ul>

            <p className="mt-6">
              The plugin is now certified within Kestra's plugin ecosystem and available for all users,
              with comprehensive documentation and examples demonstrating common automation patterns.
            </p>
          </div>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Learnings</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Building this plugin end-to-end provided valuable technical insights:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">API Design Trade-offs:</strong>
                  {" "}Balancing simplicity for common cases with power for advanced scenarios requires careful API design and progressive disclosure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Error Messages Matter:</strong>
                  {" "}Investing time in clear, actionable error messages significantly improves the developer experience when things go wrong
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Testing Depth:</strong>
                  {" "}Comprehensive QA uncovered edge cases that wouldn't have been found through basic testing, preventing production issues
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Documentation is Code:</strong>
                  {" "}Well-documented examples are as important as the implementation—they define the user experience
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Try the plugin</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Explore the complete documentation and examples to start automating Notion in your workflows.
            </p>
          </div>
          <a
            href="https://kestra.io/plugins/plugin-notion/notion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            View Plugin Docs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
