// components/CodeBlock.tsx

"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-zinc-800">
      {/* Header */}
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2">
        <span className="text-xs text-zinc-400 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="bg-[#0d0d0d] p-4 overflow-x-auto">
        <pre className="text-sm text-zinc-200 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
