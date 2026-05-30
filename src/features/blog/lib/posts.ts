// lib/posts.ts

import fs from "fs";
import path from "path";
import { BlogPost } from "../types/blog.types";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const postData = JSON.parse(fileContents);

      // ⬇️ اسلاگ رو از محتوای فایل میخونیم، نه اسم فایل
      // اگه فیلد slug توی CMS نداری، باید اضافه کنی
      const slug = postData.slug || fileName.replace(".json", "");

      return {
        ...postData,
        slug,
      } as BlogPost;
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(postsDirectory);

  // ⬇️ حالا کل فایل‌ها رو میخونیم و slug رو از محتوا مقایسه میکنیم
  for (const fileName of fileNames) {
    if (!fileName.endsWith(".json")) continue;

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const postData = JSON.parse(fileContents);

    if (postData.slug === slug) {
      return {
        ...postData,
        slug,
      } as BlogPost;
    }
  }

  return null;
}
