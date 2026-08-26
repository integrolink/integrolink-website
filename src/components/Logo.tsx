import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/", locale = "pt" }: { href?: string; locale?: "pt" | "en" }) {
  return (
    <Link
      href={href}
      aria-label={locale === "en" ? "IntegroLink — homepage" : "IntegroLink — página inicial"}
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
        src="/brand/integrolink-slogan-white.svg"
        alt=""
        width={645}
        height={117}
        priority
        className="hidden h-auto w-52 lg:block"
      />
    </Link>
  );
}
