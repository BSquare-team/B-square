// src/app/(main)/blog/[slug]/_components/QuoteBlock.tsx

import { Quote } from "lucide-react";

interface QuoteBlockProps {
  text: string;
  author?: string;
}

export default function QuoteBlock({ text, author }: QuoteBlockProps) {
  return (
    <blockquote className="my-8 border-l-4 border-blue-500 pl-6 py-2 bg-gray-50 dark:bg-zinc-900/50 rounded-r-xl">
      <Quote className="text-blue-500 mb-2" size={20} />
      <p className="text-lg text-gray-900 dark:text-zinc-200 italic leading-relaxed">
        {text}
      </p>
      {author && (
        <footer className="mt-3 text-sm text-gray-500 dark:text-zinc-400">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
