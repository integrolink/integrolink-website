import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { HomeExperience } from "@/sections/HomeExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IntegroLink | Espaços mais seguros, eficientes e fáceis de gerir",
  description: "Soluções integradas que tornam habitações, negócios e espaços partilhados mais seguros, eficientes e fáceis de gerir.",
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
