import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n";

type IconName =
  | "automation"
  | "security"
  | "network"
  | "access"
  | "energy"
  | "occupancy"
  | "support"
  | "home"
  | "lodging"
  | "business"
  | "building";

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "automation", title: "Automação e Integração", text: "Ligamos diferentes tecnologias numa única plataforma." },
  { icon: "security", title: "Segurança Eletrónica", text: "Proteção inteligente para pessoas e património." },
  { icon: "network", title: "Redes e Comunicações", text: "Infraestruturas robustas para uma ligação fiável." },
  { icon: "access", title: "Controlo de Acessos", text: "Entradas e saídas simples, seguras e controladas." },
  { icon: "energy", title: "Gestão Energética", text: "Monitorização e otimização dos consumos." },
  { icon: "support", title: "Manutenção e Suporte", text: "Acompanhamento contínuo após a instalação." },
];

const sectors: { id: string; icon: IconName; title: string; text: string }[] = [
  { id: "habitacoes", icon: "home", title: "Habitações", text: "Conforto, segurança e eficiência." },
  { id: "alojamentos", icon: "lodging", title: "Alojamento Local", text: "Uma operação simples, mesmo à distância." },
  { id: "negocios", icon: "business", title: "Pequenos Negócios", text: "Tecnologia ao serviço do crescimento." },
  { id: "espacos-partilhados", icon: "occupancy", title: "Espaços Partilhados", text: "Ocupação e disponibilidade em tempo real." },
  { id: "condominios", icon: "building", title: "Condomínios", text: "Espaços comuns mais seguros e eficientes." },
];

const reasons = [
  "Projetos personalizados",
  "Soluções integradas",
  "Preparadas para o futuro",
  "Tecnologias compatíveis",
  "Instalação profissional",
  "Suporte contínuo",
];

const process = [
  ["01", "Conhecemos o projeto", "Ouvimos e compreendemos o espaço."],
  ["02", "Desenvolvemos a solução", "Desenhamos a integração certa."],
  ["03", "Instalamos e configuramos", "Implementamos e testamos tudo."],
  ["04", "Acompanhamos", "Mantemos a solução a evoluir."],
];

function LineIcon({ name, className = "size-7" }: { name: IconName; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...common}>
      {name === "automation" && <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m14 0h3M2 15h3m14 0h3m-13-3h8M12 8v8" /></>}
      {name === "security" && <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>}
      {name === "network" && <><circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="m7 7 3.2 3.2M17 7l-3.2 3.2M7 17l3.2-3.2M17 17l-3.2-3.2" /></>}
      {name === "access" && <><rect x="4" y="3" width="13" height="18" rx="1" /><path d="M8 7h5M8 11h5M8 15h2m7-4h3m0 0-2-2m2 2-2 2" /></>}
      {name === "energy" && <path d="M13 2 5 14h7l-1 8 8-12h-7z" />}
      {name === "occupancy" && <><path d="M4 20v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><circle cx="12" cy="6" r="2" /><path d="M7 16h2m2 0h2m2 0h2" /></>}
      {name === "support" && <><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3z" /><path d="m5 18 1 1" /></>}
      {name === "home" && <><path d="m3 11 9-7 9 7M5.5 9.5V20h13V9.5M9.5 20v-6h5v6" /></>}
      {name === "lodging" && <><path d="M4 19V7m0 8h16v4M7 11h4a3 3 0 0 1 3 3v1H7zm12-3v3m-1.5-1.5 3-3" /></>}
      {name === "business" && <><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M8 7V4h8v3M3 12h18m-11 0v2h4v-2" /></>}
      {name === "building" && <><path d="M5 21V4h10v17m0-12h4v12M8 8h2m-2 4h2m-2 4h2m7-3h.01m-.01 4h.01M3 21h18" /></>}
    </svg>
  );
}

function EcosystemGraphic({ locale }: { locale: Locale }) {
  const nodes = locale === "en" ? [
    ["Lighting", "3", "15"], ["Security", "69", "15"], ["Climate", "1", "76"],
    ["Energy", "71", "76"], ["Network", "0", "46"], ["Access", "72", "46"],
  ] : [
    ["Iluminação", "3", "15"], ["Segurança", "69", "15"], ["Climatização", "1", "76"],
    ["Energia", "71", "76"], ["Rede", "0", "46"], ["Acessos", "72", "46"],
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[35rem] overflow-hidden rounded-[1.25rem] border border-[#dbe4ef] bg-[#f8fbff]" aria-label="Seis sistemas ligados à IntegroLink">
      <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <pattern id="system-grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M5 0H0V5" fill="none" stroke="#154699" strokeWidth=".12" opacity=".12" />
          </pattern>
          <radialGradient id="system-glow">
            <stop offset="0" stopColor="#2375FF" stopOpacity=".14" />
            <stop offset="1" stopColor="#2375FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#system-grid)" />
        <circle cx="50" cy="50" r="35" fill="url(#system-glow)" />
        <path d="M50 50C39 43 34 29 28 21M50 50C61 43 66 29 72 21M50 50C38 50 32 50 26 50M50 50C62 50 68 50 74 50M50 50C39 58 34 70 28 81M50 50C61 58 66 70 72 81" fill="none" stroke="#2375FF" strokeWidth=".42" opacity=".55" className="signal-path" />
        {["28,21", "72,21", "26,50", "74,50", "28,81", "72,81"].map((point) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} cx={cx} cy={cy} r=".8" fill="#2375FF" />;
        })}
        <circle cx="50" cy="50" r="18" fill="#2375FF" opacity=".07" className="hub-pulse" />
      </svg>
      {nodes.map(([label, left, top]) => (
        <div
          key={label}
          style={{ left: `${left}%`, top: `${top}%` }}
          className="absolute flex h-[10%] w-[28%] min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#cfdae8] bg-white/95 px-1.5 text-center text-[0.48rem] font-bold tracking-[0.035em] text-[#30435c] shadow-[0_8px_20px_rgba(19,44,78,0.08)] backdrop-blur-sm sm:w-[26%] sm:px-3 sm:text-[0.68rem]"
        >
          <span className="size-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_0_3px_rgba(35,117,255,.1)]" aria-hidden="true" />
          {label}
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 grid size-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#2f7cff] bg-[linear-gradient(145deg,#102844,#08192e)] text-center shadow-[0_18px_45px_rgba(21,70,153,.24)] ring-8 ring-brand/[.06]">
        <div>
          <span className="block text-[0.52rem] font-bold uppercase tracking-[.18em] text-[#67a0ff] sm:text-xs">IntegroLink</span>
          <span className="mt-1 block text-[0.65rem] font-semibold text-white sm:text-base">{locale === "en" ? "Integrated system" : "Sistema integrado"}</span>
        </div>
      </div>
    </div>
  );
}

export function HomeExperience({ locale = "pt" }: { locale?: Locale }) {
  const en = locale === "en";
  const visibleServices = en ? [
    { icon: "automation" as IconName, title: "Automation & Integration", text: "Connecting different technologies on one platform." },
    { icon: "security" as IconName, title: "Electronic Security", text: "Intelligent protection for people and property." },
    { icon: "network" as IconName, title: "Networks & Communications", text: "Robust infrastructure for a reliable connection." },
    { icon: "access" as IconName, title: "Access Control", text: "Simple, secure and controlled entry and exit." },
    { icon: "energy" as IconName, title: "Energy Management", text: "Monitoring and optimisation of consumption." },
    { icon: "support" as IconName, title: "Maintenance & Support", text: "Ongoing assistance after installation." },
  ] : services;
  const visibleSectors = en ? [
    { id: "habitacoes", icon: "home" as IconName, title: "Homes", text: "Comfort, security and efficiency." },
    { id: "alojamentos", icon: "lodging" as IconName, title: "Short-term rentals", text: "Simple operation, even from a distance." },
    { id: "negocios", icon: "business" as IconName, title: "Small businesses", text: "Technology supporting growth." },
    { id: "espacos-partilhados", icon: "occupancy" as IconName, title: "Shared spaces", text: "Real-time occupancy and availability." },
    { id: "condominios", icon: "building" as IconName, title: "Condominiums", text: "Safer, more efficient shared spaces." },
  ] : sectors;
  const visibleReasons = en ? ["Tailored projects", "Integrated solutions", "Ready for the future", "Compatible technologies", "Professional installation", "Ongoing support"] : reasons;
  const visibleProcess = en ? [
    ["01", "We understand the project", "We listen and understand the space."],
    ["02", "We develop the solution", "We design the right integration."],
    ["03", "We install and configure", "We implement and test everything."],
    ["04", "We stay with you", "We keep the solution evolving."],
  ] : process;
  return (
    <div className="overflow-hidden bg-content-background text-content-foreground">
      <section className="relative border-b border-[#dbe3ed] py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">{en ? "What we do" : "O que fazemos"}</p>
            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl">
              {en ? "The right technology works as one." : "A tecnologia certa funciona como uma só."}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-content-muted sm:text-lg">
              {en ? "More than installing equipment, we create integrated solutions that are easy to use and ready to evolve." : "Mais do que instalar equipamentos, criamos soluções integradas, simples de utilizar e preparadas para evoluir."}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#d9e1eb] bg-white p-4 shadow-[0_18px_55px_rgba(19,44,78,0.08)] sm:p-6">
            <EcosystemGraphic locale={locale} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">{en ? "Our services" : "Os nossos serviços"}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-5xl">{en ? "Everything connected. No noise." : "Tudo ligado. Sem ruído."}</h2>
            </div>
            <Link href={en ? "/en/services" : "/servicos"} className="hidden border-b border-brand pb-1 text-sm font-bold text-brand sm:block">{en ? "Explore services" : "Explorar serviços"}</Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {visibleServices.map((service) => (
              <article key={service.title} className="group relative min-h-56 border border-[#d9e1eb] border-t-2 border-t-[#b7c5d8] bg-white p-5 shadow-[0_8px_26px_rgba(19,44,78,0.035)] transition-colors hover:border-t-brand sm:p-9">
                <div className="grid size-11 place-items-center border border-[#d9e1eb] bg-[#f7f9fc] text-brand transition-colors group-hover:border-brand sm:size-12">
                  <LineIcon name={service.icon} />
                </div>
                <h3 className="mt-7 text-base font-bold tracking-[-.025em] sm:mt-8 sm:text-xl">{service.title}</h3>
                <p className="mt-3 max-w-xs text-xs leading-5 text-content-muted sm:text-sm sm:leading-6">{service.text}</p>
              </article>
            ))}
          </div>
          <Link href={en ? "/en/services" : "/servicos"} className="mt-8 inline-flex min-h-12 items-center bg-brand px-6 text-sm font-bold text-white sm:hidden">{en ? "View all services" : "Ver todos os serviços"}</Link>
        </Container>
      </section>

      <section className="border-y border-[#dbe3ed] bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">Smart Occupancy</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-.04em] sm:text-5xl">
              {en ? "Make occupancy visible and every space easier to manage." : "Tornar a ocupação visível para gerir melhor cada espaço."}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-content-muted sm:text-lg">
              {en ? "Real-time information helps people find an available room, seat or service point, while giving managers reliable data on capacity and usage." : "Informação em tempo real ajuda as pessoas a encontrar uma sala, um lugar ou um ponto de atendimento disponível, enquanto dá aos gestores dados fiáveis sobre lotação e utilização."}
            </p>
            <Link href={`${en ? "/en/services" : "/servicos"}#area-ocupacao`} className="mt-8 inline-flex min-h-12 items-center border border-[#b8c5d5] bg-white px-6 text-sm font-bold text-content-foreground transition-colors hover:border-brand hover:text-brand">
              {en ? "Explore Smart Occupancy" : "Explorar Smart Occupancy"}
            </Link>
          </div>
          <div className="border border-[#cfd9e6] bg-[#f7f9fc] p-5 sm:p-7" aria-label={en ? "Example occupancy status panel" : "Exemplo de painel de ocupação"}>
            <div className="flex items-center justify-between border-b border-[#d5deea] pb-5">
              <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#748198]">{en ? "Current occupancy" : "Ocupação atual"}</p><p className="mt-2 text-2xl font-bold">{en ? "Building A" : "Edifício A"}</p></div>
              <div className="border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">{en ? "Space available" : "Com disponibilidade"}</div>
            </div>
            <div className="mt-5 grid gap-3">
              {(en ? [["Study room", "18 / 32", "56%"], ["Meeting rooms", "3 available", "72%"], ["Service area", "Low traffic", "28%"]] : [["Sala de estudo", "18 / 32", "56%"], ["Salas de reunião", "3 disponíveis", "72%"], ["Zona de atendimento", "Pouco movimento", "28%"]]).map(([label, value, width]) => (
                <div key={label} className="border border-[#dbe3ed] bg-white p-4">
                  <div className="flex items-center justify-between gap-4 text-sm"><span className="font-semibold">{label}</span><span className="text-content-muted">{value}</span></div>
                  <div className="mt-3 h-1.5 bg-[#e7edf4]"><div className="h-full bg-brand" style={{width}} /></div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#748198]">{en ? "Illustrative interface — each solution is configured for the space and its operating rules." : "Interface ilustrativa — cada solução é configurada para o espaço e para as suas regras de funcionamento."}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#172a43] bg-[#0d1d31] py-20 text-white sm:py-28">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">{en ? "A common problem" : "Um problema comum"}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-.045em] text-white sm:text-5xl">
            {en ? "Five applications are not a solution." : "Cinco aplicações não são uma solução."}
          </h2>
          <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <div className="border border-white/12 bg-white/[0.025] p-6 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-white/35">{en ? "Without integration" : "Sem integração"}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {(en ? ["Cameras", "Alarm", "Lights", "Climate", "Energy"] : ["Câmaras", "Alarme", "Luzes", "Climatização", "Energia"]).map((item, index) => (
                  <div key={item} className="grid min-w-0 grid-cols-[auto_1fr] items-center gap-3 border border-white/10 bg-[#090f17] px-4 py-4">
                    <span className="text-xs font-bold text-white/25">{index + 1}</span>
                    <span className="min-w-0 text-white/65">
                      <span className="block text-[.65rem] uppercase tracking-[.08em] text-white/35">
                        {en ? "Application" : "Aplicação"}
                      </span>
                      <span className="mt-0.5 block break-words text-sm font-semibold">
                        {item}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-white/50">{en ? "More applications. More complexity." : "Mais aplicações. Mais complexidade."}</p>
            </div>
            <div className="grid min-h-16 place-items-center lg:w-20">
              <span className="relative block h-12 w-px bg-white/20 lg:h-px lg:w-12" aria-hidden="true">
                <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand ring-4 ring-brand/15" />
              </span>
            </div>
            <div className="relative overflow-hidden border border-brand/45 bg-brand/[.07] p-6 sm:p-9">
              <div className="absolute -right-24 -top-24 size-64 rounded-full bg-brand/10 blur-3xl" />
              <p className="relative text-xs font-bold uppercase tracking-[.18em] text-brand">{en ? "With IntegroLink" : "Com IntegroLink"}</p>
              <h3 className="relative mt-5 text-3xl font-bold tracking-[-.04em]">{en ? "One central platform." : "Uma plataforma central."}</h3>
              <div className="relative mt-7 grid grid-cols-2 gap-3">
                {(en ? ["Lights", "Cameras", "Climate", "Energy", "Access", "Alarms"] : ["Luzes", "Câmaras", "Climatização", "Energia", "Acessos", "Alarmes"]).map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-white/75"><b className="text-brand">✓</b>{item}</span>
                ))}
              </div>
              <p className="relative mt-8 text-sm font-bold text-white">{en ? "Less complexity. More control." : "Menos complexidade. Mais controlo."}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">{en ? "Sectors" : "Setores de atuação"}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-5xl">{en ? "One foundation. Different realities." : "Uma base. Diferentes realidades."}</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
            {visibleSectors.map((sector) => (
              <Link href={`${en ? "/en/sectors" : "/setores-de-atuacao"}#area-${sector.id}`} key={sector.title} className="group relative flex min-h-72 flex-col overflow-hidden border border-[#d9e1eb] border-t-2 border-t-[#b7c5d8] bg-white p-5 pb-16 shadow-[0_8px_26px_rgba(19,44,78,0.035)] transition-colors hover:border-t-brand sm:min-h-80 sm:p-7 sm:pb-20">
                <LineIcon name={sector.icon} className="mt-4 size-10 text-brand sm:mt-5 sm:size-12" />
                <h3 className="mt-7 text-lg font-bold tracking-[-.03em] sm:mt-8 sm:text-2xl">{sector.title}</h3>
                <p className="mt-3 max-w-[14rem] text-xs leading-5 text-content-muted sm:text-sm sm:leading-6">{sector.text}</p>
                <span className="absolute bottom-5 left-5 right-5 border-t border-[#e2e8f0] pt-3 text-xs font-bold text-brand sm:bottom-7 sm:left-7 sm:right-7 sm:text-sm">{en ? "View solutions" : "Ver soluções"}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#dbe3ed] bg-white py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">{en ? "Why IntegroLink" : "Porquê a IntegroLink"}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-.045em] sm:text-5xl">{en ? "Technology adapts to you." : "A tecnologia adapta-se a si."}</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-content-muted">{en ? "We do not start with brands. We start with what needs to work better." : "Não começamos por marcas. Começamos pelo que precisa de funcionar melhor."}</p>
            <Link href={en ? "/en/why-us" : "/porque-nos"} className="mt-8 inline-flex border-b border-brand pb-1 text-sm font-bold text-brand">{en ? "Discover our philosophy" : "Conhecer a nossa filosofia"}</Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {visibleReasons.map((reason) => (
              <div key={reason} className="flex min-h-28 flex-col items-start justify-center gap-3 border border-[#d9e1eb] bg-[#f7f9fc] px-4 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-6">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-brand/40 text-xs font-bold text-brand sm:size-8">✓</span>
                <span className="text-sm font-semibold sm:text-base">{reason}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-brand">{en ? "How we work" : "Como trabalhamos"}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-5xl">{en ? "From conversation to solution." : "Da conversa à solução."}</h2>
          <div className="relative mt-14 grid gap-0 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#cfd8e5] lg:block" />
            {visibleProcess.map(([number, title, text]) => (
              <article key={number} className="relative border-l border-[#cfd8e5] pb-10 pl-7 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-10">
                <span className="absolute -left-[.3rem] top-0 size-2.5 rounded-full bg-brand shadow-[0_0_0_7px_#f3f6fa] lg:-top-[.33rem] lg:left-0" />
                <span className="text-xs font-bold tracking-[.16em] text-brand">{number}</span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-3 max-w-[15rem] text-sm leading-6 text-content-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-brand py-20 sm:py-28">
        <div className="absolute -right-24 -top-48 size-[34rem] rounded-full border border-white/15" />
        <div className="absolute -right-2 -top-16 size-72 rounded-full border border-white/20" />
        <Container className="relative">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-white/65">{en ? "Your next project" : "O próximo projeto"}</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-.05em] text-white sm:text-6xl">
            {en ? "Shall we integrate your space’s technology?" : "Vamos integrar a tecnologia do seu espaço?"}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">{en ? "The first step begins with a conversation." : "O primeiro passo começa com uma conversa."}</p>
          <Link href={en ? "/en/contact" : "/contactos"} className="mt-9 inline-flex min-h-13 items-center bg-white px-7 text-sm font-bold text-[#0a0f17] transition-colors hover:bg-[#0a0f17] hover:text-white">
            {en ? "Request a quote" : "Pedir orçamento"}
          </Link>
        </Container>
      </section>
    </div>
  );
}
