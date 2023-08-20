import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import './blog-post.scss'

export async function getPost(slug) {
  try {
    const fileContent = fs.readFileSync(`public/posts/${slug}.md`, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      content,
    };
  } catch (error) {
    console.error(error);

    return {};
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  return (
    <main className="blog-post">
      <h1 className="blog-post__title">{post.title}</h1>
      <p className="blog-post__date">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
    </main>
  );
}
