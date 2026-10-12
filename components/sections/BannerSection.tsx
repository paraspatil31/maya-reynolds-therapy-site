import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function BannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] flex items-end">
      {/* Background image slot */}
      <div className="absolute inset-0 z-0">
        <ImageSlot
          src="/images/banner.webp"
          alt="Quiet ocean shoreline at dusk"
          fill
          sizes="100vw"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
        {/* Dark primary overlay for contrast (>4.5:1 ratio) */}
        <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content: Large serif quote bottom-left */}
      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <blockquote className="max-w-3xl lg:max-w-4xl">
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.22] text-surface"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <RichText text={site.banner.quote} />
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
