"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const sketchesSheet = "/ottersec-pin-sketches.webp";
const colorVariationsSheet = "/ottersec-pin-color-variants.webp";
const crossAttemptsSheet = "/ottersec-cross-attempts.webp";
const finalPinDesign = "/ottersec-final-pin.png";

export default function OtterSec() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">OtterSec - Pin Commission</h1>
            <CaseStudyTags slug="ottersec" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Commissioned pin design for OtterSec: an otter hugging a Switzerland-themed badge,
              created as a souvenir for employees. The work includes sketch exploration,
              color studies, and a (very real) multi-try battle with the cross perspective.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="Deliverable" title="Final Pin Design">
          <div>
            <SoloImage
              src={finalPinDesign}
              alt="Final OtterSec Switzerland souvenir pin design"
              maxWidthClassName="max-w-lg"
              priority
              // openInNewTab
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">Design intent</h3>
              <p className="mt-3 text-muted">
                Kept the shapes bold and simple for a small physical pin, with a friendly,
                souvenir-like feel. The otter’s pose communicates warmth and “keepsake” energy,
                while the badge clearly anchors the Switzerland theme.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* SKETCH EXPLORATION */}
        <ProjectSection eyebrow="Process" title="Sketch Exploration">
          <div>
            <p className="text-muted mb-8">
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
          <div>
            <p className="text-muted mb-8">
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
          <div>
            <p className="text-muted mb-8">
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

        <CaseStudyNext slug="ottersec" />

      </main>
    </div>
  );
}
