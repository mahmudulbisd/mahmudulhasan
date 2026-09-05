"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { BookingButton } from "@/components/booking-button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = () => setOpen(false);

  // Lock body scroll while the menu is open and restore on close/unmount.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    // Move focus into the menu; restore it to the toggle on close.
    firstLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = original;
      toggle?.focus();
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-close when the viewport grows past the mobile breakpoint (rotation / resize).
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 768) close();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
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
            ref={toggleRef}
            className="md:hidden text-[#f5ecd9] p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — portaled to <body> so no ancestor backdrop-filter/stacking context can trap it */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div
              className="absolute inset-0 bg-[#0a0e1a]/90 backdrop-blur-md animate-menu-overlay-in"
              onClick={close}
            />
            <div
              ref={panelRef}
              id="mobile-menu"
              className="relative z-10 flex flex-col items-center justify-start overflow-y-auto pt-24 pb-8 px-6 h-full animate-menu-panel-in"
            >
              <div className="w-full flex justify-end">
                <button
                  onClick={close}
                  className="text-[#f5ecd9] p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 space-y-6 w-full">
                {siteConfig.nav.map((item, i) => (
                  <a
                    key={item.name}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={close}
                    className="text-2xl font-black uppercase tracking-[0.2em] hover:text-[#35c8c2] text-[#f5ecd9] transition-colors font-display"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <BookingButton
                onClick={close}
                className="w-full max-w-xs rounded-2xl px-8 py-5 font-black uppercase tracking-widest text-sm shadow-xl font-display bg-gradient-to-r from-[#e8873a] to-[#b85f1e] mt-6"
              >
                Get Started
              </BookingButton>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
