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
            <h1 className="text-4xl font-sans font-bold text-black mb-6">Advanced Debt Structuring & Advisory</h1>
            <h2 className="text-2xl text-black mb-8 font-light">The Architecture of Strategic Leverage</h2>
            <p className="text-lg text-black max-w-4xl leading-relaxed">
              Capital is a tool. We engineer its structure to balance resilience, cost, and maximum return, turning debt from a liability into your most powerful lever for value creation.
            </p>
          </div>

          {/* Body Section */}
          <div className="mb-16">
            <p className="text-lg text-black leading-relaxed">
              In a leveraged transaction, the capital stack is the blueprint for your returns. Our advisory service provides the definitive analysis to architect, negotiate, and manage this structure. We move beyond basic modeling to deliver the intelligence required to secure optimal terms, navigate covenants with certainty, and build a capital foundation designed for acquisition, growth, and exit.
            </p>
          </div>

          {/* The Oakworth Deliverable Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-sans font-bold text-black mb-8">The Oakworth Deliverable: Command of Your Capital Structure</h2>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Optimal Capital Stack Architecture</h3>
                <p className="text-black leading-relaxed">
                  Determining the precise blend of senior and subordinated debt to minimize your cost of capital and maximize equity returns, aligned with your strategic goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Proactive Covenant Management</h3>
                <p className="text-black leading-relaxed">
                  Modeling covenant behavior under multiple scenarios to provide an early-warning system and the analytical backing for confident lender negotiations.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Automated Value Creation</h3>
                <p className="text-black leading-relaxed">
                  Engineering cash flow sweep mechanisms that directly link strong operational performance to accelerated debt repayment and increased equity value.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-sans font-bold text-black">Strategic Refinancing Preparedness</h3>
                <p className="text-black leading-relaxed">
                  Building future flexibility into your model to identify and execute recapitalization opportunities that capture value at the optimal moment.
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
    </>)
}