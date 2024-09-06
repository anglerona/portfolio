import FadeInSection from "@/components/FadeInSection"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const Animusic = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative z-10">
                    <div>
                        idekctf
                    </div>
                    <div className="px-8 aspect-auto">
                        <Image src={"/animusic.png"} alt="animusic" width={300} height={300} className="w-[600px] h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className=" px-8 aspect-auto">
                        <Image src={"/violin.png"} alt="ctf24" width={500} height={500} className="w-96 h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Animusic;