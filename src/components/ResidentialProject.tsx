import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n";

const screens = [
  { src: "/fotos/foto4.jpeg", pt: "Visão principal com clima e iluminação", en: "Main view with climate and lighting" },
  { src: "/fotos/foto2.jpeg", pt: "Videovigilância e consumo energético", en: "Video surveillance and energy consumption" },
  { src: "/fotos/foto3.jpeg", pt: "Água quente e estado da segurança", en: "Hot water and security status" },
];

export function ResidentialProject({ locale = "pt" }: { locale?: Locale }) {
  const en = locale === "en";
  return <main className="bg-white text-content-foreground">
    <section className="bg-[#0d223c] py-16 text-white sm:py-24">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#74a9ff]">{en ? "Real project · Integrated home" : "Projeto real · Habitação integrada"}</p>
        <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-.045em] sm:text-6xl lg:text-7xl">{en ? "One clear interface for everyday control." : "Uma interface clara para controlar o dia a dia."}</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{en ? "A residential solution that brings essential systems together without forcing the user to navigate between different applications." : "Uma solução residencial que reúne sistemas essenciais sem obrigar o utilizador a navegar entre diferentes aplicações."}</p>
      </Container>
    </section>

    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "The objective" : "O objetivo"}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "Make the home easier to understand and manage." : "Tornar a casa mais simples de compreender e gerir."}</h2>
        </div>
        <div className="border-l-2 border-brand pl-6 sm:pl-9">
          <p className="text-lg leading-9 text-content-muted">{en ? "Instead of treating each function as an isolated system, the interface provides a coherent overview of the home. Climate, lighting, security, surveillance, hot water and energy information are available in the same experience." : "Em vez de tratar cada função como um sistema isolado, a interface oferece uma visão coerente da habitação. Clima, iluminação, segurança, vigilância, água quente e informação energética ficam disponíveis na mesma experiência."}</p>
          <p className="mt-5 text-sm leading-7 text-[#748196]">{en ? "The images below are from the interface developed for this project. Some values shown are operating readings captured at the time of the screenshots." : "As imagens abaixo pertencem à interface desenvolvida para este projeto. Alguns valores apresentados correspondem às leituras existentes no momento das capturas."}</p>
        </div>
      </Container>
    </section>

    <section className="bg-[#f3f6f9] py-20 sm:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.12fr_.88fr]">
          <figure className="relative min-h-[42rem] overflow-hidden bg-[#0b1018] sm:min-h-[58rem] lg:row-span-2"><Image src={screens[0].src} alt={screens[0][en ? "en" : "pt"]} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain"/><figcaption className="absolute bottom-0 inset-x-0 bg-black/75 px-5 py-4 text-sm text-white/75">{screens[0][en ? "en" : "pt"]}</figcaption></figure>
          {screens.slice(1).map((screen) => <figure key={screen.src} className="relative min-h-[34rem] overflow-hidden bg-[#0b1018] sm:min-h-[42rem]"><Image src={screen.src} alt={screen[en ? "en" : "pt"]} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain"/><figcaption className="absolute bottom-0 inset-x-0 bg-black/75 px-5 py-4 text-sm text-white/75">{screen[en ? "en" : "pt"]}</figcaption></figure>)}
        </div>
      </Container>
    </section>

    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative aspect-square overflow-hidden bg-[#10151d]"><Image src="/fotos/foto9.jpeg" alt={en ? "Three-dimensional model used to understand the home" : "Modelo tridimensional utilizado para compreender a habitação"} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain"/></div>
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{en ? "Designed around the space" : "Pensada a partir do espaço"}</p><h2 className="mt-5 text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "Integration starts before the interface." : "A integração começa antes da interface."}</h2><p className="mt-6 text-base leading-8 text-content-muted sm:text-lg">{en ? "Understanding the layout, routines and points of interaction makes it possible to organise information around the people who will use it. The application is the visible part of a solution designed as a whole." : "Compreender a organização da casa, as rotinas e os pontos de interação permite organizar a informação em torno das pessoas que a vão utilizar. A aplicação é a parte visível de uma solução pensada como um todo."}</p></div>
      </Container>
    </section>

    <section className="bg-brand py-16 text-white sm:py-20"><Container className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-white/65">{en ? "A project for your space" : "Um projeto para o seu espaço"}</p><h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-.035em] sm:text-5xl">{en ? "What would you like to control more simply?" : "O que gostaria de controlar de forma mais simples?"}</h2></div><Link href={en ? "/en/contact" : "/contactos"} className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-sm font-bold text-[#10233b] hover:bg-[#10233b] hover:text-white">{en ? "Talk to us" : "Falar connosco"}</Link></Container></section>
  </main>;
}
