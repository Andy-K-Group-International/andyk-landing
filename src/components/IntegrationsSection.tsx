/* eslint-disable @next/next/no-img-element */
import { COMPANY, ADAM_FEATURES } from "@/lib/data";

export default function IntegrationsSection() {
  return (
    <section id="systems" className="relative py-20 px-8 max-w-[1200px] mx-auto section-bg-grid">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          Our{" "}
          <span className="font-serif font-light italic text-[1.2em]">
            flagship
          </span>{" "}
          system
        </h2>
        <p className="text-lg text-muted font-light max-w-[560px] mx-auto">
          {COMPANY.descriptionSystems}
        </p>
      </div>

      {/* A.D.A.M. Card */}
      <div className="border border-grid-300 rounded-xl p-8 bg-white mb-6">
        <div className="flex items-center gap-4 mb-4">
          <img src={COMPANY.adamLogoUrl} alt="A.D.A.M." className="h-10 w-auto" />
          <div className="h-5 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-highlight font-medium">Active</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-1">A.D.A.M.</h3>
        <p className="text-sm text-muted-2 mb-4">Automated Document &amp; Account Manager</p>
        <p className="text-base text-muted leading-relaxed mb-6 max-w-xl">
          Our flagship system handles the full client lifecycle &mdash; from first contact to ongoing account management &mdash; so you can focus on what matters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ADAM_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <a
          href="/onboarding"
          className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">Start Your A.D.A.M. Journey</span>
        </a>
      </div>

    </section>
  );
}
