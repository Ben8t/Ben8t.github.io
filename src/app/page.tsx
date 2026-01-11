import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "Category",
    year: "2024",
  },
  {
    id: 2,
    title: "Project Two",
    category: "Category",
    year: "2024",
  },
  {
    id: 3,
    title: "Project Three",
    category: "Category",
    year: "2023",
  },
  {
    id: 4,
    title: "Project Four",
    category: "Category",
    year: "2023",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
            <span className="italic">Beyond</span>
            <br />
            <span className="text-primary">Engineering.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed font-light mt-8">
            I'm aproduct engineer obsessed with craft—bridging data pipelines, thoughtful UX, 
            and ideas drawn from art, science, and everyday curiosity. Building things that matter.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-lg font-medium border-b border-text-main-light dark:border-text-main-dark pb-0.5 hover:text-primary hover:border-primary transition-colors"
            >
              View Projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Now Section - Sidebar info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-border-light dark:border-border-dark">
        <aside className="lg:col-span-4 lg:border-r lg:border-border-light dark:lg:border-border-dark lg:pr-12">
          <div className="flex items-center gap-2 pb-4">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-bold uppercase tracking-wider">Now</h3>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Location</span>
              <span className="text-base">Paris, France</span>
            </div>
            <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Working on</span>
              <span className="text-base">Kestra 1.3 release and product design</span>
            </div>
            <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Reading</span>
              <span className="text-base italic">Aristotle&apos;s Rhetoric</span>
            </div>
            <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Building</span>
              <span className="text-base">The New Printer</span>
            </div>
          </div>
        </aside>

        {/* Selected Projects */}
        <div className="lg:col-span-8">
          <div className="flex items-end justify-between border-b border-border-light dark:border-border-dark pb-4 mb-8">
            <h3 className="text-3xl font-display">Selected Projects</h3>
            <Link href="/projects" className="text-sm font-bold text-primary hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project) => (
              <article key={project.id} className="group cursor-pointer project-card flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 border border-border-light dark:border-border-dark flex items-center justify-center">
                  <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Placeholder</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-medium group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h4>
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
