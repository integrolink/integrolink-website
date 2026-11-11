import type { Metadata } from "next";
import { ExperienceEmbed } from "@/components/ExperienceEmbed";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Interactive demo | IntegroLink",
  description: "Explore a simulated IntegroLink home and see lighting, shutters and equipment respond in real time in a 3D model.",
  alternates: { canonical: "/en/experience", languages: { "pt-PT": "/experiencia", en: "/en/experience" } },
};

export default function EnglishExperiencePage() {
  return <><Navbar /><ExperienceEmbed /></>;
}
