import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HomeControlDemo } from "@/components/home/HomeControlDemo";
import { HomeNeedsExplorer } from "@/components/home/HomeNeedsExplorer";
import { HomeCommitmentInteraction, HomeProcessInteraction, HomePurposeInteraction } from "@/components/home/HomeInstitutionalInteractions";
import type { Locale } from "@/lib/i18n";

type IconName = "shield" | "space" | "energy" | "systems" | "home" | "lodging" | "business" | "building" | "shared";

function LineIcon({ name, className = "size-8" }: { name: IconName; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    {name === "shield" && <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>}
    {name === "space" && <><path d="M4 20v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="6" r="2"/><path d="M7 16h2m2 0h2m2 0h2"/></>}
    {name === "energy" && <path d="M13 2 5 14h7l-1 8 8-12h-7z"/>}
    {name === "systems" && <><circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="m7 7 3.2 3.2M17 7l-3.2 3.2M7 17l3.2-3.2M17 17l-3.2-3.2"/></>}
    {name === "home" && <><path d="m3 11 9-7 9 7M5.5 9.5V20h13V9.5M9.5 20v-6h5v6"/></>}
    {name === "lodging" && <><path d="M4 19V7m0 8h16v4M7 11h4a3 3 0 0 1 3 3v1H7zm12-3v3m-1.5-1.5 3-3"/></>}
    {name === "business" && <><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V4h8v3M3 12h18m-11 0v2h4v-2"/></>}
    {name === "building" && <><path d="M5 21V4h10v17m0-12h4v12M8 8h2m-2 4h2m-2 4h2m7-3h.01m-.01 4h.01M3 21h18"/></>}
    {name === "shared" && <><path d="M4 5h16v14H4zM8 9h8M8 13h3M14 13h2M8 17h8"/></>}
  </svg>;
}

const ptSectors = [
  ["habitacoes", "home", "Habitações", "Mais conforto, segurança e controlo no dia a dia."],
  ["alojamentos", "lodging", "Alojamento Local", "Uma operação simples, mesmo quando está longe."],
  ["negocios", "business", "Negócios", "Continuidade, proteção e eficiência operacional."],
  ["espacos-partilhados", "shared", "Espaços Partilhados", "Informação clara sobre ocupação e disponibilidade."],
  ["condominios", "building", "Condomínios", "Espaços comuns mais seguros e fáceis de gerir."],
] as const;

const enSectors = [
  ["habitacoes", "home", "Homes", "Greater everyday comfort, security and control."],
  ["alojamentos", "lodging", "Short-term rentals", "Simple operation, even when you are away."],
  ["negocios", "business", "Businesses", "Continuity, protection and operational efficiency."],
  ["espacos-partilhados", "shared", "Shared spaces", "Clear information on occupancy and availability."],
  ["condominios", "building", "Condominiums", "Shared areas that are safer and easier to manage."],
] as const;

export function HomeExperience({ locale = "pt" }: { locale?: Locale }) {
  const en = locale === "en";
  const sectors = en ? enSectors : ptSectors;

  return <div className="overflow-hidden bg-white text-content-foreground">
    <section className="border-b border-[#d8e0e9] py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "Our purpose" : "O nosso propósito"}</p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-.035em] sm:text-5xl">{en ? "Spaces that work better for the people who use them." : "Espaços que funcionam melhor para quem os utiliza."}</h2>
        </div>
        <div className="border-l-2 border-brand pl-6 sm:pl-9">
          <p className="max-w-3xl text-lg leading-9 text-content-muted sm:text-2xl sm:leading-10">{en ? "We connect security, comfort and operations so people can understand and control their spaces without unnecessary complexity." : "Ligamos segurança, conforto e operação para que as pessoas compreendam e controlem os seus espaços sem complexidade desnecessária."}</p>
          <HomePurposeInteraction locale={locale} />
        </div>
      </Container>
    </section>

    <section className="bg-[#f4f6f8] py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "What needs to work better?" : "O que precisa de funcionar melhor?"}</p><h2 className="mt-4 text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "We start with the objective, not the equipment." : "Começamos pelo objetivo, não pelo equipamento."}</h2></div>
        <HomeNeedsExplorer locale={locale} />
      </Container>
    </section>

    <section className="overflow-hidden border-y border-[#20354f] bg-[#10233b] py-20 sm:py-28">
      <Container><HomeControlDemo locale={locale} /></Container>
    </section>

    <section className="border-b border-[#d8e0e9] bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "Better use of space" : "Melhor utilização do espaço"}</p>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-.04em] sm:text-5xl">{en ? "Know where there is space before you need it." : "Saber onde existe espaço antes de precisar dele."}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-content-muted sm:text-lg">{en ? "Occupancy information becomes useful when it improves a real decision: where to sit, whether a room is available, when a shop is busiest or which areas are underused." : "A informação sobre ocupação torna-se útil quando melhora uma decisão real: onde sentar, se uma sala está disponível, quando uma loja tem mais movimento ou que zonas são pouco utilizadas."}</p>
          <Link href={`${en ? "/en/services" : "/servicos"}#area-ocupacao`} className="mt-8 inline-flex border-b border-brand pb-1 text-sm font-bold text-brand">{en ? "Smart Occupancy solutions" : "Soluções de Smart Occupancy"}</Link>
        </div>
        <div className="border border-[#20354f] bg-[#10233b] text-white shadow-[0_24px_65px_rgba(15,35,60,.16)]">
          <div className="flex items-center justify-between border-b border-white/12 px-6 py-5"><span className="text-xs font-bold uppercase tracking-[.15em] text-white/45">{en ? "Space status" : "Estado dos espaços"}</span><span className="size-2 bg-emerald-400"/></div>
          {(en ? [["Study area","18 of 32 seats","Available"],["Meeting rooms","3 rooms","Available"],["Service point","Low demand","No waiting"]] : [["Zona de estudo","18 de 32 lugares","Disponível"],["Salas de reunião","3 salas","Disponível"],["Atendimento","Pouco movimento","Sem espera"]]).map(([name,value,status]) => <div key={name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/10 px-6 py-5 last:border-b-0 sm:grid-cols-[1fr_auto_auto] sm:items-center">
            <span className="font-semibold">{name}</span><span className="text-sm text-white/50">{value}</span><span className="col-span-2 text-xs font-bold uppercase tracking-[.1em] text-emerald-300 sm:col-span-1">{status}</span>
          </div>)}
          <p className="border-t border-white/12 px-6 py-4 text-xs leading-5 text-white/38">{en ? "Illustrative interface. Each project is designed around the space and its operating rules." : "Interface ilustrativa. Cada projeto é desenhado para o espaço e para as suas regras de funcionamento."}</p>
        </div>
      </Container>
    </section>

    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "Different settings" : "Diferentes contextos"}</p><h2 className="mt-4 text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "One approach, adapted to each reality." : "Uma abordagem adaptada a cada realidade."}</h2></div><p className="max-w-2xl text-base leading-8 text-content-muted lg:pt-7">{en ? "The priorities of a home are not those of a shop, a condominium or a shared workplace. We adjust the solution to the people, risks and operation of each setting." : "As prioridades de uma habitação não são as de uma loja, de um condomínio ou de um espaço de trabalho partilhado. Ajustamos a solução às pessoas, aos riscos e à operação de cada contexto."}</p></div>
        <div className="mt-12 divide-y divide-[#d8e0e9] border-y border-[#d8e0e9]">
          {sectors.map(([id,icon,title,text]) => <Link href={`${en ? "/en/sectors" : "/setores-de-atuacao"}#area-${id}`} key={id} className="group grid gap-4 py-6 transition-colors hover:bg-[#f6f8fa] sm:grid-cols-[3rem_1fr_1fr_auto] sm:items-center sm:px-4">
            <LineIcon name={icon} className="size-7 text-brand"/><h3 className="text-lg font-bold">{title}</h3><p className="text-sm leading-6 text-content-muted">{text}</p><span className="text-sm font-bold text-brand">{en ? "Explore" : "Conhecer"}</span>
          </Link>)}
        </div>
      </Container>
    </section>

    <section className="border-y border-[#d8e0e9] bg-[#f4f6f8] py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "Our commitment" : "O nosso compromisso"}</p><h2 className="mt-4 text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "A solution you can understand and rely on." : "Uma solução que consegue compreender e na qual pode confiar."}</h2><Link href={en ? "/en/why-us" : "/porque-nos"} className="mt-8 inline-flex border-b border-brand pb-1 text-sm font-bold text-brand">{en ? "Why IntegroLink" : "Porquê a IntegroLink"}</Link></div>
        <HomeCommitmentInteraction locale={locale} />
      </Container>
    </section>

    <section className="py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "A straightforward process" : "Um processo simples"}</p><h2 className="mt-4 text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "From the first conversation to ongoing support." : "Da primeira conversa ao acompanhamento contínuo."}</h2><HomeProcessInteraction locale={locale} /></Container></section>

    <section className="bg-brand py-20 text-white sm:py-24"><Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-white/65">{en ? "Your space, working better" : "O seu espaço, a funcionar melhor"}</p><h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-6xl">{en ? "What would you like to make simpler, safer or more efficient?" : "O que gostaria de tornar mais simples, seguro ou eficiente?"}</h2></div><Link href={en ? "/en/contact" : "/contactos"} className="inline-flex min-h-13 items-center justify-center bg-white px-7 text-sm font-bold text-[#10233b] transition-colors hover:bg-[#10233b] hover:text-white">{en ? "Talk to us" : "Falar connosco"}</Link></Container></section>
  </div>;
}
