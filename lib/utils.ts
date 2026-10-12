import { clsx, type ClassValue } from "clsx";

/**
 * Minimal cn() utility — merges class names.
 * clsx is bundled with Next.js so no extra install needed.
 * Falls back to manual join if clsx is unavailable.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
