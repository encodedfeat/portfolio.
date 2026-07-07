"use client";

import { useState, useEffect, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mouse } from "lucide-react";

export function ScrollIndicator() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check local storage to see if they've scrolled before
    const hasScrolled = localStorage.getItem("has-scrolled-v2");
    
    // Check if the page is scrollable
    const timer = setTimeout(() => {
      if (!hasScrolled && document.documentElement.scrollHeight > window.innerHeight) {
        setShow(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && show) {
        setShow(false);
        localStorage.setItem("has-scrolled-v2", "true");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-800/50">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Mouse size={20} className="text-zinc-600 dark:text-zinc-400" />
            </motion.div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
