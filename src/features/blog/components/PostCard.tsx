// src/app/(main)/blog/_components/PostCard.tsx

import Link from "next/link";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
}

export default function PostCard({
  title,
  description,
  date,
  author,
  slug,
}: PostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="flex flex-col h-full group">
      <div
        className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
          dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] 
          dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all
          duration-300 flex flex-col h-full"
      >
        <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
          <div>
            <p className="text-sm/5 text-gray-500 dark:text-gray-400">
              {formattedDate}
            </p>
            <h2 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3 group-hover:text-blue-400 transition-colors">
              {title}
            </h2>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400 line-clamp-4">
              {description}
            </p>
          </div>
          <p className="mt-6 text-sm/5 font-medium text-gray-700 dark:text-gray-300">
            {author}
          </p>
        </div>
      </div>
    </Link>
  );
}
