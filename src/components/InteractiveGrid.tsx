"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 42;
const BASE_LINE_COLOR = "rgba(57, 255, 20, 0.08)";
const BASE_DOT_COLOR = "rgba(57, 255, 20, 0.16)";
// Per-frame multiplier: how quickly an excited cell fades back to the base grid.
const DECAY = 0.94;
// Glow strength by Chebyshev distance from the cell under the cursor.
const NEIGHBOR_FALLOFF = [1, 0.4, 0.1];

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
    let cols = 0;
    let rows = 0;
    // Per-cell glow intensity (0..1), indexed row-major.
    let cells = new Float32Array(0);
    let pointerCol = -1;
    let pointerRow = -1;
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
      cols = Math.ceil(width / GRID_SIZE);
      rows = Math.ceil(height / GRID_SIZE);
      cells = new Float32Array(cols * rows);
    }

    // Light up the cell under the cursor plus a soft ring of neighbors.
    function excite(col: number, row: number) {
      const reach = NEIGHBOR_FALLOFF.length - 1;
      for (let dr = -reach; dr <= reach; dr++) {
        for (let dc = -reach; dc <= reach; dc++) {
          const c = col + dc;
          const r = row + dr;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          const strength = NEIGHBOR_FALLOFF[Math.max(Math.abs(dc), Math.abs(dr))];
          const idx = r * cols + c;
          if (cells[idx] < strength) cells[idx] = strength;
        }
      }
    }

    function drawBase() {
      ctx!.clearRect(0, 0, width, height);

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

      ctx!.fillStyle = BASE_DOT_COLOR;
      for (let x = 0; x <= width; x += GRID_SIZE) {
        for (let y = 0; y <= height; y += GRID_SIZE) {
          ctx!.fillRect(x - 1, y - 1, 2, 2);
        }
      }
    }

    function drawGlow() {
      ctx!.globalCompositeOperation = "lighter";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const v = cells[r * cols + c];
          if (v < 0.02) continue;
          const x = c * GRID_SIZE;
          const y = r * GRID_SIZE;
          ctx!.fillStyle = `rgba(57, 255, 20, ${v * 0.08})`;
          ctx!.fillRect(x, y, GRID_SIZE, GRID_SIZE);
          ctx!.strokeStyle = `rgba(57, 255, 20, ${v * 0.6})`;
          ctx!.strokeRect(x + 0.5, y + 0.5, GRID_SIZE, GRID_SIZE);
        }
      }
      ctx!.globalCompositeOperation = "source-over";
    }

    function loop() {
      // Keep the cell under a resting cursor lit; the trail behind it fades.
      if (hasPointer) excite(pointerCol, pointerRow);
      for (let i = 0; i < cells.length; i++) {
        cells[i] = cells[i] > 0.02 ? cells[i] * DECAY : 0;
      }
      drawBase();
      drawGlow();
      rafId = requestAnimationFrame(loop);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x >= width || y >= height) {
        hasPointer = false;
        return;
      }
      pointerCol = Math.floor(x / GRID_SIZE);
      pointerRow = Math.floor(y / GRID_SIZE);
      hasPointer = true;
      // Excite on the event too, so fast sweeps leave an unbroken trail.
      excite(pointerCol, pointerRow);
    }

    function handlePointerLeave() {
      hasPointer = false;
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      drawBase();
      return () => {
        window.removeEventListener("resize", resize);
      };
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    rafId = requestAnimationFrame(loop);

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
