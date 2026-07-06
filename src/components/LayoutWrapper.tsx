"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavigationMenu } from "./NavigationMenu";
import { ScrollIndicator } from "./ScrollIndicator";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  const isHome = pathname === "/";

  if (isHome) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 py-12 min-h-[calc(100vh-64px)]">
        {children}
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 min-h-[calc(100vh-64px)]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Sidebar Menu Panel */}
        <aside className="w-full md:w-[340px] flex-shrink-0 bg-white dark:bg-black rounded-3xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 shadow-sm">
          <NavigationMenu />
        </aside>

        {/* Main Content Panel */}
        <section className="relative flex-1 min-w-0 bg-white dark:bg-black rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm overflow-hidden flex flex-col md:h-[calc(100vh-128px)]">
          <div
            ref={scrollRef}
            className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 sm:pr-4 mr-[-8px] sm:mr-[-16px]"
          >
            {children}
          </div>
          <ScrollIndicator scrollRef={scrollRef} />
        </section>
      </div>
    </main>
  );
}
