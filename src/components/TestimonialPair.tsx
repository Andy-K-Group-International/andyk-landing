/* eslint-disable @next/next/no-img-element */
import { FOUNDERS } from "@/lib/data";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TestimonialPair() {
  return (
    <div className="mb-20">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono block mb-3">
          The people behind it
        </span>
        <h3 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold tracking-tight text-foreground">
          Meet the{" "}
          <span className="font-serif font-light italic text-[1.15em]">
            founders
          </span>
        </h3>
      </div>

      {/* Founder cards */}
      <div className="flex flex-col gap-6 max-w-[700px] mx-auto">
        {FOUNDERS.map((founder, i) => (
          <div
            key={founder.name}
            className="group relative glass-card rounded-xl overflow-hidden"
          >
            <div className="relative z-10 flex gap-6 p-6">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-lg object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  {/* Accent line */}
                  <div
                    className="w-6 h-[2px] shrink-0"
                    style={{
                      background: i === 0
                        ? "linear-gradient(90deg, #F5C0C0, #cda0a5)"
                        : "linear-gradient(90deg, #5CB198, #4a9a82)",
                    }}
                  />
                  <div className="text-base font-bold tracking-tight text-foreground leading-tight">
                    {founder.name}
                  </div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted-2 font-mono mb-3">
                  {founder.role}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {founder.bio}
                </p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-2 hover:text-foreground transition-colors duration-300"
                >
                  <LinkedInIcon />
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
