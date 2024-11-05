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

            <div className="relative z-10">
                <Navbar pageType="dev" />
                <div className="h-28"></div>
                
                <DevProjects />
                <WorkHistory />
                <Contact />
            </div>
        </div>
    );
}

export default Dev;
