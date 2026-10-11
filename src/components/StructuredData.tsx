const base = "https://www.integrolink.pt";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "IntegroLink",
        url: base,
        logo: `${base}/icon`,
        email: "geral@integrolink.pt",
        sameAs: [
          "https://www.instagram.com/integrolink",
          "https://www.linkedin.com/company/integrolink/",
          "https://www.facebook.com/share/199PNxdxka/",
        ],
        knowsAbout: ["Automação", "Smart Occupancy", "Controlo de acessos", "Videovigilância", "Redes", "Gestão energética"],
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "IntegroLink",
        alternateName: "Integro Link",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: ["pt-PT", "en"],
      },
      {
        "@type": "Service",
        "@id": `${base}/servicos/#service`,
        name: "Integração tecnológica e Smart Occupancy",
        provider: { "@id": `${base}/#organization` },
        url: `${base}/servicos`,
        description: "Soluções integradas de automação, segurança, redes, acessos, energia e gestão inteligente de ocupação.",
        areaServed: "Portugal",
        serviceType: ["Automação", "Segurança eletrónica", "Smart Occupancy", "Redes", "Controlo de acessos", "Gestão energética"],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
