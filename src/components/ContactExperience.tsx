"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type ContactIconName = "mail" | "budget" | "support" | "instagram" | "linkedin" | "facebook";

const contactRoutes = [
  {
    id: "projeto",
    label: "Novo projeto ou orçamento",
    email: "orcamentos@integrolink.pt",
  },
  {
    id: "comercial",
    label: "Informação comercial",
    email: "comercial@integrolink.pt",
  },
  {
    id: "suporte",
    label: "Suporte técnico",
    email: "suporte@integrolink.pt",
  },
  {
    id: "geral",
    label: "Outro assunto",
    email: "geral@integrolink.pt",
  },
] as const;

type ContactRouteId = (typeof contactRoutes)[number]["id"];

const directContacts = [
  {
    icon: "budget" as const,
    kicker: "Projetos e orçamentos",
    label: "orcamentos@integrolink.pt",
    href: "mailto:orcamentos@integrolink.pt",
  },
  {
    icon: "support" as const,
    kicker: "Apoio ao cliente",
    label: "suporte@integrolink.pt",
    href: "mailto:suporte@integrolink.pt",
  },
  {
    icon: "mail" as const,
    kicker: "Contacto geral",
    label: "geral@integrolink.pt",
    href: "mailto:geral@integrolink.pt",
  },
];

const socialLinks = [
  {
    icon: "instagram" as const,
    label: "Instagram",
    href: "https://www.instagram.com/integrolink?utm_source=qr&igsh=dmx5MW1tZTllOGRn",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/integrolink/",
  },
  {
    icon: "facebook" as const,
    label: "Facebook",
    href: "https://www.facebook.com/share/199PNxdxka/",
  },
];

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, ReactNode> = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    budget: (
      <>
        <path d="M4 3h12l4 4v14H4z" />
        <path d="M16 3v5h4M8 12h8M8 16h5" />
      </>
    ),
    support: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-7H4zm16 0v4a2 2 0 0 1-2 2h-2v-7h4zM16 19c0 2-2 2-4 2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7m0-10v.01M11 17v-7m0 3.2c.5-2 6-2.2 6 1.7V17" />
      </>
    ),
    facebook: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M13.5 8H15V5.2c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.7 1.4-3.7 3.9V11H7v3h2v6m4-9H9" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6"
    >
      {paths[name]}
    </svg>
  );
}

export function ContactExperience() {
  const [selectedRoute, setSelectedRoute] = useState<ContactRouteId>(
    contactRoutes[0].id,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const route =
      contactRoutes.find((item) => item.id === selectedRoute) ?? contactRoutes[0];
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const location = String(form.get("location") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = `[Website] ${route.label} — ${name}`;
    const body = [
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefone: ${phone || "Não indicado"}`,
      `Localidade: ${location || "Não indicada"}`,
      `Assunto: ${route.label}`,
      "",
      "Mensagem:",
      message,
    ].join("\n");

    window.location.href = `mailto:${route.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="mt-14 sm:mt-20">
      <section className="grid overflow-hidden border border-white/10 bg-[#0c1420] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
          <div
            aria-hidden="true"
            className="absolute -left-28 -top-28 size-72 rounded-full border border-brand/15"
          />
          <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Fale connosco
          </p>
          <h2 className="relative mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.04em] text-content-foreground sm:text-4xl">
            Comecemos pelo que precisa de funcionar melhor.
          </h2>
          <p className="relative mt-5 max-w-md text-sm leading-7 text-content-muted sm:text-base">
            Selecione o tema e encaminhamos o seu contacto para a equipa certa.
          </p>

          <div className="relative mt-10 divide-y divide-white/10 border-y border-white/10">
            {directContacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="group flex items-center gap-4 py-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ContactIcon name={contact.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35">
                    {contact.kicker}
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-content-foreground sm:text-base">
                    {contact.label}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="relative mt-9">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35">
              Acompanhe a IntegroLink
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} da IntegroLink — abre numa nova janela`}
                  className="grid size-12 place-items-center border border-white/15 text-content-muted transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <ContactIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-11">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                O seu projeto
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-content-foreground sm:text-3xl">
                Conte-nos a sua ideia.
              </h2>
            </div>
            <span className="hidden text-xs font-semibold text-white/25 sm:block">
              Campos * obrigatórios
            </span>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-content-muted">
              Nome *
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-3 min-h-12 w-full border border-white/15 bg-[#090f17] px-4 text-base font-normal normal-case tracking-normal text-content-foreground outline-none transition-colors placeholder:text-white/25 focus:border-brand"
                placeholder="O seu nome"
              />
            </label>
            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-content-muted">
              Email *
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-3 min-h-12 w-full border border-white/15 bg-[#090f17] px-4 text-base font-normal normal-case tracking-normal text-content-foreground outline-none transition-colors placeholder:text-white/25 focus:border-brand"
                placeholder="nome@email.pt"
              />
            </label>
            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-content-muted">
              Telefone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="mt-3 min-h-12 w-full border border-white/15 bg-[#090f17] px-4 text-base font-normal normal-case tracking-normal text-content-foreground outline-none transition-colors placeholder:text-white/25 focus:border-brand"
                placeholder="+351"
              />
            </label>
            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-content-muted">
              Localidade
              <input
                name="location"
                autoComplete="address-level2"
                className="mt-3 min-h-12 w-full border border-white/15 bg-[#090f17] px-4 text-base font-normal normal-case tracking-normal text-content-foreground outline-none transition-colors placeholder:text-white/25 focus:border-brand"
                placeholder="Onde será o projeto?"
              />
            </label>
          </div>

          <fieldset className="mt-7">
            <legend className="text-xs font-bold uppercase tracking-[0.12em] text-content-muted">
              Como podemos ajudar? *
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {contactRoutes.map((route) => (
                <label
                  key={route.id}
                  className={`flex min-h-14 cursor-pointer items-center border px-4 text-sm font-semibold transition-colors ${
                    selectedRoute === route.id
                      ? "border-brand bg-brand/10 text-content-foreground"
                      : "border-white/12 text-content-muted hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="subject"
                    value={route.id}
                    checked={selectedRoute === route.id}
                    onChange={() => setSelectedRoute(route.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`mr-3 size-2 shrink-0 rounded-full ${
                      selectedRoute === route.id ? "bg-brand" : "bg-white/20"
                    }`}
                  />
                  {route.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-7 block text-xs font-bold uppercase tracking-[0.12em] text-content-muted">
            Mensagem *
            <textarea
              required
              name="message"
              rows={6}
              className="mt-3 w-full resize-y border border-white/15 bg-[#090f17] px-4 py-4 text-base font-normal leading-7 normal-case tracking-normal text-content-foreground outline-none transition-colors placeholder:text-white/25 focus:border-brand"
              placeholder="Fale-nos sobre o espaço, os objetivos e aquilo que gostaria de melhorar."
            />
          </label>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-content-muted">
            <input
              required
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-[#2375FF]"
            />
            Autorizo a utilização destes dados para responder ao meu pedido de contacto.
          </label>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex min-h-13 items-center justify-center gap-4 bg-brand px-7 text-sm font-bold text-white shadow-[0_12px_35px_rgba(35,117,255,0.2)] transition-colors hover:bg-[#4b91ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Preparar mensagem
              <span aria-hidden="true">→</span>
            </button>
            <p className="max-w-xs text-[0.7rem] leading-5 text-white/35">
              Ao continuar, abrimos a sua aplicação de email com a mensagem pronta a enviar.
            </p>
          </div>
        </form>
      </section>

      <section className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-3">
        {[
          ["01", "Conte-nos o desafio", "Não precisa de conhecer a solução técnica."],
          ["02", "Analisamos consigo", "Clarificamos necessidades, espaço e objetivos."],
          ["03", "Desenhamos o caminho", "Propomos uma solução ajustada ao projeto."],
        ].map(([number, title, text]) => (
          <article
            key={number}
            className="min-h-48 border-b border-r border-white/10 p-6 sm:p-8"
          >
            <span className="text-xs font-bold tracking-[0.16em] text-brand">
              {number}
            </span>
            <h3 className="mt-7 text-lg font-bold text-content-foreground">
              {title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-content-muted">
              {text}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
