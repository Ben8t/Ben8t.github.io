import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deezer Competitor Offer Scraping - Case Study | Benoit",
  description: "A competitive intelligence system for monitoring pricing changes across music streaming competitors, with real-time Slack alerts for pricing teams.",
};

export default function DeezerCompetitorScrapingPage() {
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
          <span>2018-2019</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Web Scraping & Competitive Intelligence</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Competitor <span className="italic">Offer Scraping</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A competitive intelligence system for monitoring pricing changes across music streaming competitors.
          Real-time Slack alerts keep pricing teams informed when competitors adjust their offers in specific markets.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Python", "Web Scraping", "Competitive Intelligence", "Slack Integration", "Data Pipeline"].map((tag) => (
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
          src="/deezer-competitor-scraping-thumbnail.jpg"
          alt="Deezer competitor scraping project"
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
              In the competitive landscape of music streaming, pricing strategy is critical. Competitors frequently
              adjust their subscription prices, launch promotional offers, and change their tier structures across
              different markets. Staying informed about these changes in real-time is essential for maintaining
              competitive positioning.
            </p>
            <p>
              This project built an automated system to monitor pricing pages of all major competitors—Apple Music,
              Spotify, Cobuzz, and others—across multiple countries. When price changes were detected, the system
              immediately alerted the pricing team via Slack, enabling rapid response to competitive moves.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Challenge</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Pricing teams at Deezer needed to:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Monitor Multiple Competitors:</strong>
                  {" "}Track pricing changes across Apple Music, Spotify, Cobuzz, and other streaming services
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Multi-Country Coverage:</strong>
                  {" "}Each competitor has different pricing in different countries, requiring country-specific monitoring
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Real-Time Alerts:</strong>
                  {" "}Pricing teams needed immediate notification when changes occurred, not periodic reports
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Reliable Parsing:</strong>
                  {" "}Websites change their structure frequently, requiring robust scraping that adapts to layout changes
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Approach */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technical Approach</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The system was built as a Python-based scraping pipeline with several key components:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Web Scraping Engine</h3>
                <p className="text-sm">
                  Robust parsing logic for each competitor&apos;s pricing pages, handling different HTML structures,
                  dynamic content loading, and country-specific variations. Implemented fallback strategies for
                  when page structures changed.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Change Detection</h3>
                <p className="text-sm">
                  Comparison logic to detect price changes, new offers, or modifications to subscription tiers.
                  Stored historical data to track pricing evolution over time.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Slack Integration</h3>
                <p className="text-sm">
                  Real-time alerting system that sends formatted messages to dedicated Slack channels when
                  pricing changes are detected, including country, competitor, and specific price details.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Scheduled Execution</h3>
                <p className="text-sm">
                  Automated scheduling to regularly check competitor pricing pages, ensuring continuous
                  monitoring without manual intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitors Monitored */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Competitors Monitored</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The system tracked pricing for all major music streaming competitors:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {["Apple Music", "Spotify", "Cobuzz", "Other Competitors"].map((competitor) => (
                <div
                  key={competitor}
                  className="px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-center text-sm"
                >
                  {competitor}
                </div>
              ))}
            </div>

            <p className="mt-6">
              Each competitor required custom parsing logic due to different website structures, pricing page
              locations, and how they displayed subscription tiers and promotional offers.
            </p>
          </div>
        </section>

        {/* Slack Alerting */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Slack Alerting System</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The Slack integration was designed to provide actionable information to pricing teams:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-4 text-lg">
                Alert Format
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Competitor name and country where change occurred</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Previous price vs. new price comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Subscription tier affected (individual, family, student, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Timestamp of when the change was detected</span>
                </li>
              </ul>
            </div>

            <p className="mt-6">
              This enabled pricing teams to react quickly to competitive moves, adjust their own pricing strategies,
              and maintain market awareness without manually checking competitor websites.
            </p>
          </div>
        </section>

        {/* Technical Challenges */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technical Challenges</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Website Structure Changes
              </h3>
              <p>
                Competitor websites frequently update their layouts, requiring the scraping logic to be robust
                and adaptable. Implemented multiple selector strategies and fallback parsing methods to handle
                structural changes gracefully.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Dynamic Content Loading
              </h3>
              <p>
                Many pricing pages load content dynamically via JavaScript, requiring headless browser automation
                or careful handling of AJAX requests to capture the actual pricing information.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Rate Limiting & Detection
              </h3>
              <p>
                Implemented respectful scraping practices with appropriate delays, user-agent rotation, and
                request throttling to avoid being blocked while maintaining timely monitoring.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                Multi-Country Variations
              </h3>
              <p>
                Each country has different pricing pages, currency formats, and promotional structures. The
                system needed to handle these variations while maintaining consistent data extraction.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact & Results</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The competitor scraping system provided significant value to Deezer&apos;s pricing operations:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Real-Time Awareness:</strong>
                  {" "}Pricing teams were immediately notified of competitor changes, enabling faster strategic responses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Reduced Manual Work:</strong>
                  {" "}Eliminated the need for team members to manually check competitor websites across multiple countries
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Historical Tracking:</strong>
                  {" "}Built a database of pricing changes over time, enabling trend analysis and competitive intelligence
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Proactive Strategy:</strong>
                  {" "}Teams could anticipate competitive moves and adjust pricing strategies proactively rather than reactively
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Key Learnings</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Building this competitive intelligence system taught valuable lessons:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Robustness Over Precision:</strong>
                  {" "}Web scraping requires building for failure—websites change, and the system must degrade gracefully
                  rather than breaking completely
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Actionable Alerts:</strong>
                  {" "}The value of alerts is in their actionability—providing context and comparison makes notifications
                  useful rather than noisy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Competitive Intelligence:</strong>
                  {" "}Automated monitoring provides a competitive advantage by enabling faster response times to market changes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Maintenance Reality:</strong>
                  {" "}Scraping systems require ongoing maintenance as target websites evolve, but the value provided
                  justifies the investment
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
