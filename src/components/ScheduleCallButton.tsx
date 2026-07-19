"use client";

import Button from "@/components/Button";
import { personal } from "@/data/profile";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type ScheduleCallButtonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

export default function ScheduleCallButton({
  variant = "primary",
  size = "md",
}: ScheduleCallButtonProps) {
  return (
    <Button
      href={personal.calendly}
      external
      variant={variant}
      size={size}
      onClick={(e) => {
        if (window.Calendly) {
          e.preventDefault();
          window.Calendly.initPopupWidget({ url: personal.calendly });
        }
      }}
    >
      Schedule a call
    </Button>
  );
}
