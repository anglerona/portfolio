"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const assetsSheet = "/chasepixel.webp";
const paletteSheet = "/chasepixel-colors.png";

export default function Chasepixel() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Chasepixel</h1>
            <CaseStudyTags slug="chasepixel" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Illustrated a character asset collection for Chasepixel to communicate a diverse,
              friendly team-at-work vibe across their website and socials.
            </p>
          </div>
        </FadeInSection>

        {/* Assets */}
        <ProjectSection eyebrow="Deliverable" title="Character Web Asset Sheet">
          <div>
            <SoloImage
              src={assetsSheet}
              alt="Character web asset sheet"
              heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
              maxWidthClassName="max-w-5xl"
              priority
              // openInNewTab
            />

            <div className="mt-8 grid items-start gap-4 md:grid-cols-4">
              <div className="md:col-span-2 text-left">
                <h3 className="text-lg font-bold">Design goals</h3>
                <ul className="mt-3 text-muted space-y-2 list-disc list-inside">
                  <li>Communicate collaboration, creativity, and problem-solving through everyday work moments</li>
                  <li>Represent diversity naturally through posture, activity, and interaction rather than exaggeration</li>
                  <li>Create assets that feel warm and human while remaining clean and web-friendly</li>
                </ul>
              </div>

              <div className="md:col-span-2 text-left">
                <h3 className="text-lg font-bold">Usage</h3>
                <p className="mt-3 text-muted">
                  Designed for landing sections, feature callouts, and social graphics where
                  friendly, human visuals add warmth without distracting from content.
                </p>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Palette */}
        <ProjectSection eyebrow="System" title="Colour Palette">
          <div>
            <SoloImage
              src={paletteSheet}
              alt="Colour palette exploration for Chasepixel asset set"
              heightClassName="h-[320px] sm:h-[380px] md:h-[420px]"
              maxWidthClassName="max-w-4xl"
              // openInNewTab
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">Palette rationale</h3>
              <p className="mt-3 text-muted">
                Chose a neutral + pastel palette to keep the set visually cohesive and adaptable
                across different backgrounds. Softer accents help maintain a calm “modern web”
                feel while still allowing characters and props to stand out.
              </p>

            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="chasepixel" />

      </main>
    </div>
  );
}
