"use client";

import React, { useState } from "react";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductFooter from "@/components/product/ProductFooter";
import { agendaProConfig } from "@/config/products/agenda-pro";

type BillingPeriod = "semestral" | "anual";

const HERO_STATS = [
  { num: "24/7", label: "Reservas Online Autónomas" },
  { num: "0%", label: "Comisiones por Cita" },
  { num: "100%", label: "Tu Marca Propia" },
];

const PRO_FEATURES = [
  {
    icon: "🎨",
    accent: "blue",
    title: "Personalización de Marca (White-Label)",
    description:
      "Tu propio link exclusivo (ej: agenda.redenlace.cl/tu-marca) con tu logo y colores. Tus clientes reservan directamente con tu identidad comercial.",
  },
  {
    icon: "👥",
    accent: "orange",
    title: "Agendas Multi-Profesional",
    description:
      "Agendas independientes para cada especialista, terapeuta o colaborador bajo una misma empresa, sin choques de horario ni confusiones.",
  },
  {
    icon: "💬",
    accent: "blue",
    title: "Recordatorios Automáticos por WhatsApp",
    description:
      "Confirmaciones inmediatas y recordatorios previos por WhatsApp para evitar olvidos y reducir el 'no-show' a menos del 3%.",
  },
  {
    icon: "💳",
    accent: "purple",
    title: "Cobro de Señas y Pagos Anticipados",
    description:
      "Exige un abono previo para confirmar citas de alto valor. Muestra datos bancarios con copiado rápido para asegurar tu ingreso.",
  },
  {
    icon: "💰",
    accent: "orange",
    title: "Control de Caja y Gastos Fijos",
    description:
      "Registro de ingresos diarios por profesional, medios de pago (efectivo, transferencia, tarjeta), gastos fijos y cálculo de utilidad neta.",
  },
  {
    icon: "🔗",
    accent: "blue",
    title: "Conexión a la Red Social ENLACE",
    description:
      "Enciende tu disponibilidad en el mapa comunal de ENLACE para que clientes de tu zona descubran tus servicios y reserven al instante.",
  },
];

const PRICING_DATA = {
  starter: {
    semestral: "$0",
    anual: "$0",
    mesSemestral: "$0",
    mesAnual: "$0",
  },
  pro: {
    semestral: "$14.990",
    anual: "$24.990",
    mesSemestral: "$2.499",
    mesAnual: "$2.083",
  },
  premium: {
    semestral: "$29.990",
    anual: "$49.990",
    mesSemestral: "$4.999",
    mesAnual: "$4.166",
  },
};

export default function AgendaProPage() {
  const [period, setPeriod] = useState<BillingPeriod>("semestral");

  const isAnual = period === "anual";

  return (
    <main className="min-h-screen bg-[#071a3a] text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950 pt-16">
      {/* 1. NAVBAR MAESTRO */}
      <ProductNavbar config={agendaProConfig} />

      {/* 2. HERO PRINCIPAL */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden bg-gradient-to-b from-[#071a3a] via-[#091f42] to-[#071a3a]">
        {/* Glows y Orbs de ambientación oficial */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo oficial Agenda Pro */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ecosistema/logo-agenda-pro.png"
            alt="ENLACE Agenda Pro"
            className="w-32 sm:w-40 h-auto mx-auto mb-5 object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform"
          />

          {/* Badge oficial */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/60 border border-blue-500/40 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-300 mb-8 backdrop-blur-md shadow-inner">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Reservas Online 24/7 · WhatsApp Automático · Multi-Equipo</span>
          </div>

          {/* H1 Principal con gradientes exactos de ENLACE */}
          <h1
            className="font-display font-extrabold leading-[1.08] mb-6 text-white"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 4.4rem)" }}
          >
            <span className="block text-slate-100">El control total de</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
              tus Citas y Reservas
            </span>
            <span className="block text-slate-100">en un solo</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Panel Inteligente
            </span>
          </h1>

          {/* Subtítulo descriptivo */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Gestiona la agenda de tus profesionales, automatiza recordatorios por WhatsApp, recibe señas anti-inasistencia y fideliza a tus clientes sin pagar comisiones por cita.
          </p>

          {/* Botones de acción principales */}
          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <a
              href="https://agenda.redenlace.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-8 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)] active:translate-y-0 cursor-pointer"
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
            Sin tarjeta de crédito. Acceso instantáneo desde tu teléfono o computador.
          </p>

          {/* 3 Métricas en horizontal */}
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

      {/* 3. HERRAMIENTAS PRO / CARACTERÍSTICAS + MOCKUP EN VIVO */}
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
                Automatiza las reservas de tus profesionales y mantén el historial de tus clientes sin planillas complicadas ni mensajes manuales.
              </p>

              <div className="space-y-4">
                {PRO_FEATURES.map((feat) => {
                  const iconBg =
                    feat.accent === "blue"
                      ? "bg-blue-600/15 text-blue-400 border border-blue-500/30"
                      : feat.accent === "orange"
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                      : "bg-purple-500/15 text-purple-400 border border-purple-500/30";

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

            {/* Columna Derecha: Mockup Interactivo de la Agenda en Smartphone */}
            <div id="mockup" className="relative flex flex-col items-center">
              <div className="w-full max-w-md bg-[#0d2550] border-2 border-blue-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {/* Smartphone Mockup */}
                <div className="bg-[#071630] border border-blue-900/80 rounded-2xl p-4 sm:p-5 shadow-inner">
                  {/* Encabezado del Mockup */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-3 mb-4">
                    <div className="font-display font-bold text-sm text-white flex items-center gap-2">
                      <span>📅</span>
                      <span>ENLACE Agenda Panel</span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      En vivo
                    </span>
                  </div>

                  {/* Cita 1: Reserva Confirmada con Seña */}
                  <div className="bg-[#0d2550] border border-blue-900/60 rounded-xl p-3.5 mb-3 shadow-sm">
                    <div className="inline-block bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-md mb-2">
                      Reserva Confirmada — 11:00 hrs
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                      Camila Soto — Consulta Especializada
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Especialista: Dra. Valenzuela · Box 2
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-blue-900/40 text-[10px] sm:text-[11px] font-medium text-orange-400">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span>💳 Seña pagada: $10.000 (Comprobante ✓)</span>
                    </div>
                  </div>

                  {/* Cita 2: Próxima Cita con Recordatorio WhatsApp */}
                  <div className="bg-[#0d2550] border border-blue-900/60 rounded-xl p-3.5 mb-3 shadow-sm">
                    <div className="inline-block bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-md mb-2">
                      Próxima Cita — 12:30 hrs
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                      Esteban Morales — Sesión Kinesiología
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Especialista: Lic. Rodrigo Tapia
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-blue-900/40 text-[10px] sm:text-[11px] font-medium text-sky-400">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span>💬 Recordatorio WhatsApp enviado</span>
                    </div>
                  </div>

                  {/* Cita 3: Reserva Online Autónoma 24/7 */}
                  <div className="bg-[#0d2550] border border-blue-900/60 rounded-xl p-3.5 shadow-sm">
                    <div className="inline-block bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-md mb-2">
                      Reserva Online — 16:00 hrs
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                      Valentina Rojas — Tratamiento Estético
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Agendado 24/7 desde Link de Instagram
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-blue-900/40 text-[10px] sm:text-[11px] font-medium text-blue-300">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>⚡ Ficha técnica de cliente lista</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 text-center mt-4">
                  Monitorea tus citas desde cualquier smartphone, tablet o computadora
                </p>

                {/* Dashboard complementario preview */}
                <div className="mt-5 pt-5 border-t border-blue-900/60 text-center">
                  <a
                    href="https://agenda.redenlace.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Ver Panel Web en Vivo (agenda.redenlace.cl)</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLANES Y PRECIOS CON SELECTOR SEMESTRAL / ANUAL */}
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
              Sin comisiones por cita. Pagas una cuota fija transparente y el 100% de los ingresos de tus servicios va directo a tu bolsillo.
            </p>

            {/* Toggle interactivo Semestral / Anual */}
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

          {/* Grid de los 3 Planes */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch mt-12">
            {/* PLAN GRATIS */}
            <div className="relative bg-[#0d2550] border border-blue-900/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 shadow-lg">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Gratis</h3>
                <div className="font-display font-extrabold text-4xl text-white mb-1">
                  $0
                  <span className="text-sm font-medium text-slate-400 ml-1">
                    /para siempre
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Sin costo mensual ni tarjeta de crédito
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Comienza a digitalizarte hoy mismo. Ideal para captar clientes y recibir citas online de inmediato.
                </p>

                {/* Banner de 1 mes gratis pioneros */}
                <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/30 text-[11px] font-bold text-blue-300 mb-6 leading-relaxed">
                  🎁 100% Gratis para siempre. Empieza en 5 minutos sin fricción.
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">1 Profesional / Agenda personal</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Hasta 50 reservas online al mes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Link público de cliente personalizado</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Ficha y base de datos de clientes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Caja diaria y gastos básicos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Acceso móvil PWA y computador</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://agenda.redenlace.cl"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-blue-800/80 bg-slate-900/60 py-3 px-4 font-semibold text-slate-100 hover:border-blue-400/50 hover:bg-slate-900/90 transition-all text-sm text-center"
                >
                  Comenzar Gratis (Sin Tarjeta)
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
                  El más elegido para consultas, centros de estética y equipos en crecimiento.
                </p>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100 font-semibold">Hasta 3 Profesionales (Multi-agenda)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100 font-semibold">Recordatorios por WhatsApp automáticos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">CRM Inteligente de Retención de Clientes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Fórmulas, notas técnicas e historial</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Personalización con tu propio Logo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100">Estadísticas de ganancias netas y reportes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span className="text-slate-100 font-medium">Todo lo incluido en el Plan Starter</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Pro%20(${
                    isAnual ? "Anual" : "Semestral"
                  })%20de%20Agenda%20Pro.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 py-3.5 px-4 font-bold text-white hover:from-blue-500 hover:to-sky-400 shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all text-sm text-center"
                >
                  Solicitar Plan por WhatsApp
                </a>
              </div>
            </div>

            {/* PLAN PREMIUM */}
            <div className="relative bg-[#0d2550] border border-blue-900/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 shadow-lg">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Premium</h3>
                <div className="font-display font-extrabold text-4xl text-white mb-1">
                  {isAnual ? PRICING_DATA.premium.anual : PRICING_DATA.premium.semestral}
                  <span className="text-sm font-medium text-slate-400 ml-1">
                    {isAnual ? "/año" : "/semestre"}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Equivale a {isAnual ? PRICING_DATA.premium.mesAnual : PRICING_DATA.premium.mesSemestral}/mes
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  La experiencia definitiva. Potencia ilimitada, marca propia y señas anti-inasistencia.
                </p>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-100 font-semibold">Profesionales Ilimitados</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-100 font-semibold">Depósito y Seña obligatoria Anti No-Show</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Subdominio propio (tumarca.redenlace.cl)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">WhatsApp API para confirmación inmediata</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Notificaciones Push automáticas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200">Soporte técnico prioritario</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-slate-200 font-medium">Todo lo incluido en el Plan Pro</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/56941278725?text=Hola!%20Me%20interesa%20solicitar%20el%20Plan%20Premium%20(${
                    isAnual ? "Anual" : "Semestral"
                  })%20de%20Agenda%20Pro.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-blue-800/80 bg-slate-900/60 py-3 px-4 font-semibold text-slate-100 hover:border-orange-500/50 hover:bg-slate-900/90 transition-all text-sm text-center"
                >
                  Solicitar Plan por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOPORTE LOCAL Y DIGITALIZACIÓN (`#digitaliza`) */}
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
                tu Agenda en la red
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-8">
                Digitalizar la gestión de tus turnos es simple si lo hacemos juntos paso a paso con acompañamiento real.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center text-lg shrink-0 border border-blue-500/30">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      Activación Inmediata
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Tu link listo para recibir citas en minutos sin configuraciones complejas ni esperas técnicas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center text-lg shrink-0 border border-orange-500/30">
                    🔒
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      Datos Seguros y Privados
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      La información de tus clientes y finanzas se almacena de forma segura, encriptada y bajo tu control.
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
                Conversemos directamente por WhatsApp para asistirte con la integración del panel técnico para tu equipo.
              </p>

              <a
                href="https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20sistema%20de%20Agenda%20Pro%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white px-8 py-4 font-bold text-sm sm:text-base transition-all shadow-[0_10px_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
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

      {/* 6. CTA FINAL / PRE-FOOTER */}
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
            Toma el control de tus Reservas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-400">
              hoy mismo
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
            Sin contratos forzados ni letra chica. Empieza gratis durante 30 días o accede a tu panel técnico desde cualquier lugar.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <a
              href="https://agenda.redenlace.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-8 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)]"
            >
              <span>🎁</span>
              <span>Empezar 1 Mes Gratis</span>
            </a>

            <a
              href="https://agenda.redenlace.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-blue-800/80 bg-slate-900/60 px-7 py-4 font-semibold text-slate-200 transition-all hover:border-blue-400/50 hover:bg-slate-900/90 hover:text-white"
            >
              <span>Acceder al Panel Técnico</span>
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/56941278725?text=Hola!%20Me%20interesa%20activar%20el%20sistema%20de%20Agenda%20Pro%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white px-7 py-4 font-semibold transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)]"
            >
              <span>💬</span>
              <span>WhatsApp Directo</span>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            agenda.redenlace.cl · IV Región, Chile · Soporte oficial: info@redenlace.cl
          </p>
        </div>
      </section>

      {/* 7. FOOTER MAESTRO */}
      <ProductFooter config={agendaProConfig} />
    </main>
  );
}
