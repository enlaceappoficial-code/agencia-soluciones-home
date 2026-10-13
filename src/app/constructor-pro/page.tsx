"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductHero from "@/components/product/ProductHero";
import ProductSection from "@/components/product/ProductSection";
import ProductCtaBanner from "@/components/product/ProductCtaBanner";
import ProductFooter from "@/components/product/ProductFooter";
import { constructorProConfig } from "@/config/products/constructor-pro";

const VS_EXCEL_ROWS = [
  { excel: "Calculas materiales a mano con fórmulas complejas", enlace: "Materiales calculados desde APU automáticamente con un clic" },
  { excel: "PDF sin formato, sin logo ni presentación formal", enlace: "PDFs profesionales con tu logo, firma técnica y colores corporativos" },
  { excel: "Sin análisis de precios unitarios estructurados", enlace: "Más de 300 partidas con análisis de precios unitarios validados" },
  { excel: "No genera contratos ni cartas formales", enlace: "Contratos de obra, cartas de presentación y actas con 1 clic" },
  { excel: "Sin herramientas para licitaciones públicas", enlace: "Herramientas de apoyo para organizar antecedentes de Mercado Público" },
  { excel: "Sin control de pagos ni estados de avance físico", enlace: "Estados de pago por avance físico real de cada partida" },
  { excel: "Archivos propensos a borrarse o corromperse", enlace: "Trabaja localmente sin conexión obligatoria y con respaldo continuo" },
];

const COMPARISON_ROWS = [
  { feature: "Tipo de software", enlace: "Aplicación de escritorio para Windows (x64)", others: "Software PC desactualizado", win: true },
  { feature: "Modelo de precios", enlace: "Planes anuales y opción de entrada sin mensualidad", others: "$25.000 / mes mínimo recurrente", win: true },
  { feature: "APU y materiales en Chile", enlace: "Más de 300 partidas y APUs validadas incluidas", others: "Requiere cargar todo a mano", win: true },
  { feature: "Licitaciones Mercado Público", enlace: "Organizar antecedentes y preparar información técnica", others: "No incluye herramientas dedicadas", win: true },
  { feature: "Documentos de obra", enlace: "Contratos, cartas formales e informes con fotos", others: "No genera documentos contractuales", win: true },
  { feature: "Carta Gantt y MS Project", enlace: "Calendario laboral chileno + exportación XML MS Project", others: "No incluye o cobra módulo extra", win: true },
  { feature: "Respaldo y seguridad", enlace: "Sistema de respaldo y restauración de datos local", others: "Básico o dependiente de la nube", win: true },
  { feature: "Uso sin internet", enlace: "Trabaja localmente sin conexión continua obligatoria", others: "Requiere conexión permanente", win: true },
  { feature: "Estados de Pago", enlace: "Por avance físico porcentual por partida", others: "Planilla manual o módulo adicional", win: true },
];

export default function ConstructorProPage() {
  const [billingPeriod, setBillingPeriod] = useState<"anual" | "semestral">("anual");

  return (
    <main className="min-h-screen bg-[#071a3a] text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950 pt-16">
      {/* 1. NAVBAR MAESTRO */}
      <ProductNavbar config={constructorProConfig} />

      {/* 2. HERO MAESTRO */}
      <ProductHero
        config={constructorProConfig}
        title={
          <>
            Presupuesta obras
            <br />
            como <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">profesional</span>
          </>
        }
        subtitle="Deja el Excel. Calcula materiales automáticamente con APU, genera contratos, analiza licitaciones de Mercado Público y envía presupuestos formales por WhatsApp en pocos minutos."
        primaryCta={{
          label: "Descargar instalador (Windows)",
          href: "/downloads/enlace-constructor-pro-setup.exe",
          external: true,
          variant: "primary",
          icon: (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          ),
        }}
        secondaryCta={{
          label: "Ver planes y precios",
          href: "#planes",
          variant: "outline",
        }}
        whatsappCta={{
          label: "WhatsApp directo",
          href: "https://wa.me/56941278725?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Enlace%20Constructor%20Pro",
          external: true,
          variant: "whatsapp",
          icon: (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          ),
        }}
        note="Incluye periodo de evaluación gratuita de 10 días desde la primera instalación en Windows."
      />

      {/* 3. SECCIÓN: VS EXCEL */}
      <ProductSection
        id="vs-excel"
        tag="Comparativa de Flujo"
        tagColor="orange"
        title="¿Por qué dejar Excel para tus presupuestos?"
        subtitle="Excel fue diseñado para contabilidad genérica. Constructor Pro fue concebido exclusivamente para el cálculo técnico, cubicaciones y contratos de obra en Chile."
        variant="card"
        hasBorderTop
      >
        <div className="overflow-hidden rounded-2xl border border-blue-900/60 bg-[#071630] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-blue-900/60 text-sm">
            <div className="p-4 sm:p-6 bg-red-950/20 text-red-300 font-display font-bold uppercase tracking-wider text-xs flex items-center gap-2">
              <span>✕</span> Planilla Excel Tradicional
            </div>
            <div className="p-4 sm:p-6 bg-emerald-950/20 text-emerald-300 font-display font-bold uppercase tracking-wider text-xs flex items-center gap-2">
              <span>✓</span> Enlace Constructor Pro
            </div>
          </div>
          <div className="divide-y divide-blue-900/40">
            {VS_EXCEL_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-blue-900/40 text-sm">
                <div className="p-4 sm:p-5 flex items-start gap-3 text-slate-400 bg-[#071630]/60">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{row.excel}</span>
                </div>
                <div className="p-4 sm:p-5 flex items-start gap-3 text-slate-100 bg-[#091f42]/40">
                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span className="font-medium">{row.enlace}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProductSection>

      {/* 4. SECCIÓN: FUNCIONES */}
      <ProductSection
        id="funciones"
        tag="Herramientas Pro"
        tagColor="blue"
        title="Funcionalidades diseñadas para el trabajo real en obra"
        subtitle="Desde el primer cálculo de materiales hasta el cobro final, la Carta Gantt y la firma de actas de recepción."
        variant="navy"
        hasBorderTop
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructorProConfig.features?.map((f) => {
            const badgeColor =
              f.accentColor === "orange"
                ? "text-orange-400 border-orange-500/30 bg-orange-500/10"
                : f.accentColor === "green"
                ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                : f.accentColor === "purple"
                ? "text-purple-400 border-purple-500/30 bg-purple-500/10"
                : "text-blue-400 border-blue-500/30 bg-blue-500/10";

            return (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 hover:border-blue-500/50 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{f.icon}</span>
                    {f.tag && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor}`}>
                        {f.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ProductSection>

      {/* 5. SECCIÓN: PLANES Y PRECIOS */}
      <ProductSection
        id="planes"
        tag="Suscripciones y Licencias"
        tagColor="orange"
        align="center"
        title="Planes pensados para contratistas y constructoras"
        subtitle="Elige la modalidad que mejor se adapte a tu volumen de trabajo. Todas las licencias incluyen soporte técnico y actualizaciones."
        variant="card"
        hasBorderTop
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {constructorProConfig.plans?.items.map((plan) => {
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isPro
                    ? "bg-[#0f2d62] border-2 border-orange-500 shadow-[0_0_40px_rgba(245,160,32,0.25)] lg:-translate-y-2"
                    : "bg-[#0b234d] border border-blue-900/60"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                        isPro ? "bg-orange-500 text-slate-950" : "bg-blue-600 text-white"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 min-h-[32px]">
                    {plan.description}
                  </p>

                  <div className="mb-4 pb-4 border-b border-blue-900/60">
                    <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                      {plan.price}
                    </div>
                    {plan.period && (
                      <div className="text-xs text-slate-400 mt-0.5">
                        {plan.period}
                      </div>
                    )}
                    {plan.monthlyEquivalent && (
                      <div className="text-xs font-semibold text-emerald-400 mt-1">
                        Equivale a {plan.monthlyEquivalent}
                      </div>
                    )}
                  </div>

                  {plan.highlightNote && (
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300 font-medium mb-4">
                      {plan.highlightNote}
                    </div>
                  )}

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.cta.href}
                  target={plan.cta.external ? "_blank" : undefined}
                  rel={plan.cta.external ? "noopener noreferrer" : undefined}
                  className={`w-full py-3 px-4 rounded-xl font-bold font-display text-xs sm:text-sm text-center transition-all ${
                    isPro
                      ? "bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/30"
                      : "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20"
                  }`}
                >
                  {plan.cta.label}
                </a>
              </div>
            );
          })}
        </div>
      </ProductSection>

      {/* 6. SECCIÓN: COMPARATIVA DETALLADA */}
      <ProductSection
        id="comparativa"
        tag="Detalle Técnico"
        tagColor="blue"
        title="Comparación frente a otros softwares del mercado"
        subtitle="Descubre por qué Constructor Pro ofrece la mejor relación precio-calidad para contratistas en Chile."
        variant="navy"
        hasBorderTop
      >
        <div className="overflow-x-auto rounded-2xl border border-blue-900/60 bg-[#071630]">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-blue-900/60 bg-[#0a1e42] text-xs uppercase tracking-wider text-slate-300 font-display font-bold">
                <th className="py-4 px-6">Característica</th>
                <th className="py-4 px-6 text-orange-400">Enlace Constructor Pro</th>
                <th className="py-4 px-6 text-slate-400">Otros Softwares</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-900/40 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-950/30 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-white">{row.feature}</td>
                  <td className="py-3.5 px-6 font-medium text-emerald-300 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {row.enlace}
                  </td>
                  <td className="py-3.5 px-6 text-slate-400">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProductSection>

      {/* 7. SECCIÓN: REQUISITOS DEL SISTEMA */}
      <ProductSection
        id="requisitos"
        tag="Compatibilidad"
        tagColor="orange"
        title="Requisitos del Sistema para Windows"
        subtitle="Enlace Constructor Pro es una aplicación de escritorio nativa para Windows de 64 bits (x64) diseñada para máxima velocidad y privacidad de tus datos."
        variant="card"
        hasBorderTop
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#0c2652] border border-blue-900/60">
            <div className="text-3xl mb-3">💻</div>
            <h4 className="font-bold text-white text-base font-display mb-1">
              Sistema Operativo
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Windows de 64 bits (Windows 10 o Windows 11 recomendado). Procesador x64.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c2652] border border-blue-900/60">
            <div className="text-3xl mb-3">💾</div>
            <h4 className="font-bold text-white text-base font-display mb-1">
              Almacenamiento Local
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Espacio libre para instalación del programa y generación de copias de seguridad de tus obras.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c2652] border border-blue-900/60">
            <div className="text-3xl mb-3">📶</div>
            <h4 className="font-bold text-white text-base font-display mb-1">
              Conexión a Internet
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Solo para descarga, activación inicial y funciones opcionales. Puedes presupuestar 100% offline.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c2652] border border-blue-900/60">
            <div className="text-3xl mb-3">📑</div>
            <h4 className="font-bold text-white text-base font-display mb-1">
              Formatos Compatibles
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exportación directa a PDF profesional, planillas Microsoft Excel (XLSX) y Carta Gantt MS Project (XML).
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-blue-950/60 border border-blue-800/40 text-xs">
          <span className="text-slate-300">
            ¿Tienes dudas técnicas sobre la instalación en tu equipo? Revisa la documentación legal completa.
          </span>
          <Link
            href="/constructor-pro/legal/terminos"
            className="text-orange-400 font-bold hover:underline"
          >
            Ver Términos y Especificaciones Legales →
          </Link>
        </div>
      </ProductSection>

      {/* 8. CTA BANNER PRE-FOOTER */}
      <ProductCtaBanner
        id="descarga"
        badgeText="DESCARGA INMEDIATA"
        title={
          <>
            Deja de perder tiempo en <span className="text-orange-500">Excel</span>
          </>
        }
        subtitle="Crea tu primer presupuesto profesional en minutos. Descarga el instalador para Windows con 10 días de evaluación gratuita completa."
        primaryAction={{
          label: "Descargar instalador (Windows)",
          href: "/downloads/enlace-constructor-pro-setup.exe",
          external: true,
          variant: "primary",
          icon: (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          ),
        }}
        secondaryAction={{
          label: "Consultar por WhatsApp",
          href: "https://wa.me/56941278725?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Enlace%20Constructor%20Pro",
          external: true,
          variant: "whatsapp",
          icon: (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          ),
        }}
        note="La Serena / Coquimbo, Chile · Soporte técnico oficial: info@redenlace.cl"
      />

      {/* 9. FOOTER MAESTRO */}
      <ProductFooter config={constructorProConfig} />
    </main>
  );
}
