import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { formatDate, getPost, getPosts, type Block } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return { title: post ? `${post.title} · Benoit Pimpaud` : "Benoit Pimpaud" };
}

// *word* -> <em>word</em>; nothing else is markup.
function inline(text: string) {
  return text
    .split(/(\*[^*]+\*)/)
    .map((part, i) =>
      part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
        <em key={i}>{part.slice(1, -1)}</em>
      ) : (
        part
      ),
    );
}

// Lines within a paragraph keep their breaks, as in the Markdown file.
function lines(list: string[]) {
  return list.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {inline(line)}
    </Fragment>
  ));
}

// The first paragraph opens with a script initial and a spaced-out first word.
function Opening({ lines: [head, ...tail] }: { lines: string[] }) {
  const [, first = "", rest = ""] = head.match(/^(\S+)(.*)$/) ?? [];
  return (
    <p className="opening">
      <span className="lede">{first}</span>
      {inline(rest)}
      {tail.length > 0 && <br />}
      {lines(tail)}
    </p>
  );
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const lastBreak = post.blocks.findLastIndex((b) => b.kind === "break");
  const body = lastBreak === -1 ? post.blocks : post.blocks.slice(0, lastBreak);
  const afterword = lastBreak === -1 ? [] : post.blocks.slice(lastBreak + 1);
  const firstP = body.findIndex((b) => b.kind === "p");

  const render = (block: Block, i: number) =>
    block.kind === "break" ? (
      <p key={i} className="ornament" aria-hidden="true">
        ✧
      </p>
    ) : i === firstP ? (
      <Opening key={i} lines={block.lines} />
    ) : (
      <p key={i}>{lines(block.lines)}</p>
    );

  return (
    <main className="sheet">
      <nav className="blog-nav">
        <a href="/blog">Stories</a>
      </nav>
      <article>
        <header className="post-header">
          <h1>{post.title}</h1>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </header>
        <div className="prose">{body.map(render)}</div>
        {/* The favicon doubles as the end mark: no extra asset, already cached. */}
        <p className="ornament end" aria-hidden="true">
          <img src="/icon.png" alt="" width={28} height={28} />
        </p>
        {afterword.length > 0 && (
          <footer className="afterword">
            {afterword.map((b, i) =>
              b.kind === "p" ? <p key={i}>{lines(b.lines)}</p> : null,
            )}
          </footer>
        )}
      </article>
    </main>
  );
}
