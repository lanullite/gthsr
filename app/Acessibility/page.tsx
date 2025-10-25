import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Accessibility() {
    const sections = [
        {
            id: "our-commitment",
            title: "Our Commitment",
            content: `The Oakworth Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users of our digital presence, including our website at theoakworth.com.`
        },
        {
            id: "conformance-status",
            title: "Conformance Status",
            content: `We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and are internationally recognized.

Our efforts to achieve this standard are ongoing and include:

Structural Markup: Using headings, lists, and other structural elements to convey meaning and structure.

Text Alternatives: Providing alt text for meaningful images and non-text content.

Keyboard Navigation: Ensuring the site can be navigated and used effectively using a keyboard alone.

Color and Contrast: Maintaining sufficient color contrast between text and background to ensure readability.

Resizable Text: Allowing text to be resized without loss of content or functionality.`
        },
        {
            id: "compatibility",
            title: "Compatibility with Browsers and Assistive Technology",
            content: `Theoakworth.com is designed to be compatible with the following systems:

Screen Readers: Such as JAWS, NVDA, and VoiceOver.

Modern Browsers: Including the latest versions of Chrome, Firefox, Safari, and Edge.

Operating Systems: Including Windows, macOS, and iOS.`
        },
        {
            id: "technical-specifications",
            title: "Technical Specifications",
            content: `The accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:

• HTML
• WAI-ARIA
• CSS
• JavaScript`
        },
        {
            id: "limitations",
            title: "Limitations and Alternatives",
            content: `Despite our best efforts to ensure accessibility across the entire site, there may be some limitations. Please contact us if you observe an issue. In the meantime, we are committed to providing an alternative means of access.

For instance:

Third-Party Content: Some content on our site may be linked from or provided by third-party vendors outside of our control (e.g., embedded charts from data providers). We cannot guarantee the accessibility of this third-party content but will work with our partners to encourage it.

Complex Financial Models: While we strive to provide accessible summaries of our methodologies, the intricate, formula-driven nature of our proprietary financial models may present accessibility challenges within a web browser. We are happy to discuss the core principles and outputs of our work directly.`
        },
        {
            id: "feedback",
            title: "Feedback & Contact",
            content: `We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers or require assistance:

Email: accessibility@theoakworth.com
Subject Line: Website Accessibility Feedback

In your message, please specify:
• The nature of the accessibility issue.
• The web page (URL) where the issue was encountered.
• Your contact information.

We aim to respond to feedback within three (3) business days.`
        },
        {
            id: "formal-complaints",
            title: "Formal Complaints & Escalation",
            content: `Should you be dissatisfied with our response, we have established a formal escalation process managed by our compliance team. You can escalate your concern by contacting us at the email above with the subject line "Accessibility Escalation."`
        },
        {
            id: "assessment-approach",
            title: "Assessment Approach",
            content: `We assess our website's accessibility through a combination of methods, including:

• Self-evaluation using automated accessibility testing tools.
• Manual testing by our development team.
• Ongoing user experience reviews.

This statement was formally adopted on the "Last Updated" date listed above.`
        }
    ]

    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back to Home Button */}
                    <div className="mb-8 md:mb-12">
                        <Link 
                            href="/"
                            className="inline-flex items-center gap-2 text-[#0A1F36] hover:text-gray-700 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-4">
                            Accessibility Statement
                        </h1>
                        <div className="bg-gray-50 border-l-4 border-[#0A1F36] p-4 mb-8">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> 13th October 2025
                            </p>
                        </div>
                    </div>

                    {/* Accessibility Content */}
                    <div className="prose prose-lg max-w-none">
                        {sections.map((section) => (
                            <section key={section.id} className="mb-12 last:mb-0">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                                    {section.title}
                                </h2>
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Bottom Notice */}
                    <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 text-center">
                            The Oakworth Group is committed to providing an accessible and inclusive digital experience for all users.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}