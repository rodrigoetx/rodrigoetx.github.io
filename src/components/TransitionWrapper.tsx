"use client";
import { useLang } from "@/context/LanguageContext";
import type { ReactNode } from "react";

export default function TransitionWrapper({ children }: { children: ReactNode }) {
  const { isTransitioning } = useLang();

  return (
    <div
      className="transition-all duration-300 ease-in-out"
      style={{
        opacity: isTransitioning ? 0 : 1,
        filter: isTransitioning ? "blur(4px)" : "blur(0px)",
        transform: isTransitioning ? "translateY(4px)" : "translateY(0)",
      }}
    >
      {children}
    </div>
  );
}
