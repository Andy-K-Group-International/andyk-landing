"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LovedBySection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 px-8 bg-bg-light overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-radial-bg" />
        <div className="cartesian-grid" style={{ opacity: 0.35 }} />
        <div className="noise-eggplant" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h2 className="text-center text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-2">
          {t.lovedBy.headingBold}{" "}
          <span className="font-serif font-light italic text-[1.2em]">{t.lovedBy.headingItalic}</span>
          <br />
          {t.lovedBy.headingLine2}
        </h2>
        <p className="text-center text-lg text-muted font-light mb-12 max-w-[600px] mx-auto">
          {t.company.descriptionExtra}
        </p>

        {/* Quote */}
        <div className="text-center max-w-[740px] mx-auto py-10">
          <blockquote className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 font-serif font-light italic">
            {"\u201C"}{t.company.quote}{"\u201D"}
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-rose" />
            <span className="text-xs uppercase tracking-widest text-muted-2">
              {t.company.quoteSubtitle}
            </span>
            <span className="w-8 h-[1px] bg-rose" />
          </div>
        </div>
      </div>
    </section>
  );
}
