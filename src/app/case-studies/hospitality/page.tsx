import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  description:
    "How Andy'K Group built a full digital operating system for a hospitality group — from strategy to execution.",
  alternates: { canonical: "/case-studies/hospitality" },
};

export default function HospitalityCaseStudyPage() {
  return <CaseStudyPage slug="hospitality" />;
}
