"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";
import Image from "next/image";
import ImageGallery from "@/components/Gallery";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const oldLogo = "/bsa-old-logo.webp";

const logoIdeas = "/bsa-logo-ideas.png";

const finalBLogo = "/bsa-final-b.png";
const finalLogoLockup = "/bsa-final-lockup.png";
const wordmarkOnly = "/bsa-wordmark.png";

const colorVariants = "/bsa-color-variants.webp";

const signage = [
  "/bsa-square-sign.png",
  "/bsa-units-available-sign.webp",
];

export default function BroadwayStoreAll() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Broadway Store-All</h1>
            <CaseStudyTags slug="broadway-store-all" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Designed a refreshed visual identity for Broadway Store-All, a storage rental company,
              focusing on clarity, recognizability, and real-world readability across signage,
              storefronts, and printed materials.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="Before" title="Legacy Logo">
          <div>
            <SoloImage
              src={oldLogo}
              alt="Old Broadway Store-All logo"
              maxWidthClassName="max-w-md"
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">Why a refresh</h3>
              <p className="mt-3 text-muted">
                The owner felt the original logo was too basic and generic, relying heavily on a literal warehouse-and-boxes motif. The 
                refresh aimed to create a more creative and distinctive symbol that still clearly communicates storage while maintaining a 
                professional, no-nonsense tone.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Exploration" title="Logo Concepts">
          <div>
            <SoloImage
              src={logoIdeas}
              alt="Logo concept exploration sheet"
              maxWidthClassName="max-w-5xl"
            />

            <p className="text-muted mt-6">
              Explored multiple logo directions centered around the idea of storage, testing how storage
              cues like stacked forms, compartments, and containment could be embedded directly
              into the letterform.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Final" title="Logo System">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold mb-5">Primary Mark</h3>

              <div className="flex justify-center">
                <div className="w-40 h-40 p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={finalBLogo}
                      alt="Final Broadway Store-All B logo"
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-muted">
                The standalone “B” mark integrates a simplified storage box directly into the letterform, creating an immediate visual 
                cue for storage while remaining bold, compact, and highly legible at a distance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5">Logo Lockup</h3>

              <SoloImage
                src={finalLogoLockup}
                alt="Final logo lockup with company name"
                maxWidthClassName="max-w-full"
              />

              <p className="mt-6 text-muted">
                Combined the mark with a clean wordmark to create a balanced lockup suitable for
                storefronts, documents, and large signage.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4">Wordmark Only</h3>
            <SoloImage
              src={wordmarkOnly}
              alt="Wordmark-only version of the logo"
              maxWidthClassName="max-w-lg"
            />
            <p className="text-muted mt-4">
              A simplified wordmark version for use cases where the symbol is unnecessary or space
              is limited.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="System" title="Colour Variations">
          <div>
            <SoloImage
              src={colorVariants}
              alt="Logo colour variations on light and dark backgrounds"
              maxWidthClassName="max-w-5xl"
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">Colour considerations</h3>
              <p className="mt-3 text-muted">
                Tested the logo across light and dark backgrounds to ensure consistent contrast and
                visibility, especially for outdoor signage and printed materials exposed to
                different lighting conditions.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Large Format" title="Signage Applications">
          <div>
            <div>
              <ImageGallery images={signage} />
            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="broadway-store-all" />

      </main>
    </div>
  );
}
