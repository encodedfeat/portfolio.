"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full mt-auto bg-zinc-50 dark:bg-[#0c0c0e] border-t border-black/5 dark:border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-12 pb-24 sm:pb-32">
          <div className="grid grid-cols-3 gap-2 sm:gap-8 mb-8">
            {/* Navigation */}
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">Navigation</h3>
              <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-3">
                <li><Link href="/" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/experience" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">Experience</Link></li>
                <li><Link href="/projects" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">Projects</Link></li>
                <li><Link href="/skills" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">Skills</Link></li>
                <li><Link href="/education" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">Education</Link></li>
                <li><Link href="/resume" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">Resume</Link></li>
              </ul>
            </div>

            {/* Connect with me */}
            <div className="justify-self-center">
              <h3 className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">Connect</h3>
              <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-3">
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                    <FiGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                    <FiLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                    <FiTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                    <FiInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                    <FiYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:encodedfeat@gmail.com" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                    <FiMail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">Email</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Info */}
            <div className="justify-self-end">
              <h3 className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">Quick Info</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="shrink-0">📍</span> <span className="break-words">Uttarakhand, India</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="shrink-0">💼</span> <span className="break-words">Open to work</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="shrink-0">📧</span> <span className="break-all">encodedfeat@gmail.com</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="shrink-0">⚡</span> <span className="break-words">Responds quickly</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-500 pt-6 sm:pt-8 border-t border-black/5 dark:border-white/5">
            <p>© {currentYear} Mohit. All rights reserved.</p>
            <p>Made with ❤️, lots of ☕, and Next.js.</p>
          </div>
        </div>
      </footer>

      {/* Seamlessly blended blurry overlay */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 h-24 pointer-events-none backdrop-blur-md"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent)',
          maskImage: 'linear-gradient(to top, black 30%, transparent)'
        }}
      ></div>
    </>
  );
}
