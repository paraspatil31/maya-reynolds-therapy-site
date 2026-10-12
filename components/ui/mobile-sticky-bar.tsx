"use client";

import React, { useState, useEffect } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Mobile sticky "Book now" bar:
 * - Fixed to the bottom on screens below 768px (md:hidden)
 * - Shown after the user scrolls past the hero
 * - Hidden when the contact section is in view
 * - Uses pill button with primary token and safe-area padding
 */
export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find hero section (first section on page)
      const heroEl = document.querySelector("section");
      const contactEl = document.getElementById("contact");

      if (!heroEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const isPastHero = heroBottom < 50;

      let isContactInView = false;
      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        // If contact section is anywhere in viewport or just entering
        isContactInView = contactRect.top < window.innerHeight - 80;
      }

      setVisible(isPastHero && !isContactInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface/95 backdrop-blur-md border-t border-text-base/10 px-6 pt-3 transition-all duration-300 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
      aria-hidden={!visible}
    >
      <a
        href={site.contact.bookingHref || "#contact"}
        className="btn-pill btn-pill-primary w-full text-center py-3 text-xs font-medium tracking-[0.16em] shadow-sm focus-visible:ring-2 focus-visible:ring-accent"
      >
        {site.cta.button.label || "BOOK NOW"}
      </a>
    </div>
  );
}
