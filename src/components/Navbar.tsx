import HexLogo from "./HexLogo";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grid-300">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 h-[60px]">
        <HexLogo />
        <div className="hidden md:flex items-center gap-7 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="https://adameva.app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground">
            Log In
          </a>
          <a
            href="/onboarding"
            className="relative inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-foreground btn-primary-gradient"
          >
            <span className="relative z-10">Get Started</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
