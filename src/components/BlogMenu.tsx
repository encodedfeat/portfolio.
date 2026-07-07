"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ChevronDown, Copy, Check, BadgeCheck, ArrowLeft, Plus, Minus, Book, Terminal, BookOpen, Feather, Disc } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle, FaEnvelope, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export function BlogMenu() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [isEpExpanded, setIsEpExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const collections = [
    { name: "All", icon: "dot" },
    { name: "Guides", icon: Book },
    { name: "Dev Blogs", icon: Terminal },
    { name: "Life Stories", icon: BookOpen },
    { name: "Poems", icon: Feather },
    { name: "EPs & Thoughts", icon: Disc },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("encodedfeat@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const epLinks = [
    { name: "1. More Than Numbers and Money", href: "/blogs/more-than-numbers" },
    { name: "2. The Illusion of Choice", href: "/blogs/illusion-of-choice" },
    { name: "3. Waking Up", href: "/blogs/waking-up" },
  ];

  // Auto-expand EP folder if we are currently viewing an EP track
  useEffect(() => {
    if (epLinks.some(link => pathname === link.href)) {
      setIsEpExpanded(true);
    }
  }, [pathname]);

  const blogLinks: { name: string; href: string; category: string }[] = [];

  const getCollectionCount = (name: string) => {
    if (name === "All") return epLinks.length + blogLinks.length;
    if (name === "EPs & Thoughts") return epLinks.length;
    return blogLinks.filter(link => link.category === name).length;
  };

  const showEp = activeFilter === "All" || activeFilter === "EPs & Thoughts";
  const filteredBlogLinks = blogLinks.filter(link => activeFilter === "All" || link.category === activeFilter);

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "#", label: "X" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaKaggle, href: "#", label: "Kaggle" },
    { icon: FaEnvelope, href: "mailto:encodedfeat@gmail.com", label: "Email" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
      
      {/* 1. Floating Profile Header Area */}
        <div className="flex items-center gap-4 px-2 pt-2">
          {/* Avatar Placeholder */}
          <div className="w-[72px] h-[72px] rounded-2xl bg-yellow-400 border-[2px] border-black flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm relative">
            <div className="absolute inset-0 w-full h-full bg-yellow-400">
              {/* Dots */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full" />
              <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full" />
              <div className="absolute top-4 left-1 w-1 h-1 bg-black rounded-full" />
              <div className="absolute top-4 right-1 w-1 h-1 bg-black rounded-full" />
              <div className="absolute top-7 left-1 w-1 h-1 bg-black rounded-full" />
              <div className="absolute top-7 right-1 w-1 h-1 bg-black rounded-full" />
            </div>
            <Image 
              src="/avatar.png" 
              alt="Mohit Avatar"
              fill
              className="object-cover scale-[1.5] mix-blend-multiply relative z-10"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h2 className="flex items-center gap-1.5 text-[22px] font-bold text-zinc-900 dark:text-white leading-none tracking-tight">
              Mohit
              <BadgeCheck className="w-5 h-5 text-blue-500" fill="currentColor" stroke="white" strokeWidth={2} />
            </h2>
            <span className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1 font-medium">@encodedfeat</span>
            <span className="flex items-center gap-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
              encodedfeat@gmail.com
              <span className="relative flex items-center">
                <button 
                  onClick={handleCopy}
                  className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                </button>
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 dark:bg-zinc-700 text-white text-[11px] px-2 py-1 rounded-md shadow-sm whitespace-nowrap z-50">
                    Copied!
                  </span>
                )}
              </span>
            </span>
          </div>
      </div>

      {/* 1.5. Bio & Social Icons */}
      <div className="flex flex-col gap-1.5 px-2 -mt-1">
        <div className="text-[14px] text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-2">
          An engineer who refuses to settle for ordinary
        </div>

        <div className="flex items-center gap-2.5 pt-1">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            data-tooltip-id="social-tooltip"
            data-tooltip-content={social.label}
            aria-label={social.label}
          >
            <social.icon size={14} />
          </a>
        ))}
        <Tooltip id="social-tooltip" className="!rounded-md !text-xs" place="top" />
        </div>
      </div>

        {/* 2. Top Action Card: Back to Portfolio */}
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-2">
          <Link
            href="/about"
            className="flex items-center justify-between p-[14px] hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
          >
            <span className="text-[14px] whitespace-nowrap text-zinc-900 dark:text-white font-medium flex items-center gap-2">
              <ArrowLeft size={16} className="text-zinc-400 dark:text-zinc-500 group-hover:-translate-x-0.5 transition-transform" />
              Back to Portfolio
            </span>
          </Link>
        </div>

        {/* Collections Filter (Horizontal Pills) */}
        <div className="flex flex-col gap-1 mb-2 mt-1 relative">
          <div className="flex items-center justify-between px-3 mb-1">
            <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
              Collections
            </span>
            {/* Filter Actions & Scroll Buttons */}
            <div className="flex items-center gap-2">
              {activeFilter !== "All" && (
                <button
                  onClick={() => setActiveFilter("All")}
                  className="text-[10px] font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors mr-1"
                >
                  Clear
                </button>
              )}
              <div className="flex items-center gap-1">
                <button 
                  onClick={scrollLeft}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={14} />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto px-3 pb-2 pt-1" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Inline style to hide scrollbar across browsers while keeping functionality */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {collections.map((item) => {
              const isActive = activeFilter === item.name;
              const count = getCollectionCount(item.name);
              
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveFilter(item.name)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors text-[13px] border flex-shrink-0 ${
                    isActive 
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white font-medium shadow-sm" 
                      : "bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  {item.icon === "dot" ? (
                    <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white dark:bg-zinc-900" : "bg-zinc-400 dark:bg-zinc-500"}`} />
                  ) : (
                    // @ts-ignore - dynamic component rendering
                    <item.icon size={14} className={isActive ? "text-white dark:text-zinc-900" : "text-zinc-500 dark:text-zinc-400"} />
                  )}
                  {item.name}
                  <span className={`ml-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-bold leading-none flex items-center justify-center ${
                    isActive 
                      ? "bg-zinc-800 dark:bg-zinc-200 text-zinc-300 dark:text-zinc-800" 
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-500"
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 3. Blog Links Card */}
        {(showEp || filteredBlogLinks.length > 0) && (
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col">
            
            {/* EP Collection Header (Expandable) */}
            {showEp && (
              <div className="flex flex-col">
                <button
                  onClick={() => setIsEpExpanded(!isEpExpanded)}
                  className="flex items-center justify-between p-[14px] transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 w-full text-left"
                >
                  <span className="text-[15px] font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    The Matrix We Call Life
                  </span>
                  {isEpExpanded ? (
                    <Minus size={18} className="text-zinc-600 dark:text-zinc-400" />
                  ) : (
                    <Plus size={18} className="text-zinc-600 dark:text-zinc-400" />
                  )}
                </button>
                
                {/* EP Children Links */}
                {isEpExpanded && (
                  <div className="flex flex-col bg-zinc-50/50 dark:bg-zinc-900/30">
                    {epLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={`flex items-center justify-between p-[12px] pl-[28px] transition-colors ${
                            isActive 
                              ? "bg-zinc-100 dark:bg-zinc-800/80" 
                              : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                          }`}
                        >
                          <span className={`text-[14px] font-medium ${isActive ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"}`}>
                            {link.name}
                          </span>
                          {isActive ? (
                            <ChevronDown size={16} className="text-zinc-400 dark:text-zinc-500" />
                          ) : (
                            <ChevronRight size={14} className="text-zinc-400 dark:text-zinc-500" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
                
                {/* Divider between EP and first blog if there are blogs */}
                {filteredBlogLinks.length > 0 && (
                  <div className="w-full h-[1px] bg-zinc-100 dark:bg-zinc-800" />
                )}
              </div>
            )}

            {/* Regular Blog Links */}
            {filteredBlogLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between p-[14px] transition-colors ${
                      isActive 
                        ? "bg-zinc-50 dark:bg-zinc-900/80" 
                        : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                    }`}
                  >
                    <span className={`text-[15px] font-medium ${isActive ? "text-zinc-900 dark:text-white" : "text-zinc-800 dark:text-zinc-200"}`}>
                      {link.name}
                    </span>
                    {isActive ? (
                      <ChevronDown size={20} className="text-zinc-400 dark:text-zinc-500" />
                    ) : (
                      <ChevronRight size={18} className="text-zinc-400 dark:text-zinc-500" />
                    )}
                  </Link>
                  {/* Divider between items */}
                  {index !== filteredBlogLinks.length - 1 && (
                    <div className="w-full h-[1px] bg-zinc-100 dark:bg-zinc-800" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State when filter yields nothing */}
        {!showEp && filteredBlogLinks.length === 0 && (
          <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 border-dashed p-8 flex flex-col items-center justify-center text-center gap-2">
            <span className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">No posts in this collection yet.</span>
            <button onClick={() => setActiveFilter("All")} className="text-blue-500 hover:text-blue-600 text-xs font-bold uppercase tracking-widest mt-2">Clear Filter</button>
          </div>
        )}
    </div>
  );
}
