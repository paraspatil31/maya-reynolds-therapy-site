import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Heading } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function SplitSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface border-t border-text-base/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[560px]">
        {/* Left: Image bleeding off the left edge */}
        <div className="lg:col-span-6 xl:col-span-6 relative w-full h-[340px] sm:h-[420px] lg:h-full min-h-[340px] lg:min-h-[520px]">
          <Reveal className="w-full h-full">
            <ImageSlot
              src={site.split.image.src}
              alt={site.split.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>

        {/* Right: H2 with script & and bottom-aligned text */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-end px-6 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 max-w-2xl">
          <Reveal delay={100}>
            <Heading
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-light leading-[1.14]"
            >
              <RichText text={site.split.h2} scriptAmpersand={true} />
            </Heading>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
