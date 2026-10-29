import { readFileSync } from "node:fs";
import { join } from "node:path";

/*
 * Posts are Markdown files in src/content/blog, read at build time. The
 * "parser" is deliberately tiny: a "# " title line, paragraphs separated by
 * blank lines (single newlines stay line breaks, as in the file), "---" for a
 * section break, and *emphasis*. Everything after the last break is treated
 * as the afterword.
 */

const POSTS = [{ slug: "a-booster-for-christmas", date: "2026-10-29" }];

export type Block = { kind: "p"; lines: string[] } | { kind: "break" };

export type Post = {
  slug: string;
  date: string;
  title: string;
  blocks: Block[];
};

function parse(slug: string, date: string): Post {
  const source = readFileSync(
    join(process.cwd(), "src/content/blog", `${slug}.md`),
    "utf8",
  );
  let title = slug;
  const blocks: Block[] = [];
  for (const chunk of source.split(/\n\s*\n/)) {
    const lines = chunk
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) continue;
    if (lines[0].startsWith("# ")) {
      title = lines.shift()!.slice(2);
      if (lines.length === 0) continue;
    }
    if (lines.length === 1 && lines[0] === "---") blocks.push({ kind: "break" });
    else blocks.push({ kind: "p", lines });
  }
  return { slug, date, title, blocks };
}

export function getPosts(): Post[] {
  return POSTS.map((p) => parse(p.slug, p.date)).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
