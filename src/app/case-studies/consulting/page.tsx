import type { Metadata } from "next";
import ConsultingCaseStudy from "@/components/ConsultingCaseStudy";

export const metadata: Metadata = {
  title: "Consulting Professionalization | Case Study",
  description:
    "How Andy'K Group transformed a founder-led consulting practice into a structured, scalable professional service — with standardized delivery, proposal architecture, and operational frameworks.",
  alternates: { canonical: "/case-studies/consulting" },
  openGraph: {
    title: "Consulting Professionalization | Andy'K Group Case Study",
    description:
      "How Andy'K Group transformed a founder-led consulting practice into a structured, scalable professional service — with standardized delivery, proposal architecture, and operational frameworks.",
    url: "https://andykgroup.com/case-studies/consulting",
  },
};

export default function ConsultingCaseStudyPage() {
  return <ConsultingCaseStudy />;
}
