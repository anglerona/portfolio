import FadeInSection from "@/components/FadeInSection"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const Idek = () => {
    return (
        <FadeInSection>
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative z-10">
                    <h2 className="py-12 font-semibold text-4xl text-center">idekCTF</h2>
                    
                    <div className="w-full px-8 aspect-auto">
                        <Image src={"/ctf2024.svg"} alt="ctf24" width={500} height={500} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <div className="w-full px-8 aspect-auto">
                        <Image src={"/ctf2023.svg"} alt="ctf22" width={500} height={500} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
        </FadeInSection>
    )
}

export default Idek;