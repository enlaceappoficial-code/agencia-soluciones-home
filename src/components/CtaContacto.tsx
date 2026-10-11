import React from 'react';

export default function CtaContacto() {
  return (
    <section 
      id="contacto" 
      className="bg-band-beta pt-10 md:pt-14 pb-20 md:pb-28 relative z-10 flex flex-col items-center w-full" 
      
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Tarjeta Central Impactante */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#0A192F]/90 to-[#061224]/90 border border-blue-500/25 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center shadow-[0_0_80px_rgba(37,99,235,0.15)] backdrop-blur-xl">
          
          {/* Luces Glow decorativas de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[250px] bg-blue-500/20 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 right-10 w-[200px] h-[150px] bg-orange-500/10 blur-[80px] pointer-events-none rounded-full"></div>

          {/* Etiqueta */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-6 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            Hablemos
          </div>

          {/* Título */}
          <h2 className="font-display font-[800] text-white text-[clamp(28px,4.5vw,46px)] leading-[1.15] max-w-[720px] mb-5 relative z-10">
            ¿Tienes una idea? <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Hagámosla realidad.</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-slate-300 text-[16px] md:text-[18px] max-w-[650px] leading-relaxed mb-10 relative z-10">
            Cuéntanos qué quieres crear, mejorar o digitalizar. Te ayudamos a encontrar la solución adecuada para tu negocio o proyecto.
          </p>

          {/* Botones principales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-10 mb-10">
            
            {/* Botón WhatsApp (Principal - Azul Eléctrico) */}
            <a
              href="https://wa.me/56941278725?text=Hola!%20Tengo%20un%20proyecto%20y%20me%20gustar%C3%ADa%20conversar%20con%20ENLACE."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[15px] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {/* Icono de WhatsApp */}
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Hablar por WhatsApp</span>
            </a>

            {/* Botón Secundario (Oscuro con borde) */}
            <a
              href="mailto:info@redenlace.cl"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold text-[15px] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Cuéntanos tu proyecto</span>
              <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

          </div>

          {/* Contacto Directo: Email e Instagram con logo interactivo */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-8 text-[14px]">
            <a
              href="mailto:info@redenlace.cl"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#132238] border border-white/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400/50 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.5)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">info@redenlace.cl</span>
            </a>

            <a
              href="https://www.instagram.com/enlaceapp.oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#132238] border border-white/15 flex items-center justify-center text-white/90 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:border-pink-500/50 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(225,48,108,0.5)] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="font-medium">@enlaceapp.oficial</span>
            </a>
          </div>

          {/* Información Adicional Discreta */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[13px] text-slate-400 font-medium pt-6 border-t border-white/5 w-full max-w-[650px]">
            {['Desarrollo Web', 'Aplicaciones', 'Software', 'Automatización', 'Asesoría Digital'].map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-slate-200 transition-colors cursor-default">{item}</span>
                {idx < 4 && <span className="w-1.5 h-1.5 rounded-full bg-slate-600/70 hidden sm:inline-block"></span>}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

