import { ProfileCard } from "@/components/ProfileCard";
import { HeroTop, HeroBottom } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-y-8 lg:gap-y-0 lg:gap-x-16 pt-4 pb-12">
        {/* Mobile: 1. HeroTop (Hello, I'm Mohit... Based in...) */}
        <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
          <HeroTop />
        </div>

        {/* Mobile: 2. Profile Card */}
        <div className="order-2 lg:order-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 self-start">
          <ProfileCard />
        </div>

        {/* Mobile: 3. HeroBottom (Paragraph, Stats) */}
        <div className="order-3 lg:order-3 lg:col-start-2 lg:row-start-2">
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
