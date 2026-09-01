"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { BookingButton } from "@/components/booking-button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center bg-[rgba(10,14,26,0.82)] backdrop-blur-xl border-b border-[rgba(245,236,217,0.08)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        <a
          href="#home"
          className="cursor-pointer group"
          aria-label="Go to top"
        >
          <span className="text-2xl font-black tracking-tighter text-[#f5ecd9] font-display">
            {siteConfig.firstName}
            <span className="text-[#e8873a] inline-block transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
              {siteConfig.lastName}
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-12">
          {siteConfig.nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#35c8c2] text-[#9aa3b8] font-display"
            >
              {item.name}
            </a>
          ))}
          <div className="w-px h-8 bg-[rgba(245,236,217,0.1)]" />
          <BookingButton className="rounded-2xl px-8 py-6 font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-all font-display bg-gradient-to-r from-[#e8873a] to-[#b85f1e] hover:from-[#f2a35f] hover:to-[#c96f2a]">
            Get Started
          </BookingButton>
        </div>

        <button
          className="md:hidden text-[#f5ecd9] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#0a0e1a] pt-24 pb-8 px-4 flex flex-col items-center justify-center space-y-8 md:hidden animate-in fade-in slide-in-from-top-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-xl font-black uppercase tracking-[0.2em] hover:text-[#35c8c2] text-[#f5ecd9] transition-colors font-display"
            >
              {item.name}
            </a>
          ))}
          <BookingButton className="w-full max-w-xs rounded-2xl px-8 py-8 font-black uppercase tracking-widest text-sm shadow-xl font-display bg-gradient-to-r from-[#e8873a] to-[#b85f1e]">
            Get Started
          </BookingButton>
        </div>
      )}
    </nav>
  );
}
