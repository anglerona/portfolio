"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import ImageGallery from "@/components/Gallery";

// UW Imprint: November 2026 issue (cover + tarot feature, pages 15-17)
const imprintNov = [
  "/misc-imprint-nov2026-cover.webp",
  "/misc-imprint-tarot-p15.webp",
  "/misc-imprint-tarot-p16.webp",
  "/misc-imprint-tarot-p17.webp",
];
const imprintNovAlts = [
  "Cover of the November 2026 issue of Imprint: a goose marionette hanging from strings against a purple, glowing background, with headlines along the bottom",
  "Page 15: 'What's in the cards? Your November tarot reading' by Angela Li, with an illustrated, upside-down Eight of Pentacles card",
  "Page 16: tarot readings for social life and work, with illustrated King of Cups and Wheel of Fortune cards",
  "Page 17: the academics reading with an illustrated Hierophant card and a fanned spread of tarot cards",
];

// UW Imprint: "Matcha here, matcha there" feature, pages 10-12
const imprint = [
  "/misc-imprint-matcha-p10.webp",
  "/misc-imprint-matcha-p11.webp",
  "/misc-imprint-matcha-p12.webp",
];
const imprintAlts = [
  "Page 10 of the Imprint feature \"Matcha here, matcha there: Matcha boom explained\": the headline, introduction and a 'What is matcha?' section wrapped around an illustration of a bamboo whisk and a bowl of matcha",
  "Page 11: illustrated matcha-powder statistics (+21.6% matcha mentions on U.S. menus, +42% green tea export growth in Japan) and the section 'The rise of matcha and its shortage' with a measuring scoop of matcha",
  "Page 12: 'Matcha on and off campus', with a pull quote from UW Food Services and a large illustration of an iced matcha latte with heart latte art beside a bamboo whisk",
];

export default function UWImprint() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">UW Imprint</h1>
            <CaseStudyTags slug="uw-imprint" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Editorial illustration and page design for UW Imprint, the
              University of Waterloo&apos;s student newspaper.
            </p>
          </div>
        </FadeInSection>

        {/* November 2026 issue */}
        <ProjectSection eyebrow="Cover & Feature" title="November 2026 Issue">
          <div>
            <p className="text-muted mb-8">
              Illustrated the cover of the November 2026 issue, and created the
              illustrations and page layout for &ldquo;What&apos;s in the cards?
              Your November tarot reading,&rdquo; a three-page feature written
              by Angela Li.
            </p>
            <ImageGallery images={imprintNov} alts={imprintNovAlts} columns={2} />
          </div>
        </ProjectSection>

        {/* Matcha feature */}
        <ProjectSection eyebrow="Feature" title="Matcha Feature">
          <div>
            <p className="text-muted mb-8">
              Illustrations and page layout for &ldquo;Matcha here, matcha
              there: Matcha boom explained,&rdquo; a three-page feature
              written by Annora Jo. The spread pairs flat matcha-themed
              illustrations with textured powder-style statistics to break
              up the article and highlight its key numbers.
            </p>
            <ImageGallery images={imprint} alts={imprintAlts} />
          </div>
        </ProjectSection>

        <CaseStudyNext slug="uw-imprint" />

      </main>
    </div>
  );
}
