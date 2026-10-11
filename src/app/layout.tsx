import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { DocumentLanguage } from "@/components/DocumentLanguage";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integrolink.pt"),
  title: "IntegroLink | Espaços mais seguros, eficientes e fáceis de gerir",
  description:
    "Soluções integradas que tornam habitações, negócios e espaços partilhados mais seguros, eficientes e fáceis de gerir.",
  applicationName: "IntegroLink",
  authors: [{ name: "IntegroLink", url: "https://www.integrolink.pt" }],
  creator: "IntegroLink",
  publisher: "IntegroLink",
  keywords: ["automação", "assistente IA", "inteligência artificial para edifícios", "Smart Occupancy", "gestão de ocupação", "controlo de acessos", "videovigilância", "redes", "gestão energética", "Portugal"],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_GB"],
    siteName: "IntegroLink",
    title: "IntegroLink | Integramos tecnologia. Ligamos soluções.",
    description: "Soluções integradas para espaços mais seguros, eficientes e fáceis de gerir.",
    url: "https://www.integrolink.pt",
    images: [{ url: "/brand/integrolink-hero.png", width: 1920, height: 1080, alt: "IntegroLink — integração tecnológica" }],
  },
  twitter: { card:"summary_large_image", title:"IntegroLink | Espaços que funcionam melhor", description:"Soluções integradas para espaços mais seguros, eficientes e fáceis de gerir.", images:["/brand/integrolink-hero.png"] },
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
