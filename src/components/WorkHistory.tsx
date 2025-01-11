import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Badge from "@/components/Badge";

export function WorkHistory() {
  const data = [
    {
      title: "Sept - Dec 2024",
      content: (
        <div className="flex flex-col items-start lg:items-center">
          <Image
            src="/Genellipse.svg"
            alt="Genellipse Logo"
            width={400}
            height={400}
            className="rounded-lg object-cover h-auto max-w-[200px] md:max-w-[400px]"
          />
          <p className="text-white text-xl font-semibold mt-4 text-left md:text-center">
            Full Stack Developer Intern
          </p>
          <h4 className="text-neutral-300 text-lg font-medium mt-4 mb-2 text-left md:text-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "React.js", "TypeScript", "TailwindCSS", "RapidAPI", "BitBucket"].map((tech) => (
              <Badge key={tech} label={tech} variant="outlined" />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Jan - Apr 2024",
      content: (
        <div className="flex flex-col items-start lg:items-center">
          <Image
            src="/applied-ai.png"
            alt="Applied AI Logo"
            width={400}
            height={400}
            className="rounded-lg object-cover h-auto max-w-[200px] md:max-w-[400px]"
          />
          <p className="text-white text-xl font-semibold mt-4 text-left md:text-center">
            Junior Full Stack Developer Intern
          </p>
          <h4 className="text-neutral-300 text-lg font-medium mt-4 mb-2 text-left md:text-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Laravel",
              "JavaScript",
              "HTML/CSS",
              "PHP",
              "MySQL",
              "BitBucket",
            ].map((tech) => (
              <Badge key={tech} label={tech} variant="outlined" />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Jan - Apr 2023",
      content: (
        <div className="flex flex-col items-start lg:items-center">
          <Image
            src="/opentext.svg"
            alt="OpenText Logo"
            width={400}
            height={400}
            className="rounded-lg object-cover h-auto max-w-[200px] md:max-w-[400px]"
          />
          <p className="text-white text-xl font-semibold mt-4 text-left md:text-center">
            Software Developer Intern
          </p>
          <h4 className="text-neutral-300 text-lg font-medium mt-4 mb-2 text-left md:text-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "React.js", "TypeScript", "Java Spring", "Selenium", "Postman", "GitLab"].map(
              (tech) => (
                <Badge key={tech} label={tech} variant="outlined" />
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "May - Aug 2022",
      content: (
        <div className="flex flex-col items-start lg:items-center">
          <Image
            src="/opentext.svg"
            alt="OpenText Logo"
            width={400}
            height={400}
            className="rounded-lg object-cover h-auto max-w-[200px] md:max-w-[400px]"
          />
          <p className="text-white text-xl font-semibold mt-4 text-left md:text-center">
            Software Developer Intern
          </p>
          <h4 className="text-neutral-300 text-lg font-medium mt-4 mb-2 text-left md:text-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "React.js", "TypeScript", "Java Spring", "Selenium", "Postman", "GitLab"].map(
              (tech) => (
                <Badge key={tech} label={tech} variant="outlined" />
              )
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="work" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
