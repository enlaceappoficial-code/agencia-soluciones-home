import React from 'react';

export default function Nosotros() {
  return (
    <section 
      id="nosotros" 
      className="pt-10 md:pt-14 pb-16 md:pb-20 relative z-10 flex flex-col items-center w-full" 
      
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-14 w-full">
          
          {/* Columna Izquierda: ~48% */}
          <div className="w-full lg:w-[48%] max-w-[530px] flex flex-col text-left">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Sobre ENLACE
            </div>
            
            <h2 className="font-display font-[800] text-white text-[clamp(28px,3.8vw,38px)] leading-[1.2] mb-5">
              Tecnología pensada para necesidades reales
            </h2>
            
            <p className="text-[17px] md:text-[18px] font-semibold text-white/90 leading-relaxed mb-5">
              ENLACE nace con una idea simple: la tecnología debe ayudar a las personas y a los negocios, no complicarlos.
            </p>
            
            <p className="text-slate-400 text-[15px] leading-relaxed mb-5">
              Creamos páginas web, aplicaciones, software y herramientas digitales adaptadas a necesidades reales. Desde una presencia web profesional hasta una solución desarrollada completamente a medida, buscamos transformar ideas en herramientas útiles, simples y funcionales.
            </p>

            <p className="text-slate-400 text-[15px] leading-relaxed">
              Además de desarrollar proyectos para nuestros clientes, también creamos nuestras propias soluciones, como <strong className="text-white">Constructor Pro</strong>, <strong className="text-white">Enlace Barbería</strong> y <strong className="text-white">Enlace Red Social</strong>, formando un ecosistema digital que seguirá creciendo.
            </p>
          </div>

          {/* Columna Derecha: ~45% - Con offset superior en desktop para alinear con el título H2 */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4.5 sm:gap-5 lg:pt-[54px]">
            
            {/* Bloque 1: Soluciones a medida */}
            <div className="bg-[#061224]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 sm:p-6 flex items-start gap-4.5 sm:gap-5 hover:border-blue-500/30 hover:bg-[#0A192F]/80 transition-all duration-300 group shadow-lg">
              <div className="w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] sm:min-w-[48px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex flex-col mt-0.5">
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] mb-1 group-hover:text-blue-300 transition-colors">Soluciones a medida</h3>
                <p className="text-slate-400 text-[13px] sm:text-[14px] leading-relaxed">Cada proyecto parte desde una necesidad real.</p>
              </div>
            </div>

            {/* Bloque 2: Productos propios (Acento Naranja) */}
            <div className="bg-[#061224]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 sm:p-6 flex items-start gap-4.5 sm:gap-5 hover:border-orange-500/30 hover:bg-[#0A192F]/80 transition-all duration-300 group shadow-lg">
              <div className="w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] sm:min-w-[48px] rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="flex flex-col mt-0.5">
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] mb-1 group-hover:text-orange-300 transition-colors">Productos propios</h3>
                <p className="text-slate-400 text-[13px] sm:text-[14px] leading-relaxed">Desarrollamos herramientas que también forman parte del ecosistema ENLACE.</p>
              </div>
            </div>

            {/* Bloque 3: Acompañamiento */}
            <div className="bg-[#061224]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 sm:p-6 flex items-start gap-4.5 sm:gap-5 hover:border-blue-500/30 hover:bg-[#0A192F]/80 transition-all duration-300 group shadow-lg">
              <div className="w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] sm:min-w-[48px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex flex-col mt-0.5">
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] mb-1 group-hover:text-blue-300 transition-colors">Acompañamiento</h3>
                <p className="text-slate-400 text-[13px] sm:text-[14px] leading-relaxed">No solo entregamos un proyecto: podemos seguir mejorándolo y haciéndolo crecer.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

