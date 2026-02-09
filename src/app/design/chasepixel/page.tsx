"use client";

import FadeInSection from "@/components/FadeInSection";
import Badge from "@/components/Badge";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const assetsSheet = "/chasepixel.png";
const paletteSheet = "/chasepixel-colors.png";

export default function Chasepixel() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Illustrations", "Digital Assets", "Branding"]} />

        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Chasepixel</h1>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Illustrator" variant="glass" />
              <Badge label="SVG asset set" variant="glass" />
              <Badge label="Cohesive palette" variant="glass" />
            </div>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Illustrated a character asset collection for Chasepixel to communicate a diverse,
              friendly team-at-work vibe across their website and socials.
            </p>
          </div>
        </FadeInSection>

        {/* Assets */}
        <ProjectSection eyebrow="Deliverable" title="Character Web Asset Sheet">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={assetsSheet}
              alt="Character web asset sheet"
              heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
              maxWidthClassName="max-w-5xl"
              priority
              // openInNewTab
            />

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2 rounded-2xl border border-white/15 bg-black/10 p-6 text-left">
                <h3 className="text-lg font-medium">Design goals</h3>
                <ul className="mt-3 text-white/75 space-y-2 list-disc list-inside">
                  <li>Communicate collaboration, creativity, and problem-solving through everyday work moments</li>
                  <li>Represent diversity naturally through posture, activity, and interaction rather than exaggeration</li>
                  <li>Create assets that feel warm and human while remaining clean and web-friendly</li>
                </ul>
              </div>

              <div className="md:col-span-2 rounded-2xl border border-white/15 bg-black/10 p-6 text-left">
                <h3 className="text-lg font-medium">Usage</h3>
                <p className="mt-3 text-white/75">
                  Designed for landing sections, feature callouts, and social graphics where
                  friendly, human visuals add warmth without distracting from content.
                </p>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Palette */}
        <ProjectSection eyebrow="System" title="Colour Palette">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={paletteSheet}
              alt="Colour palette exploration for Chasepixel asset set"
              heightClassName="h-[320px] sm:h-[380px] md:h-[420px]"
              maxWidthClassName="max-w-4xl"
              // openInNewTab
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
              <h3 className="text-lg font-medium">Palette rationale</h3>
              <p className="mt-3 text-white/75">
                Chose a neutral + pastel palette to keep the set visually cohesive and adaptable
                across different backgrounds. Softer accents help maintain a calm “modern web”
                feel while still allowing characters and props to stand out.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge label="Cohesion" variant="glass" />
                <Badge label="Soft contrast" variant="glass" />
                <Badge label="Background-flexible" variant="glass" />
              </div>
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
