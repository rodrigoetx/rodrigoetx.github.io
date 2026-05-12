"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

// Index 0 = Caixa (new), then 1-10 = original entries
const dotColors = [
  "border-[#005CA9]", // Caixa blue
  "border-blue-500", "border-indigo-500", "border-emerald-500", "border-purple-500",
  "border-white", "border-amber-500", "border-secondary", "border-primary",
  "border-secondary", "border-rose-500",
];
const badgeStyles = [
  { bg: "bg-[#005CA9]/15", text: "text-[#4da6ff]", border: "border-[#005CA9]/30" }, // Caixa
  { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  { bg: "bg-white/10", text: "text-white", border: "border-white/20" },
  { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20" },
  { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" },
  { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" },
  { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
];
const years = [
  "Mai 2026", // Caixa
  "2026", "2026", "2026", "2026", "2026", "2026", "2026", "2025", "2024", "2024 - Atual",
];
const yearsEn = [
  "May 2026", // Caixa
  "2026", "2026", "2026", "2026", "2026", "2026", "2026", "2025", "2024", "2024 - Present",
];
const tags: string[][] = [
  ["Microsoft Excel", "Atendimento ao Cliente", "Processos Administrativos", "Análise de Dados", "Operações Bancárias"], // Caixa
  ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  ["Next.js", "TypeScript", "Framer Motion", "OpenRouter", "Tailwind CSS"],
  ["Next.js 15", "TypeScript", "Shadcn/UI", "Tailwind CSS", "Recharts", "Framer Motion", "Supabase", "LLM Integration"],
  ["Next.js 16", "Supabase", "OpenRouter LLM", "Tailwind CSS v4", "Shadcn UI"],
  ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Lucide + Custom SVGs", "Vercel"],
  ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  ["Python", "Streamlit", "Pandas", "Automação"],
  ["Flutter", "GenAI", "Dart", "UX/UI"],
  ["Node.js", "MySQL", "Consultoria", "Automação"],
  [],
];

export default function Experience() {
  const { lang } = useLang();
  const t = translations.experience;
  const entries = t.entries;

  return (
    <section id="experiencia" className="py-24 bg-[#1c1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t.title[lang]} <span className="text-gradient">{t.titleHighlight[lang]}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-12 pb-8">
          {entries.map((item, i) => {
            const entry = item as any;
            const badge = badgeStyles[i] || badgeStyles[badgeStyles.length - 1];
            const entryLinks = entry.links || [];
            const entryTags = tags[i] || [];
            const yearLabel = lang === "en" ? (yearsEn[i] || years[i]) : years[i];
            const isCurrent = !!entry.isCurrent;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: Math.min(i * 0.1, 0.4) }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline dot */}
                <div className={`absolute w-6 h-6 bg-[#1c1917] rounded-full border-4 ${dotColors[i] || "border-gray-500"} -left-[13px] top-1 ${isCurrent ? "shadow-[0_0_12px_rgba(0,92,169,0.6)]" : ""}`}>
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full border-2 border-[#005CA9] animate-ping opacity-50"></span>
                  )}
                </div>

                {/* Card */}
                <div className={`glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden ${isCurrent ? "ring-1 ring-[#005CA9]/30 shadow-[0_0_40px_rgba(0,92,169,0.12)] bg-gradient-to-br from-[#005CA9]/[0.06] via-transparent to-[#F47920]/[0.03]" : ""}`}>

                  {/* Caixa branded accent bar */}
                  {isCurrent && (
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#005CA9] via-[#F47920] to-[#005CA9]"></div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{entry.title[lang]}</h3>
                      <h4 className={`text-lg font-medium ${isCurrent ? "text-[#F47920]" : badge.text}`}>{entry.subtitle[lang]}</h4>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      {isCurrent && (
                        <span className="relative flex items-center gap-1.5 px-3 py-1 bg-green-500/15 text-green-400 rounded-full text-xs font-bold border border-green-500/30 uppercase tracking-wider">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                          </span>
                          {lang === "pt" ? "Atual" : "Current"}
                        </span>
                      )}
                      <span className={`px-4 py-1 ${badge.bg} ${badge.text} rounded-full text-sm font-semibold inline-block border ${badge.border} w-max`}>
                        {yearLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{entry.description[lang]}</p>

                  <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                    {entry.features[lang].map((f: string, j: number) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>

                  {entryLinks.length > 0 && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      {entryLinks.map((link: any, j: number) => (
                        <a
                          key={j}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${link.style}`}
                        >
                          <i className={link.icon}></i> {link.label[lang]}
                        </a>
                      ))}
                    </div>
                  )}

                  {entry.demoNote && (
                    <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm text-purple-300 mb-4">
                      <i className="fas fa-info-circle mr-2"></i>
                      <span>{entry.demoNote[lang]}</span>
                    </div>
                  )}

                  {entryTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entryTags.map((tag: string, j: number) => (
                        <span key={j} className={`text-xs px-2 py-1 rounded ${isCurrent ? "bg-[#005CA9]/10 text-[#7db8e8] border border-[#005CA9]/15" : "bg-[#0c0a09] text-gray-400"}`}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
