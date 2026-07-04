"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  const handleVideoEnd = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // Fallback timer just in case video fails to load or play
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            {/* Light Mode Video */}
            <video
              className="w-full max-w-sm md:max-w-md object-contain dark:hidden"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src="/mohit.mp4" type="video/mp4" />
            </video>

            {/* Dark Mode Video */}
            <video
              className="w-full max-w-sm md:max-w-md object-contain hidden dark:block"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src="/mohit (1).mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
