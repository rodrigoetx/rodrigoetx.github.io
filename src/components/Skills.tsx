"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Skills() {
  const { lang } = useLang();
  const t = translations.skills;

  const ccnaLabel = lang === "pt" ? "Redes (CCNA)" : "Networking (CCNA)";

  return (
    <section id="habilidades" className="py-24 bg-[#0c0a09] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t.title[lang]} <span className="text-gradient">{t.titleHighlight[lang]}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t.subtitle[lang]}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* IA & Automação */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-card p-8 rounded-2xl">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.card1Title[lang]}</h3>
            <ul className="space-y-3 text-gray-400">
              {t.card1Items[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-sm"></i> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dev & Dados */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="glass-card p-8 rounded-2xl">
            <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.card2Title[lang]}</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL / MySQL", "Flutter (Dart)", "Node.js", "AWS Cloud", ccnaLabel].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Gestão & Comunicação */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="glass-card p-8 rounded-2xl">
            <div className="w-14 h-14 bg-rose-500/20 rounded-xl flex items-center justify-center text-rose-400 text-2xl mb-6">
              <i className="fas fa-users-cog"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.card3Title[lang]}</h3>
            <ul className="space-y-3 text-gray-400">
              {t.card3Items[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-rose-400 text-sm"></i> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
