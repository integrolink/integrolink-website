import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="IntegroLink — página inicial"
      className="inline-flex items-center transition-opacity active:opacity-65"
    >
      <Image
        src="/brand/integrolink-symbol-white.svg"
        alt="IntegroLink"
        width={545}
        height={707}
        priority
        className="h-11 w-auto lg:hidden"
      />
      <Image
        src="/brand/integrolink-signature-white.svg"
        alt=""
        width={1547}
        height={377}
        priority
        className="hidden h-auto w-48 lg:block"
      />
    </Link>
  );
}
