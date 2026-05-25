import UnifiedQuestionnaireFlow from "@/components/questionnaire/UnifiedQuestionnaireFlow";

export const metadata = {
  title: "Submit Your Business Assessment | Andy'K Group",
  description:
    "Submit your business assessment to begin the End-to-End Business Development qualification process. Internally reviewed and selectively approved based on strategic fit.",
  openGraph: {
    title: "Submit Your Business Assessment | Andy'K Group",
    description:
      "Submit your business assessment to begin the End-to-End Business Development qualification process. Internally reviewed and selectively approved based on strategic fit.",
    url: "https://andykgroup.com/questionnaire",
  },
};

export default function QuestionnairePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="cartesian-grid" />
      <div className="relative z-10 py-16 px-6">
        <UnifiedQuestionnaireFlow />
      </div>
    </main>
  );
}
