"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

interface CardProps {
  imageHref: string; // URL for the image
  title: string; // Title of the card
  description: string; // Description of the card
  sourceCodeLink: string; // Link to the source code
  hasLiveSite: boolean; // Boolean to check if live site link should be displayed
  liveSiteLink?: string; // Optional link to the live site
  badges: string[]; // Array of strings for badges
}

const Card = ({
  imageHref,
  title,
  description,
  sourceCodeLink,
  hasLiveSite,
  liveSiteLink,
  badges,
}: CardProps) => {
  return (
    <div className="w-full bg-background max-w-72 border rounded-xl border-purple-300 transition-shadow duration-500 shadow-[0_0_6px_1px_rgba(212,159,255,1)]">
      <div className="w-full h-40 overflow-hidden rounded-xl">
        <Image
          src={imageHref}
          alt={title}
          width={500}
          height={500}
          className="object-fit"
        />
      </div>
      <div className="px-4 space-y-3 text-center py-4">
        <div className="flex justify-between">
          <Link
            href={sourceCodeLink}
            className="text-purple-300 transition-all duration-300 hover:text-purple-200 text-sm font-medium"
          >
            Source Code
          </Link>
          {hasLiveSite && liveSiteLink && (
            <Link
              href={liveSiteLink}
              className="text-purple-300 transition-all duration-300 hover:text-purple-200 text-sm font-medium"
            >
              View Site
            </Link>
          )}
        </div>
        <h2 className="font-medium">{title}</h2>
        <p className="text-sm pb-3">{description}</p>
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {badges.map((badgeLabel, index) => (
            <Badge key={index} label={badgeLabel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
