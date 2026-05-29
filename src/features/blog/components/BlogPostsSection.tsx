// src/app/(main)/blog/_components/BlogPostsSection.tsx

import PostCard from "./PostCard";


interface BlogPostsSectionProps {
  posts: {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
  }[];
}

export default function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  if (posts.length === 0) {
    return (
      <section className="px-6 py-20 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No posts yet. Check back soon!
        </p>
      </section>
    );
  }

  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-medium mb-6">All posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
