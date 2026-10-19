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

  return <div className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-12 sm:gap-y-10 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center lg:gap-5">
    <article className="border-t border-[#cbd5e1] pt-5 lg:border-0 lg:pr-7 lg:text-right">
      <h3 className="text-lg font-bold tracking-[-.02em] text-content-foreground sm:text-xl">{items[0].title}</h3>
      <p className="mt-3 text-[.78rem] leading-6 text-content-muted sm:text-sm sm:leading-7">{items[0].text}</p>
    </article>

    <div className="relative order-first col-span-full mx-auto grid aspect-square w-[min(18rem,80vw)] place-items-center rounded-full border border-brand/35 bg-[radial-gradient(circle_at_center,rgba(35,117,255,.11)_0,rgba(35,117,255,.04)_48%,transparent_49%)] sm:w-72 lg:order-none lg:col-span-1 lg:w-full" aria-label={locale === "en" ? "People at the centre of the solution" : "As pessoas no centro da solução"}>
      <div className="absolute inset-[12%] rounded-full border border-brand/20" aria-hidden="true" />
      <div className="absolute inset-[27%] rounded-full bg-brand shadow-[0_18px_50px_rgba(35,117,255,.25)]" aria-hidden="true" />
      <p className="relative max-w-32 text-center text-sm font-bold leading-5 text-white sm:text-base">{locale === "en" ? <>People at the<br/>centre</> : <>As pessoas<br/>no centro</>}</p>
      <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[.62rem] font-bold uppercase tracking-[.18em] text-brand">IntegroLink</span>
    </div>

    <article className="border-t border-[#cbd5e1] pt-5 lg:border-0 lg:pl-7">
      <h3 className="text-lg font-bold tracking-[-.02em] text-content-foreground sm:text-xl">{items[1].title}</h3>
      <p className="mt-3 text-[.78rem] leading-6 text-content-muted sm:text-sm sm:leading-7">{items[1].text}</p>
    </article>

    <article className="col-span-2 mx-auto max-w-md border-t border-[#cbd5e1] pt-5 text-center lg:col-span-1 lg:col-start-2 lg:mx-8 lg:max-w-none">
      <h3 className="text-lg font-bold tracking-[-.02em] text-content-foreground sm:text-xl">{items[2].title}</h3>
      <p className="mt-3 text-[.78rem] leading-6 text-content-muted sm:text-sm sm:leading-7">{items[2].text}</p>
    </article>
  </div>;
}

export function HomeCommitmentInteraction({ locale }: { locale: Locale }) {
  const items = commitmentCopy[locale];
  const verbs = locale === "en" ? ["Understand", "Select", "Explain", "Support"] : ["Compreender", "Selecionar", "Explicar", "Acompanhar"];

  return <div className="relative border-y border-[#cbd5e1]">
    <div className="grid grid-cols-2">
      {items.map((item,index) => <article key={item.title} className={`relative overflow-hidden py-7 ${index % 2 === 0 ? "pr-4 sm:pr-9" : "border-l border-[#cbd5e1] pl-4 sm:pl-9"} ${index > 1 ? "border-t border-[#cbd5e1]" : ""}`}>
        <p className="pointer-events-none absolute -right-2 -top-2 select-none text-[2rem] font-black uppercase tracking-[-.06em] text-brand/[.055] sm:-top-3 sm:text-[3.5rem]" aria-hidden="true">{verbs[index]}</p>
        <p className="relative text-[.65rem] font-bold uppercase tracking-[.18em] text-brand">{verbs[index]}</p>
        <h3 className="relative mt-4 max-w-xs text-base font-bold leading-6 tracking-[-.025em] text-content-foreground sm:text-xl sm:leading-7">{item.title}</h3>
        <p className="relative mt-3 max-w-sm text-[.76rem] leading-6 text-content-muted sm:mt-4 sm:text-sm sm:leading-7">{item.text}</p>
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
