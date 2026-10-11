import Image from "next/image";

type ContextImage = { src: string; alt: string; caption: string; contain?: boolean };

export function ContextImageStrip({ items }: { items: ContextImage[] }) {
  return <div className="mt-10 grid max-w-3xl grid-cols-3 gap-2 sm:gap-4">
    {items.map((item) => <figure key={item.src} className="border border-[#d7e0e9] bg-white p-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e9eef3]">
        <Image src={item.src} alt={item.alt} fill sizes="(min-width: 640px) 30vw, 100vw" className={item.contain ? "object-contain" : "object-cover"}/>
      </div>
      <figcaption className="px-1 pb-1 pt-2 text-[.66rem] font-semibold leading-4 text-[#5e6d80] sm:px-2 sm:pt-3 sm:text-xs sm:leading-5">{item.caption}</figcaption>
    </figure>)}
  </div>;
}
