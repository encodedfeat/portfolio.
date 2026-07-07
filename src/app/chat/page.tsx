import { MessageSquare, Send } from "lucide-react";
import Image from "next/image";

export default function ChatPage() {
  return (
    <div className="w-full max-w-[420px] mx-auto bg-white dark:bg-black/40 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800/60 p-6 sm:p-8 shadow-xl shadow-zinc-200/20 dark:shadow-none backdrop-blur-xl flex flex-col h-[600px] max-h-[80vh]">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="w-10 h-10 rounded-full bg-yellow-400 border border-black dark:border-zinc-800 overflow-hidden shrink-0 relative">
          <Image 
            src="/avatar.png" 
            alt="Mohit AI"
            fill
            className="object-cover scale-[1.5] mix-blend-multiply"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white leading-none">Chat AI</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">Ask me anything about Mohit</p>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-4 pr-2 mb-4">
        
        {/* AI Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-yellow-400 border border-black dark:border-zinc-800 overflow-hidden shrink-0 relative mt-1">
            <Image 
              src="/avatar.png" 
              alt="Mohit AI"
              fill
              className="object-cover scale-[1.5] mix-blend-multiply"
            />
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800/60 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 max-w-[85%] leading-relaxed font-medium">
            Hi! I'm Mohit's AI assistant. You can ask me about his experience, projects, or thoughts on technology.
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="relative mt-auto">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-full pl-5 pr-12 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform">
          <Send size={14} className="ml-[-2px]" />
        </button>
      </div>

    </div>
  );
}
