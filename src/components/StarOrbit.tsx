import StarIcon from "@/assets/star.svg"
import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const StarOrbit = ({ 
    children, 
    size, 
    rotation, 
    spinDuration,
    orbitDuration, 
}: PropsWithChildren<{ 
    size: number; 
    rotation: number; 
    spinDuration?: string;
    orbitDuration?: string;
}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
                className={twMerge( "animate-spin")} 
                style={{
                    animationDuration: orbitDuration,
                }}
            >
                <div 
                    className="flex items-start justify-start" 
                    style={{
                        height: `${size}px`,
                        width: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                >
                    <div 
                        className={twMerge( "animate-spin")} 
                        style={{
                            animationDuration: spinDuration,
                        }}
                    >
                        <div 
                            className="inline-flex" 
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}