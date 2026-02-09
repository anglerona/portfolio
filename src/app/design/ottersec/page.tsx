"use client";

import FadeInSection from "@/components/FadeInSection";
import Badge from "@/components/Badge";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const sketchesSheet = "/ottersec-pin-sketches.png";
const colorVariationsSheet = "/ottersec-pin-color-variants.png";
const crossAttemptsSheet = "/ottersec-cross-attempts.png";
const finalPinDesign = "/ottersec-final-pin.png";

export default function OtterSec() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Merch"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">OtterSec - Pin Commission</h1>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Illustrator" variant="glass" />
              <Badge label="Souvenir pin" variant="glass" />
              <Badge label="Switzerland trip" variant="glass" />
            </div>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Commissioned pin design for OtterSec: an otter hugging a Switzerland-themed badge,
              created as a souvenir for employees. The work includes sketch exploration,
              color studies, and a (very real) multi-try battle with the cross perspective.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="Deliverable" title="Final Pin Design">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={finalPinDesign}
              alt="Final OtterSec Switzerland souvenir pin design"
              maxWidthClassName="max-w-lg"
              priority
              // openInNewTab
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
              <h3 className="text-lg font-medium">Design intent</h3>
              <p className="mt-3 text-white/75">
                Kept the shapes bold and simple for a small physical pin, with a friendly,
                souvenir-like feel. The otter’s pose communicates warmth and “keepsake” energy,
                while the badge clearly anchors the Switzerland theme.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* SKETCH EXPLORATION */}
        <ProjectSection eyebrow="Process" title="Sketch Exploration">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Explored different compositions and badge placements to balance cuteness, clarity,
              and manufacturability at pin scale.
            </p>

            <SoloImage
              src={sketchesSheet}
              alt="Sketch sheet of pin design ideas"
              maxWidthClassName="max-w-5xl"
              // openInNewTab
            />
          </div>
        </ProjectSection>

        {/* COLOR VARIATIONS */}
        <ProjectSection eyebrow="Process" title="Colour Variations">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Compared color palettes to find the best balance between Swiss identity cues and a
              friendly, brand-neutral look that would print well on enamel.
            </p>

            <SoloImage
              src={colorVariationsSheet}
              alt="Sheet of color variations for comparison"
              maxWidthClassName="max-w-5xl"
            />
          </div>
        </ProjectSection>

        {/* CROSS ATTEMPTS */}
        <ProjectSection eyebrow="Process (Silly)" title="Cross Perspective Attempts">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              The cross perspective took multiple tries to get right. This sheet documents some
              failed attempts before landing on the final version.
            </p>

            <SoloImage
              src={crossAttemptsSheet}
              alt="Four failed attempts at the cross perspective"
              heightClassName="h-[320px] sm:h-[380px] md:h-[440px]"
              maxWidthClassName="max-w-5xl"
            />
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
