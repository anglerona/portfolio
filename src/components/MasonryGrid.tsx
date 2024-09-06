import Link from "next/link";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  slug: string; // Used for the URL path (e.g., /design/project-name)
}

interface MasonryGridProps {
  projects: Project[];
}

export default function MasonryGrid({ projects }: MasonryGridProps) {
  return (
    <FadeInSection>
      <div id="projects" className="pb-12">
        <h2 className="py-12 font-semibold text-4xl text-center">Projects</h2>
        {/* Masonry Grid */}
        <div
          className="
            columns-1
            md:columns-2
            lg:columns-3
            gap-4
            px-4
          "
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/design/${project.slug}`}
              passHref
              className="relative group block overflow-hidden rounded-lg  border-white/20 border mb-4"
              style={{ breakInside: "avoid" }}
            >
              {/* Image */}
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Effect */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </FadeInSection>
  );
}
