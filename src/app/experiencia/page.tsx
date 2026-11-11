import type { Metadata } from "next";
import { ExperienceEmbed } from "@/components/ExperienceEmbed";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Demonstração interativa | IntegroLink",
  description: "Explore uma casa IntegroLink simulada e veja iluminação, estores e equipamentos responderem em tempo real numa maquete 3D.",
  alternates: { canonical: "/experiencia", languages: { "pt-PT": "/experiencia", en: "/en/experience" } },
};

export default function ExperiencePage() {
  return <><Navbar /><ExperienceEmbed /></>;
}
