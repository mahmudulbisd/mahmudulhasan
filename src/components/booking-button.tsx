"use client";

import { useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function BookingButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
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
        className={
          "bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white hover:from-[#f2a35f] hover:to-[#c96f2a] transition-all cursor-pointer " +
          className
        }
      >
        {children}
      </button>

      {open && (
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
        </div>
      )}
    </>
  );
}
