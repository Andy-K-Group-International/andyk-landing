"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitHrApplication } from "@/app/actions/hr-application";

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-rose-dark shrink-0 mt-0.5">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

function SuccessState({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="text-center py-14">
      <div className="w-16 h-16 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8 text-rose-dark">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{heading}</h3>
      <p className="text-sm text-muted max-w-[400px] mx-auto">{text}</p>
    </div>
  );
}

export default function RoleContent() {
  const { t } = useLanguage();
  const ww = t.workWithUs;
  const r = ww.role;
  const f = ww.form;

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    formData.set("role", "Personal Assistant & Sales Support");

    startTransition(async () => {
      const result = await submitHrApplication(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }

  const inputClass =
    "w-full h-11 px-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors";
  const labelClass = "block text-sm font-medium text-foreground mb-2";

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
              {r.eyebrow}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6 leading-[1.2]">
            {r.title}
          </h1>

          {/* Metadata pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-grid-300 bg-white text-sm">
              <span className="text-muted-2">{r.typeLabel}:</span>
              <span className="text-foreground font-medium">{r.type}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-grid-300 bg-white text-sm">
              <span className="text-muted-2">{r.locationLabel}:</span>
              <span className="text-foreground font-medium">{r.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-grid-300 bg-white text-sm">
              <span className="text-muted-2">{r.rateLabel}:</span>
              <span className="text-foreground font-medium">{r.rate}</span>
            </div>
          </div>

          <div className="border-t border-grid-300" />

          {/* Content sections */}
          <article className="mt-10 space-y-12 text-[15px] leading-relaxed text-muted">
            {/* About */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">{r.aboutHeading}</h2>
              <p>{r.aboutBody}</p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">{r.responsibilitiesHeading}</h2>
              <ul className="space-y-3">
                {r.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">{r.requirementsHeading}</h2>
              <ul className="space-y-3">
                {r.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What we offer */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">{r.offerHeading}</h2>
              <ul className="space-y-3">
                {r.offer.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          {/* Application form */}
          <div className="mt-16 border-t border-grid-300 pt-12">
            <div className="mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-rose-dark font-mono">
                {r.applyHeading}
              </span>
            </div>
            <p className="text-sm text-muted mb-8">{r.applyIntro}</p>

            <div className="border border-grid-300 rounded-2xl p-8 sm:p-10 bg-white shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-1">{f.heading}</h2>
              <p className="text-sm text-muted-2 mb-8">{f.subheading}</p>

              {submitted ? (
                <SuccessState heading={f.successHeading} text={f.successText} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>
                        {f.fullName} <span className="text-rose-dark">{f.required}</span>
                      </label>
                      <input name="fullName" type="text" required placeholder={f.phFullName} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {f.email} <span className="text-rose-dark">{f.required}</span>
                      </label>
                      <input name="email" type="email" required placeholder={f.phEmail} className={inputClass} />
                    </div>
                  </div>

                  {/* Row 2: Phone + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>{f.phone}</label>
                      <input name="phone" type="tel" placeholder={f.phPhone} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.location}</label>
                      <input name="location" type="text" placeholder={f.phLocation} className={inputClass} />
                    </div>
                  </div>

                  {/* Row 3: Languages + LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>{f.languages}</label>
                      <input name="languages" type="text" placeholder={f.phLanguages} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.linkedin}</label>
                      <input name="linkedin" type="url" placeholder={f.phLinkedin} className={inputClass} />
                    </div>
                  </div>

                  {/* Experience select */}
                  <div>
                    <label className={labelClass}>{f.experienceLabel}</label>
                    <select
                      name="experience"
                      className="w-full h-11 px-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                    >
                      <option value="">— Select —</option>
                      {f.experienceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Availability + Hourly Rate */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>{f.availability}</label>
                      <input name="availability" type="text" placeholder={f.phAvailability} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.hourlyRate}</label>
                      <input name="hourlyRate" type="text" placeholder={f.phHourlyRate} className={inputClass} />
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className={labelClass}>{f.cvUpload}</label>
                    <input
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-grid-500 file:text-xs file:font-medium file:text-foreground file:bg-white hover:file:bg-bg-light file:cursor-pointer cursor-pointer"
                    />
                    <p className="text-xs text-muted-2 mt-1.5">{f.cvHelper}</p>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>{f.message}</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={f.phMessage}
                      className="w-full px-4 py-3 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="relative w-full h-12 flex items-center justify-center gap-2 text-sm font-medium text-foreground btn-primary-gradient cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {isPending ? f.submitting : f.submit}
                    </span>
                  </button>

                  <p className="text-xs text-center text-muted-2">{f.privacy}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
