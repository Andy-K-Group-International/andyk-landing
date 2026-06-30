import type { Metadata } from "next";
import DocumentsContent from "./_DocumentsContent";

export const metadata: Metadata = {
  title: "Contractor Documents",
  description:
    "Official contractor documents for Andy'K Group International LTD independent contractors — agreements, policies, and operational references.",
  alternates: { canonical: "/contractor-documents" },
  robots: { index: false, follow: false },
};

export default function ContractorDocumentsPage() {
  return <DocumentsContent />;
}
