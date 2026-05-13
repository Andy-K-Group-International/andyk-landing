import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TronDivider from "@/components/TronDivider";
import FaqSection from "@/components/FaqSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialPair from "@/components/TestimonialPair";
import PricingSection from "@/components/PricingSection";
import CaseStudyCards from "@/components/CaseStudyCards";
import LovedBySection from "@/components/LovedBySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FlagshipSystems from "@/components/FlagshipSystems";
import { HeroBackground } from "@/components/BackgroundGrid";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://andykgroup.com/#organization",
      name: "Andy'K Group International LTD",
      url: "https://andykgroup.com",
      logo: {
        "@type": "ImageObject",
        url: "https://andykgroup.com/full-logo.png",
      },
      description:
        "UK-based strategic services company combining business development, operational architecture, and technology to help businesses scale with structure.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "86-90 Paul Street",
        addressLocality: "London",
        postalCode: "EC2A 4NE",
        addressCountry: "GB",
      },
      email: "info@andykgroup.com",
      telephone: "+44 330 027 1319",
      sameAs: ["https://www.linkedin.com/company/80971657/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://andykgroup.com/#website",
      url: "https://andykgroup.com",
      name: "Andy'K Group International LTD",
      publisher: {
        "@id": "https://andykgroup.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://andykgroup.com/#webpage",
      url: "https://andykgroup.com",
      name: "Andy'K Group International LTD | End-to-End Business Development & Growth Architecture",
      isPartOf: {
        "@id": "https://andykgroup.com/#website",
      },
      about: {
        "@id": "https://andykgroup.com/#organization",
      },
      description:
        "Strategic partner in end-to-end business development and growth architecture. Combining strategy, operations, and technology to help businesses scale.",
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[60px]">
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

      <TronDivider />

      {/* End-to-End Service Section */}
      <FaqSection />

      {/* Case Studies */}
      <CaseStudyCards />

      <TronDivider />

      {/* About */}
      <LovedBySection />

      <TronDivider />

      {/* Founders */}
      <section className="relative pt-12 pb-14 px-8 max-w-[1200px] mx-auto">
        <TestimonialPair />
      </section>

      <TronDivider />

      {/* Our Services */}
      <IntegrationsSection />

      <TronDivider />

      {/* Pricing Plans */}
      <PricingSection />

      <TronDivider />

      {/* A.D.A.M. & E.V.A. Flagship Systems */}
      <FlagshipSystems />

      <TronDivider />

      {/* How A.D.A.M. Works */}
      <RoadmapSection />

      <TronDivider />

      <ContactForm />
      <CtaSection />
      <Footer />
    </main>
  );
}
