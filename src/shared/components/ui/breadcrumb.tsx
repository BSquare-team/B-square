"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

import { SERVER_URL } from "@/src/shared/lib/constants";

/**
 * Map از اسلاگ خام (که تو URL هست) به لیبل خوانا.
 * هر مسیر جدید که اضافه کردی، اگه اسلاگش با چیزی که می‌خوای
 * نشون داده بشه فرق داره (lowercase، dash-case، یا اسم دیتابیسی)،
 * اینجا اضافه‌ش کن.
 */
const LABEL_MAP: Record<string, string> = {
  team: "Team",
  amin: "Amin",
  omid: "Omid",
  blog: "Blog",
  changelog: "Changelog",
};

/** اسلاگ‌هایی که اصلاً نباید تو breadcrumb نشون داده بشن (مثل گروه‌های route مثل (main)) */
const HIDDEN_SEGMENTS = new Set<string>([]);

function toLabel(segment: string) {
  if (LABEL_MAP[segment]) return LABEL_MAP[segment];

  // fallback: kebab/snake-case رو به Title Case تبدیل می‌کنه
  // مثلا "my-awesome-post" -> "My Awesome Post"
  return segment
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  /** برای override کردن لیبل آخرین آیتم (مثلاً عنوان واقعی پست بلاگ به‌جای اسلاگ) */
  overrideLastLabel?: string;
  className?: string;
}

export function Breadcrumb({ overrideLastLabel, className }: BreadcrumbProps) {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((seg) => !HIDDEN_SEGMENTS.has(seg));

  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...segments.map((seg, i) => ({
      label: toLabel(seg),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  if (overrideLastLabel && items.length > 1) {
    items[items.length - 1] = {
      ...items[items.length - 1],
      label: overrideLastLabel,
    };
  }

  // برای موبایل: اگه بیش از ۲ آیتم بود، فقط "..." + دو تای آخر نشون بده
  const isLong = items.length > 3;

  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center flex-wrap gap-1.5 text-[11px] tracking-[0.05em]">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            const isCollapsedOnMobile =
              isLong && i !== 0 && i !== items.length - 1 && i !== items.length - 2;

            return (
              <Fragment key={item.href}>
                {i !== 0 && (
                  <ChevronRight
                    size={12}
                    strokeWidth={1.75}
                    className="text-[#999] flex-shrink-0"
                    aria-hidden="true"
                  />
                )}

                <li
                  className={isCollapsedOnMobile ? "hidden sm:block" : undefined}
                >
                  {isLast ? (
                    <span
                      className="text-foreground font-medium"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#777] font-light hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              </Fragment>
            );
          })}

          {/* "..." وقتی موبایل و مسیر طولانیه */}
          {isLong && (
            <li className="sm:hidden text-[#999] font-light" aria-hidden="true">
              …
            </li>
          )}
        </ol>
      </nav>

      {/* JSON-LD برای سئو — گوگل این رو می‌خونه تا تو نتایج جستجو مسیر رو نشون بده */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              item: `${SERVER_URL}${item.href}`,
            })),
          }),
        }}
      />
    </>
  );
}
