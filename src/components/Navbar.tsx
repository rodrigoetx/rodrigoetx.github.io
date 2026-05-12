"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations.nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.home[lang] },
    { href: "#sobre", label: t.about[lang] },
    { href: "#habilidades", label: t.skills[lang] },
    { href: "#experiencia", label: t.experience[lang] },
    { href: "#educacao", label: t.education[lang] },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "shadow-lg bg-[#1c1917]/95 backdrop-blur-md" : "glass-nav"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div
              className="flex-shrink-0 font-heading font-bold text-2xl tracking-tighter cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              R<span className="text-primary">E</span>T
              <span className="text-primary">.</span>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={cn(
                "relative inline-flex items-center h-8 rounded-full w-20 transition-all duration-500 overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] focus:outline-none hover:scale-105 group border border-white/10",
                lang === "pt" ? "bg-flag-pt" : "bg-flag-us"
              )}
            >
              <span className="absolute inset-0 bg-black/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"></span>
              <span
                className={cn(
                  "absolute left-1 flex items-center justify-center w-8 h-8 text-sm font-bold transition-all duration-500 z-10",
                  lang === "pt"
                    ? "text-stone-900 drop-shadow-sm scale-100"
                    : "opacity-50 scale-90 text-white drop-shadow-md"
                )}
              >
                PT
              </span>
              <span
                className={cn(
                  "absolute right-1 flex items-center justify-center w-8 h-8 text-sm font-bold transition-all duration-500 z-10",
                  lang === "en"
                    ? "text-stone-900 drop-shadow-sm scale-100"
                    : "opacity-50 scale-90 text-white drop-shadow-md"
                )}
              >
                EN
              </span>
              <span
                className={cn(
                  "absolute left-1 inline-block w-8 h-6 transform bg-white shadow-lg rounded-full transition-transform duration-500 ease-in-out z-0",
                  lang === "en" && "translate-x-[2.5rem]"
                )}
              ></span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="bg-primary hover:bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                {t.contact[lang]}
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav absolute w-full border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              {t.contact[lang]}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
