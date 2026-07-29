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
    description:
      "Desenvolvemos soluções de automação que integram diferentes equipamentos e sistemas numa única plataforma. O objetivo é simplificar a utilização diária, aumentar o conforto e permitir que a tecnologia funcione de forma coordenada, independentemente das marcas utilizadas.",
    capabilitiesTitle: "O que podemos integrar",
    capabilities: [
      "Automação residencial e empresarial",
      "Home Assistant",
      "Integração de equipamentos",
      "Dashboards personalizados",
      "Automatizações inteligentes",
      "Controlo remoto",
    ],
  },
  {
    id: "seguranca",
    label: "Segurança e Videovigilância",
    statement: "Mais proteção para pessoas e património.",
    icon: "security",
    description:
      "Implementamos soluções de segurança adaptadas às necessidades de cada espaço, integrando videovigilância, alarmes e sensores numa plataforma centralizada que permite monitorização local ou remota.",
    capabilitiesTitle: "O que podemos integrar",
    capabilities: [
      "Videovigilância IP",
      "Alarmes",
      "Sensores de movimento",
      "Sensores de inundação",
      "Sensores de fumo",
      "Notificações em tempo real",
    ],
  },
  {
    id: "redes",
    label: "Redes e Comunicações",
    statement: "Uma infraestrutura fiável é a base de qualquer sistema.",
    icon: "network",
    description:
      "Projetamos e implementamos redes robustas para suportar equipamentos inteligentes, comunicações e serviços digitais, garantindo estabilidade, desempenho e cobertura adequada em todo o espaço.",
    capabilitiesTitle: "O que podemos integrar",
    capabilities: [
      "Redes Wi-Fi",
      "Cablagem estruturada",
      "Redes empresariais",
      "VPN",
      "Gestão de rede",
      "Otimização de cobertura",
    ],
  },
  {
    id: "acessos",
    label: "Controlo de Acessos",
    statement: "Controlo total sobre quem entra e sai.",
    icon: "access",
    description:
      "Desenvolvemos soluções que permitem gerir acessos de forma segura, prática e adaptada às necessidades de habitações, alojamentos locais, empresas e condomínios.",
    capabilitiesTitle: "O que podemos integrar",
    capabilities: [
      "Fechaduras inteligentes",
      "Videoporteiros",
      "Portões automáticos",
      "Cartões RFID",
      "Biometria",
      "Gestão remota de acessos",
    ],
  },
  {
    id: "energia",
    label: "Gestão Energética",
    statement: "Consumos mais inteligentes.",
    icon: "energy",
    description:
      "A monitorização e gestão da energia permitem identificar desperdícios, otimizar consumos e aumentar a eficiência da instalação, contribuindo para reduzir custos e melhorar o desempenho energético.",
    capabilitiesTitle: "O que podemos integrar",
    capabilities: [
      "Monitorização de consumos",
      "Gestão de cargas",
      "Integração com energia solar",
      "Carregadores para veículos elétricos",
      "Relatórios de consumo",
      "Automatização energética",
    ],
  },
  {
    id: "suporte",
    label: "Manutenção e Suporte",
    statement: "A tecnologia continua a evoluir.",
    icon: "support",
    description:
      "Após a instalação, continuamos a acompanhar os nossos clientes através de serviços de manutenção, suporte técnico e evolução das soluções implementadas, garantindo que o sistema continua atualizado e adaptado às novas necessidades.",
    capabilitiesTitle: "Como acompanhamos",
    capabilities: [
      "Assistência técnica",
      "Suporte remoto",
      "Atualizações de software",
      "Otimização de sistemas",
      "Diagnóstico de avarias",
      "Expansão de instalações",
    ],
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
