import React from "react";
import { site } from "@/content/site";
import { Heading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function ExpertiseSection() {
  const midpoint = Math.ceil(site.expertise.items.length / 2);
  const col1 = site.expertise.items.slice(0, midpoint);
  const col2 = site.expertise.items.slice(midpoint);

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-surface border-t border-text-base/10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading with script word on second line */}
          <div className="lg:col-span-4 pt-2">
            <Reveal>
              <Heading as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Areas of
                <br />
                <span className="script-accent text-[1.18em] block mt-2">expertise</span>
              </Heading>
            </Reveal>
          </div>

          {/* Right: Two-column list with 1px bottom dividers */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16">
              {/* Column 1 */}
              <Reveal delay={80} className="flex flex-col">
                {col1.map((item) => (
                  <div
                    key={item}
                    className="border-b border-text-base/15 py-4 sm:py-5 flex items-center justify-between"
                  >
                    <span className="eyebrow text-text-base text-xs sm:text-[0.75rem] tracking-[0.18em]">
                      {item}
                    </span>
                  </div>
                ))}
              </Reveal>

              {/* Column 2 */}
              <Reveal delay={160} className="flex flex-col">
                {col2.map((item) => (
                  <div
                    key={item}
                    className="border-b border-text-base/15 py-4 sm:py-5 flex items-center justify-between"
                  >
                    <span className="eyebrow text-text-base text-xs sm:text-[0.75rem] tracking-[0.18em]">
                      {item}
                    </span>
                  </div>
                ))}

                {/* ...AND MORE. as the last item */}
                <div className="border-b border-text-base/15 py-4 sm:py-5 flex items-center justify-between">
                  <span className="eyebrow text-text-muted text-xs sm:text-[0.75rem] tracking-[0.18em]">
                    {site.expertise.more}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
