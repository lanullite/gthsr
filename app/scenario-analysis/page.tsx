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
              <h2 className="text-2xl text-black mb-8 font-light">Illuminating the Path Through Uncertainty</h2>
              <p className="text-lg text-black max-w-4xl leading-relaxed">
                An investment thesis is a plan for the future, and the future is inherently uncertain. We move beyond the base case to model the full spectrum of potential outcomes, transforming uncertainty from a threat into a managed variable.
              </p>
            </div>

            {/* Body Section */}
            <div className="mb-16">
              <p className="text-lg text-black leading-relaxed">
                Informed strategy requires more than a single forecast&#8212;it requires understanding the landscape of possibilities surrounding it. We architect sophisticated scenario and sensitivity analyses that do not just predict an outcome; they quantify the risks and opportunities, providing the strategic intelligence to navigate volatility with confidence and precision.
              </p>
            </div>

            {/* The Oakworth Deliverable Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Clarity in a Complex World</h2>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Tailored Scenario Modeling</h3>
                  <p className="text-black leading-relaxed">
                    We build and analyze &#34;Upside,&#34; &#34;Base Case,&#34; and &#34;Downside&#34; scenarios specifically designed around your deal&#39;s most critical and vulnerable assumptions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Precision Sensitivity Analysis</h3>
                  <p className="text-black leading-relaxed">
                    We isolate the impact of individual variables&#8212;from growth rates to exit multiples&#8212;identifying the key levers that have the greatest power over your returns.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Break-Even and Stress Analysis</h3>
                  <p className="text-black leading-relaxed">
                    We identify the operational and financial thresholds where deal economics fundamentally change, providing clear markers for risk and opportunity.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-sans font-bold text-black">Probabilistic Outcome Analysis</h3>
                  <p className="text-black leading-relaxed">
                    Where applicable, we employ advanced techniques to assign probabilities to a range of outcomes, giving you a data-driven view of the most likely paths to success.
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