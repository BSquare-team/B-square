"use client";

interface FilterOption {
  key: string;
  label: string;
}

interface FilterGroupProps {
  label: string;
  options: FilterOption[];
  active: string;
  onChange: (key: string) => void;
}

function FilterGroup({ label, options, active, onChange }: FilterGroupProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-[10px] tracking-[0.15em] uppercase text-[#777] w-[64px] flex-shrink-0">
        {label}
      </span>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((opt) => {
          const isActive = active === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => onChange(opt.key)}
              className={`text-[12px] px-3 py-1 rounded-full border transition-colors duration-200 whitespace-nowrap
                ${
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-[#777] hover:text-foreground hover:border-foreground/40"
                }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ProjectFilterBarProps {
  typeOptions: FilterOption[];
  industryOptions: FilterOption[];
  typeFilter: string;
  industryFilter: string;
  onTypeChange: (key: string) => void;
  onIndustryChange: (key: string) => void;
  className?: string;
}

/**
 * کامپوننت مستقل UI فیلتر — هیچ state داخلی‌ای نداره،
 * فقط value/onChange می‌گیره. state واقعی تو useProjectFilter زندگی می‌کنه.
 * هرجا خواستی (بالای FeaturedProjects، بالای هر گرید دیگه) صداش بزن.
 */
export function ProjectFilterBar({
  typeOptions,
  industryOptions,
  typeFilter,
  industryFilter,
  onTypeChange,
  onIndustryChange,
  className,
}: ProjectFilterBarProps) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      <FilterGroup
        label="Type"
        options={typeOptions}
        active={typeFilter}
        onChange={onTypeChange}
      />
      <FilterGroup
        label="Industry"
        options={industryOptions}
        active={industryFilter}
        onChange={onIndustryChange}
      />
    </div>
  );
}
