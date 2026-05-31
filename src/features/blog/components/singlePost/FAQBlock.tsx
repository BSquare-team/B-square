// src/features/blog/components/singlePost/FAQBlock.tsx

import { FAQItem } from "../../types/blog.types";

export default function FAQBlock({ questions }: { questions: FAQItem[] }) {
  return (
    <div className="space-y-4 my-8">
      {questions.map((faq, i) => (
        <details
          key={i}
          className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-5 
                     bg-white dark:bg-gray-900/50 
                     hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
        >
          <summary
            className="cursor-pointer list-none font-semibold text-gray-900 dark:text-white 
                              group-open:text-teal-600 dark:group-open:text-teal-400 transition-colors
                              flex justify-between items-center"
          >
            {faq.question}
            <svg
              className="w-5 h-5 shrink-0 ml-4 transition-transform group-open:rotate-180 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div
            className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </details>
      ))}
    </div>
  );
}
