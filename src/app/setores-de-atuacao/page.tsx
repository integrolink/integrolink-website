import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import {
  CategoryExplorer,
  type CategoryItem,
} from "@/components/CategoryExplorer";
import { PageIntro } from "@/components/PageIntro";

const sectors: CategoryItem[] = [
  {
    id: "habitacoes",
    label: "Habitações",
    statement: "Uma casa mais confortável, segura e eficiente.",
    icon: "home",
  },
  {
    id: "alojamentos",
    label: "Alojamentos Locais",
    statement: "Simplifique a gestão do seu alojamento.",
    icon: "lodging",
  },
  {
    id: "negocios",
    label: "Negócios",
    statement: "Tecnologia para apoiar o crescimento do seu negócio.",
    icon: "business",
  },
  {
    id: "condominios",
    label: "Condomínios",
    statement: "Mais segurança e melhor gestão dos espaços comuns.",
    icon: "condominium",
  },
];

export const metadata: Metadata = {
  title: "Setores de atuação | IntegroLink",
  description:
    "Descubra os setores em que a IntegroLink aplica soluções tecnológicas integradas.",
};

export default function SectorsPage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Setores de atuação"
        title="Adaptamos cada solução às necessidades específicas de cada espaço e de cada cliente."
        description="Selecione um setor para conhecer o princípio que orienta a nossa abordagem a cada contexto."
      >
        <CategoryExplorer items={sectors} />
      </PageIntro>
    </>
  );
}
