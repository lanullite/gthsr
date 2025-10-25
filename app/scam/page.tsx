import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft, AlertTriangle, Shield, Users, Copyright } from 'lucide-react'
import Link from 'next/link'

export default function Scam() {
    const sections = [
        {
            id: "intellectual-property",
            title: "1. Reporting Intellectual Property or Copyright Infringement",
            icon: Copyright,
            content: `The Oakworth Group vigorously protects its intellectual property, including its proprietary financial modeling methodologies, templates, and website content.

If you believe that our intellectual property rights have been infringed, or if you are a rights holder and believe your work has been used on our platforms without authorization, please notify our Legal Counsel immediately.

To Report: Please send a detailed email to legal@theoakworth.com with the subject line "IP Infringement Claim." Your report should include:

• A description of the copyrighted work you believe has been infringed.
• The URL or specific location on our platform where the material is located.
• Your contact information (address, telephone number, and email address).
• A statement by you, made under penalty of perjury, that the information provided is accurate and that you are the rights holder or authorized to act on their behalf.

We will investigate all legitimate claims promptly and take appropriate action.`
        },
        {
            id: "employee-misconduct",
            title: "2. Reporting Employee or Service Misconduct",
            icon: Users,
            content: `We hold every member of our team to a strict code of professional conduct. Unethical, unprofessional, or disrespectful behavior is incompatible with our values and is not tolerated.

If you have experienced or witnessed any form of misconduct by an employee or associate of The Oakworth Group, including but not limited to professional discourtesy, violation of confidentiality, or any form of harassment, we need to know.

To Report: Please contact our Head of Compliance at compliance@theoakworth.com with the subject line "Conduct Report." All reports will be treated with strict confidentiality, and we will conduct a thorough and impartial investigation.`
        },
        {
            id: "fraud-impersonation",
            title: "3. Reporting Fraud, Phishing, or Impersonation",
            icon: Shield,
            content: `IMPORTANT SECURITY ADVISORY: The Oakworth Group will never initiate contact via unsolicited public social media messaging (e.g., WhatsApp, Telegram, Facebook Messenger) to discuss business, request sensitive information, or demand payments.

We are aware that sophisticated actors may attempt to impersonate our firm or our employees to defraud or phish for sensitive information.`
        }
    ]

    const warningSigns = [
        "Unsolicited contact on personal messaging apps.",
        "Email addresses that slightly mimic ours (e.g., using @oak-worth.com instead of @theoakworth.com).",
        "Requests for upfront payments to a personal or non-corporate account.",
        "Pressure to act quickly or bypass official channels.",
        "Requests for highly sensitive data (e.g., bank details, passwords) outside of our secure client portals."
    ]

    const actionSteps = [
        "DO NOT respond, click any links, or open any attachments.",
        "DO NOT provide any personal or financial information.",
        "Preserve all communication (screenshots, emails, phone numbers).",
        "Immediately forward the suspicious communication to security@theoakworth.com with the subject line 'Impersonation Scam Report.'",
        "Include all relevant details in your report."
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
                            Reporting & Security Advisory
                        </h1>
                        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                            The Oakworth Group maintains the highest standards of ethical conduct and professional integrity. We take all reports concerning security, impersonation, or misconduct with the utmost seriousness.
                        </p>
                        <div className="bg-gray-50 border-l-4 border-[#0A1F36] p-4">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> 13th October 2025
                            </p>
                        </div>
                    </div>

                    {/* Security Advisory Alert */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold text-red-800 mb-2">
                                    Security Advisory
                                </h3>
                                <p className="text-red-700">
                                    The Oakworth Group will <strong>never</strong> initiate contact via unsolicited public social media messaging (e.g., WhatsApp, Telegram, Facebook Messenger) to discuss business, request sensitive information, or demand payments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reporting Sections */}
                    <div className="prose prose-lg max-w-none">
                        {sections.map((section) => (
                            <section key={section.id} className="mb-16 last:mb-0">
                                <div className="flex items-center gap-3 mb-6">
                                    <section.icon className="w-6 h-6 text-[#0A1F36]" />
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 m-0">
                                        {section.title}
                                    </h2>
                                </div>
                                
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>

                                {section.id === "fraud-impersonation" && (
                                    <div className="mt-8 space-y-8">
                                        {/* Warning Signs */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                                                Signs of an Impersonation Scam:
                                            </h3>
                                            <ul className="space-y-2">
                                                {warningSigns.map((sign, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                                                        <span className="text-gray-700">{sign}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Steps */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <Shield className="w-5 h-5 text-green-600" />
                                                If you are targeted or suspect an impersonation attempt:
                                            </h3>
                                            <ul className="space-y-3">
                                                {actionSteps.map((step, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className={`mt-1 flex-shrink-0 ${
                                                            step.startsWith('DO NOT') ? 'text-red-600 font-bold' : 'text-green-600'
                                                        }`}>
                                                            {step.startsWith('DO NOT') ? '✗' : '✓'}
                                                        </span>
                                                        <span className={`text-gray-700 ${
                                                            step.startsWith('DO NOT') ? 'font-medium text-red-700' : ''
                                                        }`}>
                                                            {step}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                                            <p className="text-blue-800 text-sm">
                                                <strong>Note:</strong> We will investigate all reports and take necessary legal action to shut down fraudulent entities. We also recommend reporting the incident to your local law enforcement authorities.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Commitment Section */}
                    <div className="mt-16 p-8 bg-gradient-to-r from-[#0A1F36] to-[#1a365d] rounded-lg text-white">
                        <div className="text-center">
                            <h3 className="text-2xl font-sans font-bold mb-4">Our Commitment</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                We thank you for your vigilance. Your partnership is essential in helping us maintain a secure and trustworthy environment. We are committed to addressing all legitimate reports in a swift, professional, and transparent manner.
                            </p>
                        </div>
                    </div>

                    {/* Quick Contact Reference */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Copyright className="w-5 h-5 text-[#0A1F36] mx-auto mb-2" />
                            <div className="font-semibold text-gray-900">IP Infringement</div>
                            <div className="text-gray-600">legal@theoakworth.com</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Users className="w-5 h-5 text-[#0A1F36] mx-auto mb-2" />
                            <div className="font-semibold text-gray-900">Misconduct</div>
                            <div className="text-gray-600">compliance@theoakworth.com</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <Shield className="w-5 h-5 text-[#0A1F36] mx-auto mb-2" />
                            <div className="font-semibold text-gray-900">Security</div>
                            <div className="text-gray-600">security@theoakworth.com</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}