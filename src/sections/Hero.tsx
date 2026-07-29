import Image from "next/image";
import Link from "next/link";
import { HeroMedia } from "@/components/HeroMedia";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="IntegroLink — Integramos tecnologia. Ligamos soluções."
      className="relative isolate min-h-[36rem] overflow-hidden bg-[#0b1d38] sm:min-h-[40rem] lg:min-h-[42rem]"
    >
      <HeroMedia />

      <Container className="relative flex min-h-[36rem] flex-col justify-center py-12 sm:min-h-[40rem] sm:py-16 lg:min-h-[42rem]">
        <div className="max-w-[34rem]">
          <Image
            src="/brand/integrolink-signature-white.svg"
            alt="IntegroLink — Integramos tecnologia. Ligamos soluções."
            width={1547}
            height={377}
            priority
            className="h-auto w-full max-w-[31rem] drop-shadow-[0_8px_28px_rgba(0,0,0,0.2)]"
          />

          <p className="mt-7 max-w-[34rem] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Soluções de automação, segurança, redes e gestão energética para
            habitações, alojamentos locais, empresas e condomínios.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/servicos"
              className="inline-flex min-h-12 items-center gap-4 border border-brand bg-brand px-6 text-sm font-bold text-white shadow-[0_12px_35px_rgba(35,117,255,0.28)] transition-colors hover:border-[#4b91ff] hover:bg-[#4b91ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Conheça os serviços
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contactos"
              className="inline-flex min-h-12 items-center border border-white/45 bg-[#08111f]/25 px-6 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Pedir orçamento
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
