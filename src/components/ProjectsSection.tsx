"use client";

import { FolderGit2, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface ProjectsSectionProps {
  preview?: boolean;
}

export function ProjectsSection({ preview = true }: ProjectsSectionProps) {
  const [expandedIndices, setExpandedIndices] = useState<number[]>(
    preview ? [0] : [0, 1, 2, 3, 4, 5] // Expand all projects on dedicated page
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Applications", "AI Models", "Automation & Scraping"];

  const projects = [
    {
      title: "E-Commerce API Architecture",
      period: "2023",
      type: "Backend / System Design",
      category: ["Web Applications"],
      technologies: ["Django", "Python", "Redis", "Celery", "PostgreSQL"],
      description: [
        "A highly scalable microservices-based backend for an e-commerce platform.",
        "Built with Django Rest Framework, featuring JWT authentication and Redis caching.",
        "Implemented Celery for asynchronous email and background tasks.",
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      period: "2022",
      type: "Machine Learning",
      category: ["AI Models"],
      technologies: ["Python", "scikit-learn", "Pandas", "React", "FastAPI"],
      description: [
        "A machine learning pipeline and dashboard that predicts customer churn based on behavioral data.",
        "Achieved 94% accuracy using Random Forest and XGBoost algorithms.",
        "Created a real-time FastApi backend serving model predictions.",
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Automated Data Scraper",
      period: "2021",
      type: "Automation",
      category: ["Automation & Scraping"],
      technologies: ["Python", "BeautifulSoup", "Selenium", "Docker"],
      description: [
        "A robust distributed web scraper that extracts financial data across 50+ sites daily.",
        "Implemented proxy rotation and headless browser automation to bypass captchas.",
        "Dockerized the entire workflow for seamless deployment.",
      ],
      github: "#",
      live: "#",
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  const displayProjects = preview ? projects.slice(0, 2) : filteredProjects;

  return (
    <>
      {!preview && (
        <div className="w-full">
          {/* Page Title Block */}
          <div className="relative w-full h-[4px] mb-6">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>
          
          <h1 className="text-center text-3xl md:text-4xl font-bold lowercase tracking-widest text-zinc-900 dark:text-white pb-6 pt-2">
            projects
          </h1>

          <div className="flex overflow-x-auto whitespace-nowrap sm:justify-center gap-2 mb-6 px-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border shrink-0 ${activeFilter === filter
                  ? "bg-accent text-black border-accent"
                  : "bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full h-[4px] mb-8">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-black/20 dark:bg-white/30 z-10"></div>
          </div>
        </div>
      )}

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="scroll-mt-20 px-4 sm:px-12"
      >
        {preview && (
          <div className="flex items-center gap-3 mb-6 px-4 sm:px-6 pt-4">
            <FolderGit2 className="text-zinc-400" size={24} />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Featured Projects</h3>
          </div>
        )}

      <div className="flex flex-col">
        {displayProjects.map((project, index) => (
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
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <span className="shrink-0 text-zinc-400 mt-1">
                    {expandedIndices.includes(index) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{project.type}</p>
              </div>

              <div className="mt-2 sm:mt-0 sm:text-right flex flex-col pr-2">
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{project.period}</span>
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
                    {/* Links */}
                    <div className="flex gap-4">
                      <a href={project.github} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <FaGithub size={16} /> Source Code
                      </a>
                      <a href={project.live} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
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
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">About the Project</h5>
                      <ul className="space-y-2">
                        {project.description.map((desc, i) => (
                          <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex items-start">
                            <span className="mr-2 mt-1.5 text-zinc-400 block h-1 w-1 bg-zinc-400 rounded-full shrink-0" />
                            {desc}
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
            {index !== displayProjects.length - 1 && (
              <div className="w-full h-[1px] bg-black/20 dark:bg-white/30"></div>
            )}
          </div>
        ))}
      </div>

      {preview && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-zinc-900 dark:hover:bg-white hover:border-zinc-900 dark:hover:border-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white font-medium transition-colors text-sm"
          >
            Show all projects
          </Link>
        </div>
      )}
    </motion.section>
    </>
  );
}
