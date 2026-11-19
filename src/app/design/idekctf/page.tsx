"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";
import ImageGallery from "@/components/Gallery";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";

const shirt2025 = "/2025shirt.webp";
const promoArt2025 = "/idek2025.webp";

const beachPages2025 = [
  "/idek_2025_beach_1.webp",
  "/idek_2025_beach_2.webp",
  "/idek_2025_beach_3.webp",
  "/idek_2025_beach_4.webp",
];

const cafePagesUnused2025 = [
  "/idek_2025_cafe_1.png",
  "/idek_2025_cafe_2.png",
  "/idek_2025_cafe_3.png",
];

const bannersDayNight = ["/Day.webp", "/Night.webp"];

const sponsorChalkboard = "/sponsorship-chalkboard.webp";
const sponsorCircusUnused = "/sponsorship-circus-unused.webp";

const promoPoster2024 = "/idek2024-poster.webp";

const defcon32Banner = "/defcon32-banner.webp";

const retroAssetsSheet = "/idek-retro-assets.webp";

const stickers = [
  { src: "/goose.webp", alt: "Goose sticker" },
  { src: "/egg.webp", alt: "Egg sticker" },
  { src: "/octopus.webp", alt: "Octopus sticker" },
  { src: "/cactus.webp", alt: "Cactus sticker" },
  { src: "/girl.webp", alt: "Anime girl sticker" },
];

export default function IdekCTF() {
  return (
    <div className="relative">

      <main id="main" className="mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">idekCTF</h1>
            <CaseStudyTags slug="idekctf" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Designed visual assets for idekCTF across web, print, and merch.
              Including website page concepts, banners for light/dark mode,
              sponsorship tier posters, sticker designs, and event promo
              illustrations.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="2025" title="Promo & Merch">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-lg font-bold mb-5">
                T-shirt Design
              </h3>
              <SoloImage
                src={shirt2025}
                alt="idekCTF 2025 t-shirt design"
                maxWidthClassName="max-w-full"
                priority
              />
              <p className="mt-6 text-muted">
                Illustrated a 2025 t-shirt design featuring key idek characters,
                composed to read clearly at print size while keeping the
                “randomness” energy of the event.
              </p>
            </div>

            <div className="h-full">
              <h3 className="text-lg font-bold mb-5">
                2025 Promotional Art
              </h3>
              <SoloImage
                src={promoArt2025}
                alt="Promotional art for idekCTF 2025"
                maxWidthClassName="max-w-full"
              />
              <p className="mt-6 text-muted">
                Promotional illustration used across digital touchpoints to set
                the tone for the 2025 competition.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="2025" title="Competition Website Concepts">
          <div>
            <div>
              <h3 className="card-title mb-4">
                Beach Theme (Selected)
              </h3>
              <p className="text-muted mb-6">
                Designed beach-themed pages for the 2025 competition site,
                focusing on a fun, outdoorsy vibe while keeping UI elements
                readable for fast scanning during gameplay.
              </p>

              <div>
                <ImageGallery images={beachPages2025} />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="card-title mb-4">
                Cafe Theme (Unused Exploration)
              </h3>
              <p className="text-muted mb-6">
                Early exploration for the 2025 site before the team aligned on
                the beach direction. These pages helped us validate layout,
                readability, and overall tone.
              </p>

              <div>
                <ImageGallery images={cafePagesUnused2025} />
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          eyebrow="2025"
          title="Light & Dark Mode Website Banners"
        >
          <div className="space-y-6">
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

            <div>
              <p className="text-muted">
                Illustrated two banner variants depicting a capture-the-flag
                scene, one for day (light mode) and one for night (dark mode),
                so the site feels intentional in both themes.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Print" title="Sponsorship Tier Posters">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-lg font-bold mb-5">
                Beach Chalkboard Menu Theme (Final)
              </h3>
              <SoloImage
                src={sponsorChalkboard}
                alt="Chalkboard themed sponsorship tiers poster"
                maxWidthClassName="max-w-full"
              />
              <p className="mt-6 text-muted">
                Designed a chalkboard-themed sponsorship tiers poster to keep
                pricing and benefits readable and structured at a glance.
              </p>
            </div>

            <div className="h-full">
              <h3 className="text-lg font-bold mb-5">
                Circus Theme (Unused)
              </h3>
              <SoloImage
                src={sponsorCircusUnused}
                alt="Unused circus themed sponsorship tiers poster"
                maxWidthClassName="max-w-full"
              />
              <p className="mt-6 text-muted">
                Early exploration while the team was still deciding on the event
                theme.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="2024" title="Promotional Poster">
          <div>
            <SoloImage
              src={promoPoster2024}
              alt="Promotional poster for idekCTF 2024"
              maxWidthClassName="max-w-5xl"
            />
            <div className="mt-8">
              <p className="text-muted">
                Promotional poster created for idekCTF 2024, used for online
                announcements and community sharing.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Events" title="Friendly Maltese Citizens Banner">
          <div>
            <SoloImage
              src={defcon32Banner}
              alt="DEF CON 32 banner representing multiple CTF teams teaming up"
              maxWidthClassName="max-w-5xl"
            />
            <div className="mt-8">
              <p className="text-muted">
                Banner designed for DEF CON 32 to represent multiple
                cybersecurity teams teaming up together.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Assets" title="Retro-Themed Web Assets">
          <div>
            <SoloImage
              src={retroAssetsSheet}
              alt="Retro-themed web assets sheet"
              
              maxWidthClassName="max-w-lg"
            />
            <div className="mt-8">
              <p className="text-muted">
                Created a retro-inspired web asset set used across the
                competition site and promo materials.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Merch" title="Category Stickers">
          <div>
            <p className="text-muted mb-8">
              Designed five category stickers (goose, egg, octopus, cactus,
              anime girl) to represent each challenge category and amplify the
              intentionally random idekCTF vibe.
            </p>

            <div>
              <ImageGallery
                images={[
                  "/goose.webp",
                  "/egg.webp",
                  "/octopus.webp",
                  "/cactus.webp",
                  "/girl.webp",
                ]}
              />
            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="idekctf" />

      </main>
    </div>
  );
}
