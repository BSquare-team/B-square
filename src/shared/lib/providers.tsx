// src/shared/lib/providers.tsx
"use client";
import { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ORDER = ["/", "/team", "/blog", "/changelog"];

type NavContextType = {
  direction: number;
  navigate: (url: string) => void;
};

const NavContext = createContext<NavContextType>({ direction: 0, navigate: () => {} });
export const useNav = () => useContext(NavContext);

// ─── Page Transition ────────────────────────────────────────────
function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { direction, navigate } = useNav();

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50;
    const currentIndex = NAV_ORDER.indexOf(pathname);

    if (info.offset.x < -threshold) {
      const next = NAV_ORDER[currentIndex + 1];
      if (next) { navigate(next); router.push(next); }
    }
    if (info.offset.x > threshold) {
      const prev = NAV_ORDER[currentIndex - 1];
      if (prev) { navigate(prev); router.push(prev); }
    }
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", flex: 1 }}>
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30, bounce: 0 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ width: "100%", minHeight: "100%" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main Providers ─────────────────────────────────────────────
export function Providers({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState(0);
  const pathname = usePathname();

  const navigate = (url: string) => {
    const from = NAV_ORDER.indexOf(pathname);
    const to = NAV_ORDER.indexOf(url);
    setDirection(to > from ? 1 : -1);
  };

  return (
    <NavContext.Provider value={{ direction, navigate }}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PageTransition>{children}</PageTransition>
      </ThemeProvider>
    </NavContext.Provider>
  );
}