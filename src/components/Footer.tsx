"use client";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations.footer;

  return (
    <footer className="bg-[#0c0a09] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Rodrigo Espinosa Teixeira. {t.rights[lang]}
        </p>
      </div>
    </footer>
  );
}
