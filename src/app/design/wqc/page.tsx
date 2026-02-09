"use client";

import FadeInSection from "@/components/FadeInSection";
import ImageGallery from "@/components/Gallery";
import Badge from "@/components/Badge";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

import BackButton from "@/components/BackButton";

// Branding
const logos = ["/wqc-logo.png", "/wqc-logo-full.png"];

// Winter 2026
const winterStyleGuide = ["/wqc-styleguide.png"];
const winterInstagram = [
  "/wqc-winter-ig-1.png",
  "/wqc-winter-ig-2.png",
  "/wqc-winter-ig-3.png",
  "/wqc-winter-ig-4.png",
  "/wqc-winter-ig-5.png",
];
const winterPoster = ["/wqc-winter-poster-1.png", "/wqc-winter-poster-2.png"];

// Fall 2025
const fallWebsite = [
  "/wqc-website-1.png",
  "/wqc-website-2.png",
  "/wqc-website-3.png",
  "/wqc-website-4.png",
  "/wqc-website-5.png",
  "/wqc-website-6.png",
];
const fallPosters = [
  "/wqc-fall-poster-1.png",
  "/wqc-fall-poster-2.png",
  "/wqc-fall-poster-3.png",
  "/wqc-fall-poster-4.png",
];
const fallStories = ["/wqc-fall-story-1.png", "/wqc-fall-story-2.png"];
const fallInstagram = [
  "/wqc-fall-ig-1.png",
  "/wqc-fall-ig-2.png",
  "/wqc-fall-ig-3.png",
  "/wqc-fall-ig-4.png",
  "/wqc-fall-ig-5.png",
];

export default function WaterlooQuantClub() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Branding", "Social Media", "UI/UX"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Waterloo Quant Club</h1>
            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Worked on visual design across branding, UI/UX, and social media for the
              Waterloo Quant Club. This project includes a full visual rebrand
              in Winter 2026, transitioning away from the club’s legacy Fall
              2025 aesthetic.
            </p>
          </div>
        </FadeInSection>

        {/* BRANDING */}
        <ProjectSection eyebrow="Foundation" title="Brand Identity">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="font-medium text-lg mb-4">Logo System</h3>
              <p className="text-white/75 mb-6">
                Designed a flexible logo system that works both as a standalone
                mark and alongside the club name, allowing consistent usage
                across web, print, and social.
              </p>

              <div className="space-y-4">
                {/* Mark */}
                <div className="flex justify-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border border-white/15 bg-black/10 p-4">
                    <Image
                      src={logos[0]}
                      alt="Waterloo Quant Club logo mark"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Full lockup */}
                <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
                  <Image
                    src={logos[1]}
                    alt="WQC logo lockup"
                    width={2400}
                    height={1200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="font-medium text-lg mb-4">Rebrand Direction</h3>
              <p className="text-white/75">
                The Winter 2026 rebrand aimed to move away from a busy,
                inconsistent visual language toward a more minimal, clean,
                and modern identity that better reflects quantitative finance.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* WINTER 2026 */}
        <ProjectSection eyebrow="Winter 2026" title="Rebrand Rollout">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Style Guide
              </h3>
              <SoloImage
                src={winterStyleGuide[0]}
                alt="Waterloo Quant Club style guide"
                priority
                // openInNewTab
              />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Instagram Graphics
              </h3>
              <ImageGallery images={winterInstagram} />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Event Posters
              </h3>
              <ImageGallery images={winterPoster} />
            </div>
          </div>
        </ProjectSection>

        {/* FALL 2025 */}
        <ProjectSection eyebrow="Fall 2025" title="Legacy Visual System">
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Website UI
              </h3>
              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Designed six website pages under the club’s legacy aesthetic.
              </p>
              <ImageGallery images={fallWebsite} />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">Posters</h3>
              <ImageGallery images={fallPosters} />
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-medium mb-4 text-center">
                  Instagram Stories
                </h3>
                <ImageGallery images={fallStories} />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4 text-center">
                  Instagram Posts
                </h3>
                <ImageGallery images={fallInstagram} />
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Reflection */}
        <ProjectSection eyebrow="Reflection" title="Outcome & Learnings">
          <div className="max-w-3xl mx-auto text-center text-white/75">
            <p>
              This project strengthened my ability to design scalable visual
              systems and transition an organization through a rebrand without
              disrupting ongoing operations. The Winter 2026 identity is now
              used as the foundation for all future Waterloo Quant Club content.
            </p>
          </div>
        </ProjectSection>

        {/* Footer */}
        <FadeInSection>
          <div className="flex justify-center pb-20">
            <BackButton />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
