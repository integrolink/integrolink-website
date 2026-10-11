"use client";

import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { alternateLocalePath, localeFromPath, localeNavigation } from "@/lib/i18n";

export function Navbar() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const navigation = localeNavigation[locale];
  const alternateLocale = locale === "pt" ? "EN" : "PT";

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 border-t-2 border-t-brand bg-[#0c2345]/98 backdrop-blur-md">
      <Container className="flex h-[4.75rem] items-center justify-between lg:h-[5.75rem]">
        <Logo href={locale === "en" ? "/en" : "/"} locale={locale} />

        <div className="hidden items-stretch self-stretch lg:flex">
          <nav aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"} className="flex items-stretch">
            {navigation.slice(0, -1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center px-4 text-[0.82rem] font-semibold transition-colors xl:px-5 ${
                    isActive ? "text-white" : "text-white/68 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 bottom-0 h-0.5 bg-brand transition-transform xl:inset-x-5 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <Link
            href={alternateLocalePath(pathname)}
            hrefLang={locale === "pt" ? "en" : "pt-PT"}
            aria-label={locale === "pt" ? "View website in English" : "Ver o site em português"}
            className="my-auto ml-3 inline-flex min-h-11 min-w-11 items-center justify-center border border-white/25 px-3 text-xs font-bold tracking-[.12em] text-white/75 transition-colors hover:border-white/60 hover:bg-white/8 hover:text-white"
          >
            {alternateLocale}
          </Link>
          <Link
            href={navigation[4].href}
            aria-current={pathname === navigation[4].href ? "page" : undefined}
            className="my-auto ml-4 inline-flex min-h-11 items-center bg-brand px-5 text-sm font-bold text-white transition-colors hover:bg-[#4b91ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:ml-6 xl:px-6"
          >
            {locale === "pt" ? "Fale connosco" : "Talk to us"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={alternateLocalePath(pathname)}
            hrefLang={locale === "pt" ? "en" : "pt-PT"}
            aria-label={locale === "pt" ? "View website in English" : "Ver o site em português"}
            className="inline-flex size-12 items-center justify-center border border-white/25 text-xs font-bold tracking-[.12em] text-white transition-colors active:border-brand active:bg-brand/25"
          >
            {alternateLocale}
          </Link>
        <details ref={menuRef} className="group relative">
          <summary
            aria-label={locale === "pt" ? "Abrir menu de navegação" : "Open navigation menu"}
            className="flex size-12 cursor-pointer list-none items-center justify-center rounded-sm border border-white/25 bg-white/5 transition-colors hover:border-white/60 hover:bg-white/10 active:border-brand active:bg-brand/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-white transition-transform group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-full bg-white transition-opacity group-open:opacity-0" />
              <span className="h-0.5 w-full bg-white transition-transform group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>

          <nav
            aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}
            className="absolute right-0 top-[3.75rem] w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden border border-white/12 bg-[#0b1728] p-3 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (menuRef.current) menuRef.current.open = false;
                    }}
                    className="flex min-h-12 touch-manipulation items-center justify-between border-b border-white/7 px-4 text-sm font-semibold text-white/78 transition-colors last:border-0 hover:bg-white/5 hover:text-white active:bg-brand active:text-white focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
        </div>
      </Container>
    </header>
  );
}
