"use client";

import { useState } from "react";

const isolatedSystems = [
  "Iluminação",
  "Videovigilância",
  "Climatização",
  "Acessos",
  "Energia",
];

const pillars = [
  {
    number: "01",
    title: "Soluções verdadeiramente integradas",
    description:
      "Integramos equipamentos e sistemas numa experiência coerente, para que iluminação, segurança, climatização, acessos e energia possam comunicar entre si.",
    highlight: "Vários sistemas. Uma plataforma central.",
  },
  {
    number: "02",
    title: "Soluções à medida",
    description:
      "Cada projeto começa por compreender como o cliente vive ou trabalha, os problemas que pretende resolver, os objetivos e o orçamento disponível.",
    highlight: "A solução adapta-se às necessidades reais.",
  },
  {
    number: "03",
    title: "Independência tecnológica",
    description:
      "Selecionamos as tecnologias mais adequadas para cada projeto, privilegiando soluções abertas e compatíveis entre si.",
    highlight: "A tecnologia certa, sem dependências desnecessárias.",
  },
  {
    number: "04",
    title: "Pensamos no futuro",
    description:
      "Uma instalação pode começar simples e evoluir com painéis solares, bomba de calor, carregamento elétrico, alarme ou videovigilância.",
    highlight: "Preparada hoje para acompanhar o amanhã.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    description:
      "Continuamos presentes depois da instalação através de suporte técnico, manutenção, atualizações, otimização e expansão da solução.",
    highlight: "A relação não termina quando o sistema é entregue.",
  },
  {
    number: "06",
    title: "Simplicidade",
    description:
      "A complexidade tecnológica fica nos bastidores. Para o cliente, tudo deve ser simples, intuitivo e funcionar quando é necessário.",
    highlight: "Carregar num botão. O resto simplesmente acontece.",
  },
];

const englishPillars = [
  { number:"01", title:"Truly integrated solutions", description:"We integrate equipment and systems into one coherent experience, allowing lighting, security, climate control, access and energy to communicate.", highlight:"Multiple systems. One central platform." },
  { number:"02", title:"Tailored solutions", description:"Every project begins by understanding how the client lives or works, the problems to solve, the objectives and the available budget.", highlight:"The solution adapts to real needs." },
  { number:"03", title:"Technology independence", description:"We select the most suitable technologies for each project, prioritising open solutions that are compatible with each other.", highlight:"The right technology, without unnecessary dependencies." },
  { number:"04", title:"Built for the future", description:"An installation can start simple and evolve to include solar panels, a heat pump, EV charging, an alarm or video surveillance.", highlight:"Prepared today to keep pace with tomorrow." },
  { number:"05", title:"Ongoing support", description:"We remain present after installation with technical support, maintenance, updates, optimisation and solution expansion.", highlight:"The relationship does not end when the system is delivered." },
  { number:"06", title:"Simplicity", description:"Technology complexity remains behind the scenes. For the client, everything should be simple, intuitive and work when needed.", highlight:"Press one button. The rest simply happens." },
];

const teamExpertise = [
  {
    number: "01",
    short: "Software",
    role: "Engenharia informática",
    title: "A lógica que une toda a solução.",
    description: "Experiência de vários anos em desenvolvimento de software permite desenhar integrações sólidas, interfaces claras e automatizações adaptadas ao funcionamento real de cada espaço.",
    strengths: ["Desenvolvimento de software", "Integração de sistemas", "Automação e interfaces"],
  },
  {
    number: "02",
    short: "Terreno",
    role: "Instalação elétrica",
    title: "Experiência prática onde tudo acontece.",
    description: "Um eletricista com forte experiência no terreno assegura que cada solução é pensada para as condições reais da instalação e executada com rigor, segurança e atenção ao detalhe.",
    strengths: ["Instalação e execução", "Diagnóstico no local", "Segurança e fiabilidade"],
  },
  {
    number: "03",
    short: "Engenharia",
    role: "Engenharia eletrotécnica",
    title: "Conhecimento técnico para decisões exigentes.",
    description: "A experiência em circuitos elétricos e sistemas de alta tensão acrescenta profundidade técnica ao dimensionamento, à análise e à integração de infraestruturas elétricas.",
    strengths: ["Circuitos elétricos", "Sistemas de alta tensão", "Dimensionamento técnico"],
  },
];

const englishTeamExpertise = [
  { number:"01", short:"Software", role:"Computer engineering", title:"The logic that brings the solution together.", description:"Several years of software development experience support robust integrations, clear interfaces and automations tailored to the real operation of each space.", strengths:["Software development","Systems integration","Automation and interfaces"] },
  { number:"02", short:"On site", role:"Electrical installation", title:"Practical experience where everything happens.", description:"An electrician with extensive field experience ensures every solution reflects real installation conditions and is delivered with rigour, safety and attention to detail.", strengths:["Installation and delivery","On-site diagnostics","Safety and reliability"] },
  { number:"03", short:"Engineering", role:"Electrical engineering", title:"Technical knowledge for demanding decisions.", description:"Experience in electrical circuits and high-voltage systems adds technical depth to the design, analysis and integration of electrical infrastructure.", strengths:["Electrical circuits","High-voltage systems","Technical design"] },
];

export function WhyUsExperience({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const en = locale === "en";
  const systems = en ? ["Lighting", "Video surveillance", "Climate control", "Access", "Energy"] : isolatedSystems;
  const localPillars = en ? englishPillars : pillars;
  const localTeam = en ? englishTeamExpertise : teamExpertise;
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const expertise = localTeam[activeExpertise];
  const pillar = localPillars[activePillar];
  return (
    <div className="mt-16 sm:mt-24">
      <section className="border border-[#d9e1eb] bg-white shadow-[0_16px_45px_rgba(19,44,78,0.07)]">
        <div className="border-b border-[#e2e8f0] px-6 py-6 sm:px-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {en ? "Integration, not fragmentation" : "Integração, não fragmentação"}
          </p>
          <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.035em] text-content-foreground sm:text-4xl">
            {en ? "Fewer applications. One coherent experience." : "Menos aplicações. Uma experiência coerente."}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="p-6 sm:p-9">
            <p className="text-sm font-semibold text-content-muted">
              {en ? "Standalone systems" : "Sistemas isolados"}
            </p>
            <div className="mt-6 space-y-3">
              {systems.map((system, index) => (
                <div
                  key={system}
                  className="flex items-center justify-between border border-[#d9e1eb] bg-[#f7f9fc] px-4 py-3"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#8794a6]">
                    {en ? "Application" : "Aplicação"} {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-content-muted">
                    {system}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid place-items-center border-y border-[#e2e8f0] px-6 py-5 lg:border-x lg:border-y-0">
            <span className="relative block h-12 w-px bg-[#cfd8e5] lg:h-px lg:w-12" aria-hidden="true">
              <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand ring-4 ring-brand/10" />
            </span>
          </div>

          <div className="flex min-h-72 items-center justify-center p-6 sm:p-9">
            <div className="relative grid aspect-square w-full max-w-64 place-items-center rounded-full border border-brand/50 bg-brand/8 text-center shadow-[0_0_80px_rgba(35,117,255,0.12)]">
              <div
                aria-hidden="true"
                className="absolute inset-5 rounded-full border border-brand/20"
              />
              <div className="relative px-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  IntegroLink
                </p>
                <p className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em] text-content-foreground">
                  {en ? "One central platform" : "Uma plataforma central"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 overflow-hidden border border-[#20354f] bg-[#10233b] text-white shadow-[0_24px_70px_rgba(12,31,53,.15)]">
        <div className="grid gap-8 border-b border-white/12 px-6 py-9 sm:px-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:px-12 lg:py-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#79aaff]">{en ? "Complementary expertise" : "Competências complementares"}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-.04em] sm:text-5xl">{en ? "A multidisciplinary team behind every solution." : "Uma equipa multidisciplinar por detrás de cada solução."}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{en ? "Software, field execution and electrical engineering are considered together from the outset. This reduces gaps between design, installation and day-to-day use." : "Software, execução no terreno e engenharia eletrotécnica são pensados em conjunto desde o início. Assim, reduzimos as falhas entre o projeto, a instalação e a utilização diária."}</p>
        </div>

        <div className="grid lg:grid-cols-[.72fr_1.28fr]">
          <div className="border-b border-white/12 p-4 lg:border-b-0 lg:border-r lg:p-6">
            <p className="px-3 pb-4 pt-2 text-[.68rem] font-bold uppercase tracking-[.18em] text-white/40">{en ? "Explore the team" : "Conheça as competências"}</p>
            <div role="tablist" aria-label={en ? "Team expertise" : "Competências da equipa"} className="grid grid-cols-3 gap-2 lg:grid-cols-1">
              {localTeam.map((item, index) => <button key={item.number} type="button" role="tab" aria-selected={activeExpertise === index} aria-controls="expertise-panel" onClick={() => setActiveExpertise(index)} className={`min-h-20 border px-3 py-4 text-left transition-colors sm:px-4 ${activeExpertise === index ? "border-white bg-white text-[#10233b]" : "border-white/12 bg-white/[.035] text-white/68 hover:bg-white/10 hover:text-white"}`}>
                <span className={`block text-[.62rem] font-bold tracking-[.14em] ${activeExpertise === index ? "text-brand" : "text-[#79aaff]"}`}>{item.number}</span>
                <span className="mt-2 block text-xs font-bold sm:text-base">{item.short}</span>
              </button>)}
            </div>
          </div>

          <div id="expertise-panel" role="tabpanel" aria-live="polite" className="flex min-h-[29rem] flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div key={expertise.number}>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#79aaff]">{expertise.role}</p>
              <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-.035em] sm:text-4xl">{expertise.title}</h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{expertise.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {expertise.strengths.map((strength) => <span key={strength} className="border border-white/15 bg-white/[.045] px-3 py-2 text-xs font-semibold text-white/72">{strength}</span>)}
              </div>
            </div>
            <p className="mt-12 border-t border-white/12 pt-6 text-sm font-semibold leading-7 text-white/85">{en ? "Three perspectives, considered as one project." : "Três perspetivas, pensadas como um único projeto."}</p>
          </div>
        </div>
      </section>

      <section className="mt-24 grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="lg:sticky lg:top-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {en ? "Our way of working" : "A nossa forma de trabalhar"}
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.045em] text-content-foreground sm:text-5xl">
            {en ? "Six principles. One solution designed as a whole." : "Seis princípios. Uma solução pensada como um todo."}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-content-muted">
            {en ? "We do not start with equipment or brands. We start with what needs to work better." : "Não começamos por equipamentos ou marcas. Começamos por aquilo que precisa de funcionar melhor."}
          </p>
        </div>

        <div className="overflow-hidden border border-[#d9e1eb] bg-white shadow-[0_16px_45px_rgba(19,44,78,0.07)]">
          <div role="tablist" aria-label={en ? "Our six principles" : "Os nossos seis princípios"} className="grid grid-cols-2 border-l border-t border-[#d9e1eb] sm:grid-cols-3">
            {localPillars.map((item, index) => <button key={item.number} type="button" role="tab" aria-selected={activePillar === index} aria-controls="pillar-panel" onClick={() => setActivePillar(index)} className={`min-h-24 border-b border-r border-[#d9e1eb] px-4 py-4 text-left transition-colors ${activePillar === index ? "bg-[#102844] text-white" : "bg-white text-content-foreground hover:bg-[#f3f6f9]"}`}>
              <span className={`block text-[.62rem] font-bold tracking-[.14em] ${activePillar === index ? "text-[#79aaff]" : "text-brand"}`}>{item.number}</span>
              <span className="mt-2 block text-sm font-bold leading-5">{item.title}</span>
            </button>)}
          </div>
          <article id="pillar-panel" role="tabpanel" aria-live="polite" className="min-h-[22rem] p-7 sm:p-10">
            <div key={pillar.number}>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-brand">{en ? "Principle" : "Princípio"} {pillar.number}</p>
              <h3 className="mt-5 text-2xl font-bold tracking-[-.03em] text-content-foreground sm:text-3xl">{pillar.title}</h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-content-muted">{pillar.description}</p>
              <p className="mt-8 border-l-2 border-brand pl-5 text-base font-bold leading-7 text-content-foreground">{pillar.highlight}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-24 border border-[#d9e1eb] border-l-2 border-l-brand bg-white px-6 py-10 shadow-[0_14px_38px_rgba(19,44,78,0.06)] sm:px-10 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
          {en ? "The IntegroLink philosophy" : "A filosofia IntegroLink"}
        </p>
        <blockquote className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.045em] text-content-foreground sm:text-5xl">
          {en ? "Technology should adapt to people, not the other way around." : "A tecnologia deve adaptar-se às pessoas, não o contrário."}
        </blockquote>
        <p className="mt-8 max-w-3xl text-base leading-8 text-content-muted sm:text-lg">
          {en ? "We do not merely sell equipment, brands or applications. We develop integrated technology ecosystems that simplify everyday life for people and businesses." : "Não vendemos apenas equipamentos, marcas ou aplicações. Desenvolvemos ecossistemas tecnológicos integrados que simplificam o dia a dia das pessoas e das empresas."}
        </p>
      </section>
    </div>
  );
}
