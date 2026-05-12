"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Education() {
  const { lang } = useLang();
  const t = translations.education;

  return (
    <section id="educacao" className="py-24 bg-[#0c0a09] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
              <i className="fas fa-graduation-cap text-primary"></i> {t.academicTitle[lang]}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-10"></div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary hover:border-l-secondary transition-colors">
                <h3 className="text-xl font-bold text-white">{t.deg1Title[lang]}</h3>
                <p className="text-primary font-medium mb-2">UNIFEOB</p>
                <p className="text-gray-400 text-sm"><i className="far fa-calendar-alt mr-2"></i> {t.deg1Date[lang]}</p>
              </div>

              <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary hover:border-l-primary transition-colors">
                <h3 className="text-xl font-bold text-white">{t.deg2Title[lang]}</h3>
                <p className="text-secondary font-medium mb-2">{t.deg2School[lang]}</p>
                <p className="text-gray-400 text-sm"><i className="far fa-calendar-alt mr-2"></i> {t.deg2Date[lang]}</p>
                <p className="text-gray-500 mt-2 text-sm border-t border-gray-700 pt-2">{t.deg2Note[lang]}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
              <i className="fas fa-certificate text-secondary"></i> {t.certsTitle[lang]}
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mb-10"></div>

            <div className="space-y-4">
              {[
                { icon: "fas fa-language", color: "text-yellow-500", title: t.cert1Title, desc: t.cert1Desc },
                { icon: "fas fa-robot", color: "text-primary", title: t.cert2Title, desc: t.cert2Desc },
                { icon: "fab fa-aws", color: "text-[#FF9900]", title: t.cert3Title, desc: t.cert3Desc },
                { icon: "fas fa-network-wired", color: "text-[#1BA0D7]", title: t.cert4Title, desc: t.cert4Desc },
              ].map((cert, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                  <div className={`mt-1 text-2xl ${cert.color}`}><i className={cert.icon}></i></div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title[lang]}</h4>
                    <p className="text-gray-400 text-sm">{cert.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
