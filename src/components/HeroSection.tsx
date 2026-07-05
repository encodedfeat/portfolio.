"use client";
import React, { useRef, useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

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

      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
        I'm Mohit, <br />
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
