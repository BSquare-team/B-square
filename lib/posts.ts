// lib/posts.ts

// ماژول نود جی اسی که اجازه میده فایل‌ها رو بخونیم، بنویسیم، پاک کنیم
import fs from "fs";
// بازم ماژول نودجی اسی برای کار با مسیر فایل‌ها استفاده میشه. مثلاً چسبوندن قطعات مسیر به همدیگه.
import path from "path";
import { BlogPost } from "./types";

// این خط یه رشته می‌سازه که مسیر دقیق پوشه‌ای که فایل‌های JSON پست‌ها توش ذخیره شدن رو نشون میده.
const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  // چک کن پوشه وجود داره یا نه
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // fs.readdirSync یه آرایه از اسم تمام فایل‌ها و پوشه‌های داخل اون مسیر برمی‌گردونه.
  const fileNames = fs.readdirSync(postsDirectory); //['2026-05-20-my-post.json','2026-05-21-second-post.json']

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      //	مسیر کامل فایل رو می‌سازه
      const fullPath = path.join(postsDirectory, fileName);
      // کل محتوای فایل رو به صورت رشته می‌خونه , اون یوتی اف یعنی فرمت کلیش استرینگ باشه
      const fileContents = fs.readFileSync(fullPath, "utf8");
      // تبدیلش به ابجکت
      const postData = JSON.parse(fileContents);

      // slug رو از اسم فایل استخراج کن
      // 2026-05-20-my-post.json → my-post
      const slug = fileName.replace(".json", "").replace(".json", "");

      return {
        ...postData,
        slug,
      } as BlogPost;
    })
    // بر اساس تاریخ مرتب کن (جدیدترین اول)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const fileName = fileNames.find((name) => {
    const fileSlug = name.replace(".json", "");
    return fileSlug === slug;
  });

  if (!fileName) return null;

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const postData = JSON.parse(fileContents);

  return {
    ...postData,
    slug,
  } as BlogPost;
}
