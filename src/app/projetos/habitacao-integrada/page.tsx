import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ResidentialProject } from "@/components/ResidentialProject";

export const metadata: Metadata = {
  title: "Projeto de habitação integrada | IntegroLink",
  description: "Conheça uma solução residencial IntegroLink que reúne clima, iluminação, segurança, videovigilância, água quente e energia numa única interface.",
  alternates: { canonical: "/projetos/habitacao-integrada", languages: { "pt-PT": "/projetos/habitacao-integrada", en: "/en/projects/integrated-home" } },
};

export default function IntegratedHomeProjectPage() { return <><Navbar/><ResidentialProject/></>; }
