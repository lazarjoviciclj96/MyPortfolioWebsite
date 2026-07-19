"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/profile";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Referrals", href: "#referrals" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["top", "about", "projects", "referrals", "blog", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    // Header also renders on /blog, where no home sections exist.
    if (els.length === 0) return;

    // A thin band at mid-viewport: exactly one section is active at a time,
    // and the fixed header height is irrelevant to it.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id === "top" ? "" : entry.target.id);
          }
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Contact (+footer) can be shorter than half the viewport and never reach
    // the band — force it active at the very bottom of the page.
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveId("contact");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === `#${activeId}` || (href === "/blog" && activeId === "blog");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight text-neon text-glow"
        >
          {personal.handle}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "true" : undefined}
                className={`relative font-mono text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-neon after:transition-transform after:duration-300 hover:text-neon hover:after:scale-x-100 ${
                  active ? "text-neon after:scale-x-100" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-neon transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-neon transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/80 bg-background px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-2 py-3 font-mono text-sm transition-colors hover:text-neon ${
                isActive(link.href) ? "text-neon" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
