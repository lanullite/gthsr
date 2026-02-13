'use client'

import Link from 'next/link'

export default function Service() {
    const services = [
        {
            id: "lbo-modeling",
            title: "Series A Advisory & Growth Modeling",
            description: "We provide investor-ready financial models and strategic guidance for early-stage companies, articulating growth potential and capital requirements with clarity and precision.",
            href: "/LBO"
        },
        {
            id: "debt-structuring",
            title: "Series B Capital Structuring & Optimization",
            description: "Our advisory ensures optimal capital stack design, balancing risk, flexibility, and return to empower companies to scale efficiently while attracting the right investors.",
            href: "/Debt"
        },
        {
            id: "investment-advisory",
            title: "Series C Investment Committee Preparation",
            description: "We transform complex financial and operational data into board-ready narratives that secure investor confidence and support strategic growth decisions.",
            href: "/Committee"
        },
        {
            id: "financial-analysis",
            title: "Operational Scenario & Sensitivity Analysis",
            description: "Advanced scenario modeling and stress-testing of assumptions to provide clarity under uncertainty, safeguard investment, and highlight strategic opportunities across funding stages.",
            href: "/scenario-analysis"
        }
    ]

    const standards = [
        {
            title: "A Partnership of Equals",
            description: "We engage with leaders who recognize that superior analysis is the baseline for success."
        },
        {
            title: "The Zero-Defect Protocol",
            description: "Our unwavering commitment to accuracy ensures every conclusion is built on an unshakable foundation."
        },
        {
            title: "Unwavering Time Discipline",
            description: "We respect the velocity of your market and are built to deliver precision on your timeline."
        }
    ]

    return (
        <div className="w-full bg-white py-20 md:py-28 lg:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-left mb-16 md:mb-20 lg:mb-24">
                    <h1 className="font-sans font-light text-black leading-tight mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Strategic Financial Advisory Across Series A–C
                    </h1>
                    <p className="text-black max-w-4xl leading-relaxed mb-8 md:mb-12 text-lg sm:text-xl lg:text-2xl">
                        From early-stage growth to late-stage expansion, The Oakworth Group provides analytical insight and strategic guidance for every stage of funding. Our expertise ensures clarity, confidence, and precision at each step of your capital journey.
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-12 md:space-y-16 mb-20 md:mb-24 lg:mb-32">
                    {services.map((service) => (
                        <div key={service.id} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
                            <div className="text-left">
                                <h3 className="font-sans font-light text-black leading-tight mb-4 text-2xl sm:text-3xl md:text-4xl">
                                    {service.title}
                                </h3>
                                <p className="text-black mb-6 md:mb-8 leading-relaxed max-w-4xl text-base sm:text-lg md:text-xl">
                                    {service.description}
                                </p>
                                <Link 
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-[#0A1F36] font-semibold hover:gap-3 transition-all"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Standards */}
                <div className="rounded-none p-8 md:p-12 lg:p-16 bg-gray-50">
                    <div className="text-left mb-12 md:mb-16">
                        <h2 className="font-sans font-light text-black leading-tight mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            The Oakworth Standard
                        </h2>
                        <p className="text-black max-w-3xl leading-relaxed text-lg sm:text-xl">
                            Our engagement is a partnership defined by a shared commitment to excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                        {standards.map((standard, index) => (
                            <div key={index} className="text-left">
                                <h3 className="font-sans font-light text-black leading-tight mb-4 text-xl sm:text-2xl md:text-3xl">
                                    {standard.title}
                                </h3>
                                <p className="text-black leading-relaxed text-base sm:text-lg">
                                    {standard.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
