"use client";

import { Cpu, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface SkillsSectionProps {
  preview?: boolean;
}

export function SkillsSection({ preview = true }: SkillsSectionProps) {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  // Data for Homepage (Accordion)
  const accordionCategories = [
    {
      title: "Programming Languages",
      description: "Core languages used for backend, scripts, and algorithms.",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
    },
    {
      title: "Backend & Frameworks",
      description: "Frameworks for building robust APIs and server-side logic.",
      skills: ["Django", "Django Rest Framework", "FastAPI", "Flask", "Node.js", "Express"],
    },
    {
      title: "Data Science & Machine Learning",
      description: "Libraries and tools for data analysis, manipulation, and modeling.",
      skills: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "Jupyter"],
    },
    {
      title: "Tools & Infrastructure",
      description: "DevOps, deployment, and database management tools.",
      skills: ["Git", "Docker", "AWS", "PostgreSQL", "Redis", "Celery", "Linux"],
    },
  ];

  // Data for Dedicated Skills Page (Horizontal Flowchart)
  const skillTree = [
    {
      name: "Python",
      description: "Backend architecture & AI.",
      branches: [
        {
          name: "Backend & Frameworks",
          skills: ["Django", "Django Rest Framework", "FastAPI", "Flask", "Celery"],
        },
        {
          name: "Data Science & ML",
          skills: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "Jupyter"],
        },
      ],
    },
    {
      name: "JavaScript & TS",
      description: "Full-stack web dev.",
      branches: [
        {
          name: "Backend & Runtimes",
          skills: ["Node.js", "Express"],
        },
        {
          name: "Frontend Stack",
          skills: ["React", "Next.js", "TailwindCSS"],
        },
      ],
    },
    {
      name: "Infra & Databases",
      description: "Deployment & scaling.",
      branches: [
        {
          name: "DevOps & Cloud",
          skills: ["Git", "Docker", "AWS", "Linux"],
        },
        {
          name: "Databases & Cache",
          skills: ["PostgreSQL", "SQL", "Redis"],
        },
      ],
    }
  ];

  const displayAccordionSkills = accordionCategories.slice(0, 2);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 scroll-mt-20"
    >
      <div className="flex items-center gap-3 mb-10">
        <Cpu className="text-zinc-400" size={24} />
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Technical Skills</h3>
      </div>

      {preview ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayAccordionSkills.map((category, index) => (
              <div key={index} className="flex flex-col h-full border-b border-black/5 dark:border-white/5 pb-6">
                {/* Header (Clickable) */}
                <div
                  className="flex flex-col sm:flex-row sm:items-start justify-between cursor-pointer group"
                  onClick={() => setExpandedIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index])}
                >
                  <div className="flex-1">
                    <div className="mb-1">
                      <h4 className="inline text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                        {category.title}
                      </h4>
                      <span className="inline-block align-middle ml-2 text-zinc-400 -mt-1">
                        {expandedIndices.includes(index) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                      </span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {expandedIndices.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-sm font-medium px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-yellow-400 dark:border-yellow-500 hover:bg-black/10 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/skills"
              className="px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-zinc-900 dark:hover:bg-white hover:border-zinc-900 dark:hover:border-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white font-medium transition-colors text-sm"
            >
              Show all technical skills
            </Link>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-12 font-mono text-sm md:text-base overflow-x-hidden">
          {skillTree.map((root, rootIndex) => (
            <div key={rootIndex} className="flex flex-col md:flex-row relative">
              
              {/* Level 1: Language Node */}
              <div className="flex items-center w-full md:w-1/4 relative z-10 mb-6 md:mb-0">
                <div className="w-full bg-zinc-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-4 rounded-2xl shadow-sm z-10">
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                    {root.name}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-sans">
                    {root.description}
                  </p>
                </div>
                
                {/* Horizontal line exiting right from Language Node (Desktop only) */}
                <div className="hidden md:block absolute right-[-2rem] top-1/2 w-[2rem] h-[2px] bg-zinc-200 dark:bg-zinc-800" />
              </div>

              {/* Level 2 & 3 Container */}
              <div className="flex flex-col gap-6 w-full md:w-3/4 relative md:pl-8">
                
                {/* Vertical line connecting branches (Desktop only) */}
                <div 
                  className="hidden md:block absolute left-0 top-[2rem] bottom-[2rem] w-[2px] bg-zinc-200 dark:bg-zinc-800" 
                />

                {root.branches.map((branch, bIndex) => (
                  <div key={bIndex} className="flex flex-col md:flex-row relative group">
                    
                    {/* Horizontal line entering branch from vertical trunk (Desktop only) */}
                    <div className="hidden md:block absolute left-0 top-1/2 w-8 h-[2px] bg-zinc-200 dark:bg-zinc-800 transition-colors group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700" />

                    {/* Level 2: Domain Node */}
                    <div className="w-full md:w-[40%] md:pl-8 flex items-center relative z-10 mb-4 md:mb-0">
                      <div className="w-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-3 rounded-xl shadow-sm z-10 group-hover:border-black/10 dark:group-hover:border-white/10 transition-colors">
                        <h5 className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm">
                          {branch.name}
                        </h5>
                      </div>

                      {/* Horizontal line exiting right from Domain Node (Desktop only) */}
                      <div className="hidden md:block absolute right-[-1.5rem] top-1/2 w-[1.5rem] h-[2px] bg-zinc-200 dark:bg-zinc-800 transition-colors group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700" />
                    </div>

                    {/* Level 3: Skills Leaves */}
                    <div className="w-full md:w-[60%] md:pl-6 flex items-center relative">
                      <div className="flex flex-wrap gap-2">
                        {branch.skills.map((skill, sIndex) => (
                          <span 
                            key={sIndex} 
                            className="px-3 py-1.5 text-xs font-medium bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-lg border border-yellow-400 dark:border-yellow-500 hover:bg-black/10 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
