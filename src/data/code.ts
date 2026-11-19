export interface Experience {
  company: string;
  role: string;
  dates: string;
}

/** Co-op terms, most recent first. */
export const EXPERIENCE: Experience[] = [
  { company: "Clio", role: "Software Developer Intern", dates: "Jan – Aug 2026" },
  { company: "Qualifacts", role: "Full Stack Developer Intern", dates: "May – Aug 2025" },
  { company: "Genellipse", role: "Full Stack Developer Intern", dates: "Sep – Dec 2024" },
  { company: "Applied AI", role: "Junior Full Stack Developer Intern", dates: "Jan – Apr 2024" },
  { company: "OpenText", role: "Software Developer Intern", dates: "Jan – Apr 2023" },
  { company: "OpenText", role: "Software Developer Intern", dates: "May – Aug 2022" },
];

export interface CodeProject {
  name: string;
  description: string;
  github: string;
  liveSite?: string;
}

/** Coding projects. Cards with links for now; write-up pages can be added later. */
export const CODE_PROJECTS: CodeProject[] = [
  {
    name: "SASA-LELE",
    description:
      "Full-stack, user-authenticated platform for sales and inventory management with interactive data visualizations.",
    github: "https://github.com/anglerona/sasa-lele",
    liveSite: "https://sasa-lele.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description: "The site you're on: a developer and design portfolio.",
    github: "https://github.com/anglerona/portfolio",
    liveSite: "https://anglerona.vercel.app/",
  },
  {
    name: "BulbasaurBot",
    description:
      "Self-driving Arduino robot with a sunlight-seeking system and a screen that displays plant stats.",
    github: "https://github.com/anglerona/bulbasaurBot",
  },
];
