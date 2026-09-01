"use client";

import { useEffect, useState } from "react";
import { BootSplash } from "@/components/boot-splash";
import { EveShip } from "@/components/eve-ship";
import { TrashCube } from "@/components/trash-cube";

export function CinematicOverlays() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Boot-up splash */}
      <BootSplash />

      {/* EVE streaking across the sky */}
      <div className="fixed inset-x-0 top-[18%] z-[5] pointer-events-none">
        <EveShip className="w-28 md:w-36 animate-eve-fly drop-shadow-[0_0_18px_rgba(53,200,194,0.8)]" />
      </div>

      {/* Drifting trash cubes */}
      <TrashCube className="fixed top-[12%] right-[6%] w-10 md:w-14 opacity-30 animate-cube-float pointer-events-none z-[4]" />
      <TrashCube
        className="fixed bottom-[20%] left-[5%] w-8 md:w-12 opacity-20 animate-cube-float pointer-events-none z-[4]"
        style={{ animationDelay: "2s" }}
      />
      <TrashCube className="fixed top-[55%] right-[14%] w-7 md:w-10 opacity-15 animate-cube-spin pointer-events-none z-[4]" />

      {/* CRT scanline sweep */}
      <div className="fixed inset-0 z-[6] pointer-events-none overflow-hidden opacity-40">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[rgba(53,200,194,0.06)] to-transparent animate-scanline" />
      </div>
    </>
  );
}
