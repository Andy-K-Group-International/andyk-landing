"use client";

import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/data";

function ChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grid-300">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 sm:px-8 h-[60px]">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <img src="/apple-icon.png" alt="Andy'K Group" className="w-7 h-7" />
          <div className="leading-[1.15]">
            <span className="block text-sm font-bold tracking-tight text-foreground">
              Andy&apos;K Group
            </span>
            <span className="block text-[10px] font-light tracking-[0.08em] text-muted uppercase">
              International
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div className="absolute top-full right-0 mt-2 w-[540px] bg-white rounded-xl border border-grid-300 shadow-lg p-6 grid grid-cols-2 gap-6">
                {NAV_SERVICES.map((group) => (
                  <div key={group.group} className={group.group === "IT Services" ? "col-span-2" : ""}>
                    <p className="text-[10px] uppercase tracking-widest text-muted-2 font-medium mb-3">
                      {group.group}
                    </p>
                    <div className={group.group === "IT Services" ? "grid grid-cols-2 gap-2" : "space-y-2"}>
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block p-2.5 -mx-1 rounded-lg hover:bg-bg-light transition-colors group/item"
                        >
                          <span className="text-sm font-medium text-foreground group-hover/item:text-highlight transition-colors">
                            {item.label}
                          </span>
                          <span className="block text-xs text-muted-2 mt-0.5">
                            {item.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://adameva.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm text-muted hover:text-foreground transition-colors"
          >
            Log In
          </a>
          <a
            href="/onboarding"
            className="hidden sm:inline-flex relative items-center justify-center h-9 px-4 text-xs font-medium text-foreground btn-primary-gradient"
          >
            <span className="relative z-10">Get Started</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-white overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block py-3 text-base font-medium text-foreground border-b border-grid-300 last:border-b-0"
              >
                {link.label}
              </a>
            ))}

            {/* Services accordion */}
            <div className="border-b border-grid-300">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
              >
                Services
                <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pb-4 space-y-5">
                  {NAV_SERVICES.map((group) => (
                    <div key={group.group}>
                      <p className="text-[10px] uppercase tracking-widest text-muted-2 font-medium mb-2 px-2">
                        {group.group}
                      </p>
                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMobile}
                            className="block px-3 py-2.5 rounded-lg hover:bg-bg-light transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="block text-xs text-muted-2 mt-0.5">
                              {item.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-6 space-y-3">
              <a
                href="/onboarding"
                onClick={closeMobile}
                className="relative flex items-center justify-center h-12 w-full text-sm font-medium text-foreground btn-primary-gradient"
              >
                <span className="relative z-10">Get Started</span>
              </a>
              <a
                href="https://adameva.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="flex items-center justify-center h-12 w-full text-sm font-medium text-foreground border border-grid-500 rounded-lg"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
