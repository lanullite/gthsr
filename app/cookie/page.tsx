import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CookiePolicy() {
    const sections = [
        {
            id: "what-are-cookies",
            title: "1. What Are Cookies?",
            content: `Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently, as well as to provide information to the website owners.

Cookies are not programs and cannot contain viruses or malware.`
        },
        {
            id: "how-why-we-use-cookies",
            title: "2. How & Why We Use Cookies",
            content: `As a premium financial services firm, our use of cookies is minimal and purposeful. We do not use cookies for intrusive advertising or extensive cross-site tracking. Our use is strictly limited to the following categories:

Essential Cookies:
Purpose: These cookies are critical for the basic functionality and security of our website. They enable core features such as page navigation, access to secure areas (e.g., client portals, if applicable), and network security.
Impact if Disabled: The website will not function properly without these cookies. They do not store any personally identifiable information.

Performance Cookies:
Purpose: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
Benefit to You: This data helps us ensure our site is a fast, efficient, and relevant resource for our clients and prospective partners.

Functionality Cookies (Preference):
Purpose: These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferred language or region. They may be set by us or by third-party providers whose services we have added to our pages (e.g., embedded webinars or maps).
Benefit to You: They provide a more personalized and seamless experience when navigating our site.

Targeting/Advertising Cookies:
Our Stance: We employ a highly selective and professional approach to targeting. We do not permit random banner ads or low-value promotional tracking.
Purpose: We may use these cookies, through platforms like LinkedIn, to deliver targeted professional content and firm announcements to a defined audience of senior finance professionals who have previously visited our site. This allows us to share relevant insights, such as white papers on LBO trends, with those who have demonstrated professional interest.`
        },
        {
            id: "specific-cookies",
            title: "3. The Specific Cookies We Use",
            content: `The table below details the cookies we use, their purpose, and their duration.`
        },
        {
            id: "your-control-choices",
            title: "4. Your Control & Choices",
            content: `You have full control over the use of cookies. You can manage your preferences at any time.

Our Cookie Consent Tool: When you first visit our website, you will be presented with a clear consent banner that allows you to accept or reject all non-essential cookies. You can revisit this choice at any time by clicking the "Cookie Preferences" link, which we will maintain in the website footer.

Browser Settings: You can set your web browser to refuse all or some cookies, or to alert you when websites set or access cookies. Please note that if you disable or refuse essential cookies, some parts of our website may become inaccessible or not function properly.

Browser Instructions:
• Chrome: Settings → Privacy and security → Cookies and other site data
• Firefox: Options → Privacy &amp; Security → Cookies and Site Data
• Safari: Preferences → Privacy → Cookies and website data
• Edge: Settings → Cookies and site permissions → Cookies and site data`
        },
        {
            id: "data-security",
            title: "5. Data Security & International Transfers",
            content: `Consistent with our core value of integrity, any data collected via cookies is protected by robust security measures. As an international firm, data collected may be processed on servers located outside your country of residence. We ensure that all such transfers are governed by appropriate legal safeguards, such as Standard Contractual Clauses approved by relevant regulatory bodies.`
        },
        {
            id: "policy-updates",
            title: "6. Policy Updates",
            content: `We may update this Policy from time to time to reflect changes in technology, regulation, or our services. We will do so by posting the new version on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.`
        },
        {
            id: "contact",
            title: "7. Contact Us",
            content: `If you have any questions about this Cookies Policy, please contact us at:

THEOAKWORTH PRIVATE LIMITED
Email: ahmad@theoakworth.com
Subject Line: Cookies Policy Inquiry`
        }
    ]

    const cookiesTable = [
        { name: "__cf_bm", provider: "Cloudflare", purpose: "Bot management and security for the network.", type: "Essential", duration: "30 minutes" },
        { name: "XSRF-TOKEN", provider: "Oakworth", purpose: "Security token to prevent Cross-Site Request Forgery attacks.", type: "Essential", duration: "Session" },
        { name: "oakworth_session", provider: "Oakworth", purpose: "To maintain your session state and authentication as you navigate the site.", type: "Essential", duration: "Session" },
        { name: "_ga", provider: "Google Analytics", purpose: "To distinguish unique users and generate anonymous statistical data on website usage.", type: "Performance", duration: "2 years" },
        { name: "_gid", provider: "Google Analytics", purpose: "To distinguish unique users for a 24-hour period.", type: "Performance", duration: "24 hours" },
        { name: "_gat", provider: "Google Analytics", purpose: "To throttle the request rate, limiting data collection on high-traffic sites.", type: "Performance", duration: "1 minute" },
        { name: "li_gc", provider: "LinkedIn", purpose: "To store guest consent regarding the use of cookies for non-essential purposes.", type: "Functionality", duration: "2 years" },
        { name: "UserMatchHistory", provider: "LinkedIn", purpose: "LinkedIn Ads ID syncing for ad targeting to a professional audience.", type: "Targeting", duration: "30 days" },
        { name: "AnalyticsSyncHistory", provider: "LinkedIn", purpose: "Used to track timing of visits for LinkedIn advertising analytics.", type: "Targeting", duration: "30 days" }
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
                            Cookies Policy
                        </h1>
                        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                            At The Oakworth Group, we believe in transparency, not just in our financial models, but in all our operations. This Cookies Policy explains what cookies are, how The Oakworth Group uses them on the website www.theoakworth.com, and your choices regarding their use.
                        </p>
                        <div className="bg-gray-50 border-l-4 border-[#0A1F36] p-4">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> 13th October 2025
                            </p>
                        </div>
                    </div>

                    {/* Cookies Content */}
                    <div className="prose prose-lg max-w-none">
                        {sections.map((section) => (
                            <section key={section.id} className="mb-12 last:mb-0">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                                    {section.title}
                                </h2>
                                
                                {section.id === "specific-cookies" ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Cookie Name</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Provider</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Purpose</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Type</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {cookiesTable.map((cookie, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50">
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900 border-b">{cookie.name}</td>
                                                        <td className="px-4 py-3 text-sm text-gray-600 border-b">{cookie.provider}</td>
                                                        <td className="px-4 py-3 text-sm text-gray-600 border-b">{cookie.purpose}</td>
                                                        <td className="px-4 py-3 text-sm border-b">
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                                cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                                                                cookie.type === 'Performance' ? 'bg-blue-100 text-blue-800' :
                                                                cookie.type === 'Functionality' ? 'bg-green-100 text-green-800' :
                                                                'bg-purple-100 text-purple-800'
                                                            }`}>
                                                                {cookie.type}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-600 border-b">{cookie.duration}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Bottom Notice */}
                    <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 text-center">
                            By using our website, you acknowledge that you have read, understood, and agree to be bound by this Cookies Policy.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}