import type { Metadata } from "next";
import HealthcareCaseStudy from "@/components/HealthcareCaseStudy";

export const metadata: Metadata = {
  title: "Healthcare Digitalization | Case Study",
  description:
    "How Andy'K Group designed a structured operations system for a physiotherapy clinic — integrating patient management, scheduling, documentation, and billing into one unified digital workflow.",
  alternates: { canonical: "/case-studies/healthcare" },
  openGraph: {
    title: "Healthcare Digitalization | Andy'K Group Case Study",
    description:
      "How Andy'K Group designed a structured operations system for a physiotherapy clinic — integrating patient management, scheduling, documentation, and billing into one unified digital workflow.",
    url: "https://andykgroup.com/case-studies/healthcare",
  },
};

export default function HealthcareCaseStudyPage() {
  return <HealthcareCaseStudy />;
}
