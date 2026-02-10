import { COMPANY } from "@/lib/data";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-24 px-8">
      {/* Dark background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - CTA */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-4">
              Get in touch
            </span>
            <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-white leading-[1.2] mb-4">
              Let&apos;s build something{" "}
              <span className="font-serif font-light italic text-[1.2em]">
                together.
              </span>
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-[460px]">
              Whether you need consulting, technology solutions, or a strategic
              partner for international expansion — we&apos;re ready to talk.
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="/onboarding"
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium bg-highlight text-white rounded-lg hover:bg-highlight/90 transition-colors"
              >
                Tell Us About You
              </a>
              <a
                href={`mailto:${COMPANY.email}?subject=Custom Quote Request`}
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:text-white transition-all"
              >
                Request a Custom Quote
              </a>
            </div>

            {/* Social */}
            <a
              href={COMPANY.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            >
              <LinkedInIcon />
              <span className="text-sm">Follow us on LinkedIn</span>
            </a>
          </div>

          {/* Right - Contact details */}
          <div className="space-y-0">
            <ContactRow
              icon={<MailIcon />}
              label="Email"
              value={COMPANY.email}
              href={`mailto:${COMPANY.email}`}
            />
            <ContactRow
              icon={<PhoneIcon />}
              label="Phone"
              value={COMPANY.phone}
              href={`tel:${COMPANY.phone}`}
            />
            <ContactRow
              icon={<LocationIcon />}
              label="Office"
              value={COMPANY.address}
            />
            <div className="flex items-start gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                <span className="text-xs font-mono font-bold">#</span>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                  Company No.
                </div>
                <span className="text-sm text-white/70 font-mono">
                  {COMPANY.companyNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="text-sm text-white hover:text-highlight transition-colors">
      {value}
    </a>
  ) : (
    <span className="text-sm text-white/70">{value}</span>
  );

  return (
    <div className="flex items-start gap-4 py-5 border-b border-white/10 last:border-b-0">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
          {label}
        </div>
        {content}
      </div>
    </div>
  );
}
