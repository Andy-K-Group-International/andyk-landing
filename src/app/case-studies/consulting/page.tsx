import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  description:
    "How Andy'K Group transformed an emotional consulting practice into a structured, scalable professional service.",
  alternates: { canonical: "/case-studies/consulting" },
};

export default function ConsultingCaseStudyPage() {
  return <CaseStudyPage slug="consulting" />;
}
