import Contact from "@/components/Contact"
import MasonryGrid from "@/components/MasonryGrid";
import Navbar from "@/components/Navbar"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const projects = [
    {
      name: "Personal Portfolio",
      description: "Designed the layouts and UI components of personal portfolio website.",
      imageUrl: "/portfolio.png",
      slug: "portfolio",
    },
    {
      name: "idekCTF",
      description: "Created a collection of SVG assets, stickers, and illustrations for cybersecurity competition.",
      imageUrl: "/idekctf.png",
      slug: "idekctf",
    },
    {
        name: "Vision AI",
        description: "Designed a style guide and landing page for an accessibility startup.",
        imageUrl: "/visionai.png",
        slug: "vision-ai",
    },
    {
        name: "Chasepixel",
        description: "Created a collection of SVG character assets for a web design startup.",
        imageUrl: "/chasepixel.png",
        slug: "chasepixel",
    },
    {
        name: "Animusic Ensembles",
        description: "Illustrated stickers and a keychain of the club mascot for merch.",
        imageUrl: "/animusic.png",
        slug: "animusic-ensembles",
    },
    {
        name: "Shiny Octo Potato",
        description: "Illustrated assets for a Suika Game clone.",
        imageUrl: "/shinyocto.png",
        slug: "shiny-octo-potato",
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
                <MasonryGrid projects={projects} />
                <Contact />
            </div>
        </div>
    )
}

export default Design