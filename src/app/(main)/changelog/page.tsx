// src/app/(main)/changelog/page.tsx

import { getAllChangelogEntries } from "@/src/features/changelog/lib/changelog";
import ChangelogTimeline from "../../../features/changelog/components/ChangelogTimeline";
import { APP_NAME, SERVER_URL } from "@/src/shared/lib/constants";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Changelog",
  description: "A timeline of our journey, updates, and milestones.",
  openGraph: {
    title: `Changelog | ${APP_NAME}`,
    description: "A timeline of our journey, updates, and milestones.",
    url: `${SERVER_URL}/changelog`,
  },
  alternates: {
    canonical: `${SERVER_URL}/changelog`,
  },
};

export default function ChangelogPage() {
  const entries = getAllChangelogEntries();

  return (
    <section className="mt-20 container max-w-7xl mx-auto px-8">
      <div className="prose dark:prose-invert">
        <h1>Changelog from our journey</h1>
        <p>
          A timeline of our progress, updates, and milestones. Here&apos;s what
          we&apos;ve been working on.
        </p>
      </div>

      <ChangelogTimeline entries={entries} />
    </section>
  );
}
