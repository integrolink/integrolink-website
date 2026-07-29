import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { WhyUsExperience } from "@/components/WhyUsExperience";

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
        title="Cada projeto é pensado para responder às suas necessidades, hoje e no futuro."
        description="Criamos valor através de soluções integradas, personalizadas e preparadas para evoluir — com a simplicidade sempre no centro da experiência."
      >
        <WhyUsExperience />
      </PageIntro>
    </>
  );
}
