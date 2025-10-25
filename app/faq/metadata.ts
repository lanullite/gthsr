import type { Metadata } from "next";

export const faqMetadata: Metadata = {
  title: "FAQ | The Oakworth Group",
  description: "Frequently asked questions about The Oakworth Group's financial modeling services, private equity advisory, engagement process, and client support.",
  keywords: "FAQ, frequently asked questions, Oakworth Group, financial modeling, private equity advisory, client support, engagement process, billing",
  alternates: {
    canonical: "https://theoakworth.com/faq",
  },
  openGraph: {
    title: "FAQ | The Oakworth Group",
    description: "Frequently asked questions about The Oakworth Group's financial modeling services, private equity advisory, engagement process, and client support.",
    url: "https://theoakworth.com/faq",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | The Oakworth Group",
    description: "Frequently asked questions about The Oakworth Group's financial modeling services, private equity advisory, engagement process, and client support.",
    images: ["https://theoakworth.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
};