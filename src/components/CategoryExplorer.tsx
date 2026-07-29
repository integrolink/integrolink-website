"use client";

import { useRef, useState, type ReactNode } from "react";

export type CategoryIconName =
  | "home"
  | "lodging"
  | "business"
  | "condominium"
  | "automation"
  | "security"
  | "network"
  | "access"
  | "energy"
  | "support";

export type CategoryItem = {
  id: string;
  label: string;
  statement: string;
  icon: CategoryIconName;
  description: string;
  capabilities: string[];
  capabilitiesTitle: string;
};

type CategoryExplorerProps = {
  items: CategoryItem[];
};

const iconPaths: Record<CategoryIconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9.5 20v-6h5v6" />
    </>
  ),
  lodging: (
    <>
      <path d="M4 19V7" />
      <path d="M4 15h16v4" />
      <path d="M7 11h4a3 3 0 0 1 3 3v1H7z" />
      <path d="M7 8h.01" />
      <path d="M19 8v3" />
      <path d="m17.5 9.5 3-3" />
    </>
  ),
  business: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V4h8v3" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </>
  ),
  condominium: (
    <>
      <path d="M5 21V4h10v17" />
      <path d="M15 9h4v12" />
      <path d="M8 8h2M8 12h2M8 16h2M17 13h.01M17 17h.01" />
      <path d="M3 21h18" />
    </>
  ),
  automation: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M19 9h3M2 15h3M19 15h3" />
      <path d="m9 13 2-4v3h4l-2 4v-3z" />
    </>
  ),
  security: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="m7 7 3.2 3.2M17 7l-3.2 3.2M7 17l3.2-3.2M17 17l-3.2-3.2" />
    </>
  ),
  access: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16c.8-2 5.2-2 6 0M15 10h3M15 14h3" />
    </>
  ),
  energy: (
    <>
      <path d="M13 2 5 14h7l-1 8 8-12h-7z" />
    </>
  ),
  support: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3z" />
      <path d="m5 18 1 1" />
    </>
  ),
};

function CategoryIcon({ name }: { name: CategoryIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-7 sm:size-8"
    >
      {iconPaths[name]}
    </svg>
  );
}

export function CategoryExplorer({ items }: CategoryExplorerProps) {
  const selectorRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isExpanded, setIsExpanded] = useState(false);
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  if (!activeItem) {
    return null;
  }

  return (
    <div className="mt-14 sm:mt-20">
      <div
        ref={selectorRef}
        className={`grid gap-4 ${
          items.length > 4
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
            : "grid-cols-2 lg:grid-cols-4"
        }`}
        aria-label="Selecionar uma área"
      >
        {items.map((item) => {
          const isActive = item.id === activeItem.id;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setActiveId(item.id);
                setIsExpanded(false);
              }}
              className={`group flex min-h-40 flex-col items-center justify-center gap-4 border px-3 py-5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                isActive
                  ? "border-brand bg-brand text-white"
                  : "border-white/12 bg-white/[0.025] text-content-muted hover:border-brand/60 hover:text-content-foreground"
              }`}
            >
              <span
                className={`grid size-16 place-items-center rounded-full border transition-colors sm:size-20 ${
                  isActive
                    ? "border-white/40 bg-white/10"
                    : "border-white/15 bg-white/[0.03] group-hover:border-brand/60 group-hover:text-brand"
                }`}
              >
                <CategoryIcon name={item.icon} />
              </span>
              <span className="text-sm font-semibold leading-snug sm:text-base">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={activeItem.id}
        aria-live="polite"
        className="mt-5 border-l-2 border-brand bg-white/[0.035] sm:mt-6"
      >
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`details-${activeItem.id}`}
          onClick={() => setIsExpanded((current) => !current)}
          className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-9 sm:py-9"
        >
          <span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand">
              {activeItem.label}
            </span>
            <span className="mt-3 block max-w-3xl text-xl font-semibold leading-snug tracking-[-0.025em] text-content-foreground sm:text-3xl">
              {activeItem.statement}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="relative grid size-11 shrink-0 place-items-center rounded-full border border-white/20 text-content-foreground transition-colors hover:border-brand hover:text-brand sm:size-12"
          >
            <span className="absolute h-px w-4 bg-current" />
            <span
              className={`absolute h-4 w-px bg-current transition-transform ${
                isExpanded ? "rotate-90 opacity-0" : ""
              }`}
            />
          </span>
        </button>

        <div
          id={`details-${activeItem.id}`}
          hidden={!isExpanded}
          className="border-t border-white/10 px-6 pb-8 pt-7 sm:px-9 sm:pb-10 sm:pt-9"
        >
            <p className="max-w-4xl text-base leading-8 text-content-muted sm:text-lg">
              {activeItem.description}
            </p>

            <div className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-content-foreground">
                {activeItem.capabilitiesTitle}
              </p>
              <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {activeItem.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 border-t border-white/8 pt-3 text-sm leading-6 text-content-muted sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                selectorRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="mt-9 inline-flex min-h-11 items-center gap-3 border border-white/20 px-5 text-sm font-bold text-content-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span aria-hidden="true">↑</span>
              Escolher outra área
            </button>
        </div>
      </div>
    </div>
  );
}
