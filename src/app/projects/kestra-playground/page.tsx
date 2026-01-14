import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kestra Playground - Case Study | Benoit",
  description: "An iterative workflow development feature enabling developers to build and test workflows one task at a time.",
};

export default function KestraPlaygroundPage() {
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
          <span>Product Design & UX</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Kestra <span className="italic">Playground</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          An iterative workflow development feature enabling developers to build and test workflows one task at a time.
          Reimagining how engineers develop data pipelines.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Product Design", "UX", "Developer Tools", "Workflows", "Kestra"].map((tag) => (
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
            href="https://kestra.io/docs/ui/playground"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Documentation
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/kestra-playground-thumbnail.jpg"
          alt="Kestra Playground overview"
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
              The Kestra Playground emerged from observing a fundamental friction in workflow development:
              developers were forced to repeatedly execute entire workflows just to test a single task.
              This meant waiting for upstream tasks to complete, consuming resources unnecessarily, and
              making the development cycle painfully slow.
            </p>
            <p>
              I conceptualized and led the design of this feature from initial idea through to implementation,
              working closely with the engineering team to create an experience that would fundamentally change
              how developers build data pipelines in Kestra.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">My Role</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Product Conceptualization
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Detailed the core idea and value proposition, identifying the key pain points in workflow
                development and defining how the Playground would solve them.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                UX Direction & Design
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Directed the designer on user experience requirements and visual design direction, ensuring
                the interface clearly communicated the Playground&apos;s iterative development model.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Engineering Coordination
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Organized work with the development team, proposed the first iteration scope, and maintained
                alignment between design intent and technical implementation throughout the project.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Initial Design Proposals
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Created first iteration designs and interaction patterns that would balance power-user
                functionality with approachability for developers new to the platform.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Problem</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Traditional workflow development in orchestration platforms suffers from a critical inefficiency:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Testing a single task requires executing the entire workflow from start to finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Developers waste time waiting for upstream tasks to complete before seeing results</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Resource consumption increases unnecessarily during development iterations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>No way to inspect intermediate outputs without modifying workflow code</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Development logs mixed with production execution history creates confusion</span>
              </li>
            </ul>
            <p>
              This creates a frustrating feedback loop where simple changes require disproportionate time
              and effort to validate. I wanted to eliminate this friction entirely.
            </p>
          </div>
        </section>

        {/* Design Vision */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Design Vision</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The core insight was to treat workflow development more like interactive coding: developers should
              be able to build incrementally, testing each piece before moving on to the next.
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">
                Key Design Principles
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Incremental execution:</strong> Run one task at a time, reusing previous outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Visual clarity:</strong> Make it obvious which tasks have been executed and which are pending</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Execution history:</strong> Preserve recent runs so developers can review earlier outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Clear separation:</strong> Keep playground executions isolated from production logs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Power-user flexibility:</strong> Support batch operations for experienced users</span>
                </li>
              </ul>
            </div>

            <p>
              I directed the design team to emphasize the &quot;play&quot; button as the primary interaction—making
              it instantly clear that this was a space for experimentation and iteration, not production execution.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Features</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Task-by-Task Execution
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Developers can click &quot;Play&quot; on any task to execute just that task, with subsequent tasks
                automatically reusing outputs from previously executed upstream dependencies.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Execution History
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                The system maintains up to 10 recent playground runs, enabling developers to review outputs
                from earlier iterations without re-executing tasks.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Batch Operations
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Advanced options allow users to &quot;Run all tasks&quot; or &quot;Run all downstream tasks&quot; for
                faster validation once individual tasks are working correctly.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                DAG Awareness
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                The playground respects workflow DAG structure, ensuring tasks can only run when their dependencies
                are satisfied—preventing confusing execution errors.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Isolated Execution Context
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Playground runs are kept separate from production execution logs, ensuring developers can experiment
                freely without cluttering operational history.
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
                Why task-by-task instead of full workflow debugging?
              </strong>
              <br />
              Full workflow debugging tools are complex and add cognitive overhead. By focusing on incremental
              execution, we reduced the feature to its essential value proposition: fast iteration on individual tasks.
            </p>
            <p>
              <strong className="text-text-main-light dark:text-text-main-dark">
                Why limit execution history to 10 runs?
              </strong>
              <br />
              Unlimited history creates storage and performance concerns. Ten runs proved sufficient for typical
              development workflows while keeping the implementation pragmatic.
            </p>
            <p>
              <strong className="text-text-main-light dark:text-text-main-dark">
                Why auto-reset on flow-level changes?
              </strong>
              <br />
              Modifying flow-level properties like inputs or variables invalidates previous task runs. Automatic
              reset prevents developers from working with stale or inconsistent state.
            </p>
            <p>
              <strong className="text-text-main-light dark:text-text-main-dark">
                Why separate from production execution logs?
              </strong>
              <br />
              Mixing development iterations with production runs creates confusion and makes operational monitoring
              difficult. Clear separation maintains signal clarity in both contexts.
            </p>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The Playground fundamentally changed how developers build workflows in Kestra. Instead of the
              traditional cycle of edit-save-run-wait-review, developers can now work iteratively, building
              confidence in each task before moving to the next.
            </p>
            <p>
              This feature was released in Kestra 0.24.0 and has become a core part of the platform&apos;s
              development experience. The Playground exemplifies my approach to product design: identifying
              fundamental workflow friction, proposing elegant solutions, and coordinating across design and
              engineering to deliver intuitive, powerful features.
            </p>
          </div>
        </section>

        {/* Technology Context */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technology Context</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Kestra is an open-source orchestration platform for building data pipelines and workflows.
              The Playground feature required coordination across:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong>Frontend:</strong> React-based UI with real-time execution status updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong>Backend:</strong> Java-based orchestration engine with DAG execution logic</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong>Storage:</strong> Execution state management and output caching</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span><strong>API:</strong> REST endpoints for triggering individual task execution</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Interested in the Playground?</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Check out the documentation to see how it works.
            </p>
          </div>
          <a
            href="https://kestra.io/docs/ui/playground"
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
