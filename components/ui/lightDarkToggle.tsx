"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type a = {
  className?: string;
};

export default function LightDarkToggle({ className }: a) {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={className}
              onClick={() => {
                setTheme(isDark ? "light" : "dark");
              }}
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </button>
          </TooltipTrigger>

          <TooltipContent>
            {isDark ? "Enable Light mode" : "Enable Dark mode"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}