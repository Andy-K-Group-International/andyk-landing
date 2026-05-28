"use client";

import { useState } from "react";

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="faq-chevron w-4 h-4 shrink-0 transition-transform duration-200">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

const faqs = [
  {
    q: "What is Andy'K Group International LTD?",
    a: "Andy'K Group International LTD is a UK-registered operational implementation company. We design and deploy business architecture, procurement strategy, and operational systems for growth-stage companies.",
  },
  {
    q: "What services do you provide?",
    a: "We provide End-to-End Business Development, B2G Government Procurement strategy, and the A.D.A.M. operational platform. Every engagement is tailored — we do not offer off-the-shelf packages.",
  },
  {
    q: "How does End-to-End engagement work?",
    a: "We begin with a strategic application, followed by internal qualification. If there is alignment, we build a custom proposal, contract, and implementation roadmap. Billing begins only after operational activation.",
  },
  {
    q: "How do I apply for collaboration?",
    a: "Click 'Apply for Implementation' and complete the strategic application form. All requests are reviewed manually within 48 hours.",
  },
  {
    q: "Do you work with companies outside the UK?",
    a: "Yes. We operate across LATAM, Benelux, DACH, and the US. All engagements are managed remotely through A.D.A.M.",
  },
];

export default function FaqQuestionsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 px-8">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            Frequently{" "}
            <span className="font-serif font-light italic text-[1.2em]">Asked</span>
            <br />
            Questions
          </h2>
        </div>

        <div className="border-t border-grid-300">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-grid-300 ${open === i ? "faq-open" : ""}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full py-5 text-left gap-4 cursor-pointer"
              >
                <span className={`text-base font-medium transition-colors ${open === i ? "text-highlight" : "text-foreground"}`}>
                  {faq.q}
                </span>
                <span className={`transition-colors ${open === i ? "text-highlight" : "text-muted-2"}`}>
                  <Chevron />
                </span>
              </button>
              <div className="faq-answer">
                <p className="pb-5 text-sm text-muted leading-relaxed max-w-[640px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
