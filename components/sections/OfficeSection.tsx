import React from "react";
import { site } from "@/content/site";
import { RichText } from "@/lib/rich-text";
import { Eyebrow, Heading } from "@/components/ui/primitives";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";

export function OfficeSection() {
  return (
    <section
      id={site.office.id}
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-surface border-t border-text-base/10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Eyebrow, H2, paragraphs, details list */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <Reveal>
              <Eyebrow className="mb-0">{site.office.eyebrow}</Eyebrow>

              <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-light">
                <RichText text={site.office.h2} />
              </Heading>

              <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed pt-2">
                {site.office.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Details list with thin dividers */}
            <Reveal delay={100} className="pt-6 border-t border-text-base/15 space-y-4">
              {site.office.details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-text-base/10 gap-1 sm:gap-4"
                >
                  <span className="eyebrow text-text-base text-xs tracking-[0.16em] shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm text-text-muted sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: Office image grid (large office1, smaller offset office2, cropped 3rd) */}
          <div className="lg:col-span-6 relative pt-4 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Image 1: Large Office 1 */}
              <div className="sm:col-span-7">
                <Reveal delay={100}>
                  <div className="card-zoom relative aspect-[4/5] shadow-sm overflow-hidden">
                    <ImageSlot
                      src={site.office.images[0].src}
                      alt={site.office.images[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Column 2: Smaller Office 2 offset downward + cropped detail */}
              <div className="sm:col-span-5 flex flex-col space-y-6 sm:translate-y-12">
                <Reveal delay={180}>
                  <div className="card-zoom relative aspect-[4/3] shadow-sm overflow-hidden">
                    <ImageSlot
                      src={site.office.images[1].src}
                      alt={site.office.images[1].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>

                {/* Cropped detail with object-position */}
                {site.office.images[2] && (
                  <Reveal delay={260} className="hidden sm:block">
                    <div className="card-zoom relative aspect-square shadow-sm overflow-hidden">
                      <ImageSlot
                        src={site.office.images[2].src}
                        alt={site.office.images[2].alt}
                        fill
                        sizes="20vw"
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover object-[70%_30%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
