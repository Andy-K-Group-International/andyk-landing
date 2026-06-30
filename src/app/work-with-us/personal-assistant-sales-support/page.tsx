import type { Metadata } from "next";
import RoleContent from "./_RoleContent";

export const metadata: Metadata = {
  title: "Personal Assistant & Sales Support — Independent Contractor",
  description:
    "Apply for the Personal Assistant & Sales Support independent contractor position at Andy'K Group International LTD. Remote role supporting operational and commercial activities.",
  alternates: { canonical: "/work-with-us/personal-assistant-sales-support" },
  openGraph: {
    title: "Personal Assistant & Sales Support | Andy'K Group",
    description:
      "Remote independent contractor position supporting the operational and commercial layer of Andy'K Group International LTD.",
  },
};

export default function PersonalAssistantPage() {
  return <RoleContent />;
}
