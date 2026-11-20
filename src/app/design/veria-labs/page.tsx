"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";
import ImageGallery from "@/components/Gallery";

const banners = [
  "/veria-banner-day.webp",
  "/veria-banner-night.webp",
  "/veria-banner-sunset.webp",
];

const flowers = [
  "/veria-flower-1.webp",
  "/veria-flower-2.webp",
  "/veria-flower-3.webp",
  "/veria-flower-4.webp",
];

const timesSquare = "/veria-times-square.webp";

export default function VeriaLabs() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Veria Labs</h1>
            <CaseStudyTags slug="veria-labs" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Commissioned illustration work for Veria Labs, including oil-paint–style flower
              artwork for web and promotional use, plus a set of website banner variants for
              light/dark mode.
            </p>
          </div>
        </FadeInSection>

        {/* BANNERS */}
        <ProjectSection eyebrow="Web" title="Website Banners (Light/Dark + Unused Sunset)">
          <div className="space-y-8">
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

            <div>
              <p className="text-muted">
                Created day/night banner variants designed to feel native in both light and dark
                mode while maintaining consistent composition and brand tone.
              </p>
            </div>

            <div>
              <h3 className="card-title mb-4">Sunset Exploration (Unused)</h3>
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
          <div>
            <p className="text-muted mb-8">
              Painted four flower illustrations in an oil-paint style per the commissioner’s
              request, intended for use across the website and promotional materials.
            </p>

            <div>
              <ImageGallery images={flowers} />
            </div>
          </div>
        </ProjectSection>

        {/* TIMES SQUARE */}
        <ProjectSection eyebrow="Highlight" title="Times Square Billboard">
          <div>
            <SoloImage
              src={timesSquare}
              alt="Times Square billboard featuring my flower illustrations"
              heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
              maxWidthClassName="max-w-5xl"
              priority
            />

            <div className="mt-8">
              <p className="text-muted">
                A fun milestone: seeing my flower illustrations displayed on a Times Square
                billboard as part of Veria Labs’ promotional rollout.
              </p>
            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="veria-labs" />

      </main>
    </div>
  );
}
