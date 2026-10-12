import React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — max-width centred, horizontal padding.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 md:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Section — vertical rhythm block.
 * py-24 (mobile) → py-32 (tablet) → py-40 (desktop)
 */
export function Section({
  children,
  className,
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      style={style}
      className={cn("py-24 md:py-32 lg:py-40", className)}
    >
      {children}
    </section>
  );
}

/**
 * Eyebrow — small tracked uppercase label above a heading.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow mb-6", className)}>{children}</p>;
}

/**
 * Heading — polymorphic heading element.
 * Font family / weight applied via inline style to ensure CSS variable resolves.
 */
export function Heading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}) {
  const sizeMap: Record<string, string> = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
  };

  return (
    <Tag
      style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
      className={cn("leading-[1.12]", sizeMap[Tag], className)}
    >
      {children}
    </Tag>
  );
}

/**
 * Button — pill-outline or underline-link variant.
 */
export function Button({
  href,
  variant = "pill",
  children,
  className,
}: {
  href: string;
  variant?: "pill" | "pill-primary" | "link";
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    variant === "link"
      ? "link-underline"
      : variant === "pill-primary"
      ? "btn-pill btn-pill-primary"
      : "btn-pill";

  return (
    <a
      href={href}
      className={cn(
        base,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </a>
  );
}
