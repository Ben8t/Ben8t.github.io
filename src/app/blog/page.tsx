import type { Metadata } from "next";
import { formatDate, getPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog · Benoit Pimpaud",
};

export default function Blog() {
  return (
    <main className="sheet">
      <nav className="blog-nav">
        <a href="/">Benoit Pimpaud</a>
      </nav>
      <h1 className="blog-heading">Stories</h1>
      <ul className="post-list">
        {getPosts().map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </li>
        ))}
      </ul>
    </main>
  );
}
