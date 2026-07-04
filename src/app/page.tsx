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
      </div>
    </>
  );
}
