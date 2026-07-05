import { ExperienceSection } from "@/components/ExperienceSection";

export default function ExperiencePage() {
  return (
    <div className="pt-4 pb-16">
      <div className="w-full relative max-w-5xl mx-auto">
        {/* Continuous vertical lines (Grid Architecture) - Left Double Line */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>
        <div className="absolute top-0 bottom-0 left-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>
        
        {/* Continuous vertical lines (Grid Architecture) - Right Double Line */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>
        <div className="absolute top-0 bottom-0 right-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>

        <div className="relative z-10 w-full flex flex-col pt-8">
          {/* Page Title Block */}
          <div className="relative w-full h-[4px] mb-6">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>
          
          <h1 className="text-center text-3xl md:text-4xl font-bold lowercase tracking-widest text-zinc-900 dark:text-white pb-6 pt-2">
            experience
          </h1>

          <div className="relative w-full h-[4px] mb-8">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>

          <ExperienceSection preview={false} />
        </div>
      </div>
    </div>
  );
}
