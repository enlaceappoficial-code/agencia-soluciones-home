"use client";

import React, { useState } from "react";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductFooter from "@/components/product/ProductFooter";
import { peluqueriaConfig } from "@/config/products/peluqueria";

type BillingPeriod = "semestral" | "anual";

const HERO_STATS = [
  { num: "App", label: "Instalable (PWA)" },
  { num: "0%", label: "Comisiones por Cita" },
  { num: "100%", label: "Marca Propia" },
];

const PRO_FEATURES = [
  {
    icon: "🎨",
    accent: "blue",
    title: "Personalización (White-Label)",
    description:
      "Tu propio logo y nombre comercial en la app. Tus clientes interactúan directamente con tu marca, no con la nuestra.",
  },
  {
    icon: "👥",
    accent: "orange",
    title: "Gestión Multi-Barbero",
    description:
      "Agendas independientes para cada barbero de tu equipo bajo un mismo local, sin cruces ni confusiones de horario.",
  },
  {
    icon: "💬",
    accent: "green",
    title: "Integración con WhatsApp",
    description:
      "Botones mágicos para enviar recordatorios personalizados de la próxima cita con un solo toque y evitar el 'no-show'.",
  },
  {
    icon: "📈",
    accent: "purple",
    title: "Finanzas y Rentabilidad Exacta",
    description:
      "Métricas avanzadas: ingresos extras, control de gastos fijos y cálculo automático de tu ganancia neta mensual.",
  },
];

const PRICING_DATA = {
  basico: {
    semestral: "$29.990",
    anual: "$49.990",
    mesSemestral: "$5.000",
    mesAnual: "$4.166",
  },
  plus: {
    semestral: "$45.990",
    anual: "$79.990",
    mesSemestral: "$7.665",
    mesAnual: "$6.665",
  },
  pro: {
    semestral: "$85.990",
    anual: "$149.990",
    mesSemestral: "$14.331",
    mesAnual: "$12.499",
  },
};

export default function PeluqueriaPage() {
  const [period, setPeriod] = useState<BillingPeriod>("semestral");

  const isAnual = period === "anual";

  return (
    <main className="min-h-screen bg-[#071a3a] text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950 pt-16">
      {/* 1. NAVBAR MAESTRO */}
      <ProductNavbar config={peluqueriaConfig} />

      {/* 2. HERO PRINCIPAL 1:1 */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden bg-gradient-to-b from-[#071a3a] via-[#091f42] to-[#071a3a]">
        {/* Glows y Orbs de ambientación */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo oficial Barbería */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ecosistema/logo-barberia.png"
            alt="Enlace Barbería Pro"
            className="w-32 sm:w-36 h-auto mx-auto mb-4 object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform"
          />

          {/* Badge WhatsApp verde oficial */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/40 border border-emerald-500/40 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-400 mb-8 backdrop-blur-md shadow-inner">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ahora con Recordatorios Automáticos por WhatsApp</span>
          </div>

          {/* H1 Principal con gradientes exactos */}
          <h1
            className="font-display font-extrabold leading-[1.08] mb-6 text-white"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 4.4rem)" }}
          >
            <span className="block text-slate-100">El control total de</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              tu Barbería
            </span>
            <span className="block text-slate-100">en un solo</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500">
              Panel Inteligente
            </span>
          </h1>

          {/* Subtítulo descriptivo */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Gestiona múltiples agendas, calcula tu ganancia neta, personaliza tu marca y olvídate de las inasistencias gracias a los cobros de señas integrados.
          </p>

          {/* Botones de acción principales */}
          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <a
              href="https://barberia.redenlace.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)] active:translate-y-0"
            >
              <span>🎁</span>
              <span>Empezar 1 Mes Gratis</span>
            </a>

            <a
              href="#caracteristicas"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-blue-800/80 bg-slate-900/60 px-7 py-4 font-semibold text-slate-200 transition-all hover:border-blue-400/50 hover:bg-slate-900/90 hover:text-white"
            >
              <span>Descubrir Funciones</span>
              <span>→</span>
            </a>
          </div>

          {/* Nota bajo botones */}
          <p className="text-xs text-slate-400 text-center mb-12">
            Sin tarjeta de crédito. Acceso instantáneo desde tu navegador, sin descargas.
          </p>

          {/* 3 Métricas en horizontal para desktop */}
          <div className="grid grid-cols-3 max-w-2xl mx-auto gap-4 pt-10 border-t border-blue-900/40">
            {HERO_STATS.map((s, idx) => (
              <div
                key={s.label}
                className={`text-center ${idx > 0 ? "border-l border-blue-900/40" : ""}`}
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {s.num}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HERRAMIENTAS PRO / CARACTERÍSTICAS + MOCKUP EN VIVO 1:1 */}
      <section id="caracteristicas" className="py-24 px-6 border-t border-blue-900/60 bg-[#071630]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Columna Izquierda: Tarjetas Pro */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">
                Herramientas Pro
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-4">
                Diseñado para la
                <br />
                gestión moderna
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-8">
                Automatiza las reservas de tus sillones y mantén el historial de tus clientes sin planillas complicadas.
              </p>

              <div className="space-y-4">
                {PRO_FEATURES.map((feat) => {
                  const iconBg =
                    feat.accent === "blue"
                      ? "bg-blue-600/15 text-blue-400"
                      : feat.accent === "orange"
                      ? "bg-orange-500/15 text-orange-400"
                      : feat.accent === "green"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-purple-500/15 text-purple-400";

                  return (
                    <div
                      key={feat.title}
                      className="bg-[#091f42] border border-blue-900/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 flex gap-4 items-start shadow-md"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${iconBg}`}
                      >
                        {feat.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                          {feat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Columna Derecha: Mockup Interactivo del Smartphone (1:1 del original) */}
            <div id="mockup" className="relative flex flex-col items-center">
              <div className="w-full max-w-md bg-[#0d2550] border-2 border-blue-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {/* Smartphone Mockup */}
                <div className="bg-[#071630] border border-blue-900/80 rounded-2xl p-4 sm:p-5 shadow-inner">
                  {/* Encabezado del Mockup */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-3 mb-4">
                    <div className="font-display font-bold text-sm text-white flex items-center gap-2">
                      <span>💈</span>
                      <span>ENLACE Barber Panel</span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      En vivo
                    </span>
                  </div>

                  {/* Cita 1: Reserva Confirmada con Seña */}
                  <div className="bg-[#0d2550] border border-blue-900/60 rounded-xl p-3.5 mb-3 shadow-sm">
                    <div className="inline-block bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-md mb-2">
                      Reserva Confirmada — 15:30 hrs
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                      Juan Pérez — Corte + Barba
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Atendido por: Barbero Central
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-blue-900/40 text-[10px] sm:text-[11px] font-medium text-orange-400">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span>💳 Seña pagada: $5.000 (Comprobante ✓)</span>
                    </div>
                  </div>

                  {/* Cita 2: Próxima Cita con Recordatorio WhatsApp */}
                  <div className="bg-[#0d2550] border border-blue-900/60 rounded-xl p-3.5 shadow-sm">
                    <div className="inline-block bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-md mb-2">
                      Próxima Cita — 16:30 hrs
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                      Carlos Muñoz — Degradado Alto
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Atendido por: Felipe Fade
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-blue-900/40 text-[10px] sm:text-[11px] font-medium text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>💬 Recordatorio WhatsApp enviado</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 text-center mt-4">
                  Monitorea tus citas desde cualquier smartphone o computadora
                </p>

                {/* Dashboard complementario preview */}
                <div className="mt-5 pt-5 border-t border-blue-900/60 text-center">
                  <a
                    href="https://barberia.redenlace.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Ver Panel Web en Vivo (barberia.redenlace.cl)</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLANES Y PRECIOS 1:1 CON SELECTOR INTERACTIVO SEMESTRAL / ANUAL */}
      <section id="planes" className="py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071a3a] via-[#091f42] to-[#071a3a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">
              Suscripciones
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Sin comisiones por cita. Pagas una cuota fija mensual y todo el control y los ingresos son tuyos.
            </p>

            {/* Toggle interactivo Semestral / Anual (1:1 del original) */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <span
                onClick={() => setPeriod("semestral")}
                className={`text-sm font-bold cursor-pointer transition-colors ${
                  !isAnual ? "text-white" : "text-slate-400"
                }`}
              >
                Semestral
              </span>

              <button
                type="button"
                onClick={() => setPeriod(isAnual ? "semestral" : "anual")}
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#071630] border border-blue-700/60 p-1 transition-colors shadow-inner"
                aria-label="Alternar facturación semestral o anual"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-blue-500 transition-transform ${
                    isAnual ? "translate-x-7 bg-orange-500 shadow-[0_0_10px_rgba(245,160,32,0.6)]" : "translate-x-0"
                  }`}
                />
              </button>

              <span
                onClick={() => setPeriod("anual")}
                className={`text-sm font-bold cursor-pointer transition-colors ${
                  isAnual ? "text-white" : "text-slate-400"
                }`}
              >
                Anual <span className="text-orange-400 font-extrabold">(¡Mejor valor!)</span>
              </span>
            </div>
          </div>

          {/* Grid de los 3 Planes Originales */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch mt-12">
            {/* PLAN BÁSICO */}
            <div className="relative bg-[#0d2550] border border-blue-900/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 shadow-lg">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Básico</h3>
                <div className="font-display font-extrabold text-4xl text-white mb-1">
                  {isAnual ? PRICING_DATA.basico.anual : PRICING_DATA.basico.semestral}
                  <span className="text-sm font-medium text-slate-400 ml-1">
                    {isAnual ? "/año" : "/semestre"}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Equivale a {isAnual ? PRICING_DATA.basico.mesAnual : PRICING_DATA.basico.mesSemestral}/mes
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Perfecto para barberos independientes que recién comienzan a digitalizarse.
                </p>

                {/* Banner de 1 mes gratis original */}
                <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/30 text-[11px] font-bold text-blue-300 mb-6 leading-relaxed">
                  🎁 Prueba el sistema completo GRATIS por 1 mes (30 días) creando tu cuenta ahora.
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">1 Barbero / Agenda única</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Reservas online 24/7 ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Ficha técnica de clientes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Ingresos y cierre de caja</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Link de reservas estándar</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20B%C3%A1sico%20(${
                    isAnual ? "Anual" : "Semestral"
                  })%20de%20Barberia%20Pro.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-blue-800/80 bg-slate-900/60 py-3 px-4 font-semibold text-slate-100 hover:border-orange-500/50 hover:bg-slate-900/90 transition-all text-sm text-center"
                >
                  Solicitar Plan por WhatsApp
                </a>
              </div>
            </div>

            {/* PLAN PLUS */}
            <div className="relative bg-[#0d2550] border border-blue-900/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 shadow-lg">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Plus</h3>
                <div className="font-display font-extrabold text-4xl text-white mb-1">
                  {isAnual ? PRICING_DATA.plus.anual : PRICING_DATA.plus.semestral}
                  <span className="text-sm font-medium text-slate-400 ml-1">
                    {isAnual ? "/año" : "/semestre"}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Equivale a {isAnual ? PRICING_DATA.plus.mesAnual : PRICING_DATA.plus.mesSemestral}/mes
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Ideal para locales en crecimiento con múltiples sillones.
                </p>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Hasta 3 Barberos (Multi-agenda)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Recordatorios por WhatsApp (1 clic)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Re-agendamiento rápido (14 días)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Personalización Básica</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200 font-medium">Todo lo del plan Básico</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Plus%20(${
                    isAnual ? "Anual" : "Semestral"
                  })%20de%20Barberia%20Pro.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-blue-800/80 bg-slate-900/60 py-3 px-4 font-semibold text-slate-100 hover:border-orange-500/50 hover:bg-slate-900/90 transition-all text-sm text-center"
                >
                  Solicitar Plan por WhatsApp
                </a>
              </div>
            </div>

            {/* PLAN PRO (MÁS POPULAR) */}
            <div className="relative bg-[#0d2550] border-2 border-blue-500 rounded-3xl p-7 flex flex-col justify-between shadow-[0_0_40px_rgba(37,99,235,0.25)] lg:scale-105 z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full whitespace-nowrap bg-blue-600 text-white shadow-md tracking-wider">
                  MÁS POPULAR
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Pro</h3>
                <div className="font-display font-extrabold text-4xl text-orange-400 mb-1">
                  {isAnual ? PRICING_DATA.pro.anual : PRICING_DATA.pro.semestral}
                  <span className="text-sm font-medium text-slate-400 ml-1">
                    {isAnual ? "/año" : "/semestre"}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Equivale a {isAnual ? PRICING_DATA.pro.mesAnual : PRICING_DATA.pro.mesSemestral}/mes
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  La experiencia definitiva. Control total y marca propia (White-Label).
                </p>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100 font-semibold">Barberos Ilimitados</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100 font-semibold">Marca Propia (Tu Logo y Nombre)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Cobro de Señas / Anti No-Show</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Cálculo de Rentabilidad y Gastos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Estadísticas avanzadas y Reportes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Soporte técnico prioritario</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Pro%20(${
                    isAnual ? "Anual" : "Semestral"
                  })%20de%20Barberia%20Pro.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3.5 px-4 font-bold text-white hover:from-blue-500 hover:to-blue-400 shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all text-sm text-center"
                >
                  Solicitar Plan por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOPORTE LOCAL Y DIGITALIZACIÓN (`#digitaliza`) 1:1 */}
      <section id="digitaliza" className="py-24 px-6 border-t border-blue-900/60 bg-[#071630]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna Izquierda: Información de acompañamiento */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">
                Soporte Local
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-4">
                Te ayudamos a configurar
                <br />
                tu Barbería en la red
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-8">
                Digitalizar tus herramientas de trabajo es fácil si lo hacemos juntos paso a paso.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center text-lg shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      Activación Inmediata
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Tu subdominio listo para recibir reservas en minutos sin esperas técnicas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center text-lg shrink-0">
                    🔒
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      Datos Protegidos
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Toda la información del negocio se procesa de forma directa, encriptada y sin intermediarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta CTA de Contacto Directo */}
            <div className="bg-[#0d2550] border border-blue-900/80 rounded-3xl p-8 sm:p-10 text-center shadow-xl">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                ¿Tienes dudas sobre el sistema?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
                Conversemos directamente por WhatsApp para asistirte con la integración del panel técnico de tu negocio.
              </p>

              <a
                href="https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20sistema%20de%20Barberia%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 font-bold text-sm sm:text-base transition-all shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
              >
                <span>💬</span>
                <span>Contactar Soporte Técnico</span>
              </a>

              <p className="text-xs text-slate-400 mt-6">
                La Serena / Coquimbo · ENLACE Herramientas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL / PRE-FOOTER (POTENCIA COMERCIAL MÁXIMA) */}
      <section className="relative py-24 px-6 border-t border-blue-900/60 bg-gradient-to-b from-[#071630] via-[#091f42] to-[#071a3a] overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[700px] bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/15 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold text-blue-300 mb-6">
            <span>🚀</span>
            <span>Acceso Inmediato sin Comisiones</span>
          </div>

          <h2
            className="font-display font-extrabold leading-[1.08] mb-5 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
          >
            Toma el control de tu Barbería
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
              hoy mismo
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
            Sin contratos forzados ni letra chica. Empieza gratis durante 30 días o accede a tu panel técnico desde cualquier lugar.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <a
              href="https://barberia.redenlace.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)]"
            >
              <span>🎁</span>
              <span>Empezar 1 Mes Gratis</span>
            </a>

            <a
              href="https://barberia.redenlace.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-blue-800/80 bg-slate-900/60 px-7 py-4 font-semibold text-slate-200 transition-all hover:border-blue-400/50 hover:bg-slate-900/90 hover:text-white"
            >
              <span>Acceder al Panel Técnico</span>
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20sistema%20de%20Barberia%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 font-semibold transition-all shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
            >
              <span>💬</span>
              <span>WhatsApp Directo</span>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            barberia.redenlace.cl · IV Región, Chile · Soporte oficial: info@redenlace.cl
          </p>
        </div>
      </section>

      {/* 7. FOOTER MAESTRO CON CONTENIDO ESPECÍFICO */}
      <ProductFooter config={peluqueriaConfig} />
    </main>
  );
}
