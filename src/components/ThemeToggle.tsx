"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-zinc-200 dark:bg-zinc-800" />;
  }

  const isDark = theme === "dark";

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = isDark ? "light" : "dark";
    
    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
          fill: "forwards",
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-12 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 p-1 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center shadow-sm"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={10} className="text-zinc-400" />
        ) : (
          <Sun size={10} className="text-zinc-600" />
        )}
      </motion.div>
    </button>
  );
}
