"use client";

import FeaturedProjects from "@/src/features/team/components/singlePost/FeaturedProjects";
import PageHeader from "@/src/features/team/components/singlePost/PageHeader";
import {
  useProjectFilter,
  TYPE_FILTERS,
  INDUSTRY_FILTERS,
} from "@/data/useProjectFilter";
import { ProjectFilterBar } from "@/src/features/team/components/singlePost/ProjectFilterBar";
import { ProjectsAminDataAll } from "@/data/FeaturedProjectsDataAll";

export default function EditPageContent() {
  const {
    filteredData,
    typeFilter,
    industryFilter,
    setTypeFilter,
    setIndustryFilter,
  } = useProjectFilter(ProjectsAminDataAll);

  return (
    <>
      <PageHeader
        heroTitle={
          <>
            Videos that
            <span className="font-semibold not-italic"> move </span>
            <br />
            products forward
          </>
        }
        description="Every video we make is built around one goal — helping great products get the attention they deserve."
      />

      <div className="container mx-auto max-w-7xl px-[34px] pt-16">
        <ProjectFilterBar
          typeOptions={TYPE_FILTERS}
          industryOptions={INDUSTRY_FILTERS}
          typeFilter={typeFilter}
          industryFilter={industryFilter}
          onTypeChange={setTypeFilter}
          onIndustryChange={setIndustryFilter}
        />
      </div>

      <FeaturedProjects
        data={filteredData}
        buttonHref="/team/amin#lets-call"
        buttonText="Let's call"
      />
    </> 
  );
}
