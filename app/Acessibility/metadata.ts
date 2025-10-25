import type { Metadata } from "next";

export const accessibilityMetadata: Metadata = {
  title: "Accessibility Statement | The Oakworth Group",
  description: "The Oakworth Group is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility standards and how we provide equal access to all users.",
  keywords: "accessibility, accessibility statement, digital accessibility, WCAG compliance, website accessibility, Oakworth Group, inclusive design, assistive technology",
  alternates: {
    canonical: "https://theoakworth.com/accessibility",
  },
  openGraph: {
    title: "Accessibility Statement | The Oakworth Group",
    description: "The Oakworth Group is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility standards and how we provide equal access to all users.",
    url: "https://theoakworth.com/accessibility",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group Accessibility Statement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | The Oakworth Group",
    description: "The Oakworth Group is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility standards and how we provide equal access to all users.",
    images: ["https://theoakworth.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
};