import Contact from "@/components/Contact"
import MasonryGrid from "@/components/MasonryGrid";
import Navbar from "@/components/Navbar"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const projects = [
    {
      name: "Portfolio",
      description: "A brief description of project one.",
      imageUrl: "/portfolio.png",
      slug: "portfolio",
    },
    {
      name: "idekCTF",
      description: "A brief description of project two.",
      imageUrl: "/idekctf.png",
      slug: "idekctf",
    },
    {
        name: "Vision AI",
        description: "A brief description of project two.",
        imageUrl: "/visionai.png",
        slug: "vision-ai",
    },
    {
        name: "Chasepixel",
        description: "A brief description of project two.",
        imageUrl: "/chasepixel.png",
        slug: "chasepixel",
    },
    {
        name: "Animusic Ensembles",
        description: "A brief description of project two.",
        imageUrl: "/animusic.png",
        slug: "animusic-ensembles",
    },
    {
        name: "Shiny Octo Potato",
        description: "A brief description of project two.",
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