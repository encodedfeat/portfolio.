import React from 'react';

interface PageEndQuoteProps {
  word: string;
  meaning: string;
}

export function PageEndQuote({ word, meaning }: PageEndQuoteProps) {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 pb-16 flex justify-center px-4 relative z-10">
      <div className="flex flex-col items-center justify-center gap-3 px-6 sm:px-10 py-5 sm:py-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm opacity-90 hover:opacity-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 text-center">
        <p className="text-[8px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider sm:tracking-widest font-medium mb-1 whitespace-nowrap">
          End of the scroll <span className="mx-1 sm:mx-2 text-zinc-300 dark:text-zinc-700">•</span> A thought to take with you
        </p>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-zinc-800 dark:text-zinc-200 shrink-0">
            {word}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700 shrink-0">|</span>
          <span className="text-[9px] sm:text-xs italic text-zinc-500 dark:text-zinc-400 font-medium text-left">
            {meaning}
          </span>
        </div>
      </div>
    </div>
  );
}
