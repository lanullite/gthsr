'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Footer } from "../../components/Footer/footer"
import { Navbar } from "../../components/Header/navbar"
import Image from 'next/image'

export default function Confidential() {
    return (
        <>
            <Navbar />
            <section className="relative w-full bg-gray-50">
                {/* Content Section */}
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="flex justify-center">
                        <div className="w-full">
                            <div className="p-8 lg:p-12 border border-gray-200 bg-white">
                                {/* Header - Founder Info */}
                                <div className="text-center mb-8">
                                    {/* Professional Headshot */}
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-6 overflow-hidden">
                                        <Image
                                            src="/CEO.png"
                                            alt="Arman Ahmad - Founder & Principal of The Oakworth Group"
                                            width={160}
                                            height={160}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                    
                                    <h2 className={cn(
                                        "font-sans text-gray-900 font-light mb-2",
                                        "text-2xl",
                                        "lg:text-3xl"
                                    )}>
                                        Arman Ahmad
                                    </h2>
                                    <p className={cn(
                                        "text-gray-600 mb-8",
                                        "text-base",
                                        "lg:text-lg"
                                    )}>
                                        Founder &amp; Principal
                                    </p>
                                </div>
                                
                                {/* Personal Story Content */}
                                <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                                    <div className="italic">
                                        <p className="mb-6 leading-relaxed">
                                            At Oakworth, we architect financial models that regulate complexity and illuminate strategic pathways. We convert intricate variables into a clear narrative for decisive action. My own path in finance taught me a simple truth: the most complex models are built from a foundation of simple, unwavering principles. I started by focusing on the fundamentals, and through that process, I saw that many saw financial modeling as just a necessary step—a box to be checked. I saw it differently.
                                        </p>
                                        
                                        <p className="mb-6 leading-relaxed">
                                            To me, a model is more than a spreadsheet. It&apos;s a story. It&apos;s the narrative that turns uncertainty into confidence and data into decisive action. This belief is why I founded The Oakworth Group. Our purpose is to provide not just analysis, but a foundation of clarity so solid that you can build your most important decisions upon it.
                                        </p>
                                        
                                        <p className="mb-6 leading-relaxed">
                                            This requires a team that doesn&apos;t just work for a firm, but believes in its mission. That&apos;s why I&apos;ve focused on building a culture of respect and intellectual partnership. I trust my team as the experts they are. They have the freedom to think deeply, to challenge ideas, and to take ownership of their work. When they are treated as partners, they pour that same respect and dedication into every project for our clients. You will feel the difference that this genuine commitment makes.
                                        </p>
                                        
                                        <p className="mb-6 leading-relaxed">
                                            It is a privilege to do this work, and a greater privilege to do it for leaders like you. I am personally committed to ensuring that our partnership provides the clarity and confidence your decisions demand.
                                        </p>
                                        
                                        <p className="mb-8 leading-relaxed">
                                            I welcome the opportunity to learn about your challenges and discuss how we can help.
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Section with Email & LinkedIn */}
                                <div className="border-t border-gray-200 pt-8 text-center">
                                    <h3 className={cn(
                                        "font-sans text-gray-900 font-light mb-4",
                                        "text-xl",
                                        "lg:text-2xl"
                                    )}>
                                        Contact Me
                                    </h3>
                                    
                                    {/* Email */}
                                    <div className="mb-4">
                                        <a 
                                            href="mailto:arman.ahmad@theoakworth.com"
                                            className={cn(
                                                "text-gray-900 hover:text-[#0A1F36] transition-colors duration-300",
                                                "text-lg",
                                                "lg:text-xl"
                                            )}
                                        >
                                            arman.ahmad@theoakworth.com
                                        </a>
                                    </div>

                                    {/* LinkedIn Button */}
                                    <div>
                                        <a 
                                            href="https://www.linkedin.com/in/arman-oakworth/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a365d] transition-colors duration-300 text-lg lg:text-xl"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
