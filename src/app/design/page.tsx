import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const Design = () => {
    return (
        <div className="relative">
            {/* Backgrounds */}
            <StarsBackground className="absolute inset-0 z-[-1]" />
            <ShootingStars className="absolute inset-0 z-[-2]" />

            {/* Main Content */}
            <div className="relative z-10">
                <Navbar pageType="design" />
                <div className="h-28"></div>
                
                <Contact />
            </div>
        </div>
    )
}

export default Design