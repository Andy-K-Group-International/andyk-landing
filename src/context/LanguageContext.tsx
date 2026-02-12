"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { Locale, TranslationKeys } from "@/lib/translations";
import { translations } from "@/lib/translations";

const COOKIE_KEY = "andy-k-language";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookieValue(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Load from cookie on mount
  useEffect(() => {
    const saved = getCookie(COOKIE_KEY) as Locale | null;
    if (saved && saved in translations) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  // Update cookie and HTML lang attribute when locale changes
  useEffect(() => {
    if (mounted) {
      setCookieValue(COOKIE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
