"use client";
import Contact from "@/components/Contact";
import MasonryGrid from "@/components/MasonryGrid";
import Navbar from "@/components/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const projects = [
  {
    name: "Personal Portfolio",
    description: "Designed the layouts and UI components for a personal portfolio website.",
    imageUrl: "/portfolio.png",
    slug: "portfolio",
    tags: ["UI/UX"],
  },
  {
    name: "idekCTF",
    description: "Created a collection of SVG assets, stickers, and illustrations for a cybersecurity competition.",
    imageUrl: "/Day.png",
    slug: "idekctf",
    tags: ["Illustrations"],
  },
  {
    name: "Vision AI",
    description: "Designed a style guide and landing page for an accessibility startup.",
    imageUrl: "/visionai.png",
    slug: "vision-ai",
    tags: ["UI/UX"],
  },
  {
    name: "Chasepixel",
    description: "Created a collection of SVG character assets for a web design startup.",
    imageUrl: "/chasepixel.png",
    slug: "chasepixel",
    tags: ["Illustrations"],
  },
  {
    name: "Animusic Ensembles",
    description: "Illustrated sticker and keychain art of the club mascot to be sold as merch.",
    imageUrl: "/animusic.png",
    slug: "animusic-ensembles",
    tags: ["Merch", "Illustrations"],
  },
  {
    name: "Shiny Octo Potato",
    description: "Illustrated assets for a Suika Game clone.",
    imageUrl: "/shinyocto.png",
    slug: "shiny-octo-potato",
    tags: ["Illustrations"],
  },
];

const Design = () => {
  return (
    <div className="relative">
      <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
      <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

      <div className="relative z-10">
        <Navbar pageType="design" />
        <div className="h-28"></div>

        {/* Pass all projects to MasonryGrid */}
        <MasonryGrid projects={projects} />

        <Contact />
      </div>
    </div>
  );
};

export default Design;
