const experiences = [
  {
    id: 1,
    company: "Kestra",
    role: "Product & Sales Engineer",
    location: "Paris, France",
    period: "2023 — Present",
    current: true,
    description: "Leading product development and go-to-market for an open-core automation platform.",
    achievements: [
      "Led 15+ engineers developing open-core automation platform, growing ARR from $0 to $1M+ through Pre-Seed to Series A",
      "Conducted technical demos and converted SMB/enterprise prospects with $40k average ACV through product-led sales",
      "Grew developer community from 1k to 18k GitHub stars via conference speaking and technical content",
      "Founded analytics motion managing stakeholders and analytics engineers to drive data-driven product decisions",
    ],
    tags: ["Product", "Sales", "Open Source", "Data Engineering"],
  },
  {
    id: 2,
    company: "Deezer",
    role: "Data Ops Engineer",
    location: "Paris, France",
    period: "2021 — 2023",
    current: false,
    description: "Built and scaled data infrastructure for one of the world's leading music streaming platforms.",
    achievements: [
      "Built scalable analytics infrastructure for 18M daily active users with best data ops practices",
      "Developed real-time fraud detection and payment analytics, reducing chargeback rates",
      "Led ML productionization strategy, deploying 3 models to production and bridging data science/engineering teams",
    ],
    tags: ["Data Ops", "Analytics", "ML Engineering", "Python"],
  },
  {
    id: 3,
    company: "Olympique de Marseille",
    role: "Sport Data Engineer",
    location: "Marseille, France",
    period: "2020 — 2021",
    current: false,
    description: "Pioneered data-driven approaches in professional football analytics.",
    achievements: [
      "Pioneered data-driven recruitment strategy, building ML models to evaluate player performance and transfer market opportunities",
      "Implemented end-to-end analytics pipeline processing match data, scouting reports, and market intelligence",
    ],
    tags: ["Sports Analytics", "ML", "Python", "Data Pipeline"],
  },
  {
    id: 4,
    company: "Maisons Du Monde",
    role: "Data Scientist",
    location: "France",
    period: "2018 — 2020",
    current: false,
    description: "Applied data science to optimize retail operations and customer experience.",
    achievements: [
      "Developed CLV models optimizing marketing spend across 300+ stores and online operations",
      "Built customer segmentation platform using GCP and ML stack, enabling personalized experiences for 25+ segments",
    ],
    tags: ["Data Science", "GCP", "ML", "Retail"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Header */}
      <section className="mb-16 md:mb-24">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl italic leading-tight mb-6">
          Professional <br />
          <span className="not-italic text-primary">Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-lg leading-relaxed">
          A timeline of my journey building data systems, 
          leading engineering initiatives, and solving complex data challenges.
        </p>
      </section>

      {/* Timeline */}
      <div className="relative border-l-2 border-border-light dark:border-border-dark ml-3 md:ml-6 space-y-16 md:space-y-24">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-16 group">
            {/* Timeline dot */}
            <div
              className={`absolute -left-[9px] md:-left-[9px] top-2 h-4 w-4 rounded-full border-2 border-background-light dark:border-background-dark shadow-sm transition-transform duration-300 group-hover:scale-125 ${
                exp.current
                  ? "bg-primary"
                  : "bg-gray-400 dark:bg-gray-600 group-hover:bg-primary"
              }`}
            ></div>

            {/* Company and period */}
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
              <h3 className="font-display text-3xl md:text-4xl">{exp.company}</h3>
              <span className="font-mono text-sm text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">
                {exp.period}
              </span>
            </div>

            {/* Role and location */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-1">{exp.role}</h4>
              <p className="text-primary font-medium text-sm">{exp.location}</p>
            </div>

            {/* Description */}
            <div className="text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-4">
              <p className="mb-4">{exp.description}</p>
              
              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`w-4 h-4 mr-3 mt-1 flex-shrink-0 ${
                        exp.current ? "text-primary" : "text-gray-400 dark:text-gray-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-xs font-medium text-text-muted-light dark:text-text-muted-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
