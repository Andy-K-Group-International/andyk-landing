"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OnboardingContent() {
  const { t } = useLanguage();
  const ob = t.workWithUs.onboarding;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
        <div className="max-w-[840px] mx-auto px-6 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
          >
            <BackArrow />
            Work With Us
          </Link>

          {/* Header */}
          <div className="mb-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose-dark font-mono">
              {ob.eyebrow}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 leading-[1.2]">
            {ob.heading}{" "}
            <span className="font-serif font-light italic">{ob.headingItalic}</span>
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed mb-12">
            {ob.subtitle}
          </p>

          <div className="border-t border-grid-300" />

          {/* Steps */}
          <div className="mt-12 space-y-0">
            {ob.steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line */}
                {index < ob.steps.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-grid-300" />
                )}
                {/* Step number */}
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-rose-dark bg-white flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-rose-dark">{index + 1}</span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact callout */}
          <div className="mt-16 border border-grid-300 rounded-2xl p-8 bg-white">
            <h2 className="text-lg font-semibold text-foreground mb-2">{ob.nextStepsHeading}</h2>
            <p className="text-sm text-muted">{ob.nextStepsBody}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
