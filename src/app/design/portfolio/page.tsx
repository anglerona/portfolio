import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection"
import ImageGallery from "@/components/Gallery";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const images = [
    "/home.png",
    "/dev.png",
    "/design.png",
    "/designProject1.png",
    "/designProject2.png",
    "/gallery.png"    
];

const Portfolio = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative text-center z-10">
                    <FadeInSection>
                        <div className="w-full pt-12 flex justify-center">
                            <BackButton />
                        </div>
                        <h2 className="py-12 font-semibold text-4xl text-center">Personal Portfolio Website</h2>
                    </FadeInSection>
                    
                    
                        
                    <FadeInSection>
                        <div className="w-full mx-auto pb-20 lg:w-[1000px] px-4 aspect-auto">
                        <Image
                            src={"/home.png"}
                            alt="home page"
                            width={2000}
                            height={2000}
                            className="w-full rounded-xl mb-8 h-auto border border-white/20 object-cover"
                        />
                        <ImageGallery images={images} />
                        <h2 className="font-normal pt-8 text-2xl text-center">
                            Mockups
                        </h2>
                        <p className="pt-4">
                            Created web page prototypes in Figma
                        </p>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="w-full mx-auto lg:w-[1000px] px-4 aspect-auto">
                        <Image
                            src={"/style.png"}
                            alt="portfolio style guide"
                            width={2000}
                            height={2000}
                            className="w-full rounded-xl h-auto border border-white/20 object-cover"
                        />
                        <h2 className="font-normal pt-8 text-2xl text-center">
                            Style Guide
                        </h2>
                        <p className="pt-4">
                            Created personal portfolio style guide in Figma
                        </p>
                        </div>
                    </FadeInSection>
                    
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
        </FadeInSection>
    )
}

export default Portfolio;