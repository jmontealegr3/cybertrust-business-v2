import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // or Inter/Outfit if available, defaulting to Geist as it comes with Next.js
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Trust Business | Ciberseguridad & Automatización Inteligente",
  description: "Transformamos tu empresa con Ciberseguridad avanzada y Automatización de Procesos con IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen bg-black text-white selection:bg-cyan-500/30"
        )}
      >
        {children}
      </body>
    </html>
  );
}
