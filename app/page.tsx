import React from "react";
import { site } from "@/content/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { WhoIHelpSection } from "@/components/sections/WhoIHelpSection";
import { BannerSection } from "@/components/sections/BannerSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SplitSection } from "@/components/sections/SplitSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Psychologist", "LocalBusiness"],
        name: `${site.brand.name}, ${site.brand.credential}`,
        description: site.seo.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.contact.address,
          addressLocality: site.contact.city,
          addressRegion: site.contact.state,
          postalCode: site.contact.zip,
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", "name": site.contact.city },
          { "@type": "State", "name": "California" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Therapy Specialties",
          itemListElement: site.services.items.map((item, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.text,
            },
            position: idx + 1,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: site.faqs.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Intro */}
      <IntroSection />

      {/* 3. Who I help */}
      <WhoIHelpSection />

      {/* 4. Banner */}
      <BannerSection />

      {/* 5. Areas of expertise */}
      <ExpertiseSection />

      {/* 6. About / How I work (secondary bg) */}
      <AboutSection />

      {/* 7. Split */}
      <SplitSection />

      {/* 8. Specialties */}
      <SpecialtiesSection />

      {/* 9. NEW: Our Office (Phase 4, placed between Specialties and FAQ) */}
      <OfficeSection />

      {/* 10. FAQ */}
      <FaqSection />

      {/* 11. Schedule CTA */}
      <CtaSection />
    </>
  );
}
