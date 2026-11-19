"use client";

import FadeInSection from "@/components/FadeInSection";
import { CaseStudyBack, CaseStudyNext, CaseStudyTags } from "@/components/CaseStudy";

import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";
import Image from "next/image";

const initialSketch = "/flappy-initial-sketch.webp";
const playerSpriteSheet = "/flappy-sprite-sheet.png";
const titleScreen = "/flappy-title-screen.webp";
const assetsSheet = "/flappy-assets-sheet.webp";
const titleIdeas = "/flappy-title-ideas.webp";
const mockup = "/flappy-mockup.webp";

export default function FlappyPenguin() {
  return (
    <div className="relative">

      <main id="main" className="mx-auto w-full max-w-[1104px] px-5 pb-24 pt-10 md:px-10 md:pt-12">
        <CaseStudyBack />

        <FadeInSection immediate>
          <div className="pt-10">
            <h1 className="page-title">Flappy Penguin</h1>
            <CaseStudyTags slug="flappy-penguin" />

            <p className="mt-4 text-lg leading-7 text-ink">
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
          <p className="text-muted mb-8">
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
            <div className="text-left h-full">
              <h3 className="text-lg font-bold">Sprite decisions</h3>
              <p className="mt-3 text-muted">
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
          <p className="text-muted mb-8">
            Created a set of ice obstacle variants and a reusable sign asset,
            giving the devs flexible building blocks for the title screen and
            in-game UI.
          </p>

          <SoloImage
            dark
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

            <div className="text-left h-full">
              <h3 className="text-lg font-bold">UI goals</h3>
              <ul className="mt-3 text-muted space-y-2 list-disc list-inside">
                <li>Bold title-first visual hierarchy</li>
                <li>Playful, rounded typography</li>
                <li>Clean layout with space reserved for interaction</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        {/* Title exploration */}
        <ProjectSection eyebrow="Exploration" title="Game Title Ideas">
          <p className="text-muted mb-8">
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
          <p className="text-muted mb-8">
            Final mockup showing the intended feel in context of gameplay.
          </p>

          <SoloImage
            src={mockup}
            alt="Gameplay mockup"
            maxWidthClassName="max-w-6xl"
            priority
            // openInNewTab
          />

          <div className="mt-10 text-left">
            <h3 className="text-lg font-bold">
              What I’d add next
            </h3>
            <p className="mt-3 text-muted">
              This project was intentionally lightweight, as the devs did not require fully detailed mockups. With more time, 
              I would expand the system through additional environment variations (day/night), particle effects for player 
              feedback, and a more complete set of UI states such as pause, game over, and high score screens.
            </p>
          </div>
        </ProjectSection>

        <CaseStudyNext slug="flappy-penguin" />

      </main>
    </div>
  );
}
