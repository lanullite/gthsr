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
                            Where strategic finance meets uncompromising precision. We partner with global leaders to transform complex hypotheses into definitive capital decisions.
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
                        In the calculus of high-stakes finance, ambiguity is the only true liability. We eliminate it.
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
                            Clarity, Engineered.
                        </div>
                    </div>
                    <p className={cn(
                        "text-black leading-relaxed max-w-4xl",
                        "text-base",
                        "sm:text-lg",
                        "lg:text-xl"
                    )}>
                        We architect financial intelligence with transparent, defensible logic. We provide not just data, but a lucid narrative that commands understanding and trust.
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
                            Confidence, Delivered.
                        </div>
                    </div>
                    <p className={cn(
                        "text-black leading-relaxed max-w-4xl",
                        "text-base",
                        "sm:text-lg",
                        "lg:text-xl"
                    )}>
                        Your conviction must be built on a foundation of zero-defect analysis. Our rigorous verification protocols ensure every conclusion is unshakable, turning deliberation into decisive action.
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
                            Authority, Earned.
                        </div>
                    </div>
                    <p className={cn(
                        "text-black leading-relaxed max-w-4xl",
                        "text-base",
                        "sm:text-lg",
                        "lg:text-xl"
                    )}>
                        We engage as an extension of your expertise, providing the analytical authority needed to navigate complexity, secure approvals, and advance strategic imperatives.
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
                        For Leaders Who Define the Market
                    </h2>
                    <div className={cn(
                        "text-black font-sans leading-relaxed max-w-4xl",
                        "text-lg",
                        "sm:text-xl",
                        "lg:text-2xl"
                    )}>
                        <p className="mb-6">
                            The Oakworth Group is the designated modeling partner for the world&apos;s most discerning financial institutions. From private equity and venture capital to corporate development, we serve those for whom superior analysis is the non-negotiable baseline of success.
                        </p>
                        <p>
                            Our partnership is reserved for entities who recognize that in the architecture of a deal, the quality of the model is the quality of the conviction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}