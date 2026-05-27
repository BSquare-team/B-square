// src/app/(main)/changelog/_components/ChangelogTimeline.tsx

import { ChangelogEntry } from "@/src/features/changelog/types/changelog.types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChangelogTimelineProps {
  entries: ChangelogEntry[];
}

function formatDateRange(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ChangelogTimeline({ entries }: ChangelogTimelineProps) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 dark:text-gray-400">
          No changelog entries yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mt-24 flex flex-col items-center">
      {entries.map((entry) => (
        <div
          key={entry.slug}
          className="relative flex justify-start py-6 w-full"
        >
          {/* Date - sticky on desktop */}
          <div className="sticky hidden md:flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              {formatDateRange(entry.date)}
            </span>
          </div>

          {/* Content */}
          <div className="relative flex flex-col w-full prose prose-ul:mb-0 dark:prose-invert max-w-none">
            {/* Date - visible on mobile only */}
            <span className="md:hidden flex text-[rgb(115,115,115)] text-sm mb-2">
              {formatDateRange(entry.date)}
            </span>

            <h3 className="lg:text-xl mt-0 text-gray-900 dark:text-white">
              {entry.title}
            </h3>

            {/* Entries with Author + Content */}
            <div className="mt-4 space-y-6 gap-8">
              {entry.entries?.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 ">
                    — {item.author}
                  </p>
                  <div className="text-gray-600 dark:text-gray-400 mb-200">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {item.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid background */}
          <div
            className="absolute inset-x-0 h-150 
              bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_0,transparent_100%),repeating-linear-gradient(90deg,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_0,transparent_100%)] 
              bg-size-[20px_20px,20px_20px] 
              bg-top 
              mask-[linear-gradient(0deg,transparent,black)] 
              dark:bg-[repeating-linear-gradient(0deg,rgba(241,245,249,0.03)_0,rgba(241,245,249,0.03)_1px,transparent_0,transparent_100%),repeating-linear-gradient(90deg,rgba(241,245,249,0.03)_0,rgba(241,245,249,0.03)_1px,transparent_0,transparent_100%)] 
              dark:bg-size-[20px_20px,20px_20px] 
              dark:bg-position-[center_top_-1px] 
              dark:border-t dark:border-white/5 
              top-0 xl:top-14
              -z-10"
          />
        </div>
      ))}
    </div>
  );
}
