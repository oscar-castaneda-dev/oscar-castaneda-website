"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface DotGridProps {
  fade?: boolean;
  className?: string;
  interactive?: boolean;
}

interface Dot {
  startX: number;
  startY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SPACING = 16;
const RADIUS = 1;
const COLOR = "#555";
const MOUSE_R = 80;
const MOUSE_R_SQ = MOUSE_R * MOUSE_R;

export function DotGrid({ fade = true, className, interactive = false }: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    dots: [] as Dot[],
    mx: -9999,
    my: -9999,
    mouseActive: false,
    rafId: 0,
    running: false,
  });

  useEffect(() => {
    if (!interactive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    function buildDots(w: number, h: number) {
      const dots: Dot[] = [];
      for (let y = SPACING / 2; y < h; y += SPACING) {
        for (let x = SPACING / 2; x < w; x += SPACING) {
          dots.push({ startX: x, startY: y, x, y, vx: 0, vy: 0 });
        }
      }
      return dots;
    }

    function drawDots() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = COLOR;
      ctx!.beginPath();
      for (const d of s.dots) {
        ctx!.moveTo(d.x + RADIUS, d.y);
        ctx!.arc(d.x, d.y, RADIUS, 0, Math.PI * 2);
      }
      ctx!.fill();
    }

    function tick() {
      let anyMoving = s.mouseActive;

      for (const d of s.dots) {
        const dx = d.x - s.mx;
        const dy = d.y - s.my;
        const distSq = dx * dx + dy * dy;

        if (s.mouseActive && distSq < MOUSE_R_SQ && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / MOUSE_R) * 6;
          d.vx += (dx / dist) * force;
          d.vy += (dy / dist) * force;
        }

        d.vx += (d.startX - d.x) * 0.1;
        d.vy += (d.startY - d.y) * 0.1;
        d.vx *= 0.72;
        d.vy *= 0.72;
        d.x += d.vx;
        d.y += d.vy;

        if (Math.abs(d.vx) > 0.05 || Math.abs(d.vy) > 0.05) anyMoving = true;
      }

      drawDots();

      if (anyMoving) {
        s.rafId = requestAnimationFrame(tick);
      } else {
        s.running = false;
      }
    }

    function startLoop() {
      if (s.running) return;
      s.running = true;
      s.rafId = requestAnimationFrame(tick);
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas!.width = width;
      canvas!.height = height;
      s.dots = buildDots(width, height);
      drawDots();
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      s.mx = e.clientX - rect.left;
      s.my = e.clientY - rect.top;
      s.mouseActive = true;
      startLoop();
    }

    function onMouseLeave() {
      s.mouseActive = false;
      s.mx = -9999;
      s.my = -9999;
      startLoop();
    }

    const parent = canvas.parentElement!;
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(s.rafId);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [interactive]);

  if (!interactive) {
    return (
      <div
        className={cn(
          "dot-grid absolute inset-0 pointer-events-none",
          fade && "mask-[linear-gradient(to_bottom,black_0%,transparent_100%)]",
          className,
        )}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 pointer-events-none",
        fade && "mask-[linear-gradient(to_bottom,black_0%,transparent_100%)]",
        className,
      )}
    />
  );
}
