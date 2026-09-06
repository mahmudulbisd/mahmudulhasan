"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
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
      <nav className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center bg-background/85 backdrop-blur-xl border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link
            href="/"
            className="cursor-pointer group"
            aria-label="Go to top"
          >
            <span className="text-2xl font-black tracking-tight text-foreground font-display">
              {siteConfig.firstName}
              <span className="text-primary inline-block transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                {siteConfig.lastName}
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] font-semibold tracking-wide transition-all hover:text-primary-hover text-muted"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-px h-8 bg-border-strong" />
            <BookingButton className="rounded-lg px-5 py-2.5 text-sm font-semibold">
              Get Started
            </BookingButton>
          </div>

          <button
            ref={toggleRef}
            className="md:hidden text-foreground p-2 -mr-2 hover:text-primary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — portaled to <body> with solid opaque background */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] md:hidden bg-background flex flex-col animate-menu-overlay-in"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            {/* Header inside mobile overlay matching navbar */}
            <div className="h-24 px-4 max-w-7xl mx-auto w-full flex justify-between items-center border-b border-border flex-shrink-0">
              <Link
                href="/"
                onClick={close}
                className="cursor-pointer group"
                aria-label="Go to top"
              >
                <span className="text-2xl font-black tracking-tight text-foreground font-display">
                  {siteConfig.firstName}
                  <span className="text-primary inline-block transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {siteConfig.lastName}
                  </span>
                </span>
              </Link>

              <button
                onClick={close}
                className="text-foreground p-2 -mr-2 hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Links & CTA */}
            <div
              ref={panelRef}
              id="mobile-menu"
              className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between"
            >
              <div className="flex flex-col items-center space-y-6 my-auto py-2">
                {siteConfig.nav.map((item, i) => (
                  <Link
                    key={item.name}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={close}
                    className="text-2xl font-bold tracking-tight hover:text-primary-hover text-foreground transition-colors font-display"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 w-full flex justify-center">
                  <BookingButton
                    onClick={close}
                    className="w-full max-w-xs rounded-xl px-8 py-4 text-sm font-semibold"
                  >
                    Get Started
                  </BookingButton>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col items-center gap-1 text-center text-xs text-muted">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
                <span className="text-[10px] text-muted-2">
                  CRM Automation & Performance Marketing
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
