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
              <h1 className="text-4xl font-sans font-bold text-black mb-6">Investment Committee Preparation</h1>
              <h2 className="text-2xl text-black mb-8 font-light">Your Strategic Narrative, Forged in Analysis</h2>
              <p className="text-lg text-black max-w-4xl leading-relaxed">
                The final step between analysis and approval is not a number—it is a story. We partner with your team to transform complex models into a compelling, authoritative narrative built to secure a unanimous yes.
              </p>
            </div>

            {/* Body Section */}
            <div className="mb-16">
              <p className="text-lg text-black leading-relaxed">
                A flawless model alone does not secure capital. Conviction does. We specialize in the critical translation of technical analysis into strategic persuasion. Our process ensures your team presents with the clarity and confidence that turns rigorous scrutiny into definitive approval, transforming your investment thesis into an undeniable mandate for action.
              </p>
            </div>

            {/* The Oakworth Deliverable Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: From Analysis to Authorization</h2>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Distilled Strategic Narrative</h3>
                  <p className="text-black leading-relaxed">
                    We isolate the 3-5 core drivers that truly determine your deal&#39;s success, moving beyond data to craft the central story your committee must remember.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Anticipatory Challenge Preparation</h3>
                  <p className="text-black leading-relaxed">
                    We develop robust, model-backed answers to the most critical and likely committee questions, ensuring your team navigates challenges with unshakable confidence.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Executive-Ready Presentation Materials</h3>
                  <p className="text-black leading-relaxed">
                    We assist in refining complex analysis into clear, concise, and visually compelling materials that focus committee attention on insight, not just information.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Confidence and Delivery Assurance</h3>
                  <p className="text-black leading-relaxed">
                    We conduct preparatory sessions to ensure your team presents with the authority that comes from absolute mastery of both the analysis and its strategic implications.
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