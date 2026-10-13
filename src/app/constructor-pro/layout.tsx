import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enlace Constructor Pro — Software de Presupuestos para Constructores Chile",
  description:
    "Calcula materiales automáticamente con APU, genera presupuestos y contratos de obra profesionales, planifica con Carta Gantt y exporta a WhatsApp. Para contratistas y constructoras en Chile.",
  openGraph: {
    title: "Enlace Constructor Pro — Software de Presupuestos para Constructores Chile",
    description:
      "Calcula materiales automáticamente con APU, genera presupuestos y contratos de obra profesionales, planifica con Carta Gantt y exporta a WhatsApp.",
    url: "https://redenlace.cl/constructor-pro",
    siteName: "ENLACE Soluciones Digitales",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/ecosistema/constructor-pro-logo.png",
        width: 512,
        height: 512,
        alt: "Enlace Constructor Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlace Constructor Pro — Software de Presupuestos para Constructores Chile",
    description:
      "Calcula materiales automáticamente con APU, genera presupuestos y contratos de obra profesionales, planifica con Carta Gantt y exporta a WhatsApp.",
    images: ["/ecosistema/constructor-pro-logo.png"],
  },
};

export default function ConstructorProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
