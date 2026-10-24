"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductFooter from "@/components/product/ProductFooter";
import { constructorProConfig } from "@/config/products/constructor-pro";

type BillingPeriod = "anual" | "semestral" | "trimestral";

interface PlanPrices {
  anual: string;
  semestral: string;
  trimestral: string;
}

interface PlanItem {
  name: string;
  price: string | PlanPrices;
  period: string | PlanPrices;
  monthlyEquivalent?: {
    anual: string;
    semestral: string;
    trimestral: string;
  };
  description: string;
  features: string[];
  cta: string;
  badge?: "popular" | "gift" | null;
  highlight: "green" | "orange" | "blue";
  emphasis?: boolean;
  note?: string;
  subnote?: string;
}

const HERO_STATS = [
  { num: "Minutos", label: "presupuestos listos" },
  { num: "Offline*", label: "trabajo local sin conexión" },
  { num: "UF + IVA", label: "mercado chileno" },
  { num: "300+", label: "partidas y APUs" },
];

const VS_EXCEL_ROWS = [
  { excel: "Calculas materiales a mano", enlace: "Materiales calculados desde APU automáticamente" },
  { excel: "PDF sin logo ni firma profesional", enlace: "PDFs profesionales con logo, firma y colores" },
  { excel: "Sin análisis de precios unitarios", enlace: "Más de 300 partidas con análisis de precios unitarios" },
  { excel: "No genera contratos", enlace: "Contratos, cartas y documentos con 1 clic" },
  { excel: "Sin herramientas de licitación", enlace: "Herramientas de apoyo para organizar antecedentes y preparar información para Mercado Público" },
  { excel: "Sin seguimiento de pagos ni avance", enlace: "Estados de pago por avance físico por partida" },
  { excel: "Datos se pierden o corrompen", enlace: "Trabaja localmente sin conexión*, sistema de respaldo y restauración" },
];

const BONUSES = [
  {
    badge: "E-Book PDF · 53 págs",
    title: "Manual Vol. I: Presupuestar y Rentabilizar Obras",
    value: "$25.000 CLP",
    includedIn: "Gratis desde plan Básico",
    description: "Aprende la anatomía real de un presupuesto, desglosa costos directos e indirectos y domina la diferencia crítica entre recargo y margen.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    badge: "E-Book PDF · 94 págs",
    title: "Manual Vol. II: Gestionar, Controlar y Entregar Obras",
    value: "$35.000 CLP",
    includedIn: "Gratis desde plan Constructor",
    description: "El método P-E-M-D-C-E para controlar avances, estados de pago, adicionales 'ya que estamos' y cierres sin perder rentabilidad.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <polyline points="10 2 10 10 13 7 16 10 16 2" />
      </svg>
    ),
  },
  {
    badge: "Formularios PDF · 40 págs",
    title: "Kit Profesional de 14 Checklists de Terreno",
    value: "$15.000 CLP",
    includedIn: "Gratis desde plan Constructor",
    description: "Formatos de 2 páginas listos para imprimir y llevar en la tabla portapapeles en cada visita, recepción e inspección de obra.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    badge: "Plantillas y Ejemplos · 71 págs",
    title: "Pack de 11 Documentos y Actas de Obra",
    value: "$20.000 CLP",
    includedIn: "Gratis desde plan Constructor",
    description: "Modelos simples y ejemplos reales completados de actas de reunión, recepción de terreno, órdenes de cambio y postventa.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    badge: "Planilla Excel Editable",
    title: "Calculadora y Analizador de Costos ECP",
    value: "$19.000 CLP",
    includedIn: "Gratis desde plan Pro",
    description: "Planilla en Excel automatizada para calcular precios unitarios, margen real de venta y desgloses de forma ágil.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <rect x="8" y="12" width="8" height="6" rx="1" />
      </svg>
    ),
  },
  {
    badge: "App Móvil Cloud Web",
    title: "ECP Medidas de Terreno (Sync JSON)",
    value: "$49.990 CLP",
    includedIn: "Gratis desde plan Pro",
    description: "Levantamiento de partidas, fotos en terreno y calculadora de áreas irregulares con exportación JSON directa a tu PC.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    badge: "Curso Completo Digital",
    title: "Curso Maestro Excel para Construcción",
    value: "$69.000 CLP",
    includedIn: "Gratis desde plan Pro",
    description: "Aprende fórmulas dinámicas, macros, tablas dinámicas y reportería financiera para constructoras y contratistas.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    badge: "Planillas Maestras XLSX",
    title: "Megapack de Cubicaciones y Rendimientos",
    value: "$79.000 CLP",
    includedIn: "Exclusivo del plan Plus",
    description: "Bases de cálculo probadas en terreno para movimiento de tierras, hormigones, enfierraduras, techumbres y terminaciones.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    badge: "Compendio Normativo PDF",
    title: "Biblioteca de Normativa y Prevención de Faenas",
    value: "$69.000 CLP",
    includedIn: "Exclusivo del plan Plus",
    description: "Compendio de ordenanzas, normas NCh, protocolos de faena, seguridad laboral y modelos de contratos para defensa ante inspecciones.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const PRO_FEATURES = [
  {
    id: "01",
    icon: "📋",
    tag: "Comercial & Ventas",
    title: "Presupuestos profesionales",
    description: "Catálogo de partidas, IVA y UF automáticos, múltiples plantillas PDF. Capítulos, numeración jerárquica y envío por WhatsApp con PDF adjunto.",
    detail: "Crea propuestas formales e impecables en minutos. Configura membrete, logo, condiciones comerciales y genera el PDF listo para firmar o enviar directo al WhatsApp del mandante.",
  },
  {
    id: "02",
    icon: "⚙️",
    tag: "Costos & APU",
    title: "APU — Precios Unitarios",
    description: "Costo real por partida: materiales, mano de obra, leyes sociales, GG y utilidad. Más de 300 partidas, APU y plantillas rápidas validadas.",
    detail: "Desglosa cada partida al centavo: rendimiento de cuadrillas, valores de materiales actualizados al mercado chileno, leyes sociales y margen de utilidad garantizado.",
  },
  {
    id: "03",
    icon: "📏",
    tag: "Cálculo Técnico",
    title: "Cubicación inteligente",
    description: "Ingresa dimensiones lineales, áreas o volúmenes y obtén materiales calculados al instante con optimizador de cortes de planchas incluido.",
    detail: "Evita mermas y sobrecostos. El motor calcula rendimientos de hormigón, morteros, fierro, madera y genera patrones óptimos de corte para planchas de OSB, yeso-cartón y terciados.",
  },
  {
    id: "04",
    icon: "📱",
    tag: "Terreno & Móvil",
    title: "App Móvil de Terreno",
    description: "Levantamiento directo en obra con celular, cálculo de terrenos irregulares con fórmula de Herón y sincronización JSON en 1 clic con tu PC.",
    detail: "Nuestra herramienta hermana para Android e iPhone: mide paños irregulares con triangulación de lados, registra metros cuadrados y carga la visita completa a ECP sin transcribir libretas.",
  },
  {
    id: "05",
    icon: "⚖️",
    tag: "Licitaciones",
    title: "Licitaciones Mercado Público",
    description: "Herramientas de apoyo para organizar antecedentes técnicos, calcular ofertas competitivas y preparar documentación licitatoria oficial.",
    detail: "Estructura tus propuestas para Mercado Público y privados. Verifica bases técnicas, consolida formularios de oferta y asegura no dejar ningún ítem fuera de presupuesto.",
  },
  {
    id: "06",
    icon: "📁",
    tag: "Legal & Contratos",
    title: "Documentos de Obra",
    description: "Carta de presentación comercial, contrato de construcción con cláusulas e informe de obra con fotos y detalle técnico por partida en PDF.",
    detail: "Protege tu empresa con contratos formales pre-redactados, cartas de entrega, registros fotográficos de avance y minutas técnicas listas para firmar ante notario o mandante.",
  },
  {
    id: "07",
    icon: "💳",
    tag: "Control Financiero",
    title: "Pagos y Estados de Avance",
    description: "Registra cobros, genera estados de pago por avance físico acumulado de cada partida y actas oficiales de recepción.",
    detail: "Ten el control del flujo de caja de la obra. Emite certificados de pago parciales vinculados a porcentajes de ejecución real para cobrar a tiempo y sin objeciones del cliente.",
  },
  {
    id: "08",
    icon: "📊",
    tag: "Planificación",
    title: "Carta Gantt con MS Project",
    description: "Carta Gantt con tareas, capítulos, dependencias, calendario laboral chileno y exportación nativa XML compatible con Microsoft Project.",
    detail: "Planifica los tiempos de obra con precisión. Configura días feriados, rutas críticas, hitos de entrega y abre tu cronograma directamente en Microsoft Project sin conversiones.",
  },
  {
    id: "09",
    icon: "💾",
    tag: "Productividad",
    title: "Agilidad y Guardado Continuo",
    description: "Guardado en vivo sin salir de la pantalla, borradores rápidos sin cliente obligatorio y función deshacer/rehacer instantánea.",
    detail: "Diseñado para el ritmo real de un constructor: no pierdes ni un solo dato si se cierra la ventana o se corta la energía. Presupuesta ideas rápidas y asígnales cliente después.",
  },
  {
    id: "10",
    icon: "🗄️",
    tag: "Seguridad Local",
    title: "Respaldo y Restauración",
    description: "Sistema de respaldo y restauración de datos local para proteger siempre tu información técnica y presupuestos en tu disco duro.",
    detail: "Tus datos y presupuestos son tuyos. Crea copias de seguridad en un archivo único en tu PC o pendrive y restaura cualquier versión en segundos, incluso sin conexión a internet.",
  },
];

const PLANS: PlanItem[] = [
  {
    name: "Starter",
    price: "$19.990",
    period: "+ IVA · pago único · acceso permanente",
    description: "Precio normal: $19.990 + IVA. Gratis para miembros elegibles de Red Enlace mediante código de activación válido.",
    features: [
      "Dashboard de obras",
      "Presupuestos de obra",
      "PDF profesional con logo y firma",
      "Clientes + Documentos de obra",
      "Contratos y WhatsApp integrado",
    ],
    cta: "Obtener",
    badge: "gift",
    highlight: "green",
    note: "Gratis para miembros elegibles de Red Enlace mediante código de activación válido.",
    subnote: "o pago único $19.990 + IVA",
  },
  {
    name: "Básico",
    price: {
      anual: "$59.990",
      semestral: "$34.990",
      trimestral: "$19.990",
    },
    period: {
      anual: "+ IVA · plan anual (12 meses)",
      semestral: "+ IVA · plan semestral (6 meses)",
      trimestral: "+ IVA · plan trimestral (3 meses)",
    },
    monthlyEquivalent: {
      anual: "$4.999 / mes",
      semestral: "$5.832 / mes",
      trimestral: "$6.663 / mes",
    },
    description: "Presupuestos + Clientes + PDF + Contratos de obra.",
    features: [
      "Presupuestos y obras",
      "PDF profesional con logo y firma",
      "Gestión de clientes y borradores",
      "Documentos de obra y contratos",
      "WhatsApp + Calendario",
      "🎁 Regalo: Manual Vol. I Presupuestar y Rentabilizar (+$25.000)",
    ],
    cta: "Solicitar",
    badge: null,
    highlight: "orange",
  },
  {
    name: "Constructor",
    price: {
      anual: "$89.990",
      semestral: "$49.990",
      trimestral: "$29.990",
    },
    period: {
      anual: "+ IVA · plan anual (12 meses)",
      semestral: "+ IVA · plan semestral (6 meses)",
      trimestral: "+ IVA · plan trimestral (3 meses)",
    },
    monthlyEquivalent: {
      anual: "$7.499 / mes",
      semestral: "$8.332 / mes",
      trimestral: "$9.997 / mes",
    },
    description: "Todo el plan Básico + APU + Catálogo + Base de Materiales.",
    features: [
      "Todo del plan Básico",
      "Más de 300 partidas y APUs",
      "Base de materiales y soluciones constructivas",
      "APU — Análisis de Precios Unitarios",
      "Lista de compras por obra",
      "🎁 Regalos: Manual Vol. I y II + 14 Checklists + 11 Actas de Obra (+$95.000)",
    ],
    cta: "Solicitar",
    badge: null,
    highlight: "orange",
  },
  {
    name: "Pro",
    price: {
      anual: "$129.990",
      semestral: "$74.990",
      trimestral: "$44.990",
    },
    period: {
      anual: "+ IVA · plan anual (12 meses)",
      semestral: "+ IVA · plan semestral (6 meses)",
      trimestral: "+ IVA · plan trimestral (3 meses)",
    },
    monthlyEquivalent: {
      anual: "$10.833 / mes",
      semestral: "$12.498 / mes",
      trimestral: "$14.997 / mes",
    },
    description: "Todo del Constructor + Cubicación + Gantt MS Project + Documentos de Obra.",
    features: [
      "Todo del plan Constructor",
      "Cubicación inteligente",
      "Carta Gantt + exportación MS Project (XML)",
      "Informe de Obra con fotos y detalle técnico",
      "Calendario laboral + Estados de Pago",
      "🎁 Todo lo del Constructor + Calculadora Excel, App ECP Medidas y Curso de Excel (+$233.000)",
    ],
    cta: "Solicitar",
    badge: "popular",
    highlight: "orange",
    emphasis: true,
  },
  {
    name: "Plus",
    price: {
      anual: "$179.990",
      semestral: "$99.990",
      trimestral: "$54.990",
    },
    period: {
      anual: "+ IVA · plan anual (12 meses)",
      semestral: "+ IVA · plan semestral (6 meses)",
      trimestral: "+ IVA · plan trimestral (3 meses)",
    },
    monthlyEquivalent: {
      anual: "$14.999 / mes",
      semestral: "$16.665 / mes",
      trimestral: "$18.330 / mes",
    },
    description: "Todo incluido + Herramientas para Licitaciones Mercado Público.",
    features: [
      "Todo del plan Pro",
      "Herramientas de apoyo Mercado Público",
      "Análisis de conveniencia con APU",
      "Organizar antecedentes de oferta",
      "🎁 Pack completo +$380.000: suma Megapack y Biblioteca Normativa (exclusivos Plus)",
      "Soporte técnico prioritario",
    ],
    cta: "Solicitar",
    badge: null,
    highlight: "orange",
  },
  {
    name: "Pro Cloud",
    price: "$24.990",
    period: "/ mes · suscripción mensual · cancela cuando quieras",
    description: "Para empresas que requieren soporte prioritario, nube y actualizaciones continuas.",
    features: [
      "Todo del plan Pro",
      "Actualización mensual de precios de materiales",
      "Soporte prioritario por WhatsApp",
      "Nuevos módulos al lanzar",
      "Capacitación inicial incluida",
    ],
    cta: "Suscribirse",
    badge: null,
    highlight: "blue",
  },
];

const COMPARISON_ROWS = [
  { feature: "Tipo de software", enlace: "Aplicación de escritorio para Windows", others: "Software PC", othersBad: false },
  { feature: "Planes y precios", enlace: "Planes anuales y opción de entrada sin mensualidad", others: "$25.000/mes mínimo", othersBad: true },
  { feature: "APU y materiales", enlace: "Más de 300 partidas y APUs incluidas", others: "Incluido", othersBad: false },
  { feature: "Licitaciones MP", enlace: "Organizar antecedentes y preparar información", others: "No incluye", othersBad: true },
  { feature: "Documentos de obra", enlace: "Contratos, cartas, informes con fotos", others: "No incluye", othersBad: true },
  { feature: "Carta Gantt y Project", enlace: "Calendario laboral + exportación XML MS Project", others: "No incluye", othersBad: true },
  { feature: "Respaldo de datos", enlace: "Sistema de respaldo y restauración de datos", others: "Básico", othersBad: false },
  { feature: "Uso sin internet", enlace: "Trabaja localmente sin conexión*", others: "Requiere conexión continua", othersBad: true },
  { feature: "Estados de Pago", enlace: "Por avance físico por partida", others: "Módulo extra", othersBad: false },
];

export default function ConstructorProPage() {
  const [period, setPeriod] = useState<BillingPeriod>("anual");
  const [showApp, setShowApp] = useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<typeof PRO_FEATURES[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#071a3a] text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950 pt-16">
      {/* 1. NAVBAR MAESTRO */}
      <ProductNavbar config={constructorProConfig} />

      {/* 2. HERO PRINCIPAL 1:1 */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden bg-gradient-to-b from-[#071a3a] via-[#091f42] to-[#071a3a]">
        {/* Glow de fondo */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Isotipo / Logo ampliado */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ecosistema/constructor-pro-logo.png"
            alt="Enlace Constructor Pro"
            className="h-24 w-24 sm:h-28 sm:w-28 mx-auto mb-6 object-contain drop-shadow-[0_0_35px_rgba(245,160,32,0.45)] hover:scale-105 transition-transform"
          />

          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-2 text-xs sm:text-sm font-semibold text-orange-400 mb-8 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Diseñado para contratistas y empresas constructoras en Chile 🇨🇱
          </div>

          {/* Título H1 */}
          <h1
            className="font-display font-extrabold leading-[1.05] mb-6 text-white"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 4.5rem)" }}
          >
            Presupuesta obras
            <br />
            como <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">profesional</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Deja el Excel. Calcula materiales automáticamente, genera contratos, analiza licitaciones y envía todo por WhatsApp — en pocos minutos.
          </p>

          {/* Botones de acción originales */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#planes"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-display font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,160,32,0.45)] active:translate-y-0"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Ver planes y precios
            </a>

            <a
              href="/downloads/enlace-constructor-pro-setup.exe"
              download
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)] active:translate-y-0"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar gratis
            </a>

            <a
              href="https://wa.me/56941278725?text=Hola,%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20Enlace%20Constructor%20Pro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-blue-800/80 bg-slate-900/60 px-7 py-4 font-semibold text-slate-200 transition-all hover:border-orange-500/50 hover:bg-slate-900/90 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>

          {/* Métricas en horizontal para desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 justify-center mt-16 pt-10 border-t border-blue-900/40">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-orange-400">{s.num}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VS EXCEL 1:1 CON CONCEPTO VISUAL COMPLETO */}
      <section id="vs-excel" className="py-24 px-6 border-t border-blue-900/60 bg-[#071630]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">Por qué cambiar</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
              Enlace Constructor Pro <span className="text-orange-500">vs</span> tu Excel
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
            {/* Tarjeta Excel o cuaderno */}
            <div className="bg-[#091d3d] border border-blue-900/60 rounded-3xl p-7 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-blue-900/60">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800/80 text-slate-400">
                    <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <rect x="8" y="12" width="8" height="6" rx="1" />
                    </svg>
                  </div>
                  <span className="font-display font-bold text-slate-400 text-lg">Excel o cuaderno</span>
                </div>
                <ul className="space-y-3.5">
                  {VS_EXCEL_ROWS.map((row, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-red-950/40 text-red-400 border border-red-800/40 shrink-0 mt-0.5">
                        <svg className="h-3 w-3 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                      <span className="text-slate-400 leading-relaxed">{row.excel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Círculo central VS */}
            <div className="hidden md:flex items-center justify-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 font-display font-extrabold text-slate-950 text-base shadow-[0_0_25px_rgba(245,160,32,0.5)]">
                VS
              </div>
            </div>

            {/* Tarjeta Enlace Constructor Pro */}
            <div className="relative bg-[#0d2550] border-2 border-orange-500/50 rounded-3xl p-7 shadow-[0_0_35px_rgba(245,160,32,0.2)] flex flex-col justify-between">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-t-3xl" />
              <div>
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-blue-900/60">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500/20 text-orange-400">
                    <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <span className="font-display font-bold text-orange-400 text-lg">Enlace Constructor Pro</span>
                </div>
                <ul className="space-y-3.5">
                  {VS_EXCEL_ROWS.map((row, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 shrink-0 mt-0.5">
                        <svg className="h-3 w-3 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-slate-100 font-medium leading-relaxed">{row.enlace}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto">
            * Trabaja localmente sin conexión para presupuestar y gestionar tus proyectos. Algunas integraciones, activaciones y servicios externos pueden requerir internet.
          </p>
        </div>
      </section>

      {/* 3.5 NOVEDAD ECOSISTEMA: ECP MEDIDAS DE TERRENO (LA APP MÓVIL HERMANA) */}
      <section id="app-terreno" className="relative py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071630] via-[#091f42] to-[#071a3a] overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute top-1/2 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Herramienta Hermana Oficial · Ecosistema Móvil ECP
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight text-white">
              ECP Medidas de Terreno:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Tu celular en la obra conectado a tu PC
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Mide en terreno con tu teléfono (Android o iPhone), calcula áreas irregulares complejas con triangulación dinámica y exporta un archivo JSON para que tu presupuesto en la computadora se arme solo.
            </p>
          </div>

          {/* Sinergia Visual: Terreno ➡️ Puente JSON ➡️ Oficina */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-14">
            {/* Paso 1: Celular en Terreno */}
            <div className="lg:col-span-5 rounded-3xl bg-[#0c2144]/90 border border-cyan-500/30 p-7 shadow-xl flex flex-col justify-between hover:border-cyan-400/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                    PASO 1 · EN TERRENO
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  ECP Medidas en tu Celular
                </h3>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  Realiza el levantamiento inicial de la visita técnica sin internet ni libretas que se pierdan o mojen:
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>
                    <span><strong>Calculadora de Terreno Irregular:</strong> Triangulación dinámica (Fórmula de Herón) para calcular metros cuadrados de terrenos de 4, 5 o más lados desiguales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>
                    <span><strong>Estructura por Partidas:</strong> Registra cubicaciones en m², m³, ml y unidades organizadas por capítulos de obra.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>
                    <span><strong>Respaldo Fotográfico:</strong> Adjunta fotos de terreno directo a cada partida para memoria de cálculo.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-900/60">
                <div className="text-xs text-cyan-300 font-semibold flex items-center gap-1.5">
                  <span>⚡ Exportación en 1 clic:</span>
                  <span className="bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-200">PDF con fotos</span>
                  <span className="bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-200">CSV</span>
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">JSON Maestro</span>
                </div>
              </div>
            </div>

            {/* Puente Mágico Conector */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
              <div className="hidden lg:flex flex-col items-center gap-3">
                <div className="h-16 w-0.5 bg-gradient-to-b from-cyan-500 to-orange-500" />
                <div className="h-14 w-14 rounded-full bg-[#0a1b38] border-2 border-amber-500/60 flex items-center justify-center text-xl shadow-[0_0_25px_rgba(245,160,32,0.4)] animate-bounce">
                  ⚡
                </div>
                <div className="text-center">
                  <div className="text-xs font-black tracking-wider uppercase text-amber-400">Sincronización</div>
                  <div className="text-[10px] text-slate-400 font-mono">Archivo JSON</div>
                </div>
                <div className="h-16 w-0.5 bg-gradient-to-b from-orange-500 to-cyan-500" />
              </div>
              <div className="lg:hidden flex items-center gap-3 my-2">
                <span className="h-0.5 w-12 bg-cyan-500" />
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/40">
                  ⚡ Sincronización Automática JSON
                </span>
                <span className="h-0.5 w-12 bg-orange-500" />
              </div>
            </div>

            {/* Paso 2: Computadora en Oficina */}
            <div className="lg:col-span-5 rounded-3xl bg-[#0c2144]/90 border border-orange-500/30 p-7 shadow-xl flex flex-col justify-between hover:border-orange-400/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-950/80 text-orange-300 border border-orange-700/50">
                    PASO 2 · EN OFICINA / PC
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Enlace Constructor Pro en PC
                </h3>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  Importa el archivo de la visita y genera el presupuesto comercial definitivo con respaldo exacto:
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold shrink-0">✓</span>
                    <span><strong>Importación Inmediata:</strong> Abres tu software en Windows, cargas el JSON y todas las partidas y cubicaciones quedan volcadas en pantalla.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold shrink-0">✓</span>
                    <span><strong>APU y Costos Reales:</strong> Aplica precios unitarios a cada partida, calcula materiales, mano de obra, leyes sociales y margen neto.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold shrink-0">✓</span>
                    <span><strong>Cierre y Envío:</strong> Exporta tu presupuesto en PDF con logo corporativo y envíalo al cliente por WhatsApp en menos de 3 minutos.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-orange-900/60">
                <div className="text-xs text-orange-300 font-semibold">
                  🎯 Slogan: <em>"Del terreno a tu presupuesto en un solo clic, sin pasar en limpio libretas de papel."</em>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Acceso Web + Código QR */}
          <div className="rounded-3xl p-8 bg-gradient-to-r from-[#0d2246] via-[#112d5e] to-[#0d2246] border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-500/30">
                100% Web App · Android & iPhone · Sin Instaladores Pesados
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Pruébala gratis ahora mismo en tu celular
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                No necesitas descargar archivos de tiendas ni registrarte. Abre el enlace directo o apunta con la cámara de tu teléfono al código QR para usar la calculadora de terreno en tu próxima visita técnica.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://medidas.redenlace.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>📲</span> Abrir App Móvil de Terreno
                </a>
                <span className="text-xs text-emerald-400 font-medium">
                  🎁 Incluida gratis desde el plan Pro
                </span>
              </div>
            </div>

            {/* Celular interactivo: carga la app real al tocar */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative w-[230px] h-[470px] rounded-[2.6rem] bg-slate-950 border-[6px] border-slate-700 shadow-[0_20px_60px_rgba(6,182,212,0.25)] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-slate-900 z-20" />
                {showApp ? (
                  <div className="relative w-full h-full bg-slate-900">
                    <iframe
                      src="https://medidas.redenlace.cl"
                      title="ECP Medidas de Terreno - demo en vivo"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full bg-white"
                    />
                    {/* Barra de control inferior: Pantalla completa y Salir */}
                    <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-between gap-1 z-30 bg-slate-950/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-cyan-500/40 text-[10px]">
                      <a
                        href="https://medidas.redenlace.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200 font-bold flex items-center gap-1"
                      >
                        <span>↗</span> Pantalla completa
                      </a>
                      <button
                        type="button"
                        onClick={() => setShowApp(false)}
                        className="text-slate-400 hover:text-white font-bold cursor-pointer px-1"
                        title="Volver"
                      >
                        ✕ Salir
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowApp(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center bg-gradient-to-b from-[#0a2a55] via-[#0c3b73] to-[#071a3a] hover:from-[#0d3366] transition-colors cursor-pointer group"
                    aria-label="Probar la app ECP Medidas aquí"
                  >
                    <span className="text-5xl group-hover:scale-110 transition-transform">📐</span>
                    <span className="text-white font-extrabold text-base leading-tight">ECP Medidas de Terreno</span>
                    <span className="text-[11px] text-cyan-200">Calculadora Herón · Partidas · Fotos · Exportar JSON</span>
                    <span className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-xs font-black animate-pulse">
                      ▶ Toca para probarla
                    </span>
                  </button>
                )}
              </div>
              <span className="text-[11px] text-slate-400 mt-3 flex items-center gap-1">
                <span>⚡</span> Demo en vivo · Funciona igual en Android e iPhone
              </span>
            </div>

            <div className="shrink-0 flex flex-col items-center bg-[#071630] p-4 rounded-2xl border border-cyan-500/40 shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ecosistema/qr-ecp-medidas.png"
                alt="QR ECP Medidas de Terreno"
                className="w-32 h-32 rounded-xl bg-white p-1.5 shadow-md"
              />
              <span className="text-[11px] font-bold text-cyan-300 mt-2 text-center">
                Escanea con tu celular 📱
              </span>
              <span className="text-[10px] text-slate-400">
                medidas.redenlace.cl
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGALOS DE BIENVENIDA (CP BONUS PACK) 1:1 RECUPERADO */}
      <section id="regalos" className="py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071a3a] via-[#0a1e42] to-[#071a3a]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              Regalos de Bienvenida Exclusivos
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight text-white">
              Al adquirir ECP, te llevas hasta{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                +$380.000 CLP en Regalos
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Queremos que tengas la mejor experiencia. Dependiendo del plan que contrates, te llevarás gratis partes o la totalidad de nuestro <strong>Pack Digital Maestro</strong>, incluyendo la App Móvil ECP Medidas, cursos y megapacks de ingeniería.
            </p>
          </div>

          {/* Grid de Tarjetas (9 Bonus + 1 Resumen) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BONUSES.map((bonus, idx) => (
              <div
                key={idx}
                className="relative bg-[#0d2550] border border-blue-900/60 hover:border-orange-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-slate-200 border border-slate-700">
                      <span className="text-orange-400">✨</span>
                      {bonus.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="h-10 w-10 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                      {bonus.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg leading-snug text-white">
                      {bonus.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-900/60 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-bold text-emerald-400">
                      <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                      {bonus.includedIn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Valor por separado:</span>
                    <span className="font-bold text-white">{bonus.value}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Banner Resumen Total Horizontal (Ocupa toda la fila) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 relative bg-gradient-to-r from-[#0d2550] via-[#102c5c] to-[#0d2550] border-2 border-orange-500/50 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(245,160,32,0.25)] overflow-hidden">
              {/* Glow decorativo de fondo */}
              <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 transform -translate-x-12 translate-y-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <div className="max-w-2xl text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 mb-4 shadow-sm">
                    <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                    </svg>
                    Batería Completa de Bonos · Pack total exclusivo del Plan Plus
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-3 text-white">
                    Resumen de Bonos Incluidos
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    Recibes todos los manuales maestros, guías, checklists, actas legales, la calculadora de costos Excel, la <strong>App Móvil ECP Medidas de Terreno</strong>, el curso completo de Excel y los megapacks de obras civiles directamente en tu correo y WhatsApp sin costo adicional según tu plan.
                  </p>

                  {/* Escalera de regalos por plan */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { plan: "Básico", gift: "Manual Vol. I", total: "$25.000", highlight: false },
                      { plan: "Constructor", gift: "+ Manual II, Checklists y Actas", total: "$95.000", highlight: false },
                      { plan: "Pro", gift: "+ Excel, App Móvil y Curso", total: "$233.000", highlight: false },
                      { plan: "Plus", gift: "+ Megapack y Biblioteca: TODO", total: "$380.000", highlight: true },
                    ].map((step) => (
                      <div
                        key={step.plan}
                        className={`rounded-xl px-3 py-2.5 border text-left ${
                          step.highlight
                            ? "bg-gradient-to-br from-amber-500/25 to-orange-500/15 border-orange-400/70 shadow-[0_0_18px_rgba(245,160,32,0.3)]"
                            : "bg-blue-950/80 border-blue-800/60"
                        }`}
                      >
                        <div className={`text-[11px] font-black uppercase tracking-wider ${step.highlight ? "text-orange-300" : "text-slate-400"}`}>
                          Plan {step.plan}
                        </div>
                        <div className="text-xs text-slate-200 leading-snug my-1">{step.gift}</div>
                        <div className={`text-sm font-black ${step.highlight ? "text-amber-300" : "text-white"}`}>
                          {step.total} <span className="text-[10px] font-semibold text-emerald-400">gratis</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto p-6 sm:p-8 rounded-3xl bg-[#071630]/95 border border-orange-500/40 text-center shadow-2xl flex flex-col items-center justify-center min-w-[260px]">
                  <div className="text-xs text-slate-400 uppercase font-black tracking-widest mb-1.5">
                    Valor Total de los Bonos
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-400 line-through opacity-65 mb-1">
                    +$380.000 CLP
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 tracking-tight">
                    ¡GRATIS!
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                    <span>✨</span> Sin costos ocultos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nota al pie */}
          <div className="max-w-2xl mx-auto text-center p-4 rounded-2xl bg-blue-950/40 border border-blue-900/60 text-xs text-slate-300">
            💡 <strong>¿Cómo recibo mis regalos o compras?</strong> Una vez contratado tu plan de ECP o adquirido un producto individual, nuestro equipo te enviará los accesos y enlaces de descarga a tu correo electrónico.
          </div>
        </div>
      </section>

      {/* 5. MÓDULOS DEL ECOSISTEMA CON CARRUSEL INTERACTIVO / CARTAS DESPLAZABLES */}
      <section id="funciones" className="py-16 sm:py-20 border-t border-blue-900/60 bg-[#071630] relative overflow-hidden">
        {/* Glows decorativos */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                10 Módulos Integrados · Suite Completa
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
                Todo lo que necesitas en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  una sola herramienta
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
                Desde el levantamiento con celular en terreno hasta el presupuesto maestro y firma de contratos en PC.
              </p>
            </div>

            {/* Controles interactivos: Pausar/Reanudar */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsMarqueePaused(!isMarqueePaused)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#091f42] border border-blue-800/70 hover:border-orange-500/60 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
                title={isMarqueePaused ? "Reanudar desplazamiento" : "Pausar desplazamiento"}
              >
                <span>{isMarqueePaused ? "▶️" : "⏸️"}</span>
                <span>{isMarqueePaused ? "Reanudar movimiento" : "Pausar movimiento"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* CONTENEDOR DEL CARRUSEL / MARQUEE DE CARTAS COMPACTAS */}
        <div className="relative w-full overflow-hidden pause-on-hover py-2">
          {/* Fades degradados en los bordes para sensación infinita */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#071630] via-[#071630]/90 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#071630] via-[#071630]/90 to-transparent z-20" />

          {/* FILA 1: Se desplaza hacia la izquierda */}
          <div
            className="animate-marquee-left flex gap-4 mb-4"
            style={{ animationPlayState: isMarqueePaused ? "paused" : undefined }}
          >
            {[...PRO_FEATURES.slice(0, 5), ...PRO_FEATURES.slice(0, 5)].map((f, idx) => (
              <div
                key={`row1-${f.id}-${idx}`}
                onClick={() => setSelectedFeature(f)}
                className="w-[290px] sm:w-[330px] shrink-0 p-4 rounded-2xl bg-gradient-to-br from-[#0a1e3f]/95 to-[#071630] border border-blue-800/60 hover:border-orange-500/80 hover:bg-[#0e2752] hover:shadow-[0_0_22px_rgba(245,160,32,0.25)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-500/15 text-lg group-hover:scale-110 group-hover:bg-orange-500/25 transition-all">
                        {f.icon}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">
                        {f.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-slate-300">
                      #{f.id}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-orange-300 transition-colors mb-1 line-clamp-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {f.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-blue-900/50 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Incluido en ECP
                  </span>
                  <span className="text-slate-400 group-hover:text-orange-400 transition-colors text-[10px] font-medium flex items-center gap-1">
                    Ver más <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* FILA 2: Se desplaza hacia la derecha */}
          <div
            className="animate-marquee-right flex gap-4"
            style={{ animationPlayState: isMarqueePaused ? "paused" : undefined }}
          >
            {[...PRO_FEATURES.slice(5, 10), ...PRO_FEATURES.slice(5, 10)].map((f, idx) => (
              <div
                key={`row2-${f.id}-${idx}`}
                onClick={() => setSelectedFeature(f)}
                className="w-[290px] sm:w-[330px] shrink-0 p-4 rounded-2xl bg-gradient-to-br from-[#0a1e3f]/95 to-[#071630] border border-blue-800/60 hover:border-orange-500/80 hover:bg-[#0e2752] hover:shadow-[0_0_22px_rgba(245,160,32,0.25)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-500/15 text-lg group-hover:scale-110 group-hover:bg-orange-500/25 transition-all">
                        {f.icon}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">
                        {f.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-slate-300">
                      #{f.id}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-orange-300 transition-colors mb-1 line-clamp-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {f.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-blue-900/50 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Incluido en ECP
                  </span>
                  <span className="text-slate-400 group-hover:text-orange-400 transition-colors text-[10px] font-medium flex items-center gap-1">
                    Ver más <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PIE CON INDICACIÓN INTERACTIVA */}
        <div className="max-w-6xl mx-auto px-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <span>💡</span>
            <span>Posa el cursor o mantén presionado para pausar las cartas. Haz clic para ver el detalle en profundidad.</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-ping" />
            <span>Todos los módulos activos desde el primer día</span>
          </div>
        </div>

        {/* MODAL DETALLE INTERACTIVO DE MÓDULO */}
        {selectedFeature && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedFeature(null)}
          >
            <div
              className="relative w-full max-w-lg p-6 sm:p-7 rounded-3xl bg-[#091f42] border-2 border-orange-500/50 shadow-[0_0_60px_rgba(245,160,32,0.35)] text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-950/90 border border-blue-800 text-slate-400 hover:text-white flex items-center justify-center text-base font-bold transition-colors cursor-pointer"
                title="Cerrar"
              >
                ✕
              </button>
              <div className="flex items-center gap-3.5 mb-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-500/20 text-3xl border border-orange-500/40 shrink-0">
                  {selectedFeature.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/25">
                      {selectedFeature.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">#{selectedFeature.id}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{selectedFeature.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                {selectedFeature.description}
              </p>

              <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-800/80 mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-300 mb-1 flex items-center gap-1.5">
                  <span>⚡</span> ¿Cómo te ayuda en la práctica?
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedFeature.detail}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-blue-900/60">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Módulo 100% Nativo en ECP
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-md cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. PLANES Y PRECIOS 1:1 CON SELECTOR INTERACTIVO (ANUAL / SEMESTRAL / TRIMESTRAL) */}
      <section id="planes" className="py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071a3a] via-[#091f42] to-[#071a3a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">Precios y planes</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              Elige tu plan
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Planes adaptables a tu flujo de caja. <strong className="text-white">Ahorra más eligiendo el plan anual.</strong>
            </p>
          </div>

          {/* BANNER / TARJETA TRIPWIRE: KIT DIGITAL ($14.990 CLP) */}
          <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0d2246] via-[#102c5c] to-[#0d2246] border-2 border-amber-500/40 shadow-[0_0_40px_rgba(245,160,32,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-500/30">
                  ⚡ Oferta de Entrada · Ideal para Celular y Tablet
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Kit Digital del Constructor Profesional
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  ¿Aún no necesitas el software para Windows o prefieres empezar con las guías y planillas maestras? Llévate los 2 Manuales ECP (147 págs), 14 Checklists de Terreno, 11 Actas de Obra, la Calculadora de Costos Excel con APU y el Curso de Excel por un único pago.
                </p>
                <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs sm:text-sm text-amber-300 flex items-center gap-2">
                  <span className="text-lg">🎁</span>
                  <span><strong>GARANTÍA DE ABONO AL 100%:</strong> Tus $14.990 quedan abonados a tu favor si decides activar el Software Enlace Constructor Pro para PC en cualquier momento.</span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center sm:items-end text-center sm:text-right">
                <div className="text-xs text-slate-400 line-through mb-1">Precio regular: $45.000 CLP</div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  $14.990 <span className="text-xs sm:text-sm font-normal text-slate-300">CLP · Pago único</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mb-4">Sin suscripción · Entrega inmediata</div>
                <a
                  href="https://wa.me/56941278725?text=Hola%20John,%20quiero%20comprar%20el%20Kit%20Digital%20del%20Constructor%20Profesional%20por%20$14.990%20CLP%20con%20transferencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>📲</span> Comprar Kit por WhatsApp ($14.990)
                </a>
              </div>
            </div>
          </div>

          {/* Selector de facturación 3 modos */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#071630] p-1.5 rounded-full inline-flex items-center gap-1 border border-blue-900/60 shadow-inner">
              <button
                type="button"
                onClick={() => setPeriod("anual")}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  period === "anual"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Anual <span className="hidden sm:inline">(Ahorra +)</span>
              </button>
              <button
                type="button"
                onClick={() => setPeriod("semestral")}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  period === "semestral"
                    ? "bg-[#0d2550] text-white shadow-md border border-blue-700/60"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Semestral
              </button>
              <button
                type="button"
                onClick={() => setPeriod("trimestral")}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  period === "trimestral"
                    ? "bg-[#0d2550] text-white shadow-md border border-blue-700/60"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Trimestral
              </button>
            </div>
          </div>

          {/* Grid de 6 Planes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => {
              const isPopular = plan.badge === "popular";
              const isGift = plan.badge === "gift";

              const displayPrice =
                typeof plan.price === "string" ? plan.price : (plan.price as PlanPrices)[period];
              const displayPeriod =
                typeof plan.period === "string" ? plan.period : (plan.period as PlanPrices)[period];
              const monthlyEq = plan.monthlyEquivalent ? plan.monthlyEquivalent[period] : null;

              const priceColor =
                plan.highlight === "green"
                  ? "text-emerald-400"
                  : plan.highlight === "blue"
                  ? "text-sky-400"
                  : "text-orange-400";

              const ctaClass =
                plan.highlight === "green"
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/30"
                  : plan.highlight === "blue"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-950/30"
                  : isPopular
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold hover:shadow-[0_0_25px_rgba(245,160,32,0.4)]"
                  : "border border-blue-800/80 bg-slate-900/60 text-slate-100 hover:border-orange-500/50 hover:bg-slate-900/90";

              return (
                <div
                  key={plan.name}
                  className={`relative bg-[#0d2550] rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    plan.emphasis
                      ? "border-2 border-orange-500 shadow-[0_0_35px_rgba(245,160,32,0.25)] lg:scale-[1.03] lg:-mt-2"
                      : "border border-blue-900/60 hover:border-blue-500/40"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full whitespace-nowrap shadow-md ${
                          isPopular
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950"
                            : "bg-emerald-600 text-white"
                        }`}
                      >
                        {isPopular ? "🔥 Más popular" : "🎁 Red Enlace"}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-display font-bold text-xl mb-2 text-white">{plan.name}</h3>
                    <div className={`font-display font-extrabold text-4xl mb-1 ${priceColor}`}>
                      {displayPrice}
                    </div>
                    <div className="text-xs text-slate-400 mb-2">{displayPeriod}</div>

                    {monthlyEq && (
                      <div className="text-xs font-semibold text-emerald-400 mb-3">
                        Equivale a {monthlyEq}
                      </div>
                    )}

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 min-h-[44px]">
                      {plan.description}
                    </p>

                    <ul className="space-y-2.5 mb-7">
                      {plan.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                          <span className="text-orange-400 font-bold shrink-0 mt-0.5">✓</span>
                          <span className="text-slate-200">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/56941278725?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20plan%20${encodeURIComponent(
                        plan.name
                      )}%20de%20Enlace%20Constructor%20Pro`}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all w-full text-center ${ctaClass}`}
                    >
                      {plan.cta}
                      <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>

                    {plan.note && (
                      <p className="text-[11px] text-emerald-400 mt-3 text-center">{plan.note}</p>
                    )}
                    {isGift && (
                      <p className="text-[11px] text-slate-400 mt-1 text-center">
                        {plan.subnote || "o pago único $19.990 + IVA"}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 7. OFERTA ESPECIAL DE LANZAMIENTO */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/15 via-blue-900/20 to-blue-950/40 border border-orange-500/30 p-8 text-center shadow-[0_0_35px_rgba(245,160,32,0.15)]">
              <div className="relative">
                <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-orange-500/20 text-orange-400 mb-4 text-2xl">
                  ✨
                </div>
                <h4 className="font-display font-extrabold text-2xl mb-3 text-white">
                  Oferta Especial de Lanzamiento
                </h4>
                <p className="text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto">
                  ¿Necesitas un impulso inicial? Déjanos tus datos o contáctanos por WhatsApp y obtén{" "}
                  <strong className="text-orange-400">hasta un 20% de descuento adicional</strong> en tu primer plan.
                </p>
                <a
                  href="https://wa.me/56941278725?text=Hola,%20me%20interesa%20la%20oferta%20de%20lanzamiento%20de%20Enlace%20Constructor%20Pro%20con%20hasta%20un%2020%25%20de%20descuento."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-slate-950 transition-all hover:shadow-[0_0_25px_rgba(245,160,32,0.45)]"
                >
                  Contactar por WhatsApp
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 8. BANNER COMUNIDAD RED SOCIAL ENLACE */}
          <div className="mt-6 max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-[#071630] border border-blue-900/60 p-8 text-center">
              <div className="relative">
                <h4 className="font-display font-extrabold text-xl mb-2 text-white">
                  ¿Eres parte de la Red Social Enlace?
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-lg mx-auto">
                  El plan Starter tiene un valor real de $19.990. Como miembro de la comunidad, puedes obtenerlo{" "}
                  <strong className="text-white">completamente gratis</strong> con tu código.
                </p>
                <a
                  href="https://wa.me/56941278725?text=Hola,%20soy%20miembro%20de%20la%20Red%20Social%20Enlace%20y%20quiero%20solicitar%20mi%20c%C3%B3digo%20para%20obtener%20el%20plan%20Starter%20de%20Enlace%20Constructor%20Pro"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0d2550] border border-blue-800/80 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:bg-[#112f66] hover:text-white"
                >
                  Solicitar mi código
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMPARACIÓN CON OTROS SOFTWARES 1:1 CON BLOQUE "¿POR QUÉ ENLACE?" */}
      <section id="comparativa" className="py-24 px-6 border-t border-blue-900/60 bg-[#071630]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">Comparación directa</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-white">
              Enlace Constructor Pro <span className="text-orange-500">vs</span> Plataformas alternativas
            </h2>
            <p className="text-slate-300">
              Software chileno para presupuestos y gestión de obras — comparación honesta
            </p>
          </div>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-start">
            {/* Tabla Comparativa */}
            <div className="bg-[#091f42] border border-blue-900/60 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#0b234d] border-b border-blue-900/60">
                    <tr>
                      <th className="text-left font-display font-bold py-4 px-5 text-white">Característica</th>
                      <th className="text-left font-display font-bold py-4 px-5 text-orange-400">Enlace Pro</th>
                      <th className="text-left font-display font-bold py-4 px-5 text-slate-400">Otras</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-blue-900/40 last:border-0 ${
                          i % 2 === 1 ? "bg-[#071936]/40" : ""
                        }`}
                      >
                        <td className="py-3.5 px-5 font-medium text-slate-200">{row.feature}</td>
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold shrink-0">✓</span>
                            <span className="text-slate-100 font-medium">{row.enlace}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-2">
                            {row.othersBad ? (
                              <span className="text-red-400 font-bold shrink-0">✕</span>
                            ) : (
                              <span className="w-4 shrink-0" />
                            )}
                            <span className="text-slate-400">{row.others}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bloque Complementario "¿Por qué Enlace?" */}
            <div className="bg-[#0d2550] border border-orange-500/30 rounded-3xl p-7 lg:sticky lg:top-24 shadow-lg">
              <h3 className="font-display font-bold text-xl mb-4 text-white">¿Por qué Enlace?</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Plataformas alternativas son para jefes de presupuesto de empresas grandes.{" "}
                <strong className="text-white">
                  Enlace Constructor Pro fue diseñado para el contratista independiente y la empresa constructora en Chile
                </strong>{" "}
                — aplicación de escritorio para Windows, trabaja localmente con el flujo real del trabajo en obra chileno.
              </p>
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 font-semibold text-slate-950 transition-all hover:shadow-[0_0_20px_rgba(245,160,32,0.4)] w-full"
              >
                Ver todos los planes
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REQUISITOS DEL SISTEMA */}
      <section id="requisitos" className="py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071a3a] via-[#091f42] to-[#071a3a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">Compatibilidad</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-white">
              Requisitos del Sistema para Windows
            </h2>
            <p className="text-slate-300">
              Enlace Constructor Pro es una aplicación de escritorio nativa para Windows de 64 bits (x64) diseñada para máxima velocidad y privacidad de tus datos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 shadow-lg">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-bold text-white text-base font-display mb-2">
                1. Sistema Operativo
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Windows de 64 bits (Windows 10 / Windows 11 recomendado). Arquitectura de procesador x64 con permisos para instalar software de escritorio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 shadow-lg">
              <div className="text-3xl mb-3">💾</div>
              <h4 className="font-bold text-white text-base font-display mb-2">
                2. Almacenamiento Local
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Espacio libre suficiente en disco duro para la instalación y generación de respaldos locales seguros sin límites arbitrarios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 shadow-lg">
              <div className="text-3xl mb-3">📶</div>
              <h4 className="font-bold text-white text-base font-display mb-2">
                3. Conexión a Internet
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No requiere conexión permanente. Trabaja 100% offline. Solo se requiere internet para descarga inicial, activación y servicios opcionales en nube.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 shadow-lg">
              <div className="text-3xl mb-3">📑</div>
              <h4 className="font-bold text-white text-base font-display mb-2">
                4. Software Complementario
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lector de PDF (Adobe Acrobat, Edge o Chrome), Microsoft Excel para abrir planillas XLSX y MS Project para cronogramas XML.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#071630] border border-blue-900/60 text-xs">
            <span className="text-slate-300">
              💡 <strong>Respaldo de Seguridad:</strong> El usuario es responsable de conservar copias de respaldo en ubicaciones seguras. Revisa toda la documentación legal y técnica.
            </span>
            <Link
              href="/constructor-pro/legal/terminos"
              className="text-orange-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              Ver Términos y Especificaciones Técnicas →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL 1:1 RECUPERADO CON 4 BOTONES Y CONTACTO */}
      <section id="descarga" className="relative py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071630] via-[#091f42] to-[#071a3a] overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-orange-500/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            className="font-display font-extrabold leading-[1.05] mb-5 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
          >
            Deja de perder tiempo
            <br />
            en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Excel</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
            Crea tu primer presupuesto profesional en pocos minutos con tus herramientas de obra.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <a
              href="/downloads/enlace-constructor-pro-setup.exe"
              download
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)]"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar instalador (Windows)
            </a>

            <a
              href="mailto:info@redenlace.cl?subject=Quiero%20solicitar%20mi%20licencia%20Enlace%20Constructor%20Pro"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-display font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,160,32,0.45)]"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Solicitar por email
            </a>

            <a
              href="https://wa.me/56941278725?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Enlace%20Constructor%20Pro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-blue-800/80 bg-slate-900/60 px-7 py-4 font-semibold text-slate-200 transition-all hover:border-emerald-500/50 hover:bg-slate-900/90 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp directo
            </a>

            <a
              href="#requisitos"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-blue-800/80 bg-slate-900/60 px-6 py-4 font-semibold text-slate-300 transition-all hover:border-orange-500/50 hover:text-white"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2 text-orange-400" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
              Requisitos del sistema
            </a>
          </div>

          <p className="text-xs text-slate-400">
            La Serena / Coquimbo, Chile · +56 9 4127 8725 · info@redenlace.cl
          </p>
        </div>
      </section>

      {/* 12. FOOTER MAESTRO */}
      <ProductFooter config={constructorProConfig} />

      {/* 13. BOTÓN FLOTANTE FIJO DE WHATSAPP CON NOTIFICACIÓN ACTIVA */}
      <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Tooltip / Globo de texto persuasivo */}
        <a
          href="https://wa.me/56941278725?text=Hola%20John,%20estoy%20viendo%20la%20p%C3%A1gina%20de%20Enlace%20Constructor%20Pro%20y%20tengo%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#091f42]/95 border border-emerald-500/40 text-xs text-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md hover:border-emerald-400 hover:text-white transition-all transform hover:-translate-x-1"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-medium">
            ¿Dudas con los planes? <strong className="text-emerald-400 font-bold group-hover:underline">Escríbenos en vivo</strong>
          </span>
        </a>

        {/* Botón Circular con Ícono de WhatsApp */}
        <a
          href="https://wa.me/56941278725?text=Hola%20John,%20estoy%20viendo%20la%20p%C3%A1gina%20de%20Enlace%20Constructor%20Pro%20y%20tengo%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp a Enlace Constructor Pro"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 text-[9px] font-black text-slate-950 items-center justify-center">
              1
            </span>
          </span>
          <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </aside>
    </main>
  );
}
