import React from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/primitives";

export function Footer() {
  return (
    <footer
      className="py-16 border-t"
      style={{ borderColor: "rgba(43,42,38,0.12)" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <p
              className="font-heading font-light text-xl mb-2 text-text-base"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {site.brand.name}
            </p>
            <p
              className="eyebrow mb-4"
              style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
            >
              {site.brand.wordmarkLabel}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              {site.footer.blurb}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="eyebrow text-text-muted hover:text-primary transition-colors"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href={site.navCta.href}
                  className="eyebrow text-text-muted hover:text-primary transition-colors"
                  style={{ fontSize: "0.65rem" }}
                >
                  {site.navCta.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact info */}
          <div className="text-sm text-text-muted space-y-1">
            <p>{site.contact.address}</p>
            <p>{site.contact.city}, {site.contact.state} {site.contact.zip}</p>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-6 border-t text-xs text-text-muted"
          style={{ borderColor: "rgba(43,42,38,0.10)" }}
        >
          {site.footer.copyright}
        </div>
      </Container>
    </footer>
  );
}
