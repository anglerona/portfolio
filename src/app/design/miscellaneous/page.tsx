"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import ImageGallery from "@/components/Gallery";

// Computer Science Club
const csc = [
  "/misc-csc-atlassian-networking.webp",
  "/misc-csc-bonfire-picnic.webp",
];
const cscAlts = [
  "Atlassian x UWCSC Networking Event poster in a pixel-art desktop window style: free food, swag and chats with the Atlassian team, Wednesday September 16, 10 AM to 2 PM at the DC Atrium",
  "Bonfire Picnic poster: a blue dog in glasses roasting a marshmallow by a campfire under a starry night sky, July 9th, 6 to 9 PM at Columbia Lake Fire Pit 1",
];

// Crafts4Charity
const c4c = [
  "/misc-c4c-felt-crafts-workshop.webp",
  "/misc-c4c-creators-market-f26.webp",
  "/misc-c4c-creators-market-s26-thank-you.webp",
];
const c4cAlts = [
  "Felt Crafts Workshop poster with two illustrated felt keychains, a cat and a bear: Nov 19, 6 to 8 PM in PHYS 150, all proceeds go to First Book Canada, C4C x UW Sewciety",
  "Creators' Market poster illustrated with coffee cups and a pink instant camera on a sunlit table, Nov 2 to 3, 11 to 6 PM, PSE/E7 2nd Floor",
  "Creators' Market S26 thank-you post with potted flowers: we've donated $720 to Breakfast Club of Canada",
];

// MathSoc
const mathsoc = [
  "/misc-mathsoc-party-with-profs.webp",
  "/misc-mathsoc-casino-night.webp",
  "/misc-mathsoc-locker-sign-out.webp",
  "/misc-mathsoc-first-year-affairs-director.webp",
];
const mathsocAlts = [
  "MathSoc Party with Profs poster with a hand-drawn pink cocktail and sparkles: Wednesday Nov 25th, 1 to 3 PM at The Grad House, complimentary food and drinks",
  "MathSoc x Poker Studies Club Casino Night poster with a neon marquee sign, playing cards, dice and chips, Oct 30th, 6 to 8 PM in DWE 3522",
  "MathSoc Locker Sign-Out post styled as desktop windows over pink lockers: Fall 2026 locker registration is now open for MathSoc fee-paying students",
  "MathSoc recruitment post for a First Year Affairs Director, with a contact email and an illustration of a student holding a laptop",
];

export default function Miscellaneous() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        {/* Header */}
        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Miscellaneous</h1>
            <CaseStudyTags slug="miscellaneous" />

            <p className="mt-4 text-lg leading-7 text-ink">
              A collection of social media graphics and event posters for
              student organizations at the University of Waterloo:
              Crafts4Charity, MathSoc, and the Computer Science Club.
            </p>
          </div>
        </FadeInSection>

        {/* Crafts4Charity */}
        <ProjectSection eyebrow="Social Media" title="Crafts4Charity">
          <div>
            <p className="text-muted mb-8">
              Illustrated event posters and posts for Crafts4Charity, following
              each term&apos;s style guide and theme: a felt crafts workshop
              with UW Sewciety raising money for First Book Canada, the Fall
              2026 Creators&apos; Market, and a Spring 2026 thank-you post
              celebrating $720 donated to Breakfast Club of Canada.
            </p>

            <ImageGallery images={c4c} alts={c4cAlts} />
          </div>
        </ProjectSection>

        {/* MathSoc */}
        <ProjectSection eyebrow="Social Media" title="MathSoc">
          <div>
            <p className="text-muted mb-8">
              Graphics for the University of Waterloo Mathematics Society,
              including Party with Profs, a Casino Night co-hosted with the
              Poker Studies Club, locker registration, and executive
              recruitment.
            </p>

            <ImageGallery images={mathsoc} alts={mathsocAlts} columns={2} />
          </div>
        </ProjectSection>

        {/* CSC */}
        <ProjectSection eyebrow="Social Media" title="Computer Science Club">
          <div>
            <p className="text-muted mb-8">
              Event posters for the University of Waterloo Computer Science
              Club, including an industry networking event with Atlassian in a
              retro pixel-art style and an illustrated summer bonfire picnic.
            </p>

            <ImageGallery images={csc} alts={cscAlts} columns={2} />
          </div>
        </ProjectSection>

        <CaseStudyNext slug="miscellaneous" />

      </main>
    </div>
  );
}
