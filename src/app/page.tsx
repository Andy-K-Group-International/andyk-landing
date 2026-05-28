import TopBanner from "@/components/TopBanner";
import AmbientMusic from "@/components/AmbientMusic";
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
import FaqQuestionsSection from "@/components/FaqQuestionsSection";
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
        "End-to-End Business Architecture & Operational Implementation. We eliminate operational chaos across onboarding, implementation, and lifecycle management. A.D.A.M. structures operations. Humans make strategic decisions.",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Development & Operating System Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "End-to-End Business Development",
              description:
                "Strategic business development architecture from foundation to scalable growth — aligning strategy, revenue, operations, and execution into one system.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Public Sector Expansion & Government Procurement Strategy",
              description:
                "B2G procurement intelligence, tender architecture, EU tender support, and consortium structuring for companies expanding into public markets.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "A.D.A.M. — Operational Implementation Platform",
              description:
                "Structured operational platform for proposals, contracts, client lifecycle management, and implementation delivery. A.D.A.M. structures operations. Humans make strategic decisions.",
            },
          },
        ],
      },
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
      name: "Andy'K Group | End-to-End Business Architecture & Operational Implementation",
      isPartOf: {
        "@id": "https://andykgroup.com/#website",
      },
      about: {
        "@id": "https://andykgroup.com/#organization",
      },
      description:
        "Andy'K Group designs and operates end-to-end operational implementation systems, public sector expansion strategies, and structured business architecture for growth-stage companies.",
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

      {/* A.D.A.M. & E.V.E. Flagship Systems */}
      <FlagshipSystems />

      <TronDivider />

      {/* How A.D.A.M. Works */}
      <RoadmapSection />

      <TronDivider />

      <ContactForm />
      <CtaSection />
      <TronDivider />
      <FaqQuestionsSection />
      <Footer />
      <AmbientMusic src="/audio/andyk-theme.wav" credit="DJ Andy'K" creditUrl="https://www.djandykofficial.com" />
    </main>
  );
}
