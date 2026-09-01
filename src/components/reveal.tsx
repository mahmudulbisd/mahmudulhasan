import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Uses CSS only (no client hooks) so it is
 * safe for server components and static generation. Elements fade/slide
 * in via an IntersectionObserver added on the client in a separate effect.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
