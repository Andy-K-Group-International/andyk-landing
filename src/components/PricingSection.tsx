"use client";

import { useState, useRef } from "react";
import { PRICING_B2B, PRICING_B2G, PRICING_TECH, COMMITMENT_OPTIONS, BILLING_TERMS } from "@/lib/data";
import { COMPANY } from "@/lib/data";
import TabSwitcher from "@/components/TabSwitcher";

const TABS = [
  { id: "b2b", label: "B2B Business Development", data: PRICING_B2B },
  { id: "b2g", label: "B2G Public Sector", data: PRICING_B2G },
  { id: "tech", label: "Technology / CTO", data: PRICING_TECH },
] as const;

const TAB_IDS: string[] = TABS.map((t) => t.id);

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-highlight">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function applyDiscount(price: string, discountPct: number): string {
  // Extract numeric value from price string like "€950", "£1,050", "€2,500"
  const currencyMatch = price.match(/^([€£$])/);
  const currency = currencyMatch ? currencyMatch[1] : "";
  const numeric = parseFloat(price.replace(/[^0-9.]/g, ""));
  if (isNaN(numeric) || discountPct === 0) return price;
  const discounted = Math.round(numeric * (1 - discountPct / 100));
  // Format with comma for thousands
  const formatted = discounted.toLocaleString("en-GB");
  return `${currency}${formatted}`;
}

interface PricingCard {
  name: string;
  price: string;
  period?: string;
  prefix?: string;
  highlighted?: boolean;
  features: string[];
}

function PricingCardComponent({ card, discount }: { card: PricingCard; discount: number }) {
  const hasMonthlyPeriod = card.period === "/ month";
  const showDiscount = hasMonthlyPeriod && discount > 0;
  const displayPrice = showDiscount ? applyDiscount(card.price, discount) : card.price;

  return (
    <div
      className={`relative rounded-xl p-6 flex flex-col h-full transition-all duration-300 ${
        card.highlighted
          ? "bg-foreground text-white shadow-[0_8px_40px_rgba(1,1,27,0.2)]"
          : "bg-white border border-grid-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      }`}
    >
      {card.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] uppercase tracking-widest font-mono bg-highlight text-white rounded-full">
          Popular
        </span>
      )}

      <div className="mb-5">
        <h4
          className={`text-base font-bold tracking-tight mb-3 ${
            card.highlighted ? "text-white" : "text-foreground"
          }`}
        >
          {card.name}
        </h4>
        <div className="flex items-baseline gap-1">
          {card.prefix && (
            <span
              className={`text-sm ${card.highlighted ? "text-white/60" : "text-muted-2"}`}
            >
              {card.prefix}
            </span>
          )}
          <span
            className={`text-3xl font-bold tracking-tight ${
              card.highlighted ? "text-white" : "text-foreground"
            }`}
          >
            {displayPrice}
          </span>
          {card.period && (
            <span
              className={`text-sm ${card.highlighted ? "text-white/60" : "text-muted-2"}`}
            >
              {card.period}
            </span>
          )}
        </div>
        {showDiscount && (
          <span
            className={`inline-block mt-1.5 text-xs font-mono ${
              card.highlighted ? "text-highlight" : "text-highlight"
            }`}
          >
            was {card.price}
          </span>
        )}
      </div>

      <div
        className={`w-full h-px mb-5 ${card.highlighted ? "bg-white/15" : "bg-grid-300"}`}
      />

      <ul className="space-y-3 flex-1 mb-6">
        {card.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <div className={card.highlighted ? "text-highlight" : ""}>
              <CheckIcon />
            </div>
            <span
              className={`text-sm leading-snug ${
                card.highlighted ? "text-white/80" : "text-muted"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${COMPANY.email}?subject=Inquiry: ${card.name} Plan`}
        className={`block text-center py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
          card.highlighted
            ? "bg-white text-foreground hover:bg-white/90"
            : "bg-foreground text-white hover:bg-foreground/90"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<string>("b2b");
  const [commitment, setCommitment] = useState(3);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeData = TABS.find((t) => t.id === activeTab)!;
  const activeCommitment = COMMITMENT_OPTIONS.find((c) => c.months === commitment)!;

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTab) return;

    const oldIndex = TAB_IDS.indexOf(activeTab);
    const newIndex = TAB_IDS.indexOf(newTabId);
    const direction = newIndex > oldIndex ? "right" : "left";

    setSlideDirection(direction);
    setIsAnimating(true);

    // Brief exit animation, then switch content and enter
    requestAnimationFrame(() => {
      setTimeout(() => {
        setActiveTab(newTabId);
        // Reset animation after content swap
        requestAnimationFrame(() => {
          setTimeout(() => setIsAnimating(false), 20);
        });
      }, 150);
    });
  };

  const getTransform = () => {
    if (!isAnimating) return "translateX(0)";
    // When animating out, slide in the opposite direction of where the new tab is
    return slideDirection === "right" ? "translateX(-24px)" : "translateX(24px)";
  };

  return (
    <section id="pricing" className="relative py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono block mb-3">
            Transparent pricing
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            Plans for{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              every stage
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            Structured advisory and business development — combining strategy, public sector expertise, and technology infrastructure to help you scale.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <TabSwitcher
            tabs={TABS.map(({ id, label }) => ({ id, label }))}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* Commitment selector */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-2 font-mono mb-3">
            Commitment period
          </span>
          <div className="inline-flex rounded-lg border border-grid-300 bg-white p-1 gap-1">
            {COMMITMENT_OPTIONS.map((opt) => (
              <button
                key={opt.months}
                onClick={() => setCommitment(opt.months)}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 min-h-[44px] ${
                  commitment === opt.months
                    ? "bg-foreground text-white shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {opt.label}
                {opt.discount > 0 && (
                  <span
                    className={`block text-[10px] font-mono ${
                      commitment === opt.months ? "text-highlight" : "text-highlight"
                    }`}
                  >
                    -{opt.discount}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards with slide animation */}
        <div
          ref={contentRef}
          className="transition-all duration-300 ease-out"
          style={{
            transform: getTransform(),
            opacity: isAnimating ? 0 : 1,
          }}
        >
          <div
            className={`grid gap-6 ${
              activeData.data.length <= 3
                ? "grid-cols-1 md:grid-cols-3 max-w-[960px] mx-auto"
                : activeData.data.length === 4
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-[1200px] mx-auto"
            }`}
          >
            {activeData.data.map((card) => (
              <PricingCardComponent
                key={card.name}
                card={card}
                discount={activeCommitment.discount}
              />
            ))}
          </div>
        </div>

        {/* Billing terms */}
        <div className="text-center mt-8 space-y-1">
          <p className="text-xs text-muted-2">
            {BILLING_TERMS.basis} &middot; {BILLING_TERMS.minimum}
          </p>
          <p className="text-xs text-muted-2">
            {BILLING_TERMS.renewal} &middot; {BILLING_TERMS.cancellation}
          </p>
        </div>

        {/* Custom quote CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted mb-3">
            Need something custom? We tailor packages to your exact requirements.
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=Custom Quote Request`}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
          >
            Request a Custom Quote
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
