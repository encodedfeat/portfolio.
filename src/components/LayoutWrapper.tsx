"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavigationMenu } from "./NavigationMenu";
import { BlogMenu } from "./BlogMenu";
import { ScrollIndicator } from "./ScrollIndicator";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isHomeOrBlogsIndex = pathname === "/" || pathname === "/blogs";

  if (isHomeOrBlogsIndex) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 py-12 min-h-[calc(100vh-64px)]">
        {children}
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 min-h-[calc(100vh-64px)] flex flex-col">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
        {/* Sidebar Menu Panel */}
        <aside className="w-full md:w-[340px] flex-shrink-0 h-fit bg-white dark:bg-black rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-4 sm:p-6">
          {pathname.startsWith("/blogs") ? <BlogMenu /> : <NavigationMenu />}
        </aside>

        {/* Main Content Panel */}
        <section className="relative flex-1 min-w-0 h-fit bg-white dark:bg-black rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
          {children}
          <ScrollIndicator />
        </section>
      </div>
    </main>
  );
}
