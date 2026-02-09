import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MockNotebook from "@/components/MockNotebook";
import MockAgentPanel from "@/components/MockAgentPanel";
import MockDashboard from "@/components/MockDashboard";
import LogoBar from "@/components/LogoBar";
import TronDivider from "@/components/TronDivider";
import SectionHeader from "@/components/SectionHeader";
import FeatureBlock from "@/components/FeatureBlock";
import MockSlack from "@/components/MockSlack";
import MockContextStudio from "@/components/MockContextStudio";
import TestimonialPair from "@/components/TestimonialPair";
import LovedBySection from "@/components/LovedBySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
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

        {/* A.D.A.M. System Showcase */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
            <MockNotebook />
            <div className="flex flex-col gap-5">
              <MockAgentPanel />
              <MockDashboard mini />
            </div>
          </div>
        </div>
      </div>

      <LogoBar />
      <TronDivider />

      {/* A.D.A.M. Features Section — full-width line grid */}
      <section className="relative">
        {/* Full-width line grid background */}
        <div className="line-grid line-grid-fade" />

        <div className="relative z-10 py-20 px-8 max-w-[1200px] mx-auto">
          <SectionHeader
            subtitle="A.D.A.M. handles the full client lifecycle — from onboarding to ongoing account management — with intelligent automation at every step."
          >
            The A.D.A.M.
            <br />
            <span className="font-serif font-light italic text-[1.2em]">
              automation pipeline
            </span>
          </SectionHeader>
        </div>

        {/* Feature Blocks */}
        <div className="relative z-10 px-8 max-w-[1200px] mx-auto pb-20">
          <FeatureBlock
            title="Client Onboarding & Questionnaire"
            description="Guided intake forms capture every detail. Clients tell us about themselves so we can tailor strategy from day one."
            linkText="Start onboarding"
            testimonial={{
              quote: "The onboarding process was seamless — we just filled in our details and A.D.A.M. handled the rest.",
              author: "Sarah M.",
              role: "Operations Director",
            }}
            label="Onboarding"
          >
            <MockNotebook compact />
          </FeatureBlock>

          <FeatureBlock
            title="Strategy & Proposal Generation"
            description="A.D.A.M. analyses intake data and generates a bespoke strategy deck and commercial proposal automatically."
            linkText="See how it works"
            testimonial={{
              quote: "What used to take our team 2 weeks to prepare, <strong>A.D.A.M. generates in minutes</strong> with impressive accuracy.",
              author: "Thomas K.",
              role: "Head of Business Development",
            }}
            label="Strategy & Proposals"
            reverse
          >
            <MockSlack />
          </FeatureBlock>

          {/* Leadership */}
          <TestimonialPair />

          <FeatureBlock
            title="Contract & Invoice Automation"
            description="Digital contracts are drafted, sent, and tracked. From milestone-based invoicing to recurring billing, financials are handled without manual intervention."
            linkText="Explore automation"
            testimonial={{
              quote: "E-signatures, versioning, and compliance tracking — all in one place. It's <strong>transformed how we manage contracts</strong>.",
              author: "Lisa R.",
              role: "Legal Operations Manager",
            }}
            label="Contracts & Invoicing"
          >
            <MockContextStudio />
          </FeatureBlock>

          <FeatureBlock
            title="Dashboard & Analytics"
            description="Real-time visibility into pipeline health, revenue forecasts, and engagement metrics. Follow-up communications are automated to keep client relationships active."
            linkText="View dashboard"
            testimonial={{
              quote: "The dashboard gives us <strong>instant visibility into every client relationship</strong> — no more spreadsheet chaos.",
              author: "Marco V.",
              role: "Managing Director",
            }}
            label="Analytics & Follow-ups"
            reverse
          >
            <MockDashboard />
          </FeatureBlock>
        </div>
      </section>

      <LovedBySection />
      <FaqSection />
      <IntegrationsSection />
      <TronDivider />
      <CtaSection />
      <Footer />
    </main>
  );
}
