import React from "react";
import { site } from "@/content/site";
import { Eyebrow, Heading, Button } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section
      id={site.about.id}
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-secondary overflow-hidden text-text-base"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Content and two columns */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
            <Reveal>
              <Eyebrow className="mb-4 text-text-muted">{site.about.eyebrow}</Eyebrow>

              <Heading
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light leading-[1.14] mb-10 sm:mb-12 max-w-2xl"
              >
                {site.about.h2}
              </Heading>
            </Reveal>

            {/* Two text columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-sm sm:text-base text-text-base/80 leading-relaxed mb-10">
              {/* Column 1 */}
              <Reveal delay={80} className="flex flex-col space-y-5">
                <p className="eyebrow text-text-base text-xs tracking-[0.14em] font-medium leading-relaxed">
                  {site.about.lead}
                </p>
                {site.about.col1.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              {/* Column 2 */}
              <Reveal delay={160} className="flex flex-col space-y-5">
                {site.about.col2.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>

            {/* Meet Dr. Reynolds link */}
            <Reveal delay={200} className="pt-2">
              <Button href={site.about.link.href} variant="link">
                {site.about.link.label}
              </Button>
            </Reveal>
          </div>

          {/* Right: Maya's portrait bleeding off right edge */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-6 lg:mt-0">
            <Reveal delay={120}>
              <div className="card-zoom relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] shadow-md overflow-hidden">
                <ImageSlot
                  src={site.about.image.src}
                  alt={site.about.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
