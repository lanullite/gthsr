'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useScroll } from 'framer-motion'
import Image from 'next/image'

export const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false)

    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                className={cn(
                    'fixed z-50 w-full border-b transition-all duration-300',
                    scrolled 
                        ? 'bg-background/80 backdrop-blur-xl shadow-sm' 
                        : 'bg-background/50 backdrop-blur-md'
                )}>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo - clickable to homepage */}
                        <Link
                            href="/"
                            aria-label="Home"
                            className="flex items-center flex-shrink-0">
                            <Image
                                src="/logoh.png"
                                alt="Oakworth Logo"
                                width={80}
                                height={20}
                                className="object-contain"
                                priority
                            />
                        </Link>

                        {/* Buttons - responsive sizing and spacing */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                            <Button
                                asChild
                                variant="outline"
                                className={cn(
                                    "transition-all duration-200 leading-relaxed",
                                    "h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm",
                                    "hover:border-gray-400 hover:bg-gray-50",
                                    "border-gray-300 bg-transparent rounded-none"
                                )}>
                                <Link href="/#service">
                                    <span className="whitespace-nowrap">Services</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className={cn(
                                    "transition-all duration-200 leading-relaxed",
                                    "h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm",
                                    "hover:opacity-90 active:scale-95",
                                    "border-0 shadow-sm rounded-none"
                                )}
                                style={{
                                    backgroundColor: '#0A1F36',
                                    color: 'white'
                                }}>
                                <Link href="/contact">
                                    <span className="whitespace-nowrap">Contact</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Spacer to prevent content from being hidden behind fixed navbar */}
            <div className="h-16 lg:h-20" />
        </header>
    )
}
