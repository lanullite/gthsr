import type { Metadata } from "next";
import CertaintyProtocol from "@/components/Feature/Features";
import { ConfidentialInquiry } from "@/components/Firm/Firm";
import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/Header/navbar";
import { Hero } from "@/components/Landing-Page/Hero";
import Service  from "@/components/Services/page";

export const metadata: Metadata = {
  title: "The Oakworth Group | Financial Modeling & Private Equity Advisory",
  description: "The Oakworth Group provides expert financial modeling, LBO analysis, debt structuring, and investment advisory services for private equity firms and corporations. Specializing in leveraged buyout modeling, capital structure optimization, and strategic financial analysis.",
  keywords: "financial modeling, private equity, leveraged buyout, LBO modeling, investment analysis, capital structure, debt structuring, financial advisory, corporate finance, equity valuation",
  openGraph: {
    title: "The Oakworth Group | Financial Modeling & Private Equity Advisory",
    description: "Expert financial modeling, LBO analysis, debt structuring, and investment advisory services for private equity firms and corporations.",
    url: "https://theoakworth.com",
    siteName: "The Oakworth Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Oakworth Group - Financial Modeling Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home(){
  return(
    <>
    <div>
      <Navbar/>
      <section id="home">
        <Hero/>
      </section>
      <section id="approach">
        <CertaintyProtocol/>
      </section>
      <section id="service">
        <Service/>
      </section>
      <section id="contact">
        <ConfidentialInquiry/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
    </>
  )
}