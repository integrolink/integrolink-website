import { HeroMedia } from "@/components/HeroMedia";
import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
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
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-white drop-shadow-sm sm:text-7xl">
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
        </Container>
      </section>
    </main>
  );
}
