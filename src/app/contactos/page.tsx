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
        title="O primeiro passo para uma solução integrada começa com uma conversa."
        description="A informação de contacto e o formulário serão adicionados depois de definirmos os canais oficiais da empresa."
      />
    </>
  );
}
