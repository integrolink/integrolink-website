import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Porquê nós? | IntegroLink",
  description:
    "Conheça a abordagem da IntegroLink à integração tecnológica.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Porquê nós?"
        title="Integração com critério."
        description="Aqui iremos explicar o método, os princípios e as vantagens concretas de trabalhar com a IntegroLink."
      />
    </>
  );
}
