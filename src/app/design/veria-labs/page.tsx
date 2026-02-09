"use client";

import FadeInSection from "@/components/FadeInSection";
import Badge from "@/components/Badge";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";
import ImageGallery from "@/components/Gallery";

const banners = [
  "/veria-banner-day.png",
  "/veria-banner-night.png",
  "/veria-banner-sunset.png",
];

const flowers = [
  "/veria-flower-1.png",
  "/veria-flower-2.png",
  "/veria-flower-3.png",
  "/veria-flower-4.png",
];

const timesSquare = "/veria-times-square.png";

export default function VeriaLabs() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Illustrations", "Digital Assets"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Veria Labs</h1>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Illustrator" variant="glass" />
              <Badge label="Oil-paint style" variant="glass" />
              <Badge label="Web + promo" variant="glass" />
            </div>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Commissioned illustration work for Veria Labs, including oil-paint–style flower
              artwork for web and promotional use, plus a set of website banner variants for
              light/dark mode.
            </p>
          </div>
        </FadeInSection>

        {/* BANNERS */}
        <ProjectSection eyebrow="Web" title="Website Banners (Light/Dark + Unused Sunset)">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid gap-6 md:grid-cols-2 items-start">
              <SoloImage
                src={banners[0]}
                alt="Daytime banner (light mode)"
                maxWidthClassName="max-w-full"
              />
              <SoloImage
                src={banners[1]}
                alt="Nighttime banner (dark mode)"
                maxWidthClassName="max-w-full"
              />
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 text-center">
              <p className="text-white/75 max-w-3xl mx-auto">
                Created day/night banner variants designed to feel native in both light and dark
                mode while maintaining consistent composition and brand tone.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-medium mb-4 text-center">Sunset Exploration (Unused)</h3>
              <SoloImage
                src={banners[2]}
                alt="Unused sunset banner exploration"
                maxWidthClassName="max-w-4xl"
              />
            </div>
          </div>
        </ProjectSection>

        {/* FLOWERS */}
        <ProjectSection eyebrow="Illustration" title="Oil-Paint Flower Set">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Painted four flower illustrations in an oil-paint style per the commissioner’s
              request, intended for use across the website and promotional materials.
            </p>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-4">
              <ImageGallery images={flowers} />
            </div>
          </div>
        </ProjectSection>

        {/* TIMES SQUARE */}
        <ProjectSection eyebrow="Highlight" title="Times Square Billboard">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={timesSquare}
              alt="Times Square billboard featuring my flower illustrations"
              heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
              maxWidthClassName="max-w-5xl"
              priority
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-center">
              <p className="text-white/75 max-w-3xl mx-auto">
                A fun milestone: seeing my flower illustrations displayed on a Times Square
                billboard as part of Veria Labs’ promotional rollout.
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
