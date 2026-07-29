import Image from "next/image";
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

          <p className="mt-7 max-w-md text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Automação, segurança e eficiência integradas num único ecossistema,
            para casas e empresas.
          </p>

          <a
            href="/servicos"
            className="mt-8 inline-flex min-h-12 items-center gap-4 border border-white/60 bg-white px-6 text-sm font-bold text-foreground transition-colors hover:border-white hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Conheça as nossas soluções
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
