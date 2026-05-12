"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  isTransitioning: boolean;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  isTransitioning: false,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLang = useCallback(() => {
    // 1. Start fade-out
    setIsTransitioning(true);

    // 2. After 300ms, swap language and fade back in
    setTimeout(() => {
      setLang((prev) => (prev === "pt" ? "en" : "pt"));
      // Small rAF delay to let React re-render before removing the transition class
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 300);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, isTransitioning, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
