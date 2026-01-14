import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olympique de Marseille Recruitment System - Case Study | Benoit",
  description: "An ML-powered player recruitment system built on StatsBomb data and VAEP modeling for Olympique de Marseille.",
};

export default function OMRecruitmentPage() {
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
          <span>2020-2021</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Sports Analytics & Machine Learning</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Olympique de Marseille <span className="italic">Recruitment System</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-3xl font-light">
          An ML-powered player recruitment system built on StatsBomb data and VAEP modeling.
          Transforming global match data into actionable transfer insights for OM's sporting director.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Python", "Machine Learning", "VAEP", "Sports Analytics", "StatsBomb", "Football"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-xs font-medium text-text-muted-light dark:text-text-muted-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links to Medium articles */}
        <div className="flex flex-col gap-3 mt-8">
          <a
            href="https://medium.pimpaudben.fr/part-1-a-career-in-football-analytics-the-what-91c888b3dcd2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            Part 1: A Career in Football Analytics - The What
          </a>
          <a
            href="https://medium.pimpaudben.fr/part-2-a-career-in-football-analytics-the-how-ae8b5eca38ce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-text-main-light dark:border-text-main-dark text-text-main-light dark:text-text-main-dark rounded-lg font-medium hover:bg-text-main-light hover:text-background-light dark:hover:bg-text-main-dark dark:hover:text-background-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            Part 2: A Career in Football Analytics - The How
          </a>
          <a
            href="https://medium.pimpaudben.fr/part-3-a-career-in-football-analytics-the-reality-ccd0812ef3bf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-text-main-light dark:border-text-main-dark text-text-main-light dark:text-text-main-dark rounded-lg font-medium hover:bg-text-main-light hover:text-background-light dark:hover:bg-text-main-dark dark:hover:text-background-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            Part 3: A Career in Football Analytics - The Reality
          </a>
        </div>
      </header>

      {/* Project Image/Visual */}
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-16 md:mb-24 border border-border-light dark:border-border-dark">
        <Image
          src="/om-recruitment-thumbnail.jpg"
          alt="Olympique de Marseille Recruitment System overview"
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
              This project brought advanced data science and machine learning to professional football recruitment
              for Olympique de Marseille. By ingesting and analyzing global match data from StatsBomb, I built a
              comprehensive system that transformed raw event data into actionable player insights.
            </p>
            <p>
              The system provided OM&apos;s sporting director and recruitment team with data-driven transfer lists,
              moving beyond traditional scouting methods to quantify player value through probabilistic modeling.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">The Challenge</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              Traditional football recruitment relies heavily on subjective scouting reports and basic statistics
              that fail to capture the true value of player actions. Clubs needed a way to:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Quantify the impact of every on-field action beyond goals and assists</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Compare players across different leagues and positions objectively</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Identify undervalued talent in markets beyond major leagues</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>Make data-driven transfer decisions with statistical confidence</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Approach */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technical Approach</h2>
          <div className="space-y-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Data Pipeline</h3>
              <p className="text-sm">
                Ingested comprehensive match event data from StatsBomb, covering thousands of matches worldwide.
                Each match decomposed into granular events: passes, shots, tackles, positioning, and more.
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">VAEP Modeling</h3>
              <p className="text-sm">
                Implemented Valuing Actions by Estimating Probabilities (VAEP) - a machine learning framework that
                assigns value to every player action based on its impact on scoring probability. Each action is
                evaluated for how it changes the likelihood of scoring or conceding in the next few seconds.
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Player Evaluation</h3>
              <p className="text-sm">
                Aggregated VAEP scores across all actions for each player, creating comprehensive performance
                profiles. This enabled direct comparison across positions, leagues, and playing styles.
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="font-semibold text-text-main-light dark:text-text-main-dark mb-3">Custom Transfer Lists</h3>
              <p className="text-sm">
                Generated targeted player recommendations based on OM&apos;s specific needs: position requirements,
                budget constraints, age profiles, and tactical fit. The system surfaced undervalued players whose
                contributions traditional metrics would miss.
              </p>
            </div>
          </div>
        </section>

        {/* VAEP Methodology */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Understanding VAEP</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              VAEP (Valuing Actions by Estimating Probabilities) represents a paradigm shift in player evaluation.
              Instead of counting events, it measures impact:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong>Probabilistic scoring:</strong> Each action is evaluated by how it changes the probability
                  of the team scoring or conceding in the near future
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong>Context-aware:</strong> A pass in midfield is valued differently than the same pass in
                  the attacking third
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong>Comprehensive coverage:</strong> Every touch, movement, and defensive action contributes
                  to a player&apos;s overall value
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  <strong>ML-powered:</strong> Machine learning models trained on thousands of matches learn what
                  actions actually lead to goals
                </span>
              </li>
            </ul>
            <p>
              This approach revealed players who excel at &quot;winning actions&quot; - the subtle plays that increase
              scoring probability but don&apos;t show up in traditional statistics.
            </p>
          </div>
        </section>

        {/* Results & Impact */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Results & Impact</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              The system provided Olympique de Marseille&apos;s recruitment team with:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  Custom transfer shortlists ranked by VAEP value and filtered by budget, age, and position needs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  Quantitative player comparisons that revealed undervalued talent in less-scouted leagues
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  Data-driven insights to support or challenge traditional scouting assessments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5">•</span>
                <span>
                  Evidence-based negotiation positions for transfer discussions
                </span>
              </li>
            </ul>
            <p>
              This project demonstrated how machine learning can augment traditional football scouting, providing
              recruitment teams with objective, data-driven insights to complement human expertise.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "Python",
              "StatsBomb API",
              "Pandas",
              "Scikit-learn",
              "XGBoost",
              "VAEP Framework",
              "Jupyter Notebooks",
              "Matplotlib",
              "NumPy",
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

        {/* Read More */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Deep Dive: Football Analytics Series</h2>
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <p>
              I wrote a comprehensive three-part series on Medium exploring football analytics in depth, covering
              the methodology, implementation, and real-world challenges of this project:
            </p>
            <div className="grid gap-4 mt-6">
              <a
                href="https://medium.pimpaudben.fr/part-1-a-career-in-football-analytics-the-what-91c888b3dcd2"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Part 1: The What
                </h3>
                <p className="text-sm">
                  Introduction to football analytics, the VAEP framework, and why probabilistic modeling matters
                  for player evaluation.
                </p>
              </a>
              <a
                href="https://medium.pimpaudben.fr/part-2-a-career-in-football-analytics-the-how-ae8b5eca38ce"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Part 2: The How
                </h3>
                <p className="text-sm">
                  Technical deep dive into data ingestion, VAEP implementation, and building the ML models that
                  power player recommendations.
                </p>
              </a>
              <a
                href="https://medium.pimpaudben.fr/part-3-a-career-in-football-analytics-the-reality-ccd0812ef3bf"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-text-main-light dark:text-text-main-dark">
                  Part 3: The Reality
                </h3>
                <p className="text-sm">
                  Real-world challenges, organizational adoption, and the gap between analytics insights and
                  decision-making in professional football.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">Learn More</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Read the full three-part series on football analytics and VAEP modeling.
            </p>
          </div>
          <a
            href="https://medium.pimpaudben.fr/part-1-a-career-in-football-analytics-the-what-91c888b3dcd2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Read on Medium
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
