import type { InferPageType } from "fumadocs-core/source";
import { blog } from "./source";

type BlogPage = InferPageType<typeof blog>;

export function getBlogPostDate(post: BlogPage) {
  return new Date(post.data.date);
}

export function formatBlogPostDate(post: BlogPage) {
  return getBlogPostDate(post).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getLatestBlogPosts(limit?: number) {
  const posts = [...blog.getPages()].sort(
    (a, b) => getBlogPostDate(b).getTime() - getBlogPostDate(a).getTime(),
  );

  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}
