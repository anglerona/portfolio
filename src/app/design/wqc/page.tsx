import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection"
import ImageGallery from "@/components/Gallery";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const images = [
    "/wqc-website-2.png",
    "/wqc-website-3.png",
    "/wqc-website-4.png",
    "/wqc-website-5.png",
    "/wqc-website-6.png",
    "/wqc-website-7.png",
  ];

const socials = [
    "/wqc-2.png",
    "/wqc-3.png",
    "/wqc-4.png",
    "/wqc-5.png",
    "/wqc-6.png",
    "/wqc-discord.png"
]

const WQC = () => {
    return (
            <div className="relative">
                <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
                <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

                <div className="relative text-center z-10">
                    <FadeInSection>
                        <div className="w-full pt-12 flex justify-center">
                            <BackButton />
                        </div>
                        <h2 className="py-12 font-semibold text-4xl text-center">Waterloo Quant Club</h2>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="w-full pb-20 mx-auto lg:w-[900px] px-4 aspect-auto">
                        <Image
                            src={"/wqc-website.png"}
                            alt="Waterloo Quant Club landing page"
                            width={2000}
                            height={2000}
                            className="w-full rounded-lg mb-8 border border-white/20 h-auto object-cover"
                        />
                        <ImageGallery images={images} />
                        
                        <h2 className="font-normal pt-8 text-2xl text-center">
                            Landing Page
                        </h2>
                        <p className="pt-4">
                        Collaborated with another designer to create the Waterloo Quant Club landing page
                        </p>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="w-full pb-20 mx-auto lg:w-[900px] px-4 aspect-auto">
                        <Image
                            src={"/wqc-1.png"}
                            alt="Waterloo Quant Club landing page"
                            width={2000}
                            height={2000}
                            className="w-full rounded-lg lg:w-[500px] mx-auto mb-8 border border-white/20 h-auto object-cover"
                        />
                        <ImageGallery images={socials} />
                        
                        <h2 className="font-normal pt-8 text-2xl text-center">
                            Social Media Graphics
                        </h2>
                        <p className="pt-4">
                        Created graphics to promote the club&apos;s first panel event on Instagram and LinkedIn
                        </p>
                        </div>
                    </FadeInSection>
                    
                    <div className="w-full pt-12 flex justify-center">
                        <BackButton />
                    </div>
                </div>
                <div className="h-28"></div>
            </div>
    )
}

export default WQC;