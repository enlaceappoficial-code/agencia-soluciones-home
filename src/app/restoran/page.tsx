"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FEATURES = [
  'Menú digital con QR y categorías (bebidas, platos, postres)',
  'Gestión de mesas y estado de atención (libre, ocupada, en preparación)',
  'Pedidos por mesa con notas y extras (sin cebolla, alérgenos, etc.)',
  'Control de cocina: preparación, listo, entregado',
  'Caja y cierre de turno con resumen diario',
  'Reportes de ventas y productos más vendidos',
];

export default function RestoranPage() {
  const waText = encodeURIComponent('Hola! Me interesa Enlace Restorán, avísenme cuando esté disponible.');

  return (
    <div className="min-h-screen bg-[hsl(222,80%,11%)] text-slate-200 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-blue-500/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-orange-500/10 blur-[100px] pointer-events-none rounded-full" />

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
          <div className="w-20 h-20 rounded-3xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 mx-auto shadow-[0_0_40px_rgba(37,99,235,0.25)]">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2v20M18 8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a6 6 0 0 0 6 6v6h2v-6a6 6 0 0 0 6-6V8z"/>
              <path d="M6 2v4M10 2v4"/>
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-500/30 px-4 py-2 text-xs font-semibold text-blue-300 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            PRÓXIMAMENTE · Q3 2026
          </div>

          <h1 className="font-display font-extrabold text-white text-[clamp(2.4rem,6vw,4rem)] leading-[1.08] mb-5">
            Enlace Restorán
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Gestión de mesas, pedidos y menú digital para restaurantes y locales de comida.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <a
              href={`https://wa.me/56941278725?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Avísenme cuando salga</span>
            </a>

            <Link
              href="/#productos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
            >
              Ver otras herramientas
            </Link>
          </div>

          {/* Features Preview */}
          <div className="text-left bg-[#0A1A30]/80 border border-white/10 rounded-3xl p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-2">Qué incluirá</p>
            <h2 className="font-display font-extrabold text-2xl text-white mb-6">Lo que estamos construyendo</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <div key={i} className="bg-[#0D2444]/60 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="text-sm text-slate-200 leading-snug pt-1">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
