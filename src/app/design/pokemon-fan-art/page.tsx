"use client";

import FadeInSection from "@/components/FadeInSection";
import BackButton from "@/components/BackButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import ProjectStickyBar from "@/components/ProjectStickyBar";
import ProjectSection from "@/components/ProjectSection";
import ImageGallery from "@/components/Gallery";

// [file slug, Pokémon name, short description]
const art: [string, string, string][] = [
  ["sylveon", "Sylveon", "smiling with its ribbon feelers curled"],
  ["shinysylveon", "Shiny Sylveon", "in its pale blue shiny colours"],
  ["umbreon", "Umbreon", "with glowing blue rings"],
  ["gengar", "Gengar", "with a mischievous grin"],
  ["mimikyu", "Mimikyu", "in its Pikachu disguise"],
  ["jirachi", "Jirachi", "with its wish tags"],
  ["rowlet", "Rowlet", "with a round body and leafy bow tie"],
  ["huh", "Pikachu", "making a confused face with a 'Huh?' speech bubble"],
  ["magikarp", "Magikarp", "wearing a tiny crown"],
  ["psyduck", "Psyduck", "floating in a swim ring"],
  ["wooper", "Wooper", "with a big open-mouthed smile"],
  ["spheal", "Spheal", "lying on its belly"],
  ["snom", "Snom", "curled up and sleepy"],
  ["togepi", "Togepi", "peeking out of its eggshell"],
  ["oddish", "Oddish", "with its leaves fanned out"],
  ["bounsweet", "Bounsweet", "with its leafy crown"],
  ["steenee", "Steenee", "twirling with its leaves like a skirt"],
  ["drifloon", "Drifloon", "carrying a Ditto by its strings"],
  ["litwick", "Litwick", "with its blue candle flame"],
  ["pumpkaboo", "Pumpkaboo", "with a glowing pumpkin body"],
  ["sinistea", "Sinistea", "inside a decorated teacup"],
  ["sinistcha", "Sinistcha", "in a matcha bowl with a bamboo whisk"],
  ["rotom", "Rotom", "with crackling electric wings"],
];
const artImages = art.map(([slug]) => `/pokemon-fanart-${slug}.webp`);
const artAlts = art.map(([, name, desc]) => `${name} fan art, ${desc}`);

const merch = [
  "/pokemon-fanart-merch-keychains.webp",
  "/pokemon-fanart-merch-stickers.webp",
  "/pokemon-fanart-merch-charms.webp",
];
const merchAlts = [
  "Photo of a display of Pokémon keychains made from the illustrations, including Rowlet, Spheal, Snom, Jirachi, Magikarp, Gengar, Umbreon, Sylveon and Mimikyu",
  "Photo of die-cut Pokémon stickers made from the illustrations, laid out on a table",
  "Photo of three charms on cords, featuring Bounsweet, Oddish and other illustrations",
];

export default function PokemonFanArt() {
  return (
    <div className="relative">
      <StarsBackground className="fixed inset-0 z-[-1]" />
      <ShootingStars className="fixed inset-0 z-[-2]" />

      <main className="relative z-10">
        <ProjectStickyBar badges={["Illustrations", "Merch"]} />

        {/* Header */}
        <FadeInSection immediate>
          <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
            <h1 className="text-4xl font-semibold">Pokémon Fan Art</h1>

            <p className="mt-6 text-white/75 max-w-3xl mx-auto">
              Created a series of Pokémon fan art illustrations, then turned
              them into keychains and stickers that I sold at anime
              conventions.
            </p>
          </div>
        </FadeInSection>

        {/* ILLUSTRATIONS */}
        <ProjectSection eyebrow="Illustration" title="Fan Art Collection">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Drew each Pokémon in a soft, rounded style, keeping the shapes
              simple so they still read clearly at keychain and sticker size.
            </p>

            <ImageGallery images={artImages} alts={artAlts} />
          </div>
        </ProjectSection>

        {/* MERCH */}
        <ProjectSection eyebrow="Merch" title="Keychains & Stickers">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
              Turned the illustrations into keychains, charms, and stickers,
              and sold them at anime conventions.
            </p>

            <ImageGallery images={merch} alts={merchAlts} />
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
