"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type BillingPeriod = 'anual' | 'semestral' | 'trimestral';

const HERO_STATS = [
  { num: 'Minutos', label: 'presupuestos listos' },
  { num: 'Offline*', label: 'trabajo local sin conexión' },
  { num: 'UF + IVA', label: 'mercado chileno' },
  { num: '300+', label: 'partidas y APUs' },
];

const VS_EXCEL = [
  { excel: 'Calculas materiales a mano', enlace: 'Materiales calculados desde APU automáticamente' },
  { excel: 'PDF sin logo ni firma profesional', enlace: 'PDFs profesionales con logo, firma y colores' },
  { excel: 'Sin análisis de precios unitarios', enlace: 'Más de 300 partidas con análisis de precios unitarios' },
  { excel: 'No genera contratos', enlace: 'Contratos, cartas y documentos con 1 clic' },
  { excel: 'Sin herramientas de licitación', enlace: 'Herramientas de apoyo para organizar antecedentes para Mercado Público' },
  { excel: 'Sin seguimiento de pagos ni avance', enlace: 'Estados de pago por avance físico por partida' },
  { excel: 'Datos se pierden o corrompen', enlace: 'Trabaja localmente sin conexión*, sistema de respaldo y restauración' },
];

const PRO_FEATURES = [
  {
    title: 'Presupuestos profesionales',
    description: 'Catálogo de partidas, IVA y UF automáticos, múltiples plantillas PDF. Capítulos, numeración jerárquica y envío por WhatsApp.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'APU — Precios Unitarios',
    description: 'Costo real por partida: materiales, mano de obra, GG y utilidad. Más de 300 partidas, APU, soluciones constructivas validadas.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Cubicación inteligente',
    description: 'Ingresa dimensiones, obtén materiales calculados al instante. Optimizador de cortes de planchas incluido.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    title: 'Licitaciones Mercado Público',
    description: 'Herramientas de apoyo para organizar antecedentes, analizar oportunidades y preparar información de oferta.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Documentos de Obra',
    description: 'Carta de presentación, contrato con cláusulas e informe de obra con fotos y detalle técnico por partida en PDF.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    title: 'Pagos y Estados de Avance',
    description: 'Registra cobros, genera estados de pago por avance físico de cada partida y acta de recepción.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Carta Gantt con MS Project',
    description: 'Carta Gantt con tareas, dependencias, calendario laboral y exportación XML compatible con Microsoft Project.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Agilidad y Guardado Continuo',
    description: 'Guardado en vivo sin salir de la pantalla, borradores rápidos, función deshacer/rehacer y edición ágil.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
      </svg>
    ),
  },
  {
    title: 'Respaldo y Restauración',
    description: 'Sistema de respaldo y restauración de datos local para proteger siempre tu información técnica y presupuestos.',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 4h16M9 4v16" />
      </svg>
    ),
  },
];

const PLANS = [
  {
    name: 'Starter',
    price: '$19.990',
    period: '+ IVA · pago único · acceso permanente',
    description: 'Precio normal: $19.990 + IVA. Acceso básico para contratistas individuales.',
    features: [
      'Dashboard de obras',
      'Presupuestos de obra',
      'PDF profesional con logo y firma',
      'Clientes + Documentos de obra',
      'Contratos y WhatsApp integrado',
    ],
    highlight: 'green',
    isPro: false,
  },
  {
    name: 'Básico',
    prices: { anual: '$59.990', semestral: '$34.990', trimestral: '$19.990' },
    periods: { anual: '+ IVA · anual (12 meses)', semestral: '+ IVA · semestral (6 meses)', trimestral: '+ IVA · trimestral (3 meses)' },
    description: 'Presupuestos + Clientes + PDF + Contratos de obra.',
    features: [
      'Presupuestos y obras',
      'PDF profesional con logo y firma',
      'Gestión de clientes y borradores',
      'Documentos de obra y contratos',
      'WhatsApp + Calendario',
    ],
    highlight: 'orange',
    isPro: false,
  },
  {
    name: 'Constructor',
    prices: { anual: '$89.990', semestral: '$49.990', trimestral: '$29.990' },
    periods: { anual: '+ IVA · anual (12 meses)', semestral: '+ IVA · semestral (6 meses)', trimestral: '+ IVA · trimestral (3 meses)' },
    description: 'Todo el plan Básico + APU + Catálogo + Base de Materiales.',
    features: [
      'Todo del plan Básico',
      'Más de 300 partidas y APUs',
      'Base de materiales y soluciones',
      'APU — Análisis de Precios Unitarios',
      'Lista de compras por obra',
    ],
    highlight: 'orange',
    isPro: false,
  },
  {
    name: 'Pro',
    prices: { anual: '$129.990', semestral: '$74.990', trimestral: '$44.990' },
    periods: { anual: '+ IVA · anual (12 meses)', semestral: '+ IVA · semestral (6 meses)', trimestral: '+ IVA · trimestral (3 meses)' },
    description: 'Todo del Constructor + Cubicación + Gantt MS Project + Documentos.',
    features: [
      'Todo del plan Constructor',
      'Cubicación inteligente',
      'Carta Gantt + exportación MS Project (XML)',
      'Informe de Obra con fotos y detalle técnico',
      'Calendario laboral + Estados de Pago',
    ],
    highlight: 'orange',
    isPro: true,
  },
  {
    name: 'Plus',
    prices: { anual: '$179.990', semestral: '$99.990', trimestral: '$54.990' },
    periods: { anual: '+ IVA · anual (12 meses)', semestral: '+ IVA · semestral (6 meses)', trimestral: '+ IVA · trimestral (3 meses)' },
    description: 'Todo incluido + Herramientas para Licitaciones Mercado Público.',
    features: [
      'Todo del plan Pro',
      'Herramientas Mercado Público',
      'Análisis de conveniencia con APU',
      'Organizar antecedentes de oferta',
      'Soporte prioritario',
    ],
    highlight: 'orange',
    isPro: false,
  },
  {
    name: 'Pro Cloud',
    price: '$24.990',
    period: '/ mes · suscripción mensual',
    description: 'Para empresas que requieren soporte prioritario, nube y actualizaciones.',
    features: [
      'Todo del plan Pro',
      'Actualización mensual de precios',
      'Soporte prioritario por WhatsApp',
      'Nuevos módulos al lanzar',
      'Capacitación inicial incluida',
    ],
    highlight: 'blue',
    isPro: false,
  },
];

export default function ConstructorProPage() {
  const [period, setPeriod] = useState<BillingPeriod>('anual');

  return (
    <div className="min-h-screen bg-[hsl(222,80%,11%)] text-slate-200">
      <Navbar />

      {/* HERO CONSTRUCTOR PRO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
        {/* Luces y glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-orange-500/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-500/15 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Logo Constructor Pro */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ecosistema/constructor-pro-logo.png"
            alt="Enlace Constructor Pro"
            className="h-24 w-24 sm:h-28 sm:w-28 mx-auto mb-6 object-contain filter drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          />

          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-2 text-xs font-semibold text-orange-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            Diseñado para contratistas y empresas constructoras en Chile 🇨🇱
          </div>

          <h1 className="font-display font-extrabold leading-[1.08] text-white text-[clamp(2.4rem,6vw,4.4rem)] mb-6">
            Presupuesta obras
            <br />
            como <span className="text-[hsl(30,98%,57%)]">profesional</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Deja el Excel. Calcula materiales automáticamente, genera contratos, analiza licitaciones y envía todo por WhatsApp — en pocos minutos.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#planes"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[hsl(30,98%,57%)] to-amber-500 px-7 py-3.5 font-bold text-slate-950 shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 transition-all"
            >
              Ver planes y precios
            </a>

            <a
              href="/downloads/enlace-constructor-pro-setup.exe"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar instalador (.exe)
            </a>

            <a
              href="https://wa.me/56941278725?text=Hola!%20Quiero%20solicitar%20informaci%C3%B3n%20sobre%20Enlace%20Constructor%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-semibold text-white transition-all"
            >
              Contactar por WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 justify-center mt-16 pt-8 border-t border-white/10">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[hsl(30,98%,57%)]">{s.num}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS EXCEL */}
      <section className="py-20 px-6 bg-[#08152B]/80 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-2">Por qué cambiar</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Enlace Constructor Pro <span className="text-[hsl(30,98%,57%)]">vs</span> tu Excel
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
            {/* Columna Excel */}
            <div className="bg-[#0B1E38]/70 border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="font-display font-bold text-slate-400">Excel tradicional o cuaderno</span>
              </div>
              <ul className="space-y-3.5">
                {VS_EXCEL.map((r) => (
                  <li key={r.excel} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                    <span>{r.excel}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VS Badge */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[hsl(30,98%,57%)] font-extrabold text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                VS
              </div>
            </div>

            {/* Columna Enlace */}
            <div className="relative bg-[#0E2442] border border-orange-500/40 rounded-2xl p-6 sm:p-7 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="font-display font-bold text-orange-400">Enlace Constructor Pro</span>
              </div>
              <ul className="space-y-3.5">
                {VS_EXCEL.map((r) => (
                  <li key={r.enlace} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                    <span>{r.enlace}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS TÉCNICAS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-2">Herramientas especializadas</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Todo lo que necesitas para tu constructora
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="bg-[#0A1D36]/80 border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section id="planes" className="py-24 px-6 bg-[#07152B] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-2">Precios y planes</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">Elige tu plan</h2>
            <p className="text-slate-400">Planes adaptables a tu flujo de caja. Ahorra más eligiendo el plan anual.</p>
          </div>

          {/* Toggle periodo */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-900/80 p-1 rounded-full inline-flex items-center gap-1 border border-white/15">
              {(['anual', 'semestral', 'trimestral'] as BillingPeriod[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold capitalize transition-all ${
                    period === p
                      ? 'bg-gradient-to-r from-[hsl(30,98%,57%)] to-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {p} {p === 'anual' && '(Ahorra +)'}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de planes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => {
              const displayPrice = plan.prices ? plan.prices[period] : plan.price;
              const displayPeriod = plan.periods ? plan.periods[period] : plan.period;

              return (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all ${
                    plan.isPro
                      ? 'bg-[#0E274A] border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.2)] md:-translate-y-2'
                      : 'bg-[#0A1B33]/80 border-white/10'
                  }`}
                >
                  <div>
                    {plan.isPro && (
                      <span className="inline-block bg-orange-500 text-slate-950 font-bold text-xs uppercase px-2.5 py-0.5 rounded-full mb-3">
                        Más popular
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xl text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mb-5 min-h-[32px]">{plan.description}</p>
                    <div className="mb-6">
                      <div className="font-display font-extrabold text-3xl text-white">{displayPrice}</div>
                      <div className="text-xs text-slate-400 mt-1">{displayPeriod}</div>
                    </div>

                    <ul className="space-y-2.5 mb-8 text-xs sm:text-sm">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-slate-300">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20${encodeURIComponent(plan.name)}%20de%20Enlace%20Constructor%20Pro.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all block ${
                      plan.isPro
                        ? 'bg-[hsl(30,98%,57%)] text-slate-950 hover:bg-orange-400'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Solicitar {plan.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESCARGA DIRECTA */}
      <section id="descarga" className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#0E2442] to-[#09172B] border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_60px_rgba(37,99,235,0.2)]">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
            Comienza a presupuestar hoy
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Descarga Enlace Constructor Pro para Windows. Instala en segundos y prueba la plataforma en tu equipo.
          </p>
          <a
            href="/downloads/enlace-constructor-pro-setup.exe"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-base shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar Enlace Constructor Pro (.exe)
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
