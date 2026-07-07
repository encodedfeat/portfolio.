import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MessageSquare, Quote } from "lucide-react";

// Demo blog data
const blogPosts = {
  "more-than-numbers": {
    title: "1. More Than Numbers and Money",
    date: "JULY 8, 2026",
    readTime: "4 MIN READ",
    discussion: {
      comment: "This piece perfectly captures the modern struggle. The metric-driven society has made us lose touch with our intrinsic values.",
      author: "@creative_thinker",
      mediumLink: "#",
      xLink: "#"
    },
    content: (
      <>
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-zinc-900 dark:first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-[-0.1em] text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Let me write today... Let me write about what I think... I think too much, so I can't write everything here, but I'll write some. So today, I am writing about the big things that often come to my mind. These are not about someone's lifestyle, inspiration, recent technologies, or anything like that... These are just about living peacefully with oneself.
        </p>
        
        <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mt-12 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-3">Numbers</h2>
        
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          The first one is numbers... Yes, numbers... The numbers given by some of us to some of us. I don't know why everyone is so obsessed with numbers. Everyone wants a million, a hundred million, or a billion... These numbers could be in the form of followers, likes, views, marks, etc. Why can't we just live peacefully without these numbers? Why do we care so much about these numbers? Everyone is running after numbers... And society says, "Look, he is great because he has a big number." 
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          There could be many perspectives. For example, some get these numbers through their talent, their skills, and their work. But mine is different... Why numbers? Shouldn't we identify greatness by someone's actual talent? I think I am getting away from my actual topic. So, leaving aside what and how someone should identify greatness... But why numbers? Why?
        </p>
        
        <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mt-12 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-3">Money</h2>

        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          The second one is money... Firstly, let me make it clear from my side that money changed the course of history and solved complex problems. But even then, there should be something more appropriate than money. Most individuals give up their passion just for money and become average or less than average. Like, really? For a piece of paper, someone is not following his/her passion and is instead following money... But the problem is not money; the problem is the system—the money system. If you have to eat, you have to earn that piece of paper. Yes, again, I know that if money didn't exist, no one would want to work in factories... Everyone would want to touch the grass all the time.
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          But still, there should be a system where someone can follow their passion and, at night, have dinner peacefully. Even for someone who doesn't do anything (but I don't care about them).
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I'm writing this not because I don't have money (I have money), but because I think too much.
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          If you've made it this far, thanks for reading. Please don't say, "See a doctor," etc. I'm perfectly fine. I'm not overthinking. I am just presenting my points about this modern era, where doing something for others has a higher priority than doing something for oneself. Like, literally, no one cares about their own values or even their own life anymore...
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I want to say more, but I think you're a genius and already know the matrix. Thank you!
        </p>
      </>
    )
  },
  "illusion-of-choice": {
    title: "2. The Illusion of Choice",
    date: "JULY 12, 2026",
    readTime: "3 MIN READ",
    content: (
      <>
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-zinc-900 dark:first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-[-0.1em] text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          We often believe we are making free choices. But how many of those choices were planted there by the algorithm? 
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">This is a placeholder for the second track of the EP. More thoughts coming soon...</p>
      </>
    )
  },
  "waking-up": {
    title: "3. Waking Up",
    date: "JULY 15, 2026",
    readTime: "2 MIN READ",
    content: (
      <>
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-zinc-900 dark:first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-[-0.1em] text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          What happens when you finally see the strings?
        </p>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">This is a placeholder for the third track of the EP. More thoughts coming soon...</p>
      </>
    )
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-10 pb-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime || "5 MIN READ"}</span>
        </div>
        
        {/* Separator line as shown in the screenshot */}
        <div className="w-16 h-0.5 bg-zinc-900 dark:bg-white mb-8 rounded-full" />
      </div>

      <article className="prose dark:prose-invert max-w-none space-y-6">
        {post.content}
      </article>

      {/* @ts-ignore - checking if discussion exists on the post */}
      {post.discussion && (
        <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-6">
          <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <MessageSquare size={20} className="text-zinc-400" />
            Join the Discussion
          </h3>
          
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-zinc-100 dark:border-zinc-800">
            <Quote size={80} className="absolute -top-4 -left-4 text-zinc-200 dark:text-zinc-800 opacity-40 rotate-180" />
            <div className="relative z-10 flex flex-col gap-4">
              <p className="text-sm sm:text-base italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                "{/* @ts-ignore */}
                {post.discussion.comment}"
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  {/* @ts-ignore */}
                  — {post.discussion.author}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <a 
              /* @ts-ignore */
              href={post.discussion.mediumLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold hover:opacity-80 transition-opacity"
            >
              <FaMedium size={16} />
              Join on Medium
            </a>
            <a 
              /* @ts-ignore */
              href={post.discussion.xLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold hover:opacity-80 transition-opacity"
            >
              <FaXTwitter size={16} />
              Join on X
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
