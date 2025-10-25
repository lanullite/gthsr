'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover"
                >
                    <source src="/1.mp4" type="video/mp4" />
                    <source src="/hero-video.webm" type="video/webm" />
                    {/* Fallback if video doesn't load */}
                    Your browser does not support the video tag.
                </video>
                
                {/* Gradient overlay for better text readability across devices */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        
                        {/* Main Heading - Smaller font sizes */}
                        <h1 className={cn(
                            "font-serif font-light text-white tracking-tight",
                            "mb-4 sm:mb-5 lg:mb-6",
                            "text-3xl leading-[1.1]",
                            "xs:text-4xl xs:leading-[1.1]",
                            "sm:text-5xl sm:leading-[1.05]",
                            "md:text-6xl md:leading-[1]",
                            "lg:text-7xl lg:leading-[0.95]",
                            "xl:text-7xl xl:leading-[0.9]"
                        )}>
                            THE OAKWORTH GROUP
                        </h1>
                        
                        {/* Subheading - Smaller font sizes */}
                        <p className={cn(
                            "text-gray-200 font-normal max-w-2xl mx-auto",
                            "mb-4 sm:mb-5 lg:mb-6",
                            "text-base leading-relaxed",
                            "xs:text-lg xs:leading-relaxed",
                            "sm:text-xl sm:leading-loose",
                            "lg:text-2xl lg:leading-loose",
                            "xl:text-2xl xl:leading-loose"
                        )}>
                            The Architectural Standard in Financial Modeling.
                        </p>

                        {/* CTA Button - Responsive sizing */}
                        <Button
                            asChild
                            className={cn(
                                "rounded-none transition-all duration-300",
                                "hover:opacity-90 active:scale-95",
                                "border-0 shadow-lg",
                                "h-10 px-6 text-sm",
                                "xs:h-11 xs:px-7 xs:text-base",
                                "sm:h-12 sm:px-8 sm:text-lg",
                                "md:h-14 md:px-10 md:text-xl",
                                "lg:h-16 lg:px-12 lg:text-xl"
                            )}
                            style={{
                                backgroundColor: '#0A1F36',
                                color: 'white'
                            }}>
                            <Link href="#contact">
                                <span className="whitespace-nowrap font-medium">
                                    Initiate a Dialogue
                                </span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Responsive positioning */}
            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-6 lg:bottom-8">
                <div className={cn(
                    "bg-white/70 animate-bounce",
                    "h-4 w-0.5",
                    "xs:h-5 xs:w-0.5",
                    "sm:h-6 sm:w-0.5",
                    "lg:h-8 lg:w-0.5"
                )} />
            </div>

            {/* Mobile Optimization - Prevent address bar issues on mobile */}
            <style jsx>{`
                @media (max-width: 768px) and (orientation: portrait) {
                    section {
                        height: 100dvh;
                        min-height: -webkit-fill-available;
                    }
                }
            `}</style>
        </section>
    )
}