"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const contactForm = document.getElementById("contact-email") as HTMLInputElement | null;
    if (contactForm && email) {
      contactForm.value = email;
      contactForm.dispatchEvent(new Event("input", { bubbles: true }));
    }
    document.getElementById("contact-email")?.closest("section")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="text-center py-20 px-8 max-w-[900px] mx-auto">
      <h1 className="gradient-text font-bold tracking-tight leading-[1.2] text-[clamp(2.375rem,1.6rem+2.75vw,3.75rem)] mb-6">
        <span className="block">Andy&apos;K Group</span>
        <span className="block font-serif font-light italic text-[1.3em]">
          International
        </span>
      </h1>
      <p className="text-xl leading-relaxed text-muted font-light max-w-[620px] mx-auto mb-3">
        {t.company.tagline}
      </p>
      <p className="text-base leading-relaxed text-muted-2 font-light max-w-[540px] mx-auto mb-9">
        {t.company.subtitle}
      </p>
      <form onSubmit={handleSubmit} className="flex justify-center gap-3 flex-wrap max-w-[480px] mx-auto">
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.hero.emailPlaceholder}
          className="flex-1 min-w-[200px] h-12 px-4 text-sm border border-grid-500 bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
        />
        <button
          type="submit"
          className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient cursor-pointer"
        >
          <span className="relative z-10">{t.hero.getInContact}</span>
        </button>
      </form>
    </section>
  );
}
