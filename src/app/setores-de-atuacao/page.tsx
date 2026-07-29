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
    description:
      "Cada habitação é diferente e cada família tem necessidades próprias. Desenvolvemos soluções de automação, segurança, gestão energética e controlo inteligente adaptadas ao seu dia a dia, permitindo que a tecnologia trabalhe de forma integrada para aumentar o conforto, a segurança e a eficiência da sua casa.",
    capabilitiesTitle: "Como podemos ajudar",
    capabilities: [
      "Controlo inteligente da iluminação",
      "Gestão da climatização",
      "Videovigilância integrada",
      "Sistemas de alarme",
      "Monitorização de consumos",
      "Controlo remoto",
    ],
  },
  {
    id: "alojamentos",
    label: "Alojamento Local",
    statement: "Simplifique a gestão do seu alojamento.",
    icon: "lodging",
    description:
      "A tecnologia pode reduzir o tempo dedicado à gestão diária e melhorar a experiência dos hóspedes. Implementamos soluções que permitem controlar acessos, climatização, iluminação, consumos e segurança, facilitando a operação mesmo quando está longe da propriedade.",
    capabilitiesTitle: "Como podemos ajudar",
    capabilities: [
      "Fechaduras inteligentes",
      "Check-in autónomo",
      "Controlo da climatização",
      "Monitorização remota",
      "Gestão energética",
      "Alertas automáticos",
    ],
  },
  {
    id: "negocios",
    label: "Negócios",
    statement: "Tecnologia para apoiar o crescimento do seu negócio.",
    icon: "business",
    description:
      "Independentemente da atividade, uma infraestrutura tecnológica bem integrada aumenta a segurança, melhora a eficiência operacional e simplifica a gestão diária. Desenvolvemos soluções adaptadas às necessidades de escritórios, lojas, clínicas, restaurantes e outros espaços comerciais.",
    capabilitiesTitle: "Como podemos ajudar",
    capabilities: [
      "Redes profissionais",
      "Videovigilância",
      "Controlo de acessos",
      "Automação de iluminação",
      "Gestão energética",
      "Monitorização remota",
    ],
  },
  {
    id: "condominios",
    label: "Condomínios",
    statement: "Mais segurança e melhor gestão dos espaços comuns.",
    icon: "condominium",
    description:
      "A integração de diferentes sistemas permite aumentar a segurança, otimizar consumos e facilitar a administração dos espaços comuns, proporcionando maior conforto aos residentes e uma gestão mais eficiente.",
    capabilitiesTitle: "Como podemos ajudar",
    capabilities: [
      "Videovigilância",
      "Controlo de acessos",
      "Videoporteiros",
      "Iluminação das zonas comuns",
      "Monitorização técnica",
      "Gestão energética",
    ],
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
