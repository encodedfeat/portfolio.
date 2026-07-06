import { FileText, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PageEndQuote } from "@/components/PageEndQuote";
import { GithubActivity } from "@/components/GithubActivity";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full px-2 relative">
      {/* Floating Header */}
      <div className="flex flex-col gap-2 sticky top-0 z-20 bg-white dark:bg-black pb-6 pt-2 -mx-2 px-2">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">About Me</h1>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          A little bit about who I am and what I do.
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 mt-4">
        <div className="flex flex-col gap-6 max-w-2xl">

          <div className="flex items-center gap-3 text-accent">
            <User size={24} />
            <h2 className="text-xl font-bold">Introduction</h2>
          </div>

          <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Hi, I'm Mohit, a passionate Backend Developer and Machine Learning Engineer. I enjoy building intelligent systems and robust backend architectures that solve real-world problems.
            </p>
            <p>
              My expertise lies in Python, Django, and training ML models. I'm constantly learning new technologies and striving to write clean, efficient, and maintainable code.
            </p>
          </div>

          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 my-4" />

          <div className="flex items-center gap-3 text-accent">
            <FileText size={24} />
            <h2 className="text-xl font-bold">What I Do</h2>
          </div>

          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-2">
            <li>Designing and developing RESTful APIs</li>
            <li>Building scalable microservices</li>
            <li>Training and deploying machine learning models</li>
            <li>Database design and optimization</li>
          </ul>

          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 my-4" />

          <div className="flex items-center gap-3 text-accent">
            <FaGithub size={24} />
            <h2 className="text-xl font-bold">Coding Activity</h2>
          </div>
          
          <GithubActivity />

        </div>
      </div>

      <PageEndQuote
        word="Meraki"
        meaning="To do something with soul, creativity, or love; to put something of yourself into your work."
      />
    </div>
  );
}
