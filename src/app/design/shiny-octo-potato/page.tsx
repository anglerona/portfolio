import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const ShinyOcto = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative text-center z-10">
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                    <h2 className="py-12 font-semibold text-4xl text-center">Shiny Octo Potato</h2>
                    <div className="w-full px-4 lg:w-[600px] aspect-auto mx-auto">
                        <Image src={"/shinyocto.png"} alt="ctf23" width={500} height={500} className="w-full h-auto object-cover" />
                        <h2 className="font-normal pt-8 text-2xl text-center">Fruit Sprites</h2>
                        <p className="pt-4">Used Procreate to illustrate 11 game sprites based on the Suika Game fruits.</p>
                    </div>
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
        </FadeInSection>
    )
}

export default ShinyOcto;