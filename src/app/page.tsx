import { ProfileCard } from "@/components/ProfileCard";
import { HeroTop, HeroBottom } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,35%)_1fr] lg:grid-cols-[350px_1fr] gap-y-8 md:gap-y-0 md:gap-x-10 lg:gap-x-16 pt-4 pb-8 md:pb-12">
        {/* Mobile: 1. HeroTop (Hello, I'm Mohit... Based in...) */}
        <div className="order-1 md:order-2 md:col-start-2 md:row-start-1 relative">
          <div className="absolute -top-4 bottom-[-16px] left-0 w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          <div className="absolute -top-4 bottom-[-16px] left-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          <div className="absolute -top-4 bottom-[-16px] right-0 w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          <div className="absolute -top-4 bottom-[-16px] right-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          
          <div className="relative z-10 pb-2 md:pb-0">
            <HeroTop />
          </div>
        </div>

        {/* Mobile: 2. Profile Card */}
        <div className="order-2 md:order-1 md:col-start-1 md:row-start-1 md:row-span-2 self-start mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
          <ProfileCard />
        </div>

        {/* Mobile: 3. HeroBottom (Paragraph, Stats) */}
        <div className="order-3 md:order-3 md:col-start-2 md:row-start-2 relative min-w-0">
          <div className="absolute top-[-16px] bottom-[-32px] left-0 w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          <div className="absolute top-[-16px] bottom-[-32px] left-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          <div className="absolute top-[-16px] bottom-[-32px] right-0 w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          <div className="absolute top-[-16px] bottom-[-32px] right-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
          
          <div className="relative z-10">
            <HeroBottom />
          </div>
        </div>
      </div>

      <div className="w-full relative max-w-5xl mx-auto">
        {/* Continuous vertical lines (Grid Architecture) - Left Double Line */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>
        <div className="absolute top-0 bottom-0 left-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>
        
        {/* Continuous vertical lines (Grid Architecture) - Right Double Line */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>
        <div className="absolute top-0 bottom-0 right-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0"></div>

        <div className="relative z-10 w-full flex flex-col pt-0 md:pt-8">
          
          {/* Top Horizontal Separator for Sections */}
          <div className="relative w-full h-[4px] mb-6 md:mb-8">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>
          <ExperienceSection preview={true} />
          
          {/* Double Horizontal Line Separator */}
          <div className="relative w-full h-[4px] my-2 sm:my-4">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>

          <ProjectsSection preview={true} />
          
          <div className="relative w-full h-[4px] my-2 sm:my-4">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>

          <SkillsSection preview={true} />

          <div className="relative w-full h-[4px] my-2 sm:my-4">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>

          <EducationSection preview={true} />
        </div>
      </div>
        
      {/* Kaizen Philosophy - Page End Vibe */}
      <div className="w-full max-w-5xl mx-auto mt-16 pb-16 flex justify-center px-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-3 px-6 sm:px-10 py-5 sm:py-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm opacity-90 hover:opacity-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 text-center">
          <p className="text-[8px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider sm:tracking-widest font-medium mb-1 whitespace-nowrap">
            End of the scroll <span className="mx-1 sm:mx-2 text-zinc-300 dark:text-zinc-700">•</span> A thought to take with you
          </p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-zinc-800 dark:text-zinc-200 shrink-0">Kaizen</span>
            <span className="text-zinc-300 dark:text-zinc-700 shrink-0">|</span>
            <span className="text-[9px] sm:text-xs italic text-zinc-500 dark:text-zinc-400 font-medium text-left">
              A Japanese philosophy that translates to "Continuous improvement"
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
