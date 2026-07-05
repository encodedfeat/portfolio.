import { ProjectsSection } from "@/components/ProjectsSection";

export default function ProjectsPage() {
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
          <ProjectsSection preview={false} />
        </div>
      </div>
    </div>
  );
}
