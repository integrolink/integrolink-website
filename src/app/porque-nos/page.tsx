import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { WhyUsExperience } from "@/components/WhyUsExperience";
import { ContextImageStrip } from "@/components/ContextImageStrip";

export const metadata: Metadata = {
  title: "Porquê nós? | IntegroLink",
  description:
    "Conheça a abordagem da IntegroLink à integração tecnológica.",
  alternates: { canonical: "/porque-nos", languages: { "pt-PT": "/porque-nos", en: "/en/why-us" } },
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Porquê nós?"
        title="Cada projeto é pensado para responder às suas necessidades, hoje e no futuro."
        description="Criamos valor através de soluções integradas, personalizadas e preparadas para evoluir — com a simplicidade sempre no centro da experiência."
      >
        <ContextImageStrip items={[
          { src:"/fotos/foto11.png", alt:"Gestão integrada de energia e equipamentos", caption:"Sistemas pensados como um todo" },
          { src:"/fotos/foto12.png", alt:"Sensores e controlo de segurança integrados", caption:"Tecnologia discreta no espaço" },
          { src:"/fotos/foto4.jpeg", alt:"Interface de controlo IntegroLink", caption:"Complexidade escondida, utilização simples", contain:true },
        ]}/>
        <WhyUsExperience />
      </PageIntro>
    </>
  );
}
