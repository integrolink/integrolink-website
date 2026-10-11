import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { HomeExperience } from "@/sections/HomeExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IntegroLink | Automação, segurança e Smart Occupancy",
  description: "Integração tecnológica para habitações, negócios e espaços partilhados: automação, segurança, redes, energia, acessos e Smart Occupancy.",
  alternates: { canonical: "/", languages: { "pt-PT": "/", en: "/en" } },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeExperience />
      </main>
    </>
  );
}
