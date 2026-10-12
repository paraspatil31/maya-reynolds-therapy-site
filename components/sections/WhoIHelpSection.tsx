import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Heading } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function WhoIHelpSection() {
  const images = [
    {
      src: "/images/help-1.webp",
      alt: "Person peacefully looking out at the ocean in soft light",
    },
    {
      src: "/images/help-2.webp",
      alt: "Quiet desk with journal and warm morning tea",
    },
    {
      src: "/images/help-3.webp",
      alt: "Creative workspace filled with calm natural greenery",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-surface border-t border-text-base/10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {/* Column 1: Heading */}
          <div className="lg:col-span-1 pt-2">
            <Reveal>
              <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                <RichText text={site.whoIHelp.heading} />
              </Heading>
            </Reveal>
          </div>

          {/* Columns 2, 3, 4: Three cards staggered by 80ms */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {site.whoIHelp.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 80}>
                <div className="group flex flex-col space-y-5">
                  <div className="card-zoom relative w-full aspect-square overflow-hidden shadow-sm">
                    <ImageSlot
                      src={images[idx]?.src || `/images/help-${idx + 1}.webp`}
                      alt={images[idx]?.alt || card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-light text-text-base leading-snug pt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
