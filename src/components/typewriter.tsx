"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 28,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className="animate-caret text-[#35c8c2]">▍</span>
    </span>
  );
}
