// lib/types.ts

export interface Tag {
  tag: string;
}

export interface Slide {
  src: string;
  caption?: string;
}

export interface ContentBlock {
  type: "text" | "image" | "slider" | "code" | "quote";
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
  slides?: Slide[];
  language?: string;
  code?: string;
  text?: string;
  author?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  author: "amin" | "omid";
  date: string;
  categoryTags: Tag[];
  techTags: Tag[];
  featuredImage?: string;
  blocks: ContentBlock[];
  slug: string;
}
