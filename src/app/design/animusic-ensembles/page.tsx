"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";
import Image from "next/image";
import ImageGallery from "@/components/Gallery";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";
import LoopingVideo from "@/components/LoopingVideo";

const aniExpoPoster = "/animusic-aniexpo-photoshoot.webp";
const aniExpoVideo = "/animusic-aniexpo-performances.mp4";

const keychain = "/animusic-keychain-violin.webp";

const stickerGenshin = "/animusic-stickers-genshin.webp";
const stickerUmaMusume = "/animusic-stickers-uma-musume.webp";
const stickerSpyFamily = "/animusic-stickers-spy-x-family.webp";

const aniCafeSketches = [
  "/anicafe-sketch-1.webp",
  "/anicafe-sketch-2.webp",
  "/anicafe-sketch-3.webp",
];
const aniCafeFinalSketch = "/anicafe-final-sketch.webp";
const aniCafeFinalPoster = "/anicafe-final-poster.webp";

const concertSketches = [
  "/concert-sketch-1.webp",
  "/concert-sketch-2.webp",
  "/concert-sketch-3.webp",
];
const concertFinalSketch = "/concert-final-sketch.webp";
const concertFinalPoster = "/concert-final-poster.webp";

export default function AnimusicEnsembles() {
  return (
    <div className="relative">

      <main id="main" className="case-study mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Animusic Ensembles</h1>
            <CaseStudyTags slug="animusic-ensembles" />

            <p className="mt-4 text-lg leading-7 text-ink">
              Illustrated promotional poster artwork, social media posts and
              merch designs for Animusic Ensembles, including two poster
              workflows from sketch exploration to final delivery, plus sticker
              sheets and a keychain design.
            </p>
          </div>
        </FadeInSection>

        <ProjectSection eyebrow="Social Media" title="AniExpo 2026">
          <div className="space-y-8">
            <p className="text-muted">
              Social media posts promoting Animusic Ensembles&apos; events at
              AniExpo: an illustrated poster for the cosplay photoshoot and a
              video post announcing the club&apos;s performances.
            </p>

            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div>
                <h3 className="card-title mb-4">
                  Cosplay Photoshoot Poster
                </h3>
                <SoloImage
                  src={aniExpoPoster}
                  alt="AniExpo Cosplay Photoshoot poster: two anime characters, one with pink hair and one with long teal twin-tails, making a heart shape with their arms. SLC Marketplace, November 7th, 2026, 7:00 to 9:00 PM."
                  maxWidthClassName="max-w-full"
                />
              </div>

              <div>
                <h3 className="card-title mb-4">
                  Performances Video Post
                </h3>
                <LoopingVideo
                  className="w-full h-auto"
                  src={aniExpoVideo}
                  width={2608}
                  height={3260}
                  label="AniExpo performances announcement video post (looping, no audio)"
                />
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          eyebrow="Poster Workflow"
          title="End of Term Concert Poster"
        >
          <div className="space-y-12">
            <div>
              <h3 className="card-title mb-4">
                Sketch Exploration
              </h3>
              <div>
                <ImageGallery images={concertSketches} />
              </div>
              <p className="text-muted mt-5">
                Explored multiple compositions to find the right balance of
                energy and readability, then refined the strongest direction
                into a clean final layout.
              </p>
            </div>

            {/* Final sketch */}
            <div>
              <h3 className="card-title mb-4">
                Final Sketch
              </h3>
              <SoloImage
                src={concertFinalSketch}
                alt="Final sketch for End of Term Concert poster"
                heightClassName="h-[360px] sm:h-[420px] md:h-[480px]"
                maxWidthClassName="max-w-5xl"
              />
            </div>

            {/* Final poster */}
            <div>
              <h3 className="card-title mb-4">
                Final Poster
              </h3>
              <SoloImage
                src={concertFinalPoster}
                alt="Final End of Term Concert poster"
                heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
                maxWidthClassName="max-w-5xl"
                priority
              />
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Poster Workflow" title="AniCafe Poster">
          <div className="space-y-12">
            {/* Sketches */}
            <div>
              <h3 className="card-title mb-4">
                Sketch Exploration
              </h3>
              <div>
                <ImageGallery images={aniCafeSketches} />
              </div>
              <p className="text-muted mt-5">
               Explored multiple concepts that blended the café and Pokémon themes, with the marketing team ultimately 
               selecting the middle concept for its distinct look compared to previous café event posters.
              </p>
            </div>

            {/* Final sketch */}
            <div>
              <h3 className="card-title mb-4">
                Final Sketch
              </h3>
              <SoloImage
                src={aniCafeFinalSketch}
                alt="Final sketch for AniCafe poster"
                heightClassName="h-[360px] sm:h-[420px] md:h-[480px]"
                maxWidthClassName="max-w-5xl"
              />
            </div>

            {/* Final poster */}
            <div>
              <h3 className="card-title mb-4">
                Final Poster
              </h3>
              <SoloImage
                src={aniCafeFinalPoster}
                alt="Final AniCafe poster"
                heightClassName="h-[420px] sm:h-[520px] md:h-[600px]"
                maxWidthClassName="max-w-5xl"
                priority
              />
            </div>
          </div>
        </ProjectSection>

        <ProjectSection eyebrow="Merch" title="Stickers & Keychain">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-lg font-bold mb-5">Keychain</h3>

              <SoloImage
                src={keychain}
                alt="Keychain design of the club mascot playing violin"
                heightClassName="h-[380px] sm:h-[440px] md:h-[500px]"
                maxWidthClassName="max-w-full"
              />

              <p className="mt-6 text-muted">
                Keychain illustration featuring the club mascot playing violin,
                designed to stay readable and clean at small print sizes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5">
                Sticker Sheets
              </h3>

              <div className="grid gap-4">
                {[
                  { src: stickerGenshin, alt: "Genshin Impact sticker sheet" },
                  { src: stickerUmaMusume, alt: "Uma Musume sticker sheet" },
                  { src: stickerSpyFamily, alt: "Spy x Family sticker sheet" },
                ].map(({ src, alt }) => (
                  <div key={src} className="flex items-center justify-center">
                    <Image
                      src={src}
                      alt={alt}
                      width={1600}
                      height={1200}
                      sizes="(min-width: 1200px) 480px, 100vw"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-6 text-muted">
                Sticker sheets designed for event sales, with each set illustrated to match the concert set list.
              </p>
            </div>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="animusic-ensembles" />

      </main>
    </div>
  );
}
