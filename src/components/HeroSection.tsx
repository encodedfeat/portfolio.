"use client";
import React, { useRef, useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const GitHubCalendar = dynamic(() => import('react-github-calendar').then((mod) => mod.GitHubCalendar), { ssr: false });

export function HeroTop() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-20 px-8 sm:px-[72px] md:px-0"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">👋</span>
        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Hello</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
        I'm Mohit, <br />
        <span className="text-accent whitespace-nowrap">
          <Typewriter
            words={["Python Developer", "Django Developer", "Data Scientist"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-0 leading-tight">
        Based in Uttarakhand,<br className="sm:hidden" /> India.
      </h2>
    </motion.div>
  );
}

export function HeroBottom() {
  const { resolvedTheme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalNode(scrollContainerRef.current);
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollToRight = () => {
      // We added 'data-tooltip-id' to every calendar block. 
      // This perfectly detects when the calendar data is actually rendered.
      const hasCalendarData = el.querySelector('[data-tooltip-id="react-tooltip"]');

      if (hasCalendarData) {
        const scrollableEl = el.querySelector('.react-activity-calendar > div:first-of-type') || el;

        if (!(el as any).hasScrollListener) {
          const handleScroll = () => {
            el.classList.add('is-scrolling');
            clearTimeout((el as any).scrollTimeout);
            (el as any).scrollTimeout = setTimeout(() => {
              el.classList.remove('is-scrolling');
            }, 150);
          };
          scrollableEl.addEventListener('scroll', handleScroll, { passive: true });
          (el as any).hasScrollListener = true;
        }

        if (scrollableEl.scrollWidth > scrollableEl.clientWidth) {
          scrollableEl.scrollLeft = scrollableEl.scrollWidth;
        }
        return true; // Calendar loaded, stop polling
      }
      return false;
    };

    // Attempt immediately in case it's somehow cached and ready
    if (scrollToRight()) return;

    const intervalId = setInterval(() => {
      if (scrollToRight()) {
        // Layout might still be settling, enforce scroll one last time shortly after
        setTimeout(() => {
          if (el) el.scrollLeft = el.scrollWidth;
        }, 50);
        clearInterval(intervalId);
      }
    }, 100);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mt-0 md:mt-2 px-8 sm:px-[72px] md:px-0"
    >
      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6 text-justify">
        Building scalable backend systems and intelligent ML models. Focused on writing clean, efficient code to solve complex problems.
      </p>

      {/* GitHub Calendar */}
      <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
        GitHub Stats
      </h3>
      <div
        ref={scrollContainerRef}
        className="w-full pb-4 relative"
        style={{ clipPath: 'inset(-100vh 0 -100vh 0)' }}
      >
        <GitHubCalendar
          className="react-activity-calendar"
          username="encodedfeat"
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          blockSize={14}
          blockMargin={4}
          fontSize={12}
          theme={{
            light: ['#ebedf0', '#fef3c7', '#fcd34d', '#f59e0b', '#d97706'],
            dark: ['#161b22', '#78350f', '#b45309', '#f59e0b', '#fbbf24'],
          }}
          renderBlock={(block, activity) =>
            React.cloneElement(block as any, {
              'data-tooltip-id': 'react-tooltip',
              'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
            })
          }
        />
        {portalNode && (
          <Tooltip
            id="react-tooltip"
            className="z-50"
            positionStrategy="absolute"
            portalRoot={portalNode}
          />
        )}
      </div>
    </motion.div>
  );
}

export function MobileHero() {
  return (
    <motion.div
      id="home-mobile"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="px-6 sm:px-8"
    >
      {/* Hello */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">👋</span>
        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Hello</span>
      </div>

      {/* Image + Name + Socials */}
      <div className="flex gap-4 mb-6">
        {/* Image */}
        <div className="relative w-[100px] h-[100px] rounded-[24px] overflow-hidden bg-zinc-800 shrink-0 border border-black/5 dark:border-white/5 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1000&auto=format&fit=crop"
            alt="Mohit"
            fill
            className="object-cover"
            sizes="100px"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center min-w-0">
          <h2 className="text-[28px] font-bold text-zinc-900 dark:text-white leading-tight">Mohit</h2>
          <span className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">@encodedfeat</span>

          {/* Social Links */}
          <div className="flex gap-2">
            {[
              { icon: FaGithub, href: "#", label: "GitHub" },
              { icon: FaLinkedin, href: "#", label: "LinkedIn" },
              { icon: FaXTwitter, href: "#", label: "X" },
              { icon: FaInstagram, href: "#", label: "Instagram" },
              { icon: FaKaggle, href: "#", label: "Kaggle" },
              { icon: FaEnvelope, href: "mailto:your.email@example.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-colors border border-black/5 dark:border-white/5"
                aria-label={social.label}
              >
                <social.icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Typewriter */}
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
        <span className="text-accent">
          <Typewriter
            words={["Python Developer", "Django Developer", "Data Scientist"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 w-full">
        <div className="w-full flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 rounded-xl py-2.5 px-3 border border-black/10 dark:border-white/10">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 whitespace-nowrap">Available for work</span>
        </div>
        <Link
          href="/resume"
          className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 bg-black/5 dark:bg-white/5 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white rounded-xl py-2.5 px-3 font-medium transition-colors border border-black/5 dark:border-white/5 hover:border-zinc-900 dark:hover:border-white"
        >
          <Download size={16} />
          <span className="text-xs sm:text-sm whitespace-nowrap">Download CV</span>
        </Link>
        <a
          href="#"
          className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 bg-black/5 dark:bg-white/5 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white rounded-xl py-2.5 px-3 font-medium transition-colors border border-black/5 dark:border-white/5 hover:border-zinc-900 dark:hover:border-white"
        >
          <Send size={16} />
          <span className="text-xs sm:text-sm whitespace-nowrap">Contact Me</span>
        </a>
      </div>
    </motion.div>
  );
}
