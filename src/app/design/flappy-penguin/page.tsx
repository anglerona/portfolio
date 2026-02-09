"use client";

import FadeInSection from "@/components/FadeInSection";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";
import Image from "next/image";

const initialSketch = "/flappy-initial-sketch.png";
const playerSpriteSheet = "/flappy-sprite-sheet.png";
const titleScreen = "/flappy-title-screen.png";
const assetsSheet = "/flappy-assets-sheet.png";
const titleIdeas = "/flappy-title-ideas.png";
const mockup = "/flappy-mockup.png";

export default function FlappyPenguin() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <div className="relative z-10">
        <ProjectStickyBar badges={["Digital Assets", "Illustrations"]} />

        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Flappy Penguin</h1>

            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge label="Role: Asset Designer" variant="glass" />
              <Badge label="2D Sprites" variant="glass" />
              <Badge label="UI Screens" variant="glass" />
            </div> */}

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Designed the visual assets for a Flappy Bird–style game,
              translating an initial concept sketch into a cohesive
              assets/sprite set and UI screens. The goal was clarity at small
              sizes, strong silhouettes, and a style that feels fun during
              gameplay.
            </p>
          </div>
        </FadeInSection>

        {/* Starting point */}
        <ProjectSection eyebrow="Starting point" title="Initial Sketch">
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
            The dev team provided an initial sketch to define the core vibe and
            gameplay elements. I used it as the baseline for shape language,
            scale, and the overall visual tone.
          </p>

          <SoloImage
            src={initialSketch}
            alt="Initial sketch provided by developers"
            maxWidthClassName="max-w-lg"
            // openInNewTab
          />
        </ProjectSection>

        {/* Player sprite sheet */}
        <ProjectSection eyebrow="Character" title="Player Sprite Sheet">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 text-left h-full">
              <h3 className="text-lg font-medium">Sprite decisions</h3>
              <p className="mt-3 text-white/75">
                Explored two penguin designs with subtle frame-to-frame changes
                for the flapping animation, prioritizing readable state changes
                and visual clarity during fast gameplay.
              </p>
            </div>

            <div>
              <SoloImage
                src={playerSpriteSheet}
                alt="Player sprite sheet"
                maxWidthClassName="max-w-full"
                // openInNewTab
              />
            </div>
          </div>
        </ProjectSection>

        {/* Environment + assets */}
        <ProjectSection eyebrow="World building" title="Game Assets Sheet">
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
            Created a set of ice obstacle variants and a reusable sign asset,
            giving the devs flexible building blocks for the title screen and
            in-game UI.
          </p>

          <SoloImage
            src={assetsSheet}
            alt="Game assets sheet"
            maxWidthClassName="max-w-5xl"
            // openInNewTab
          />
        </ProjectSection>

        {/* UI screens */}
        <ProjectSection eyebrow="UI" title="Title Screen">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <SoloImage
                src={titleScreen}
                alt="Title screen"
                heightClassName="max-h-[260px] sm:max-h-[300px]"
                // openInNewTab
              />
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/10 p-6 text-left h-full">
              <h3 className="text-lg font-medium">UI goals</h3>
              <ul className="mt-3 text-white/75 space-y-2 list-disc list-inside">
                <li>Bold title-first visual hierarchy</li>
                <li>Playful, rounded typography</li>
                <li>Clean layout with space reserved for interaction</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        {/* Title exploration */}
        <ProjectSection eyebrow="Exploration" title="Game Title Ideas">
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
            Explored title designs that work at small sizes while still looking punchy on the title screen.
          </p>

          <SoloImage
            src={titleIdeas}
            alt="Game title ideas"
            maxWidthClassName="max-w-5xl"
            // openInNewTab
          />
        </ProjectSection>

        {/* Mockup */}
        <ProjectSection eyebrow="Delivery" title="Mockup & Handoff">
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
            Final mockup showing the intended feel in context of gameplay.
          </p>

          <SoloImage
            src={mockup}
            alt="Gameplay mockup"
            maxWidthClassName="max-w-6xl"
            priority
            // openInNewTab
          />

          <div className="mt-10 rounded-2xl border border-white/15 bg-black/10 p-6 text-left max-w-5xl mx-auto">
            <h3 className="text-lg font-medium">
              What I’d add next
            </h3>
            <p className="mt-3 text-white/75">
              This project was intentionally lightweight, as the devs did not require fully detailed mockups. With more time, 
              I would expand the system through additional environment variations (day/night), particle effects for player 
              feedback, and a more complete set of UI states such as pause, game over, and high score screens.
            </p>
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
