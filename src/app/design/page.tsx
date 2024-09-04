import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const Design = () => {
    return (
        <div className="relative">
           <StarsBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
           <ShootingStars className="fixed top-0 left-0 w-full h-full z-[-2]" />

            <div className="relative z-10">
                <Navbar pageType="design" />
                <div className="h-28"></div>
                
                <Contact />
            </div>
        </div>
    )
}

export default Design