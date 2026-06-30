"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

export default function WorkWithUsContent() {
  const { t } = useLanguage();
  const ww = t.workWithUs;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
        {/* Header */}
        <section className="relative px-6 sm:px-8 pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
          <div className="cartesian-grid opacity-40" />
          <div className="relative max-w-[1200px] mx-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose-dark font-mono">
              {ww.eyebrow}
            </span>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold text-foreground tracking-tight leading-[1.1]">
              {ww.heading}{" "}
              <span className="font-serif font-light italic">{ww.headingItalic}</span>
            </h1>
            <p className="mt-4 text-lg text-muted font-light max-w-[640px] leading-relaxed">
              {ww.subtitle}
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-6 sm:px-8 pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-2 font-mono mb-8">
              {ww.openPositionsHeading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Role Card: Personal Assistant & Sales Support */}
              <div className="group border border-grid-300 rounded-2xl p-7 bg-white hover:border-rose-dark/40 transition-colors flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-rose/20 text-rose-dark uppercase tracking-wide">
                    {ww.contractorBadge}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-grid-300 text-muted-2 uppercase tracking-wide">
                    {ww.remoteBadge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground tracking-tight mb-3 leading-snug">
                  {ww.role.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed flex-1">
                  {ww.role.overview}
                </p>

                <div className="mt-6 pt-5 border-t border-grid-300">
                  <Link
                    href="/work-with-us/personal-assistant-sales-support"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-highlight transition-colors"
                  >
                    {ww.viewRole}
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
