import { ProfileCard } from "@/components/ProfileCard";
import { HeroTop, HeroBottom, MobileHero } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { PageEndQuote } from "@/components/PageEndQuote";

export default function Home() {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(280px,35%)_1fr] lg:grid-cols-[350px_1fr] gap-y-0 md:gap-x-10 lg:gap-x-16 pt-4 pb-8 md:pb-12">
        {/* Mobile: Vertical lines stretching to top */}
        <div className="absolute top-[-16px] bottom-[-32px] left-0 w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
        <div className="absolute top-[-16px] bottom-[-32px] left-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
        <div className="absolute top-[-16px] bottom-[-32px] right-0 w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
        <div className="absolute top-[-16px] bottom-[-32px] right-[3px] w-[1px] bg-black/20 dark:bg-white/30 z-0 md:hidden"></div>
        {/* Mobile: 1. Custom Hero Header */}
        <div className="md:hidden order-1 col-start-1 relative z-10 pb-0">
          <MobileHero />
        </div>

        {/* Desktop: 1. HeroTop (Hidden on mobile) */}
        <div className="hidden md:block md:order-2 md:col-start-2 md:row-start-1 relative z-10">
          <HeroTop />
        </div>

        {/* Desktop: 2. Profile Card (Hidden on mobile) */}
        <div className="hidden md:block md:order-1 md:col-start-1 md:row-start-1 md:row-span-2 self-start mx-auto md:mx-0 w-full md:max-w-none z-10 relative">
          <ProfileCard />
        </div>

        {/* Mobile: 3. HeroBottom (Paragraph, Stats) */}
        <div className="order-3 md:order-3 md:col-start-2 md:row-start-2 relative min-w-0 mt-[2px] md:mt-0">

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

      <PageEndQuote 
        word="Kaizen" 
        meaning="A Japanese philosophy that translates to &quot;Continuous improvement&quot;" 
      />
    </>
  );
}
