"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, Download, BookOpen, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent, targetPath: string, name: string) => {
    const isCurrentPage = 
      targetPath === "/" ? pathname === "/" : pathname.startsWith(targetPath);
      
    if (isCurrentPage) {
      e.preventDefault();
      setToastMsg(`You are on ${name} page`);
      setTimeout(() => setToastMsg(null), 2500);
    }
  };

  const handleChatClick = () => {
    // Since Chat AI doesn't have a page right now, we simulate being on it
    setToastMsg(`You are on Chat AI page`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black/5 dark:border-white/5">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300 pointer-events-none">
          {toastMsg}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex h-16 items-center justify-between">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2 flex-1">
          <Link href="/" className="font-bold text-xl text-zinc-900 dark:text-white flex items-center gap-2">
            {/* Avatar Logo */}
            <div className="w-8 h-8 rounded-md bg-yellow-400 border border-black overflow-hidden flex-shrink-0 relative">
              <Image 
                src="/avatar.png" 
                alt="Mohit Logo"
                fill
                className="object-cover scale-[1.5] mix-blend-multiply"
              />
            </div>
            <span className="hidden sm:block">Mohit</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/", "Portfolio")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Portfolio"
          >
            <Briefcase size={20} />
            <span className="hidden md:block">Portfolio</span>
          </Link>

          <Link
            href="/blogs"
            onClick={(e) => handleNavClick(e, "/blogs", "Blogs")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Blogs/Thoughts"
          >
            <BookOpen size={20} />
            <span className="hidden md:block">Blogs/Thoughts</span>
          </Link>
        </div>

        {/* Right: Controls (Chat AI, Download, Theme Toggle) */}
        <div className="flex items-center justify-end gap-3 sm:gap-4 flex-1">

          {/* Chat AI Button */}
          <button
            onClick={handleChatClick}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Chat AI"
          >
            <MessageSquare size={20} />
            <span className="hidden md:block">Chat AI</span>
          </button>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1Wx6mfgym7owMoVk741zvzplq5bZ_NwTxQF9E6nqmY58"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Download CV"
          >
            <Download size={20} />
            <span className="hidden md:block">Download CV</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
