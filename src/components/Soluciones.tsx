import React from 'react';

const soluciones = [
  {
    title: 'Páginas Web',
    description: 'Sitios corporativos, landing pages y presencia digital profesional.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Tiendas Online',
    description: 'Catálogos, productos, pedidos y soluciones para vender online.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: 'Apps y Software',
    description: 'Aplicaciones web, móviles y sistemas desarrollados a medida.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Automatización',
    description: 'Digitalización de procesos, inteligencia artificial y reducción de tareas repetitivas.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: 'Asesoría Digital',
    description: 'Analizamos tu negocio y te ayudamos a definir qué tecnología necesitas.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Desarrollo a Medida',
    description: 'Si tu idea necesita una solución propia, la diseñamos y desarrollamos contigo.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export default function Soluciones() {
  return (
    <section id="soluciones" className="py-24 relative z-10 flex flex-col items-center w-full" >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="w-full flex flex-col items-center justify-center mb-16 mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Nuestros Servicios
          </div>
          
          <h2 className="font-display font-[800] text-white text-[clamp(28px,4vw,40px)] leading-[1.2] w-full max-w-[600px] mx-auto text-center mb-4">
            Soluciones para cada etapa de tu negocio
          </h2>
          
          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] w-full max-w-[650px] mx-auto text-center leading-relaxed">
            Desde una página web hasta un sistema completo, desarrollamos soluciones digitales adaptadas a lo que realmente necesitas.
          </p>
        </div>

        {/* Grid de Soluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soluciones.map((solucion, index) => (
            <div 
              key={index}
              className="bg-[#061224]/50 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 group"
            >
              {/* Contenedor del Icono */}
              <div className="w-12 h-12 rounded-xl bg-[#0A192F] border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors">
                {solucion.icon}
              </div>
              
              {/* Contenido */}
              <h3 className="text-[18px] font-bold text-white mb-3">
                {solucion.title}
              </h3>
              
              <p className="text-[14px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {solucion.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



