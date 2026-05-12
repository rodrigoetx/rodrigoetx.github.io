import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rodrigo Teixeira | Desenvolvedor & Entusiasta em IA",
  description: "Portfólio de Rodrigo Teixeira - Desenvolvedor, IA e Automação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0c0a09] text-[#f5f5f4] selection:bg-[#ea580c] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
