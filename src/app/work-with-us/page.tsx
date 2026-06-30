import type { Metadata } from "next";
import WorkWithUsContent from "./_WorkWithUsContent";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Andy'K Group International LTD collaborates with highly structured, self-directed independent contractors. View open contractor positions and apply.",
  alternates: { canonical: "/work-with-us" },
  openGraph: {
    title: "Work With Us | Andy'K Group International LTD",
    description:
      "We collaborate with highly structured, self-directed independent contractors — operational partners who take ownership of their work.",
  },
};

export default function WorkWithUsPage() {
  return <WorkWithUsContent />;
}
