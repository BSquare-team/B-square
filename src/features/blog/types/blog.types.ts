// src/features/blog/types/blog.types.ts

export interface SimpleSlide {
  src: string;
  caption?: string;
}

export interface CardSlide {
  src: string;
  title: string;
  description?: string;
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentBlock {
  type: "text" | "simpleSlider" | "cardSlider" | "code" | "quote" | "faq";
  content?: string;
  slides?: SimpleSlide[];
  cards?: CardSlide[];
  language?: string;
  code?: string;
  text?: string;
  author?: string;
  questions?: FAQItem[];
}

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonical?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  published?: boolean;
  categoryTags: string[];
  techTags: string[];
  featuredImage?: string;
  blocks: ContentBlock[];
  slug: string;
  seo?: SEOData;
}
