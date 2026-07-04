"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export function HeroTop() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="scroll-mt-20"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">👋</span>
        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Hello</span>
      </div>

      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
        I'm Mohit, <br />
        <span className="text-accent">
          <Typewriter
            words={["Python Developer", "Django Developer", "Data Scientist"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-0 leading-tight">
        Based in Uttarakhand,<br className="sm:hidden" /> India.
      </h2>
    </motion.div>
  );
}

export function HeroBottom() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-0 md:mt-8"
    >
      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12 text-justify">
        I specialize in creating robust backend systems, building scalable web applications with Django,
        and developing intelligent machine learning models. With a strong focus on writing clean, efficient code,
        I aim to bring innovative ideas to life and solve complex problems seamlessly.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {[
          { value: "10+", label: "Completed Projects" },
          { value: "1+", label: "Years of Experience" },
          { value: "15+", label: "Happy Clients" },
          { value: "5+", label: "Courses Completed" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-accent">{stat.value}</span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
