import type { MetadataRoute } from "next";

const base = "https://www.integrolink.pt";
const routes = [
  ["/", "/en"],
  ["/servicos", "/en/services"],
  ["/setores-de-atuacao", "/en/sectors"],
  ["/porque-nos", "/en/why-us"],
  ["/contactos", "/en/contact"],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(([pt, en], index) => [
    { url:`${base}${pt}`, lastModified:"2026-10-11", changeFrequency:"monthly" as const, priority:index === 0 ? 1 : .8, alternates:{languages:{"pt-PT":`${base}${pt}`,en:`${base}${en}`}} },
    { url:`${base}${en}`, lastModified:"2026-10-11", changeFrequency:"monthly" as const, priority:index === 0 ? .9 : .7, alternates:{languages:{"pt-PT":`${base}${pt}`,en:`${base}${en}`}} },
  ]);
}
