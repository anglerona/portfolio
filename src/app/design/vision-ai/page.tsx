import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection"
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const VisionAI = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative text-center z-10">
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                    <h2 className="py-12 font-semibold text-4xl text-center">Vision AI</h2>
                    
                        
                        {/* <h2 className="font-normal pt-8 text-2xl text-center">Fruit Sprites</h2> */}
                        {/* <p className="pt-4">Used Procreate to illustrate the game sprites based on the original 11 fruits from the Suika Game.</p> */}
                    
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
        </FadeInSection>
    )
}

export default VisionAI;