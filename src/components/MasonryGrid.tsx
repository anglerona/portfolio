import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  tags: string[];
}

interface MasonryGridProps {
  projects: Project[];
}

export default function MasonryGrid({ projects }: MasonryGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Function to handle filtering with smooth transition
  const handleFilterChange = (tag: string) => {
    setSelectedTag(tag); // Update the button state immediately
    setIsTransitioning(true); // Start fade-out transition

    // Wait for the fade-out animation to finish before updating the content
    setTimeout(() => {
      // Update the filtered projects after fade-out
      const updatedProjects =
        tag === "All"
          ? projects
          : projects.filter((project) => project.tags.includes(tag));
      setFilteredProjects(updatedProjects);

      // Start fade-in after updating the grid content
      setTimeout(() => {
        setIsTransitioning(false); // Trigger fade-in transition
      }, 100); // Short delay for visual sync
    }, 300); // Match the duration of the fade-out transition
  };

  return (
    <FadeInSection>
      <div id="projects" className="pb-12">
        <h2 className="py-12 font-semibold text-4xl text-center">Projects</h2>

        {/* Filter Buttons */}
        <div className="mb-8 px-4">
          {/* Horizontally scrollable container on small screens */}
          <div className="flex md:justify-center p-2 overflow-x-auto space-x-4 scrollbar-hide">
            {["All", "UI/UX", "Illustrations", "Merch"].map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterChange(tag)}
                className={`px-6 py-2 text-sm sm:text-base border rounded-full transition-all duration-200 whitespace-nowrap ${
                  selectedTag === tag
                    ? "text-purple-300 border-purple-300 shadow-[0_0_5px_1.5px_rgba(212,159,255,0.5)]"
                    : "text-white border-white opacity-70 hover:opacity-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid with smooth transition */}
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/design/${project.slug}`}
                passHref
                className="relative group block overflow-hidden rounded-xl border-white/20 border mb-4"
                style={{ breakInside: "avoid" }}
              >
                {/* Image */}
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={2000}
                  height={2000}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Effect */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-white text-sm mt-2 px-4 text-center">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
