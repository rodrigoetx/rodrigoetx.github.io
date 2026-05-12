"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLang();
  const t = translations.contact;

  return (
    <section id="contato" className="py-24 bg-[#1c1917] relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          {t.title[lang]} <span className="text-gradient">{t.titleHighlight[lang]}</span> {t.titleEnd[lang]}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">{t.description[lang]}</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a href="mailto:rodrigoteixeira.extsj@gmail.com" className="glass-card w-full md:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-primary/20 hover:text-white transition-all group">
            <i className="fas fa-envelope text-2xl text-primary group-hover:scale-110 transition-transform"></i>
            <span className="font-medium text-gray-300 group-hover:text-white">rodrigoteixeira.extsj@gmail.com</span>
          </a>

          <a href="https://wa.me/5519971127507" target="_blank" rel="noopener noreferrer" className="glass-card w-full md:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-green-500/20 hover:text-white transition-all group border-transparent hover:border-green-500/50">
            <i className="fab fa-whatsapp text-2xl text-green-500 group-hover:scale-110 transition-transform"></i>
            <span className="font-medium text-gray-300 group-hover:text-white">(19) 97112-7507</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/rodrigo-espinosa-teixeira/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl text-gray-400 hover:text-[#0A66C2] hover:bg-white/10 transition-all shadow-lg hover:shadow-[#0A66C2]/30 transform hover:-translate-y-1">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/rodrigoetx" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all shadow-lg transform hover:-translate-y-1" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
