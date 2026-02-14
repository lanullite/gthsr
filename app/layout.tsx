import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Oakworth Group | Founder-Led Precision in Financial Modeling",
    template: "%s | The Oakworth Group",
  },
  description:
    "Founder-led financial modeling and advisory, transforming complex data into clarity and actionable insights for confident institutional decisions.",
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://theoakworthgroup.com" },
  openGraph: {
    title: "The Oakworth Group | Founder-Led Precision in Financial Modeling",
    description:
      "Founder-led advisory transforming complex financial models into clear, actionable insights for confident investment decisions.",
    url: "https://theoakworthgroup.com",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworthgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group - Founder-Led Financial Modeling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oakworth Group | Founder-Led Precision in Financial Modeling",
    description:
      "Founder-led advisory providing clarity, mentorship, and actionable insights in institutional financial decision-making.",
    images: ["https://theoakworthgroup.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
  verification: { google: "your-google-search-console-verification" },
  category: "financial services",
  classification: "founder-led financial advisory",
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "The Oakworth Group",
  description:
    "Founder-led global financial modeling and advisory serving leading private equity firms and corporate institutions.",
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
    description:
      "Founder-led architectural standard in financial modeling for global financial institutions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(financialServiceSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
