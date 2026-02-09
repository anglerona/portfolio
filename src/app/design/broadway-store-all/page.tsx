"use client";

import FadeInSection from "@/components/FadeInSection";
import Badge from "@/components/Badge";
import BackButton from "@/components/BackButton";
import ImageGallery from "@/components/Gallery";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const oldLogo = "/bsa-old-logo.png";

const logoIdeas = "/bsa-logo-ideas.png";

const finalBLogo = "/bsa-final-b.png";
const finalLogoLockup = "/bsa-final-lockup.png";
const wordmarkOnly = "/bsa-wordmark.png";

const colorVariants = "/bsa-color-variants.png";

const signage = [
  "/bsa-square-sign.png",
  "/bsa-units-available-sign.png",
];

export default function BroadwayStoreAll() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Branding", "Logo Design", "Signage"]} />

        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Broadway Store-All</h1>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Brand Designer" variant="glass" />
              <Badge label="Logo system" variant="glass" />
              <Badge label="Signage" variant="glass" />
            </div>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Designed a refreshed visual identity for Broadway Store-All, a storage rental company,
              focusing on clarity, recognizability, and real-world readability across signage,
              storefronts, and printed materials.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="Before" title="Legacy Logo">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={oldLogo}
              alt="Old Broadway Store-All logo"
              maxWidthClassName="max-w-md"
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
              <h3 className="text-lg font-medium">Why a refresh</h3>
              <p className="mt-3 text-white/75">
                The owner felt the original logo was too basic and generic, relying heavily on a literal warehouse-and-boxes motif. The 
                refresh aimed to create a more creative and distinctive symbol that still clearly communicates storage while maintaining a 
                professional, no-nonsense tone.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Exploration" title="Logo Concepts">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={logoIdeas}
              alt="Logo concept exploration sheet"
              maxWidthClassName="max-w-5xl"
            />

            <p className="text-white/70 text-center max-w-3xl mx-auto mt-6">
              Explored multiple logo directions centered around the idea of storage, testing how storage
              cues like stacked forms, compartments, and containment could be embedded directly
              into the letterform.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Final" title="Logo System">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="text-lg font-medium text-center mb-5">Primary Mark</h3>

              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-2xl border border-white/15 bg-black/10 p-6">
                  <img
                    src={finalBLogo}
                    alt="Final Broadway Store-All B logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="mt-6 text-white/75 text-center">
                The standalone “B” mark integrates a simplified storage box directly into the letterform, creating an immediate visual 
                cue for storage while remaining bold, compact, and highly legible at a distance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="text-lg font-medium text-center mb-5">Logo Lockup</h3>

              <SoloImage
                src={finalLogoLockup}
                alt="Final logo lockup with company name"
                maxWidthClassName="max-w-full"
              />

              <p className="mt-6 text-white/75 text-center">
                Combined the mark with a clean wordmark to create a balanced lockup suitable for
                storefronts, documents, and large signage.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-lg font-medium text-center mb-4">Wordmark Only</h3>
            <SoloImage
              src={wordmarkOnly}
              alt="Wordmark-only version of the logo"
              maxWidthClassName="max-w-lg"
            />
            <p className="text-white/70 text-center max-w-3xl mx-auto mt-4">
              A simplified wordmark version for use cases where the symbol is unnecessary or space
              is limited.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="System" title="Colour Variations">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={colorVariants}
              alt="Logo colour variations on light and dark backgrounds"
              maxWidthClassName="max-w-5xl"
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
              <h3 className="text-lg font-medium">Colour considerations</h3>
              <p className="mt-3 text-white/75">
                Tested the logo across light and dark backgrounds to ensure consistent contrast and
                visibility, especially for outdoor signage and printed materials exposed to
                different lighting conditions.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Large Format" title="Signage Applications">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-4">
              <ImageGallery images={signage} />
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
