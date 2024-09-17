import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection"
import ImageGallery from "@/components/Gallery";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const images = [
    "/visionai.png",
    "/vision2.png",
    "/vision3.png",
    "/vision4.png",
    "/vision6.png",
    "/vision7.png",
  ];

const VisionAI = () => {
    return (
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative text-center z-10">
                    <FadeInSection>
                        <div className="w-full pt-12 flex justify-center">
                            <BackButton />
                        </div>
                        <h2 className="py-12 font-semibold text-4xl text-center">Vision AI</h2>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="w-full pb-20 mx-auto lg:w-[900px] px-4 aspect-auto">
                        <Image
                            src={"/visionai.png"}
                            alt="Vision AI landing page"
                            width={2000}
                            height={2000}
                            className="w-full rounded-lg mb-8 border border-white/20 h-auto object-cover"
                        />
                        <ImageGallery images={images} />
                        
                        <h2 className="font-normal pt-8 text-2xl text-center">
                            Landing Page
                        </h2>
                        <p className="pt-4">
                            Used Figma to design a prototype for a landing page of a WCAG accessibility web app, ensuring seamless user experiences and visual coherence.
                        </p>
                        </div>
                    </FadeInSection>

                    
                        <div className="w-full mx-auto lg:w-[900px] px-4 aspect-auto">
                        <FadeInSection>
                        <Image
                            src={"/Colours.png"}
                            alt="colour scheme"
                            width={2000}
                            height={2000}
                            className="w-full rounded-lg border border-white/20 mb-8 h-auto object-cover"
                        />
                        </FadeInSection>
                        <FadeInSection>
                        <Image
                            src={"/Typography.png"}
                            alt="drink spilled"
                            width={2000}
                            height={2000}
                            className="w-full mb-8 rounded-lg border border-white/20 h-auto object-cover"
                        />
                        </FadeInSection>
                        <FadeInSection>
                        <Image
                            src={"/ui.png"}
                            alt="ui components"
                            width={2000}
                            height={2000}
                            className="w-full rounded-lg border border-white/20 h-auto object-cover"
                        />
                        <h2 className="font-normal pt-8 text-2xl text-center">
                            Style Guide
                        </h2>
                        <p className="pt-4">
                            Created a style guide that includes colour scheme, typography, and UI components that adheres to an accessibility-focused design language
                        </p>
                        </FadeInSection>
                        </div>
                    
                    
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
    )
}

export default VisionAI;