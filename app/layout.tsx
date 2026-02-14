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
    default: "The Oakworth Group | Founder-Led Precision in Financial Modeling",
    template: "%s | The Oakworth Group",
  },
  description: "Founder-led financial modeling and advisory, transforming complex data into clarity and actionable insights for confident institutional decisions.",
  keywords: [
    "financial modeling services",
    "LBO modeling",
    "M&A modeling",
    "debt structuring advisory",
    "investment committee preparation",
    "founder-led advisory",
    "strategic finance",
    "clarity-driven analysis",
    "institutional decision support",
    "scenario modeling",
    "sensitivity analysis",
    "capital stack optimization",
    "operational insight",
  ].join(", "),
  authors: [{ name: "Arman Ahmad, The Oakworth Group" }],
  creator: "Arman Ahmad, The Oakworth Group",
  publisher: "The Oakworth Group",
  robots: { index: true, follow: true, nocache: false, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://theoakworthgroup.com" },
  openGraph: {
    title: "The Oakworth Group | Founder-Led Precision in Financial Modeling",
    description: "Founder-led advisory transforming complex financial models into clear, actionable insights for confident investment decisions.",
    url: "https://theoakworthgroup.com",
    siteName: "The Oakworth Group",
    images: [
      { url: "https://theoakworthgroup.com/og-image.jpg", width: 1200, height: 630, alt: "The Oakworth Group - Founder-Led Financial Modeling" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oakworth Group | Founder-Led Precision in Financial Modeling",
    description: "Founder-led advisory providing clarity, mentorship, and actionable insights in institutional financial decision-making.",
    images: ["https://theoakworthgroup.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
  verification: { google: "your-google-search-console-verification" },
  category: "financial services",
  classification: "founder-led financial advisory",
};

// Structured Data for Global Financial Service Entity
const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "The Oakworth Group",
  description: "Founder-led global financial modeling and advisory serving leading private equity firms and corporate institutions.",
  url: "https://theoakworthgroup.com",
  telephone: "+1-555-0100",
  areaServed: "Worldwide",
  availableLanguage: "English",
  serviceType: [
    "Financial Modeling",
    "LBO Analysis",
    "M&A Advisory",
    "Debt Structuring",
    "Investment Committee Preparation",
  ],
  provider: {
    "@type": "Organization",
    name: "The Oakworth Group",
    description: "Founder-led architectural standard in financial modeling for global financial institutions",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A1F36" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://theoakworthgroup.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
