import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kestra Governance Assets - Case Study | Benoit",
  description: "A comprehensive data governance feature for tracking lineage and metadata of workflow resources. End-to-end product leadership from concept to client delivery.",
};

export default function KestraGovernanceAssetsPage() {
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
          <span>Product Design & Engineering</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Kestra <span className="italic">Governance Assets</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A comprehensive data governance feature enabling enterprises to track lineage and metadata of resources
          created and used by workflows. Complete product leadership from concept to client delivery.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Product Design", "DSL Design", "Enterprise Software", "Data Governance", "Product Management"].map((tag) => (
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
            href="https://kestra.io/docs/enterprise/governance/assets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            View Documentation
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/kestra-governance-assets-thumbnail.jpg"
          alt="Kestra Governance Assets feature overview"
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
              Governance Assets represents one of the most significant enterprise features added to Kestra,
              addressing a critical need for data governance in modern data orchestration platforms. As enterprises
              scale their data operations, understanding what resources workflows create, modify, and consume becomes
              essential for compliance, auditing, and operational visibility.
            </p>
            <p>
              This project required end-to-end product leadership: from initial concept and user research, through
              design and DSL specification, to engineering coordination, QA, and client presentations. I owned every
              aspect of the product development lifecycle, ensuring the feature met both technical requirements and
              enterprise customer needs.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Challenge</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Enterprise customers managing complex data pipelines needed visibility into:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Data Lineage:</strong>
                  {" "}Understanding how data flows through workflows and what downstream resources depend on upstream outputs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Resource Tracking:</strong>
                  {" "}Knowing which workflows create, modify, or consume specific data assets, tables, files, or services
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Metadata Management:</strong>
                  {" "}Attaching rich metadata to resources for documentation, compliance, and discovery
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Impact Analysis:</strong>
                  {" "}Identifying which workflows would be affected by changes to upstream data sources
                </span>
              </li>
            </ul>
            <p>
              The solution needed to integrate seamlessly with Kestra&apos;s declarative workflow DSL while providing
              powerful governance capabilities that enterprise customers expect from modern data platforms.
            </p>
          </div>
        </section>

        {/* Product Leadership */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Product Leadership & Design</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              As the product owner, I led this feature from initial concept through delivery:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Concept & Research</h3>
                <p className="text-sm">
                  Conducted user interviews with enterprise customers to understand governance pain points,
                  analyzed competitive solutions, and defined the product vision and requirements.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">DSL Design</h3>
                <p className="text-sm">
                  Designed the declarative syntax for asset declaration, ensuring it felt natural within
                  Kestra&apos;s workflow language while remaining powerful and flexible.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">UI/UX Design</h3>
                <p className="text-sm">
                  Created the interface for visualizing asset lineage, browsing metadata, and understanding
                  resource relationships across workflows.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Specifications</h3>
                <p className="text-sm">
                  Wrote detailed technical specifications covering API design, data models, storage requirements,
                  and integration points with existing Kestra infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DSL Design */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">DSL Design</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              One of the most critical aspects was designing a DSL that felt natural within Kestra workflows
              while providing the expressiveness needed for complex governance scenarios:
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 font-mono text-sm mt-6 overflow-x-auto">
              <pre className="whitespace-pre-wrap">
{`id: data_pipeline_assets
namespace: kestra.company.data

tasks:
  - id: create_staging_layer_asset
    type: io.kestra.plugin.jdbc.duckdb.Query
    sql: |
      CREATE TABLE IF NOT EXISTS trips AS
      select VendorID, passenger_count, trip_distance from sample_data.nyc.taxi limit 10;
    assets:
      inputs:
        - id: sample_data.nyc.taxi
      outputs:
          - id: trips
            namespace: "{{flow.namespace}}"
            type: io.kestra.plugin.ee.assets.Table
            metadata:
              model_layer: staging

  - id: for_each
    type: io.kestra.plugin.core.flow.ForEach
    values:
      - passenger_count
      - trip_distance
    tasks:
      - id: create_mart_layer_asset
        type: io.kestra.plugin.jdbc.duckdb.Query
        sql: SELECT AVG({{taskrun.value}}) AS avg_{{taskrun.value}} FROM trips;
        assets:
          inputs:
              - id: trips
          outputs:
              - id: avg_{{taskrun.value}}
                type: io.kestra.plugin.ee.assets.Table
                namespace: "{{flow.namespace}}"
                metadata:
                  model_layer: mart
pluginDefaults:
  - type: io.kestra.plugin.jdbc.duckdb
    values:
      url: "jdbc:duckdb:md:my_db?motherduck_token={{ secret('MOTHERDUCK_TOKEN') }}"
      fetchType: STORE`}
              </pre>
            </div>

            <p className="mt-6">
              This example demonstrates a complete data pipeline with asset tracking across multiple layers:
              staging tables created from source data, and mart layer aggregations built from staging assets.
              The DSL supports dynamic asset IDs (using template variables), metadata attachment for documentation
              (like <code className="text-xs bg-surface-light dark:bg-surface-dark px-1 py-0.5 rounded">model_layer</code>),
              and clear lineage tracking through inputs and outputs. The design prioritizes clarity and discoverability
              while maintaining the declarative philosophy of Kestra workflows.
            </p>
          </div>
        </section>

        {/* Engineering Coordination */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Engineering Coordination</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Working closely with the engineering team, I coordinated:
            </p>

            <div className="space-y-4 mt-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Architecture Planning
                </h3>
                <p>
                  Designed the data model for asset storage, lineage graph representation, and metadata schema.
                  Ensured scalability for enterprise-scale deployments with thousands of workflows and assets.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  API Design
                </h3>
                <p>
                  Specified REST APIs for asset CRUD operations, lineage queries, and metadata management,
                  ensuring consistency with Kestra&apos;s existing API patterns.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Integration Points
                </h3>
                <p>
                  Defined how assets integrate with workflow execution, task outputs, and the broader Kestra
                  platform ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Quality Assurance & Testing</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              I led comprehensive QA efforts to ensure the feature met enterprise-grade quality standards:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Functional Testing:</strong>
                  {" "}Validated all asset operations, lineage tracking, and metadata management across various scenarios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Performance Testing:</strong>
                  {" "}Ensured lineage queries and asset lookups perform efficiently at scale
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Edge Cases:</strong>
                  {" "}Tested complex scenarios including circular dependencies, orphaned assets, and concurrent modifications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">User Acceptance:</strong>
                  {" "}Coordinated beta testing with select enterprise customers to gather feedback before general availability
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Client Presentations */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Client Presentations & Adoption</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              I presented the Governance Assets feature to enterprise customers, demonstrating:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Value Proposition</h3>
                <p className="text-sm">
                  Showed how the feature addresses compliance requirements, improves operational visibility,
                  and enables better data governance practices.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Live Demonstrations</h3>
                <p className="text-sm">
                  Walked through real-world use cases, showing asset declaration, lineage visualization,
                  and metadata management in action.
                </p>
              </div>
            </div>

            <p className="mt-6">
              The feature received strong positive feedback from enterprise customers, with several adopting
              it immediately upon release. The presentations helped refine the feature based on real-world
              requirements and use cases.
            </p>
          </div>
        </section>

        {/* Organization & Planning */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Organization & Planning</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Managing a feature of this scope required careful planning and coordination:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Roadmap Planning:</strong>
                  {" "}Broken down the feature into manageable phases, prioritizing core functionality before advanced features
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Sprint Coordination:</strong>
                  {" "}Worked with engineering teams to plan sprints, manage dependencies, and ensure timely delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Stakeholder Management:</strong>
                  {" "}Regular updates to leadership and sales teams on progress, timelines, and customer feedback
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Documentation:</strong>
                  {" "}Created comprehensive documentation, examples, and migration guides for users and customers
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact & Results</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Governance Assets became a key differentiator for Kestra in enterprise sales conversations,
              addressing a critical gap in the data orchestration market. The feature enables:
            </p>

            <div className="space-y-4 mt-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Compliance & Auditing
                </h3>
                <p>
                  Enterprises can now track data lineage for regulatory compliance, understand data provenance,
                  and maintain audit trails of resource usage across workflows.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Operational Excellence
                </h3>
                <p>
                  Teams can quickly identify which workflows depend on specific data sources, enabling faster
                  incident response and impact analysis for changes.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Data Discovery
                </h3>
                <p>
                  Rich metadata and lineage visualization help data teams discover available resources,
                  understand relationships, and make informed decisions about data usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Learnings</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Leading this project end-to-end provided valuable insights into product development at scale:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">DSL Design Matters:</strong>
                  {" "}The declarative syntax needed to feel intuitive while remaining powerful—this required multiple
                  iterations and user feedback cycles
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Enterprise Requirements:</strong>
                  {" "}Understanding the specific governance needs of enterprise customers was crucial—generic solutions
                  wouldn&apos;t have sufficed
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Cross-Functional Leadership:</strong>
                  {" "}Successfully coordinating design, engineering, QA, and customer success required clear communication
                  and shared vision
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">User-Centric Design:</strong>
                  {" "}Presenting to customers early and often helped validate assumptions and refine the feature
                  before full release
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
            <h3 className="font-display text-2xl mb-2">Explore the feature</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Read the complete documentation and learn how to use Governance Assets in your workflows.
            </p>
          </div>
          <a
            href="https://kestra.io/docs/enterprise/governance/assets"
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
