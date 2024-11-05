import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkHistory() {
  const data = [
    {
      title: "Sept - Dec 2024",
      content: (
        <div>
          <div className="">
            <Image
              src="/Genellipse.svg"
              alt="startup template"
              width={10}
              height={10}
              className="rounded-lg object-fit h-20 md:h-36 w-full "
            />
          </div>
          <p className="text-neutral-200 text-xl font-semibold mb-8">
            Fullstack Developeer Intern
          </p>
        </div>
      ),
    },
    {
        title: "Jan - Apr 2024",
        content: (
          <div className="">
            <div className="">
              <Image
                src="/applied-ai.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-fit h-20 md:h-56 w-auto "
              />
            </div>
            <p className="text-neutral-200 text-xl font-semibold mb-8 mt-6">
              Junior Fullstack Developeer Intern
            </p>
          </div>
        ),
      },
      {
        title: "Jan - Apr 2023",
        content: (
          <div className="">
            <div className="">
              <Image
                src="/opentext.svg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-fit h-20 md:h-64 w-full "
              />
            </div>
            <p className="text-neutral-200 text-xl font-semibold mb-8">
              Software Developer Intern
            </p>
          </div>
        ),
      },
      {
        title: "May - Aug 2022",
        content: (
          <div className="">
            <div className="">
              <Image
                src="/opentext.svg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-fit h-20 md:h-64 w-full "
              />
            </div>
            <p className="text-neutral-200 text-xl font-semibold mb-8">
              Software Developer Intern
            </p>
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
