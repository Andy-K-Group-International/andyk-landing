import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implementation Philosophy",
  description:
    "Implementation-First Business Operations — Andy'K Group International LTD. How we eliminate operational chaos through structured implementation architecture, human-led strategy, and operational governance.",
  alternates: { canonical: "/implementation-philosophy" },
  openGraph: {
    title: "Implementation Philosophy | Andy'K Group International LTD",
    description:
      "Implementation-First Business Operations — how we eliminate operational chaos through structured implementation architecture, human-led strategy, and operational governance.",
  },
};

export default function ImplementationPhilosophyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[760px] mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>

        <div className="mb-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-rose-dark font-mono">
            Andy&apos;K Group International LTD
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 leading-[1.2]">
          Implementation{" "}
          <span className="font-serif font-light italic">Philosophy</span>
        </h1>

        <p className="text-lg text-muted font-light leading-relaxed mb-10">
          We are not a consultant firm. We are not a software vendor. We are an operational implementation architecture company — built to eliminate chaos and create structured, lasting operational clarity.
        </p>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-12 text-[15px] leading-relaxed text-muted">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Implementation-First Approach
            </h2>
            <p>
              Most business transformation efforts fail not because of bad strategy — but because of poor implementation. Plans are created, presentations are made, and then the organisation is left to figure out the rest alone. The chaos continues.
            </p>
            <p className="mt-3">
              Our philosophy starts from the opposite end. We do not advise and disappear. We design, structure, and implement — remaining embedded in the process until operational clarity is achieved. Every engagement is structured from day one with a clear implementation lifecycle: defined milestones, accountable checkpoints, and ongoing delivery oversight.
            </p>
            <p className="mt-3">
              This is what <strong className="text-foreground font-medium">implementation-first</strong> means: strategy only counts when it is operational.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              The Anti-Chaos Philosophy
            </h2>
            <p>
              Operational chaos is the silent killer of growing businesses. It appears in many forms: inconsistent onboarding, proposals sent without structure, contracts misaligned with delivery expectations, no clear lifecycle tracking, and client communication that depends entirely on individual relationships rather than systems.
            </p>
            <p className="mt-3">
              Our entire operating model is designed to eliminate this. We impose structure where there is fragmentation, create accountability where there is ambiguity, and build systems where there are workarounds. Every Andy&apos;K Group engagement is built around a single principle: <em className="text-foreground">operational clarity across every client engagement.</em>
            </p>
            <div className="mt-6 border-l-2 border-rose/30 pl-5 space-y-3">
              <div className="flex gap-3">
                <span className="text-rose-dark mt-0.5 shrink-0">·</span>
                <span>Structured onboarding from first contact to project launch</span>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-dark mt-0.5 shrink-0">·</span>
                <span>Defined milestones and delivery checkpoints across every engagement</span>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-dark mt-0.5 shrink-0">·</span>
                <span>Operational governance — not dependent on personal memory or heroics</span>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-dark mt-0.5 shrink-0">·</span>
                <span>Lifecycle visibility for clients and internal teams at all times</span>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Human + Operational AI Balance
            </h2>
            <p>
              A.D.A.M. structures operations. Humans make strategic decisions.
            </p>
            <p className="mt-3">
              This is not a slogan — it is our architectural principle. A.D.A.M. (our operational implementation platform) handles the systematic, repeatable work: document generation, proposal structuring, contract lifecycle, client onboarding flows, milestone tracking. It removes the cognitive overhead from operational execution.
            </p>
            <p className="mt-3">
              Strategic decisions — what direction to take, how to position the business, what relationships matter, how to respond to unexpected client needs — remain entirely with the humans involved. Our founders, our implementation leads, and our clients.
            </p>
            <p className="mt-3">
              We believe this balance is the only sustainable model for high-quality implementation at scale. Over-automating strategy creates brittle, impersonal engagements. Under-systematising operations creates chaos. We hold both in careful balance.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Structured Onboarding Lifecycle
            </h2>
            <p>
              Every Andy&apos;K Group engagement follows a structured six-step implementation lifecycle — from initial questionnaire to full project launch. This is not bureaucracy. It is the architecture that makes operational clarity possible.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "01", title: "Questionnaire", desc: "Structured intake — we learn your business, goals, and operational context." },
                { step: "02", title: "Proposal", desc: "Tailored proposal based on your specific needs, delivered through A.D.A.M." },
                { step: "03", title: "Contract", desc: "Full transparency, digital signature, no surprises." },
                { step: "04", title: "Strategy", desc: "Joint strategy session — every detail aligned before execution begins." },
                { step: "05", title: "Invoice", desc: "Automated, clear payment terms. Everything tracked in one place." },
                { step: "06", title: "Onboarding", desc: "Project launches with real-time updates, document sharing, and ongoing support." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="border border-grid-300 rounded-xl p-5 bg-white">
                  <span className="text-[10px] uppercase tracking-widest text-muted-2 font-mono block mb-1">Step {step}</span>
                  <h4 className="text-base font-semibold text-foreground mb-1">{title}</h4>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Operational Governance
            </h2>
            <p>
              Governance is not compliance paperwork. In our model, governance means that every decision, milestone, and deliverable has a defined owner, a defined timeline, and a defined review mechanism.
            </p>
            <p className="mt-3">
              E.V.A. (Execution &amp; Validation Architecture) — the operational delivery layer of A.D.A.M. — ensures that milestones are tracked, deliverables are validated, and client reporting is structured and consistent. Nothing falls through the cracks because the system itself prevents it.
            </p>
            <p className="mt-3">
              This is the operational governance model that growing businesses need — not ad-hoc follow-ups, not dependency on one person&apos;s memory, but structured lifecycle visibility from start to finish.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Selective Engagement — By Application Only
            </h2>
            <p>
              We do not work with every client who enquires. Strategic Implementation Partnerships are internally reviewed and selectively approved — based on strategic fit, operational scope, and long-term alignment.
            </p>
            <p className="mt-3">
              This is not exclusivity for its own sake. It is a quality control mechanism. Implementation requires deep integration with a business. We can only do that well when the engagement is right. Every approved engagement receives our full operational attention — not a fragmented share of it.
            </p>
            <p className="mt-3">
              If you are ready to eliminate operational chaos and build a structured implementation system, we invite you to apply.
            </p>
          </section>

        </article>

        <div className="mt-14 pt-10 border-t border-grid-300 flex flex-col sm:flex-row gap-4">
          <a
            href="https://adam.andykgroup.com/questionnaire"
            className="relative inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-foreground btn-primary-gradient"
          >
            <span className="relative z-10">Apply for Implementation</span>
          </a>
          <Link
            href="/what-is-adam"
            className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium border border-grid-300 hover:border-foreground/30 text-foreground transition-colors rounded-lg"
          >
            What is A.D.A.M. →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-grid-300">
          <p className="text-xs text-muted-2 font-mono">Andy&apos;K Group International LTD · Company No. 16453500</p>
          <p className="text-xs text-muted-2 font-mono">86–90 Paul Street, London, EC2A 4NE, United Kingdom</p>
        </div>
      </div>
    </main>
  );
}
