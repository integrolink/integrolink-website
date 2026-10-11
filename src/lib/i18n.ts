export type Locale = "pt" | "en";

const routePairs = [
  ["/", "/en"],
  ["/servicos", "/en/services"],
  ["/setores-de-atuacao", "/en/sectors"],
  ["/porque-nos", "/en/why-us"],
  ["/contactos", "/en/contact"],
  ["/projetos/habitacao-integrada", "/en/projects/integrated-home"],
] as const;

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function alternateLocalePath(pathname: string) {
  const pair = routePairs.find(([pt, en]) => pathname === pt || pathname === en);
  return pair ? (pathname === pair[0] ? pair[1] : pair[0]) : localeFromPath(pathname) === "en" ? "/" : "/en";
}

export const localeNavigation = {
  pt: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Setores de atuação", href: "/setores-de-atuacao" },
    { label: "Porquê nós?", href: "/porque-nos" },
    { label: "Contactos", href: "/contactos" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "Services", href: "/en/services" },
    { label: "Sectors", href: "/en/sectors" },
    { label: "Why us?", href: "/en/why-us" },
    { label: "Contact", href: "/en/contact" },
  ],
} as const;
