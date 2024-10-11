"use client";
import Card from "./Card";
import FadeInSection from "./FadeInSection";

const projects = [
    {
        imageHref: "/portfolio.png",
        title: "Portfolio Website",
        desc: "The site that you are seeing right now! This site contains my fullstack developer portfolio, as well as my portfolio for design and illustration work.",
        code: "https://github.com/anglerona/portfolio",
        hasLiveSite: true,
        link: "https://anglerona.vercel.app/",
        tools: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS", "Framer Motion"]
    },
    {
        imageHref: "/goose.png",
        title: "Link-branch",
        desc: "A Linktree clone that combines multiple separate links into one customizable profile page",
        code: "https://github.com/anglerona/link-branch",
        hasLiveSite: false,
        link: "https://github.com/anglerona",
        tools: ["JavaScript", "ReactJS", "NextJS", "MongoDB", "TailwindCSS", "AWS S3"]
    },
    {
        imageHref: "/fabricate.png",
        title: "Fabricate",
        desc: "A text prompt-based web app that combines five different AI tools: image generation, music, videos, code snippets, and conversations.",
        code: "https://github.com/anglerona/fabricate",
        hasLiveSite: true,
        link: "https://fabricate-chi.vercel.app/",
        tools: ["TypeScript", "ReactJS", "NextJS", "MongoDB", "TailwindCSS", "OpenAI", "Replicate", "Clerk"]
    },
    {
        imageHref: "/goose.png",
        title: "BulbasaurBot",
        desc: " Arduino robot with a sunlight-seeking system to transport a plant and keep it under sunlight.",
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