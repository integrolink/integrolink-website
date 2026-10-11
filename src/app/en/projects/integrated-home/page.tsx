import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ResidentialProject } from "@/components/ResidentialProject";

export const metadata: Metadata = {
  title: "Integrated home project | IntegroLink",
  description: "See an IntegroLink residential solution that brings climate, lighting, security, video surveillance, hot water and energy into one interface.",
  alternates: { canonical: "/en/projects/integrated-home", languages: { "pt-PT": "/projetos/habitacao-integrada", en: "/en/projects/integrated-home" } },
};

export default function IntegratedHomeProjectPage() { return <><Navbar/><ResidentialProject locale="en"/></>; }
