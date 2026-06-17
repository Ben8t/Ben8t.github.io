import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { RefractionHero } from "@/components/RefractionHero";
type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  order?: number;
};

const projects: Project[] = [
  {
    id: 1,
    title: "The New Printer",
    category: "CLI Tool",
    year: "2025",
    order: 2,
  },
  {
    id: 2,
    title: "Gotta Grid'em All",
    category: "Data Visualization",
    year: "2024",
  },
  {
    id: 3,
    title: "Football Analytics",
    category: "Data Science & Visualization",
    year: "2019",
  },
  {
    id: 4,
    title: "Kestra Governance Assets",
    category: "Product Design & Engineering",
    year: "2024",
  },
  {
    id: 5,
    title: "Kestra Playground",
    category: "Product Design & UX",
    year: "2024",
  },
  {
    id: 6,
    title: "Kestra Notion Plugin",
    category: "Plugin Development",
    year: "2024",
  },
  {
    id: 7,
    title: "SQL is not designed for analytics",
    category: "Conference & Thought Leadership",
    year: "2024",
  },
  {
    id: 8,
    title: "Deezer Competitor Offer Scraping",
    category: "Web Scraping & Competitive Intelligence",
    year: "2018-2019",
  },
  {
    id: 9,
    title: "Maison du Monde CDP",
    category: "Data Engineering & Marketing Technology",
    year: "2019-2020",
  },
  {
    id: 10,
    title: "Olympique de Marseille Recruitment System",
    category: "Sports Analytics & Machine Learning",
    year: "2020-2021",
  },
  {
    id: 11,
    title: "kestractl",
    category: "CLI Tool & Go Engineering",
    year: "2025",
  },
  {
    id: 12,
    title: "Kestra Agent Skills",
    category: "AI & Developer Tools",
    year: "2026",
  },
  {
    id: 13,
    title: "Specs Should Be Equations, Not Essays",
    category: "Essay & Thought Leadership",
    year: "2026",
    order: 1,
  },
];

const sortedProjects = [...projects].sort((a, b) => {
  // Manual ordering (lowest first) takes precedence over year-based sorting.
  if (a.order != null || b.order != null) {
    if (a.order != null && b.order != null) return a.order - b.order;
    return a.order != null ? -1 : 1;
  }
  const yearA = parseInt(a.year.split("-").pop()!);
  const yearB = parseInt(b.year.split("-").pop()!);
  return yearB - yearA;
});

export default function Home() {

  return (
    <>
      {/* Hero — full-bleed 3D refraction glass */}
      <RefractionHero />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 pb-24">
        {/* Now */}
        <section className="pt-20 md:pt-28">
          <div className="mb-12 flex items-baseline gap-5 md:mb-16">
            <h2 className="font-display text-4xl">
              <em className="italic text-accent">Now</em>
            </h2>
            <span className="text-[11px] uppercase tracking-[0.28em] text-text-muted-dark">
              — June 2026
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4 md:gap-x-14">
            <Reveal className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-text-muted-dark">Location</span>
              <span className="text-[15px] leading-relaxed">Paris, France</span>
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-text-muted-dark">Working on</span>
              <span className="text-[15px] leading-relaxed">Exploring agentic algebra and how to make play a center part of product design</span>
            </Reveal>
            <Reveal delay={160} className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-text-muted-dark">Reading</span>
              <span className="text-[15px] leading-relaxed">
                <em className="font-display not-italic italic">Things That Make Us Smart</em> — D. Norman
              </span>
            </Reveal>
            <Reveal delay={240} className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-text-muted-dark">Building</span>
              <span className="text-[15px] leading-relaxed">The New Printer</span>
            </Reveal>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="pt-20 md:pt-28">
          <div className="mb-10 flex items-end justify-between border-b border-border-dark pb-4">
            <h3 className="font-display text-3xl">Selected Projects</h3>
            <Link href="/projects" className="text-sm font-medium text-accent transition-opacity hover:opacity-70">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {sortedProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
              <Link
                href={
                  project.id === 1
                    ? "/projects/the-new-printer"
                    : project.id === 2
                    ? "/projects/gotta-gridem-all"
                    : project.id === 3
                    ? "/projects/football-analytics"
                    : project.id === 4
                    ? "/projects/kestra-governance-assets"
                    : project.id === 5
                    ? "/projects/kestra-playground"
                    : project.id === 6
                    ? "/projects/kestra-notion-plugin"
                    : project.id === 7
                    ? "/projects/semantic-layer-conference"
                    : project.id === 8
                    ? "/projects/deezer-competitor-scraping"
                    : project.id === 9
                    ? "/projects/maison-du-monde-cdp"
                    : project.id === 10
                    ? "/projects/om-recruitment-system"
                    : project.id === 11
                    ? "/projects/kestractl"
                    : project.id === 12
                    ? "/projects/kestra-agent-skills"
                    : project.id === 13
                    ? "/projects/specs-should-be-equations"
                    : "/projects"
                }
                className="group cursor-pointer project-card flex flex-col gap-4"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
                  {project.id === 1 ? (
                    <Image
                      src="/new-printer-thumbnail.jpg"
                      alt="The New Printer project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 2 ? (
                    <Image
                      src="/gotta-gridem-all-thumbnail.png"
                      alt="Gotta Grid'em All project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 3 ? (
                    <Image
                      src="/football-analytics-thumbnail.jpg"
                      alt="Football Analytics project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 4 ? (
                    <Image
                      src="/kestra-governance-assets-thumbnail.jpg"
                      alt="Kestra Governance Assets project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 5 ? (
                    <Image
                      src="/kestra-playground-thumbnail.jpg"
                      alt="Kestra Playground project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 6 ? (
                    <Image
                      src="/kestra-notion-plugin-thumbnail.png"
                      alt="Kestra Notion Plugin project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 7 ? (
                    <Image
                      src="/semantic-layer-conference-thumbnail.png"
                      alt="SQL is not designed for analytics conference thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 8 ? (
                    <Image
                      src="/deezer-competitor-scraping-thumbnail.jpg"
                      alt="Deezer Competitor Offer Scraping project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 9 ? (
                    <Image
                      src="/maison-du-monde-cdp-thumbnail.jpg"
                      alt="Maison du Monde CDP project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 10 ? (
                    <Image
                      src="/om-recruitment-thumbnail.jpg"
                      alt="Olympique de Marseille Recruitment System project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 11 ? (
                    <Image
                      src="/kestractl-thumbnail.png"
                      alt="kestractl CLI project thumbnail"
                      fill
                      className="object-cover object-top"
                    />
                  ) : project.id === 12 ? (
                    <Image
                      src="/kestra-agent-skills-thumbnail.png"
                      alt="Kestra Agent Skills project thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : project.id === 13 ? (
                    <Image
                      src="/specs-equations-thumbnail.png"
                      alt="Specs Should Be Equations, Not Essays thumbnail"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-light dark:bg-surface-dark flex items-center justify-center">
                      <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Placeholder</span>
                    </div>
                  )}
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
              </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
