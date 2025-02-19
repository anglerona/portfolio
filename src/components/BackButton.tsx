import Link from "next/link";
import FadeInSection from "./FadeInSection";
import Left from "@/assets/left.svg"; 

const BackButton = () => {
  return (
    <FadeInSection>
      <Link
        href={"/design"}
        className="flex items-center align-middle px-8 py-4 space-x-2 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105"
      >
        <Left className="h-3 w-3 fill-current" />

        <span>Back To Projects</span>
      </Link>
    </FadeInSection>
  );
};

export default BackButton;
