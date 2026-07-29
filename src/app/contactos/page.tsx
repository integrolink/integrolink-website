import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { ContactExperience } from "@/components/ContactExperience";

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
        description="Conte-nos o que pretende melhorar. Nós ajudamos a transformar essa necessidade numa solução simples, integrada e preparada para evoluir."
      >
        <ContactExperience />
      </PageIntro>
    </>
  );
}
