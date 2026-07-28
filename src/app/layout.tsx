import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IntegroLink | Integração tecnológica",
  description:
    "Soluções integradas de automação, segurança, controlo remoto e eficiência energética para casas e empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
