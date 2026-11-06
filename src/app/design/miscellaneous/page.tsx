"use client";

import FadeInSection from "@/components/FadeInSection";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import ImageGallery from "@/components/Gallery";

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
  "/misc-c4c-creators-market-f26.webp",
  "/misc-c4c-creators-market-s26-thank-you.webp",
];
const c4cAlts = [
  "Creators' Market poster illustrated with coffee cups and a pink instant camera on a sunlit table, Nov 2 to 3, 11 to 6 PM, PSE/E7 2nd Floor",
  "Creators' Market S26 thank-you post with potted flowers: we've donated $720 to Breakfast Club of Canada",
];

// MathSoc
const mathsoc = [
  "/misc-mathsoc-casino-night.webp",
  "/misc-mathsoc-locker-sign-out.webp",
  "/misc-mathsoc-first-year-affairs-director.webp",
];
const mathsocAlts = [
  "MathSoc x Poker Studies Club Casino Night poster with a neon marquee sign, playing cards, dice and chips, Oct 30th, 6 to 8 PM in DWE 3522",
  "MathSoc Locker Sign-Out post styled as desktop windows over pink lockers: Fall 2026 locker registration is now open for MathSoc fee-paying students",
  "MathSoc recruitment post for a First Year Affairs Director, with a contact email and an illustration of a student holding a laptop",
];

export default function Miscellaneous() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <main className="relative z-10">
        <ProjectStickyBar badges={["Social Media", "Illustrations"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Miscellaneous</h1>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              A collection of editorial illustration, social media graphics and
              event posters for student publications and organizations at the
              University of Waterloo: UW Imprint, the Computer Science Club,
              Crafts4Charity, and MathSoc.
            </p>
          </div>
        </FadeInSection>

        {/* UW Imprint */}
        <ProjectSection eyebrow="Editorial" title="UW Imprint">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Illustrations and page layout for &ldquo;Matcha here, matcha
              there: Matcha boom explained,&rdquo; a three-page feature written
              by Annora Jo for UW Imprint, the University of Waterloo&apos;s
              student newspaper.
              The spread pairs flat matcha-themed illustrations with textured
              powder-style statistics to break up the article and highlight
              its key numbers.
            </p>

            <ImageGallery images={imprint} alts={imprintAlts} />
          </div>
        </ProjectSection>

        {/* CSC */}
        <ProjectSection eyebrow="Social Media" title="Computer Science Club">
          <div className="max-w-4xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Event posters for the University of Waterloo Computer Science
              Club, including an industry networking event with Atlassian in a
              retro pixel-art style and an illustrated summer bonfire picnic.
            </p>

            <ImageGallery images={csc} alts={cscAlts} columns={2} />
          </div>
        </ProjectSection>

        {/* Crafts4Charity */}
        <ProjectSection eyebrow="Social Media" title="Crafts4Charity">
          <div className="max-w-4xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Illustrated posts for Crafts4Charity&apos;s Creators&apos;
              Market: the Fall 2026 event announcement and a Spring 2026
              thank-you post celebrating $720 donated to Breakfast Club of
              Canada.
            </p>

            <ImageGallery images={c4c} alts={c4cAlts} columns={2} />
          </div>
        </ProjectSection>

        {/* MathSoc */}
        <ProjectSection eyebrow="Social Media" title="MathSoc">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Graphics for the University of Waterloo Mathematics Society,
              including a Casino Night co-hosted with the Poker Studies Club,
              locker registration, and executive recruitment.
            </p>

            <ImageGallery images={mathsoc} alts={mathsocAlts} />
          </div>
        </ProjectSection>

        <FadeInSection>
          <div className="flex justify-center pb-20">
            <BackButton />
          </div>
        </FadeInSection>

        <div className="h-28" />
      </main>
    </div>
  );
}
