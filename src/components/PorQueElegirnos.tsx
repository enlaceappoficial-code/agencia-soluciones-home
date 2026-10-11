import React from 'react';

const razonesData = [
  {
    title: 'Soluciones a medida',
    desc: 'No usamos una única fórmula. Adaptamos cada proyecto a la necesidad real del negocio.',
    accent: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: 'Acompañamiento cercano',
    desc: 'Te guiamos desde la idea inicial hasta la publicación y futuras mejoras.',
    accent: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Ecosistema propio',
    desc: 'Desarrollamos productos y herramientas propias, lo que nos permite seguir innovando y creciendo.',
    accent: true, // Acento naranja para el ecosistema
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: 'Pensado para crecer',
    desc: 'Creamos soluciones que pueden evolucionar con nuevas funciones, servicios y necesidades.',
    accent: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function PorQueElegirnos() {
  return (
    <section 
      id="por-que-enlace" 
      className="bg-band-down pt-12 md:pt-16 pb-20 md:pb-24 relative z-10 flex flex-col items-center w-full" 
      
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="w-full flex flex-col items-center justify-center mb-16 mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Por qué ENLACE
          </div>
          
          <h2 className="font-display font-[800] text-white text-[clamp(28px,4vw,38px)] leading-[1.2] w-full max-w-[760px] mb-4 mx-auto">
            Más que una página web, una solución pensada para tu negocio
          </h2>
          
          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] w-full max-w-[700px] leading-relaxed mx-auto">
            Combinamos desarrollo, diseño y acompañamiento para crear herramientas útiles, claras y preparadas para crecer contigo.
          </p>
        </div>

        {/* Grid de 4 Bloques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {razonesData.map((item, index) => (
            <div 
              key={index}
              className={`bg-[#061224]/70 backdrop-blur-md border rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 group shadow-lg ${
                item.accent 
                  ? 'border-orange-500/20 hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)]' 
                  : 'border-white/5 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]'
              }`}
            >
              {/* Contenedor del Icono */}
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 ${
                  item.accent
                    ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20'
                    : 'bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20'
                }`}
              >
                {item.icon}
              </div>

              {/* Título */}
              <h3 
                className={`font-bold text-[17px] mb-2 transition-colors ${
                  item.accent ? 'text-white group-hover:text-orange-300' : 'text-white group-hover:text-blue-300'
                }`}
              >
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-slate-400 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

