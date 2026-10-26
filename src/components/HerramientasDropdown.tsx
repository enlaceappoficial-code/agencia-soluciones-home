"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface ToolItem {
  id: string;
  name: string;
  short: string;
  description: string;
  logo?: string;
  icon?: React.ReactNode;
  status: 'live' | 'soon' | 'dev';
  href: string;
  external?: boolean;
  accent: 'orange' | 'blue' | 'green' | 'muted';
}

const ECOSYSTEM_TOOLS: ToolItem[] = [
  {
    id: 'red-social',
    name: 'Red Social ENLACE',
    short: 'Red Social',
    description: 'Plataforma hiperlocal para conectar y visibilizar emprendimientos en Chile',
    logo: '/enlace-logo.png',
    status: 'live',
    href: '/red-social',
    external: false,
    accent: 'green',
  },
  {
    id: 'constructor-pro',
    name: 'Enlace Constructor Pro',
    short: 'Constructor Pro',
    description: 'Presupuestos, APU y contratos para obras',
    logo: '/ecosistema/constructor-pro-logo.png',
    status: 'live',
    href: '/constructor-pro',
    external: false,
    accent: 'orange',
  },
  {
    id: 'ecp-medidas',
    name: 'ECP Medidas de Terreno',
    short: 'Medidas de Terreno',
    description: 'App móvil oficial: áreas irregulares (Herón), cubicaciones y visitas',
    logo: '/ecosistema/constructor-pro-logo.png',
    status: 'live',
    href: 'https://medidas.redenlace.cl',
    external: true,
    accent: 'blue',
  },
  {
    id: 'barberia-pro',
    name: 'Enlace Barbería Pro',
    short: 'Barbería Pro',
    description: 'Reservas online, panel y control avanzado para barberías',
    logo: '/ecosistema/logo-barberia.png',
    status: 'live',
    href: '/peluqueria',
    external: false,
    accent: 'orange',
  },
  {
    id: 'restoran',
    name: 'Enlace Restorán',
    short: 'Restorán',
    description: 'Gestión de mesas, pedidos y menú digital para restaurantes y locales de comida',
    icon: (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2v20M18 8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a6 6 0 0 0 6 6v6h2v-6a6 6 0 0 0 6-6V8z"/>
        <path d="M6 2v4M10 2v4"/>
      </svg>
    ),
    status: 'soon',
    href: 'https://redenlace.cl/restoran',
    external: true,
    accent: 'blue',
  },
  {
    id: 'agenda-pro',
    name: 'Enlace Agenda Pro',
    short: 'Agenda Pro',
    description: 'Agenda para equipos con control avanzado, pagos y confirmaciones automáticas',
    icon: (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
        <path d="M12 14v3l2 1"/>
      </svg>
    ),
    status: 'soon',
    href: 'https://redenlace.cl/agenda-pro',
    external: true,
    accent: 'blue',
  },
  {
    id: 'gestion',
    name: 'Enlace Gestión',
    short: 'Gestión',
    description: 'Control simple de clientes, ventas y tareas para tu negocio en un solo lugar',
    icon: (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.29 7 12 12 20.71 7"/>
        <line x1="12" x2="12" y1="22" y2="12"/>
      </svg>
    ),
    status: 'soon',
    href: 'https://redenlace.cl/gestion',
    external: true,
    accent: 'blue',
  },
  {
    id: 'nueva-app',
    name: 'Nueva App',
    short: 'Nueva App',
    description: 'En desarrollo — ¿cuál será la siguiente solución que necesitas?',
    icon: (
      <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M19 17v4"/>
        <path d="M3 5h4"/>
        <path d="M17 19h4"/>
      </svg>
    ),
    status: 'dev',
    href: 'https://redenlace.cl/nueva-app',
    external: true,
    accent: 'muted',
  },
];

const STATUS_BADGES = {
  live: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
  soon: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  dev: 'bg-slate-700/40 text-slate-400 border border-slate-600/40',
};

const STATUS_LABELS = {
  live: 'LIVE',
  soon: 'PRONTO',
  dev: 'DEV',
};

export default function HerramientasDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const liveCount = ECOSYSTEM_TOOLS.filter((t) => t.status === 'live').length;

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Botón Herramientas con formato Neón Naranjo Original */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
          isOpen
            ? 'bg-[hsla(30,98%,57%,0.22)] border-[hsl(30,98%,57%)] text-[hsl(30,98%,57%)] shadow-[0_0_24px_rgba(249,115,22,0.45)] scale-[1.02]'
            : 'bg-gradient-to-r from-[hsla(30,98%,57%,0.18)] to-[hsla(30,98%,57%,0.08)] text-[hsl(30,98%,57%)] border-[hsla(30,98%,57%,0.45)] hover:from-[hsla(30,98%,57%,0.28)] hover:to-[hsla(30,98%,57%,0.14)] hover:border-[hsl(30,98%,57%)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95'
        }`}
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        {/* Ícono Sparkles neón naranja */}
        <svg
          className="h-4 w-4 text-[hsl(30,98%,57%)] transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          <path d="M5 3v4"/>
          <path d="M19 17v4"/>
          <path d="M3 5h4"/>
          <path d="M17 19h4"/>
        </svg>

        <span>Herramientas</span>

        {/* Chevron rotatorio */}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menú Dropdown Ecosistema ENLACE */}
      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-3 w-[360px] sm:w-[380px] max-w-[calc(100vw-32px)] origin-top-right rounded-2xl border border-[hsla(220,55%,26%,0.8)] bg-[#091526]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(37,99,235,0.18)] p-2 animate-fadeIn"
          style={{ animationDuration: '200ms' }}
        >
          {/* Header del dropdown */}
          <div className="px-3 pb-2 pt-2.5">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              ECOSISTEMA ENLACE
            </p>
          </div>

          <div className="h-px bg-white/10 mx-2 mb-1" />

          {/* Lista de Apps / Herramientas */}
          <ul className="py-1 space-y-1 max-h-[460px] overflow-y-auto custom-scrollbar">
            {ECOSYSTEM_TOOLS.map((item) => {
              const isExternal = item.external;
              const content = (
                <div className="group/item flex items-center gap-3 rounded-xl px-2.5 py-2 transition-all duration-200 hover:bg-white/5 active:bg-white/10 cursor-pointer">
                  {/* Contenedor de Logo o Ícono */}
                  <div className="grid h-11 w-11 place-items-center rounded-xl shrink-0 bg-white/5 border border-white/10 group-hover/item:border-blue-500/30 transition-colors">
                    {item.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={`object-contain ${
                          item.id === 'red-social'
                            ? 'h-8 w-8 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                            : item.id === 'constructor-pro'
                            ? 'h-8 w-8'
                            : 'h-9 w-9'
                        }`}
                      />
                    ) : (
                      <div className="flex items-center justify-center">
                        {item.icon}
                      </div>
                    )}
                  </div>

                  {/* Nombre y Descripción */}
                  <div className="flex-1 min-w-0 pr-1">
                    <p className="font-display font-bold text-sm text-white leading-tight group-hover/item:text-blue-300 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400 leading-snug mt-0.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Badge de Estado */}
                  <span
                    className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md shrink-0 ${
                      STATUS_BADGES[item.status]
                    }`}
                  >
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>
              );

              return (
                <li key={item.id}>
                  {isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block text-inherit no-underline"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-inherit no-underline"
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="h-px bg-white/10 mx-2 mt-1 mb-1" />

          {/* Footer del dropdown */}
          <div className="flex items-center justify-between px-3 py-2 text-xs">
            <span className="text-slate-400 font-medium">
              {ECOSYSTEM_TOOLS.length} apps · {liveCount} activas
            </span>

            <Link
              href="#productos"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center gap-1.5 font-bold text-[hsl(209,96%,56%)] hover:text-blue-300 transition-colors"
            >
              <span>Ver todas</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
