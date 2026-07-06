"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex h-16 items-center justify-between">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2">
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

        {/* Right: Controls (Chat AI, Download, Theme Toggle) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Chat AI Button */}
          <button
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
