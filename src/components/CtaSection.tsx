import { COMPANY } from "@/lib/data";

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-20 px-8 text-center max-w-[1200px] mx-auto section-bg-grid">
      <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-2">
        Let&apos;s build something{" "}
        <span className="font-serif font-light italic text-[1.2em]">together.</span>
      </h2>
      <p className="text-base text-muted mb-8 max-w-[480px] mx-auto">
        Whether you need consulting, technology solutions, or a strategic partner for international expansion, we&apos;re ready.
      </p>
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        <a
          href="/onboarding"
          className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">Tell Us About You</span>
        </a>
        <a
          href={`mailto:${COMPANY.email}?subject=Custom Quote Request`}
          className="inline-flex items-center justify-center h-12 px-5 text-sm border border-grid-500 text-muted hover:bg-grid-300 hover:border-grid-700 transition-all"
        >
          Request a Custom Quote
        </a>
      </div>

      {/* Contact details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-[900px] mx-auto">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-1">Email</div>
          <a href={`mailto:${COMPANY.email}`} className="text-sm text-foreground hover:underline">{COMPANY.email}</a>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-1">Phone</div>
          <a href={`tel:${COMPANY.phone}`} className="text-sm text-foreground hover:underline">{COMPANY.phone}</a>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-1">Address</div>
          <p className="text-sm text-muted">{COMPANY.address}</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-2 mb-1">Company No.</div>
          <p className="text-sm text-muted font-mono">{COMPANY.companyNumber}</p>
        </div>
      </div>
    </section>
  );
}
