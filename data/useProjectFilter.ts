"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ProjectType, ProjectIndustry, ProjectItem } from "@/data/FeaturedProjectsDataAll";

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

export function useProjectFilter<T extends ProjectItem>(data: T[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawType = searchParams.get("type");
  const rawIndustry = searchParams.get("industry");

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