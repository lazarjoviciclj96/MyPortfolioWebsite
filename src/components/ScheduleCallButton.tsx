"use client";

import { personal } from "@/data/profile";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function ScheduleCallButton() {
  return (
    <a
      href={personal.calendly}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        if (window.Calendly) {
          e.preventDefault();
          window.Calendly.initPopupWidget({ url: personal.calendly });
        }
      }}
      className="rounded-md bg-neon px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]"
    >
      Schedule a call
    </a>
  );
}
