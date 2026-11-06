import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flappy Penguin",
  description: "Sprites, title screen and game assets for Flappy Penguin.",
};

export default function FlappyPenguinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
