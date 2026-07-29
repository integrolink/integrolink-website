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
      <section className="relative isolate min-h-[25rem] overflow-hidden bg-[#0b1d38] sm:min-h-[30rem]">
        <HeroMedia />
        <Container className="relative flex min-h-[25rem] items-center py-14 sm:min-h-[30rem] sm:py-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-content-background">
        <Container className="py-16 sm:py-24">
          <p className="max-w-2xl border-l-2 border-brand pl-5 text-lg leading-8 text-content-muted sm:text-xl">
            {description}
          </p>
          {children}
        </Container>
      </section>
    </main>
  );
}
