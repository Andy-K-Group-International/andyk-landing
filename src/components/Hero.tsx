import { COMPANY } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-20 px-8 max-w-[900px] mx-auto">
      <h1 className="gradient-text font-bold tracking-tight leading-[1.2] text-[clamp(2.375rem,1.6rem+2.75vw,3.75rem)] mb-6">
        <span className="block">Andy&apos;K Group</span>
        <span className="block font-serif font-light italic text-[1.3em]">
          International
        </span>
      </h1>
      <p className="text-xl leading-relaxed text-muted font-light max-w-[620px] mx-auto mb-3">
        {COMPANY.tagline}
      </p>
      <p className="text-base leading-relaxed text-muted-2 font-light max-w-[540px] mx-auto mb-9">
        {COMPANY.subtitle}
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        <a
          href="/onboarding"
          className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">Tell Us About You</span>
        </a>
        <a
          href="#systems"
          className="inline-flex items-center justify-center h-12 px-5 text-sm text-muted border border-grid-500 hover:bg-grid-300 hover:border-grid-700 transition-all"
        >
          Learn How A.D.A.M. Works
        </a>
      </div>
    </section>
  );
}
