import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Integração tecnológica
            </p>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
              Um único ecossistema para ligar tecnologia, espaços e pessoas.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
