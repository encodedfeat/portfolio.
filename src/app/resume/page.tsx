"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { PageEndQuote } from "@/components/PageEndQuote";

export default function ResumePage() {
  return (
    <div className="flex flex-col w-full px-2 relative">
      {/* Floating Header */}
      <div className="flex flex-col gap-2 sticky top-0 z-20 bg-white dark:bg-black pb-6 pt-2 -mx-2 px-2">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Resume</h1>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          My professional resume and curriculum vitae.
        </p>
      </div>

      <div className="w-full relative max-w-5xl mx-auto">
        <div className="relative z-10 w-full flex flex-col pt-2">
          <div className="flex justify-center mb-6">
            <a
              href="https://drive.google.com/file/d/1Wx6mfgym7owMoVk741zvzplq5bZ_NwTxQF9E6nqmY58/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white rounded-xl py-2.5 px-5 font-medium transition-colors border border-black/5 dark:border-white/5 hover:border-zinc-900 dark:hover:border-white whitespace-nowrap text-sm"
            >
              <span>Open in Google Drive</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <section
            className="scroll-mt-20 px-0"
          >


            {/* PDF Viewer via Google Drive Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full aspect-[1/1.4] sm:aspect-[4/5] md:aspect-auto md:h-[1000px] bg-zinc-100 dark:bg-[#1a1a1a] rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl relative"
            >
              {/* Fallback loading message */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-zinc-500 dark:text-zinc-400 -z-10">
                <p className="mb-4">Loading Google Drive Viewer...</p>
                <p className="text-sm">
                  If the document does not appear, please ensure your Google Drive link allows public access.
                </p>
              </div>

              <iframe
                src="https://drive.google.com/file/d/1Wx6mfgym7owMoVk741zvzplq5bZ_NwTxQF9E6nqmY58/preview"
                className="w-full h-full border-none relative z-10 bg-transparent"
                title="Resume Google Drive Viewer"
                allow="autoplay"
              />
            </motion.div>
          </section>
        </div>
      </div>

      <PageEndQuote
        word="Ikigai"
        meaning="A Japanese concept referring to a reason for being; your life's purpose."
      />
    </div>
  );
}
