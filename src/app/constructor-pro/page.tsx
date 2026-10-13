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
    includedIn: "Gratis en planes Pro y Plus",
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
    includedIn: "Gratis en planes Pro y Plus",
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
    includedIn: "Gratis en planes Pro y Plus",
    description: "Planilla en Excel automatizada para calcular precios unitarios, margen real de venta y desgloses de forma ágil.",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <rect x="8" y="12" width="8" height="6" rx="1" />
      </svg>
    ),
  },
];

const PRO_FEATURES = [
  {
    icon: "📋",
    title: "Presupuestos profesionales",
    description: "Catálogo de partidas, IVA y UF automáticos, múltiples plantillas PDF. Capítulos, numeración jerárquica y envío por WhatsApp con PDF adjunto.",
  },
  {
    icon: "⚙️",
    title: "APU — Precios Unitarios",
    description: "Costo real por partida: materiales, mano de obra, GG y utilidad. Más de 300 partidas, APU, soluciones constructivas y plantillas rápidas validadas.",
  },
  {
    icon: "📏",
    title: "Cubicación inteligente",
    description: "Ingresa dimensiones, obtén materiales calculados al instante. Optimizador de cortes de planchas incluido.",
  },
  {
    icon: "⚖️",
    title: "Licitaciones Mercado Público",
    description: "Herramientas de apoyo para organizar antecedentes, analizar oportunidades y preparar información de apoyo para una oferta.",
  },
  {
    icon: "📁",
    title: "Documentos de Obra",
    description: "Carta de presentación, contrato con cláusulas e informe de obra con fotos y detalle técnico por partida en PDF profesional.",
  },
  {
    icon: "💳",
    title: "Pagos y Estados de Avance",
    description: "Registra cobros, genera estados de pago por avance físico de cada partida y acta de recepción.",
  },
  {
    icon: "📊",
    title: "Carta Gantt con MS Project",
    description: "Carta Gantt con tareas, capítulos, dependencias, calendario laboral, días no laborales configurables y exportación XML compatible con Microsoft Project.",
  },
  {
    icon: "💾",
    title: "Agilidad y Guardado Continuo",
    description: "Guardado en vivo sin salir de la pantalla, borradores sin cliente obligatorio, función deshacer/rehacer y edición ágil.",
  },
  {
    icon: "🗄️",
    title: "Respaldo y Restauración",
    description: "Sistema de respaldo y restauración de datos local para proteger siempre tu información técnica y presupuestos.",
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
      "Soporte prioritario",
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
                $114.000 CLP en Regalos
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Queremos que tengas la mejor experiencia. Dependiendo del plan que contrates, te llevarás gratis partes o la totalidad de nuestro <strong>Pack Digital Completo</strong>. Además, cada ítem está disponible para compra individual.
            </p>
          </div>

          {/* Grid de 6 Tarjetas (5 Bonus + 1 Resumen) */}
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

            {/* Tarjeta Resumen Total (Pro y Plus) */}
            <div className="relative bg-gradient-to-br from-orange-500/20 via-[#0d2550] to-blue-900/30 border-2 border-orange-500/50 rounded-3xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(245,160,32,0.25)]">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 mb-4">
                  <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                  </svg>
                  Pack Completo Incluido
                </div>
                <h3 className="font-display font-extrabold text-2xl mb-2 text-white">
                  Resumen del Pack (Pro y Plus)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Recibes todos los manuales, guías, checklists y la calculadora Excel directamente en tu casilla de correo sin costo adicional al contratar un plan Pro o Plus.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#071630]/90 border border-orange-500/30 text-center">
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
                  Valor Total del Regalo
                </div>
                <div className="text-2xl font-black text-slate-400 line-through opacity-70">
                  $114.000 CLP
                </div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-1">
                  ¡GRATIS!
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

      {/* 5. FUNCIONALIDADES 1:1 CON SUS 9 MÓDULOS */}
      <section id="funciones" className="py-24 px-6 border-t border-blue-900/60 bg-[#071630]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">Módulos incluidos</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
              Todo lo que necesitas
              <br />
              en <span className="text-orange-500">una sola herramienta</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="group bg-[#091f42] border border-blue-900/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-500/15 text-2xl mb-5 transition-all group-hover:scale-110">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-white group-hover:text-orange-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
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
    </main>
  );
}
