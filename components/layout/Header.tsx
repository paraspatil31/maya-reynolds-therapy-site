"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC and handle focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuOpen && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/95 backdrop-blur-md shadow-[0_1px_0_rgba(43,42,38,0.08)] py-3 sm:py-4 border-b border-text-base/10"
            : "bg-surface/60 backdrop-blur-sm py-5 sm:py-6 border-b border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-12 lg:px-16">
          {/* Logo lockup */}
          <Link
            href="/"
            className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
            aria-label={`${site.brand.name}, ${site.brand.credential} — ${site.brand.tagline}`}
          >
            <span
              className="font-heading font-light text-xl md:text-2xl tracking-tight text-text-base"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {site.brand.name}
            </span>
            <span
              className="eyebrow mt-1 text-[0.6rem] tracking-[0.18em]"
            >
              {site.brand.wordmarkLabel}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main navigation"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            {/* Contact pill CTA */}
            <Link
              href={site.navCta.href}
              className="btn-pill text-[0.65rem] px-5 py-2"
            >
              {site.navCta.label}
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <button
            ref={hamburgerRef}
            className="flex md:hidden flex-col justify-center items-center gap-1.5 w-9 h-9 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-px w-6 bg-text-base transition-transform duration-300",
                menuOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-text-base transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-text-base transition-transform duration-300",
                menuOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu modal with slide/fade animation & focus trapping */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-surface/98 backdrop-blur-lg transition-all duration-300 md:hidden pt-24 px-6",
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-7 py-10">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow text-base tracking-[0.16em] text-text-base hover:text-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.navCta.href}
            className="btn-pill mt-4 text-xs px-8 py-3"
            onClick={() => setMenuOpen(false)}
          >
            {site.navCta.label}
          </Link>
        </nav>
      </div>
    </>
  );
}
