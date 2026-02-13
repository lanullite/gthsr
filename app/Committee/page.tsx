'use client'

import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";
import Link from 'next/link';

export default function Committee(){
    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-white pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Section */}
            <div className="mb-16">
              <h1 className="text-4xl font-sans font-bold text-black mb-6">Series C - Investor Committee Preparation</h1>
              <h2 className="text-2xl text-black mb-8 font-light">Your Growth Story, Backed by Insight</h2>
              <p className="text-lg text-black max-w-4xl leading-relaxed">
                Securing Series C funding is as much about persuasion as it is about numbers. We partner with your team to translate complex financial and operational analysis into a clear, compelling narrative designed to inspire investor confidence.
              </p>
            </div>

            {/* Body Section */}
            <div className="mb-16">
              <p className="text-lg text-black leading-relaxed">
                A robust model alone does not secure capital—it’s the story that convinces investors. Our process transforms technical analysis into strategic insight, ensuring your team presents with clarity, credibility, and the conviction that turns diligence into funding commitment.
              </p>
            </div>

            {/* The Oakworth Deliverable Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Insight to Investor Confidence</h2>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Core Growth Drivers</h3>
                  <p className="text-black leading-relaxed">
                    We identify the 3–5 key metrics and strategic levers that define your growth story, ensuring investors focus on what truly matters for your company’s trajectory.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Anticipatory Investor Q&A</h3>
                  <p className="text-black leading-relaxed">
                    We prepare clear, model-backed responses to likely investor questions, giving your team confidence to handle challenging inquiries with precision and authority.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Executive-Ready Pitch Materials</h3>
                  <p className="text-black leading-relaxed">
                    Transforming complex financial data into visually compelling, concise presentations that highlight insight and opportunity, not just raw numbers.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Confidence & Delivery Coaching</h3>
                  <p className="text-black leading-relaxed">
                    We guide your team through prep sessions to ensure every presenter conveys mastery of both analysis and strategy, leaving investors fully confident in your leadership and growth plan.
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
