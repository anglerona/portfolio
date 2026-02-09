"use client";

import FadeInSection from "@/components/FadeInSection";
import ImageGallery from "@/components/Gallery";
import Badge from "@/components/Badge";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const styleGuide = "/style.png";
const pages = [
  "/home.png",
  "/dev.png",
  "/design.png",
  "/designProject1.png",
  "/designProject2.png",
  "/gallery.png",
];

export default function Portfolio() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["UI/UX", "Branding"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Personal Portfolio Website</h1>

            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Designer" variant="glass" />
              <Badge label="Figma prototypes" variant="glass" />
              <Badge label="6 screens" variant="glass" />
            </div> */}

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Designed a dual-portfolio experience with clear navigation between development and
              design work. The goal was a clean, immersive layout that highlights projects while
              keeping the UI lightweight and easy to browse.
            </p>
          </div>
        </FadeInSection>

        {/* Screens */}
        <ProjectSection eyebrow="Deliverable" title="Web Page Designs">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={pages[0]}
              alt="Portfolio home page design"
              heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
              maxWidthClassName="max-w-5xl"
              priority
              // openInNewTab
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-3">
              <ImageGallery images={pages} />
            </div>

            {/* Notes */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2 rounded-2xl border border-white/15 bg-black/10 p-6 text-left">
                <h3 className="text-lg font-medium">Design goals</h3>
                <ul className="mt-3 text-white/75 space-y-2 list-disc list-inside">
                  <li>Make it effortless to switch between Dev and Design portfolios</li>
                  <li>Keep layouts minimal so projects and thumbnails carry the visual weight</li>
                  <li>Maintain consistent hierarchy across pages for fast scanning</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/10 p-6 text-left">
                <h3 className="text-lg font-medium">Deliverables</h3>
                <ul className="mt-3 text-white/75 space-y-2 list-disc list-inside">
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
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={styleGuide}
              alt="Personal portfolio style guide"
              heightClassName="h-[360px] sm:h-[420px] md:h-[480px]"
              maxWidthClassName="max-w-5xl"
              // openInNewTab
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
              <h3 className="text-lg font-medium">What it defined</h3>
              <p className="mt-3 text-white/75">
                Built a style guide to keep spacing, typography, and component styling
                consistent across the site, making it easy to extend with new projects over time.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge label="Typography" variant="glass" />
                <Badge label="Spacing" variant="glass" />
                <Badge label="Components" variant="glass" />
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
