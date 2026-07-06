"use client";

import React, { useRef, useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import dynamic from 'next/dynamic';
import { useTheme } from "next-themes";

const GitHubCalendar = dynamic(() => import('react-github-calendar').then((mod) => mod.GitHubCalendar), { ssr: false });

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalNode(scrollContainerRef.current);
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollToRight = () => {
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
        return true; 
      }
      return false;
    };

    if (scrollToRight()) return;

    const intervalId = setInterval(() => {
      if (scrollToRight()) {
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
    <div
      ref={scrollContainerRef}
      className="w-full pb-4 pt-2 relative"
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
  );
}
