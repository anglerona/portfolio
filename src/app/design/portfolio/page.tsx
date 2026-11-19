"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";
import ImageGallery from "@/components/Gallery";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const styleGuide = "/style.png";
const pages = [
  "/home.webp",
  "/dev.png",
  "/design.webp",
  "/designProject1.png",
  "/designProject2.png",
  "/gallery.png",
];

export default function Portfolio() {
  return (
    <div className="relative">

      <main id="main" className="mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Personal Portfolio Website</h1>
            <CaseStudyTags slug="portfolio" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Designed a dual-portfolio experience with clear navigation between development and
              design work. The goal was a clean, immersive layout that highlights projects while
              keeping the UI lightweight and easy to browse.
            </p>
          </div>
        </FadeInSection>

        {/* Screens */}
        <ProjectSection eyebrow="Deliverable" title="Web Page Designs">
          <div>
            <SoloImage
              src={pages[0]}
              alt="Portfolio home page design"
              heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
              maxWidthClassName="max-w-5xl"
              priority
              // openInNewTab
            />

            <div className="mt-8">
              <ImageGallery images={pages} />
            </div>

            {/* Notes */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2 text-left">
                <h3 className="text-lg font-bold">Design goals</h3>
                <ul className="mt-3 text-muted space-y-2 list-disc list-inside">
                  <li>Make it effortless to switch between Dev and Design portfolios</li>
                  <li>Keep layouts minimal so projects and thumbnails carry the visual weight</li>
                  <li>Maintain consistent hierarchy across pages for fast scanning</li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-bold">Deliverables</h3>
                <ul className="mt-3 text-muted space-y-2 list-disc list-inside">
                  <li>Page mockups</li>
                  <li>Reusable components</li>
                  <li>Navigation + layout system</li>
                </ul>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Style guide */}
        <ProjectSection eyebrow="System" title="Style Guide">
          <div>
            <SoloImage
              src={styleGuide}
              alt="Personal portfolio style guide"
              heightClassName="h-[360px] sm:h-[420px] md:h-[480px]"
              maxWidthClassName="max-w-5xl"
              // openInNewTab
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">What it defined</h3>
              <p className="mt-3 text-muted">
                Built a style guide to keep spacing, typography, and component styling
                consistent across the site, making it easy to extend with new projects over time.
              </p>

            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="portfolio" />

      </main>
    </div>
  );
}
