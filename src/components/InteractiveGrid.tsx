"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 42;
const GLOW_RADIUS = 260;
const BASE_LINE_COLOR = "rgba(57, 255, 20, 0.08)";
const BASE_DOT_COLOR = "rgba(57, 255, 20, 0.16)";
const GLOW_COLOR = "rgba(57, 255, 20, 0.5)";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Target = where the pointer actually is. Pos = smoothed, trailing value
    // used for drawing, so the glow eases toward the cursor instead of snapping.
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let hasPointer = false;
    let rafId = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!hasPointer) {
        target.x = width / 2;
        target.y = height / 2;
        pos.x = target.x;
        pos.y = target.y;
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Base dim grid
      ctx!.strokeStyle = BASE_LINE_COLOR;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      for (let x = 0; x <= width; x += GRID_SIZE) {
        ctx!.moveTo(x + 0.5, 0);
        ctx!.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += GRID_SIZE) {
        ctx!.moveTo(0, y + 0.5);
        ctx!.lineTo(width, y + 0.5);
      }
      ctx!.stroke();

      // Dim intersection dots
      ctx!.fillStyle = BASE_DOT_COLOR;
      for (let x = 0; x <= width; x += GRID_SIZE) {
        for (let y = 0; y <= height; y += GRID_SIZE) {
          ctx!.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      // Additive glow spotlight around cursor — brightens whatever grid
      // lines/dots fall under it without needing a second geometry pass.
      ctx!.globalCompositeOperation = "lighter";
      const gradient = ctx!.createRadialGradient(
        pos.x,
        pos.y,
        0,
        pos.x,
        pos.y,
        GLOW_RADIUS
      );
      gradient.addColorStop(0, GLOW_COLOR);
      gradient.addColorStop(1, "rgba(57, 255, 20, 0)");
      ctx!.fillStyle = gradient;
      ctx!.fillRect(
        Math.max(0, pos.x - GLOW_RADIUS),
        Math.max(0, pos.y - GLOW_RADIUS),
        GLOW_RADIUS * 2,
        GLOW_RADIUS * 2
      );
      ctx!.globalCompositeOperation = "source-over";
    }

    function loop() {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      draw();
      rafId = requestAnimationFrame(loop);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      hasPointer = true;
    }

    function handlePointerLeave() {
      hasPointer = false;
      target.x = width / 2;
      target.y = height / 2;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    if (prefersReducedMotion) {
      draw();
    } else {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
