import React from 'react';

const pasosData = [
  {
    id: '1',
    title: 'Cuéntanos tu idea',
    desc: 'Nos cuentas qué necesitas, qué problema quieres resolver o qué quieres mejorar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: '2',
    title: 'Analizamos tu negocio',
    desc: 'Evaluamos la mejor alternativa: página web, app, software, automatización o solución a medida.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: '3',
    title: 'Diseñamos la solución',
    desc: 'Definimos estructura, funciones, diseño y alcance del proyecto.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    id: '4',
    title: 'Desarrollamos y probamos',
    desc: 'Construimos la solución y verificamos que funcione correctamente en distintos dispositivos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: '5',
    title: 'Publicamos y seguimos',
    desc: 'Ponemos el proyecto en marcha y podemos continuar con mejoras, soporte y nuevas funciones.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function Proceso() {
  return (
    <section id="proceso" className="bg-band-card py-24 relative z-10 flex flex-col items-center w-full" >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="w-full flex flex-col items-center justify-center mb-16 mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Nuestro proceso
          </div>
          
          <h2 className="font-display font-[800] text-white text-[clamp(28px,4vw,40px)] leading-[1.2] w-full max-w-[700px] mb-4 mx-auto">
            De una idea a una solución digital
          </h2>
          
          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] w-full max-w-[700px] leading-relaxed mx-auto">
            Te acompañamos desde la primera conversación hasta la puesta en marcha y evolución de tu proyecto.
          </p>
        </div>

        {/* Línea de Tiempo / Grid de Pasos - Ocupa el 100% del contenedor de 1200px alineado con el resto del sitio */}
        <div className="relative w-full">
          
          {/* Línea Conectora (Fondo) */}
          {/* Escritorio: Horizontal del 10% al 90% (del centro del paso 1 al centro del paso 5) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10 z-0"></div>
          {/* Móvil: Vertical */}
          <div className="md:hidden absolute top-[5%] bottom-[5%] left-[27px] w-[2px] bg-gradient-to-b from-blue-500/10 via-blue-500/30 to-blue-500/10 z-0"></div>

          {/* Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-6 relative z-10 w-full">
            {pasosData.map((paso) => (
              <div 
                key={paso.id} 
                className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center group gap-5 md:gap-6 w-full"
              >
                {/* Icono */}
                <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-[#061224] border border-blue-500/20 flex items-center justify-center relative shadow-lg group-hover:border-blue-500/50 group-hover:-translate-y-1 transition-all duration-300 z-10">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {paso.icon}
                  </div>
                  
                  {/* Etiqueta del número (Acento naranja) */}
                  <div className="absolute -top-2 -right-2 w-[26px] h-[26px] rounded-full bg-[#0A192F] border border-white/10 flex items-center justify-center text-[11px] font-bold text-orange-400 shadow-sm">
                    {paso.id}
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col items-start md:items-center text-left md:text-center w-full mt-1 md:mt-0">
                  <h3 className="text-white font-bold text-[16px] sm:text-[17px] mb-2 leading-tight group-hover:text-blue-300 transition-colors duration-300 w-full">
                    {paso.title}
                  </h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed w-full">
                    {paso.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

