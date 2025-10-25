import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
    const sections = [
        {
            id: "agreement",
            title: "AGREEMENT TO OUR LEGAL TERMS",
            content: `These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you," "your," or "User"), and THEOAKWORTH PRIVATE LIMITED (doing business as "The Oakworth Group"), collectively referred to as "Company," "we," "us," or "our", concerning your access to and use of the theoakworth.com website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").

You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.

We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms. It is your responsibility to periodically review these Legal Terms to stay informed of updates.

The Site is intended for users who are at least 18 years old. If you are under the age of 18, you are not permitted to use the Site.`
        },
        {
            id: "intellectual-property",
            title: "1. INTELLECTUAL PROPERTY RIGHTS",
            content: `Unless otherwise indicated, the Site is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, graphics, and the financial modeling methodologies, frameworks, and templates displayed or described on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.

The Marks: "The Oakworth Group", "Oakworth", "THEOAKWORTH," our logo, and all related names, logos, product and service names, designs, and slogans are trademarks of THEOAKWORTH PRIVATE LIMITED or its affiliates or licensors. You must not use such marks without our prior written permission.

You are granted a limited, non-exclusive, non-transferable, and non-sublicensable license to access and use the Site and Content for your internal, non-commercial use only. No Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever without our express prior written permission.`
        },
        {
            id: "user-representations",
            title: "2. USER REPRESENTATIONS",
            content: `By using the Site, you represent and warrant that:
(1) you have the legal capacity and agree to comply with these Legal Terms;
(2) you are not a minor in the jurisdiction in which you reside;
(3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;
(4) you will not use the Site for any illegal or unauthorized purpose;
(5) your use of the Site will not violate any applicable law or regulation.`
        },
        {
            id: "prohibited-activities",
            title: "3. PROHIBITED ACTIVITIES",
            content: `You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

As a user of the Site, you agree not to:
• Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory.
• Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.
• Circumvent, disable, or otherwise interfere with security-related features of the Site.
• Engage in unauthorized framing of or linking to the Site.
• Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information.
• Use the Site to compete with us or to develop a competing service or product.
• Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.
• Bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.`
        },
        {
            id: "site-management",
            title: "4. SITE MANAGEMENT",
            content: `We reserve the right, but not the obligation, to:
(1) monitor the Site for violations of these Legal Terms;
(2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms;
(3) refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions;
(4) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.`
        },
        {
            id: "privacy-policy",
            title: "5. PRIVACY POLICY",
            content: `We care about data privacy and security. Please review our Privacy Policy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.`
        },
        {
            id: "term-termination",
            title: "6. TERM AND TERMINATION",
            content: `These Legal Terms shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE TO ANY PERSON FOR ANY REASON OR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.`
        },
        {
            id: "modifications-interruptions",
            title: "7. MODIFICATIONS AND INTERRUPTIONS",
            content: `We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.`
        },
        {
            id: "governing-law",
            title: "8. GOVERNING LAW",
            content: `These Legal Terms and your use of the Site are governed by and construed in accordance with the laws of the Security Exchange Commission Pakistan (SECP) of the Islamic Republic of Pakistan, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Pakistan for the resolution of any dispute related to these Terms or the Site.`
        },
        {
            id: "disclaimer",
            title: "9. DISCLAIMER",
            content: `THE SITE AND ITS CONTENT ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.

THE INFORMATION, MODELS, AND ANALYTICAL FRAMEWORKS PRESENTED ON THIS SITE ARE FOR INFORMATIONAL AND ILLUSTRATIVE PURPOSES ONLY. NOTHING ON THIS SITE CONSTITUTES FINANCIAL, INVESTMENT, LEGAL, OR TAX ADVICE. THE OAKWORTH GROUP PROVIDES PROFESSIONAL FINANCIAL MODELING SERVICES UNDER SEPARATE, FORMAL ENGAGEMENT LETTERS. THE CONTENT ON THIS SITE DOES NOT CREATE A CLIENT-CONSULTANT RELATIONSHIP.`
        },
        {
            id: "limitations-liability",
            title: "10. LIMITATIONS OF LIABILITY",
            content: `IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, INCIDENTAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR RELIANCE ON ANY CONTENT THEREIN, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`
        },
        {
            id: "indemnification",
            title: "11. INDEMNIFICATION",
            content: `You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the Site, breach of these Legal Terms, or violation of any law or the rights of a third party.`
        },
        {
            id: "user-data",
            title: "12. USER DATA",
            content: `We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.`
        },
        {
            id: "contact",
            title: "13. CONTACT US",
            content: `In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:

THEOAKWORTH PRIVATE LIMITED
Email: legal@theoakworth.com
Subject Line: Terms of Use Inquiry`
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
                            Terms of Use
                        </h1>
                        <div className="bg-gray-50 border-l-4 border-[#0A1F36] p-4 mb-8">
                            <p className="text-sm text-black">
                                <strong>Last Updated:</strong> 13th October 2025
                            </p>
                        </div>
                    </div>

                    {/* Terms Content */}
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
                            By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}