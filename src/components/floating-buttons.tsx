"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] right-[calc(env(safe-area-inset-right)+1.5rem)] z-50">
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring opacity-50" />
          <MessageCircle size={30} className="relative z-10 fill-white" />
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-[calc(env(safe-area-inset-bottom)+5.75rem)] right-[calc(env(safe-area-inset-right)+1.75rem)] z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#1a2237] text-[#35c8c2] border border-[rgba(53,200,194,0.3)] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#243047] hover:scale-110 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
