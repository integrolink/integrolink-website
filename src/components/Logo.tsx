import Image from "next/image";

export function Logo() {
  return (
    <a
      href="#inicio"
      aria-label="IntegroLink — página inicial"
      className="inline-flex items-center"
    >
      <Image
        src="/brand/integrolink-symbol-white.svg"
        alt="IntegroLink"
        width={545}
        height={707}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </a>
  );
}
