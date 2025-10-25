import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";

export default function Standard(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen bg-white pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Section */}
            <div className="mb-16">
              <h1 className="text-4xl font-sans font-bold text-black mb-6">Standards &amp; Regulations</h1>
              <p className="text-lg text-black max-w-4xl leading-relaxed">
                At The Oakworth Group, we believe that true excellence is built on a foundation of rigorous discipline and transparent methodology. Our clients entrust us with their most critical decisions; what follows is a detailed account of the frameworks we adhere to, ensuring that trust is always well-placed.
              </p>
            </div>

            {/* Our Modeling Standard Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-6">1. Our Modeling Standard: The FAST Framework</h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                We do not believe in reinventing principles that define excellence. This is why every financial model we deliver is constructed in strict adherence to the FAST Standard.
              </p>
              <p className="text-lg text-black mb-6 leading-relaxed">
                The FAST Standard, developed by the Financial Modeling Institute, is the global benchmark for creating models that are not just numerically accurate, but also logically structured, transparent, and resilient. Our commitment to this standard is non-negotiable and translates into tangible benefits for your deal team:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Flexibility</h3>
                  <p className="text-black leading-relaxed">
                    Our models are designed to be easily modified. When deal variables change, the model adapts seamlessly, without requiring structural rebuilds that waste precious time.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Appropriateness</h3>
                  <p className="text-black leading-relaxed">
                    Every assumption, formula, and output is purpose-built for the specific context of your transaction, ensuring relevance and practical utility.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Structured Clarity</h3>
                  <p className="text-black leading-relaxed">
                    A consistent and logical layout allows any qualified professional&#8212;from an Associate to a Managing Director&#8212;to navigate the model with confidence and understand the flow of logic instantaneously.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Transparency</h3>
                  <p className="text-black leading-relaxed">
                    There are no &#34;black boxes.&#34; Our models are built to be audited. Every calculation is clear, traceable, and designed to withstand the most rigorous investment committee scrutiny.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-black leading-relaxed">
                By partnering with us, you are not just receiving a spreadsheet; you are gaining a tool built on a foundation of globally recognized best practices.
              </p>
            </div>

            {/* Global Regulatory & Tax Capability Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-6">2. Global Regulatory &amp; Tax Capability</h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                The private equity landscape is global, and so is our expertise. Our models are architecturally designed to accommodate the complex fiscal and regulatory environments of your transactions.
              </p>
              <p className="text-lg text-black mb-6 leading-relaxed">
                We possess the structural capability and understanding to accurately model the financial implications of deals across major jurisdictions, including:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">The United States &amp; Canada</h3>
                  <p className="text-black leading-relaxed">
                    Federal and state/provincial corporate taxes, SALT (State and Local Taxes), and complex financing structures.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">The United Kingdom &amp; European Union</h3>
                  <p className="text-black leading-relaxed">
                    Corporation tax, VAT implications, and the nuances of cross-border investment within the EU.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Australia &amp; Asia-Pacific</h3>
                  <p className="text-black leading-relaxed">
                    Handling of franking credits, GST, and regional tax treaties.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">The Middle East (GCC)</h3>
                  <p className="text-black leading-relaxed">
                    Modeling for VAT and the emerging corporate tax frameworks.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-sans font-bold text-black mb-4">A Critical Point of Partnership &amp; Responsibility:</h3>
                <p className="text-lg text-black leading-relaxed">
                  It is our duty to state with absolute clarity: <span className="font-semibold">The Oakworth Group provides financial modeling services.</span> We expertly implement the tax rates, legal structures, and regulatory assumptions that <span className="font-semibold">you, our client, provide in consultation with your qualified legal and tax advisors.</span>
                </p>
                <p className="text-lg text-black mt-4 leading-relaxed">
                  We build the tool; you and your counsel define the rules. This clear separation of roles is a cornerstone of our professional responsibility and ensures that the highest level of specialized expertise is applied to every component of your transaction.
                </p>
              </div>
            </div>

            {/* Our Technological Discipline Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-black mb-6">3. Our Technological Discipline</h2>
              <p className="text-lg text-black mb-8 leading-relaxed">
                Precision is a function of both mind and tool. We employ a disciplined, professional-grade technological stack to ensure integrity, security, and efficiency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Core Analytical Engine</h3>
                  <p className="text-black leading-relaxed">
                    Microsoft Excel for Microsoft 365. We leverage the full power of the latest version, utilizing advanced functions, dynamic arrays, and data types to create living, responsive models.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Data Integrity &amp; Automation</h3>
                  <p className="text-black leading-relaxed">
                    We employ Power Query for robust, error-resistant data ingestion and transformation. This ensures a clean, auditable, and repeatable process for integrating source data.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Security Protocol</h3>
                  <p className="text-black leading-relaxed">
                    Client confidentiality is sacrosanct. All data is transmitted and stored using encrypted, secure methods. We strictly adhere to NDAs and are prepared to comply with your firm&#39;s specific information security policies.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-none p-8">
                  <h3 className="text-xl font-sans font-bold text-black mb-4">Presentation &amp; Collaboration</h3>
                  <p className="text-black leading-relaxed">
                    We are adept at distilling complex model outputs into clear, authoritative summaries using Microsoft PowerPoint, providing you with the materials needed for effective internal communication and decisive committee presentations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}