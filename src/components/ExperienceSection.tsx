"use client";

import { Briefcase, ChevronRight, ChevronDown, Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface ExperienceSectionProps {
  preview?: boolean;
}

export function ExperienceSection({ preview = true }: ExperienceSectionProps) {
  const [expandedIndices, setExpandedIndices] = useState<number[]>(
    preview ? [0] : [0, 1, 2, 3, 4] // Will expand all experiences
  );

  const experiences = [
    {
      company: "Tech Solutions",
      role: "Python & Django Developer",
      period: "January 2023 - Present",
      location: "Remote",
      isWorking: true,
      technologies: ["Django", "Python", "PostgreSQL", "Redis", "Docker"],
      responsibilities: [
        "Developing robust backend systems and RESTful APIs.",
        "Implementing scalable microservices architecture using Django Rest Framework.",
        "Optimized database queries reducing load times by 40%.",
      ],
    },
    {
      company: "AI Innovations",
      role: "Machine Learning Engineer",
      period: "August 2021 - December 2022",
      location: "On-Site",
      isWorking: false,
      technologies: ["TensorFlow", "scikit-learn", "Pandas", "FastAPI"],
      responsibilities: [
        "Designed and deployed predictive models for data analysis.",
        "Collaborated with cross-functional teams to integrate ML pipelines.",
        "Improved business decision-making processes leading to a 15% increase in revenue.",
      ],
    }
  ];

  const displayExperiences = preview ? experiences.slice(0, 2) : experiences;

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-20 px-4 sm:px-12"
    >
      {preview && (
        <div className="flex items-center gap-3 mb-6 px-4 sm:px-6 pt-4">
          <Briefcase className="text-zinc-400" size={24} />
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Experience</h3>
        </div>
      )}

      <div className="flex flex-col">
        {displayExperiences.map((exp, index) => (
          <div key={index} className="flex flex-col">
            <div className="px-4 sm:px-6 py-6 group cursor-pointer"
              onClick={() => setExpandedIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index])}
            >
              {/* Header (Clickable) */}
              <div
                className="flex flex-col sm:flex-row sm:items-start justify-between"
              >
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                      {exp.company}
                    </h4>
                    {exp.isWorking && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                        <Circle size={8} fill="currentColor" /> Working
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 text-zinc-400 mt-1">
                    {expandedIndices.includes(index) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{exp.role}</p>
                </div>

                <div className="mt-2 sm:mt-0 sm:text-right flex flex-col pr-2">
                  <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{exp.period}</span>
                  <span className="text-sm text-yellow-600/80 dark:text-yellow-400/80">{exp.location}</span>
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
                  <div className="pt-6 pb-2 space-y-6">
                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Technologies & Tools</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-yellow-400 dark:border-yellow-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* What I've done */}
                    <div>
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">What I've done</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex items-start">
                            <span className="mr-2 mt-1.5 text-zinc-400 block h-1 w-1 bg-zinc-400 rounded-full shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
            
            {/* Single Horizontal Grid Line (Internal) */}
            {index !== displayExperiences.length - 1 && (
              <div className="w-full h-[1px] bg-black/20 dark:bg-white/30"></div>
            )}
          </div>
        ))}
      </div>

      {preview && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/experience"
            className="px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-zinc-900 dark:hover:bg-white hover:border-zinc-900 dark:hover:border-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white font-medium transition-colors text-sm"
          >
            Show all work experiences
          </Link>
        </div>
      )}
    </motion.section>
  );
}
