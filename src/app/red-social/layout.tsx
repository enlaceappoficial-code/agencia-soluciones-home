import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ENLACE Red Social | Conecta tu barrio, crece tu negocio",
  description:
    "Red social hiperlocal para conectar personas, emprendedores, servicios y oportunidades cercanas. Descubre ENLACE y descarga la aplicación para Android.",
  openGraph: {
    title: "ENLACE Red Social | Conecta tu barrio, crece tu negocio",
    description:
      "Red social hiperlocal para conectar personas, emprendedores, servicios y oportunidades cercanas. Descubre ENLACE y descarga la aplicación para Android.",
    url: "https://redenlace.cl/red-social",
    siteName: "ENLACE Soluciones Digitales",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/ecosistema/red-social-feed.jpg",
        width: 1080,
        height: 1920,
        alt: "ENLACE Red Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENLACE Red Social | Conecta tu barrio, crece tu negocio",
    description:
      "Red social hiperlocal para conectar personas, emprendedores, servicios y oportunidades cercanas. Descubre ENLACE y descarga la aplicación para Android.",
    images: ["/ecosistema/red-social-feed.jpg"],
  },
};

export default function RedSocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
