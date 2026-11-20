"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";
import Image from "next/image";
import ImageGallery from "@/components/Gallery";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const oldLogo = "/rdg-old-logo.webp";

const shortRIdeas = "/rdg-r-ideas.webp";
const fullLogoIdeas = "/rdg-full-logo-ideas.png";

const finalShortR = "/rdg-final-r.png";
const finalFullLogo = "/rdg-final-rdg.png";

const cardIdeas = "/rdg-business-card-ideas.webp";
const finalCardFrontBack = "/rdg-business-card-final.webp";

const signs = [
  "/rdg-for-sale-sign.png",
  "/rdg-open-house-sign.png",
  "/rdg-for-lease-sign.png",
];

export default function RDGProperties() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">RDG Properties Inc</h1>
            <CaseStudyTags slug="rdg" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Designed a refreshed brand identity for RDG Properties Inc, including a new logo
              system (short mark + full lockup), business card designs, and real estate signage
              templates. The goal was a confident, professional look that stays highly legible
              at both small (cards) and large (signs) sizes.
            </p>
          </div>
        </FadeInSection>

        {/* BEFORE */}
        <ProjectSection eyebrow="Before" title="Legacy Logo">
          <div>
            <SoloImage
              src={oldLogo}
              alt="Old RDG logo"
              maxWidthClassName="max-w-md"
              // openInNewTab
            />

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">Why a refresh</h3>
              <p className="mt-3 text-muted">
                The legacy logo didn’t scale cleanly across print and signage. The refresh focused
                on sharper geometry, improved spacing, and a clearer hierarchy so the identity
                remains readable from a distance and consistent across applications.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* EXPLORATION */}
        <ProjectSection eyebrow="Exploration" title="Logo Concepts">
          <div className="space-y-12">
            <div>
              <h3 className="card-title mb-4">
                Short “R” Logo Ideas
              </h3>
              <SoloImage
                src={shortRIdeas}
                alt="Short R logo ideas sheet"
                maxWidthClassName="max-w-5xl"
              />
              <p className="text-muted mt-5">
                Explored multiple compact “R” concepts for small-format applications, refining the existing house theme to 
                achieve a clearer, more recognizable silhouette.
              </p>
            </div>

            <div>
              <h3 className="card-title mb-4">
                Full “RDG” Lockup Ideas
              </h3>
              <SoloImage
                src={fullLogoIdeas}
                alt="Full RDG logo ideas sheet"
                maxWidthClassName="max-w-lg"
              />
              <p className="text-muted mt-5">
                Iterated on typography, spacing, and letterform consistency so the full lockup feels
                stable and professional in print while pairing naturally with the short mark.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* FINAL LOGOS */}
        <ProjectSection eyebrow="Final" title="Logo System">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="h-full">
              <h3 className="text-lg font-bold mb-5">Short Logo</h3>

              <div className="flex justify-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src={finalShortR}
                      alt="Final shortened R logo"
                      fill
                      sizes="136px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-muted">
                Designed for small-format usage where the full wordmark would be too dense. Strong
                silhouette, clean negative space, and consistent geometry for reliable scaling.
              </p>
            </div>

            <div className="h-full">
              <h3 className="text-lg font-bold mb-5">Full Logo</h3>

              <SoloImage
                src={finalFullLogo}
                alt="Final RDG full logo"
                maxWidthClassName="max-w-full"
              />

              <p className="mt-6 text-muted">
                The full lockup emphasizes clarity and spacing so it reads cleanly across business
                cards, printed materials, and signage.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* BUSINESS CARDS */}
        <ProjectSection eyebrow="Print" title="Business Cards">
          <div className="space-y-12">
            <div>
              <h3 className="card-title mb-4">
                Design Exploration
              </h3>
              <SoloImage
                src={cardIdeas}
                alt="Business card design ideas sheet"
                maxWidthClassName="max-w-5xl"
              />
              <p className="text-muted mt-5">
                Tested layout density, hierarchy, and front/back balance while aiming for a card that
                feels premium while staying straightforward and easy to scan.
              </p>
            </div>

            <div>
              <h3 className="card-title mb-4">
                Final Front & Back
              </h3>
              <SoloImage
                src={finalCardFrontBack}
                alt="Final business card front and back"
                maxWidthClassName="max-w-5xl"
              />
              <div className="mt-8 text-left">
                <h4 className="text-lg font-bold">Layout rationale</h4>
                <p className="mt-3 text-muted">
                  Emphasized a clear hierarchy: brand first, then name, then contact details.
                  Spacing and alignment were tuned to keep the card clean in-hand and readable at a
                  quick glance.
                </p>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* SIGNAGE */}
        <ProjectSection eyebrow="Large Format" title="Signage Templates">
          <div>
            <p className="text-muted mb-8">
              Designed signage templates that prioritize distance readability, high contrast, and
              consistent placement of the logo system. The layouts are structured so key callouts
              (“For Sale”, “Open House”, “For Lease”) remain instantly scannable from the street.
            </p>

            <div>
              <ImageGallery images={signs} />
            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="rdg" />

      </main>
    </div>
  );
}
