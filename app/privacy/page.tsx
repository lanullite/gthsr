import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
    const sections = [
        {
            id: "introduction",
            title: "1. Introduction",
            content: `At The Oakworth Group, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.theoakworth.com, and any other services or platforms we may offer.

This Privacy Policy does not apply to information collected through third-party websites or services that we do not control or manage.`
        },
        {
            id: "information-we-collect",
            title: "2. Information We Collect",
            content: `We may collect information about you in a variety of ways:

Personal Information: Personally identifiable information, such as your name, email address, phone number, and any other information that you voluntarily provide to us when you contact us, subscribe to our newsletter, or otherwise communicate with us.

Derivative Information: Information our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our website.

Financial Information: When you engage our services, we may collect financial information necessary to provide our services, including but not limited to transaction details, investment preferences, and portfolio information. This information is collected and processed in accordance with the highest security standards.`
        },
        {
            id: "use-of-information",
            title: "3. Use of Your Information",
            content: `Having accurate information about our users is critical to our mission of providing exceptional financial services. We may use information collected about you via our website for the following purposes:

• To provide and maintain our services
• To send you information and updates about our services
• To respond to your inquiries and provide customer support
• To monitor and analyze usage and trends to improve your experience
• To detect, prevent, and address technical issues
• To protect against fraudulent, unauthorized, or illegal activity
• To comply with legal obligations and protect our rights
• To personalize your experience and deliver content relevant to your interests`
        },
        {
            id: "disclosure-of-information",
            title: "4. Disclosure of Your Information",
            content: `We may share information we have collected about you in certain situations:

• With service providers who perform services on our behalf
• With our affiliates and partners for business purposes
• In connection with a merger, acquisition, or sale of assets
• To comply with legal obligations or respond to lawful requests
• To protect our rights, property, or safety, and that of our users or the public
• With your consent or at your direction

We implement strict contractual and technical safeguards to ensure that any third parties with whom we share information maintain the same high standards of data protection.`
        },
        {
            id: "data-security",
            title: "5. Data Security",
            content: `We implement robust security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments and penetration testing
• Access controls and authentication procedures
• Employee training on data protection
• Secure data storage and processing environments

While we take reasonable steps to protect your information, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.`
        },
        {
            id: "data-retention",
            title: "6. Data Retention",
            content: `We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria we use to determine our retention periods include:

• The length of time we have an ongoing relationship with you
• Whether there is a legal obligation to retain the information
• Whether the information is necessary for the establishment, exercise or defense of legal claims`
        },
        {
            id: "your-rights",
            title: "7. Your Rights",
            content: `Depending on your location, you may have certain rights regarding your personal information:

• The right to access, update, or delete your personal information
• The right to rectification of inaccurate personal information
• The right to object to or restrict processing of your personal information
• The right to data portability
• The right to withdraw consent where processing is based on consent

To exercise these rights, please contact us using the contact information provided below. We will respond to your request in accordance with applicable law.`
        },
        {
            id: "cookies-and-tracking",
            title: "8. Cookies and Tracking Technologies",
            content: `We use cookies and similar tracking technologies to access or store information. For detailed information about our use of cookies and your choices regarding them, please see our Cookies Policy.`
        },
        {
            id: "third-party-websites",
            title: "9. Third-Party Websites",
            content: `Our website may contain links to third-party websites. These websites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to review the privacy policies of any third-party websites you visit.`
        },
        {
            id: "children-privacy",
            title: "10. Children's Privacy",
            content: `Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.`
        },
        {
            id: "policy-changes",
            title: "11. Changes to This Privacy Policy",
            content: `We may update this Privacy Policy from time to time in response to changing legal, technical, or business developments. When we update our Privacy Policy, we will take appropriate measures to inform you, consistent with the significance of the changes we make. We will obtain your consent to any material Privacy Policy changes if and where this is required by applicable data protection laws.`
        },
        {
            id: "contact-us",
            title: "12. Contact Us",
            content: `If you have questions or comments about this Privacy Policy, please contact us at:

THEOAKWORTH PRIVATE LIMITED
Email: privacy@theoakworth.com
Subject Line: Privacy Policy Inquiry`
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
                            className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-black mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-black mb-6 max-w-3xl mx-auto">
                            At The Oakworth Group, we believe in transparency and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
                        </p>
                        <div className="bg-gray-50 border-l-4 border-[#0A1F36] p-4">
                            <p className="text-sm text-black">
                                <strong>Last Updated:</strong> 13th October 2025
                            </p>
                        </div>
                    </div>

                    {/* Privacy Content */}
                    <div className="prose prose-lg max-w-none">
                        {sections.map((section) => (
                            <section key={section.id} className="mb-12 last:mb-0">
                                <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6">
                                    {section.title}
                                </h2>
                                <div className="text-black leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Bottom Notice */}
                    <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm text-black text-center">
                            By using our website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}