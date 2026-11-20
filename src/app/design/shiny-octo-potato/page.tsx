"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

export default function ShinyOctoPotato() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Shiny Octo Potato</h1>
            <CaseStudyTags slug="shiny-octo-potato" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Illustrated a set of fruit sprites for a Suika Game–inspired clone, focusing on
              clean silhouettes, consistent lighting, and readability at small sizes.
            </p>
          </div>
        </FadeInSection>

        {/* Main */}
        <ProjectSection eyebrow="Asset Pack" title="Fruit Sprites">
          <div>
            <SoloImage
              src="/shinyocto.webp"
              alt="Fruit sprite sheet for Shiny Octo Potato"
              heightClassName="h-[340px] sm:h-[420px] md:h-[480px]"
              maxWidthClassName="max-w-3xl"
              priority
              // openInNewTab
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">Notes</h3>
              <p className="mt-3 text-muted">
                Created 11 sprites in Procreate based on the Suika fruit progression. The monochrome pink palette was requested by the developer and 
                gives the game a distinctive identity and reinforces a playful, candy-like tone that fits the stacking chaos.
              </p>
            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="shiny-octo-potato" />

      </main>
    </div>
  );
}
