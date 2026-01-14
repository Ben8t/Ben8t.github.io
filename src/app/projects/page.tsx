"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "The New Printer",
    category: "CLI Tool",
    year: "2025",
    description: "A lightweight CLI tool that transforms web articles into print-ready PDFs with magazine-style aesthetic. Because reading on paper just feels better.",
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
    title: "Football Analytics",
    category: "Data Science & Visualization",
    year: "2019",
    description: "A personal project developing football models and visualizations. Combining machine learning with creative data storytelling to reveal insights from match data.",
    tags: ["Python", "R", "Machine Learning", "Data Viz"],
  },
  {
    id: 4,
    title: "Kestra Governance Assets",
    category: "Product Design & Engineering",
    year: "2024",
    description: "A comprehensive data governance feature for tracking lineage and metadata of workflow resources. Complete product leadership from concept to client delivery.",
    tags: ["Product Design", "DSL Design", "Enterprise"],
  },
  {
    id: 5,
    title: "Kestra Playground",
    category: "Product Design & UX",
    year: "2024",
    description: "An iterative workflow development feature enabling developers to build and test workflows one task at a time. Led product conceptualization, UX direction, and coordinated with engineering team.",
    tags: ["Product Design", "UX", "Developer Tools", "Workflows"],
  },
  {
    id: 6,
    title: "Kestra Notion Plugin",
    category: "Plugin Development",
    year: "2024",
    description: "A complete Notion integration for Kestra's workflow orchestration platform. Built end-to-end from Java implementation to QA, enabling seamless database operations and content management within workflows.",
    tags: ["Java", "Plugin Development", "API Integration", "Kestra"],
  },
  {
    id: 7,
    title: "SQL is not designed for analytics",
    category: "Conference & Thought Leadership",
    year: "2024",
    description: "A conference talk challenging conventional wisdom about SQL for analytics, presented to 300+ data professionals. Exploring the paradigm shift from Text-to-SQL toward the emerging Text-to-Semantic Layer era.",
    tags: ["Public Speaking", "Data Analytics", "Thought Leadership", "Semantic Layer"],
  },
  {
    id: 8,
    title: "Deezer Competitor Offer Scraping",
    category: "Web Scraping & Competitive Intelligence",
    year: "2018-2019",
    description: "A competitive intelligence system for monitoring pricing changes across music streaming competitors. Real-time Slack alerts keep pricing teams informed when competitors adjust their offers in specific markets.",
    tags: ["Python", "Web Scraping", "Competitive Intelligence", "Slack"],
  },
  {
    id: 9,
    title: "Maison du Monde CDP",
    category: "Data Engineering & Marketing Technology",
    year: "2019-2020",
    description: "A Customer Data Platform built on BigQuery and Airflow, enabling ML-powered audience segmentation for acquisition and CRM teams. Transforming customer data into actionable marketing segments.",
    tags: ["BigQuery", "Airflow", "GCP", "Machine Learning", "CDP"],
  },
  {
    id: 10,
    title: "Olympique de Marseille Recruitment System",
    category: "Sports Analytics & Machine Learning",
    year: "2020-2021",
    description: "An ML-powered player recruitment system built on StatsBomb data and VAEP modeling. Ingested global match events and created custom transfer lists for OM's sporting director and recruitment team.",
    tags: ["Python", "Machine Learning", "VAEP", "Sports Analytics", "StatsBomb"],
  },
];

const categories = ["All", "Category 1", "Category 2", "Category 3"];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ProjectsPage() {
  const [shuffledProjects, setShuffledProjects] = useState(projects);

  useEffect(() => {
    setShuffledProjects(shuffleArray(projects));
  }, []);

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
        {/* All Projects */}
        {shuffledProjects.map((project) => (
          <Link
            key={project.id}
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
                : "#"
            }
            className="group cursor-pointer project-card flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-border-light dark:border-border-dark">
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
