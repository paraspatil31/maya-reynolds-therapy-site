import React from "react";
import { site } from "@/content/site";
import { Heading } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function IntroSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large H2 and two text columns */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
            <Reveal>
              <Heading
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light leading-[1.14] mb-12 sm:mb-16 max-w-2xl"
              >
                {site.intro.h2}
              </Heading>
            </Reveal>

            {/* Two text columns below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-sm sm:text-base text-text-muted leading-relaxed">
              {/* Column 1: Caps lead + paragraph 1 */}
              <Reveal delay={100} className="flex flex-col space-y-5">
                <p className="eyebrow text-text-base text-xs tracking-[0.14em] font-medium leading-relaxed">
                  {site.intro.lead}
                </p>
                <p>{site.intro.paragraphs[0]}</p>
              </Reveal>

              {/* Column 2: Paragraph 2 */}
              <Reveal delay={180} className="flex flex-col space-y-5">
                <p>{site.intro.paragraphs[1]}</p>
              </Reveal>
            </div>
          </div>

          {/* Right: Tall image bleeding off right edge, offset downward */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-6 lg:mt-0 lg:translate-y-16">
            <Reveal delay={150}>
              <div className="card-zoom relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-sm">
                <ImageSlot
                  src="/images/intro.webp"
                  alt="Sunlit room with sheer curtains and calm atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
