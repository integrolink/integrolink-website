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

  return <div className="relative mt-10">
    <div className="absolute left-2 right-2 top-3 h-px bg-[#cbd6e2]" aria-hidden="true"><span className="block h-px bg-brand transition-[width] duration-300" style={{ width: `${(active / (items.length - 1)) * 100}%` }} /></div>
    <div role="tablist" aria-label={locale === "en" ? "Purpose outcomes" : "Resultados do nosso propósito"} className="relative grid grid-cols-3 gap-3">
      {items.map((option,index) => <button key={option.title} type="button" role="tab" aria-selected={active === index} aria-controls="purpose-panel" onClick={() => setActive(index)} className="group text-left">
        <span className={`block size-6 rounded-full border-[5px] transition-all ${active === index ? "border-brand bg-white ring-4 ring-brand/10" : "border-[#cbd6e2] bg-white group-hover:border-[#7ca8ed]"}`} aria-hidden="true" />
        <span className={`mt-4 block text-xs font-bold leading-5 transition-colors sm:text-sm ${active === index ? "text-[#102844]" : "text-[#718096]"}`}>{option.title}</span>
      </button>)}
    </div>
    <div id="purpose-panel" role="tabpanel" aria-live="polite" className="relative mt-8 min-h-36 overflow-hidden bg-[linear-gradient(100deg,#edf4ff_0%,rgba(237,244,255,.25)_70%,transparent_100%)] px-6 py-7 sm:px-8">
      <span className="absolute -right-1 -top-7 select-none text-[7rem] font-black leading-none text-brand/[.055]" aria-hidden="true">0{active + 1}</span>
      <p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-brand">{locale === "en" ? "The outcome" : "O resultado"}</p>
      <p key={item.title} className="relative mt-3 max-w-xl text-base font-semibold leading-8 text-content-muted">{item.text}</p>
    </div>
  </div>;
}

export function HomeCommitmentInteraction({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = commitmentCopy[locale];
  const item = items[active];

  return <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
    <div className="relative min-h-[25rem] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9cce4]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/25 bg-brand/[.035]" aria-hidden="true" />
      <svg className="absolute inset-0 size-full text-[#b9cce4]" viewBox="0 0 500 400" preserveAspectRatio="none" aria-hidden="true"><path d="M250 200 90 80M250 200 410 80M250 200 90 320M250 200 410 320" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 6"/></svg>
      <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#102844] text-center shadow-[0_18px_50px_rgba(16,40,68,.22)]"><span className="text-[.68rem] font-bold uppercase tracking-[.14em] text-white">Integro<br/><span className="text-[#79aaff]">Link</span></span></div>
      <div role="tablist" aria-label={locale === "en" ? "Our commitments" : "Os nossos compromissos"}>
        {items.map((option,index) => {
          const positions = ["left-0 top-8", "right-0 top-8 text-right", "bottom-8 left-0", "bottom-8 right-0 text-right"];
          return <button key={option.title} type="button" role="tab" aria-selected={active === index} aria-controls="commitment-panel" onClick={() => setActive(index)} className={`absolute max-w-[9rem] sm:max-w-[12rem] ${positions[index]} group`}><span className={`inline-flex size-8 items-center justify-center rounded-full text-[.62rem] font-bold transition-all ${active === index ? "bg-brand text-white ring-4 ring-brand/12" : "border border-[#b9cce4] bg-white text-brand group-hover:border-brand"}`}>0{index + 1}</span><span className={`mt-2 block text-xs font-bold leading-5 transition-colors sm:text-sm ${active === index ? "text-brand" : "text-content-foreground"}`}>{option.title}</span></button>;
        })}
      </div>
    </div>
    <div id="commitment-panel" role="tabpanel" aria-live="polite" className="relative min-h-60 border-l border-[#b9cce4] pl-7 sm:pl-10">
      <span className="text-[.65rem] font-bold uppercase tracking-[.18em] text-brand">{locale === "en" ? "Our commitment in practice" : "O compromisso na prática"}</span>
      <div key={item.title}><h3 className="mt-5 max-w-md text-2xl font-bold leading-tight tracking-[-.03em] sm:text-3xl">{item.title}</h3><p className="mt-5 max-w-lg text-base leading-8 text-content-muted">{item.text}</p></div>
      <span className="absolute bottom-0 left-0 h-16 w-px bg-brand" aria-hidden="true" />
    </div>
  </div>;
}

export function HomeProcessInteraction({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = processCopy[locale];
  const item = items[active];

  return <div className="mt-14">
    <div className="relative px-1 pt-1">
      <div className="absolute left-[7%] right-[7%] top-6 h-px bg-[#b9c6d6]" aria-hidden="true"><span className="block h-px bg-brand transition-[width] duration-300" style={{ width: `${(active / (items.length - 1)) * 100}%` }} /></div>
      <div role="tablist" aria-label={locale === "en" ? "Project stages" : "Etapas do projeto"} className="relative grid grid-cols-4">
        {items.map((option,index) => <button key={option.verb} type="button" role="tab" aria-selected={active === index} aria-controls="process-panel" onClick={() => setActive(index)} className="group flex flex-col items-center text-center"><span className={`grid size-11 place-items-center rounded-full border text-[.65rem] font-bold transition-all ${active === index ? "border-brand bg-brand text-white shadow-[0_0_0_6px_rgba(35,117,255,.1)]" : "border-[#b9c6d6] bg-white text-[#708197] group-hover:border-brand group-hover:text-brand"}`}>0{index + 1}</span><span className={`mt-4 text-[.68rem] font-bold leading-4 transition-colors sm:text-base ${active === index ? "text-[#102844]" : "text-[#708197]"}`}>{option.verb}</span></button>)}
      </div>
    </div>
    <div id="process-panel" role="tabpanel" aria-live="polite" className="relative mt-12 grid min-h-60 overflow-hidden bg-[#102844] text-white sm:grid-cols-[.42fr_1.58fr] sm:items-center">
      <div className="relative grid min-h-36 place-items-center overflow-hidden bg-brand sm:min-h-full"><span className="select-none text-7xl font-black tracking-[-.08em] text-white/18 sm:text-8xl" aria-hidden="true">0{active + 1}</span><span className="absolute text-[.65rem] font-bold uppercase tracking-[.2em] text-white">{locale === "en" ? "Stage" : "Etapa"}</span></div>
      <div key={item.verb} className="px-7 py-8 sm:px-12"><h3 className="text-2xl font-bold tracking-[-.03em] sm:text-4xl">{item.label}</h3><p className="mt-4 max-w-2xl text-base leading-8 text-white/65">{item.text}</p></div>
    </div>
  </div>;
}
