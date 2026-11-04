import { HeroMedia } from "@/components/HeroMedia";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  return (
    <main className="bg-content-background">
      <section className="relative isolate min-h-[20rem] overflow-hidden bg-[#0b1d38] sm:min-h-[30rem]">
        <HeroMedia />
        <Container className="relative flex min-h-[20rem] items-center py-10 sm:min-h-[30rem] sm:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[0.2em] text-white/75 sm:mb-5 sm:text-xs">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="max-w-4xl text-[1.75rem] font-bold leading-[1.08] tracking-[-0.04em] text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-content-background">
        <Container className="py-11 sm:py-24">
          <div className="max-w-4xl border border-[#d9e1eb] bg-white px-5 py-5 shadow-[0_12px_35px_rgba(19,44,78,0.06)] sm:px-8 sm:py-6">
            <p className="max-w-2xl border-l-2 border-brand pl-4 text-sm leading-7 text-content-muted sm:pl-5 sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
          {children}
        </Container>
      </section>
    </main>
  );
}
