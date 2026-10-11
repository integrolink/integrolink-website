import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import {
  CategoryExplorer,
  type CategoryItem,
} from "@/components/CategoryExplorer";
import { PageIntro } from "@/components/PageIntro";
import { ContextImageStrip } from "@/components/ContextImageStrip";

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
    id: "espacos-partilhados",
    label: "Espaços Partilhados",
    statement: "Ocupação visível. Espaços mais fáceis de utilizar e gerir.",
    icon: "occupancy",
    description:
      "Salas de estudo, espaços de trabalho, lojas, bibliotecas, clínicas e outras áreas partilhadas beneficiam de informação clara sobre ocupação e disponibilidade. Integramos sensores, acessos e plataformas de gestão para que utilizadores saibam onde existe espaço e as equipas compreendam melhor como cada zona é utilizada.",
    capabilitiesTitle: "Como podemos ajudar",
    capabilities: [
      "Ocupação e lotação em tempo real",
      "Disponibilidade de salas e lugares",
      "Contagem de entradas e saídas",
      "Sinalização e painéis informativos",
      "Análise de padrões de utilização",
      "Integração com reservas e acessos",
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
  title: "Soluções para habitações, negócios e espaços partilhados | IntegroLink",
  description:
    "Tecnologia integrada para habitações, alojamentos, negócios, condomínios e espaços partilhados com gestão inteligente de ocupação.",
  alternates: { canonical: "/setores-de-atuacao", languages: { "pt-PT": "/setores-de-atuacao", en: "/en/sectors" } },
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
        <ContextImageStrip items={[
          { src:"/fotos/foto6.png", alt:"Entrada residencial com videovigilância", caption:"Habitações protegidas" },
          { src:"/fotos/foto10.png", alt:"Sala de reunião com indicação de disponibilidade", caption:"Espaços partilhados mais claros" },
          { src:"/fotos/foto7.png", alt:"Controlo de acesso junto à porta de uma habitação", caption:"Acessos simples e seguros" },
        ]}/>
        <CategoryExplorer items={sectors} />
      </PageIntro>
    </>
  );
}
