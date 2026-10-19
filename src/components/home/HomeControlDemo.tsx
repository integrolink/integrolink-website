"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  pt: {
    eyebrow: "Uma solução em utilização",
    title: "Uma interface. Várias formas de controlar o espaço.",
    intro: "Da visão geral ao assistente de IA, a informação mantém o mesmo contexto. Não são aplicações soltas: são diferentes portas de entrada para a mesma solução.",
    select: "Explorar a interface",
    items: [
      { label: "Visão geral", title: "O essencial, visível num instante.", text: "Clima, iluminação, segurança e energia organizados em torno das decisões do dia a dia.", image: "/fotos/foto4.jpeg", alt: "Interface principal da habitação IntegroLink" },
      { label: "Segurança", title: "Ver e agir sem trocar de aplicação.", text: "Câmaras, estados e alertas ficam disponíveis no mesmo ambiente de controlo.", image: "/fotos/foto2.jpeg", alt: "Ecrã de videovigilância e energia" },
      { label: "Conforto", title: "O espaço responde ao momento.", text: "Conforto e segurança deixam de ser comandos isolados e passam a funcionar em conjunto.", image: "/fotos/foto3.jpeg", alt: "Ecrã de conforto e segurança" },
      { label: "Assistente IA", title: "Também pode simplesmente pedir.", text: "O assistente interpreta pedidos naturais, consulta o estado do espaço e atua nos dispositivos autorizados — sempre dentro da solução integrada.", image: "/fotos/foto14.jpeg", alt: "Conversa com o assistente de IA IntegroLink" },
    ],
  },
  en: {
    eyebrow: "A solution in use",
    title: "One interface. Several ways to control the space.",
    intro: "From the overview to the AI assistant, information keeps the same context. These are not separate apps: they are different entry points into the same solution.",
    select: "Explore the interface",
    items: [
      { label: "Overview", title: "What matters, visible at a glance.", text: "Climate, lighting, security and energy organised around everyday decisions.", image: "/fotos/foto4.jpeg", alt: "Main IntegroLink home interface" },
      { label: "Security", title: "See and act without switching apps.", text: "Cameras, system states and alerts remain available in the same control environment.", image: "/fotos/foto2.jpeg", alt: "Video surveillance and energy screen" },
      { label: "Comfort", title: "The space responds to the moment.", text: "Comfort and security stop being isolated commands and start working together.", image: "/fotos/foto3.jpeg", alt: "Comfort and security screen" },
      { label: "AI assistant", title: "You can also simply ask.", text: "The assistant interprets natural requests, checks the space and acts on authorised devices — always within the integrated solution.", image: "/fotos/foto14.jpeg", alt: "Conversation with the IntegroLink AI assistant" },
    ],
  },
};

export function HomeControlDemo({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const content = copy[locale];
  const item = content.items[active];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-x-20 lg:gap-y-0">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#79aaff]">{content.eyebrow}</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-5xl">{content.title}</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">{content.intro}</p>
        <p className="mt-9 text-[.68rem] font-bold uppercase tracking-[.18em] text-white/42">{content.select}</p>
        <div role="tablist" aria-label={content.select} className="mt-3 grid grid-cols-2 border-l border-t border-white/15">
          {content.items.map((option, index) => (
            <button key={option.label} type="button" role="tab" aria-selected={active === index} aria-controls="home-control-panel" onClick={() => setActive(index)} className={`min-h-14 border-b border-r border-white/15 px-3 text-left text-sm font-semibold transition-colors sm:px-4 ${active === index ? "bg-white text-[#10233b]" : "bg-white/[.035] text-white/70 hover:bg-white/10 hover:text-white"}`}>
              <span className="mr-2 text-[.62rem] font-bold text-[#5d91e9]">0{index + 1}</span>{option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-2 sm:py-8 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <div className="absolute inset-x-[8%] top-[16%] h-[65%] border border-white/10 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true" />
        <div key={item.image} className="relative mx-auto w-[min(13rem,58vw)] overflow-hidden rounded-[1.45rem] border border-white/25 bg-[#090d13] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,.42)] sm:w-[min(16.5rem,72vw)] sm:rounded-[1.65rem] sm:p-2">
          <div className="relative aspect-[.49] overflow-hidden rounded-[1.2rem] bg-[#111820]">
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 72vw, 264px" className="object-contain" priority={active === 0} />
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[4%] hidden max-w-40 border border-white/15 bg-[#0b1d32]/95 p-4 shadow-xl sm:block">
          <span className="block h-1 w-8 bg-[#5d91e9]" />
          <span className="mt-3 block text-xs font-semibold leading-5 text-white/72">{item.label}</span>
        </div>
      </div>
      <div id="home-control-panel" role="tabpanel" aria-live="polite" key={item.label} className="min-h-28 border-l-2 border-[#5d91e9] pl-5 lg:col-start-1 lg:row-start-2 lg:mt-7 lg:min-h-32">
        <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">{item.text}</p>
      </div>
    </div>
  );
}
