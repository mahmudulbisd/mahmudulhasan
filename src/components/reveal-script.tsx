"use client";

import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals `.reveal` elements as they enter the viewport.
 *
 * Handles three scenarios:
 * 1. Hard load — every `.reveal` in the initial DOM gets revealed on scroll.
 * 2. Client-side route changes — the root layout does NOT remount, so a
 *    one-shot scan would miss the new page's elements. We re-scan on every
 *    pathname change and via a MutationObserver.
 * 3. Elements already inside the viewport (e.g. a page hero) are revealed
 *    synchronously, so content never waits on an IntersectionObserver tick.
 */
export function RevealScript() {
  const pathname = usePathname();

  const scan = useCallback(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)");
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inViewport =
        rect.top < window.innerHeight - 40 && rect.bottom > 0;
      if (inViewport) {
        el.classList.add("revealed");
      }
    });
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeEls = () => {
      const els = document.querySelectorAll(".reveal:not(.revealed)");
      els.forEach((el) => observer?.observe(el));
      // Immediately reveal anything already on screen (fast nav / above fold).
      requestAnimationFrame(scan);
    };

    observeEls();

    // Watch for new reveal elements added by client-side navigations.
    mutationObserver = new MutationObserver(() => observeEls());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Re-scan when the route changes (covers the brief window where the new
    // page is mounted but the mutation observer hasn't fired yet).
    scan();

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [scan]);

  // Re-run the scan whenever the pathname changes.
  useEffect(() => {
    scan();
  }, [pathname, scan]);

  return null;
}
