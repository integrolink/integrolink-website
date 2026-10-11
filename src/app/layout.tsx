import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { DocumentLanguage } from "@/components/DocumentLanguage";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integrolink.pt"),
  title: "IntegroLink | Automação, segurança e Smart Occupancy",
  description:
    "Integração tecnológica para habitações, negócios e espaços partilhados: automação, segurança, redes, energia, acessos e Smart Occupancy.",
  applicationName: "IntegroLink",
  authors: [{ name: "IntegroLink", url: "https://www.integrolink.pt" }],
  creator: "IntegroLink",
  publisher: "IntegroLink",
  keywords: ["automação", "Smart Occupancy", "gestão de ocupação", "controlo de acessos", "videovigilância", "redes", "gestão energética", "Portugal"],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_GB"],
    siteName: "IntegroLink",
    title: "IntegroLink | Integramos tecnologia. Ligamos soluções.",
    description: "Automação, segurança e gestão inteligente de ocupação para espaços mais simples, seguros e eficientes.",
    url: "https://www.integrolink.pt",
    images: [{ url: "/brand/integrolink-hero.png", width: 1920, height: 1080, alt: "IntegroLink — integração tecnológica" }],
  },
  twitter: { card:"summary_large_image", title:"IntegroLink | Integração tecnológica", description:"Automação, segurança e Smart Occupancy para espaços mais eficientes.", images:["/brand/integrolink-hero.png"] },
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" data-scroll-behavior="smooth">
      <body>
        <DocumentLanguage />
        <StructuredData />
        {children}
        <Footer />
      </body>
    </html>
  );
}
