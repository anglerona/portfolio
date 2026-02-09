"use client";

import FadeInSection from "@/components/FadeInSection";
import ImageGallery from "@/components/Gallery";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const shirt2025 = "/2025shirt.png";
const promoArt2025 = "/idek2025.png";

const beachPages2025 = [
  "/idek_2025_beach_1.png",
  "/idek_2025_beach_2.png",
  "/idek_2025_beach_3.png",
  "/idek_2025_beach_4.png",
];

const cafePagesUnused2025 = [
  "/idek_2025_cafe_1.png",
  "/idek_2025_cafe_2.png",
  "/idek_2025_cafe_3.png",
];

const bannersDayNight = ["/Day.png", "/Night.png"];

const sponsorChalkboard = "/sponsorship-chalkboard.png";
const sponsorCircusUnused = "/sponsorship-circus-unused.png";

const promoPoster2024 = "/idek2024-poster.png";

const defcon32Banner = "/defcon32-banner.png";

const retroAssetsSheet = "/idek-retro-assets.png";

const stickers = [
  { src: "/goose.jpg", alt: "Goose sticker" },
  { src: "/egg.jpg", alt: "Egg sticker" },
  { src: "/octopus.jpg", alt: "Octopus sticker" },
  { src: "/cactus.jpg", alt: "Cactus sticker" },
  { src: "/girl.jpg", alt: "Anime girl sticker" },
];

export default function IdekCTF() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Merch", "Digital Assets", "Illustrations", "UI/UX"]} />

        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">idekCTF</h1>

            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Visual Designer" variant="glass" />
              <Badge label="Event branding" variant="glass" />
              <Badge label="Web + merch" variant="glass" />
            </div> */}

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Designed visual assets for idekCTF across web, print, and merch.
              Including website page concepts, banners for light/dark mode,
              sponsorship tier posters, sticker designs, and event promo
              illustrations.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="2025" title="Promo & Merch">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="text-lg font-medium text-center mb-5">
                T-shirt Design
              </h3>
              <SoloImage
                src={shirt2025}
                alt="idekCTF 2025 t-shirt design"
                maxWidthClassName="max-w-full"
                priority
              />
              <p className="mt-6 text-white/75 text-center">
                Illustrated a 2025 t-shirt design featuring key idek characters,
                composed to read clearly at print size while keeping the
                “randomness” energy of the event.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 h-full">
              <h3 className="text-lg font-medium text-center mb-5">
                2025 Promotional Art
              </h3>
              <SoloImage
                src={promoArt2025}
                alt="Promotional art for idekCTF 2025"
                maxWidthClassName="max-w-full"
              />
              <p className="mt-6 text-white/75 text-center">
                Promotional illustration used across digital touchpoints to set
                the tone for the 2025 competition.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="2025" title="Competition Website Concepts">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="text-xl font-medium text-center mb-4">
                Beach Theme (Selected)
              </h3>
              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Designed beach-themed pages for the 2025 competition site,
                focusing on a fun, outdoorsy vibe while keeping UI elements
                readable for fast scanning during gameplay.
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
                <ImageGallery images={beachPages2025} />
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="text-xl font-medium text-center mb-4">
                Cafe Theme (Unused Exploration)
              </h3>
              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Early exploration for the 2025 site before the team aligned on
                the beach direction. These pages helped us validate layout,
                readability, and overall tone.
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
                <ImageGallery images={cafePagesUnused2025} />
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          eyebrow="2025"
          title="Light & Dark Mode Website Banners"
        >
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid gap-6 md:grid-cols-2 items-start">
              <SoloImage
                src={bannersDayNight[0]}
                alt="Day mode website banner"
                maxWidthClassName="max-w-full"
              />
              <SoloImage
                src={bannersDayNight[1]}
                alt="Night mode website banner"
                maxWidthClassName="max-w-full"
              />
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 text-center">
              <p className="text-white/75 max-w-3xl mx-auto">
                Illustrated two banner variants depicting a capture-the-flag
                scene, one for day (light mode) and one for night (dark mode),
                so the site feels intentional in both themes.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Print" title="Sponsorship Tier Posters">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6">
              <h3 className="text-lg font-medium text-center mb-5">
                Beach Chalkboard Menu Theme (Final)
              </h3>
              <SoloImage
                src={sponsorChalkboard}
                alt="Chalkboard themed sponsorship tiers poster"
                maxWidthClassName="max-w-full"
              />
              <p className="mt-6 text-white/75 text-center">
                Designed a chalkboard-themed sponsorship tiers poster to keep
                pricing and benefits readable and structured at a glance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 h-full">
              <h3 className="text-lg font-medium text-center mb-5">
                Circus Theme (Unused)
              </h3>
              <SoloImage
                src={sponsorCircusUnused}
                alt="Unused circus themed sponsorship tiers poster"
                maxWidthClassName="max-w-full"
              />
              <p className="mt-6 text-white/75 text-center">
                Early exploration while the team was still deciding on the event
                theme.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="2024" title="Promotional Poster">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={promoPoster2024}
              alt="Promotional poster for idekCTF 2024"
              maxWidthClassName="max-w-5xl"
            />
            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-center">
              <p className="text-white/75 max-w-3xl mx-auto">
                Promotional poster created for idekCTF 2024, used for online
                announcements and community sharing.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Events" title="Friendly Maltese Citizens Banner">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={defcon32Banner}
              alt="DEF CON 32 banner representing multiple CTF teams teaming up"
              maxWidthClassName="max-w-5xl"
            />
            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-center">
              <p className="text-white/75 max-w-3xl mx-auto">
                Banner designed for DEF CON 32 to represent multiple
                cybersecurity teams teaming up together.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Assets" title="Retro-Themed Web Assets">
          <div className="max-w-5xl mx-auto">
            <SoloImage
              src={retroAssetsSheet}
              alt="Retro-themed web assets sheet"
              
              maxWidthClassName="max-w-lg"
            />
            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6 text-center">
              <p className="text-white/75 max-w-3xl mx-auto">
                Created a retro-inspired web asset set used across the
                competition site and promo materials.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Merch" title="Category Stickers">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Designed five category stickers (goose, egg, octopus, cactus,
              anime girl) to represent each challenge category and amplify the
              intentionally random idekCTF vibe.
            </p>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-4">
              <ImageGallery
                images={[
                  "/goose.jpg",
                  "/egg.jpg",
                  "/octopus.jpg",
                  "/cactus.jpg",
                  "/girl.jpg",
                ]}
              />
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
