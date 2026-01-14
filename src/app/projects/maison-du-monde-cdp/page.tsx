import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison du Monde CDP - Case Study | Benoit",
  description: "A Customer Data Platform built on BigQuery and Airflow, enabling ML-powered audience segmentation for acquisition and CRM campaigns.",
};

export default function MaisonDuMondeCDPPage() {
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
          <span>2019-2020</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Data Engineering & Marketing Technology</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Customer Data <span className="italic">Platform</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A comprehensive Customer Data Platform built on BigQuery and Airflow, enabling ML-powered audience
          segmentation for acquisition and CRM teams. Transforming customer data into actionable marketing segments.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["BigQuery", "Airflow", "GCP", "Machine Learning", "CDP", "Data Engineering"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-xs font-medium text-text-muted-light dark:text-text-muted-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/maison-du-monde-cdp-thumbnail.jpg"
          alt="Maison du Monde Customer Data Platform"
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
              In the competitive e-commerce landscape, understanding and activating customer data is crucial for
              effective marketing. Maison du Monde needed a unified Customer Data Platform (CDP) to consolidate
              customer information from multiple sources, create intelligent audience segments, and activate them
              across acquisition and CRM channels.
            </p>
            <p>
              This project built a complete CDP infrastructure on Google Cloud Platform, leveraging BigQuery for
              data storage and transformation, Airflow for orchestration, and machine learning models for intelligent
              audience segmentation. The platform enabled marketing teams to select pre-defined segments and push
              them directly to advertising platforms like Facebook Ads, Google Ads, Criteo, and CRM systems.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Architecture</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The CDP was built on a modern data stack with three main layers:
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 font-mono text-sm mt-6">
              <div className="space-y-3">
                <div className="text-primary">Data Sources (BigQuery)</div>
                <div className="pl-4">↓</div>
                <div className="text-primary">Airflow Orchestration</div>
                <div className="pl-4">↓</div>
                <div className="text-primary">Data Transformation & ML Models</div>
                <div className="pl-4">↓</div>
                <div className="text-primary">CDP Segments (BigQuery Tables)</div>
                <div className="pl-4">↓</div>
                <div className="text-primary">Activation Platforms</div>
                <div className="pl-8">• Facebook Ads</div>
                <div className="pl-8">• Google Ads</div>
                <div className="pl-8">• Criteo</div>
                <div className="pl-8">• CRM (Selligent)</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Data Ingestion</h3>
                <p className="text-sm">
                  All customer data was consolidated in BigQuery from various sources: e-commerce transactions,
                  website interactions, customer service interactions, and marketing touchpoints. Airflow orchestrated
                  the ingestion pipelines to ensure data freshness and reliability.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Data Transformation</h3>
                <p className="text-sm">
                  Complex SQL transformations in BigQuery cleaned, enriched, and unified customer profiles. Data
                  was processed to create a single source of truth for customer attributes, behaviors, and preferences.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">ML-Powered Segmentation</h3>
                <p className="text-sm">
                  Machine learning models analyzed customer behavior patterns to create intelligent segments:
                  purchase propensity, churn risk, product affinity, lifetime value predictions, and more.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Audience Activation</h3>
                <p className="text-sm">
                  Segments were materialized as BigQuery tables and automatically synced to advertising platforms
                  and CRM systems, enabling marketing teams to activate audiences with a single click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Pipeline */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Data Pipeline with Airflow & BigQuery</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Apache Airflow orchestrated the entire data pipeline, ensuring reliable and scheduled execution:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Scheduled Ingestion:</strong>
                  {" "}Daily workflows pulled customer data from source systems into BigQuery, handling incremental
                  updates and full refreshes as needed
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Data Transformation:</strong>
                  {" "}SQL-based transformations in BigQuery unified customer profiles, calculated metrics, and
                  prepared data for ML model training
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">ML Model Execution:</strong>
                  {" "}Machine learning models ran on BigQuery ML or external services, generating predictions
                  and segment assignments for each customer
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Segment Materialization:</strong>
                  {" "}Final audience segments were written to dedicated BigQuery tables, ready for activation
                  by marketing teams
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Error Handling & Monitoring:</strong>
                  {" "}Airflow provided comprehensive monitoring, alerting, and retry logic to ensure pipeline reliability
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Machine Learning Segmentation */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Machine Learning Segmentation</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The CDP leveraged machine learning models to create intelligent, data-driven audience segments:
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Purchase Propensity Models
                </h3>
                <p>
                  Predicted likelihood of customers to make purchases within specific time windows, enabling
                  acquisition teams to target high-intent audiences for retargeting campaigns.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Churn Risk Segmentation
                </h3>
                <p>
                  Identified customers at risk of churning, allowing CRM teams to engage with retention campaigns
                  and win-back strategies before customers were lost.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Product Affinity Clustering
                </h3>
                <p>
                  Grouped customers by product preferences and purchase patterns, enabling personalized product
                  recommendations and category-specific campaigns.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Lifetime Value Prediction
                </h3>
                <p>
                  Estimated customer lifetime value to optimize acquisition spend and prioritize high-value
                  customer segments for premium campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activation Platforms */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Activation Platforms</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The CDP integrated with multiple marketing platforms, enabling teams to activate segments across
              acquisition and CRM channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Acquisition Platforms</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Facebook Ads:</strong> Custom audiences for retargeting and lookalike campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Google Ads:</strong> Customer match lists for search and display campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Criteo:</strong> Dynamic retargeting audiences based on browsing behavior</span>
                  </li>
                </ul>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">CRM Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Selligent:</strong> Segmented email lists for personalized messaging and CRM campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Lifecycle Marketing:</strong> Automated campaigns based on customer journey stage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Retention Programs:</strong> Targeted campaigns for at-risk segments</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6">
              Marketing teams could select pre-defined segments from a catalog and push them to their respective
              platforms with a single action, dramatically reducing the time from insight to campaign activation.
            </p>
          </div>
        </section>

        {/* User Experience */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">User Experience for Marketing Teams</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The CDP was designed to be accessible to non-technical marketing teams:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-4 text-lg">
                Segment Catalog
              </h3>
              <p className="text-sm mb-4">
                Teams could browse a catalog of pre-defined segments, each with clear descriptions of the audience
                characteristics and use cases. Segments were organized by marketing objective (acquisition, retention,
                upsell, etc.) and updated automatically as ML models retrained.
              </p>
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-4 text-lg mt-6">
                One-Click Activation
              </h3>
              <p className="text-sm">
                Once a segment was selected, teams could push it to their target platform (Facebook Ads, Google Ads,
                Criteo, or CRM) with a single click. The system handled all the technical complexity of API integration,
                data formatting, and synchronization.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact & Results</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The CDP transformed how Maison du Monde approached customer data and marketing activation:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Unified Customer View:</strong>
                  {" "}Consolidated customer data from multiple sources into a single, reliable source of truth
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Data-Driven Segmentation:</strong>
                  {" "}ML-powered segments outperformed rule-based segments, improving campaign ROI and conversion rates
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Faster Campaign Activation:</strong>
                  {" "}Reduced time from segment creation to campaign launch from days to minutes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Cross-Channel Consistency:</strong>
                  {" "}Same segments available across all platforms, ensuring consistent messaging and targeting
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Scalable Infrastructure:</strong>
                  {" "}BigQuery and Airflow provided the scalability to handle growing data volumes and increasing
                  number of segments
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Stack */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "Google BigQuery",
              "Apache Airflow",
              "Google Cloud Platform",
              "BigQuery ML",
              "Python",
              "SQL",
              "Facebook Ads API",
              "Google Ads API",
              "Criteo API"
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

        {/* Key Learnings */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Learnings</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Building this CDP provided valuable insights into data engineering and marketing technology:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Unified Data Model:</strong>
                  {" "}Creating a single source of truth for customer data required careful data modeling and
                  transformation logic to handle inconsistencies across source systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">ML in Production:</strong>
                  {" "}Deploying ML models in a production CDP required robust pipelines for model training,
                  evaluation, and deployment, with monitoring to detect model drift
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">API Integration Complexity:</strong>
                  {" "}Each advertising platform had different APIs, data formats, and rate limits, requiring
                  custom integration logic and error handling
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">User-Centric Design:</strong>
                  {" "}Making the CDP accessible to non-technical marketing teams was crucial—the best data
                  infrastructure is useless if users can&apos;t easily activate it
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
