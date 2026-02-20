import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import TronDivider from "@/components/TronDivider";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialPair from "@/components/TestimonialPair";
import PricingSection from "@/components/PricingSection";
import LovedBySection from "@/components/LovedBySection";
import FaqSection from "@/components/FaqSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { HeroBackground } from "@/components/BackgroundGrid";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://andykgroupinternational.com/#organization",
      name: "Andy'K Group International LTD",
      url: "https://andykgroupinternational.com",
      logo: {
        "@type": "ImageObject",
        url: "https://andykgroupinternational.com/full-logo.png",
      },
      description:
        "UK-based innovation company combining business intelligence, automation, and strategic outreach. Powering A.D.A.M. & E.V.A. operational automation systems.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "86-90 Paul Street",
        addressLocality: "London",
        postalCode: "EC2A 4NE",
        addressCountry: "GB",
      },
      email: "info@andykgroupinternational.com",
      telephone: "+44 330 027 1319",
      sameAs: ["https://www.linkedin.com/company/80971657/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://andykgroupinternational.com/#website",
      url: "https://andykgroupinternational.com",
      name: "Andy'K Group International",
      publisher: {
        "@id": "https://andykgroupinternational.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://andykgroupinternational.com/#webpage",
      url: "https://andykgroupinternational.com",
      name: "Andy'K Group International LTD | B2B & B2G Business Automation",
      isPartOf: {
        "@id": "https://andykgroupinternational.com/#website",
      },
      about: {
        "@id": "https://andykgroupinternational.com/#organization",
      },
      description:
        "Strategic partner in business automation & outreach. Powering the A.D.A.M. & E.V.A. systems for B2B lead generation, document automation, and government tender strategy.",
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBanner />
      <Navbar />

      {/* Hero area with background layers */}
      <div className="relative overflow-clip">
        <HeroBackground />
        <Hero />
      </div>

      <LogoBar />
      <TronDivider />

      {/* A.D.A.M. Roadmap Section */}
      <RoadmapSection />

      <TronDivider />

      {/* Founders */}
      <section className="relative pt-12 pb-14 px-8 max-w-[1200px] mx-auto">
        <TestimonialPair />
      </section>

      <TronDivider />

      {/* Pricing Plans */}
      <PricingSection />

      <TronDivider />

      <LovedBySection />
      <FaqSection />
      <IntegrationsSection />
      <ContactForm />
      <CtaSection />
      <Footer />
    </main>
  );
}
