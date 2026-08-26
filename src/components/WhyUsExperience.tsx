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

export function WhyUsExperience({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const en = locale === "en";
  const systems = en ? ["Lighting", "Video surveillance", "Climate control", "Access", "Energy"] : isolatedSystems;
  const localPillars = en ? englishPillars : pillars;
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

        <div className="divide-y divide-[#d9e1eb] border-y border-[#d9e1eb] bg-white px-6 shadow-[0_12px_35px_rgba(19,44,78,0.05)] sm:px-8">
          {localPillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group grid gap-5 py-8 sm:grid-cols-[4rem_1fr] sm:py-10"
            >
              <span className="text-sm font-bold tracking-[0.14em] text-brand">
                {pillar.number}
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.025em] text-content-foreground sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-content-muted">
                  {pillar.description}
                </p>
                <p className="mt-5 flex items-start gap-3 text-sm font-semibold leading-6 text-content-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {pillar.highlight}
                </p>
              </div>
            </article>
          ))}
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
