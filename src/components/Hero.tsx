"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  // Estado para la interactividad del mapa conceptual
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="hero relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'calc(var(--navH) + 40px) 24px 60px' }}>
      
      {/* Fondos originales intactos */}
      <div className="hero-bg"></div>
      <div className="hero-orb1"></div>
      <div className="hero-orb2"></div>

      {/* Contenedor Flex de 2 Columnas Independientes */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
        
        {/* COLUMNA IZQUIERDA: Textos y Botones (52%) */}
        <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0 shrink-0">
          
          <div className="hero-badge mb-6" style={{ animation: 'fadeUp 0.6s ease both' }}>
            <span className="hero-badge-dot"></span>
            Ecosistema de Herramientas Digitales
          </div>

          <h1 
            className="font-display font-[800] text-white w-full max-w-[500px]" 
            style={{ 
              fontSize: 'clamp(30px, 3.8vw, 44px)',
              lineHeight: 1.15, 
              marginBottom: '20px',
              animation: 'fadeUp 0.6s 0.1s ease both'
            }}
          >
            <span className="block whitespace-normal">Soluciones</span>
            <span className="block whitespace-normal">digitales para hacer</span>
            <span className="block whitespace-normal text-glow" style={{ color: 'var(--blue)' }}>crecer tu negocio</span>
          </h1>

          <p 
            className="text-[var(--text-secondary)] text-[16px] md:text-[17px] w-full max-w-[500px] mb-8 mx-auto lg:mx-0 leading-relaxed whitespace-normal" 
            style={{ animation: 'fadeUp 0.6s 0.2s ease both' }}
          >
            Creamos páginas web, aplicaciones, software y herramientas digitales para emprendedores y empresas. Además, desarrollamos productos propios y soluciones a medida.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
            style={{ animation: 'fadeUp 0.6s 0.3s ease both' }}
          >
            <Link 
              href="#soluciones" 
              className="bg-[var(--blue)] text-white px-8 py-4 rounded-xl font-bold text-[15px] sm:text-[16px] transition-all hover:bg-blue-600 hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Ver soluciones
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link 
              href="#productos" 
              className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-[15px] sm:text-[16px] transition-all hover:bg-white/10 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Explorar productos
            </Link>
          </div>

          <div 
            className="flex flex-wrap justify-center lg:justify-start gap-2 mt-8"
            style={{ animation: 'fadeUp 0.6s 0.4s ease both' }}
          >
            {['Páginas Web', 'Tiendas Online', 'Apps', 'Software', 'Automatización'].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold px-2.5 sm:px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-200 shadow-sm backdrop-blur-sm">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* COLUMNA DERECHA: HUB DE SOLUCIONES (Mapa Conceptual Interactivo) */}
        <div 
          className="w-full lg:w-[48%] flex items-center justify-center shrink-0 mt-8 lg:mt-0"
          style={{ animation: 'fadeUp 0.8s 0.3s ease both' }}
        >
          <div className="relative w-full max-w-[540px] aspect-square lg:aspect-auto lg:h-[540px] mx-auto flex items-center justify-center">
            
            {/* Glow trasero base */}
            <div className="absolute inset-4 bg-blue-500/10 blur-[100px] rounded-full z-0"></div>

            {/* CONECTORES SVG (Líneas del mapa conceptual) */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              {/* Nodo 1: Páginas Web (Arriba Izquierda) */}
              <path d="M 50 50 Q 25 50 25 41" fill="none" vectorEffect="non-scaling-stroke" 
                stroke={activeNode === 1 ? '#3B82F6' : '#1E3A8A'}
                strokeDasharray={activeNode === 1 ? 'none' : '4 4'}
                className={`transition-all duration-500 ${activeNode === 1 ? 'stroke-[3px] opacity-100' : 'stroke-[1.5px] opacity-40'}`} />
              
              {/* Nodo 2: Asesoría Digital (Abajo Izquierda) */}
              <path d="M 50 50 Q 25 50 25 59" fill="none" vectorEffect="non-scaling-stroke" 
                stroke={activeNode === 2 ? '#10B981' : '#1E3A8A'}
                strokeDasharray={activeNode === 2 ? 'none' : '4 4'}
                className={`transition-all duration-500 ${activeNode === 2 ? 'stroke-[3px] opacity-100' : 'stroke-[1.5px] opacity-40'}`} />

              {/* Nodo 3: Apps y Software (Arriba Derecha) */}
              <path d="M 50 50 Q 75 50 75 41" fill="none" vectorEffect="non-scaling-stroke" 
                stroke={activeNode === 3 ? '#A855F7' : '#1E3A8A'}
                strokeDasharray={activeNode === 3 ? 'none' : '4 4'}
                className={`transition-all duration-500 ${activeNode === 3 ? 'stroke-[3px] opacity-100' : 'stroke-[1.5px] opacity-40'}`} />

              {/* Nodo 4: Productos ENLACE (Abajo Derecha) */}
              <path d="M 50 50 Q 75 50 75 59" fill="none" vectorEffect="non-scaling-stroke" 
                stroke={activeNode === 4 ? '#F97316' : '#1E3A8A'}
                strokeDasharray={activeNode === 4 ? 'none' : '4 4'}
                className={`transition-all duration-500 ${activeNode === 4 ? 'stroke-[3px] opacity-100' : 'stroke-[1.5px] opacity-40'}`} />
            </svg>

            {/* NÚCLEO CENTRAL (Logo) */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-28 h-28 sm:w-[120px] sm:h-[120px] bg-[#0A192F]/90 backdrop-blur-xl border-2 rounded-full flex items-center justify-center transition-all duration-500 cursor-default ${activeNode === 0 ? 'border-blue-400 shadow-[0_0_60px_rgba(59,130,246,0.6)] scale-110' : 'border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] scale-100'}`}
              onMouseEnter={() => setActiveNode(0)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <img src="/enlace-logo.png" alt="ENLACE" className="w-16 h-16 sm:w-[72px] sm:h-[72px] object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
            </div>

            {/* GRID SEPARADO (Nodos) */}
            {/* Usamos un gap mucho más amplio para alejar las tarjetas del centro y permitir que se vean los conectores */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-20 sm:gap-x-12 sm:gap-y-24 w-full h-fit relative z-20 pointer-events-none">
              
              {/* Columna Izquierda */}
              <div className="flex flex-col gap-20 sm:gap-24 pointer-events-auto">
                
                {/* NODO 1: Páginas Web */}
                <div 
                  className={`bg-[#061224]/80 backdrop-blur-md border rounded-2xl p-5 sm:p-6 transition-all duration-500 cursor-default transform -translate-x-2 sm:-translate-x-4 ${activeNode === 1 ? 'border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-105 z-30' : 'border-blue-500/20 shadow-xl scale-100'} ${activeNode !== null && activeNode !== 1 && activeNode !== 0 ? 'opacity-40 grayscale-[50%]' : 'opacity-100'}`}
                  onMouseEnter={() => setActiveNode(1)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-1">Páginas Web</h3>
                  <p className="text-[12px] sm:text-[13px] text-slate-400 leading-tight">Sitios corporativos y Tiendas Online</p>
                </div>

                {/* NODO 2: Asesoría Digital */}
                <div 
                  className={`bg-[#061224]/80 backdrop-blur-md border rounded-2xl p-5 sm:p-6 transition-all duration-500 cursor-default transform -translate-x-2 sm:-translate-x-4 ${activeNode === 2 ? 'border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-105 z-30' : 'border-emerald-500/20 shadow-xl scale-100'} ${activeNode !== null && activeNode !== 2 && activeNode !== 0 ? 'opacity-40 grayscale-[50%]' : 'opacity-100'}`}
                  onMouseEnter={() => setActiveNode(2)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-1">Asesoría Digital</h3>
                  <p className="text-[12px] sm:text-[13px] text-slate-400 leading-tight">Estrategia, SEO y automatización</p>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="flex flex-col gap-20 sm:gap-24 pointer-events-auto">
                
                {/* NODO 3: Apps y Software */}
                <div 
                  className={`bg-[#061224]/80 backdrop-blur-md border rounded-2xl p-5 sm:p-6 transition-all duration-500 cursor-default transform translate-x-2 sm:translate-x-4 ${activeNode === 3 ? 'border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.3)] scale-105 z-30' : 'border-purple-500/20 shadow-xl scale-100'} ${activeNode !== null && activeNode !== 3 && activeNode !== 0 ? 'opacity-40 grayscale-[50%]' : 'opacity-100'}`}
                  onMouseEnter={() => setActiveNode(3)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-1">Apps y Software</h3>
                  <p className="text-[12px] sm:text-[13px] text-slate-400 leading-tight">Sistemas y apps a medida</p>
                </div>

                {/* NODO 4: Productos ENLACE */}
                <div 
                  className={`bg-[#061224]/80 backdrop-blur-md border rounded-2xl p-5 sm:p-6 transition-all duration-500 cursor-default transform translate-x-2 sm:translate-x-4 ${activeNode === 4 ? 'border-orange-500/60 shadow-[0_0_30px_rgba(249,115,22,0.3)] scale-105 z-30' : 'border-orange-500/20 shadow-xl scale-100'} ${activeNode !== null && activeNode !== 4 && activeNode !== 0 ? 'opacity-40 grayscale-[50%]' : 'opacity-100'}`}
                  onMouseEnter={() => setActiveNode(4)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/30">
                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-3">Productos ENLACE</h3>
                  <div className="flex flex-col gap-2.5">
                    <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-md flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></span>
                      <span className="text-[11px] sm:text-[13px] text-slate-300 font-medium truncate">Constructor Pro</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-md flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span className="text-[11px] sm:text-[13px] text-slate-300 font-medium truncate">Enlace Barbería</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-md flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                      <span className="text-[11px] sm:text-[13px] text-slate-300 font-medium truncate">Red Social</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
