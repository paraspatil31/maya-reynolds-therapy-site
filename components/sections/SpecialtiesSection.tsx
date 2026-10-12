import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Heading, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function SpecialtiesSection() {
  return (
    <section
      id={site.services.id}
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-surface border-t border-text-base/10"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-4 pt-2">
            <Reveal>
              <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-light">
                <RichText text={site.services.heading} />
              </Heading>
            </Reveal>
          </div>

          {/* Right: 2x2 grid (3 services + 1 soft CTA card) staggered by 80ms */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
              {/* 3 Service items */}
              {site.services.items.map((service, idx) => (
                <Reveal key={service.title} delay={idx * 80}>
                  <div className="flex flex-col space-y-4">
                    <h3
                      className="text-xl sm:text-2xl font-light text-text-base"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
                      {service.text}
                    </p>
                    <div className="pt-2">
                      <Button href="#contact" variant="link">
                        {service.cta}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* 4th Cell: Soft CTA staggered by 240ms */}
              <Reveal delay={3 * 80}>
                <div className="flex flex-col space-y-4 p-6 sm:p-8 bg-secondary/40 border border-text-base/10 rounded-sm">
                  <h3
                    className="text-xl sm:text-2xl font-light text-text-base"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {site.services.fourthCell.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
                    {site.services.fourthCell.text}
                  </p>
                  <div className="pt-2">
                    <Button
                      href={site.services.fourthCell.cta.href}
                      variant="link"
                    >
                      {site.services.fourthCell.cta.label}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
