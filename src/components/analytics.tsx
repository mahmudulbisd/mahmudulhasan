"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    const gtag = (
      window as unknown as { dataLayer: unknown[] }
    ).dataLayer ?? [];
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(s);
    const push = (...args: unknown[]) => gtag.push(args);
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag = push;
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "js",
      new Date()
    );
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "config",
      process.env.NEXT_PUBLIC_GA_ID
    );
  }, []);

  return null;
}
