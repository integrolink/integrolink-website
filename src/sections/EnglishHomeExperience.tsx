import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  ["01", "Automation & Integration", "Different technologies, connected on one platform."],
  ["02", "Electronic Security", "Intelligent protection for people and property."],
  ["03", "Networks & Communications", "Robust infrastructure for a reliable connection."],
  ["04", "Access Control", "Simple, secure and controlled entry and exit."],
  ["05", "Energy Management", "Monitoring and optimisation of consumption."],
  ["06", "Maintenance & Support", "Ongoing assistance after installation."],
];

const sectors = [
  ["habitacoes", "Homes", "Comfort, security and efficiency."],
  ["alojamentos", "Short-term rentals", "Simple operation, even from a distance."],
  ["negocios", "Small businesses", "Technology supporting growth."],
  ["condominios", "Condominiums", "Safer, more efficient shared spaces."],
];

export function EnglishHomeExperience() {
  return <div className="overflow-hidden bg-content-background text-content-foreground">
    <section className="border-b border-[#dbe3ed] py-20 sm:py-28"><Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">What we do</p><h2 className="mt-5 text-3xl font-bold tracking-[-.045em] sm:text-5xl">The right technology works as one.</h2><p className="mt-6 max-w-lg text-base leading-8 text-content-muted sm:text-lg">More than installing equipment, we create integrated solutions that are easy to use and ready to evolve.</p></div>
      <div className="rounded-[1.5rem] border border-[#d9e1eb] bg-white p-7 shadow-[0_18px_55px_rgba(19,44,78,0.08)] sm:p-10">
        <div className="grid grid-cols-2 gap-3">{["Lighting", "Security", "Climate", "Energy", "Network", "Access"].map((item) => <div key={item} className="border border-[#dbe4ef] bg-[#f8fbff] px-4 py-4 text-sm font-semibold"><span className="mr-2 inline-block size-2 rounded-full bg-brand" />{item}</div>)}</div>
        <div className="mt-4 bg-[#102844] p-6 text-center text-white"><span className="text-xs font-bold uppercase tracking-[.18em] text-brand">IntegroLink</span><strong className="mt-1 block text-xl">One integrated system</strong></div>
      </div>
    </Container></section>

    <section className="py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">Our services</p><div className="flex items-end justify-between gap-6"><h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-5xl">Everything connected. No noise.</h2><Link href="/en/services" className="hidden border-b border-brand pb-1 text-sm font-bold text-brand sm:block">Explore services</Link></div><div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">{services.map(([number,title,text]) => <article key={title} className="min-h-56 border border-[#d9e1eb] bg-white p-5 shadow-[0_8px_26px_rgba(19,44,78,.04)] sm:p-8"><span className="text-xs font-bold tracking-[.16em] text-brand">{number}</span><h3 className="mt-8 text-base font-bold sm:text-xl">{title}</h3><p className="mt-3 text-xs leading-6 text-content-muted sm:text-sm">{text}</p></article>)}</div></Container></section>

    <section className="bg-[#0d1d31] py-20 text-white sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">A common problem</p><h2 className="mt-4 text-3xl font-bold tracking-[-.045em] sm:text-5xl">Five applications are not a solution.</h2><div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="border border-white/12 p-7"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">Without integration</p><div className="mt-6 grid grid-cols-2 gap-2">{["Cameras", "Alarm", "Lights", "Climate", "Energy"].map((x,i)=><div key={x} className="bg-[#090f17] p-4 text-sm text-white/70"><small className="block text-white/35">Application {i+1}</small>{x}</div>)}</div><p className="mt-6 text-sm text-white/55">More applications. More complexity.</p></div><div className="border border-brand/45 bg-brand/[.07] p-7"><p className="text-xs font-bold uppercase tracking-[.18em] text-brand">With IntegroLink</p><h3 className="mt-5 text-3xl font-bold">One central platform.</h3><div className="mt-7 grid grid-cols-2 gap-3">{["Lights", "Cameras", "Climate", "Energy", "Access", "Alarms"].map(x=><span key={x} className="text-sm text-white/75"><b className="mr-2 text-brand">✓</b>{x}</span>)}</div><p className="mt-8 text-sm font-bold">Less complexity. More control.</p></div></div></Container></section>

    <section className="py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">Sectors</p><h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-5xl">One foundation. Different realities.</h2><div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{sectors.map(([id,title,text],i)=><Link key={id} href={`/en/sectors#area-${id}`} className="flex min-h-64 flex-col border border-[#d9e1eb] bg-white p-5 sm:p-7"><span className="text-xs font-bold text-brand">0{i+1}</span><h3 className="mt-14 text-lg font-bold sm:text-2xl">{title}</h3><p className="mt-3 text-xs leading-6 text-content-muted sm:text-sm">{text}</p><span className="mt-auto border-t border-[#e2e8f0] pt-4 text-sm font-bold text-brand">View solutions</span></Link>)}</div></Container></section>

    <section className="border-y border-[#dbe3ed] bg-white py-20 sm:py-28"><Container className="grid gap-14 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">Why IntegroLink</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">Technology adapts to you.</h2><p className="mt-6 max-w-md leading-8 text-content-muted">We do not start with brands. We start with what needs to work better.</p><Link href="/en/why-us" className="mt-8 inline-flex border-b border-brand pb-1 text-sm font-bold text-brand">Discover our philosophy</Link></div><div className="grid grid-cols-2 gap-3">{["Tailored projects", "Integrated solutions", "Ready for the future", "Compatible technologies", "Professional installation", "Ongoing support"].map(x=><div key={x} className="border border-[#d9e1eb] bg-[#f7f9fc] p-5 text-sm font-semibold sm:text-base"><span className="mr-2 text-brand">✓</span>{x}</div>)}</div></Container></section>

    <section className="py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">How we work</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">From conversation to solution.</h2><div className="mt-12 grid gap-4 lg:grid-cols-4">{[["01","We understand the project","We listen and understand the space."],["02","We develop the solution","We design the right integration."],["03","We install and configure","We implement and test everything."],["04","We stay with you","We keep the solution evolving."]].map(([n,t,x])=><article key={n} className="border-t border-[#cfd8e5] pt-6"><span className="text-xs font-bold text-brand">{n}</span><h3 className="mt-4 font-bold">{t}</h3><p className="mt-3 text-sm leading-6 text-content-muted">{x}</p></article>)}</div></Container></section>

    <section className="bg-brand py-20 text-white sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[.22em] text-white/65">Your next project</p><h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-.05em] sm:text-6xl">Shall we integrate your space’s technology?</h2><p className="mt-6 text-white/75">The first step begins with a conversation.</p><Link href="/en/contact" className="mt-9 inline-flex min-h-13 items-center bg-white px-7 text-sm font-bold text-[#0a0f17]">Request a quote</Link></Container></section>
  </div>;
}
