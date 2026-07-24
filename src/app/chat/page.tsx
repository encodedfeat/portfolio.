"use client";

import { Send, User, Loader2 } from "lucide-react";
import Image from "next/image";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    initialMessages: [
      {
        id: 'welcome-message',
        role: 'assistant',
        content: "Hi! I'm Mohit's AI assistant. You can ask me about his experience, projects, or thoughts on technology."
      }
    ]
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);

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
      <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col gap-4 pr-2 mb-4">
        
        {/* Dynamic Messages */}
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {m.role === 'assistant' ? (
              <div className="w-8 h-8 rounded-full bg-yellow-400 border border-black dark:border-zinc-800 overflow-hidden shrink-0 relative mt-1">
                <Image 
                  src="/avatar.png" 
                  alt="Mohit AI"
                  fill
                  className="object-cover scale-[1.5] mix-blend-multiply"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 mt-1">
                <User size={16} />
              </div>
            )}
            <div 
              className={`rounded-2xl px-4 py-3 text-sm leading-relaxed font-medium max-w-[85%] whitespace-pre-wrap break-words ${
                m.role === 'user' 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black rounded-tr-sm' 
                  : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 rounded-tl-sm'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-400 border border-black dark:border-zinc-800 overflow-hidden shrink-0 relative mt-1">
              <Image 
                src="/avatar.png" 
                alt="Mohit AI"
                fill
                className="object-cover scale-[1.5] mix-blend-multiply"
              />
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800/60 rounded-2xl rounded-tl-sm px-4 py-3 text-sm flex items-center">
              <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
            </div>
          </div>
        )}
        {error && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-1">
              !
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-red-600 dark:text-red-400 font-medium whitespace-pre-wrap">
              {error.message || "An error occurred."}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="relative mt-auto">
        <input 
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          type="text" 
          placeholder="Type a message..." 
          className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-full pl-5 pr-12 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all disabled:opacity-50"
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
        >
          <Send size={14} className="ml-[-2px]" />
        </button>
      </form>

    </div>
  );
}
