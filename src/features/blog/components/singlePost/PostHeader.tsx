// src/app/(main)/blog/[slug]/_components/PostHeader.tsx

import { Button } from "@/src/shared/components/ui/button";

interface PostHeaderProps {
  title: string;
  author: string;
  date: string;
  categoryTags: string[]; // ← string[]
  techTags: string[]; // ← string[]
  featuredImage?: string;
  readingTime?: string;
}

export default function PostHeader({
  title,
  author,
  date,
  categoryTags,
  techTags,
  featuredImage,
  readingTime,
}: PostHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="mx-auto flex flex-col justify-center items-center pt-10 sm:pt-22 pb-12">
        {/* Category Tags — همه رو نشون بده */}
        {categoryTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categoryTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="text-gray-500 bg-white dark:bg-gray-900/50 rounded-4xl font-medium text-[12px]"
              >
                {tag}
              </Button>
            ))}
          </div>
        )}

        <h1 className="text-center text-3xl sm:text-4xl max-w-165 font-extrabold text-gray-900 dark:text-white">
          {title}
        </h1>

        <div className="mt-6 text-gray-600 dark:text-gray-400">By {author}</div>

        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formattedDate}</time>
          {readingTime && <span>{readingTime}</span>}
        </div>

        {/* Tech Tags — همه رو نشون بده */}
        {techTags.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {techTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                className="rounded-4xl text-gray-500 dark:text-gray-400 font-medium text-[12px]"
              >
                {tag}
              </Button>
            ))}
          </div>
        )}
      </div>

      {featuredImage && (
        <div className="mb-10">
          <img
            src={featuredImage}
            alt={title}
            className="w-full rounded-xl object-cover max-h-96"
          />
        </div>
      )}
    </>
  );
}
