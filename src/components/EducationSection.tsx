"use client";

import { GraduationCap, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface EducationSectionProps {
  preview?: boolean;
}

export function EducationSection({ preview = true }: EducationSectionProps) {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Indian Institute of Technology",
      period: "August 2019 - May 2021",
      location: "New Delhi, India",
      courses: ["Advanced Machine Learning", "Distributed Systems", "Algorithm Design", "Deep Learning"],
      details: [
        "Specialized in Artificial Intelligence and Machine Learning.",
        "Thesis on optimizing neural network architectures for resource-constrained edge devices.",
        "Graduated top 10% of the class.",
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "National Institute of Technology",
      period: "August 2015 - May 2019",
      location: "Kurukshetra, India",
      courses: ["Data Structures", "Database Management", "Operating Systems", "Computer Networks"],
      details: [
        "Core computer science fundamentals, data structures, algorithms, and database management systems.",
        "Developed a college-wide event management system as the capstone project.",
        "Graduated with honors.",
      ],
    }
  ];

  const displayEducation = preview ? education.slice(0, 2) : education;
  const [expandedIndices, setExpandedIndices] = useState<number[]>(
    preview ? [0] : education.map((_, i) => i)
  );

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mb-16 scroll-mt-20"
    >
      <div className="flex items-center gap-3 mb-10">
        <GraduationCap className="text-zinc-400" size={24} />
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Education</h3>
      </div>

      <div className="relative ml-2">
        {/* Main Vertical Line */}
        <div className="absolute left-[7.5px] top-4 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800" />
        
        <div className="flex flex-col gap-14">
          {displayEducation.map((edu, index) => (
            <div key={index} className="relative pl-10 md:pl-12">
              {/* Timeline Node (Circle) */}
              <div className="absolute left-0 top-3 w-4 h-4 rounded-full border-[3px] border-zinc-900 dark:border-white bg-background ring-4 ring-background z-10" />

              {/* Header & Meta Container */}
              <div 
                className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-4 cursor-pointer group"
                onClick={() => {
                  setExpandedIndices(prev => 
                    prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
                  );
                }}
              >
                {/* Institution & Degree */}
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-zinc-900 dark:text-white mb-1 group-hover:text-accent transition-colors inline-block">
                    {edu.institution}
                  </h4>
                  <span className="inline-block align-middle ml-2 text-zinc-400 -mt-2">
                    {expandedIndices.includes(index) ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg">{edu.degree}</p>
                </div>

                {/* Period & Location (Right aligned) */}
                <div className="sm:text-right flex flex-col shrink-0 pr-2">
                  <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{edu.period}</span>
                  <span className="text-sm text-yellow-600/80 dark:text-yellow-400/80">{edu.location}</span>
                </div>
              </div>

              {/* Content */}
              <AnimatePresence>
                {expandedIndices.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 pt-4">
                      <div>
                        <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Key Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-yellow-400 dark:border-yellow-500 backdrop-blur-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Academic Details</h5>
                        <ul className="space-y-2">
                          {edu.details.map((detail, i) => (
                            <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex items-start">
                              <span className="mr-2 mt-1.5 text-zinc-400 block h-1 w-1 bg-zinc-400 rounded-full shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      {preview && (
        <div className="mt-12 flex justify-center">
          <Link
            href="/education"
            className="px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-zinc-900 dark:hover:bg-white hover:border-zinc-900 dark:hover:border-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white font-medium transition-colors text-sm"
          >
            Show full education details
          </Link>
        </div>
      )}
    </motion.section>
  );
}
