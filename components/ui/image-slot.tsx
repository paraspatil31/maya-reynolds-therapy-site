import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSlotProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
}

/**
 * ImageSlot renders Next.js Image for local assets in /public/images,
 * or a tinted placeholder (bg-secondary) with a TODO comment when missing.
 */
export function ImageSlot({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className,
  containerClassName,
  sizes,
  style,
  aspectRatio,
}: ImageSlotProps) {
  // Check if asset is a recognized local file
  const isAvailable = Boolean(
    src &&
      (src.startsWith("/images/") ||
        src.startsWith("/images/maya/"))
  );

  if (isAvailable) {
    if (fill) {
      return (
        <div
          className={cn("relative overflow-hidden", containerClassName)}
          style={{ aspectRatio, ...style }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
            priority={priority}
            className={cn("object-cover", className)}
          />
        </div>
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={width || 600}
        height={height || 600}
        priority={priority}
        className={cn("object-cover", className)}
        style={style}
      />
    );
  }

  // Tinted placeholder fallback per brief rule:
  // "If a file is missing, use a tinted placeholder (bg-secondary) with a TODO comment."
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary flex flex-col items-center justify-center p-6 text-center select-none",
        containerClassName,
        className
      )}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
        ...style,
      }}
      role="img"
      aria-label={alt}
    >
      {/* TODO: Add image file '${src}'. Using warm tinted placeholder (bg-secondary). */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2 opacity-50">
        <svg
          className="w-8 h-8 text-text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <span className="eyebrow text-[0.6rem] tracking-wider text-text-muted">
          {alt.length > 40 ? `${alt.slice(0, 40)}...` : alt}
        </span>
      </div>
    </div>
  );
}
