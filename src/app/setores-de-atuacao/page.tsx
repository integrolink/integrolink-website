import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

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
        description="Esta página será construída em torno dos setores em que a IntegroLink atua, sem generalizações nem serviços que não façam parte da empresa."
      />
    </>
  );
}
