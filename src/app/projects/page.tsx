import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "The New Printer",
    category: "CLI Tool",
    year: "2025",
    description: "A lightweight CLI tool that transforms web articles into print-ready PDFs with magazine-style aesthetic. Because reading on paper just feels better.",
    featured: true,
    tags: ["Python", "CLI", "LaTeX", "Typography"],
  },
  {
    id: 2,
    title: "Gotta Grid'em All",
    category: "Data Visualization",
    year: "2024",
    description: "Exploring how strategic gridline design can enhance chart comprehension. Using creative background patterns to reveal data relationships and improve visual storytelling.",
    tags: ["Data Viz", "Design", "Python", "Matplotlib"],
  },
  {
    id: 3,
    title: "Project Three",
    category: "Category",
    year: "2023",
    description: "Project description placeholder. Add your project details here.",
    tags: ["Tag 1", "Tag 2"],
  },
  {
    id: 4,
    title: "Project Four",
    category: "Category",
    year: "2023",
    description: "Project description placeholder. Add your project details here.",
    tags: ["Tag 1", "Tag 2"],
  },
];

const categories = ["All", "Category 1", "Category 2", "Category 3"];

export default function ProjectsPage() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Header */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl italic leading-none mb-6">
            Selected <br /> <span className="not-italic">Works</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed font-light">
            An exploration of data systems, infrastructure challenges, and engineering solutions. 
            Building robust pipelines one commit at a time.
          </p>
        </div>
      </section>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              index === 0
                ? "border-text-main-light dark:border-text-main-dark bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark"
                : "border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark hover:border-text-main-light dark:hover:border-text-main-dark"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
        {/* Featured Project */}
        {featuredProject && (
          <Link
            href="/projects/the-new-printer"
            className="group cursor-pointer project-card md:col-span-2 grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:h-[500px] w-full border border-border-light dark:border-border-dark">
              <Image
                src="/new-printer-thumbnail.jpg"
                alt="The New Printer project thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border border-white/20">
                Featured
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 pr-0 md:pr-12">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <span>{featuredProject.year}</span>
                <span className="w-8 h-[1px] bg-primary"></span>
                <span>{featuredProject.category}</span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl group-hover:underline decoration-1 underline-offset-4 decoration-text-muted-light">
                {featuredProject.title}
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-sm bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-[10px] uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium border-b border-text-main-light dark:border-text-main-dark pb-0.5 hover:text-primary hover:border-primary transition-colors">
                  Read Case Study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Other Projects */}
        {otherProjects.map((project) => (
          <Link
            key={project.id}
            href={project.id === 2 ? "/projects/gotta-gridem-all" : "#"}
            className="group cursor-pointer project-card flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-border-light dark:border-border-dark">
              {project.id === 2 ? (
                <Image
                  src="/gotta-gridem-all-thumbnail.png"
                  alt="Gotta Grid'em All project thumbnail"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Placeholder</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display text-3xl md:text-4xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark">
                  {project.year}
                </span>
              </div>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm md:text-base line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-sm bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-[10px] uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
