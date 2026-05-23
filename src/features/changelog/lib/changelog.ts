// src/features/changelog/lib/changelog.ts

import fs from "fs";
import path from "path";
import { ChangelogEntry } from "@/src/features/changelog/types/changelog.types";

const changelogDirectory = path.join(process.cwd(), "content/changelog");

export function getAllChangelogEntries(): ChangelogEntry[] {
  if (!fs.existsSync(changelogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(changelogDirectory);

  const entries = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const fullPath = path.join(changelogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const entryData = JSON.parse(fileContents);
      const slug = fileName.replace(".json", "");

      return {
        ...entryData,
        slug,
      } as ChangelogEntry;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return entries;
}
