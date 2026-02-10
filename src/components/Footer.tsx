/* eslint-disable @next/next/no-img-element */
import { COMPANY, FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-grid-300 py-12 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a href="#hero">
            <img src="/apple-icon.png" alt="Andy'K Group" className="w-8 h-8" />
          </a>
          <span className="text-xs text-muted-2">
            &copy; 2026 {COMPANY.name}
          </span>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[13px] text-muted-2 hover:text-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose" />
          London, UK
        </div>
      </div>
    </footer>
  );
}
