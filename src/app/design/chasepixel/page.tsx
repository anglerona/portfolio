import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const Chasepixel = () => {
    return (
        // <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative text-center z-10">
                    <FadeInSection>
                        <div className="w-full pt-12 flex justify-center">
                            <BackButton />
                        </div>
                        <h2 className="py-12 font-semibold text-4xl text-center">Chasepixel</h2>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="w-full px-4 pb-20 lg:w-[1100px] aspect-auto mx-auto">
                            <Image src={"/chasepixel.png"} alt="chasepixel" width={2000} height={2000} className="w-full h-auto rounded-lg object-cover" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Graphic Assets</h2>
                            <p className="pt-4">
                                Used Procreate to create a collection of SVG assets to be used by Chasepixel for their website and social media.
                            </p>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="w-full px-4 lg:w-[1100px] aspect-auto mx-auto">
                            <Image src={"/chasepixel-colors.png"} alt="color-scheme" width={2000} height={2000} className="w-full h-auto rounded-lg object-cover" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Colour Palette</h2>
                            <p className="pt-4">Stuck to a neutral and pastel colour scheme for a cohesive look.</p>
                        </div>
                    </FadeInSection>

                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
        // </FadeInSection>
    )
}

export default Chasepixel;