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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
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
