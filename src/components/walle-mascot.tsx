"use client";

import { useRef, type MouseEvent } from "react";
import { WalleRobot } from "@/components/walle-robot";

/**
 * WALL-E mascot whose eyes follow the cursor across the page.
 * Uses CSS .pupil with inline transforms driven by mousemove.
 */
export function WalleMascot({
  className = "",
  tracking = 6,
}: {
  className?: string;
  tracking?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const leftPupil = useRef<SVGGElement>(null);
  const rightPupil = useRef<SVGGElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.max(Math.abs(dx), Math.abs(dy), 1);
    const tx = (dx / dist) * tracking;
    const ty = (dy / dist) * tracking;
    if (leftPupil.current) {
      leftPupil.current.style.transform = `translate(${tx}px, ${ty}px)`;
    }
    if (rightPupil.current) {
      rightPupil.current.style.transform = `translate(${tx}px, ${ty}px)`;
    }
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      className={className}
    >
      <WalleRobot
        leftPupilRef={leftPupil}
        rightPupilRef={rightPupil}
        className="w-full h-full"
      />
    </div>
  );
}
