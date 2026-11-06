import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon Fan Art",
  description:
    "Pokémon fan art illustrations turned into keychains and stickers sold at anime conventions.",
};

export default function PokemonFanArtLayout({ children }: { children: React.ReactNode }) {
  return children;
}
