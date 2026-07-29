import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Setores de atuação", href: "/setores-de-atuacao" },
  { label: "Porquê nós?", href: "/porque-nos" },
  { label: "Contactos", href: "/contactos" },
];

export function Navbar() {
  return (
    <header className="relative z-30 border-b border-white/12 bg-[#0c2345]">
      <Container className="flex h-[4.75rem] items-center justify-between sm:h-[5.5rem]">
        <Logo />

        <details className="group relative">
          <summary
            aria-label="Abrir menu de navegação"
            className="flex size-12 cursor-pointer list-none items-center justify-center rounded-sm border border-white/25 bg-white/5 transition-colors hover:border-white/60 hover:bg-white/10 active:border-brand active:bg-brand/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-white transition-transform group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-full bg-white transition-opacity group-open:opacity-0" />
              <span className="h-0.5 w-full bg-white transition-transform group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>

          <nav
            aria-label="Navegação principal"
            className="absolute right-0 top-[3.75rem] w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden border border-white/12 bg-[#0b1728] p-3 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 touch-manipulation items-center justify-between border-b border-white/7 px-4 text-sm font-semibold text-white/78 transition-colors last:border-0 hover:bg-white/5 hover:text-white active:bg-brand active:text-white focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-brand">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
