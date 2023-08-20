import fs from "fs";
import matter from "gray-matter";
import { Card } from "../../components/Card/Card";

import "./blog.scss";

export async function getBlogData() {
  try {
    const files = fs.readdirSync("public/posts");

    const posts = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`public/posts/${fileName}`, "utf-8");
      const { data } = matter(readFile);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
      };
    });

    return posts;
  } catch (error) {
    console.error(error);

    return {
      posts: [],
    };
  }
}

export default async function Blog() {
  const posts = await getBlogData();
  return (
    <main className="blog-page">
      <h1 className="blog-page__title">Check out my blog!</h1>

      <div>
        {posts.map(({ slug, title, description, date }) => (
          <Card
            key={slug}
            slug={`blog/${slug}`}
            title={title}
            description={description}
            date={date}
          />
        ))}
      </div>
    </main>
  );
}
