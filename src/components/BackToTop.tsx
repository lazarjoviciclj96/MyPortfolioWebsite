"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-neon bg-neon px-5 py-3 font-mono text-sm font-semibold text-background shadow-[0_0_16px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_24px_rgba(57,255,20,0.6)] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Back to top <span aria-hidden="true">↑</span>
    </a>
  );
}
