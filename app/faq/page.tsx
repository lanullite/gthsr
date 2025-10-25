'use client'
import { useState } from 'react'
import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function FAQ() {
    const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
        communications: true,
        engagement: false,
        deliverables: false,
        billing: false
    })
    const [openItems, setOpenItems] = useState<{[key: number]: boolean}>({})

    const faqSections = [
        {
            id: "communications",
            title: "Client Support & Communications",
            items: [
                {
                    question: "What is the best way to contact you for a new project or proposal?",
                    answer: "For all new business inquiries, proposals, and initial discussions, please use our dedicated channel: proposals@theoakworth.com. This ensures your request is logged and directed to our senior team for a prompt and comprehensive response."
                },
                {
                    question: "I haven't received a reply to my email. What should I do?",
                    answer: "We acknowledge all professional inquiries within 24 business hours. If you have not received an acknowledgment, please check your spam or junk folder. For urgent matters, you may escalate by contacting our office manager at ahmad@theoakworth.com."
                },
                {
                    question: "I am an existing client and have an urgent, time-sensitive issue. Who do I contact?",
                    answer: "Your partnership includes prioritized support. For urgent matters affecting an active engagement, please use the dedicated emergency line provided in your project onboarding documents: emergency@theoakworth.com. This channel is monitored continuously during business hours."
                },
                {
                    question: "Do you have a phone number for direct contact?",
                    answer: "To ensure every client interaction is structured, documented, and actionable, we initiate all partnerships with a scheduled video conference. Following that, dedicated communication channels are established for seamless collaboration. Please direct all initial contact requests via email."
                }
            ]
        },
        {
            id: "engagement",
            title: "Engagement Process",
            items: [
                {
                    question: "What is the first step to starting a project?",
                    answer: "The process begins with a confidential discovery call. This allows us to understand your specific strategic challenge, ensure we are the right fit, and define the scope of work. From there, we will provide a detailed proposal and engagement letter."
                },
                {
                    question: "How do you handle project timelines and deadlines?",
                    answer: "We treat your timelines with the same rigor we apply to our models. A firm project schedule with key milestones is established and agreed upon at the outset. We are built for the pace of the C-suite and are committed to meeting our deadlines."
                },
                {
                    question: "What if our requirements change after the project has started?",
                    answer: "We maintain a formal change order process. Should the project scope evolve, we will immediately provide a clear assessment of the impact on timeline and deliverables for your written approval before proceeding. This ensures complete transparency and alignment."
                }
            ]
        },
        {
            id: "deliverables",
            title: "Deliverables & Support",
            items: [
                {
                    question: "What does the final delivery include?",
                    answer: "You will receive the complete, fully auditable financial model built to the FAST Standard, a comprehensive executive summary memo, and a live presentation walkthrough with your team to ensure full clarity and mastery of the analysis."
                },
                {
                    question: "What kind of post-delivery support do you provide?",
                    answer: "Our partnership includes a defined support period post-delivery to address any clarification questions. We stand by our work and are committed to ensuring you are fully confident in the tool we have delivered."
                },
                {
                    question: "How do you ensure the confidentiality of our sensitive information?",
                    answer: "Confidentiality is the bedrock of our partnerships. We employ enterprise-grade security protocols, including encrypted communications and secure data environments. Adherence to a mutual NDA is a non-negotiable first step in our engagement process."
                }
            ]
        },
        {
            id: "billing",
            title: "Billing & Administrative",
            items: [
                {
                    question: "What is your fee structure?",
                    answer: "We operate on a fixed-fee project basis, quoted after the initial scoping. This provides you with cost certainty and aligns our focus entirely on delivering exceptional value and insight, not on tracking hours."
                },
                {
                    question: "How can I request an invoice or update billing information?",
                    answer: "All billing and administrative matters are handled by our finance team at ahmad@theoakworth.com."
                }
            ]
        }
    ]

    const toggleSection = (sectionId: string) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }))
    }

    const toggleItem = (itemIndex: number) => {
        setOpenItems(prev => ({
            ...prev,
            [itemIndex]: !prev[itemIndex]
        }))
    }

    // Generate unique IDs for all FAQ items
    let itemCounter = 0

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
                            FAQ
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl mx-auto px-4">
                            Frequently asked questions about our services and processes
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {faqSections.map((section) => (
                                <div key={section.id} className="border border-gray-200 rounded-lg">
                                    {/* Section Header */}
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between text-left transition-colors"
                                    >
                                        <h3 className="text-lg sm:text-xl font-semibold text-black">
                                            {section.title}
                                        </h3>
                                        {openSections[section.id] ? (
                                            <ChevronUp className="w-5 h-5 text-black" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-black" />
                                        )}
                                    </button>

                                    {/* Section Content */}
                                    {openSections[section.id] && (
                                        <div className="px-6 py-4 space-y-4">
                                            {section.items.map((item, itemIndex) => {
                                                const globalIndex = itemCounter++
                                                return (
                                                    <div key={itemIndex} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                                                        <button
                                                            onClick={() => toggleItem(globalIndex)}
                                                            className="w-full flex items-center justify-between text-left"
                                                        >
                                                            <h4 className="text-base sm:text-lg font-medium text-black pr-4">
                                                                {item.question}
                                                            </h4>
                                                            {openItems[globalIndex] ? (
                                                                <ChevronUp className="w-4 h-4 text-black flex-shrink-0" />
                                                            ) : (
                                                                <ChevronDown className="w-4 h-4 text-black flex-shrink-0" />
                                                            )}
                                                        </button>
                                                        {openItems[globalIndex] && (
                                                            <div className="mt-3 text-black leading-relaxed">
                                                                {item.answer}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}