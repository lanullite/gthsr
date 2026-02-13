'use client'

import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";
import Link from 'next/link';

export default function DebtStructuring(){
    return(
    <>
      <Navbar/>
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-sans font-bold text-black mb-6">Series B Growth Capital Structuring & Advisory</h1>
            <h2 className="text-2xl text-black mb-8 font-light">The Architecture of Strategic Growth</h2>
            <p className="text-lg text-black max-w-4xl leading-relaxed">
              Capital is the most important tool in the Series B stage companies. We design growth financing structures that balance flexibility, resilience, and investor alignment, turning funding from a constraint into a lever for scaling your business.
            </p>
          </div>

          {/* Body Section */}
          <div className="mb-16">
            <p className="text-lg text-black leading-relaxed">
              In early-stage and growth funding, your capital stack defines your strategic options. Our advisory service provides the insight to architect, negotiate, and manage financing for Series A–C rounds. We go beyond basic modeling to deliver clarity that helps secure investor confidence and supports your scaling objectives.
            </p>
          </div>

          {/* The Oakworth Deliverable Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Command of Your Growth Capital</h2>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Optimized Capital Stack</h3>
                <p className="text-black leading-relaxed">
                  Crafting the ideal mix of equity, convertible instruments, and debt to maximize growth potential while aligning with investor expectations and long-term strategy.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Investor Alignment & Governance</h3>
                <p className="text-black leading-relaxed">
                  Modeling governance and investor rights to ensure clarity and confidence for all stakeholders, reducing friction and enabling smooth decision-making.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Value Creation & Performance Linkage</h3>
                <p className="text-black leading-relaxed">
                  Designing funding and milestone structures that directly link capital deployment to growth outcomes, incentivizing performance and accelerating scale.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Future Financing Readiness</h3>
                <p className="text-black leading-relaxed">
                  Preparing your company for subsequent funding rounds with models that highlight optimal recapitalization opportunities and growth leverage points.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h2 className="text-3xl font-sans font-bold text-black mb-4">Next Steps</h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#0A1F36] text-white px-8 py-4 rounded-none font-semibold hover:bg-[#1a365d] transition-colors text-lg"
            >
              Schedule a Confidential Review
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
