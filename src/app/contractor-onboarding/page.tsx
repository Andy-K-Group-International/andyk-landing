import type { Metadata } from "next";
import OnboardingContent from "./_OnboardingContent";

export const metadata: Metadata = {
  title: "Contractor Onboarding",
  description:
    "Structured onboarding process for new Andy'K Group independent contractors — from application to active engagement.",
  alternates: { canonical: "/contractor-onboarding" },
  robots: { index: false, follow: false },
};

export default function ContractorOnboardingPage() {
  return <OnboardingContent />;
}
