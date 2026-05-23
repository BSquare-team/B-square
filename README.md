```ts
src/
├── app/
│   ├── (main)/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       ├── loading.tsx
│   │   │       └── error.tsx
│   │   │
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   │
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/
│   │
│   ├── favicon.ico
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
│
├── features/
│   ├── blog/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── blog-hero-section.tsx
│   │   │   │   ├── blog-category-section.tsx
│   │   │   │   └── blog-posts-section.tsx
│   │   │   │
│   │   │   ├── cards/
│   │   │   │   └── post-card.tsx
│   │   │   │
│   │   │   ├── post/
│   │   │   │   ├── post-header.tsx
│   │   │   │   ├── post-content.tsx
│   │   │   │   ├── post-image.tsx
│   │   │   │   ├── post-tags.tsx
│   │   │   │   └── post-meta.tsx
│   │   │   │
│   │   │   └── mdx/
│   │   │       ├── faq-block.tsx
│   │   │       ├── quote-block.tsx
│   │   │       ├── swiper-block.tsx
│   │   │       ├── code-block.tsx
│   │   │       └── image-block.tsx
│   │   │
│   │   ├── lib/
│   │   │   ├── posts.ts
│   │   │   ├── mdx.ts
│   │   │   ├── metadata.ts
│   │   │   └── formatters.ts
│   │   │
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   │   └── blog.types.ts
│   │   │
│   │   └── constants/
│   │
│   ├── portfolio/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── portfolio-hero.tsx
│   │   │   │   ├── portfolio-projects.tsx
│   │   │   │   └── portfolio-comments.tsx
│   │   │   │
│   │   │   ├── cards/
│   │   │   └── ui/
│   │   │
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── lib/
│   │   └── types/
│   │
│   └── comments/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types/
│
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── input.tsx
│   │   │   ├── typography.tsx
│   │   │   └── modal.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── container.tsx
│   │   │
│   │   └── states/
│   │       ├── empty-state.tsx
│   │       ├── loading-state.tsx
│   │       └── error-state.tsx
│   │
│   ├── hooks/
│   │   ├── use-media-query.ts
│   │   └── use-debounce.ts
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   ├── cn.ts
│   │   └── env.ts
│   │
│   ├── services/
│   ├── types/
│   │
│   └── styles/
│       └── globals.css
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── middleware.ts
```
