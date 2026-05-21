// components/PostContent.tsx

"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { ContentBlock } from "@/lib/types";
import ImageSlider from "./ImageSlider";
import CodeBlock from "./CodeBlock";
import QuoteBlock from "./QuoteBlock";

interface PostContentProps {
  blocks: ContentBlock[];
}

export default function PostContent({ blocks }: PostContentProps) {
  if (!blocks || blocks.length === 0) {
    return <p className="text-zinc-400">No content yet.</p>;
  }

  return (
    <div className="post-content space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <div
                key={index}
                className="prose prose-invert prose-zinc max-w-none"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight, rehypeRaw]}
                >
                  {block.content || ""}
                </ReactMarkdown>
              </div>
            );

          case "image":
            return (
              <figure key={index} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  className="w-full rounded-xl object-cover max-h-96"
                />
                {block.caption && (
                  <figcaption className="text-center text-sm text-zinc-400 mt-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "slider":
            if (!block.slides || block.slides.length === 0) return null;
            return <ImageSlider key={index} slides={block.slides} />;

          case "code":
            return (
              <CodeBlock
                key={index}
                language={block.language || "typescript"}
                code={block.code || ""}
              />
            );

          case "quote":
            return (
              <QuoteBlock
                key={index}
                text={block.text || ""}
                author={block.author}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
