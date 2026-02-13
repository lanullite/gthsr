'use client'

import React from 'react'

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function CertaintyProtocol() {
    return (
        <section className="relative w-full">
            {/* Header Section */}
            <div className="relative overflow-hidden py-20 md:py-24 lg:py-28">
                <div className="" />
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className={cn(
                            "text-black font-sans max-w-3xl mx-auto leading-loose mb-8 md:mb-10",
                            "text-lg",
                            "sm:text-xl",
                            "lg:text-2xl"
                        )}>
                            Independent financial advisory and modeling support for founders and executives preparing for institutional fundraising and capital decisions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Process Steps */}
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                {/* Main Heading */}
                <div className="mb-12 md:mb-16">
                    
                    <p className={cn(
                        "text-black font-sans max-w-4xl leading-loose",
                        "text-lg",
                        "sm:text-xl",
                        "lg:text-2xl"
                    )}>
                        Fundraising decisions require structured analysis, transparent assumptions, and a clear understanding of long term implications.
                    </p>
                </div>
                
                {/* Clarity */}
                <div className="mb-12 md:mb-16">
                    <div className="mb-6">
                        <div className={cn(
                            "font-sans text-black font-light leading-tight",
                            "text-2xl",
                            "sm:text-3xl",
                            "lg:text-4xl"
                        )}>
                            Clarity
                        </div>
                    </div>
                    <p className={cn(
                        "text-black leading-relaxed max-w-4xl",
                        "text-base",
                        "sm:text-lg",
                        "lg:text-xl"
                    )}>
                        We build structured financial models that translate business strategy into measurable outcomes. Clear assumptions and transparent logic allow founders and investors to evaluate opportunities with confidence.
                    </p>
                </div>

                {/* Confidence */}
                <div className="mb-12 md:mb-16">
                    <div className="mb-6">
                        <div className={cn(
                            "font-sans text-black font-light leading-tight",
                            "text-2xl",
                            "sm:text-3xl",
                            "lg:text-4xl"
                        )}>
                            Reliability
                        </div>
                    </div>
                    <p className={cn(
                        "text-black leading-relaxed max-w-4xl",
                        "text-base",
                        "sm:text-lg",
                        "lg:text-xl"
                    )}>
                        Robust modeling reduces uncertainty around runway, dilution, capital requirements, and operational scalability. This enables informed decision making before engaging with institutional investors.
                    </p>
                </div>

                {/* Authority */}
                <div className="mb-12 md:mb-16">
                    <div className="mb-6">
                        <div className={cn(
                            "font-sans text-black font-light leading-tight",
                            "text-2xl",
                            "sm:text-3xl",
                            "lg:text-4xl"
                        )}>
                            Discipline
                        </div>
                    </div>
                    <p className={cn(
                        "text-black leading-relaxed max-w-4xl",
                        "text-base",
                        "sm:text-lg",
                        "lg:text-xl"
                    )}>
                        Our work emphasizes defensibility, auditability, and alignment with institutional expectations. Models are built to withstand diligence, negotiations, and long term planning requirements.
                    </p>
                </div>
            </div>

            {/* Strategic Partnership Section */}
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
                <div className="text-left">
                    <h2 className={cn(
                        "font-sans text-black font-light leading-tight mb-8 md:mb-10",
                        "text-3xl",
                        "sm:text-4xl",
                        "lg:text-5xl"
                    )}>
                        For Founders and Professional Investors
                    </h2>
                    <div className={cn(
                        "text-black font-sans leading-relaxed max-w-4xl",
                        "text-lg",
                        "sm:text-xl",
                        "lg:text-2xl"
                    )}>
                        <p className="mb-6">
                            The Oakworth Group provides independent financial modeling support to companies preparing for Series A, Series B, and Series C fundraising, as well as to investors evaluating opportunities.
                        </p>
                        <p>
                            We work with founders, executive teams, venture capital firms, and family offices who require structured analysis to support capital allocation, valuation discussions, and long term strategic planning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
