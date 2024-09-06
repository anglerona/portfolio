import Contact from "@/components/Contact"
import MasonryGrid from "@/components/MasonryGrid";
import Navbar from "@/components/Navbar"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const projects = [
    {
      name: "Project One",
      description: "A brief description of project one.",
      imageUrl: "/portfolio.png",
      slug: "project-one",
    },
    {
      name: "Project Two",
      description: "A brief description of project two.",
      imageUrl: "/idekctf.png",
      slug: "project-two",
    },
    {
        name: "Project Two",
        description: "A brief description of project two.",
        imageUrl: "/visionai.png",
        slug: "project-two",
    },
    {
        name: "Project Two",
        description: "A brief description of project two.",
        imageUrl: "/chasepixel.png",
        slug: "project-two",
    },
    {
        name: "Project Two",
        description: "A brief description of project two.",
        imageUrl: "/animusic.png",
        slug: "project-two",
    },
    {
        name: "Project Two",
        description: "A brief description of project two.",
        imageUrl: "/shinyocto.png",
        slug: "project-two",
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