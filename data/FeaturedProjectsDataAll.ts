export type ProjectType = "motion" | "shorts" | "long-form";
export type ProjectIndustry =
  | "power100"
  | "ryze"
  | "documentations"
  | "Pitch"
  | "unsorted";

export interface ProjectItem {
  topText: string;
  bottomText: string;
  YoutubeEmbed: string;
  thumbNail: string;
  type: ProjectType;
  industry: ProjectIndustry;
  params?: string;
  linkText?: string;
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
    type: "motion",
    industry: "Pitch",
  },
  {
    topText: "From 2022 to 2025 — In 30 Seconds",
    bottomText:
      "A crisp 40s explainer that turns a complex compliance product into something prospects actually want to watch and act on.",
    YoutubeEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7385569211575697408?compact=1",
    thumbNail: "ui-style.webm",
    type: "motion",
    industry: "unsorted",
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
    topText: "Create 1.2M Views - WANNAnO youtube channel ",
    bottomText:
      "end-to-end, scripting, voiceover, editing, sound design, and typography — growing the channel to 1.2M views on short-form content.",
    YoutubeEmbed: "",
    thumbNail: "WANNAnO-overview.png",
    type: "shorts",
    industry: "documentations",
    params: "https://www.youtube.com/@WANNAnO22",
    linkText: "View channel",
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
    topText: "MUSHROOM MATCHA",
    bottomText:
      "Loaded with adaptogenic mushrooms, our coffee blend delivers calmer energy, sharper focus, and immune support for a balanced body.",
    YoutubeEmbed: "https://www.youtube.com/embed/3AuClHtIcJc ",
    thumbNail: "",
    type: "shorts",
    industry: "ryze",
  },
  {
    topText: "Mushroom Hot Cocoa",
    bottomText:
      " Mushroom Hot Cocoa is loaded with all-natural, antioxidant-rich ingredients that put quality sleep at the forefront of your wellness routine.",
    YoutubeEmbed: "https://www.youtube.com/embed/hr9GKBw3_xU",
    thumbNail: "",
    type: "shorts",
    industry: "ryze",
  },
  {
    topText: "Reverse Psychology Demo_03",
    bottomText: "",
    YoutubeEmbed: "https://www.youtube.com/embed/w0bF5nRh9tE",
    thumbNail: "",
    type: "shorts",
    industry: "ryze",
  },
  {
    topText: "Smoking Demo_04",
    bottomText: "",
    YoutubeEmbed: "https://www.youtube.com/embed/e3XuLv-tnag",
    thumbNail: "",
    type: "shorts",
    industry: "ryze",
  },
  {
    topText: "MC AI Future Pacing Demo_07",
    bottomText: "",
    YoutubeEmbed: "https://www.youtube.com/embed/yxAKYLY0nw4",
    thumbNail: "",
    type: "shorts",
    industry: "ryze",
  },

  {
    topText: "MC Stuck poop Demo",
    bottomText: "",
    YoutubeEmbed: "https://www.youtube.com/embed/3wI54YoiTx0",
    thumbNail: "",
    type: "shorts",
    industry: "ryze",
  },
];

// Highlight in amin page

export const ProjectsAminData: ProjectItem[] = [
  {
    topText: "Pitch Better, Watch Faster — My Edit of Adam Bensman",
    bottomText: "I re-edited one of Adam Bensman's talks on pitching...",
    YoutubeEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395027531776585728?compact=1",
    thumbNail: "D14-1.webm",
    type: "motion",
    industry: "Pitch",
    params: "",
    linkText: "",
  },
  {
    topText: "Create 1.2M Views - WANNAnO youtube channel ",
    bottomText:
      "end-to-end, scripting, voiceover, editing, sound design, and typography — growing the channel to 1.2M views on short-form content.",
    YoutubeEmbed: "",
    thumbNail: "WANNAnO-overview.png",
    type: "shorts",
    industry: "documentations",
    params: "https://www.youtube.com/@WANNAnO22",
    linkText: "View channel",
  },
  {
    topText: "From 2022 to 2025 — In 30 Seconds",
    bottomText: "A crisp 40s explainer...",
    YoutubeEmbed:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7385569211575697408?compact=1",
    thumbNail: "ui-style.webm",
    type: "motion",
    industry: "unsorted",
    params: "",
    linkText: "",
  },
  {
    topText: "Ryze Mushroom Coffee — 1 Year, 100+ Shorts",
    bottomText: "One year of advertising for Ryze Mushroom Coffee...",
    YoutubeEmbed: "",
    thumbNail: "Ryzepreview-1.webm",
    type: "shorts",
    industry: "ryze",
    params: "/edit?industry=ryze",
    linkText: "View shorts",
  },
  {
    topText: "Highlighting events - Power100",
    bottomText:
      "review and pick best moments and talks from hours of raw footage to make a 1-minute highlight short with SFX and motion, and create a strong hook.",
    YoutubeEmbed: "",
    thumbNail: "three-in-one-2.webm",
    type: "shorts",
    industry: "ryze",
    params: "https://www.youtube.com/@Power100Official",
    linkText: "Power100 youtube channel",
  },
  {
    topText: "Facebook Privacy Scandal — Full Documentary Edit",
    bottomText: "A deep dive into Facebook's data harvesting...",
    YoutubeEmbed: "",
    thumbNail: "Zuckerberg.webm",
    type: "long-form",
    industry: "documentations",
    params: "",
    linkText: "",
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
