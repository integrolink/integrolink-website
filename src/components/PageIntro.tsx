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
    <main className="min-h-[calc(100svh-4.75rem)] bg-background sm:min-h-[calc(100svh-5.5rem)]">
      <Container className="grid min-h-[calc(100svh-4.75rem)] items-center py-16 sm:min-h-[calc(100svh-5.5rem)] sm:py-24">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-foreground sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl border-l-2 border-brand pl-5 text-lg leading-8 text-muted sm:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </main>
  );
}
