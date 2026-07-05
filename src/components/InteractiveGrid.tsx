"use client";

import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty("--x", `${clientX}px`);
      containerRef.current.style.setProperty("--y", `${clientY}px`);
      
      // Fast fade in when moving
      containerRef.current.style.transitionDuration = "100ms";
      containerRef.current.style.opacity = "1";

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Slow smooth fade out when mouse is still after a tiny delay
      timeoutRef.current = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transitionDuration = "800ms";
          containerRef.current.style.opacity = "0";
        }
      }, 150);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
      {/* 1. Static base grid that is always visible but very faint */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* 2. Glowing red grid lines revealed only near the mouse pointer */}
      <div
        ref={containerRef}
        className="absolute inset-0 transition-opacity ease-out"
        style={{
          opacity: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage: `radial-gradient(150px circle at var(--x, 50%) var(--y, 50%), black, transparent 100%)`,
          maskImage: `radial-gradient(150px circle at var(--x, 50%) var(--y, 50%), black, transparent 100%)`,
        }}
      />
    </div>
  );
}
