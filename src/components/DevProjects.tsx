"use client";
import Card from "./Card";
import FadeInSection from "./FadeInSection";

const projects = [
     {
        imageHref: "/goose.png",
        title: "Manga-Bot",
        desc: "Discord bot that tracks manga chapter releases and posts automated updates using Python and async web scraping.",
        code: "https://github.com/anglerona/manga-discord-bot",
        hasLiveSite: false,
        link: "https://github.com/anglerona/manga-discord-bot",
        tools: ["Python", "Discord API"]
    },
    {
        imageHref: "/sasa-lele.png",
        title: "SASA-LELE",
        desc: "A full-stack, user-authenticated platform for sales and inventory management with interactive data visualizations for actionable insights.",
        code: "https://github.com/anglerona/sasa-lele",
        hasLiveSite: true,
        link: "https://sasa-lele.vercel.app/",
        tools: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS", "Django", "MongoDB"]
    },
    {
        imageHref: "/portfolio.png",
        title: "Portfolio Website",
        desc: "The site that you are seeing right now! This site contains my developer portfolio, as well as my portfolio for design work.",
        code: "https://github.com/anglerona/portfolio",
        hasLiveSite: true,
        link: "https://anglerona.vercel.app/",
        tools: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS", "Framer Motion"]
    },
    {
        imageHref: "/goose.png",
        title: "BulbasaurBot",
        desc: "Self-driving Arduino robot with a sunlight-seeking system and screen to display plant stats.",
        code: "https://github.com/anglerona/bulbasaurBot",
        hasLiveSite: false,
        link: "github.com/anglerona",
        tools: ["C++", "Arduino"]
    },
]

const DevProjects = () => {
    return (
        <FadeInSection>
            <div id="projects" className=" pb-12">
                <h2 className="py-12 font-semibold text-4xl text-center">Projects</h2>
                <div className="flex justify-center">
                    <div className="px-4 grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                        {projects.map((project, index) => (
                            <Card key={index} imageHref={project.imageHref} title={project.title} description={project.desc} sourceCodeLink={project.code} hasLiveSite={project.hasLiveSite} liveSiteLink={project.link} badges={project.tools} />
                        ))}
                    </div>
                </div>
            </div>
            
        </FadeInSection>
              
    )
}

export default DevProjects