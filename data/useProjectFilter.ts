"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type ProjectType = "motion" | "shorts" | "long-form";
export type ProjectIndustry = "power100" | "ryze" | "documentations";

export interface FilterableProject {
  type: ProjectType;
  industry: ProjectIndustry;
}

export const TYPE_FILTERS: { key: ProjectType | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "motion", label: "Motion" },
  { key: "shorts", label: "Shorts" },
  { key: "long-form", label: "Long form" },
];

export const INDUSTRY_FILTERS: { key: ProjectIndustry | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "power100", label: "Power100" },
  { key: "ryze", label: "Ryze Mushroom Coffee" }, 
  { key: "documentations", label: "Documentaries" },
];

const VALID_TYPES = new Set(TYPE_FILTERS.map((t) => t.key));
const VALID_INDUSTRIES = new Set(INDUSTRY_FILTERS.map((i) => i.key));

/**
 * نسخه‌ی URL-synced فیلتر — به‌جای useState داخلی، خود URL
 * (?type=...&industry=...) منبع حقیقت state هست.
 * یعنی هر لینکی که با این query بسازی، همون فیلتر رو فعال می‌کنه.
 */
export function useProjectFilter<T extends FilterableProject>(data: T[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawType = searchParams.get("type");
  const rawIndustry = searchParams.get("industry");

  // اگه تو URL یه مقدار نامعتبر بود (مثلاً ?type=banana)، fallback به "all"
  const typeFilter =
    rawType && VALID_TYPES.has(rawType as ProjectType | "all") ? rawType : "all";
  const industryFilter =
    rawIndustry && VALID_INDUSTRIES.has(rawIndustry as ProjectIndustry | "all")
      ? rawIndustry
      : "all";

  const updateParam = useCallback(
    (key: "type" | "industry", value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      const query = params.toString();
      // replace نه push — هر کلیک روی فیلتر یه history entry جدید نمی‌سازه
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  const setTypeFilter = useCallback(
    (key: string) => updateParam("type", key),
    [updateParam]
  );
  const setIndustryFilter = useCallback(
    (key: string) => updateParam("industry", key),
    [updateParam]
  );

  const filteredData = useMemo(() => {
    return data.filter(
      (p) =>
        (typeFilter === "all" || p.type === typeFilter) &&
        (industryFilter === "all" || p.industry === industryFilter)
    );
  }, [data, typeFilter, industryFilter]);

  return {
    filteredData,
    typeFilter,
    industryFilter,
    setTypeFilter,
    setIndustryFilter,
  };
}