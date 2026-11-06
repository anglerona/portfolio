import Contact from "@/components/Contact";
import DevProjects from "@/components/DevProjects";
import Navbar from "@/components/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Timeline } from "@/components/ui/timeline";
import { WorkHistory } from "@/components/WorkHistory";

const Dev = () => {
    return (
        <div className="relative">
            <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
            <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

            <main className="relative z-10">
                <h1 className="sr-only">Angelina&apos;s Developer Portfolio</h1>
                <Navbar pageType="dev" />
                <div className="h-4"></div>
                
                <DevProjects />
                <WorkHistory />
                <Contact />
            </main>
        </div>
    );
}

export default Dev;
