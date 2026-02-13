'use client'

import { useState } from 'react'
import { Footer } from "@/components/Footer/footer"
import { Navbar } from "@/components/Header/navbar"
import { Mail, Copy, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

    const contactMethods = [
        {
            title: "Proposals & Inquiry",
            email: "proposals@theoakworth.com",
            description: "Submit project proposals and business opportunities",
            color: "#0A1F36"
        },
        {
            title: "Contact Agent",
            email: "arman.ahmad@theoakworth.com",
            description: "For general questions and direct communication",
            color: "#0A1F36"
        },
        {
            title: "Emergency Support",
            email: "emergency@theoakworth.com",
            description: "24/7 dedicated line for urgent client matters",
            color: "#0A1F36"
        }
    ]

    const copyToClipboard = async (email: string) => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(email)
            } else {
                const textArea = document.createElement('textarea')
                textArea.value = email
                textArea.style.position = 'fixed'
                textArea.style.left = '-999999px'
                textArea.style.top = '-999999px'
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()
                document.execCommand('copy')
                document.body.removeChild(textArea)
            }
            
            setCopiedEmail(email)
            setTimeout(() => setCopiedEmail(null), 2000)
        } catch (err) {
            console.error('Failed to copy email: ', err)
            alert(`Please copy this email: ${email}`)
        }
    }

    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-white pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Back to Home Button */}
                    <div className="mb-12">
                        <Link 
                            href="/"
                            className="inline-flex items-center gap-2 text-black font-medium text-base"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-sans font-bold text-black mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                            Get in touch with the right team at Theoakworth
                        </p>
                    </div>

                    {/* Contact Methods Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                        {contactMethods.map((method, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center text-center p-8 border border-gray-200 bg-white"
                            >
                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-black mb-3">
                                    {method.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-sm text-black mb-6 flex-grow">
                                    {method.description}
                                </p>

                                {/* Email and Actions */}
                                <div className="flex flex-col items-center justify-center gap-4 mb-6 w-full">
                                    <span className="font-mono text-black text-base break-all">
                                        {method.email}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => copyToClipboard(method.email)}
                                            className="p-3 border border-gray-300 text-black"
                                            title="Copy email address"
                                        >
                                            {copiedEmail === method.email ? (
                                                <Check className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <Copy className="w-5 h-5 text-black" />
                                            )}
                                        </button>
                                        <a
                                            href={`mailto:${method.email}`}
                                            className="p-3 border border-gray-300 text-black"
                                            title="Send email"
                                        >
                                            <Mail className="w-5 h-5 text-black" />
                                        </a>
                                    </div>
                                </div>

                                {/* Send Email Button */}
                                <a
                                    href={`mailto:${method.email}`}
                                    className="py-3 px-6 font-medium text-white w-full max-w-xs text-center no-underline flex items-center justify-center gap-2 text-base"
                                    style={{ backgroundColor: method.color }}
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Email
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Response Times */}
                    <div className="text-center max-w-4xl mx-auto mt-12">
                        <h3 className="text-xl font-semibold text-black mb-4">
                            Response Times
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-black text-sm">
                            <div className="flex items-center gap-1">
                                <span className="text-black">•</span>
                                <span className="text-black">General Inquiries: 2-4 Business Days</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-black">•</span>
                                <span className="text-black">Proposals: 2-3 Business Days</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-black">•</span>
                                <span className="text-black">Emergency Support: 24 Hours</span>
                            </div>
                        </div>
                    </div>

                    {/* Success Message for Copy */}
                    {copiedEmail && (
                        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-base z-50">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4" />
                                <span>Email copied to clipboard!</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <Footer />
        </>
    )
}