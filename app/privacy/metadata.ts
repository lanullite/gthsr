import type { Metadata } from "next";

export const privacyMetadata: Metadata = {
  title: "Privacy Policy | The Oakworth Group",
  description: "Learn how The Oakworth Group collects, uses, and protects your personal information in accordance with our privacy policy.",
  keywords: "privacy policy, data protection, personal information, Oakworth Group, website privacy, user privacy, data security",
  alternates: {
    canonical: "https://theoakworth.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | The Oakworth Group",
    description: "Learn how The Oakworth Group collects, uses, and protects your personal information in accordance with our privacy policy.",
    url: "https://theoakworth.com/privacy",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | The Oakworth Group",
    description: "Learn how The Oakworth Group collects, uses, and protects your personal information in accordance with our privacy policy.",
    images: ["https://theoakworth.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
};