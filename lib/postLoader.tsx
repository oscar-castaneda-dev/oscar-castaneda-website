import { remark } from "remark";
import fs from "fs";
import gfm from "remark-gfm";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";

import type { Post } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const postFilePath = path.join(postsDirectory, fileName);
    const postContent = fs.readFileSync(postFilePath, "utf-8");

    const { data } = matter(postContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      imageId: data.imageId,
      content: "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  const postFilePath = path.join(postsDirectory, `${slug}.mdx`);

  const postContent = fs.readFileSync(postFilePath, "utf8");

  const { data, content } = matter(postContent);

  const processedContent = await remark().use(gfm).use(html).process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    imageId: data.imageId,
    content: processedContent.toString(),
  };
}
