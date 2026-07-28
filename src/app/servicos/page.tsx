import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Serviços | IntegroLink",
  description:
    "Conheça as soluções de automação, segurança, controlo remoto e eficiência energética da IntegroLink.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Serviços"
        title="Tecnologia integrada, de ponta a ponta."
        description="Estamos a organizar esta área para apresentar cada solução com clareza, detalhe técnico e foco nas necessidades de cada projeto."
      />
    </>
  );
}
