import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  description:
    "How Andy'K Group designed a structured operations system for a physiotherapy clinic, integrating A.D.A.M. Healthcare.",
  alternates: { canonical: "/case-studies/healthcare" },
};

export default function HealthcareCaseStudyPage() {
  return <CaseStudyPage slug="healthcare" />;
}
