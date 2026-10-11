"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { usePathname } from "next/navigation";
import { localeFromPath, localeNavigation } from "@/lib/i18n";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/integrolink?utm_source=qr&igsh=dmx5MW1tZTllOGRn",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/integrolink/" },
  { label: "Facebook", href: "https://www.facebook.com/share/199PNxdxka/" },
];

export function Footer() {
  const locale = localeFromPath(usePathname());
  const footerNavigation = localeNavigation[locale];
  const homeHref = locale === "pt" ? "/" : "/en";
  return (
    <footer className="border-t-2 border-t-brand bg-[#0a1b30] text-white">
      <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_.7fr_1fr] lg:gap-16">
        <div>
          <Link href={homeHref} aria-label={locale === "pt" ? "IntegroLink — página inicial" : "IntegroLink — homepage"} className="inline-flex">
            <Image
              src="/brand/integrolink-signature-white.svg"
              alt="IntegroLink"
              width={1547}
              height={377}
              className="h-auto w-56"
            />
          </Link>
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/58">
            {locale === "pt"
              ? "Soluções integradas para tornar cada espaço mais seguro, eficiente e fácil de gerir."
              : "Integrated solutions that make every space safer, more efficient and easier to manage."}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            {locale === "pt" ? "Navegação" : "Navigation"}
          </p>
          <nav className="mt-5 grid gap-3" aria-label={locale === "pt" ? "Navegação do rodapé" : "Footer navigation"}>
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm font-semibold text-white/65 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            {locale === "pt" ? "Contactos" : "Contact"}
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            <a href="mailto:geral@integrolink.pt" className="w-fit font-semibold text-white/70 hover:text-white">
              geral@integrolink.pt
            </a>
            <a href="mailto:orcamentos@integrolink.pt" className="w-fit font-semibold text-white/70 hover:text-white">
              orcamentos@integrolink.pt
            </a>
            <a href="mailto:suporte@integrolink.pt" className="w-fit font-semibold text-white/70 hover:text-white">
              suporte@integrolink.pt
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/20 pb-1 text-xs font-bold text-white/55 transition-colors hover:border-brand hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-[0.7rem] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IntegroLink. {locale === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</p>
          <p>{locale === "pt" ? "Tecnologia que serve as pessoas e os espaços." : "Technology that serves people and places."}</p>
        </Container>
      </div>
    </footer>
  );
}
