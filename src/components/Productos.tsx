import React from 'react';
import Link from 'next/link';

// Tipado y configuración de temas para Tailwind (se deben usar clases completas)
type ThemeColor = 'orange' | 'emerald' | 'blue' | 'slate' | 'indigo' | 'purple';
type Status = 'Disponible' | 'Próximamente' | 'En desarrollo' | 'A medida';

const themeMaps: Record<ThemeColor, { bg: string, border: string, hoverBorder: string, shadow: string, icon: string, titleHover: string, link: string }> = {
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/30",
    shadow: "hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)]",
    icon: "text-orange-400",
    titleHover: "group-hover:text-orange-400",
    link: "text-orange-400 hover:text-orange-300"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/30",
    shadow: "hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]",
    icon: "text-emerald-400",
    titleHover: "group-hover:text-emerald-400",
    link: "text-emerald-400 hover:text-emerald-300"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/30",
    shadow: "hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]",
    icon: "text-blue-400",
    titleHover: "group-hover:text-blue-400",
    link: "text-blue-400 hover:text-blue-300"
  },
  slate: {
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    hoverBorder: "hover:border-slate-500/30",
    shadow: "hover:shadow-[0_10px_30px_rgba(100,116,139,0.1)]",
    icon: "text-slate-400",
    titleHover: "group-hover:text-slate-300",
    link: ""
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/30",
    shadow: "hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]",
    icon: "text-indigo-400",
    titleHover: "group-hover:text-indigo-400",
    link: ""
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/30",
    shadow: "hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]",
    icon: "text-purple-400",
    titleHover: "group-hover:text-purple-400",
    link: ""
  }
};

const statusClasses: Record<Status, string> = {
  'Disponible': "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  'Próximamente': "text-slate-400 bg-slate-500/10 border-slate-500/20",
  'En desarrollo': "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  'A medida': "text-purple-400 bg-purple-500/10 border-purple-500/20"
};

// Data array base que permite fácil escalabilidad futura
const productosData = [
  // FILA 1: Existentes
  {
    title: 'Constructor Pro',
    description: 'Presupuestos, partidas, APU y herramientas de gestión para profesionales de la construcción.',
    link: '/constructor-pro',
    linkText: 'Conocer Constructor Pro',
    status: 'Disponible' as Status,
    theme: 'orange' as ThemeColor,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 scale-95 group-hover:scale-100">
        <div className="w-3/4 h-[80%] border-2 border-orange-500/30 rounded-t-xl bg-[#071324] flex flex-col p-3 gap-3 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
          <div className="w-1/3 h-2 bg-orange-500/50 rounded-full"></div>
          <div className="flex gap-2">
            <div className="w-1/2 h-8 bg-orange-500/20 rounded-md border border-orange-500/20"></div>
            <div className="w-1/2 h-8 bg-orange-500/20 rounded-md border border-orange-500/20"></div>
          </div>
          <div className="flex-1 w-full bg-white/5 rounded-md flex flex-col gap-2 p-2">
            <div className="w-full h-2 bg-white/10 rounded-full"></div>
            <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Enlace Barbería',
    description: 'Agenda, reservas y gestión digital para barberías, peluquerías y profesionales del rubro.',
    link: '/peluqueria',
    linkText: 'Conocer Enlace Barbería',
    status: 'Disponible' as Status,
    theme: 'emerald' as ThemeColor,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 scale-95 group-hover:scale-100">
        <div className="w-2/3 h-[90%] border-2 border-emerald-500/30 rounded-3xl bg-[#071324] flex flex-col p-3 gap-3 shadow-[0_0_20px_rgba(16,185,129,0.2)] mt-6">
          <div className="w-1/2 h-2 bg-emerald-500/50 rounded-full mx-auto mb-2"></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-emerald-500/20 rounded-lg border border-emerald-500/20"></div>
            <div className="h-10 bg-white/5 rounded-lg border border-white/10"></div>
          </div>
          <div className="flex-1 w-full bg-emerald-500/10 rounded-lg border border-emerald-500/20"></div>
        </div>
      </div>
    )
  },
  {
    title: 'Enlace Red Social',
    description: 'Una comunidad digital para conectar personas, emprendedores, servicios y oportunidades cercanas.',
    link: '#',
    linkText: 'Conocer Red Social',
    status: 'Disponible' as Status,
    theme: 'blue' as ThemeColor,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 scale-95 group-hover:scale-100">
        <div className="w-[85%] h-[75%] border-2 border-blue-500/30 rounded-lg bg-[#071324] flex flex-col p-3 gap-3 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/50"></div>
            <div className="w-1/3 h-2 bg-blue-500/30 rounded-full"></div>
          </div>
          <div className="flex-1 w-full bg-blue-500/10 rounded-md border border-blue-500/20"></div>
        </div>
      </div>
    )
  },

  // FILA 2: Futuras
  {
    title: 'Próxima herramienta',
    description: 'Nueva solución digital en preparación para ampliar el ecosistema ENLACE.',
    link: null,
    status: 'Próximamente' as Status,
    theme: 'slate' as ThemeColor,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="w-2/3 h-2/3 border-2 border-dashed border-slate-500/30 rounded-xl flex items-center justify-center bg-[#071324]/50">
          <svg className="w-8 h-8 text-slate-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    )
  },
  {
    title: 'Nueva solución ENLACE',
    description: 'Seguimos creando herramientas digitales para nuevas necesidades y rubros.',
    link: null,
    status: 'En desarrollo' as Status,
    theme: 'indigo' as ThemeColor,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-95 group-hover:scale-100">
        <div className="w-[80%] h-[70%] border-2 border-indigo-500/30 rounded-xl bg-[#071324] flex items-center justify-center p-4 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
          <div className="flex gap-4 items-center">
            <div className="w-3 h-12 bg-indigo-500/20 rounded-full animate-pulse"></div>
            <div className="w-3 h-8 bg-indigo-500/40 rounded-full mt-4"></div>
            <div className="w-3 h-16 bg-indigo-500/30 rounded-full mb-4"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Tu idea puede ser la siguiente',
    description: 'También desarrollamos soluciones digitales personalizadas según tu proyecto o negocio.',
    link: null,
    status: 'A medida' as Status,
    theme: 'purple' as ThemeColor,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-95 group-hover:scale-100">
        <div className="w-3/4 h-[80%] border-2 border-purple-500/30 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent flex items-center justify-center border-dashed">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
];

export default function Productos() {
  return (
    <section id="productos" className="bg-band-down py-24 relative z-10 flex flex-col items-center w-full" >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="w-full flex flex-col items-center justify-center mb-16 mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Productos ENLACE
          </div>
          
          <h2 className="font-display font-[800] text-white text-[clamp(28px,4vw,40px)] leading-[1.2] w-full max-w-[700px] mb-4 text-center mx-auto">
            Herramientas creadas para resolver necesidades reales
          </h2>
          
          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] w-full max-w-[700px] leading-relaxed text-center mx-auto">
            Además de desarrollar soluciones para nuestros clientes, creamos productos propios pensados para distintos tipos de negocios y actividades.
          </p>
        </div>

        {/* Grid de Productos (3 Columnas en Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productosData.map((item, index) => {
            const theme = themeMaps[item.theme];
            return (
              <div 
                key={index} 
                className={`flex flex-col bg-[#061224]/60 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${theme.hoverBorder} ${theme.shadow}`}
              >
                {/* Espacio Visual / Mockup Placeholder */}
                <div className="h-52 relative overflow-hidden bg-[#0A192F] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/90 to-transparent z-10" />
                  
                  {/* Badge de Estado Flotante sobre el Mockup */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md border backdrop-blur-md ${statusClasses[item.status]}`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Render del Visual Abstracto */}
                  {item.mockup}
                </div>
                
                {/* Contenido */}
                <div className="p-8 flex flex-col flex-1 relative z-20 -mt-8">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${theme.bg} ${theme.border} ${theme.icon}`}>
                    {item.icon}
                  </div>
                  
                  <h3 className={`text-[22px] font-bold text-white mb-3 transition-colors ${theme.titleHover}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-[15px] text-slate-400 leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>
                  
                  {/* Enlace dinámico (o espacio vacío si no hay enlace) */}
                  {item.link ? (
                    <Link href={item.link} className={`inline-flex items-center gap-2 text-[14px] font-bold transition-colors w-fit group/btn ${theme.link}`}>
                      {item.linkText}
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="h-5"></div> /* Mantiene la misma altura que tendría un botón para que las cards queden alineadas */
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

