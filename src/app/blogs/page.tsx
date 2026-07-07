import { BlogMenu } from "@/components/BlogMenu";

export default function BlogsPage() {
  return (
    <div className="w-full max-w-[420px] mx-auto bg-white dark:bg-black/40 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800/60 p-6 sm:p-8 shadow-xl shadow-zinc-200/20 dark:shadow-none backdrop-blur-xl">
      <BlogMenu />
    </div>
  );
}
