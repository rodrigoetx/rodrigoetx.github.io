"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations.hero;

  const phrases = t.typingPhrases[lang];
  const [currentText, setCurrentText] = useState("");
  const phraseIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const currentTextRef = useRef("");
  const langRef = useRef(lang);

  // Keep langRef in sync and trigger delete on language change
  useEffect(() => {
    langRef.current = lang;
    isDeletingRef.current = true;
  }, [lang]);

  useEffect(() => {
    function tick() {
      const activePhrases = translations.hero.typingPhrases[langRef.current];
      if (phraseIndexRef.current >= activePhrases.length) phraseIndexRef.current = 0;
      const fullText = activePhrases[phraseIndexRef.current];

      // If language changed mid-type, force delete
      if (!fullText.startsWith(currentTextRef.current) && !isDeletingRef.current) {
        isDeletingRef.current = true;
      }

      if (isDeletingRef.current) {
        currentTextRef.current = currentTextRef.current.substring(0, currentTextRef.current.length - 1);
      } else {
        currentTextRef.current = fullText.substring(0, currentTextRef.current.length + 1);
      }

      setCurrentText(currentTextRef.current);

      let speed = 100;
      if (isDeletingRef.current) speed = 50;

      if (!isDeletingRef.current && currentTextRef.current === fullText) {
        speed = 2000;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && currentTextRef.current === "") {
        isDeletingRef.current = false;
        phraseIndexRef.current = (phraseIndexRef.current + 1) % activePhrases.length;
        speed = 500;
      }

      setTimeout(tick, speed);
    }

    const initialTimeout = setTimeout(tick, 1000);
    return () => clearTimeout(initialTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "4s" }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-primary font-medium tracking-wide mb-4"
        >
          {t.greeting[lang]}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6"
        >
          Rodrigo Teixeira
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-300 mb-8 h-12"
        >
          <span className="typing-cursor font-light">{currentText}</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg"
        >
          {t.description[lang]}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://linkedin.com/in/rodrigo-espinosa-teixeira/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-gray-500 text-white rounded-full font-medium hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <i className="fab fa-linkedin text-xl"></i> LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <a href="#sobre" className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-300 animate-bounce cursor-pointer">
          <span className="text-xs tracking-widest uppercase font-medium">{t.scrollMore[lang]}</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
