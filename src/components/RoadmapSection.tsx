import { ADAM_ROADMAP } from "@/lib/data";

const STEP_ICONS = [
  // Clipboard - Onboarding
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Lightbulb - Strategy
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Document - Contracts
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Currency - Invoicing
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Chat - Follow-up
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Chart - Dashboard
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5 text-highlight"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="hidden lg:flex items-center px-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5 text-highlight"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section id="systems" className="relative py-20 px-8">
      <div className="line-grid line-grid-fade" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            A.D.A.M. & E.V.A.
            <br />
            <span className="font-serif font-light italic text-[1.2em]">
              automation framework
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            Our operational automation systems handle the full client lifecycle
            — from onboarding to ongoing account management — with intelligent
            automation at every step. It saves time for clients, 
            attract hot leads & increase profits.
          </p>
        </div>

        {/* Roadmap - Desktop: 3x2 grid with arrows, Mobile: vertical */}
        <div className="hidden lg:block">
          {/* Row 1 */}
          <div className="flex items-stretch justify-center mb-4">
            {ADAM_ROADMAP.slice(0, 3).map((item, i) => (
              <div key={item.step} className="contents">
                <RoadmapCard item={item} icon={STEP_ICONS[i]} index={i} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>

          {/* Connecting arrow between rows */}
          <div className="flex justify-end pr-[calc(16.66%+10px)] mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5 text-highlight"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Row 2 */}
          <div className="flex items-stretch justify-center">
            {ADAM_ROADMAP.slice(3, 6).map((item, i) => (
              <div key={item.step} className="contents">
                <RoadmapCard item={item} icon={STEP_ICONS[i + 3]} index={i + 3} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col items-center">
          {ADAM_ROADMAP.map((item, i) => (
            <div key={item.step}>
              <RoadmapCard item={item} icon={STEP_ICONS[i]} index={i} />
              {i < ADAM_ROADMAP.length - 1 && <ArrowDown />}
            </div>
          ))}
        </div>

        {/* Status badge */}
        <div className="text-center mt-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grid-500 bg-white text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
            A.D.A.M. & E.V.A. — currently in development, launching 2026
          </span>
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({
  item,
  icon,
  index,
}: {
  item: (typeof ADAM_ROADMAP)[number];
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div className="relative flex-1 max-w-[340px] group">
      <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        {/* Step number + icon */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background:
                index < 3
                  ? "linear-gradient(135deg, rgba(245,192,192,0.2), rgba(205,160,165,0.15))"
                  : "linear-gradient(135deg, rgba(92,177,152,0.15), rgba(74,154,130,0.1))",
              color: index < 3 ? "#cda0a5" : "#5CB198",
            }}
          >
            {icon}
          </div>
          <span className="text-[11px] font-mono text-muted-2 uppercase tracking-wider">
            Step {item.step}
          </span>
        </div>

        <h4 className="text-base font-bold text-foreground tracking-tight mb-2">
          {item.title}
        </h4>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </div>
  );
}
