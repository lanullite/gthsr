'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Linkedin, Facebook } from 'lucide-react'
import Image from 'next/image'

export const Footer = () => {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!email) return
        
        setIsSubmitting(true)
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            setIsSubscribed(true)
            setEmail('')
            console.log('Email subscribed:', email)
        } catch (error) {
            console.error('Subscription failed:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer className="bg-[#0A1F36] border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="border-b border-gray-200">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        
                        {/* Left Column - Logo, Social, Address */}
                        <div className="flex-1 max-w-md">
                            <div className="mb-6">
                                <Image
                                    src="/logof.png"
                                    alt="Oakworth Logo"
                                    width={90}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                            
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                <strong>The Oakworth Group</strong>
                            </p>

                            {/* Address */}
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                Address:<br></br> 5 Brayford Square,<br></br> London, United Kingdom,<br></br> E1 0SG
                            </p>
                            
                            {/* Social Icons */}
                            <div className="flex gap-3 mb-8">
                                <a 
                                    href="https://www.linkedin.com/company/the-oakworth-group/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4 text-[#0A1F36]" />
                                </a>
                                <a 
                                    href="https://x.com/theoakworth" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <svg className="w-4 h-4 text-[#0A1F36]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://web.facebook.com/people/The-Oakworth-Group/61582471520144/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <Facebook className="w-4 h-4 text-[#0A1F36]" />
                                </a>
                            </div>
                        </div>

                        {/* Middle Column - Newsletter Subscription */}
                        <div className="flex-1 max-w-md">
                            <h3 className="text-white font-light leading-tight mb-6 text-2xl">
                                Subscribe to our newsletter
                            </h3>
                            
                            {isSubscribed ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm leading-relaxed">
                                    <strong>Success!</strong> Thank you for subscribing to our newsletter.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={cn(
                                                "flex-1 px-4 py-2.5 border border-gray-300 focus:border-white focus:ring-1 focus:ring-white outline-none",
                                                "text-white placeholder-gray-400 text-sm bg-transparent rounded-none leading-relaxed"
                                            )}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={cn(
                                                "px-6 py-2.5 bg-white text-[#0A1F36] text-sm font-medium hover:bg-gray-100 transition-colors rounded-none leading-relaxed",
                                                isSubmitting && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Subscribe'}
                                        </button>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Right Column - Quick Links */}
                        <div className="flex-1">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm leading-relaxed">
                                <a href="/contact" className="text-white hover:underline whitespace-nowrap">Contact Us</a>
                                <a href="/faq" className="text-white hover:underline whitespace-nowrap">FAQ</a>
                                <a href="/global" className="text-white hover:underline whitespace-nowrap">Global Disclaimer</a>
                                <a href="/stand" className="text-white hover:underline whitespace-nowrap">Standards &amp; Regulations</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Links Row */}
                    <div className="mt-16 pt-8 border-t border-gray-700">
                        <div className="flex flex-wrap gap-6 text-sm text-gray-300 leading-relaxed">
                            <a href="/privacy" className="hover:text-white hover:underline">Privacy Policy</a>
                            <a href="/use" className="hover:text-white hover:underline">Terms of Use</a>
                            <a href="/cookie" className="hover:text-white hover:underline">Cookie Preferences</a>
                            <a href="/Acessibility" className="hover:text-white hover:underline">Accessibility</a>
                            <a href="/scam" className="hover:text-white hover:underline">Scam Warning</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-[#0A1F36]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300 leading-relaxed">
                        <div className="text-center md:text-left">
                            <p className="mb-2">
                                The Oakworth Group is a trade name of THEOAKWORTH PRIVATE&#160;LIMITED
                            </p>
                            <p>
                                &#169; 2026 THEOAKWORTH Incop. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
