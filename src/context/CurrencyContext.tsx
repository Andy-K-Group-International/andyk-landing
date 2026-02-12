"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { CurrencyCode, ExchangeRates } from "@/lib/currency";
import { fetchRates, convertPrice, formatPrice } from "@/lib/currency";

const COOKIE_KEY = "andy-k-currency";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  convert: (amount: number, from: CurrencyCode) => string;
  ready: boolean;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "EUR",
  setCurrency: () => {},
  convert: () => "",
  ready: false,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("EUR");
  const [rates, setRates] = useState<ExchangeRates | null>(null);

  // Load from cookie on mount
  useEffect(() => {
    const saved = getCookie(COOKIE_KEY) as CurrencyCode | null;
    if (saved) setCurrencyState(saved);
  }, []);

  // Persist to cookie on change
  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    setCookie(COOKIE_KEY, code);
  }, []);

  useEffect(() => {
    fetchRates()
      .then(setRates)
      .catch(() => {
        setRates({ EUR: 0.92, GBP: 0.79, USD: 1, BRL: 5.1, PYG: 7750 });
      });
  }, []);

  const convert = useCallback(
    (amount: number, from: CurrencyCode): string => {
      if (!rates) return formatPrice(amount, from);
      const converted = convertPrice(amount, from, currency, rates);
      return formatPrice(converted, currency);
    },
    [rates, currency]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, ready: !!rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
