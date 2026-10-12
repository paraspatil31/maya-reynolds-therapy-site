"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  as?: "div" | "article" | "p";
}

/**
 * Reusable Reveal wrapper:
 * - Fades up 16px over ~500ms
 * - Triggers once per element via IntersectionObserver
 * - Supports delay (e.g. for staggered cards)
 * - Respects prefers-reduced-motion via CSS overrides
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: "500ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn(
        "transition-all will-change-[opacity,transform]",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
    >
      {children}
    </Component>
  );
}
