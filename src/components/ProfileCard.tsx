"use client";

import Image from "next/image";
import Link from "next/link";
import { Brain, Download, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-card-bg rounded-[32px] p-6 flex flex-col items-center max-w-sm w-full h-full border border-black/5 dark:border-white/5"
    >
      {/* Profile Image container */}
      <div className="relative w-full flex-grow rounded-2xl overflow-hidden mb-6 bg-zinc-800 min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1000&auto=format&fit=crop"
          alt="Mohit"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Available for work badge */}
      <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 rounded-full px-4 py-2 mb-6 border border-black/10 dark:border-white/10">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Available for work</span>
      </div>

      {/* Name and Handle */}
      <div className="flex flex-col items-center justify-center w-full text-center mb-6">
        <div className="relative flex items-center justify-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Mohit</h2>
          {/* <span className="absolute left-full ml-1 text-2xl -top-0.5">🌼</span> */}
        </div>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">@encodedfeat</span>
      </div>

      {/* Social Links */}
      <div className="flex gap-3 mb-8 justify-center w-full">
        {[
          { icon: FaGithub, href: "#", label: "GitHub" },
          { icon: FaLinkedin, href: "#", label: "LinkedIn" },
          { icon: FaXTwitter, href: "#", label: "X" },
          { icon: FaInstagram, href: "#", label: "Instagram" },
          { icon: FaKaggle, href: "#", label: "Kaggle" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-colors border border-black/5 dark:border-white/5"
            aria-label={social.label}
          >
            <social.icon size={18} />
            {/* Tooltip */}
            <span className="absolute -top-10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-zinc-800 text-zinc-200 text-xs px-2.5 py-1.5 rounded-md pointer-events-none whitespace-nowrap shadow-lg border border-black/10 dark:border-white/10">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 w-full">
        <Link
          href="/resume"
          className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-zinc-900 dark:text-white rounded-xl py-3 px-4 font-medium transition-colors border border-black/5 dark:border-white/5 hover:border-zinc-900 dark:hover:border-white"
        >
          <Download size={18} />
          <span className="text-sm">Download CV</span>
        </Link>
        <a
          href="#"
          className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-black rounded-xl py-3 px-4 font-medium transition-colors"
        >
          <Send size={18} />
          <span className="text-sm">Contact Me</span>
        </a>
      </div>
    </motion.div>
  );
}
