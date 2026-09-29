import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Diego | Consultor de Consórcio",
  description: "Seu consultor de consórcio na Paraíba.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans min-h-dvh">{children}</body>
    </html>
  );
}