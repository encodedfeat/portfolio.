import { ProfileCard } from "@/components/ProfileCard";
import { HeroTop, HeroBottom } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,35%)_1fr] lg:grid-cols-[350px_1fr] gap-y-8 md:gap-y-0 md:gap-x-10 lg:gap-x-16 pt-4 pb-12">
        {/* Mobile: 1. HeroTop (Hello, I'm Mohit... Based in...) */}
        <div className="order-1 md:order-2 md:col-start-2 md:row-start-1">
          <HeroTop />
        </div>

        {/* Mobile: 2. Profile Card */}
        <div className="order-2 md:order-1 md:col-start-1 md:row-start-1 md:row-span-2 self-start mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
          <ProfileCard />
        </div>

        {/* Mobile: 3. HeroBottom (Paragraph, Stats) */}
        <div className="order-3 md:order-3 md:col-start-2 md:row-start-2">
          <HeroBottom />
        </div>
      </div>

      <div className="w-full flex flex-col gap-12 pb-16">
        <ExperienceSection preview={true} />
        <ProjectsSection preview={true} />
        <SkillsSection preview={true} />
        <EducationSection preview={true} />
        
        {/* Kaizen Philosophy - Page End Vibe */}
        <div className="mt-8 flex justify-center px-4">
          <div className="flex flex-col items-center justify-center gap-3 px-6 sm:px-10 py-5 sm:py-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm opacity-90 hover:opacity-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 text-center">
            <p className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-1">
              End of the scroll <span className="mx-1 sm:mx-2 text-zinc-300 dark:text-zinc-700">•</span> A thought to take with you
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-zinc-800 dark:text-zinc-200">Kaizen</span>
              <span className="hidden sm:block text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-[10px] sm:text-xs italic text-zinc-500 dark:text-zinc-400 font-medium">
                A Japanese philosophy that translates to "Continuous improvement"
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
