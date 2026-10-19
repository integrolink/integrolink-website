"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  pt: {
    label: "Escolha uma prioridade",
    detail: "O que ligamos",
    action: "Explorar soluções",
    items: [
      { number: "01", title: "Proteger", heading: "Pessoas e património mais protegidos.", text: "Segurança, videovigilância e alertas passam a trabalhar de forma coordenada, com informação acessível onde estiver.", tags: ["Videovigilância", "Alarmes", "Acessos"] },
      { number: "02", title: "Gerir", heading: "Acessos e utilização sem incerteza.", text: "Saiba quem entra, como o espaço está a ser utilizado e onde existe disponibilidade para receber pessoas.", tags: ["Controlo de acessos", "Smart Occupancy", "Monitorização"] },
      { number: "03", title: "Otimizar", heading: "Mais eficiência, sem perder conforto.", text: "Acompanhe consumos e automatize rotinas para evitar desperdícios e adaptar o espaço ao momento certo.", tags: ["Energia", "Climatização", "Iluminação"] },
      { number: "04", title: "Simplificar", heading: "Vários sistemas. Uma experiência coerente.", text: "Equipamentos e plataformas deixam de funcionar como ilhas e passam a responder em conjunto às necessidades do espaço.", tags: ["Automação", "Redes", "Integração"] },
    ],
  },
  en: {
    label: "Choose a priority",
    detail: "What we connect",
    action: "Explore solutions",
    items: [
      { number: "01", title: "Protect", heading: "Better protection for people and property.", text: "Security, video surveillance and alerts work together, with information available wherever you are.", tags: ["Video surveillance", "Alarms", "Access"] },
      { number: "02", title: "Manage", heading: "Access and usage without uncertainty.", text: "Know who enters, how the space is being used and where capacity is available for people.", tags: ["Access control", "Smart Occupancy", "Monitoring"] },
      { number: "03", title: "Optimise", heading: "Greater efficiency without losing comfort.", text: "Monitor consumption and automate routines to reduce waste and adapt the space at the right time.", tags: ["Energy", "Climate", "Lighting"] },
      { number: "04", title: "Simplify", heading: "Several systems. One coherent experience.", text: "Equipment and platforms stop working as islands and start responding together to the needs of the space.", tags: ["Automation", "Networks", "Integration"] },
    ],
  },
};

export function HomeNeedsExplorer({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const content = copy[locale];
  const item = content.items[active];

  return (
    <div className="mt-12 overflow-hidden border border-[#cbd5e1] bg-white shadow-[0_22px_65px_rgba(15,35,60,.08)] lg:grid lg:grid-cols-[.72fr_1.28fr]">
      <div className="border-b border-[#d8e0e9] bg-[#eef2f6] p-3 lg:border-b-0 lg:border-r lg:p-5">
        <p className="px-3 pb-3 pt-2 text-[.68rem] font-bold uppercase tracking-[.18em] text-[#65758a]">{content.label}</p>
        <div role="tablist" aria-label={content.label} className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {content.items.map((option, index) => (
            <button
              key={option.number}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="home-need-panel"
              onClick={() => setActive(index)}
              className={`group flex min-h-16 items-center gap-3 border px-4 text-left transition-all sm:min-h-18 ${active === index ? "border-[#174f9c] bg-[#102844] text-white shadow-[0_10px_24px_rgba(16,40,68,.18)]" : "border-transparent bg-white/70 text-[#10233b] hover:border-[#b8c6d6] hover:bg-white"}`}
            >
              <span className={`text-[.65rem] font-bold tracking-[.12em] ${active === index ? "text-[#79aaff]" : "text-[#8290a2]"}`}>{option.number}</span>
              <span className="text-sm font-bold sm:text-base">{option.title}</span>
              <span className={`ml-auto h-px transition-all ${active === index ? "w-5 bg-[#79aaff]" : "w-0 bg-[#8290a2] group-hover:w-3"}`} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div id="home-need-panel" role="tabpanel" aria-live="polite" className="flex min-h-[25rem] flex-col justify-between p-7 sm:p-10 lg:p-14">
        <div key={item.number}>
          <div className="flex items-center gap-4"><span className="h-px w-10 bg-brand" /><span className="text-xs font-bold uppercase tracking-[.18em] text-brand">{content.detail}</span></div>
          <h3 className="mt-7 max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-.035em] sm:text-4xl">{item.heading}</h3>
          <p className="mt-6 max-w-2xl text-base leading-8 text-content-muted sm:text-lg">{item.text}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag) => <span key={tag} className="border border-[#cbd7e4] bg-[#f6f8fa] px-3 py-2 text-xs font-semibold text-[#42536a]">{tag}</span>)}
          </div>
        </div>
        <Link href={locale === "en" ? "/en/services" : "/servicos"} className="mt-10 inline-flex w-fit items-center border-b-2 border-brand pb-1 text-sm font-bold text-brand transition-colors hover:border-[#102844] hover:text-[#102844]">{content.action}</Link>
      </div>
    </div>
  );
}
