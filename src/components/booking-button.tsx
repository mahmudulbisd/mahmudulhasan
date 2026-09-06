"use client";

import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const variantClasses: Record<"primary" | "light" | "secondary", string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-hover hover:to-primary shadow-xl shadow-primary/25",
  secondary:
    "bg-transparent border-2 border-accent/70 text-accent hover:bg-accent/10",
  light: "bg-white text-background hover:bg-foreground shadow-xl shadow-black/10",
};

export function BookingButton({
  children,
  className = "",
  variant = "primary",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "light" | "secondary";
  onClick?: () => void;
}) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    onClick?.();
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`inline-flex items-center justify-center cursor-pointer transition-all ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Close booking"
              >
                <X size={20} className="text-slate-700" />
              </button>
              <iframe
                src={siteConfig.bookingUrl}
                className="w-full h-full border-none"
                title="Booking Calendar"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
