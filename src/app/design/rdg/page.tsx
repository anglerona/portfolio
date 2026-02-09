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

const oldLogo = "/rdg-old-logo.png";

const shortRIdeas = "/rdg-r-ideas.png";
const fullLogoIdeas = "/rdg-full-logo-ideas.png";

const finalShortR = "/rdg-final-r.png";
const finalFullLogo = "/rdg-final-rdg.png";

const cardIdeas = "/rdg-business-card-ideas.png";
const finalCardFrontBack = "/rdg-business-card-final.png";

const signs = [
  "/rdg-for-sale-sign.png",
  "/rdg-open-house-sign.png",
  "/rdg-for-lease-sign.png",
];

export default function RDGProperties() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Branding", "Logo Design", "Signage"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">RDG Properties Inc</h1>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Brand Designer" variant="glass" />
              <Badge label="Logo system" variant="glass" />
              <Badge label="Cards + signage" variant="glass" />
            </div>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Designed a refreshed brand identity for RDG Properties Inc, including a new logo
              system (short mark + full lockup), business card designs, and real estate signage
              templates. The goal was a confident, professional look that stays highly legible
              at both small (cards) and large (signs) sizes.
            </p>
          </div>
        </FadeInSection>

        {/* BEFORE */}
        <ProjectSection eyebrow="Before" title="Legacy Logo">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={oldLogo}
              alt="Old RDG logo"
              maxWidthClassName="max-w-md"
              // openInNewTab
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
              <h3 className="text-lg font-medium">Why a refresh</h3>
              <p className="mt-3 text-white/75">
                The legacy logo didn’t scale cleanly across print and signage. The refresh focused
                on sharper geometry, improved spacing, and a clearer hierarchy so the identity
                remains readable from a distance and consistent across applications.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* EXPLORATION */}
        <ProjectSection eyebrow="Exploration" title="Logo Concepts">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Short “R” Logo Ideas
              </h3>
              <SoloImage
                src={shortRIdeas}
                alt="Short R logo ideas sheet"
                maxWidthClassName="max-w-5xl"
              />
              <p className="text-white/70 text-center max-w-3xl mx-auto mt-5">
                Explored multiple compact “R” concepts for small-format applications, refining the existing house theme to 
                achieve a clearer, more recognizable silhouette.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Full “RDG” Lockup Ideas
              </h3>
              <SoloImage
                src={fullLogoIdeas}
                alt="Full RDG logo ideas sheet"
                maxWidthClassName="max-w-lg"
              />
              <p className="text-white/70 text-center max-w-3xl mx-auto mt-5">
                Iterated on typography, spacing, and letterform consistency so the full lockup feels
                stable and professional in print while pairing naturally with the short mark.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* FINAL LOGOS */}
        <ProjectSection eyebrow="Final" title="Logo System">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-start">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 h-full">
              <h3 className="text-lg font-medium text-center mb-5">Short Logo</h3>

              <div className="flex justify-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border border-white/15 bg-black/10 p-5">
                  <img
                    src={finalShortR}
                    alt="Final shortened R logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="mt-6 text-white/75 text-center">
                Designed for small-format usage where the full wordmark would be too dense. Strong
                silhouette, clean negative space, and consistent geometry for reliable scaling.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 h-full">
              <h3 className="text-lg font-medium text-center mb-5">Full Logo</h3>

              <SoloImage
                src={finalFullLogo}
                alt="Final RDG full logo"
                maxWidthClassName="max-w-full"
              />

              <p className="mt-6 text-white/75 text-center">
                The full lockup emphasizes clarity and spacing so it reads cleanly across business
                cards, printed materials, and signage.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* BUSINESS CARDS */}
        <ProjectSection eyebrow="Print" title="Business Cards">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Design Exploration
              </h3>
              <SoloImage
                src={cardIdeas}
                alt="Business card design ideas sheet"
                maxWidthClassName="max-w-5xl"
              />
              <p className="text-white/70 text-center max-w-3xl mx-auto mt-5">
                Tested layout density, hierarchy, and front/back balance while aiming for a card that
                feels premium while staying straightforward and easy to scan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Final Front & Back
              </h3>
              <SoloImage
                src={finalCardFrontBack}
                alt="Final business card front and back"
                maxWidthClassName="max-w-5xl"
              />
              <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-4xl mx-auto">
                <h4 className="text-lg font-medium">Layout rationale</h4>
                <p className="mt-3 text-white/75">
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
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Designed signage templates that prioritize distance readability, high contrast, and
              consistent placement of the logo system. The layouts are structured so key callouts
              (“For Sale”, “Open House”, “For Lease”) remain instantly scannable from the street.
            </p>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-4">
              <ImageGallery images={signs} />
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
