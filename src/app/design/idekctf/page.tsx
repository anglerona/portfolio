import BackButton from "@/components/BackButton";
import FadeInSection from "@/components/FadeInSection";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const Idek = () => {
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
                <h2 className="py-12 font-semibold text-4xl text-center">idekCTF</h2>
            </FadeInSection>

            <FadeInSection>
            <div className="w-full pb-20 mx-auto lg:w-[1100px] px-4 aspect-auto">
              <Image
                src={"/Day.png"}
                alt="daytime banner"
                width={10000}
                height={500}
                className="w-full rounded-lg h-auto object-cover pb-12"
              />
              <Image
                src={"/Night.png"}
                alt="nighttime banner"
                width={10000}
                height={500}
                className="w-full rounded-lg h-auto object-cover"
              />
              <h2 className="font-normal pt-8 text-2xl text-center">
                Commissioned Art
              </h2>
              <p className="pt-4">
                Used Procreate illustrate website banner in both dark and light mode.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className="w-full pb-20 mx-auto lg:w-[650px] px-4 aspect-auto">
              <Image
                src={"/drinkspill.png"}
                alt="drink spilled"
                width={500}
                height={500}
                className="w-full rounded-lg h-auto object-cover"
              />
              <h2 className="font-normal pt-8 text-2xl text-center">
                Commissioned Art
              </h2>
              <p className="pt-4">
                Used Procreate to create artwork for competition.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="w-full pb-20 mx-auto lg:w-[800px] px-4 aspect-auto">
              <Image
                src={"/idek2024.svg"}
                alt="ctf24"
                width={500}
                height={500}
                className="w-full rounded-lg h-auto object-cover"
              />
              <h2 className="font-normal pt-8 text-2xl text-center">
                Web Assets
              </h2>
              <p className="pt-4">
                Used Figma to illustrate a collection of retro-themed SVG
                characters to use on the competition website.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            {/* Stickers Section */}
            <div className="w-full pb-20 mx-auto lg:w-[900px] px-4 aspect-auto">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <Image
                  src={"/goose.jpg"}
                  alt="goose"
                  width={500}
                  height={500}
                  className="w-full rounded-xl h-auto object-cover"
                />
                <Image
                  src={"/egg.jpg"}
                  alt="egg"
                  width={500}
                  height={500}
                  className="w-full rounded-xl h-auto object-cover"
                />
                <Image
                  src={"/octopus.jpg"}
                  alt="octopus"
                  width={500}
                  height={500}
                  className="w-full rounded-xl h-auto object-cover"
                />
                <Image
                  src={"/cactus.jpg"}
                  alt="cactus"
                  width={500}
                  height={500}
                  className="w-full rounded-xl h-auto object-cover"
                />
                <Image
                  src={"/girl.jpg"}
                  alt="girl"
                  width={500}
                  height={500}
                  className="w-full rounded-xl h-auto object-cover"
                />
              </div>

              <h2 className="font-normal pt-8 text-2xl text-center">
                Stickers
              </h2>
              <p className="pt-4">
                Used Figma and Procreate to create stickers to give out to
                participants.
              </p>
            </div>
          </FadeInSection>

          {/* <FadeInSection>
            <div className="w-full mx-auto lg:w-[700px] px-4 aspect-auto">
              <Image
                src={"/idek2022.svg"}
                alt="ctf22"
                width={500}
                height={500}
                className="w-full rounded-xl h-auto object-cover"
              />
              <h2 className="font-normal pt-8 text-2xl text-center">
                Web Assets
              </h2>
              <p className="pt-4">
                Used Figma to illustrate 5 shrug-themed SVG characters to use on
                the competition website.
              </p>
            </div>
          </FadeInSection> */}
          <div className="w-full pt-12 flex justify-center">
            <BackButton />
          </div>
        </div>
        <div className="h-28"></div>
      </div>
    // </FadeInSection>
  );
};

export default Idek;
