import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "./enlace.css";

export const metadata: Metadata = {
  title: "Enlace - Agencia de Soluciones Digitales",
  description: "Creamos páginas web, aplicaciones y herramientas digitales para hacer avanzar tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
