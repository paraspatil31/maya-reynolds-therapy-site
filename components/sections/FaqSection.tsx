import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Heading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  return (
    <section
      id={site.faqs.id}
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-surface border-t border-text-base/10"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-5 pt-2">
            <Reveal>
              <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-light">
                <RichText text={site.faqs.heading} />
              </Heading>
            </Reveal>
          </div>

          {/* Right: Accordion with 6 items and thin dividers */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="divide-y divide-text-base/15 border-t border-b border-text-base/15">
                {site.faqs.items.map((item, idx) => (
                  <details
                    key={idx}
                    className="group py-6 transition-colors duration-150"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm select-none">
                      <h3
                        className="text-lg sm:text-xl font-light text-text-base pr-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.q}
                      </h3>
                      <span className="shrink-0 text-text-base font-light text-xl transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="mt-4 pr-10 text-sm sm:text-base text-text-muted leading-relaxed">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
