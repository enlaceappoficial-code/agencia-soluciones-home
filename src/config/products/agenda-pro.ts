import { ProductConfig } from "@/types/product";

export const agendaProConfig: ProductConfig = {
  id: "agenda-pro",
  name: "ENLACE Agenda Pro",
  shortName: "Agenda Pro",
  tagline: "El control total de tus Citas y Reservas en un solo Panel Inteligente.",
  description:
    "Sistema inteligente de citas, reservas online 24/7 y control para profesionales independientes, clínicas, centros de estética, consultorías y empresas de servicios en Chile. Multi-agenda, recordatorios automáticos por WhatsApp, señas anti-inasistencia, finanzas y marca propia.",
  logoUrl: "/ecosistema/logo-agenda-pro.png",
  badge: {
    text: "Reservas Online 24/7 · WhatsApp Automático · Multi-Equipo",
    dotColor: "#3B82F6",
  },
  accentColor: {
    primary: "#2563EB",
    gradientText: "from-blue-400 via-sky-300 to-amber-400",
    accentHex: "#3B82F6",
  },
  navLinks: [
    { label: "Características", href: "#caracteristicas", external: false },
    { label: "Panel en Vivo", href: "#mockup", external: false },
    { label: "Planes y Precios", href: "#planes", external: false },
    { label: "Soporte Local", href: "#digitaliza", external: false },
  ],
  primaryCta: {
    label: "Acceder al Panel",
    href: "https://agenda.redenlace.cl",
    external: true,
    variant: "primary",
  },
  secondaryCta: {
    label: "Empezar 1 Mes Gratis",
    href: "https://agenda.redenlace.cl",
    external: true,
    variant: "outline",
  },
  heroStats: [
    { value: "24/7", label: "Reservas Online Autónomas", accentColor: "blue" },
    { value: "0%", label: "Comisiones por Cita", accentColor: "orange" },
    { value: "100%", label: "Tu Marca Propia", accentColor: "blue" },
  ],
  features: [
    {
      title: "Personalización de Marca (White-Label)",
      description:
        "Tu propio link exclusivo (ej: agenda.redenlace.cl/tu-marca) con tu logo y colores corporativos. Tus clientes reservan directamente contigo.",
      icon: "🎨",
      tag: "Marca Propia",
      accentColor: "blue",
    },
    {
      title: "Agendas Multi-Profesional",
      description:
        "Agendas independientes para cada especialista o colaborador bajo una misma empresa, sin choques de horario ni confusiones.",
      icon: "👥",
      tag: "Multi-Agenda",
      accentColor: "orange",
    },
    {
      title: "Recordatorios Automáticos por WhatsApp",
      description:
        "Confirmaciones inmediatas y recordatorios previos por WhatsApp para evitar olvidos y reducir el 'no-show' a menos del 3%.",
      icon: "💬",
      tag: "Anti No-Show",
      accentColor: "blue",
    },
    {
      title: "Cobro de Señas y Pagos Anticipados",
      description:
        "Exige un abono previo para confirmar citas de alto valor. Muestra datos bancarios con copiado rápido para asegurar tu ingreso.",
      icon: "💳",
      tag: "Pagos y Señas",
      accentColor: "purple",
    },
    {
      title: "Control de Caja y Gastos Fijos",
      description:
        "Registro de ingresos diarios por profesional, medios de pago (efectivo, transferencia, tarjeta), gastos fijos y cálculo de utilidad neta.",
      icon: "💰",
      tag: "Finanzas Reales",
      accentColor: "orange",
    },
    {
      title: "Conexión a la Red Social ENLACE",
      description:
        "Enciende tu disponibilidad en el mapa comunal de ENLACE para que clientes cercanos descubran tus servicios y reserven al instante.",
      icon: "🔗",
      tag: "Ecosistema Enlace",
      accentColor: "blue",
    },
  ],
  plans: {
    title: "Elige el plan ideal para tu negocio",
    subtitle:
      "Sin comisiones por cita. Pagas una tarifa fija y el 100% de los ingresos de tus servicios va directo a tu cuenta.",
    hasToggle: true,
    items: [
      {
        id: "starter",
        name: "Starter",
        price: "$29.990",
        period: "/semestre",
        monthlyEquivalent: "$5.000 / mes",
        description:
          "Ideal para profesionales independientes que quieren automatizar su agendamiento.",
        highlightNote:
          "🎁 Si eres parte de los pioneros de Enlace, obtén tu plan básico GRATIS por 1 mes (30 días).",
        features: [
          "1 Profesional / Agenda individual",
          "Reservas online 24/7 ilimitadas",
          "Link público de cliente personalizado",
          "Ficha y base de datos de clientes",
          "Control de caja diaria y gastos básicos",
          "Acceso móvil PWA y escritorio",
        ],
        cta: {
          label: "Solicitar Plan por WhatsApp",
          href:
            "https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Starter%20de%20Agenda%20Pro",
          external: true,
          variant: "outline",
        },
      },
      {
        id: "pro",
        name: "Pro",
        price: "$45.990",
        period: "/semestre",
        monthlyEquivalent: "$7.665 / mes",
        description: "El más elegido para centros, consultas y equipos en crecimiento.",
        isPopular: true,
        badge: "MÁS POPULAR",
        features: [
          "Hasta 3 Profesionales / Multi-agenda",
          "Recordatorios por WhatsApp automáticos",
          "CRM inteligente de retención de clientes",
          "Historial técnico y notas por cliente",
          "Personalización con Logo propio",
          "Estadísticas de ganancias netas y reportes",
          "Todo lo incluido en el Plan Starter",
        ],
        cta: {
          label: "Solicitar Plan por WhatsApp",
          href:
            "https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Pro%20de%20Agenda%20Pro",
          external: true,
          variant: "primary",
        },
      },
      {
        id: "premium",
        name: "Premium",
        price: "$85.990",
        period: "/semestre",
        monthlyEquivalent: "$14.330 / mes",
        description:
          "Potencia ilimitada para empresas, clínicas y centros con alto flujo de atención.",
        features: [
          "Profesionales Ilimitados (Sin restricciones)",
          "Depósito y Seña obligatoria Anti No-Show",
          "Subdominio propio (tumarca.redenlace.cl)",
          "WhatsApp API para confirmación inmediata",
          "Notificaciones Push automáticas",
          "Soporte técnico prioritario",
          "Todo lo incluido en el Plan Pro",
        ],
        cta: {
          label: "Solicitar Plan por WhatsApp",
          href:
            "https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Premium%20de%20Agenda%20Pro",
          external: true,
          variant: "outline",
        },
      },
    ],
  },
  legalLinks: [
    { label: "Términos del Servicio", href: "/legal/terminos" },
    { label: "Política de Privacidad", href: "/legal/privacidad" },
    { label: "Garantía de Disponibilidad", href: "/legal/terminos#garantia" },
  ],
  contactLinks: [
    { label: "WhatsApp Soporte", href: "https://wa.me/56941278725", external: true },
    { label: "info@redenlace.cl", href: "mailto:info@redenlace.cl", external: false },
    { label: "Red Social ENLACE", href: "/red-social", external: false },
    { label: "Constructor Pro", href: "/constructor-pro", external: false },
    { label: "Barbería Pro", href: "/peluqueria", external: false },
    { label: "Agencia ENLACE (Inicio)", href: "/", external: false },
  ],
  location: "La Serena · Coquimbo · Chile",
};
