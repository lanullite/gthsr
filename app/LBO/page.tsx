'use client'

import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";
import Link from "next/link";

export default function Lbo() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-sans font-bold text-black mb-6">Series A - Advisory & Growth Modeling</h1>
            <h2 className="text-2xl text-black mb-8 font-light">Precision Engineered for Early-Stage Growth</h2>
            <p className="text-lg text-black max-w-4xl leading-relaxed">
              In the critical stages of Series A funding, your financial model is more than numbers—it is the strategic narrative of your growth story. We design models that clearly articulate capital needs, growth trajectories, and investor potential, providing a foundation for confident decision-making.
            </p>
          </div>

          {/* The Architecture of Certainty Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-6">The Architecture of Growth</h2>
            <p className="text-lg text-black mb-6 leading-relaxed">
              Series A funding sits at the intersection of operational ambition, market validation, and investor confidence. We engineer models that not only forecast performance but also tell a compelling story that resonates with investors.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Every model is built anticipating investor scrutiny. We provide not just data, but defensible, strategic clarity that prepares your company for funding discussions and board-level review.
            </p>
          </div>

          {/* The Oakworth Deliverable Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Beyond the Spreadsheet</h2>
            <p className="text-lg text-black mb-8 max-w-3xl">
              Our partnership translates complexity into clarity. Your deliverable is more than a financial model; it is a strategic tool that drives investor confidence and informs growth decisions.
            </p>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Integrated Growth Engine</h3>
                <p className="text-black leading-relaxed">
                  A unified model where operational assumptions, revenue projections, and financing plans interact dynamically, providing a single source of truth for your leadership and investors.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Investor-Ready Financial Structuring</h3>
                <p className="text-black leading-relaxed">
                  Scenario analysis and capital allocation modeling to optimize funding strategy, align growth initiatives, and communicate risk-reward profiles to investors.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Board & Investor Confidence</h3>
                <p className="text-black leading-relaxed">
                  Clear, auditable, and presentation-ready outputs that withstand scrutiny and provide confidence for both internal and external stakeholders.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Scenario & Sensitivity Insights</h3>
                <p className="text-black leading-relaxed">
                  Detailed stress testing of assumptions to uncover opportunities, identify risks, and create actionable insights that guide Series A decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Engineered for Leaders Section */}
          <div className="rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-6">Engineered for Founders Who Define Markets</h2>
            <p className="text-lg text-black max-w-3xl leading-relaxed">
              Our Series A advisory models are the analytical foundation for founders who understand that clarity, precision, and strategic insight are critical to attracting investors and scaling successfully.
            </p>
            <p className="text-lg text-black max-w-3xl mt-4 leading-relaxed">
              We engage with visionary teams who recognize that superior analysis is not an advantage—it is a prerequisite.
            </p>
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
