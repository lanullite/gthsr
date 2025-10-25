'use client'
import { useState } from 'react'
import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function Disclaimer() {
    const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
        professionalAdvice: true,
        warranties: false,
        liability: false,
        thirdParty: false,
        intellectualProperty: false,
        jurisdiction: false,
        performance: false,
        governingLaw: false
    })

    const disclaimerSections = [
        {
            id: "professionalAdvice",
            title: "1. No Professional Advice or Service Relationship",
            content: `The information, analyses, models, methodologies, and content (collectively, the "Materials") presented on this website (theoakworth.com) and its associated digital platforms are provided by THEOAKWORTH PRIVATE LIMITED (doing business as "The Oakworth Group") for general informational and illustrative purposes only.

The Materials are not, and shall not be construed as, financial, investment, legal, tax, or any other form of regulated or professional advice. Nothing contained on this website constitutes an offer, solicitation, recommendation, or endorsement to buy or sell any security or financial instrument, or to engage in any specific investment or transaction strategy.

No client-consultant relationship is established through your access or use of this website. Such a relationship is formed exclusively upon the mutual execution of a formal, written engagement letter.`
        },
        {
            id: "warranties",
            title: "2. No Warranties",
            content: `The Materials are provided on an "as is" and "as available" basis without any representations or warranties of any kind, either express or implied. To the fullest extent permissible by law, The Oakworth Group disclaims all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, accuracy, timeliness, and non-infringement.

While The Oakworth Group strives to ensure the quality of the information, we do not warrant or guarantee the completeness, sequence, accuracy, or adequacy of the Materials, and we expressly disclaim any liability for errors or omissions therein.`
        },
        {
            id: "liability",
            title: "3. Limitation of Liability",
            content: `To the fullest extent permitted by applicable law, in no event shall The Oakworth Group, its directors, officers, employees, affiliates, or agents be liable for any direct, indirect, incidental, special, exemplary, consequential, or punitive damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) arising out of or in any way connected with your access to, use of, or inability to use the website or the Materials, whether based on warranty, contract, tort (including negligence), or any other legal theory, and whether or not we have been advised of the possibility of such damages.`
        },
        {
            id: "thirdParty",
            title: "4. Third-Party Links",
            content: `For your convenience, this website may provide links to content or resources maintained by third parties. We have no control over such third-party sites and resources. The inclusion of any link does not imply affiliation, endorsement, or adoption by The Oakworth Group. We accept no responsibility for the accuracy, legality, or content of external sites.`
        },
        {
            id: "intellectualProperty",
            title: "5. Intellectual Property",
            content: `All Materials, including but not limited to proprietary financial modeling frameworks, templates, logos, and graphics, are the intellectual property of The Oakworth Group or its licensors and are protected by copyright, trademark, and other laws. Your use of the website does not grant you any ownership rights to any such Materials.`
        },
        {
            id: "jurisdiction",
            title: "6. Jurisdictional Considerations",
            content: `The information on this site is intended for sophisticated institutional clients and is not directed to any person in any jurisdiction where (by reason of that person's nationality, residence, or otherwise) the publication or availability of this website is prohibited. Persons in respect of whom such prohibitions apply must not access this website. It is your responsibility to be aware of and comply with all applicable local laws and regulations.`
        },
        {
            id: "performance",
            title: "7. Past Performance & Forward-Looking Statements",
            content: `Any description or simulation of past performance contained on this website is provided for illustrative purposes only and is not a reliable indicator of future results. Certain information may constitute forward-looking statements, which are subject to numerous risks, uncertainties, and assumptions that may cause actual results to differ materially from those projected. The Oakworth Group undertakes no obligation to update any forward-looking statements.`
        },
        {
            id: "governingLaw",
            title: "8. Governing Law",
            content: `This Disclaimer, and any dispute or claim arising out of or in connection with it, shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, without regard to its conflict of law principles.`
        }
    ]

    const toggleSection = (sectionId: string) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }))
    }

    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Back to Home Button */}
                    <div className="mb-8 md:mb-12">
                        <Link 
                            href="/"
                            className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16 lg:mb-20">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-black mb-3 sm:mb-4">
                            Global Disclaimer
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl mx-auto px-4">
                            Last Updated: 13th October, 2025
                        </p>
                    </div>

                    {/* Disclaimer Content */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {disclaimerSections.map((section) => (
                                <div key={section.id} className="border border-gray-200 rounded-lg">
                                    {/* Section Header */}
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between text-left transition-colors"
                                    >
                                        <h3 className="text-lg sm:text-xl font-semibold text-black pr-4">
                                            {section.title}
                                        </h3>
                                        {openSections[section.id] ? (
                                            <ChevronUp className="w-5 h-5 text-black flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-black flex-shrink-0" />
                                        )}
                                    </button>

                                    {/* Section Content */}
                                    {openSections[section.id] && (
                                        <div className="px-6 py-4">
                                            <div className="text-black leading-relaxed whitespace-pre-line">
                                                {section.content}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold text-black mb-3">
                                Contact for Clarification:
                            </h3>
                            <p className="text-black mb-2">
                                For any questions regarding this disclaimer, please contact:
                            </p>
                            <div className="text-black">
                                <p className="font-medium">THEOAKWORTH PRIVATE LIMITED</p>
                                <p className="mt-1">Email: compliance@theoakworth.com</p>
                                <p className="mt-1">Subject Line: Disclaimer Inquiry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}