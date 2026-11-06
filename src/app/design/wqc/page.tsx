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
const assetsSheet = ["/wqc-assets-sheet.webp"];

// Winter 2026
const winterStyleGuide = ["/wqc-styleguide.webp"];
const winterInstagram = [
  "/wqc-winter-ig-1.webp",
  "/wqc-winter-ig-2.webp",
  "/wqc-winter-ig-3.webp",
  "/wqc-winter-ig-4.webp",
  "/wqc-winter-ig-5.webp",
  "/wqc-winter-ig-6.webp",
];
const winterPoster = [
  "/wqc-winter-poster-1.webp",
  "/wqc-winter-poster-2.webp",
  "/wqc-winter-poster-3.webp",
];

// Waterloo Trading Competition 2026
const wtcTokens = ["/wtc-2026-tokens.webp"];
const wtcWelcomeScreen = ["/wtc-2026-welcome-screen.webp"];
const wtcBanner = ["/wtc-2026-banner.webp"];

// Fall 2025
const fallWebsite = [
  "/wqc-website-1.webp",
  "/wqc-website-2.webp",
  "/wqc-website-3.webp",
  "/wqc-website-4.webp",
  "/wqc-website-5.webp",
  "/wqc-website-6.webp",
];
const fallPosters = [
  "/wqc-fall-poster-1.webp",
  "/wqc-fall-poster-2.webp",
  "/wqc-fall-poster-3.webp",
  "/wqc-fall-poster-4.webp",
];
const fallStories = ["/wqc-fall-story-1.webp", "/wqc-fall-story-2.webp"];
const fallInstagram = [
  "/wqc-fall-ig-1.webp",
  "/wqc-fall-ig-2.webp",
  "/wqc-fall-ig-3.webp",
  "/wqc-fall-ig-4.webp",
  "/wqc-fall-ig-5.webp",
];

const fall26Instagram = [
  "/wqc_f26_1.png",
  "/wqc_f26_2.webp",
  "/wqc_f26_3.webp",
  "/wqc_f26_4.png",
  "/wqc_f26_5.webp", // The Inspection Paradox
  "/wqc_f26_6.webp", // Auctions Deep Dive
];

const fall26Assets = ["/wqc_f26_assets.webp"];

const fall26Sponsors = ["/wqc_sponsors_old.webp", "/wqc_sponsors_new.png"];

// Fall 2026 merch
const fall26Stickers = "/wqc_f26_stickers.webp";
const fall26CardBackDrafts = "/wqc_f26_card_backs.webp";
const fall26Cards = [
  "/wqc_f26_card_back.webp",
  "/wqc_f26_card_s1.webp",
  "/wqc_f26_card_joker_colour.webp",
  "/wqc_f26_card_sj.webp",
  "/wqc_f26_card_sq.webp",
  "/wqc_f26_card_sk.webp",
  "/wqc_f26_card_hj.webp",
  "/wqc_f26_card_hq.webp",
  "/wqc_f26_card_hk.webp",
];
const fall26CardAlts = [
  "Final card back: the club logo at the centre of glowing concentric rings",
  "Ace of spades",
  "Joker card featuring a goose in a jester hat",
  "Jack of spades, custom line-art illustration",
  "Queen of spades, custom line-art illustration",
  "King of spades, custom line-art illustration",
  "Jack of hearts, custom line-art illustration",
  "Queen of hearts, custom line-art illustration",
  "King of hearts, custom line-art illustration",
];

export default function WaterlooQuantClub() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <main className="relative z-10">
        <ProjectStickyBar badges={["Branding", "Social Media", "UI/UX"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Waterloo Quant Club</h1>
            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Worked on visual design across branding, UI/UX, and social media
              for the Waterloo Quant Club. This project spans two rebrands: a
              full visual rebrand in Winter 2026 that moved away from the
              club’s legacy Fall 2025 aesthetic, and a second rebrand in Fall
              2026 that took the identity in a more playful, game-inspired
              direction.
            </p>
          </div>
        </FadeInSection>

        {/* FALL 2026 */}
        <ProjectSection
          eyebrow="Fall 2026"
          title="Evolving the Visual Identity"
        >
          <div className="space-y-16">
            {/* Description */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/75">
                Expanded the club&apos;s visual identity with a more playful,
                game-inspired direction. The new aesthetic uses a primarily
                greyscale palette paired with dice, playing cards, and other
                game elements to create a distinct look while keeping the
                overall brand clean and cohesive.
              </p>
            </div>

            {/* Visual Assets */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Visual Assets
              </h3>

              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Created a reusable set of minimal, game-inspired assets to
                establish a consistent visual language across social media and
                the website.
              </p>

              <SoloImage
                src={fall26Assets[0]}
                alt="Fall 2026 Waterloo Quant Club visual assets featuring dice and playing cards"
              />
            </div>

            {/* Instagram */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Instagram Graphics
              </h3>

              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Applied the new visual direction across social media while
                adapting the system to different events and content.
              </p>

              <ImageGallery images={fall26Instagram} />
            </div>

            {/* Sponsors Page */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Sponsors Page Redesign
              </h3>

              <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
                Redesigned the sponsors page with a cleaner, more spacious
                layout and clearer visual hierarchy. Replaced the previous boxed
                layout with a more open design and introduced playing card suits
                to represent each sponsorship tier, bringing the page in line
                with the club&apos;s new game-inspired aesthetic.
              </p>

              <ImageGallery images={fall26Sponsors} columns={2} />
            </div>
          </div>
        </ProjectSection>

        {/* FALL 2026 MERCH */}
        <ProjectSection eyebrow="Fall 2026 Merch" title="Stickers & Playing Cards">
          <div className="space-y-16">
            {/* Stickers */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Sticker Designs
              </h3>

              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Designed a set of seven die-cut stickers, from logo stickers to
                illustrated characters surrounded by dice, playing cards and
                market charts, carrying the game-inspired theme into merch.
              </p>

              <SoloImage
                src={fall26Stickers}
                alt="Seven Waterloo Quant Club sticker designs: a wordmark banner, a round logo, and illustrated characters with dice, playing cards and a stock chart"
              />
            </div>

            {/* Card back drafts */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Card Back Drafts
              </h3>

              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Explored eight card back directions built around the club logo,
                from concentric rings and planet horizons to crystal dice and
                angular shards. The concentric ring design (1A) was chosen for
                the final deck.
              </p>

              <SoloImage
                src={fall26CardBackDrafts}
                alt="Eight card back drafts arranged in a grid, each with the club logo at the centre of a dark blue background"
              />
            </div>

            {/* Playing cards */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Playing Card Deck
              </h3>

              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Designed a full custom deck with illustrated court cards and a
                goose joker. A selection of cards from the deck is shown below.
              </p>

              <ImageGallery images={fall26Cards} alts={fall26CardAlts} />
            </div>
          </div>
        </ProjectSection>

        {/* BRANDING */}
        <ProjectSection eyebrow="Foundation" title="Brand Identity">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-white/15 bg-black/10 p-6">
              <h3 className="font-medium text-lg mb-4">Logo System</h3>
              <p className="text-white/75 mb-6">
                Designed a flexible logo system that works both as a standalone
                mark and alongside the club name, allowing consistent usage
                across web, print, and social.
              </p>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 p-4">
                    <Image
                      src={logos[0]}
                      alt="Waterloo Quant Club logo mark"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
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

            <div className="border border-white/15 bg-black/10 p-6">
              <h3 className="font-medium text-lg mb-4">Rebrand Direction</h3>
              <p className="text-white/75 mb-6">
                The Winter 2026 rebrand aimed to move away from a busy,
                inconsistent visual language toward a more minimal, clean, and
                modern identity that better reflects quantitative finance.
              </p>

              <div className="space-y-4">
                <h4 className="font-medium text-base text-center">
                  Assets Sheet
                </h4>
                <div>
                  <Image
                    src={assetsSheet[0]}
                    alt="Waterloo Quant Club assets sheet"
                    width={2000}
                    height={1400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
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

        {/* WATERLOO TRADING COMPETITION 2026 */}
        <ProjectSection
          eyebrow="2026 Competition"
          title="Waterloo Trading Competition"
        >
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                WQC Tokens
              </h3>
              <SoloImage
                src={wtcTokens[0]}
                alt="WQC tokens used for the 2026 Waterloo Trading Competition"
              />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-center">
                Welcome Screen & Banner
              </h3>

              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-center">
                <div className="border border-white/15 bg-black/10 p-4">
                  <div className="flex justify-center md:h-[360px]">
                    <Image
                      src={wtcWelcomeScreen[0]}
                      alt="Welcome screen page design"
                      width={1600}
                      height={1200}
                      className="h-auto w-full object-contain md:h-full md:w-auto"
                    />
                  </div>
                </div>

                <div className="border border-white/15 bg-black/10 p-4">
                  <div className="flex justify-center md:h-[360px]">
                    <Image
                      src={wtcBanner[0]}
                      alt="Banner design"
                      width={1600}
                      height={1200}
                      className="h-auto w-full object-contain md:h-full md:w-auto"
                    />
                  </div>
                </div>
              </div>
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
      </main>
    </div>
  );
}
