"use client";

import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "Experience", href: "/experience", id: "experience" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Skills", href: "/skills", id: "skills" },
    { name: "Education", href: "/education", id: "education" },
  ];

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 flex h-16 items-center justify-between">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${pathname === link.href
                ? "text-accent"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Branding (Visible only on mobile) */}
        <div className="md:hidden font-bold text-lg text-zinc-900 dark:text-white">
          Mohit🌼
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/resume"
            className={`hidden md:block text-sm font-medium transition-colors mr-2 ${
              pathname === "/resume"
                ? "text-accent"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            Resume
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-background/40 backdrop-blur-sm z-40 h-[200vh]"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-6 py-6 flex flex-col gap-6 shadow-xl z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors ${pathname === link.href
                ? "text-accent"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] w-full bg-black/5 dark:bg-white/5 my-2" />
          <Link
            href="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-medium transition-colors ${
              pathname === "/resume"
                ? "text-accent"
                : "text-zinc-900 dark:text-white"
            }`}
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
}
