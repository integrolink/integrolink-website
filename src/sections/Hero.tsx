import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="IntegroLink — Integramos tecnologia. Ligamos soluções."
      className="relative isolate min-h-[42rem] overflow-hidden bg-foreground sm:min-h-[46rem] lg:min-h-[calc(100svh-5.5rem)]"
    >
      <Image
        src="/brand/integrolink-hero.png"
        alt="Casa inteligente ligada à aplicação móvel IntegroLink"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[69%_center] sm:object-[66%_center] lg:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.28)_0%,rgba(8,17,31,0.04)_45%,rgba(8,17,31,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,17,31,0.62)_0%,rgba(8,17,31,0.22)_38%,rgba(8,17,31,0)_68%)]"
      />

      <Container className="relative flex min-h-[42rem] flex-col justify-between py-10 sm:min-h-[46rem] sm:py-14 lg:min-h-[calc(100svh-5.5rem)] lg:justify-center lg:py-20">
        <div className="max-w-[34rem]">
          <Image
            src="/brand/integrolink-signature-white.svg"
            alt="IntegroLink — Integramos tecnologia. Ligamos soluções."
            width={1547}
            height={377}
            priority
            className="h-auto w-full max-w-[31rem] drop-shadow-[0_8px_28px_rgba(0,0,0,0.28)]"
          />

          <p className="mt-7 max-w-md text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
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

        <div className="flex items-end justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/70 lg:absolute lg:inset-x-10 lg:bottom-8">
          <span>Smart Home · Smart Business</span>
          <a
            href="/servicos"
            aria-label="Descer para conhecer as soluções"
            className="hidden size-10 items-center justify-center border border-white/35 text-lg transition-colors hover:border-white hover:text-white sm:flex"
          >
            ↓
          </a>
        </div>
      </Container>
    </section>
  );
}
