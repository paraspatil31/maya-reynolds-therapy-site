import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Eyebrow, Heading, Button } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[700px] xl:min-h-[760px]">
        {/* Left tall full-bleed image (flush to left edge, ~35% width) */}
        <div className="lg:col-span-5 xl:col-span-4 relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] lg:min-h-[680px]">
          <Reveal className="w-full h-full">
            <ImageSlot
              src="/images/hero.webp"
              alt="Santa Monica coast in soft morning light"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>

        {/* Center / Right main content */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-14 sm:py-16 lg:py-20 relative">
          <div className="max-w-xl xl:max-w-2xl">
            <Reveal delay={100}>
              <Eyebrow className="mb-5 sm:mb-7 leading-relaxed">{site.hero.eyebrow}</Eyebrow>

              <Heading
                as="h1"
                className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.1]"
              >
                <RichText text={site.hero.h1} />
              </Heading>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 sm:mb-10 font-normal">
                {site.hero.subtext}
              </p>

              <div>
                <Button href={site.hero.cta.href} variant="link">
                  {site.hero.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Small second image peeking in from far right edge, offset lower (hidden on mobile) */}
          <div className="hidden lg:block absolute right-0 top-[35%] bottom-0 w-24 lg:w-32 xl:w-44 overflow-hidden pointer-events-none">
            <Reveal delay={200} className="w-full h-full">
              <ImageSlot
                src="/images/hero-2.webp"
                alt="Soft natural texture and linen"
                fill
                sizes="(max-width: 1280px) 120px, 180px"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
