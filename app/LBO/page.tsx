import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";
import Link from "next/link";


export default function Lbo(){
    return(
    <>
      <Navbar/>
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-sans font-bold text-black mb-6">LBO Modeling & Analysis</h1>
            <h2 className="text-2xl text-black mb-8 font-light">Precision Engineered for Acquisition Conviction</h2>
            <p className="text-lg text-black max-w-4xl leading-relaxed">
              In the high-stakes calculus of leveraged acquisitions, the model is not merely a tool—it is the foundational narrative of your investment thesis. We architect this narrative with uncompromising precision, transforming operational hypotheses and complex capital structures into a definitive blueprint for value creation and decisive action.
            </p>
          </div>

          {/* The Architecture of Certainty Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-6">The Architecture of Certainty</h2>
            <p className="text-lg text-black mb-6 leading-relaxed">
              An LBO exists at the intersection of operational ambition, financial leverage, and strategic foresight. We engineer models that do not just calculate returns—they build the unshakable confidence required to proceed from evaluation to execution.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Our approach is built on a fundamental principle: anticipate the scrutiny.We build every model with the Investment Committee&#39;s most probing questions already answered, providing not just data, but defensible, strategic clarity.
            </p>
          </div>

          {/* The Oakworth Deliverable Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Beyond the Spreadsheet</h2>
            <p className="text-lg text-black mb-8 max-w-3xl">
              We provide a partnership that translates complexity into command. Your deliverable is more than a model; it is the analytical authority for your deal.
            </p>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">A Dynamically Integrated Financial Engine</h3>
                <p className="text-black leading-relaxed">
                  A seamlessly balanced system where operational assumptions directly drive cash flow, debt capacity, and equity returns, providing a single source of truth for your entire deal team.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Capital Stack Intelligence</h3>
                <p className="text-black leading-relaxed">
                  Sophisticated structuring and scenario analysis of senior, mezzanine, and equity components to optimize returns while ensuring operational resilience and covenant compliance.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Investment Committee Confidence</h3>
                <p className="text-black leading-relaxed">
                  Executive-ready outputs and a clear, auditable logic trail designed to withstand rigorous scrutiny and secure swift, unanimous approval.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Risk-Weighted Return Analysis</h3>
                <p className="text-black leading-relaxed">
                  Advanced scenario and sensitivity modeling that illuminates the full spectrum of potential outcomes, transforming uncertainty from a threat into a managed variable.
                </p>
              </div>
            </div>
          </div>

          {/* Engineered for Leaders Section */}
          <div className=" rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-6">Engineered for Leaders Who Define Markets</h2>
            <p className="text-lg text-black max-w-3xl leading-relaxed">
              Our LBO modeling is the chosen analytical foundation for financial institutions that recognize a fundamental truth: in the architecture of a deal, the quality of the model determines the quality of the conviction.
            </p>
            <p className="text-lg text-black max-w-3xl mt-4 leading-relaxed">
              We engage with partners for whom superior analysis is not an advantage, but a prerequisite.
            </p>
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
    </>)
}