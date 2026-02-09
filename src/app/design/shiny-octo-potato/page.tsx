"use client";

import FadeInSection from "@/components/FadeInSection";
import Badge from "@/components/Badge";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

export default function ShinyOctoPotato() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Digital Assets", "Illustrations"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Shiny Octo Potato</h1>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Illustrated a set of fruit sprites for a Suika Game–inspired clone, focusing on
              clean silhouettes, consistent lighting, and readability at small sizes.
            </p>
          </div>
        </FadeInSection>

        {/* Main */}
        <ProjectSection eyebrow="Asset Pack" title="Fruit Sprites">
          <div className="max-w-3xl mx-auto">
            <SoloImage
              src="/shinyocto.png"
              alt="Fruit sprite sheet for Shiny Octo Potato"
              heightClassName="h-[340px] sm:h-[420px] md:h-[480px]"
              maxWidthClassName="max-w-3xl"
              priority
              // openInNewTab
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left">
              <h3 className="text-lg font-medium">Notes</h3>
              <p className="mt-3 text-white/75">
                Created 11 sprites in Procreate based on the Suika fruit progression. The monochrome pink palette was requested by the developer and 
                gives the game a distinctive identity and reinforces a playful, candy-like tone that fits the stacking chaos.
              </p>
            </div>
          </div>
        </ProjectSection>

        <FadeInSection>
          <div className="flex justify-center pb-20">
            <BackButton />
          </div>
        </FadeInSection>

        <div className="h-28" />
      </div>
    </div>
  );
}
