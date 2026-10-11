"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NuevaAppPage() {
  const waText = encodeURIComponent('Hola! Tengo una idea para una nueva herramienta digital en ENLACE.');

  return (
    <div className="min-h-screen bg-[hsl(222,80%,11%)] text-slate-200 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-blue-500/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-orange-500/15 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Link
            href="/#productos"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al ecosistema
          </Link>

          {/* Icono */}
          <div className="w-20 h-20 rounded-3xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 mb-6 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              <path d="M5 3v4"/>
              <path d="M19 17v4"/>
              <path d="M3 5h4"/>
              <path d="M17 19h4"/>
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            EN DESARROLLO CONTINUO
          </div>

          <h1 className="font-display font-extrabold text-white text-[clamp(2.4rem,6vw,4rem)] leading-[1.08] mb-5">
            ¿Cuál será la siguiente?
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Estamos creando herramientas digitales hechas a la medida de rubros y empresas reales. Cuéntanos qué proceso o tarea necesitas resolver y lo construimos.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
            >
              <span>Cuéntanos tu requerimiento</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href={`https://wa.me/56941278725?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
            >
              Proponer por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
