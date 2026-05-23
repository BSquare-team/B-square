// src/app/(main)/blog/[slug]/_components/PostContent.tsx

import TextBlock from "./TextBlock";
import SimpleSliderBlock from "./SimpleSliderBlock";
import CardSliderBlock from "./CardSliderBlock";
import CodeBlock from "./CodeBlock";
import QuoteBlock from "./QuoteBlock";
import type { ContentBlock } from "@/src/features/blog/lib/blog.types";

interface PostContentProps {
  blocks: ContentBlock[];
}

export default function PostContent({ blocks }: PostContentProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-10">
        No content yet.
      </p>
    );
  }

  return (
    <div className="m-auto max-w-3xl">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "text":
            if (!block.content) return null;
            return <TextBlock key={index} content={block.content} />;

          case "simpleSlider":
            if (!block.slides || block.slides.length === 0) return null;
            return <SimpleSliderBlock key={index} slides={block.slides} />;

          case "cardSlider":
            if (!block.cards || block.cards.length === 0) return null;
            return <CardSliderBlock key={index} cards={block.cards} />;

          case "code":
            if (!block.code) return null;
            return (
              <CodeBlock
                key={index}
                language={block.language || "typescript"}
                code={block.code}
              />
            );

          case "quote":
            if (!block.text) return null;
            return (
              <QuoteBlock key={index} text={block.text} author={block.author} />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
