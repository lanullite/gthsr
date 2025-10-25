import type { Metadata } from "next";

export const termsMetadata: Metadata = {
  title: "Terms of Use | The Oakworth Group",
  description: "Review the terms of use for The Oakworth Group website, including intellectual property rights, user representations, prohibited activities, and limitations of liability.",
  keywords: "terms of use, legal terms, Oakworth Group, website terms, intellectual property, user representations, prohibited activities, liability limitations",
  alternates: {
    canonical: "https://theoakworth.com/use",
  },
  openGraph: {
    title: "Terms of Use | The Oakworth Group",
    description: "Review the terms of use for The Oakworth Group website, including intellectual property rights, user representations, prohibited activities, and limitations of liability.",
    url: "https://theoakworth.com/use",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group Terms of Use",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | The Oakworth Group",
    description: "Review the terms of use for The Oakworth Group website, including intellectual property rights, user representations, prohibited activities, and limitations of liability.",
    images: ["https://theoakworth.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
};