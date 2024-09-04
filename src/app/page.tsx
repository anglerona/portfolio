"use client";
import Link from "next/link";
import Image from "next/image";
import grain from "@/assets/grain.jpg"
import StarIcon from "@/assets/star.svg"
import Sparkle from "@/assets/sparkle.svg"
import Button from "@/components/Button";
import { StarOrbit } from "@/components/StarOrbit";
import FadeInSection from "@/components/FadeInSection";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Home() {
  return (
    <div className="bg-background h-screen relative overflow-clip">
      {/* <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"> */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url(${grain.src})`
        }}>
        </div>
        <StarsBackground className="absolute inset-0" />
        <div className="size-[250px] lg:size-[500px] home-ring" />
        <div className="size-[450px] lg:size-[700px] home-ring" />
        <div className="size-[650px] lg:size-[900px] home-ring" />
        <div className="size-[850px] lg:size-[1100px] home-ring" />

        
        <StarOrbit size={360} rotation={240} spinDuration="6s" orbitDuration="32s">
          <Sparkle className="size-3 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={380} rotation={80} spinDuration="6s" orbitDuration="32s">
          <Sparkle className="size-5 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={390} rotation={250} spinDuration="6s" orbitDuration="32s">
          <Sparkle className="size-4 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={440} rotation={-14} spinDuration="6s" orbitDuration="32s">
          <Sparkle className="size-8 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={480} rotation={178} spinDuration="6s" orbitDuration="32s">
          <Sparkle className="size-10 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={510} rotation={98} spinDuration="6s" orbitDuration="32s">
          <StarIcon className="size-8 text-purple-300" />
        </StarOrbit>
        <StarOrbit size={530} rotation={-50} spinDuration="6s" orbitDuration="40s">
          <StarIcon className="size-8 text-purple-300" />
        </StarOrbit>
        <StarOrbit size={540} rotation={138} spinDuration="6s" orbitDuration="40s">
          <Sparkle className="size-3 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={550} rotation={-40} spinDuration="6s" orbitDuration="40s">
          <Sparkle className="size-3 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={600} rotation={20} spinDuration="6s" orbitDuration="40s">
          <StarIcon className="size-12 text-purple-300" />
        </StarOrbit>
        <StarOrbit size={630} rotation={-5} spinDuration="6s" orbitDuration="40s">
          <Sparkle className="size-3 text-purple-300/30" />
        </StarOrbit>        
        <StarOrbit size={650} rotation={144} spinDuration="6s" orbitDuration="48s">
          <Sparkle className="size-14 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={690} rotation={84} spinDuration="6s" orbitDuration="48s">
          <Sparkle className="size-4 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={690} rotation={125} spinDuration="6s" orbitDuration="48s">
          <Sparkle className="size-4 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={710} rotation={-45} spinDuration="6s" orbitDuration="48s">
          <Sparkle className="size-4 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={740} rotation={130} spinDuration="6s" orbitDuration="48s">
          <Sparkle className="size-3 text-purple-300/30" />
        </StarOrbit>
        <StarOrbit size={740} rotation={-100} spinDuration="6s" orbitDuration="50s">
          <StarIcon className="size-12 text-purple-300" />
        </StarOrbit>
        <StarOrbit size={770} rotation={-72} spinDuration="6s" orbitDuration="50s">
          <StarIcon className="size-28 text-purple-300" />
        </StarOrbit>
      {/* </div> */}
        <FadeInSection>
          <div className="py-24">
            <div className="justify-center w-96 text-center items-center mx-auto">
              <Image className="rounded-full mx-auto object-fit" src="/goose.png" alt="goose" width={128} height={128} />
            
              <div className="px-4 py-8">
                <h2 className="font-semibold pb-4 text-4xl">Hi, I&apos;m Angelina</h2>
                <p>I&apos;m a software engineering student @ uWaterloo and I also do freelance design/illustration work. Thanks for stopping by!</p>
              </div>
              
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex flex-col md:flex-row gap-4 w-full px-4 md:w-auto md:px-0 md:gap-8">
                <Button href="/dev">Developer Portfolio</Button>
                <Button href="/design">Design Portfolio</Button>
              </div>
            </div>
          </div>
        </FadeInSection>
      
    </div>
  );
}
