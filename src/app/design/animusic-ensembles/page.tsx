import FadeInSection from "@/components/FadeInSection"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import BackButton from "@/components/BackButton"

const Animusic = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative z-10 text-center ">
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                    <h2 className="py-12 font-semibold text-4xl text-center">Animusic Ensembles</h2>
                    <FadeInSection>
                        <div className="px-4 pb-20 w-full lg:w-[700px] aspect-auto mx-auto">
                            <Image src={"/animusic.png"} alt="animusic" width={1000} height={1000} className="w-full h-auto object-cover rounded-xl" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Sticker Sheet</h2>
                            <p className="pt-4">Illustrated a sticker sheet of the club mascot cosplaying as various Genshin Impact characters using Procreate.</p>
                        </div>
                    </FadeInSection>
                    
                    <FadeInSection>
                        <div className=" px-4 w-full lg:w-[500px] aspect-auto mx-auto">
                            <Image src={"/keychain.png"} alt="violin-annie" width={500} height={500} className="w-full h-auto object-cover" />
                            <h2 className="font-normal pt-8 text-2xl text-center">Keychain</h2>
                            <p className="pt-4">Illustrated a keychain design of the club mascot playing the violin using Procreate.</p>
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

export default Animusic;