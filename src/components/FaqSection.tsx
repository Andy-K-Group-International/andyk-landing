"use client";

import { SERVICES } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          {t.services.heading}{" "}
          <span className="font-serif font-light italic text-[1.2em]">{t.services.headingItalic}</span>
        </h2>
        <p className="text-lg text-muted font-light max-w-[520px] mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.map((service, i) => (
          <div
            key={service.title}
            className="border border-grid-300 rounded-xl p-6 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow"
          >
            <span className="text-[11px] font-mono text-muted-2 block mb-4">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="text-base font-semibold text-foreground mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-muted leading-normal">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
