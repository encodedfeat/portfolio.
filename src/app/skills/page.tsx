import { SkillsSection } from "@/components/SkillsSection";
import { PageEndQuote } from "@/components/PageEndQuote";

export default function SkillsPage() {
  return (
    <div className="flex flex-col w-full px-2 relative">
      {/* Floating Header */}
      <div className="flex flex-col gap-2 sticky top-0 z-20 bg-white dark:bg-black pb-6 pt-2 -mx-2 px-2">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Skills</h1>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Technical skills and tools I use on a daily basis.
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 mt-2">
        <SkillsSection preview={false} />
      </div>

      <PageEndQuote
        word="Kintsugi"
        meaning="The Japanese art of repairing broken pottery with gold, treating breakage as part of the history of an object."
      />
    </div>
  );
}
