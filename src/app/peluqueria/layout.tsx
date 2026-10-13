import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ENLACE Barbería Pro — Gestión y Reservas Online para Barberías y Salones en Chile",
  description:
    "Sistema de reservas online y control técnico para barberías y salones de belleza en Chile. Multi-agenda, recordatorios automáticos por WhatsApp, cobro de señas integradas y marca propia (White-Label).",
  openGraph: {
    title: "ENLACE Barbería Pro — Gestión y Reservas Online para Barberías y Salones en Chile",
    description:
      "Gestiona múltiples agendas, calcula tu ganancia neta, personaliza tu marca y olvídate de las inasistencias gracias a los cobros de señas integrados.",
    url: "https://redenlace.cl/peluqueria",
    siteName: "ENLACE Soluciones Digitales",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/ecosistema/logo-barberia.png",
        width: 512,
        height: 512,
        alt: "ENLACE Barbería Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENLACE Barbería Pro — Gestión y Reservas Online para Barberías y Salones en Chile",
    description:
      "Sistema de reservas online y control técnico para barberías y salones de belleza en Chile. Multi-agenda y recordatorios automáticos por WhatsApp.",
    images: ["/ecosistema/logo-barberia.png"],
  },
};

export default function PeluqueriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
