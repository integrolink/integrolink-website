import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contactos | IntegroLink",
  description:
    "Entre em contacto com a IntegroLink para falar sobre o seu projeto.",
};

export default function ContactsPage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Contactos"
        title="Vamos falar sobre o seu projeto."
        description="A informação de contacto e o formulário serão adicionados depois de definirmos os canais oficiais da empresa."
      />
    </>
  );
}
