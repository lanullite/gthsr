'use client'

import React from 'react'
import { cn } from '@/lib/utils'
// Removed unused Link import from lucide-react
import Image from 'next/image'

export const ConfidentialInquiry = () => {
    return (
        <section className="relative w-full bg-gray-50">
            {/* Header Section */}
            

            {/* Content Section */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="flex justify-center">
                    <div className="max-w-2xl w-full">
                        <div className="bg-white p-8 md:p-12 lg:p-16 border border-gray-200 text-center">
                            {/* Professional Headshot */}
                            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
                                <Image
                                    src="/CEO.png"
                                    alt="Arman Ahmad - Principal of The Oakworth Group"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            
                            <h2 className={cn(
                                "font-sans text-gray-900 font-light leading-tight mb-4",
                                "text-2xl",
                                "lg:text-3xl"
                            )}>
                                Arman Ahmad
                            </h2>
                            
                            <p className={cn(
                                "text-gray-700 mb-8 leading-relaxed",
                                "text-base",
                                "lg:text-lg"
                            )}>
                                Principal at The Oakworth Group

                            </p>
                            
                            {/* Alternative Learn More Link */}
                            <div className="mb-8">
    <a 
        href="\Confiden"
        className={cn(
            "inline-flex items-center",
            "text-gray-600 hover:text-gray-900",
            "transition-colors duration-300",
            "text-sm font-italic",
            "group"
        )}
    >
        <em>The Oakworth Group provides independent financial modeling and advisory support for founders, executives, and investors navigating Series A–C fundraising, capital strategy, and complex financial decisions.</em>
        <svg 
            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </a>
</div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
