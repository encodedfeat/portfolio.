import { ExperienceSection } from "@/components/ExperienceSection";
import { PageEndQuote } from "@/components/PageEndQuote";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col w-full px-2 relative">
      {/* Floating Header */}
      <div className="flex flex-col gap-2 sticky top-0 z-20 bg-white dark:bg-black pb-6 pt-2 -mx-2 px-2">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Experience</h1>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          My professional work experience and internships.
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 mt-2">
        <ExperienceSection preview={false} />
      </div>

      <PageEndQuote
        word="Shokunin"
        meaning="An artisan who is deeply dedicated to their craft, always striving for perfection."
      />
    </div>
  );
}
