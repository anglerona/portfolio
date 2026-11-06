"use client";
import Contact from "@/components/Contact";
import MasonryGrid from "@/components/MasonryGrid";
import Navbar from "@/components/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const projects = [
  {
    name: "Waterloo Quant Club",
    description: "Branding, UI/UX, and social media design for the Waterloo Quant Club, including a full visual rebrand.",
    imageUrl: "/wqc.png",
    slug: "wqc",
    tags: ["Branding", "Social Media", "UI/UX"],
    updatedAt: "2026-11-06",
  },
  {
    name: "Personal Portfolio",
    description: "Designed the layouts and UI components for a personal portfolio website.",
    imageUrl: "/portfolio.webp",
    slug: "portfolio",
    tags: ["UI/UX", "Branding"],
    updatedAt: "2024-10-04",
  },
  {
    name: "idekCTF",
    description: "Created a collection of SVG assets, merch, and illustrations for a cybersecurity competition group.",
    imageUrl: "/2025shirt.webp",
    slug: "idekctf",
    tags: ["Merch", "Digital Assets", "Illustrations", "UI/UX"],
    updatedAt: "2025-07-31",
  },
  {
    name: "Chasepixel",
    description: "Created a collection of SVG character assets for a web design startup.",
    imageUrl: "/chasepixel.webp",
    slug: "chasepixel",
    tags: ["Illustrations", "Digital Assets", "Branding"],
    updatedAt: "2024-04-14",
  },
  {
    name: "Animusic Ensembles",
    description: "Illustrated event posters and merch.",
    imageUrl: "/anicafe-final-poster.webp",
    slug: "animusic-ensembles",
    tags: ["Illustrations", "Social Media", "Merch"],
    updatedAt: "2026-11-06",
  },
  {
    name: "Shiny Octo Potato",
    description: "Illustrated assets for a Suika Game clone.",
    imageUrl: "/shinyocto.webp",
    slug: "shiny-octo-potato",
    tags: ["Digital Assets", "Illustrations"],
    updatedAt: "2024-01-19",
  },
  {
    name: "Flappy Penguin",
    description: "Created assets for a Flappy Bird clone.",
    imageUrl: "/fp.webp",
    slug: "flappy-penguin",
    tags: ["Digital Assets", "Illustrations"],
    updatedAt: "2024-11-08",
  },
  {
    name: "Veria Labs",
    description: "Commissioned to create flower themed assets for landing page and promo materials",
    imageUrl: "/veria-banner-sunset.webp",
    slug: "veria-labs",
    tags: ["Digital Assets", "Illustrations"],
    updatedAt: "2025-01-04",
  },
  {
    name: "OtterSec",
    description: "Commissioned to create a souvenir pin design",
    imageUrl: "/ottersec-final-pin.png",
    slug: "ottersec",
    tags: ["Merch"],
    updatedAt: "2025-08-15",
  },
  {
    name: "RDG Properties",
    description: "Brand identity refresh for RDG Properties Inc spanning logos, business cards, and real estate signage.",
    imageUrl: "/rdg-cover.png",
    slug: "rdg",
    tags: ["Branding"],
    updatedAt: "2026-02-02",
  },
  {
    name: "Broadway Store-All",
    description: "Developed a refreshed brand identity for Broadway Store-All with a custom logo system designed for visibility and scalability.",
    imageUrl: "/bsa.png",
    slug: "broadway-store-all",
    tags: ["Branding"],
    updatedAt: "2025-05-02",
  },
  {
    name: "Catch My Drift",
    description: "UI assets, character sprites, and screen mockups for a beach-themed dating game, from the logo and buttons to cutscenes and gameplay.",
    imageUrl: "/catch-my-drift-cover.webp",
    coverAlt: "Catch My Drift cover: the heart-shaped logo next to a pink-haired character on the beach",
    slug: "catch-my-drift",
    tags: ["UI/UX", "Digital Assets", "Illustrations"],
    updatedAt: "2026-10-28",
  },
  {
    name: "Pokémon Art",
    description: "Created Pokémon fan art and turned them into keychains and stickers sold at anime conventions.",
    imageUrl: "/pokemon-fanart-merch-keychains.webp",
    coverAlt: "Pokémon keychains made from the fan art illustrations",
    slug: "pokemon-fan-art",
    tags: ["Illustrations", "Merch"],
    updatedAt: "2026-08-01",
  },
  {
    name: "Miscellaneous",
    description: "Editorial illustration for UW Imprint, plus social media graphics and event posters for the Computer Science Club, Crafts4Charity, and MathSoc.",
    imageUrl: "/misc-c4c-creators-market-f26.webp",
    coverAlt: "Creators' Market poster illustrated with coffee cups and a pink instant camera",
    slug: "miscellaneous",
    tags: ["Social Media", "Illustrations"],
    // One day earlier than WQC/Animusic so it sorts just after them (still shows "Nov 2026").
    updatedAt: "2026-11-05",
  },
];

const Design = () => {
  return (
    <div className="relative">
      <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
      <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

      <main className="relative z-10">
        <h1 className="sr-only">Angelina&apos;s Design Portfolio</h1>
        <Navbar pageType="design" />
        <div className="h-4"></div>

        {/* Pass all projects to MasonryGrid */}
        <MasonryGrid projects={projects} />

        <Contact showInstagram />
      </main>
    </div>
  );
};

export default Design;
