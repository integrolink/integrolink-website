"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const purposeCopy = {
  pt: [
    { title: "Mais controlo", text: "Informação clara e comandos essenciais reunidos para decidir e agir sem perder tempo." },
    { title: "Menos complexidade", text: "Os sistemas trabalham em conjunto e a tecnologia deixa de exigir atenção constante." },
    { title: "Preparado para evoluir", text: "A solução começa com o que é necessário hoje e mantém espaço para novas necessidades." },
  ],
  en: [
    { title: "More control", text: "Clear information and essential controls come together so people can decide and act without wasting time." },
    { title: "Less complexity", text: "Systems work together and technology no longer demands constant attention." },
    { title: "Ready to evolve", text: "The solution starts with what is needed today and leaves room for future needs." },
  ],
};

const commitmentCopy = {
  pt: [
    { title: "Pensada para a sua realidade", text: "Compreendemos o espaço, as pessoas e a operação antes de propor uma solução." },
    { title: "Tecnologia independente", text: "Selecionamos tecnologia compatível e adequada ao objetivo, sem dependências desnecessárias." },
    { title: "Clara desde o primeiro dia", text: "Explicamos como funciona, o que entrega e como será utilizada no dia a dia." },
    { title: "Presentes depois da instalação", text: "Acompanhamos, mantemos e fazemos evoluir o sistema quando as necessidades mudam." },
  ],
  en: [
    { title: "Designed for your reality", text: "We understand the space, its people and operation before proposing a solution." },
    { title: "Independent technology", text: "We select compatible technology suited to the objective, without unnecessary dependencies." },
    { title: "Clear from day one", text: "We explain how it works, what it delivers and how it will be used every day." },
    { title: "Present after installation", text: "We support, maintain and evolve the system as needs change." },
  ],
};

const processCopy = {
  pt: [
    { verb: "Compreender", label: "Conhecemos o contexto", text: "Conversamos sobre o espaço, as prioridades, os utilizadores e os condicionantes do projeto." },
    { verb: "Desenhar", label: "Definimos a solução", text: "Escolhemos uma arquitetura clara, compatível e preparada para evoluir." },
    { verb: "Implementar", label: "Colocamos tudo a funcionar", text: "Instalamos, configuramos e testamos o conjunto em condições reais." },
    { verb: "Acompanhar", label: "Continuamos presentes", text: "Damos suporte, mantemos e ajustamos a solução ao longo do tempo." },
  ],
  en: [
    { verb: "Understand", label: "We learn the context", text: "We discuss the space, priorities, users and project constraints." },
    { verb: "Design", label: "We define the solution", text: "We choose a clear, compatible architecture that is ready to evolve." },
    { verb: "Implement", label: "We make it work", text: "We install, configure and test the complete solution under real conditions." },
    { verb: "Support", label: "We remain present", text: "We support, maintain and adapt the solution over time." },
  ],
};

export function HomePurposeInteraction({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = purposeCopy[locale];
  const item = items[active];

  return <div className="mt-8 border border-[#d8e0e9] bg-white">
    <div role="tablist" aria-label={locale === "en" ? "Purpose outcomes" : "Resultados do nosso propósito"} className="grid grid-cols-3 border-l border-t border-[#d8e0e9]">
      {items.map((option,index) => <button key={option.title} type="button" role="tab" aria-selected={active === index} aria-controls="purpose-panel" onClick={() => setActive(index)} className={`min-h-20 border-b border-r border-[#d8e0e9] px-2 py-3 text-left text-xs font-bold leading-5 transition-colors sm:px-4 sm:text-sm ${active === index ? "bg-[#102844] text-white" : "bg-[#f7f9fb] text-[#42536a] hover:bg-white"}`}><span className={`mb-2 block text-[.58rem] tracking-[.14em] ${active === index ? "text-[#79aaff]" : "text-brand"}`}>0{index + 1}</span>{option.title}</button>)}
    </div>
    <div id="purpose-panel" role="tabpanel" aria-live="polite" className="min-h-32 px-5 py-6 sm:px-7"><p key={item.title} className="max-w-2xl text-sm font-semibold leading-7 text-content-muted sm:text-base">{item.text}</p></div>
  </div>;
}

export function HomeCommitmentInteraction({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = commitmentCopy[locale];
  const item = items[active];

  return <div className="overflow-hidden border border-[#cbd5e1] bg-white shadow-[0_18px_45px_rgba(16,40,68,.07)]">
    <div role="tablist" aria-label={locale === "en" ? "Our commitments" : "Os nossos compromissos"} className="grid grid-cols-2 border-l border-t border-[#d8e0e9]">
      {items.map((option,index) => <button key={option.title} type="button" role="tab" aria-selected={active === index} aria-controls="commitment-panel" onClick={() => setActive(index)} className={`min-h-28 border-b border-r border-[#d8e0e9] p-4 text-left transition-colors sm:p-5 ${active === index ? "bg-brand text-white" : "bg-white text-content-foreground hover:bg-[#f4f7fa]"}`}><span className={`block text-[.62rem] font-bold tracking-[.14em] ${active === index ? "text-white/65" : "text-brand"}`}>0{index + 1}</span><span className="mt-3 block text-sm font-bold leading-5 sm:text-base">{option.title}</span></button>)}
    </div>
    <div id="commitment-panel" role="tabpanel" aria-live="polite" className="min-h-40 p-6 sm:p-8"><div key={item.title} className="border-l-2 border-brand pl-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-brand">{locale === "en" ? "Our commitment in practice" : "O compromisso na prática"}</p><p className="mt-4 max-w-2xl text-base leading-8 text-content-muted">{item.text}</p></div></div>
  </div>;
}

export function HomeProcessInteraction({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = processCopy[locale];
  const item = items[active];

  return <div className="mt-12 overflow-hidden border border-[#cbd5e1] bg-white shadow-[0_18px_45px_rgba(16,40,68,.06)]">
    <div className="h-1 bg-[#e3e9f0]"><div className="h-full bg-brand transition-[width] duration-300" style={{ width: `${((active + 1) / items.length) * 100}%` }} /></div>
    <div role="tablist" aria-label={locale === "en" ? "Project stages" : "Etapas do projeto"} className="grid grid-cols-4 border-l border-[#d8e0e9]">
      {items.map((option,index) => <button key={option.verb} type="button" role="tab" aria-selected={active === index} aria-controls="process-panel" onClick={() => setActive(index)} className={`min-h-24 border-b border-r border-[#d8e0e9] px-2 py-4 text-left transition-colors sm:px-5 ${active === index ? "bg-[#102844] text-white" : "bg-white text-content-foreground hover:bg-[#f4f7fa]"}`}><span className={`block text-[.62rem] font-bold tracking-[.14em] ${active === index ? "text-[#79aaff]" : "text-brand"}`}>0{index + 1}</span><span className="mt-2 block text-[.7rem] font-bold leading-4 sm:text-base">{option.verb}</span></button>)}
    </div>
    <div id="process-panel" role="tabpanel" aria-live="polite" className="grid min-h-52 gap-5 p-7 sm:grid-cols-[.7fr_1.3fr] sm:items-center sm:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-brand">{locale === "en" ? `Stage 0${active + 1}` : `Etapa 0${active + 1}`}</p><div key={item.verb}><h3 className="text-2xl font-bold tracking-[-.03em] sm:text-3xl">{item.label}</h3><p className="mt-4 max-w-2xl text-base leading-8 text-content-muted">{item.text}</p></div></div>
  </div>;
}
