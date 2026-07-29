import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import {
  CategoryExplorer,
  type CategoryItem,
} from "@/components/CategoryExplorer";
import { PageIntro } from "@/components/PageIntro";

const services: CategoryItem[] = [
  {
    id: "automacao",
    label: "Automação e Integração",
    statement: "Tecnologia que trabalha em conjunto.",
    icon: "automation",
  },
  {
    id: "seguranca",
    label: "Segurança e Videovigilância",
    statement: "Mais proteção para pessoas e património.",
    icon: "security",
  },
  {
    id: "redes",
    label: "Redes e Comunicações",
    statement: "Uma infraestrutura fiável é a base de qualquer sistema.",
    icon: "network",
  },
  {
    id: "acessos",
    label: "Controlo de Acessos",
    statement: "Controlo total sobre quem entra e sai.",
    icon: "access",
  },
  {
    id: "energia",
    label: "Gestão Energética",
    statement: "Consumos mais inteligentes.",
    icon: "energy",
  },
  {
    id: "suporte",
    label: "Manutenção e Suporte",
    statement: "A tecnologia continua a evoluir.",
    icon: "support",
  },
];

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
        title="Soluções tecnológicas concebidas para aumentar o conforto, a segurança e a eficiência do seu espaço."
        description="Explore as nossas áreas de serviço e descubra como cada solução contribui para um sistema verdadeiramente integrado."
      >
        <CategoryExplorer items={services} />
      </PageIntro>
    </>
  );
}
