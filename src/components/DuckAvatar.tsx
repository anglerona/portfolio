import Image from "next/image";
import duck from "../../public/duck.webp";

/** Angelina's blue duck illustration, cropped to a circle. */
export default function DuckAvatar({ className = "" }: { className?: string }) {
  return (
    <Image
      src={duck}
      alt="Illustration of a blue duck by Angelina"
      sizes="(min-width: 1200px) 400px, (min-width: 768px) 300px, 220px"
      priority
      className={`aspect-square shrink-0 rounded-full border-0 ${className}`}
    />
  );
}
