<a id="readme-top"></a>

<br />

<div align="center">
<a href="https://b-square.vercel.app">
  <img src="https://raw.githubusercontent.com/BSquare-team/B-square/main/public/images/logo.svg" alt="B-Square Logo" width="120" height="120" style="border-radius: 16px;">
</a>

  <h1 style="font-size: 2.5rem; font-weight: 800; margin-top: 16px;">BSquare</h1>

  <p style="font-size: 1.125rem; color: #71717a; max-width: 600px; margin: 0 auto;">
    A high-performance portfolio & blog built with <strong>Next.js 16</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS v4</strong>, and <strong>Sveltia CMS</strong> — deployed for free on Vercel.
  </p>

  <br />

  <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
    <a href="https://b-square.vercel.app"><strong>🌐 Live Demo</strong></a>
    <span style="color: #71717a;">·</span>
    <a href="https://github.com/BSquare-team/B-square"><strong>📁 GitHub Repository</strong></a>
    <span style="color: #71717a;">·</span>
    <a href="#-table-of-contents"><strong>📖 Documentation</strong></a>
  </div>
</div>

<br />

## 📖 Table of Contents

- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Content Management (Sveltia CMS)](#-content-management-sveltia-cms)
- [Architecture Decisions](#-architecture-decisions)
- [SEO & Performance](#-seo--performance)
- [Deployment](#-deployment)
- [Team](#-team)

## 📁 Project Structure

```
src/
├── app/                            # Next.js App Router (routing & layouts)
│   ├── (main)/                     # Route group: main site pages
│   │   ├── blog/
│   │   │   ├── [slug]/page.tsx     # Dynamic blog post page
│   │   │   └── page.tsx            # Blog listing page
│   │   ├── changelog/
│   │   │   └── page.tsx            # Team changelog & timeline
│   │   └── team/
│   │       ├── amin/page.tsx       # Amin's portfolio
│   │       ├── omid/page.tsx       # Omid's portfolio
│   │       └── page.tsx            # Team overview
│   ├── globals.css                 # Global styles & Tailwind imports
│   ├── layout.tsx                  # Root layout (fonts, metadata, providers)
│   ├── page.tsx                    # Homepage
│   ├── robots.ts                   # Dynamic robots.txt generation
│   └── sitemap.ts                  # Dynamic sitemap.xml generation
│
├── features/                       # Feature-based architecture
│   ├── blog/                       # Blog feature
│   │   ├── components/
│   │   │   ├── singlePost/         # Single post view components
│   │   │   │   ├── PostHeader.tsx       # Post header with title, author, tags
│   │   │   │   ├── PostContent.tsx      # Content block renderer
│   │   │   │   ├── TextBlock.tsx        # Markdown text renderer
│   │   │   │   ├── QuoteBlock.tsx       # Styled blockquote
│   │   │   │   ├── CodeBlock.tsx        # Syntax-highlighted code with copy
│   │   │   │   ├── FAQBlock.tsx         # Accordion FAQ (JSON-LD Schema)
│   │   │   │   ├── SimpleSliderBlock.tsx # Image carousel
│   │   │   │   └── CardSliderBlock.tsx  # Card-based slider
│   │   │   ├── BlogPostsSection.tsx     # Blog listing grid
│   │   │   ├── HeroSection.tsx          # Blog hero section
│   │   │   └── PostCard.tsx             # Individual post card
│   │   ├── lib/
│   │   │   └── posts.ts           # Post fetching, filtering & sorting
│   │   └── types/
│   │       └── blog.types.ts      # Blog-specific TypeScript types
│   │
│   ├── changelog/                  # Changelog feature
│   │   ├── components/
│   │   │   └── ChangelogTimeline.tsx # Timeline with sticky dates
│   │   ├── lib/
│   │   │   └── changelog.ts
│   │   └── types/
│   │       └── changelog.types.ts
│   │
│   └── team/                       # Team/portfolio feature
│       ├── components/
│       │   ├── PageHeroSec.tsx     # Reusable hero section
│       │   ├── AboutSec1.tsx       # About/bio section
│       │   ├── CompanyBanner.tsx   # Animated company logo banner
│       │   └── CommentsSec.tsx     # Testimonials section
│       ├── lib/
│       │   └── data.ts
│       └── type.ts
│
├── shared/                         # Shared utilities & UI components
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky header with navigation
│   │   │   └── Footer.tsx          # Site footer
│   │   └── ui/                     # Shadcn/ui components (30+)
│   │       ├── button.tsx
│   │       ├── accordion.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       └── ...
│   └── lib/
│       ├── constants/index.ts      # App-wide constants
│       ├── utils.ts                # Utility functions (cn, etc.)
│       └── motion.ts               # Animation presets
│
├── content/                        # Git-based CMS content
│   ├── blog/                       # Blog posts (JSON files)
│   └── changelog/                  # Changelog entries (JSON files)
│
└── public/
    ├── images/                     # CMS-uploaded images
    ├── admin/                      # Sveltia CMS admin panel
    │   ├── index.html
    │   └── config.yml
    └── sw.js                       # Service Worker (PWA)
```

> **Why this structure?** Each feature (blog, changelog, team) is self-contained. If you delete a feature folder, nothing else breaks. This makes the project scalable and team-friendly.

<p align="right"><a href="#readme-top">back to top</a></p>

## 🛠 Tech Stack

<div align="center">

| Layer               | Technology                  | Why                                             |
| :------------------ | :-------------------------- | :---------------------------------------------- |
| **Framework**       | Next.js 16 (App Router)     | Server Components, Static Generation, ISR       |
| **Language**        | TypeScript                  | Type safety across the entire codebase          |
| **Styling**         | Tailwind CSS v4 + Shadcn/ui | Utility-first CSS with accessible components    |
| **CMS**             | Sveltia CMS                 | Git-based, no server, no database, free forever |
| **Content Format**  | JSON                        | Structured, version-controlled, easy to query   |
| **Deployment**      | Vercel                      | Free hosting with automatic CI/CD from GitHub   |
| **Version Control** | GitHub (BSquare-team Org)   | Team collaboration with code review             |
| **SEO**             | Next.js Metadata API        | Dynamic Open Graph, Twitter Cards, JSON-LD      |
| **Performance**     | Static Generation + ISR     | Pages pre-rendered, revalidated every hour      |

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

## ✨ Key Features

### 🏗 Architecture

- **Feature-based folder structure** — each feature is self-contained
- **Shared UI library** — reusable Shadcn/ui components
- **Type-safe** — full TypeScript coverage
- **Content Blocks system** — modular content with 7 block types

### ✍️ Content Management (Sveltia CMS)

Sveltia CMS is a **Git-based headless CMS**. It stores content as JSON files in your repository. Every edit is a Git commit.

**How it works:**

1. You open `/admin/` and sign in with your GitHub access token
2. Sveltia CMS reads `public/admin/config.yml` to know what fields to show
3. You write a post → Sveltia creates a JSON file in `content/blog/`
4. Sveltia commits and pushes the file to GitHub
5. Vercel detects the commit → rebuilds the site automatically

**Why we chose Sveltia over other CMS options:**

<div align="center">

| Feature                | Sveltia CMS                    | Payload CMS               | WordPress         |
| :--------------------- | :----------------------------- | :------------------------ | :---------------- |
| **Cost**               | Free                           | Free (self-hosted)        | Hosting required  |
| **Database**           | None (Git-based)               | PostgreSQL                | MySQL             |
| **Deployment**         | No server needed               | Requires a server         | Requires a server |
| **Content Versioning** | Git (built-in)                 | Database                  | Plugins           |
| **Admin Panel**        | Clean, modern                  | Professional              | Classic           |
| **Learning Curve**     | Low                            | Medium                    | Low               |
| **Best For**           | Portfolios, blogs, small sites | Complex apps, large sites | Any site          |

</div>

### 🔍 SEO & Performance

- **Dynamic Metadata** — each page has custom title, description, and Open Graph tags
- **JSON-LD FAQ Schema** — auto-generated from FAQ content blocks
- **Auto-generated Sitemap** — `sitemap.xml` updated at build time
- **Auto-generated Robots.txt** — allows all pages, blocks `/admin/`
- **ISR (Incremental Static Regeneration)** — pages rebuild every hour
- **100/100 Lighthouse score** — optimized fonts, images, and static generation

### 🎨 Content Blocks

Each blog post is built from modular content blocks:

<div align="center">

| Block Type        | Description             | Example Use Case           |
| :---------------- | :---------------------- | :------------------------- |
| **Text**          | Markdown content        | Article body               |
| **Quote**         | Styled blockquote       | Testimonials, highlights   |
| **Code Snippet**  | Syntax-highlighted code | Tutorials, documentation   |
| **Simple Slider** | Image carousel          | Photo galleries            |
| **Card Slider**   | Card-based slider       | Project showcases          |
| **FAQ**           | Accordion Q&A           | Frequently asked questions |

</div>

### 📱 User Experience

- **Dark/Light mode** — system-aware with manual toggle
- **Responsive design** — mobile-first, optimized for all screen sizes
- **PWA ready** — installable on mobile & desktop (offline support coming soon)
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation

### 🤝 Team

- **Dual portfolio pages** — separate pages for Amin & Omid
- **Changelog timeline** — transparent record of team progress
- **GitHub Organization** — collaborative development workflow

<p align="right"><a href="#readme-top">back to top</a></p>

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20 or later
- **npm** (comes with Node.js)
- A **GitHub account** (for CMS admin panel)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/BSquare-team/B-square.git
cd B-square

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_NAME="B-Square"
NEXT_PUBLIC_APP_DESCRIPTION="A modern portfolio & blog built with Next.js"
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```

For production (`.env.production`):

```env
NEXT_PUBLIC_APP_NAME="B-Square"
NEXT_PUBLIC_APP_DESCRIPTION="A modern portfolio & blog built with Next.js"
NEXT_PUBLIC_SERVER_URL="https://b-square.vercel.app"
```

<p align="right"><a href="#readme-top">back to top</a></p>

## 📝 Content Management (Sveltia CMS)

### Accessing the Admin Panel

1. Go to `/admin/` (locally: `http://localhost:3000/admin/`)
2. Click **Sign in using access token**
3. Generate a **GitHub Personal Access Token**:
   - Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
   - Click **Generate new token (classic)**
   - Give it a name (e.g., `sveltia-cms`)
   - Select scopes: `repo` and `user`
   - Click **Generate token**
   - Copy the token
4. Paste the token into Sveltia CMS and sign in

### Creating a Blog Post

1. In the admin panel, click **Blog Posts** → **New Blog Post**
2. Fill in the fields:
   <div align="center">

   | Field              | Description                                               |
   | :----------------- | :-------------------------------------------------------- |
   | **Featured Image** | Optional. Header image for the post.                      |
   | **Title**          | The post title.                                           |
   | **Description**    | A short excerpt shown in blog cards.                      |
   | **URL Slug**       | The URL path (e.g., `my-story`).                          |
   | **Author**         | Select Amin or Omid.                                      |
   | **Publish Date**   | Auto-filled with current date/time.                       |
   | **Published**      | Toggle to hide/show the post.                             |
   | **Category Tags**  | Up to 3 category tags (e.g., Personal, Career).           |
   | **Tech Tags**      | Up to 3 technology tags (e.g., Next.js, React).           |
   | **SEO Settings**   | Optional. Custom meta title, description, keywords.       |
   | **Content Blocks** | Add one or more content blocks (Text, Quote, Code, etc.). |

</div>

3. Click **Save** — Sveltia will commit the file to GitHub and Vercel will redeploy the site.

### Content Block Types

#### Text Block

Use Markdown to write formatted text.

```markdown
## This is a heading

This is **bold** and this is _italic_.

- List item 1
- List item 2
```

#### Quote Block

A styled blockquote with optional author attribution.

#### Code Snippet Block

Syntax-highlighted code with a copy button. Select the language for proper highlighting.

#### Simple Slider Block

An image carousel with optional captions. Add multiple slides with images and captions.

#### Card Slider Block

A card-based slider with image, title, description, and optional link. Great for project showcases.

#### FAQ Block

Accordion-style questions and answers. Automatically generates JSON-LD Schema for Google Rich Results.

### Creating a Changelog Entry

1. In the admin panel, click **Changelog** → **New Changelog Entry**
2. Fill in the fields:
   <div align="center">

   | Field       | Description                                                 |
   | :---------- | :---------------------------------------------------------- |
   | **Title**   | The changelog entry title.                                  |
   | **Date**    | Auto-filled with current date/time.                         |
   | **Entries** | Multiple entries, each with an author and Markdown content. |

</div>

3. Click **Save**.

<p align="right"><a href="#readme-top">back to top</a></p>

## 🏗 Architecture Decisions

### Why Feature-Based Structure?

Each feature (blog, changelog, team) is **self-contained** with its own:

- Components
- Logic (`lib/`)
- TypeScript types (`types/`)

**Benefits:**

- Delete a feature folder → nothing else breaks
- Multiple developers can work on different features simultaneously
- Easy to onboard new team members — each feature is a mini-project
- Scales well as the project grows

### Why Sveltia CMS?

<div align="center">

| Requirement           | Sveltia CMS                                       |
| :-------------------- | :------------------------------------------------ |
| **Free forever**      | ✅ Open-source, no hosting costs                  |
| **No database**       | ✅ Content is JSON files in Git                   |
| **Version control**   | ✅ Every edit is a Git commit                     |
| **Clean admin panel** | ✅ Modern UI, easy for non-technical users        |
| **Customizable**      | ✅ Define your own content types via `config.yml` |
| **Works offline**     | ✅ Admin panel loads as a PWA                     |

</div>
### Why ISR (Incremental Static Regeneration)?

Pages are **pre-rendered at build time** for maximum speed, then **revalidated every hour** to pick up content changes.

```typescript
// app/(main)/blog/[slug]/page.tsx
export const revalidate = 3600; // Rebuild every hour
```

**Benefits:**

- Users always get fast, pre-rendered HTML
- Content updates automatically (no manual redeploy needed)
- Zero server costs for each request

### Why JSON (Not Markdown or MDX)?

We chose JSON over Markdown files because:

- **Structured data** — easy to validate with TypeScript
- **Content Blocks** — modular content system impossible with plain Markdown
- **Query-friendly** — easy to filter, sort, and search
- **Sveltia CMS support** — native JSON editing with custom widgets

<p align="right"><a href="#readme-top">back to top</a></p>

## 🔍 SEO & Performance

### Dynamic Metadata

Each blog post generates custom SEO metadata:

```typescript
// app/(main)/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.description,
    openGraph: {
      title: `${post.title} | B-Square`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  };
}
```

### JSON-LD FAQ Schema

FAQ content blocks automatically generate structured data for Google Rich Results:

```typescript
function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };
}
```

### Sitemap & Robots

- **`app/sitemap.ts`** — auto-generates `sitemap.xml` with all blog posts
- **`app/robots.ts`** — allows all pages, blocks `/admin/` from indexing

<p align="right"><a href="#readme-top">back to top</a></p>

## 🚢 Deployment

The site is deployed on [Vercel](https://vercel.com) with automatic CI/CD. Every push to `main` triggers a rebuild.

### Our Workflow

1. Write or edit a post in [Sveltia CMS](/admin/)
2. Sveltia commits the JSON file to the [GitHub repository](https://github.com/BSquare-team/B-square)
3. Vercel detects the commit and redeploys the site automatically

**We never need to touch the command line to publish content.** The entire pipeline — CMS → GitHub → Vercel — is fully automated.

### Tech

<div align="center">

| Layer               | Tool                                                                           |
| :------------------ | :----------------------------------------------------------------------------- |
| **Hosting**         | [Vercel](https://vercel.com) (Hobby plan — free)                               |
| **CMS**             | [Sveltia CMS](https://sveltia-cms.dev) (Git-based — free)                      |
| **Version Control** | [GitHub](https://github.com/BSquare-team/B-square) (BSquare-team Organization) |
| **Domain**          | `b-square.vercel.app` (custom domain coming soon)                              |

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

## 👥 Team

<div align="center">

| Member           | Role                | GitHub                                     | LinkedIn                                              |
| :--------------- | :------------------ | :----------------------------------------- | :---------------------------------------------------- |
| **Amin Bagheri** | Front-End Developer | [aminb9383](https://github.com/aminb9383) | [LinkedIn](https://www.linkedin.com/in/amin-baghery/) |—                                                     |
| **Omid Bagheri** | Front-End Lead & Architect| [omid-baghery](https://github.com/omid-baghery)     | [LinkedIn](https://www.linkedin.com/in/omid-baghery/) |

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

<br />

---

<div align="center">
  <p>Built with ❤️ by the <strong>BSquare Team</strong></p>
  <p>
    <a href="https://b-square.vercel.app">🌐 Live Site</a>
    <span>·</span>
    <a href="https://github.com/BSquare-team/B-square">📁 GitHub</a>
  </p>
</div>
