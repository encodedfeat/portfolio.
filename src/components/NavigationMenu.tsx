"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronRight, ChevronDown, Copy, Check, BadgeCheck, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle, FaEnvelope, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export function NavigationMenu() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("encodedfeat@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "About Me", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Resume", href: "/resume" },
  ];

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

        {/* 2. Top Action Card */}
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <a
            href="mailto:encodedfeat@gmail.com"
            className="flex items-center justify-between p-[14px] hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
          >
            <span className="text-[14px] whitespace-nowrap text-zinc-900 dark:text-white font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work (Hire me)
            </span>
            <ArrowUpRight size={18} className="text-zinc-400 dark:text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 3. Navigation Links Card */}
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col">
          {navLinks.map((link, index) => {
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
                {index !== navLinks.length - 1 && (
                  <div className="w-full h-[1px] bg-zinc-100 dark:bg-zinc-800" />
                )}
              </div>
            );
          })}
        </div>



    </div>
  );
}
