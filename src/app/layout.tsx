import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "./enlace.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://redenlace.cl'),
  title: "ENLACE · Soluciones Digitales para Emprendedores y Empresas",
  description: "Creamos páginas web, aplicaciones móviles, software y herramientas digitales pensadas para necesidades reales en La Serena, Coquimbo y todo Chile.",
  keywords: [
    "ENLACE Soluciones Digitales",
    "páginas web La Serena",
    "desarrollo web Chile",
    "software a medida",
    "aplicaciones móviles",
    "Constructor Pro",
    "Enlace Barbería",
    "tiendas online",
    "automatización de procesos"
  ],
  authors: [{ name: "ENLACE Soluciones Digitales" }],
  openGraph: {
    title: "ENLACE · Soluciones Digitales",
    description: "Creamos páginas web, aplicaciones y herramientas pensadas para necesidades reales.",
    url: "https://redenlace.cl",
    siteName: "ENLACE Soluciones Digitales",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/enlace-logo.png",
        width: 512,
        height: 512,
        alt: "ENLACE Soluciones Digitales",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ENLACE · Soluciones Digitales",
    description: "Páginas web, aplicaciones y software para emprendedores y empresas.",
    images: ["/enlace-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
