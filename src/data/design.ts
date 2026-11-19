export const DESIGN_TAGS = [
  "Branding",
  "Illustration",
  "Game assets",
  "UI/UX",
  "Merch",
  "Social media",
] as const;

export type DesignTag = (typeof DESIGN_TAGS)[number];

export interface DesignProject {
  name: string;
  description: string;
  imageUrl: string;
  /** Cover size in px, so the grid can reserve the right shape before it loads. */
  imageWidth: number;
  imageHeight: number;
  coverAlt?: string;
  slug: string;
  tags: DesignTag[];
  /** yyyy-mm-dd; the grid and "Next project" links go newest first. */
  updatedAt: string;
}

const PROJECTS: DesignProject[] = [
  {
    name: "Waterloo Quant Club",
    description: "Branding, UI/UX, and social media design for the Waterloo Quant Club, including a full visual rebrand.",
    imageUrl: "/wqc.png",
    imageWidth: 4800,
    imageHeight: 2436,
    slug: "wqc",
    tags: ["Branding", "UI/UX", "Social media", "Merch"],
    updatedAt: "2026-11-06",
  },
  {
    name: "Personal Portfolio",
    description: "Designed the layouts and UI components for a personal portfolio website.",
    imageUrl: "/portfolio.webp",
    imageWidth: 1923,
    imageHeight: 1099,
    slug: "portfolio",
    tags: ["UI/UX", "Branding"],
    updatedAt: "2024-10-04",
  },
  {
    name: "idekCTF",
    description: "Created a collection of SVG assets, merch, and illustrations for a cybersecurity competition group.",
    imageUrl: "/2025shirt.webp",
    imageWidth: 2043,
    imageHeight: 1685,
    slug: "idekctf",
    tags: ["Merch", "Illustration", "UI/UX"],
    updatedAt: "2025-07-31",
  },
  {
    name: "Chasepixel",
    description: "Created a collection of SVG character assets for a web design startup.",
    imageUrl: "/chasepixel.webp",
    imageWidth: 2560,
    imageHeight: 1589,
    slug: "chasepixel",
    tags: ["Illustration", "Branding"],
    updatedAt: "2024-04-14",
  },
  {
    name: "Animusic Ensembles",
    description: "Illustrated event posters and merch.",
    imageUrl: "/anicafe-final-poster.webp",
    imageWidth: 2560,
    imageHeight: 1810,
    slug: "animusic-ensembles",
    tags: ["Illustration", "Social media", "Merch"],
    updatedAt: "2026-11-06",
  },
  {
    name: "Shiny Octo Potato",
    description: "Illustrated assets for a Suika Game clone.",
    imageUrl: "/shinyocto.webp",
    imageWidth: 2560,
    imageHeight: 2560,
    slug: "shiny-octo-potato",
    tags: ["Illustration", "Game assets"],
    updatedAt: "2024-01-19",
  },
  {
    name: "Flappy Penguin",
    description: "Created assets for a Flappy Bird clone.",
    imageUrl: "/fp.webp",
    imageWidth: 2560,
    imageHeight: 1676,
    slug: "flappy-penguin",
    tags: ["Illustration", "Game assets"],
    updatedAt: "2024-11-08",
  },
  {
    name: "Veria Labs",
    description: "Commissioned to create flower themed assets for landing page and promo materials",
    imageUrl: "/veria-banner-sunset.webp",
    imageWidth: 2560,
    imageHeight: 1440,
    slug: "veria-labs",
    tags: ["Illustration"],
    updatedAt: "2025-01-04",
  },
  {
    name: "OtterSec",
    description: "Commissioned to create a souvenir pin design",
    imageUrl: "/ottersec-final-pin.png",
    imageWidth: 2619,
    imageHeight: 2681,
    slug: "ottersec",
    tags: ["Illustration", "Merch"],
    updatedAt: "2025-08-15",
  },
  {
    name: "RDG Properties",
    description: "Brand identity refresh for RDG Properties Inc spanning logos, business cards, and real estate signage.",
    imageUrl: "/rdg-cover.png",
    imageWidth: 3000,
    imageHeight: 1715,
    slug: "rdg",
    tags: ["Branding"],
    updatedAt: "2026-02-02",
  },
  {
    name: "Broadway Store-All",
    description: "Developed a refreshed brand identity for Broadway Store-All with a custom logo system designed for visibility and scalability.",
    imageUrl: "/bsa.png",
    imageWidth: 3648,
    imageHeight: 2556,
    slug: "broadway-store-all",
    tags: ["Branding"],
    updatedAt: "2025-05-02",
  },
  {
    name: "Catch My Drift",
    description: "UI assets, character sprites, and screen mockups for a beach-themed dating game, from the logo and buttons to cutscenes and gameplay.",
    imageUrl: "/catch-my-drift-cover.webp",
    imageWidth: 630,
    imageHeight: 500,
    coverAlt: "Catch My Drift cover: the heart-shaped logo next to a pink-haired character on the beach",
    slug: "catch-my-drift",
    tags: ["Illustration", "Game assets"],
    updatedAt: "2026-10-28",
  },
  {
    name: "Pokémon Art",
    description: "Created Pokémon fan art and turned them into keychains and stickers sold at anime conventions.",
    imageUrl: "/pokemon-fanart-merch-keychains.webp",
    imageWidth: 1967,
    imageHeight: 2000,
    coverAlt: "Pokémon keychains made from the fan art illustrations",
    slug: "pokemon-fan-art",
    tags: ["Illustration", "Merch"],
    updatedAt: "2026-08-01",
  },
  {
    name: "Miscellaneous",
    description: "Editorial illustration for UW Imprint, plus social media graphics and event posters for the Computer Science Club, Crafts4Charity, and MathSoc.",
    imageUrl: "/misc-c4c-creators-market-f26.webp",
    imageWidth: 2000,
    imageHeight: 2500,
    coverAlt: "Creators' Market poster illustrated with coffee cups and a pink instant camera",
    slug: "miscellaneous",
    tags: ["Social media", "Illustration"],
    // One day earlier than WQC/Animusic so it sorts just after them.
    updatedAt: "2026-11-05",
  },
];

/** All design projects, newest first (ties broken by name). */
export const DESIGN_PROJECTS: DesignProject[] = [...PROJECTS].sort(
  (a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.name.localeCompare(b.name),
);

export function getDesignProject(slug: string) {
  return DESIGN_PROJECTS.find((p) => p.slug === slug);
}

/** The project after this one in the grid order (wraps around to the first). */
export function getNextDesignProject(slug: string) {
  const i = DESIGN_PROJECTS.findIndex((p) => p.slug === slug);
  return DESIGN_PROJECTS[(i + 1) % DESIGN_PROJECTS.length];
}

/**
 * "Nov 2026" from a yyyy-mm-dd date. Uses a fixed locale and time zone so the
 * server and browser render identical text (avoids hydration errors).
 */
export function formatUpdated(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", timeZone: "UTC" });
}
