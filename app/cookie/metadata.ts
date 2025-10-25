import type { Metadata } from "next";

export const cookieMetadata: Metadata = {
  title: "Cookies Policy | The Oakworth Group",
  description: "Learn about how The Oakworth Group uses cookies on our website, including essential, performance, functionality, and targeting cookies.",
  keywords: "cookies policy, cookie policy, website cookies, Oakworth Group, data privacy, online privacy, cookie consent, web tracking",
  alternates: {
    canonical: "https://theoakworth.com/cookie",
  },
  openGraph: {
    title: "Cookies Policy | The Oakworth Group",
    description: "Learn about how The Oakworth Group uses cookies on our website, including essential, performance, functionality, and targeting cookies.",
    url: "https://theoakworth.com/cookie",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "https://theoakworth.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group Cookies Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | The Oakworth Group",
    description: "Learn about how The Oakworth Group uses cookies on our website, including essential, performance, functionality, and targeting cookies.",
    images: ["https://theoakworth.com/twitter-image.jpg"],
    creator: "@theoakworth",
  },
};