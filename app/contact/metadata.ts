import type { Metadata } from "next";

export const contactMetadata: Metadata = {
  title: "Contact Us | The Oakworth Group",
  description: "Get in touch with The Oakworth Group for financial modeling, private equity advisory, LBO analysis, and investment advisory services.",
  keywords: "contact us, Oakworth Group, financial modeling contact, private equity advisory, LBO analysis, investment advisory, corporate finance contact",
  alternates: {
    canonical: "https://theoakworth.com/contact",
  },
  openGraph: {
    title: "Contact Us | The Oakworth Group",
    description: "Get in touch with The Oakworth Group for financial modeling, private equity advisory, LBO analysis, and investment advisory services.",
    url: "https://theoakworth.com/contact",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact The Oakworth Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | The Oakworth Group",
    description: "Get in touch with The Oakworth Group for financial modeling, private equity advisory, LBO analysis, and investment advisory services.",
    images: ["https://theoakworth.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
};