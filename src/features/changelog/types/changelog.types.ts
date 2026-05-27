// src/features/changelog/types/changelog.types.ts

export interface ChangelogEntryItem {
  author: string;
  content: string;
}

export interface ChangelogEntry {
  date: string;
  title: string;
  entries: ChangelogEntryItem[];
  slug: string;
}