// src/features/blog/types/blog.types.ts

export interface Tag {
  tag: string;
}

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

export interface ContentBlock {
  type: "text" | "simpleSlider" | "cardSlider" | "code" | "quote";
  content?: string;
  slides?: SimpleSlide[];
  cards?: CardSlide[];
  language?: string;
  code?: string;
  text?: string;
  author?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  categoryTags: Tag[];
  techTags: Tag[];
  featuredImage?: string;
  blocks: ContentBlock[];
  slug: string;
}

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: { keyword: string }[];
  canonical?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  categoryTags: Tag[];
  techTags: Tag[];
  featuredImage?: string;
  blocks: ContentBlock[];
  slug: string;
  seo?: SEOData; // ⬅️ جدید
}
