import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is A.D.A.M.",
  description:
    "What is A.D.A.M. — AI-Powered Business Operating System by Andy'K Group International LTD. A.D.A.M. structures operations so humans can focus on strategic decisions. Structured implementation lifecycle, client management, and operational delivery.",
  alternates: { canonical: "/what-is-adam" },
  openGraph: {
    title: "What is A.D.A.M. | Andy'K Group International LTD",
    description:
      "A.D.A.M. is an operational implementation platform — not a generic AI tool. It structures the implementation lifecycle so humans can focus on what matters: strategic decisions.",
  },
};

export default function WhatIsAdamPage() {
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
            A.D.A.M. — Andy&apos;K Group International LTD
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 leading-[1.2]">
          What is{" "}
          <span className="font-serif font-light italic">A.D.A.M.?</span>
        </h1>

        <p className="text-lg text-muted font-light leading-relaxed mb-10">
          A.D.A.M. is not an AI chatbot. It is not a generic automation tool. It is the operational implementation platform built by Andy&apos;K Group to structure the full client lifecycle — from first contact to delivery completion.
        </p>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-12 text-[15px] leading-relaxed text-muted">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              The Name
            </h2>
            <p>
              A.D.A.M. stands for <strong className="text-foreground font-medium">Automated Document &amp; Account Manager</strong> — but the name captures only a fraction of what it does.
            </p>
            <p className="mt-3">
              In practice, A.D.A.M. is the operational backbone of every Andy&apos;K Group engagement. It handles the systematic, structured work that would otherwise consume operational bandwidth: document generation, proposal architecture, contract management, invoicing, onboarding flows, and client lifecycle tracking.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              What A.D.A.M. Actually Does
            </h2>
            <p>
              Every Andy&apos;K Group client goes through a structured six-step implementation lifecycle inside A.D.A.M. From the moment a questionnaire is submitted, the system structures the engagement — generating proposals, managing contracts, tracking milestones, and delivering reporting.
            </p>
            <div className="mt-5 space-y-3">
              {[
                { title: "Proposal Architecture", desc: "A.D.A.M. generates tailored proposals based on structured questionnaire inputs. No generic templates — each proposal reflects the specific business context." },
                { title: "Contract Lifecycle Management", desc: "Digital contract review, commenting, and signing. Full transparency. All documentation stored and structured in one place." },
                { title: "Client Onboarding Flows", desc: "Structured onboarding sequences that ensure every client starts their engagement correctly — with all information, expectations, and deliverables clearly defined." },
                { title: "Milestone & Delivery Tracking", desc: "Every project milestone is tracked, every deliverable has an owner. Nothing falls through the cracks because the system enforces accountability." },
                { title: "Automated Invoicing", desc: "Clear, automated invoicing with defined payment terms — removing the ambiguity that causes operational friction in client relationships." },
                { title: "Performance Reporting", desc: "Structured reporting and operational intelligence — giving both clients and internal teams clear visibility into project status at all times." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 p-5 border border-grid-300 rounded-xl bg-white">
                  <span className="text-rose-dark mt-0.5 shrink-0 text-lg leading-none">·</span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
                    <p className="text-sm text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              A.D.A.M. Structures Operations. Humans Make Strategic Decisions.
            </h2>
            <p>
              This is the architectural principle behind everything A.D.A.M. does.
            </p>
            <p className="mt-3">
              A.D.A.M. is explicitly designed <em>not</em> to replace human judgment. It handles the operational layer — the structured, systematic, repeatable work — so that the people involved in an engagement can focus on what actually requires human thinking: strategy, relationships, complex decisions, and creative problem-solving.
            </p>
            <p className="mt-3">
              When a proposal is generated, a human reviews and approves it. When a strategy is defined, a human leads it. When a relationship needs to be managed, a human manages it. A.D.A.M. ensures that the operational infrastructure supporting those activities is structured, consistent, and reliable.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Why A.D.A.M. Exists
            </h2>
            <p>
              A.D.A.M. was built to solve a specific problem: the operational chaos that emerges when growing businesses try to scale without structured systems.
            </p>
            <p className="mt-3">
              As a business grows, the informal systems that worked at small scale — WhatsApp threads, personal relationships, ad-hoc spreadsheets, verbal agreements — begin to break down. Onboarding becomes inconsistent. Proposals vary in quality. Contracts get lost. Invoices are delayed. Clients receive different experiences depending on who happens to be managing their account that day.
            </p>
            <p className="mt-3">
              A.D.A.M. replaces this chaos with structure. A single, consistent operational platform that ensures every client, every engagement, and every deliverable is managed with the same level of rigour — regardless of team size, location, or workload.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              E.V.A. — The Delivery Layer
            </h2>
            <p>
              A.D.A.M. works in close integration with <strong className="text-foreground font-medium">E.V.A.</strong> — Execution &amp; Validation Architecture. If A.D.A.M. is the operational backbone, E.V.A. is the delivery nerve system.
            </p>
            <p className="mt-3">
              E.V.A. manages execution milestones, validates deliverable completion, coordinates client reporting, and ensures that every engagement maintains operational accountability from start to finish. Together, A.D.A.M. and E.V.A. create a complete operational implementation system.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              Who A.D.A.M. Is For
            </h2>
            <p>
              A.D.A.M. is the operational foundation for every Andy&apos;K Group engagement. It is not sold as a standalone SaaS product to random buyers — it is the implementation infrastructure behind our Strategic Implementation Partnerships.
            </p>
            <p className="mt-3">
              It is built for:
            </p>
            <div className="mt-4 space-y-2">
              {[
                "Growth-stage companies that need structured operational implementation systems",
                "Companies expanding into B2G (public sector) that require formal proposal and contract management",
                "Businesses implementing digital transformation that need structured onboarding and lifecycle tracking",
                "Any organisation where operational chaos is limiting growth and quality",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-rose-dark shrink-0 mt-0.5">·</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5">
              Access to A.D.A.M. through an Andy&apos;K Group engagement is currently available through our <strong className="text-foreground font-medium">Private Early Access — Selective Implementation Program</strong>. Applications are reviewed internally and selectively approved based on fit.
            </p>
          </section>

        </article>

        <div className="mt-14 pt-10 border-t border-grid-300 flex flex-col sm:flex-row gap-4">
          <a
            href="https://adam.andykgroup.com/questionnaire"
            className="relative inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-foreground btn-primary-gradient"
          >
            <span className="relative z-10">Apply for Access</span>
          </a>
          <Link
            href="/implementation-philosophy"
            className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium border border-grid-300 hover:border-foreground/30 text-foreground transition-colors rounded-lg"
          >
            Our Implementation Philosophy →
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
