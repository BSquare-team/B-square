export type ProjectType = "motion" | "shorts" | "long-form";
export type ProjectIndustry = "power100" | "ryze" | "documentations";

export interface ProjectItem {
  topText: string;
  bottomText: string;
  YoutubeEmbed: string;
  thumbNail: string;
  type: ProjectType;
  industry: ProjectIndustry;
}

/**
 * دیتای تستی — برای تست فیلتر type + industry
 * بعداً جایگزین می‌شه با ProjectsAminData واقعی، فقط کافیه
 * به هر آیتم دو فیلد type و industry اضافه کنی.
 */
export const ProjectsAminDataAll: ProjectItem[] = [
  {
    topText: "Pitch Better, Watch Faster — My Edit of Adam Bensman",
    bottomText:
      "I re-edited one of Adam Bensman's talks on pitching. The goal: make the message sharper, more engaging, and ready for short-form platforms. This can work as a hook, a teaser, or a standalone mini-version.",
    YoutubeEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395027531776585728?compact=1",
    thumbNail: "D14-1.webm",
    type: "shorts",
    industry: "power100",
  },
  {
    topText: "From 2022 to 2025 — In 30 Seconds",
    bottomText:
      "A crisp 40s explainer that turns a complex compliance product into something prospects actually want to watch and act on.",
    YoutubeEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7385569211575697408?compact=1",
    thumbNail: "ui-style.webm",
    type: "motion",
    industry: "documentations",
  },
  {
    topText: "Ryze Mushroom Coffee — 1 Year, 100+ Shorts",
    bottomText:
      "One year of advertising for Ryze Mushroom Coffee. Over 100 short videos — each with motion graphics, voiceover, and fast cuts.",
    YoutubeEmbed: "",
    thumbNail: "Ryzepreview-1.webm",
    type: "shorts",
    industry: "ryze",
  },
  {
    topText: "Facebook Privacy Scandal — Full Documentary Edit",
    bottomText:
      "A deep dive into Facebook's data harvesting, Cambridge Analytica, and Mark Zuckerberg's journey. Edited for pacing, retention, and clarity — turning a 12-minute story into a tight, watchable narrative.",
    YoutubeEmbed: "",
    thumbNail: "Zuckerberg.webm",
    type: "long-form",
    industry: "documentations",
  },
  {
    topText: "Power100 Webinar Recap",
    bottomText:
      "Full-length recap edit of a live Power100 sales-training webinar, restructured for clarity and pacing.",
    YoutubeEmbed: "",
    thumbNail: "D14-1.webm",
    type: "long-form",
    industry: "power100",
  },
  {
    topText: "Ryze Brand Motion Piece",
    bottomText:
      "An animated brand explainer built entirely from custom motion graphics for Ryze Mushroom Coffee.",
    YoutubeEmbed: "",
    thumbNail: "ui-style.webm",
    type: "motion",
    industry: "ryze",
  },
];

export const TYPE_FILTERS: { key: ProjectType | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "motion", label: "Motion" },
  { key: "shorts", label: "Shorts" },
  { key: "long-form", label: "Long form" },
];

export const INDUSTRY_FILTERS: {
  key: ProjectIndustry | "all";
  label: string;
}[] = [
  { key: "all", label: "All" },
  { key: "power100", label: "Power100" },
  { key: "ryze", label: "Ryze Mushroom Coffee" },
  { key: "documentations", label: "Documentaries" },
];
