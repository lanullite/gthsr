import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Oakworth Group | Architectural Standard in Financial Modeling",
    template: "%s | The Oakworth Group"
  },
  description: "The Oakworth Group delivers precision-engineered financial modeling and strategic advisory for the world's leading private equity firms and corporate institutions.",
  keywords: [
    // Core Service Keywords - Global Elite Focus
    "financial modeling services", "LBO modeling", "M&A modeling", "debt structuring advisory", 
    "investment committee preparation", "leveraged buyout analysis", "private equity modeling",
    "capital stack optimization", "financial due diligence", "acquisition modeling",
    
    // Authority & Brand Keywords
    "premium financial modeling", "institutional-grade analysis", "financial modeling for private equity",
    "strategic finance advisory", "definitive financial analysis", "precision financial engineering",
    "global financial advisory", "elite financial modeling", "sophisticated financial analysis",
    
    // Technical Excellence Keywords
    "financial model architecture", "scenario analysis", "sensitivity testing", "IRR optimization",
    "MOIC calculation", "equity waterfall modeling", "debt capacity analysis", "covenant modeling",
    "transaction advisory", "merger modeling", "acquisition finance", "leveraged finance",
    
    // Client-Focused Outcomes
    "investment conviction", "capital decision certainty", "board approval ready", 
    "investment committee confidence", "definitive deal analysis", "strategic capital allocation",
    
    // Global Authority Positioning
    "financial modeling excellence", "quantitative finance authority", "financial engineering mastery",
    "analytical precision", "zero-defect financial models", "bulletproof financial analysis"
  ].join(", "),
  
  authors: [{ name: "The Oakworth Group" }],
  creator: "The Oakworth Group",
  publisher: "The Oakworth Group",
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  alternates: {
    canonical: "https://theoakworthgroup.com",
  },
  
  // Global Business Entity Schema - No Local Constraints
  openGraph: {
    title: "The Oakworth Group | Architectural Standard in Financial Modeling",
    description: "Precision-engineered financial modeling and strategic advisory for the world's leading private equity firms and corporate institutions.",
    url: "https://theoakworthgroup.com",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworthgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group - Architectural Standard in Financial Modeling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "The Oakworth Group | Architectural Standard in Financial Modeling",
    description: "Precision-engineered financial modeling for the world's leading financial institutions.",
    images: ["https://theoakworthgroup.com/twitter-image.jpg"],
    creator: "@oakworthgroup",
  },
  
  // Global Verification - No Local Business Listings
  verification: {
    google: "your-google-search-console-verification",
  },
  
  // Additional Global SEO Optimizations
  category: "financial services",
  classification: "financial modeling advisory",
};

// Structured Data for Global Financial Service Entity
const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "The Oakworth Group",
  "description": "Global financial modeling and strategic advisory firm serving leading private equity firms and corporate institutions worldwide.",
  "url": "https://theoakworthgroup.com",
  "telephone": "+1-555-0100", // Global contact number format
  "areaServed": "Worldwide",
  "availableLanguage": "English",
  "serviceType": [
    "Financial Modeling",
    "LBO Analysis", 
    "M&A Advisory",
    "Debt Structuring",
    "Investment Committee Preparation"
  ],
  "provider": {
    "@type": "Organization",
    "name": "The Oakworth Group",
    "description": "Architectural standard in financial modeling for global financial institutions"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Performance & Global Delivery Optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A1F36" />
        
        {/* Global CDN Preconnects for Maximum Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://theoakworthgroup.com" />
        
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Security Headers would be configured in next.config.js or hosting platform */}
        
        {/* Structured Data for Global Entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
        />
        
        {/* Additional Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//theoakworthgroup.com" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}