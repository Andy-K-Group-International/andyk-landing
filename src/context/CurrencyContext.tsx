"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { CurrencyCode, ExchangeRates } from "@/lib/currency";
import { fetchRates, convertPrice, formatPrice } from "@/lib/currency";

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
  const [currency, setCurrency] = useState<CurrencyCode>("EUR");
  const [rates, setRates] = useState<ExchangeRates | null>(null);

  useEffect(() => {
    fetchRates()
      .then(setRates)
      .catch(() => {
        // Fallback rates if API fails
        setRates({ EUR: 0.92, GBP: 0.79, USD: 1, BRL: 5.1 });
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
