'use client'

import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";
import Link from 'next/link';

export default function Scenario(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen bg-white pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Section */}
            <div className="mb-16">
              <h1 className="text-4xl font-sans font-bold text-black mb-6">Operational Scenario &amp; Sensitivity Analysis</h1>
              <h2 className="text-2xl text-black mb-8 font-light">Mapping the Path to Scalable Growth</h2>
              <p className="text-lg text-black max-w-4xl leading-relaxed">
                Raising Series A–C capital is a journey through uncertainty. We model multiple growth scenarios and stress-test assumptions to provide founders and investors with clarity on potential outcomes and strategic pathways.
              </p>
            </div>

            {/* Body Section */}
            <div className="mb-16">
              <p className="text-lg text-black leading-relaxed">
                Growth requires understanding both opportunity and risk. We craft scenario and sensitivity analyses that quantify the effects of operational decisions, market variability, and funding choices, equipping your team to navigate uncertainty with confidence.
              </p>
            </div>

            {/* The Oakworth Deliverable Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Insight-Driven Confidence</h2>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Scenario Planning for Growth</h3>
                  <p className="text-black leading-relaxed">
                    We design &quot;Upside,&quot; &quot;Base,&quot; and &quot;Downside&quot; scenarios tailored to your key operational and financial assumptions, helping investors and leadership see the full spectrum of possibilities.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Sensitivity Analysis of Key Metrics</h3>
                  <p className="text-black leading-relaxed">
                    We isolate how variables—like revenue growth, burn rate, and fundraising milestones—impact valuation, runway, and investor returns.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Thresholds and Stress Testing</h3>
                  <p className="text-black leading-relaxed">
                    We pinpoint operational and financial tipping points, identifying where adjustments are required to protect runway, performance, and investor confidence.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Probability-Weighted Outcomes</h3>
                  <p className="text-black leading-relaxed">
                    Using probabilistic modeling where relevant, we provide a data-driven view of the most likely trajectories, enabling informed decision-making and risk management.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <h2 className="text-3xl font-sans font-bold text-black mb-4">More at</h2>
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
