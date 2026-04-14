"use client";

import { useEffect, useLayoutEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "right";
}

function isInViewport(element: HTMLElement): boolean {
  const { top, bottom } = element.getBoundingClientRect();
  return top < window.innerHeight - 40 && bottom > 0;
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || isInViewport(el)) {
      return;
    }

    el.dataset.state = "hidden";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.state !== "hidden") return;

    if (!("IntersectionObserver" in window)) {
      el.dataset.state = "visible";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        timeoutRef.current = window.setTimeout(() => {
          el.dataset.state = "visible";
          observer.unobserve(el);
        }, delay);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      observer.disconnect();
    };
  }, [delay]);

  const animClass = direction === "right" ? "reveal-right" : "reveal-up";

  return (
    <div ref={ref} className={`${animClass} ${className}`} data-state="visible">
      {children}
    </div>
  );
}
