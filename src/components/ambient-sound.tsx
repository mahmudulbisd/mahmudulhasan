"use client";

import { useEffect } from "react";

/**
 * Ambient robotic beeps — soft random WALL·E-style blips on an interval.
 * Starts only after a user gesture (the boot splash already plays beeps),
 * then continues quietly every 8-16s. Respects prefers-reduced-motion.
 */
export function AmbientSound() {
  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let ctx: AudioContext | null = null;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let stopped = false;

    const playBlip = () => {
      try {
        if (!ctx) {
          const Ctor =
            window.AudioContext ||
            (
              window as unknown as {
                webkitAudioContext: typeof AudioContext;
              }
            ).webkitAudioContext;
          ctx = new Ctor();
        }
        if (ctx.state === "suspended") void ctx.resume();
        const t = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const freq = 500 + Math.random() * 700;
        osc.type = "square";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.025, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.2);
      } catch {
        /* audio unavailable */
      }
    };

    const schedule = () => {
      timeout = setTimeout(() => {
        playBlip();
        if (!stopped) schedule();
      }, 8000 + Math.random() * 8000);
    };

    schedule();

    return () => {
      stopped = true;
      if (timeout) clearTimeout(timeout);
      if (ctx) void ctx.close();
    };
  }, []);

  return null;
}
