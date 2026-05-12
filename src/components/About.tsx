"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLang();
  const t = translations.about;

  return (
    <section id="sobre" className="py-24 bg-[#1c1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t.title[lang]}{" "}
            <span className="text-gradient">{t.titleHighlight[lang]}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative w-full max-w-sm mx-auto md:max-w-full aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-stone-800 to-stone-900 border border-stone-700 flex items-center justify-center overflow-hidden shadow-2xl z-10 group">
                <img src="/foto luz.jpg" alt="Rodrigo Teixeira" className="profile-img-fade" />
                <img src="/eu polo.png" alt="Rodrigo Teixeira" className="profile-img-fade" />
                <img src="/eu teatro.png" alt="Rodrigo Teixeira" className="profile-img-fade" />
              </div>
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{
              __html: t.p1[lang].replace(/<strong>/g, '<strong class="text-white">')
            }} />
            <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{
              __html: t.p2[lang]
                .replace('<strong class="ai">', '<strong class="text-primary">')
                .replace(/<strong>/g, '<strong class="text-white">')
            }} />
            <div className="p-6 glass-card rounded-xl border-l-4 border-l-primary mt-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <i className="fas fa-theater-masks text-primary"></i> {t.oratoryTitle[lang]}
              </h3>
              <p className="text-sm text-gray-400">{t.oratoryText[lang]}</p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>{t.location[lang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-car text-primary"></i>
                <span>{t.license[lang]}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
