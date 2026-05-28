"use client";
/* eslint-disable @next/next/no-img-element */
import { COMPANY, ADAM_FEATURES, EVE_FEATURES } from "@/lib/data";

export default function FlagshipSystems() {
  return (
    <section id="systems" className="relative pt-10 pb-20 px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          Our{" "}
          <span className="font-serif font-light italic text-[1.2em]">
            flagship
          </span>{" "}
          systems
        </h2>
        <p className="text-lg text-muted font-light max-w-[560px] mx-auto">
          {COMPANY.descriptionSystems}
        </p>
      </div>

      {/* A.D.A.M. Card */}
      <div className="glass-card rounded-xl p-8 mb-6 transition-all duration-300" style={{ border: '2px solid #2F9E9A', boxShadow: '0 0 24px rgba(47,158,154,0.12)' }}>
        <div className="flex items-center gap-4 mb-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ mixBlendMode: "screen", height: "64px", width: "auto" }}
          >
            <source src="/adam-logo.mp4" type="video/mp4" />
            <img src="/adam-logo.png" alt="A.D.A.M." style={{ height: "64px" }} />
          </video>
          <div className="h-5 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-rose-dark font-medium">Private Early Access — Selective Implementation Program</span>
        </div>
        <h3 className="text-2xl font-bold mb-1" style={{ color: '#2F9E9A' }}>A.D.A.M.</h3>
        <p className="text-sm text-muted-2 mb-4">Operational Implementation Platform</p>
        <p className="text-base text-muted leading-relaxed mb-6 max-w-xl">
          A.D.A.M. structures your full operational workflow &mdash; from proposal and contract architecture to structured onboarding and client lifecycle management. A.D.A.M. structures operations. Humans make strategic decisions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ADAM_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <a
          href="https://adam.andykgroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">Explore A.D.A.M. →</span>
        </a>
      </div>

      {/* E.V.E. Card */}
      <div className="glass-card rounded-xl p-8 mb-6 transition-all duration-300" style={{ border: '2px solid #8A89DC', boxShadow: '0 0 24px rgba(138,137,220,0.12)' }}>
        <div className="flex items-center gap-4 mb-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ mixBlendMode: "screen", height: "64px", width: "auto" }}
          >
            <source src="/eve-logo.mp4" type="video/mp4" />
            <img src="/eve-logo.png" alt="E.V.E." style={{ height: "64px" }} />
          </video>
          <div className="h-5 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-rose-dark font-medium">Coming Soon</span>
        </div>
        <span
          className="inline-block font-mono text-[10px] uppercase tracking-widest mb-3"
          style={{ color: '#8A89DC', background: 'rgba(138,137,220,0.1)', padding: '2px 8px', borderRadius: '4px' }}
        >
          In Development
        </span>
        <h3 className="text-2xl font-bold mb-1" style={{ color: '#8A89DC' }}>E.V.E.</h3>
        <p className="text-sm text-muted-2 mb-4">Intelligence System</p>
        <p className="text-base text-muted leading-relaxed mb-6 max-w-xl">
          E.V.E. is the operational delivery layer of A.D.A.M. &mdash; managing execution, milestones, delivery tracking, and client reporting. Keeps every engagement running with operational clarity and structured accountability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {EVE_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <a
          href="https://eve.andykgroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">Explore E.V.E. →</span>
        </a>
        <a
          href="https://eve.andykgroup.com/request-access"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 text-sm underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: '#8A89DC' }}
        >
          Join the waitlist →
        </a>
      </div>
    </section>
  );
}
