import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Eyebrow, Heading, Button } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section
      id={site.cta.id}
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-surface border-t border-text-base/10 overflow-hidden"
    >
      {/* Left cropped decorative image (hidden on smaller screens) */}
      <div className="hidden lg:block absolute left-0 bottom-12 w-48 xl:w-64 aspect-[3/4] -translate-x-12 shadow-sm pointer-events-none">
        <Reveal delay={150} className="w-full h-full">
          <ImageSlot
            src="/images/cta-1.webp"
            alt="Hands holding a warm ceramic cup"
            fill
            sizes="(max-width: 1280px) 192px, 256px"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </Reveal>
      </div>

      {/* Main CTA Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center flex flex-col items-center">
        <Reveal>
          <Eyebrow className="mb-4">{site.cta.eyebrow}</Eyebrow>

          <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8">
            <RichText text={site.cta.h2} />
          </Heading>

          <div className="space-y-4 text-base sm:text-lg text-text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            {site.cta.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div>
            <Button href={site.cta.button.href} variant="pill">
              {site.cta.button.label}
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Right image bleeding off the right edge (hidden on smaller screens) */}
      <div className="hidden lg:block absolute right-0 top-12 w-48 xl:w-64 aspect-[3/4] translate-x-12 shadow-sm pointer-events-none">
        <Reveal delay={200} className="w-full h-full">
          <ImageSlot
            src="/images/cta-2.webp"
            alt="Natural shell and sand detail in warm daylight"
            fill
            sizes="(max-width: 1280px) 192px, 256px"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
