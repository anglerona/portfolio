import FadeInSection from "@/components/FadeInSection"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import BackButton from "@/components/BackButton"

const FlappyPenguin = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative z-10 text-center ">
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                    <h2 className="py-12 font-semibold text-4xl text-center">Flappy Penguin</h2>
                    <FadeInSection>
                        <div className="px-4 pb-20 w-full lg:w-[1000px] aspect-auto mx-auto">
                            <Image src={"/flappy-logos.png"} alt="Logo Designs" width={1000} height={1000} className="w-full h-auto object-cover rounded-xl" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Game Title Designs</h2>
                            <p className="pt-4"></p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="px-4 pb-20 w-full lg:w-[1000px] aspect-auto mx-auto">
                            <Image src={"/penguin-sprite.png"} alt="penguin sprites" width={1000} height={1000} className="w-full h-auto object-cover rounded-xl" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Penguin Player Sprites</h2>
                            <p className="pt-4"></p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="px-4 pb-20 w-full lg:w-[1100px] aspect-auto mx-auto">
                            <Image src={"/ice.png"} alt="ice assets" width={1000} height={1000} className="w-full h-auto object-cover rounded-xl" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Menu Sign + Ice Designs</h2>
                            <p className="pt-4"></p>
                        </div>
                    </FadeInSection>
                    
                    <FadeInSection>
                        <div className=" px-4 w-full lg:w-[1000px] aspect-auto mx-auto">
                            <Image src={"/flappy-bg.png"} alt="background" width={1000} height={1000} className="w-full h-auto object-cover" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Simple background that can be looped</h2>
                            <p className="pt-4"></p>
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

export default FlappyPenguin;