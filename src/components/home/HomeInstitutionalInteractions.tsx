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
  const items = purposeCopy[locale];

  return <div className="relative mt-10 pl-8 sm:pl-0 sm:pt-8">
    <div className="absolute bottom-2 left-[.43rem] top-2 w-px bg-[linear-gradient(to_bottom,#2375ff,#b9c6d6_75%,transparent)] sm:bottom-auto sm:left-[8%] sm:right-[8%] sm:top-[2.7rem] sm:h-px sm:w-auto sm:bg-[linear-gradient(to_right,#2375ff,#91b7f8_50%,#b9c6d6)]" aria-hidden="true" />
    <div className="relative grid gap-9 sm:grid-cols-3 sm:gap-7">
      {items.map((item,index) => <article key={item.title} className={`relative sm:pt-10 ${index === 1 ? "sm:translate-y-6" : index === 2 ? "sm:translate-y-12" : ""}`}>
        <span className="absolute -left-[1.9rem] top-1 size-3 rounded-full bg-brand ring-4 ring-white sm:left-0 sm:top-0 sm:size-4" aria-hidden="true" />
        <span className="select-none text-5xl font-black tracking-[-.07em] text-brand/[.09] sm:text-6xl" aria-hidden="true">0{index + 1}</span>
        <h3 className="-mt-4 text-lg font-bold tracking-[-.02em] text-content-foreground sm:text-xl">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-content-muted">{item.text}</p>
      </article>)}
    </div>
  </div>;
}

export function HomeCommitmentInteraction({ locale }: { locale: Locale }) {
  const items = commitmentCopy[locale];
  const verbs = locale === "en" ? ["Understand", "Select", "Explain", "Support"] : ["Compreender", "Selecionar", "Explicar", "Acompanhar"];

  return <div className="relative border-y border-[#cbd5e1]">
    <span className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-90 select-none text-[5rem] font-black uppercase tracking-[.18em] text-brand/[.035] xl:block" aria-hidden="true">IntegroLink</span>
    <div className="divide-y divide-[#cbd5e1]">
      {items.map((item,index) => <article key={item.title} className={`relative grid gap-x-5 py-6 sm:grid-cols-[4rem_.72fr_1.28fr] sm:items-center sm:py-7 ${index % 2 === 1 ? "sm:ml-10" : "sm:mr-10"}`}>
        <span className="row-span-2 text-4xl font-black tracking-[-.06em] text-brand/18 sm:text-5xl" aria-hidden="true">0{index + 1}</span>
        <div><p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-brand">{verbs[index]}</p><h3 className="mt-2 text-lg font-bold leading-6 tracking-[-.02em] text-content-foreground">{item.title}</h3></div>
        <p className="mt-3 text-sm leading-7 text-content-muted sm:mt-0 sm:border-l sm:border-[#d6dee8] sm:pl-6">{item.text}</p>
      </article>)}
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
