import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Football Analytics - Case Study | Benoit",
  description: "A personal project developing football models and data visualizations using Python, R, and machine learning.",
};

export default function FootballAnalyticsPage() {
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
          <span>2019</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Data Science & Visualization</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Football <span className="italic">Analytics</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          A personal project where I develop football models and visualizations, combining machine learning
          with creative data storytelling to reveal insights hidden in match data.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Python", "R", "Machine Learning", "Data Visualization", "PostgreSQL", "Docker"].map((tag) => (
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
            href="https://github.com/Ben8t/football-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/football-analytics-thumbnail.jpg"
          alt="Football Analytics pass network visualization"
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
              Football analytics has exploded in recent years, with clubs investing heavily in data science
              to gain competitive advantages. This project represents my personal exploration of the field,
              combining machine learning models with creative data visualizations to extract meaningful
              insights from match data.
            </p>
            <p>
              The repository showcases various approaches to understanding football performance—from
              expected goal (xG) models that quantify shot quality, to network analysis that reveals
              team passing patterns and player relationships on the pitch.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technology Stack</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The project is built on a modern data stack, orchestrated through Docker for easy deployment
              and reproducibility:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Python</h3>
                <p className="text-sm">
                  Data processing and machine learning using TensorFlow, Scikit-Learn, and MLFlow
                  for experiment tracking and model versioning.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">R</h3>
                <p className="text-sm">
                  All data visualization work leveraging dplyr for data manipulation, ggplot2 for
                  plotting, and magick for image processing.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">PostgreSQL</h3>
                <p className="text-sm">
                  Storing and querying match data efficiently, enabling complex analytical queries
                  across seasons and competitions.
                </p>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg p-6">
                <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Docker & GCP</h3>
                <p className="text-sm">
                  Container orchestration for development environment and Google Cloud Platform
                  for running computationally intensive model training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visualizations */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Visualizations</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The heart of this project lies in creating compelling visualizations that make complex
              data accessible. Each visualization type serves a specific analytical purpose:
            </p>

            <div className="space-y-6 mt-8">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Pass Networks
                </h3>
                <p>
                  Network diagrams showing passing relationships between players, revealing team
                  structure, key playmakers, and how the ball flows during matches.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Pass Sonars
                </h3>
                <p>
                  Radial visualizations showing the direction and frequency of a player&apos;s passes,
                  revealing playing style and preferred passing patterns.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  xG Maps
                </h3>
                <p>
                  Shot maps colored by expected goal value, showing not just where players shoot
                  from but the quality of chances they create and convert.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Assist-Shot Cluster Maps
                </h3>
                <p>
                  Spatial analysis showing where teams create chances from, identifying patterns
                  in attacking play and dangerous zones for opponents.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Performance Rolling Means
                </h3>
                <p>
                  Time series visualizations tracking team performance metrics over the season,
                  smoothing out match-to-match variance to reveal trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Models */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Machine Learning Models</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Beyond visualization, the project includes several predictive models:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Expected Goal (xG) Model:</strong>
                  {" "}Predicting the probability of a shot resulting in a goal based on location,
                  angle, body part, and game context.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Expected Assist (xA) Model:</strong>
                  {" "}Quantifying the quality of chances created by passes, independent of
                  whether the recipient scores.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong className="text-text-main-light dark:text-text-main-dark">Possession2Vec Model:</strong>
                  {" "}Embedding passing sequences into vector space to find similar patterns
                  and cluster playing styles.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Project Architecture</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The repository is organized into modular components:
            </p>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 font-mono text-sm">
              <div className="space-y-2">
                <div><span className="text-primary">./model</span> — Machine learning models (xG, xA, Possession2Vec)</div>
                <div><span className="text-primary">./src</span> — Source code for crawlers, database, SQL queries</div>
                <div><span className="text-primary">./visualisation</span> — R scripts for data visualization</div>
                <div><span className="text-primary">./data</span> — Raw data storage (not in git)</div>
                <div><span className="text-primary">./app</span> — Web applications for interactive exploration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Impact & Learning</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              This project represents a deep dive into sports analytics, combining several disciplines:
              statistical modeling, machine learning, data visualization, and domain expertise in football.
            </p>
            <p>
              The visualizations have been shared on Twitter/X, sparking conversations with other
              football analytics enthusiasts and contributing to the growing open-source community
              around sports data science.
            </p>
            <p>
              Key learnings include the importance of domain knowledge in feature engineering,
              the power of visualization for communicating complex analysis, and the challenges
              of working with real-world sports data that is often incomplete or inconsistent.
            </p>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "Python",
              "R",
              "TensorFlow",
              "Scikit-Learn",
              "MLFlow",
              "ggplot2",
              "PostgreSQL",
              "Docker",
              "Google Cloud"
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
            <h3 className="font-display text-2xl mb-2">Explore the code</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Check out the full repository with models and visualization code.
            </p>
          </div>
          <a
            href="https://github.com/Ben8t/football-analytics"
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
