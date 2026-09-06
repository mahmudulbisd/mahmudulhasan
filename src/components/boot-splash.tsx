"use client";

import { useEffect, useState } from "react";
import { WalleRobot } from "@/components/walle-robot";

export function BootSplash() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    // Respect reduced-motion: skip the boot animation + audio entirely.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("hidden");
      return;
    }

    // Play a soft boot beep using Web Audio
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AudioCtx();
      const beep = (freq: number, time: number, dur = 0.15, gainV = 0.04) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(gainV, time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + dur);
      };
      const t = ctx.currentTime + 0.1;
      beep(420, t);
      beep(520, t + 0.5);
      beep(660, t + 1.0);
      beep(880, t + 1.5, 0.3);
    } catch {
      /* audio not available, fine */
    }

    // Start fading at 2.4s (700ms fade), then unmount once fully transparent.
    const t1 = setTimeout(() => setPhase("fading"), 2400);
    const t2 = setTimeout(() => setPhase("hidden"), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0e1a] transition-opacity duration-700 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[rgba(99,102,241,0.2)] blur-3xl animate-pulse-ring" />
        <WalleRobot className="w-40 h-40 md:w-56 md:h-56 animate-boot-blink drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]" />
      </div>
      <p className="mt-8 font-display text-[#38bdf8] text-xs md:text-sm font-black uppercase tracking-[0.5em] animate-caret">
        Wall·E Digital
      </p>
      <div className="mt-4 w-56 md:w-72 h-2 rounded-full bg-[rgba(238,242,249,0.1)] overflow-hidden border border-[rgba(238,242,249,0.15)]">
        <div className="h-full bg-gradient-to-r from-[#6366f1] to-[#38bdf8] animate-boot-charge" />
      </div>
      <p className="mt-4 text-[#5f6b8a] text-[10px] uppercase tracking-[0.3em] font-display">
        Initializing mission modules…
      </p>
    </div>
  );
}
