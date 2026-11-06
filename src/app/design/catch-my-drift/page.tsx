"use client";

import FadeInSection from "@/components/FadeInSection";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import SoloImage from "@/components/SoloImage";
import ImageGallery from "@/components/Gallery";

const titleScreen = "/catch-my-drift-title-screen.webp";

const screens = [
  "/catch-my-drift-how-to-play.webp",
  "/catch-my-drift-cutscene-1.webp",
  "/catch-my-drift-cutscene-2.webp",
  "/catch-my-drift-cutscene-3.webp",
  "/catch-my-drift-gameplay.webp",
  "/catch-my-drift-lose-screen.webp",
];
const screenAlts = [
  "How to Play screen: a blue pop-up over the beach listing the controls: move with W, A, S, D, dodge rejections, catch hints, and shoot your shot",
  "Cutscene: a pink-haired woman smiles on the beach while the caption reads 'Woman 1 looks happy but somehow you can't quite feel the same...'",
  "Cutscene: a caption box over the beach reads 'After going out for 3 months, you two decided it was best to stay just friends. It's been some time and now there's someone new you want to win over...'",
  "Cutscene: the player character stands on a surfboard while a blonde woman sits on the beach, with the caption 'Time to shoot your shot. Win Woman 2 over!'",
  "Gameplay screen: hearts and ammo in the top left, a health bar in the top right, and floating speech bubbles with rejections like 'I have a boyfriend' and pickup lines like 'If you were a fruit, you'd be a fine-apple'",
  "Lose screen: a 'You Lose' pop-up reading 'You just didn't catch her drift... Better luck next time!' with a Retry button, while the player character slumps on the sand",
];

// Character sprites (one image per in-game state)
const womanSprites = [
  "/catch-my-drift-sprite-woman-idle.webp",
  "/catch-my-drift-sprite-woman-hit.webp",
  "/catch-my-drift-sprite-woman-dejected.webp",
  "/catch-my-drift-sprite-woman-defeated.webp",
];
const womanSpriteAlts = [
  "Idle: the pink-haired woman sits on the sand, smiling and pointing at a small heart by her ear",
  "Hit: she laughs with her eyes closed, one hand raised to her forehead",
  "Dejected: she looks alarmed and sprays a can of bug repellent",
  "Defeated: she holds her cheeks with heart-shaped eyes and a big smile",
];
const playerSprites = [
  "/catch-my-drift-sprite-player-default.webp",
  "/catch-my-drift-sprite-player-forward.webp",
  "/catch-my-drift-sprite-player-backwards.webp",
  "/catch-my-drift-sprite-player-hit.webp",
  "/catch-my-drift-sprite-player-catch-before.webp",
  "/catch-my-drift-sprite-player-catch-after.webp",
  "/catch-my-drift-sprite-player-defeat.webp",
];
const playerSpriteAlts = [
  "Default: the blond surfer in sunglasses stands on his red surfboard, grinning and waving",
  "Forward: he leans forward on a tilted surfboard",
  "Backwards: he leans back with the surfboard tipped away",
  "Hit: he flails backwards with a pained look as his surfboard flies out from under him",
  "Catch, before: he crouches on the board with one hand raised, ready to catch",
  "Catch, after: he clasps his hands together in a fist after the catch",
  "Defeat: he slumps on his hands and knees with his broken sunglasses on the sand",
];

const logo = "/catch-my-drift-logo.webp";

const uiAssets = [
  "/catch-my-drift-buttons.webp",
  "/catch-my-drift-health-bars.webp",
  "/catch-my-drift-popups.webp",
  "/catch-my-drift-victory.webp",
];
const uiAssetAlts = [
  "Pink rounded buttons: Start, How to Play, Continue, Close, Retry, and a round stats button",
  "Health bar in eleven states, from full to empty, each ending in a heart",
  "How to Play pop-up window with a blue gradient, pink title, control list, and Close button",
  "Victory pop-up reading 'You caught her drift, shot your shot, and won her over!' with a Continue button",
];

export default function CatchMyDrift() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <main className="relative z-10">
        <ProjectStickyBar badges={["UI/UX", "Digital Assets", "Illustrations"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Catch My Drift</h1>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Designed the UI assets, character sprites, and screen mockups for Catch My Drift, a
              dating game set on the beach. Players dodge rejections, catch
              hints, and shoot their shot to win someone over. The pink and
              blue look keeps the game light and playful, with heart shapes
              carried through the logo, buttons, and health bar.
            </p>
          </div>
        </FadeInSection>

        {/* SCREENS */}
        <ProjectSection eyebrow="Game Screens" title="Screen Mockups">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Title Screen
              </h3>
              <SoloImage
                src={titleScreen}
                alt="Catch My Drift title screen: the heart-shaped logo over a sunny beach, with Start and How to Play buttons"
                priority
              />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Game Flow
              </h3>
              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Mocked up each step of the game, from the instructions and
                story cutscenes to gameplay and the lose screen, so the
                pop-ups, captions, and HUD stay consistent from start to end.
              </p>
              <ImageGallery images={screens} alts={screenAlts} />
            </div>
          </div>
        </ProjectSection>

        {/* SPRITES */}
        <ProjectSection eyebrow="Characters" title="Character Sprites">
          <div className="max-w-5xl mx-auto space-y-12">
            <p className="text-white/70 text-center max-w-3xl mx-auto">
              Illustrated a sprite for every state each character can be in,
              so the game can swap poses as the player moves, gets hit, makes
              a catch, wins, or loses.
            </p>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Love Interest
              </h3>
              <ImageGallery images={womanSprites} alts={womanSpriteAlts} columns={2} />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">Player</h3>
              <ImageGallery images={playerSprites} alts={playerSpriteAlts} />
            </div>
          </div>
        </ProjectSection>

        {/* UI ASSETS */}
        <ProjectSection eyebrow="Game UI" title="Logo & UI Assets">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">Logo</h3>
              <SoloImage
                src={logo}
                alt="Catch My Drift logo: bubbly pink and white lettering over a large heart"
                maxWidthClassName="max-w-3xl"
              />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Buttons, Health Bar &amp; Pop-ups
              </h3>
              <p className="text-white/70 text-center max-w-3xl mx-auto mb-6">
                Built a small set of reusable UI pieces: buttons for every
                action, a heart health bar in eleven states, and pop-up windows
                for instructions and results.
              </p>
              <ImageGallery images={uiAssets} alts={uiAssetAlts} columns={2} />
            </div>
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
