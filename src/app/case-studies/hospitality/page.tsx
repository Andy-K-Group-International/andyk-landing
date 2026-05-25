import type { Metadata } from "next";
import HospitalityCaseStudy from "@/components/HospitalityCaseStudy";

export const metadata: Metadata = {
  title: "Hospitality Operating System | Case Study",
  description:
    "How Andy'K Group designed and implemented a full digital operating system for a hospitality group — restructuring operations, integrating systems, and unifying management across all properties.",
  alternates: { canonical: "/case-studies/hospitality" },
  openGraph: {
    title: "Hospitality Operating System | Andy'K Group Case Study",
    description:
      "How Andy'K Group designed and implemented a full digital operating system for a hospitality group — restructuring operations, integrating systems, and unifying management across all properties.",
    url: "https://andykgroup.com/case-studies/hospitality",
  },
};

export default function HospitalityCaseStudyPage() {
  return <HospitalityCaseStudy />;
}
