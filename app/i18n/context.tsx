"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../messages/en.json";
import ar from "../messages/ar.json";

type Messages = typeof en;
type Lang = "en" | "ar";

interface I18nContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  tArr: (key: string) => string[];
  setLang: (lang: Lang) => void;
}

const messages: Record<Lang, Messages> = { en, ar };

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const val = getNestedValue(messages[lang] as unknown as Record<string, unknown>, key);
      return typeof val === "string" ? val : key;
    },
    [lang]
  );

  const tArr = useCallback(
    (key: string): string[] => {
      const val = getNestedValue(messages[lang] as unknown as Record<string, unknown>, key);
      return Array.isArray(val) ? (val as string[]) : [];
    },
    [lang]
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, dir, t, tArr, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
