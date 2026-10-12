"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.enlace";
const WHATSAPP_URL =
  "https://wa.me/56941278725?text=Hola!%20Vi%20ENLACE%20Red%20Social%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n.";

export default function RedSocialPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    email: "",
    rubro: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setFormSent(true);
  };

  return (
    <main className="min-h-screen bg-[#071a3a] text-slate-100 font-sans selection:bg-blue-600 selection:text-white pt-16">
      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        {/* Glow & Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/enlace-logo.png"
              alt="ENLACE"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponible en Google Play · Hecho en Chile 🇨🇱</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.1] mb-6">
            La red que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              conecta
            </span>
            <br />
            tu barrio con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              tu negocio
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Red social hiperlocal para emprendedores y servicios en Chile.
            <br className="hidden sm:inline" />
            <span className="text-orange-500 font-semibold"> Conecta</span> con
            lo que tienes <span className="text-sky-300 font-semibold">cerca</span>.
          </p>

          {/* Primary Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-base shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.365-.33-.61-.83-.61-1.42V3.234c0-.59.245-1.09.61-1.42zm11.24 11.24l2.58 2.58-13.04 7.53 10.46-10.11zm0-2.108L4.39 1.056l13.04 7.53-2.58 2.36zm1.48 1.054l4.08 2.355c.92.53.92 1.402 0 1.933l-4.08 2.355-2.22-2.22 2.22-2.423z"/>
              </svg>
              <span>Descargar en Google Play</span>
            </a>

            <a
              href="#que-es"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-base transition-colors"
            >
              <span>Conocer cómo funciona</span>
              <span>↓</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 max-w-xl mx-auto gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-3 text-center">
              <div className="font-display font-extrabold text-xl md:text-2xl text-blue-400">
                CL
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
                Hecho en Chile
              </div>
            </div>
            <div className="p-3 text-center border-x border-slate-800/80">
              <div className="font-display font-extrabold text-xl md:text-2xl text-amber-400">
                Google Play
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
                Ya disponible
              </div>
            </div>
            <div className="p-3 text-center">
              <div className="font-display font-extrabold text-xl md:text-2xl text-emerald-400">
                Gratis
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
                Para emprendedores
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ¿QUÉ ES ENLACE? SECTION
      ======================================================== */}
      <section id="que-es" className="py-20 bg-[#091f44] border-t border-blue-900/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto y características */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
                  ¿Qué es ENLACE?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2 leading-tight">
                  Tu negocio,
                  <br />
                  visible en tu barrio
                </h2>
                <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
                  ENLACE es una red social diseñada para que los emprendedores
                  locales puedan conectar con clientes reales, cerca de donde
                  están.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Característica 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b2756]/80 border border-blue-800/40 hover:border-blue-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base font-display">
                      Hiperlocal
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      Las publicaciones aparecen según tu ubicación. Conectas
                      con clientes de tu barrio, no del otro lado del mundo.
                    </p>
                  </div>
                </div>

                {/* Característica 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b2756]/80 border border-blue-800/40 hover:border-amber-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                    🤝
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base font-display">
                      Red de confianza
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      Perfiles verificados, reseñas reales y reputación como
                      proveedor y como cliente.
                    </p>
                  </div>
                </div>

                {/* Característica 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b2756]/80 border border-blue-800/40 hover:border-emerald-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl shrink-0">
                    🚀
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base font-display">
                      Simple y rápido
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      Publica en segundos. Enciende y apaga tu disponibilidad
                      cuando quieras sin complicaciones técnicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Phone Showcase con capturas reales */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative flex items-center justify-center gap-4 sm:gap-6 w-full max-w-lg">
                {/* Screenshot Feed */}
                <div className="relative w-1/2 max-w-[220px] rounded-3xl p-2 bg-gradient-to-b from-blue-500/30 via-slate-800 to-slate-900 border border-blue-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-[9/19] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/ecosistema/red-social-feed.jpg"
                      alt="ENLACE Feed de Emprendimientos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center py-2">
                    <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider">
                      Feed en vivo
                    </span>
                  </div>
                </div>

                {/* Screenshot Directorio */}
                <div className="relative w-1/2 max-w-[220px] rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                  <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-[9/19] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/ecosistema/red-social-directorio.jpg"
                      alt="ENLACE Directorio de Servicios"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center py-2">
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider">
                      Directorio
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center mt-6">
                Capturas reales de la aplicación ENLACE en Android
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ¿PARA QUIÉN ES? SECTION
      ======================================================== */}
      <section id="para-quien" className="py-20 bg-[#071a3a] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
              ¿Para quién es?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2">
              Dos lados de la misma red
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Conectamos las necesidades de los vecinos con el trabajo y talento
              de los emprendedores de la zona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Emprendedores */}
            <div className="relative rounded-3xl bg-[#0b234d] border border-blue-900/60 p-8 sm:p-10 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500" />
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                Emprendedores
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Si ofreces un servicio, vendes productos o tienes un negocio
                local, ENLACE es tu vitrina digital en el barrio.
              </p>

              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">→</span>
                  <span>Publica tus servicios completamente gratis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">→</span>
                  <span>Enciende y apaga tu disponibilidad con un toque</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">→</span>
                  <span>Contacto directo por WhatsApp, sin comisiones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">→</span>
                  <span>Construye tu reputación con reseñas de clientes reales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">→</span>
                  <span>Gestiona tu agenda de atención y citas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">→</span>
                  <span>Crea tu perfil y vitrina digital en menos de un minuto</span>
                </li>
              </ul>
            </div>

            {/* Tarjeta Clientes */}
            <div className="relative rounded-3xl bg-[#0b234d] border border-blue-900/60 p-8 sm:p-10 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-sky-400" />
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                Clientes y Vecinos
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                ¿Necesitas un técnico, gasfíter, repostería o corte de pelo
                cerca? Encuentra emprendedores verificados en tu zona.
              </p>

              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">→</span>
                  <span>Busca servicios y productos cerca de tu ubicación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">→</span>
                  <span>Mira quién está disponible para atender ahora mismo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">→</span>
                  <span>Contacta en segundos directamente por WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">→</span>
                  <span>Lee reseñas auténticas de personas de tu comuna</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">→</span>
                  <span>Apoya e impulsa el comercio y trabajo local</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">→</span>
                  <span>Descarga y usa la app gratis en tu teléfono Android</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ECOSISTEMA ENLACE SECTION
      ======================================================== */}
      <section id="apps" className="py-20 bg-[#091a38] border-t border-blue-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
              Ecosistema ENLACE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2">
              Más herramientas para
              <br />
              tu emprendimiento
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Construimos un ecosistema de aplicaciones especializadas para
              acompañar cada rubro en su crecimiento digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* App 1: Red Social */}
            <div className="p-6 rounded-2xl bg-[#0d2550] border border-blue-500/40 relative group hover:border-blue-400 transition-all">
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
                ✓ Disponible
              </span>
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                ENLACE Red Social
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Plataforma hiperlocal para conectar y visibilizar emprendimientos
                y servicios en Chile.
              </p>
            </div>

            {/* App 2: Barbería */}
            <Link
              href="/peluqueria"
              className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 relative group hover:border-amber-400 hover:-translate-y-1 transition-all block no-underline text-inherit"
            >
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
                ✓ Disponible
              </span>
              <div className="text-3xl mb-3">💇</div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                ENLACE Barbería / Peluquería
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sistema de reservas online y control para salones, barberías y
                estilistas independientes.
              </p>
            </Link>

            {/* App 3: Constructor Pro */}
            <Link
              href="/constructor-pro"
              className="p-6 rounded-2xl bg-[#0d2550] border border-blue-900/60 relative group hover:border-amber-400 hover:-translate-y-1 transition-all block no-underline text-inherit"
            >
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
                ✓ Disponible
              </span>
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                ENLACE Constructor Pro
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Software de presupuestos, APU, cubicaciones y contratos para
                constructoras y contratistas.
              </p>
            </Link>

            {/* App 4: Restorán */}
            <div className="p-6 rounded-2xl bg-[#0d2550]/60 border border-blue-900/40 relative opacity-80">
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 mb-4">
                Próximamente
              </span>
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                ENLACE Restorán
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Gestión de mesas, comandas, pedidos y menú digital interactivo
                para locales de comida.
              </p>
            </div>

            {/* App 5: Agenda Pro */}
            <div className="p-6 rounded-2xl bg-[#0d2550]/60 border border-blue-900/40 relative opacity-80">
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 mb-4">
                Próximamente
              </span>
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                ENLACE Agenda Pro
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sistema inteligente de citas, recordatorios automáticos y pagos
                para profesionales independientes.
              </p>
            </div>

            {/* App 6: Gestión */}
            <div className="p-6 rounded-2xl bg-[#0d2550]/60 border border-blue-900/40 relative opacity-80">
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 mb-4">
                Próximamente
              </span>
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                ENLACE Gestión
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Control simple de clientes, cotizaciones y tareas operativas en
                un solo lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CÓMO FUNCIONA SECTION
      ======================================================== */}
      <section id="como-funciona" className="py-20 bg-[#071a3a] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
            ¿Cómo funciona?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2 mb-16">
            En 3 pasos simples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Paso 1 */}
            <div className="p-8 rounded-3xl bg-[#0a234f] border border-blue-900/60 text-center relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-extrabold font-display text-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                1
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Crea tu perfil
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Regístrate gratis con tu número de teléfono. Agrega tu nombre,
                comuna y foto. Queda listo en menos de un minuto.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="p-8 rounded-3xl bg-[#0a234f] border border-blue-900/60 text-center relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 font-extrabold font-display text-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                2
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Publica tu servicio
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Agrega fotos, descripción y categoría. Enciende tu
                disponibilidad y empieza a aparecer en el feed de tu barrio.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="p-8 rounded-3xl bg-[#0a234f] border border-blue-900/60 text-center relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 font-extrabold font-display text-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                3
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Conecta y crece
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tus vecinos te contactan por WhatsApp directamente. Sin
                intermediarios, sin comisiones y sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DIGITALIZA TU NEGOCIO SECTION
      ======================================================== */}
      <section id="digitaliza" className="py-20 bg-[#091f42] border-t border-b border-blue-900/60 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                  ¿Necesitas ayuda digital?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2 leading-tight">
                  Digitalizamos tu negocio paso a paso
                </h2>
                <p className="text-slate-300 text-base mt-3 leading-relaxed">
                  Si tienes un emprendimiento y no sabes por dónde empezar en el
                  mundo digital, en ENLACE estamos para acompañarte en cada fase.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0c2858] border border-blue-800/40">
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="font-bold text-white text-sm font-display">
                    Página web profesional
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Presencia digital moderna y optimizada para convertir visitas en clientes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c2858] border border-blue-800/40">
                  <div className="text-2xl mb-2">📱</div>
                  <h4 className="font-bold text-white text-sm font-display">
                    Perfil en ENLACE
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Te ayudamos a estructurar tu perfil y tus primeras publicaciones.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c2858] border border-blue-800/40">
                  <div className="text-2xl mb-2">🛠️</div>
                  <h4 className="font-bold text-white text-sm font-display">
                    Herramientas a medida
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Soluciones específicas según tu rubro: barberías, constructoras o comercio.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c2858] border border-blue-800/40">
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-bold text-white text-sm font-display">
                    Acompañamiento real
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Soporte directo y cercano. No estás solo en el proceso digital.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box de WhatsApp */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#071630] border border-blue-700/40 text-center shadow-2xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4 border border-emerald-500/20">
                  💬
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  Conversemos sobre tu negocio
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Cuéntanos en qué rubro estás y cómo podemos ayudarte a dar el
                  salto digital. Sin compromisos ni costos ocultos.
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.45)]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Escríbenos por WhatsApp</span>
                </a>

                <p className="text-xs text-slate-400 mt-4">
                  +56 9 4127 8725 · La Serena, Coquimbo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA DESCARGA & BETA TEST SECTION
      ======================================================== */}
      <section id="descarga" className="py-24 bg-gradient-to-b from-[#071a3a] via-[#09224d] to-[#040f24] relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-6">
            <span>ÚNETE AHORA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mb-6 leading-tight">
            Descarga ENLACE y conecta con tu barrio
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Únete a la red social que impulsa el comercio y trabajo local. Ya
            disponible en Google Play para dispositivos Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-base shadow-[0_12px_35px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.365-.33-.61-.83-.61-1.42V3.234c0-.59.245-1.09.61-1.42zm11.24 11.24l2.58 2.58-13.04 7.53 10.46-10.11zm0-2.108L4.39 1.056l13.04 7.53-2.58 2.36zm1.48 1.054l4.08 2.355c.92.53.92 1.402 0 1.933l-4.08 2.355-2.22-2.22 2.22-2.423z"/>
              </svg>
              <span>Descargar en Google Play</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold text-base transition-colors"
            >
              <span>Preguntas y soporte</span>
              <span>💬</span>
            </a>
          </div>

          {/* Formulario opcional para registrarse en la beta o novedades */}
          <div className="p-8 rounded-3xl bg-[#0b2450]/70 border border-blue-800/40 text-left max-w-xl mx-auto shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold font-display text-white mb-2 text-center">
              ¿Quieres acompañamiento o acceso directo?
            </h3>
            <p className="text-xs text-slate-300 text-center mb-6">
              Déjanos tus datos y nos pondremos en contacto contigo para ayudarte a registrar tu negocio.
            </p>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-bold text-emerald-400 text-lg">
                  ¡Muchas gracias!
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  Hemos registrado tus datos. Te contactaremos pronto. Mientras tanto, puedes descargar la app en Google Play.
                </p>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  Descargar ahora en Google Play →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Tu ciudad o comuna"
                    value={formData.ciudad}
                    onChange={(e) =>
                      setFormData({ ...formData, ciudad: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Tu correo Gmail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="¿A qué te dedicas o qué ofreces? (opcional)"
                  value={formData.rubro}
                  onChange={(e) =>
                    setFormData({ ...formData, rubro: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-display text-sm tracking-wide transition-all shadow-[0_8px_20px_rgba(245,160,32,0.3)]"
                >
                  Quiero probar ENLACE →
                </button>
                <p className="text-[11px] text-slate-400 text-center">
                  Al enviar, aceptas que te contactemos para darte acceso y guiarte en tu registro.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          FOOTER INSTITUCIONAL DE LA AGENCIA
      ======================================================== */}
      <Footer />
    </main>
  );
}
