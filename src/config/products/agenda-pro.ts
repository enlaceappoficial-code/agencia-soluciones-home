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
      "Empieza 100% gratis para probar y captar clientes. La alternativa más accesible y potente del mercado chileno.",
    hasToggle: true,
    items: [
      {
        id: "starter",
        name: "Gratis",
        price: "$0",
        period: "/gratis",
        monthlyEquivalent: "$0 / mes para siempre",
        description:
          "Comienza a digitalizarte hoy sin costo ni tarjeta de crédito.",
        highlightNote:
          "🎁 Plan Gratuito para captar y recibir citas online de inmediato.",
        features: [
          "1 Profesional / Agenda personal",
          "Hasta 30 reservas online al mes",
          "Link público de cliente personalizado",
          "Ficha y base de datos de clientes",
          "Control de caja diaria y gastos básicos",
          "Acceso móvil PWA y computador",
        ],
        cta: {
          label: "Comenzar Gratis (Sin Tarjeta)",
          href: "https://agenda.redenlace.cl",
          external: true,
          variant: "outline",
        },
      },
      {
        id: "inicial",
        name: "Inicial",
        price: "$24.990",
        period: "/año",
        monthlyEquivalent: "$2.083 / mes",
        description: "Ideal para profesionales individuales con agendamiento constante.",
        features: [
          "1 Profesional / Agenda ilimitada",
          "Reservas online 24/7 ILIMITADAS",
          "Modalidades: Presencial, Online y Encargo",
          "Ficha técnica y notas de clientes",
          "Recordatorios por WhatsApp (1 clic)",
          "Control de ingresos y gastos diarios",
          "Todo lo incluido en el Plan Gratis",
        ],
        cta: {
          label: "Solicitar Plan Inicial",
          href:
            "https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20Plan%20Inicial%20de%20Agenda%20Pro",
          external: true,
          variant: "outline",
        },
      },
      {
        id: "pro",
        name: "Pro",
        price: "$49.990",
        period: "/año",
        monthlyEquivalent: "$4.166 / mes",
        description: "El más elegido para consultas, salones y locales en crecimiento.",
        isPopular: true,
        badge: "MÁS POPULAR",
        features: [
          "Hasta 3 Profesionales / Multi-agenda",
          "Reservas online 24/7 ILIMITADAS",
          "Señas y abonos bancarios anti no-show",
          "Recordatorios y confirmaciones WhatsApp",
          "CRM inteligente de retención de clientes",
          "Personalización con Logo del negocio",
          "Reportes de rentabilidad y utilidad neta",
          "Todo lo incluido en el Plan Inicial",
        ],
        cta: {
          label: "Solicitar Plan Pro",
          href:
            "https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20Plan%20Pro%20de%20Agenda%20Pro",
          external: true,
          variant: "primary",
        },
      },
      {
        id: "premium",
        name: "Premium",
        price: "$89.990",
        period: "/año",
        monthlyEquivalent: "$7.499 / mes",
        description:
          "Control total, marca propia y señas obligatorias para centros con alto flujo.",
        features: [
          "Profesionales y Sillones ILIMITADOS",
          "Marca Propia (Tu Logo y Nombre)",
          "Depósito y Seña obligatoria validada",
          "Múltiples sucursales o salas",
          "WhatsApp API y notificaciones push",
          "Soporte técnico prioritario 24/7",
          "Exportación contable (Excel / CSV)",
          "Todo lo incluido en el Plan Pro",
        ],
        cta: {
          label: "Solicitar Plan Premium",
          href:
            "https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20Plan%20Premium%20de%20Agenda%20Pro",
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
