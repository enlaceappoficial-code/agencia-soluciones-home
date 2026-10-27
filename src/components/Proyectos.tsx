import React from 'react';
import Link from 'next/link';

// Interfaz para definir la estructura de un Proyecto
interface ProyectoData {
  title: string;
  type: string;
  description: string;
  chips: string[];
  link: string | null;
  imagePlaceholderText: string;
  image?: string; 
  isReference?: boolean; // Propiedad para identificar si es un proyecto modelo
}

// Arreglo de datos actualizado con proyectos reales y referencias
const proyectosData: ProyectoData[] = [
  // --- FILA 1: PROYECTOS REALES ---
  {
    title: 'Bajo Deslinde',
    type: 'Página Web Corporativa',
    description: 'Sitio institucional para servicios de construcción, inspección y asesorías.',
    chips: ['Responsive', 'SEO', 'WhatsApp', 'Correo Corporativo'],
    link: 'https://www.bajodeslinde.cl/', 
    imagePlaceholderText: 'Captura Bajo Deslinde',
    image: '/proyectos/bajo-deslinde.png'
  },
  {
    title: 'Piscina Black-F',
    type: 'Página / Landing Comercial',
    description: 'Proyecto digital orientado a presentar servicios y facilitar el contacto comercial.',
    chips: ['Responsive', 'Diseño Web', 'Contacto', 'Presentación Comercial'],
    link: 'https://www.piscinablackf.cl/', 
    imagePlaceholderText: 'Captura Piscina Black-F',
    image: '/proyectos/piscina-black-f.png'
  },
  {
    title: 'Estampa Pau',
    type: 'Página Web Comercial',
    description: 'Sitio pensado para mostrar productos o servicios de forma clara y profesional.',
    chips: ['Responsive', 'Catálogo', 'WhatsApp', 'Diseño Web'],
    link: 'https://stamppau-proyecto-web.vercel.app/', 
    imagePlaceholderText: 'Captura Estampa Pau',
    image: '/proyectos/estampa-pau.png'
  },
  {
    title: 'Mentrix Estudios',
    type: 'PORTAL GAMING & APLICACIONES PWA',
    description: 'Estudio oficial de videojuegos inteligentes, catálogo interactivo de lanzamientos y apps web PWA instalables.',
    chips: ['Responsive', 'Next.js', 'PWA Web', 'Videojuegos'],
    link: 'https://web-mentrix-estudios.vercel.app/', 
    imagePlaceholderText: 'Captura Mentrix Estudios',
    image: '/proyectos/mentrix-estudios.png'
  },

  // --- FILA 2: PROYECTOS MODELO / REFERENCIAS ---
  {
    title: 'Tu tienda de ropa puede ser la siguiente',
    type: 'TIENDA ONLINE / MODA',
    description: 'Diseño elegante para marcas de moda, catálogos de productos, colecciones destacadas y venta online con imagen profesional.',
    chips: ['Tienda Online', 'Catálogo', 'Responsive', 'Diseño Premium'],
    link: '#', 
    imagePlaceholderText: 'Referencia Moda',
    image: '/proyectos/modelo-moda.jpg',
    isReference: true
  },
  {
    title: 'Tu local de comida puede estar aquí',
    type: 'PÁGINA WEB / RESTAURANTE',
    description: 'Sitios pensados para restaurantes, cafeterías o locales gastronómicos, con menú visual, reservas y presentación atractiva de productos.',
    chips: ['Menú Digital', 'Reservas', 'Responsive', 'Negocio Local'],
    link: '#', 
    imagePlaceholderText: 'Referencia Restaurante',
    image: '/proyectos/modelo-restaurante.jpg',
    isReference: true
  },
  {
    title: 'Tu centro de belleza puede ser el próximo',
    type: 'PÁGINA WEB / BELLEZA',
    description: 'Web ideal para peluquerías, estudios de belleza o bienestar, con reservas, servicios destacados y una imagen moderna y cercana.',
    chips: ['Reservas', 'Servicios', 'Responsive', 'Imagen de Marca'],
    link: '#', 
    imagePlaceholderText: 'Referencia Belleza',
    image: '/proyectos/modelo-belleza.jpg',
    isReference: true
  }
];

export default function Proyectos() {
  // Separar los proyectos reales de los modelos para poder inyectar un separador en medio
  const proyectosReales = proyectosData.filter((item) => !item.isReference);
  const proyectosModelos = proyectosData.filter((item) => item.isReference);

  // Función para renderizar una tarjeta individual
  const renderCard = (item: ProyectoData, index: number) => (
    <div 
      key={index}
      className="flex flex-col bg-[#061224]/60 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] transition-all duration-300 relative"
    >
      {/* Etiqueta Visual Flotante para Proyectos Modelo */}
      {item.isReference && (
        <div className="absolute top-4 right-4 z-30 bg-purple-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md border border-purple-400/30">
          Proyecto Modelo
        </div>
      )}

      {/* Área de la Imagen / Placeholder */}
      <div className="relative w-full aspect-[16/10] bg-[#0A192F] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* Simulación de barra superior de navegador en el placeholder (siempre visible) */}
        <div className="absolute top-0 left-0 w-full h-6 bg-[#061224] flex items-center px-3 gap-1.5 z-20 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        </div>

        {item.image ? (
          /* Contenedor extra para la imagen real, respetando el borde superior del "navegador" */
          <div className="absolute top-6 left-0 w-full h-[calc(100%-24px)] overflow-hidden z-10">
            <img 
              src={item.image} 
              alt={item.title} 
              className={`w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ${item.isReference ? 'opacity-90 group-hover:opacity-100' : ''}`}
            />
          </div>
        ) : (
          /* Elementos del Placeholder si no hay imagen */
          <>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            <svg className="w-10 h-10 text-slate-600 mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest relative z-10 bg-[#0A192F] px-2 text-center mt-2">
              {item.imagePlaceholderText}
            </span>
          </>
        )}
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Tipo de proyecto */}
        <span className="text-blue-400 text-[12px] font-bold uppercase tracking-wider mb-2 block">
          {item.type}
        </span>
        
        {/* Título */}
        <h3 className="text-[22px] font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {item.title}
        </h3>
        
        {/* Descripción */}
        <p className="text-[15px] text-slate-400 leading-relaxed mb-6 flex-1">
          {item.description}
        </p>

        {/* Chips de tecnologías/servicios */}
        <div className="flex flex-wrap gap-2 mb-8">
          {item.chips.map((chip, chipIdx) => (
            <span 
              key={chipIdx} 
              className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 text-[11px] font-medium rounded-md"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Botón dinámico según el estado del link */}
        {item.link ? (
          item.link.startsWith('http') ? (
            <a 
              href={item.link} 
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto inline-flex items-center justify-center w-full py-3.5 px-4 bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 rounded-xl text-white hover:text-blue-300 text-[14px] font-bold transition-all gap-2 group/btn ${item.isReference ? 'hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300' : ''}`}
            >
              {item.isReference ? 'Ver referencia' : 'Ver proyecto'}
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <Link 
              href={item.link} 
              className={`mt-auto inline-flex items-center justify-center w-full py-3.5 px-4 bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 rounded-xl text-white hover:text-blue-300 text-[14px] font-bold transition-all gap-2 group/btn ${item.isReference ? 'hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300' : ''}`}
            >
              {item.isReference ? 'Ver referencia' : 'Ver proyecto'}
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )
        ) : (
          <div className="mt-auto inline-flex items-center justify-center w-full py-3.5 px-4 bg-white/5 border border-white/5 rounded-xl text-slate-500 text-[14px] font-bold cursor-not-allowed">
            Próximamente
          </div>
        )}
      </div>

    </div>
  );

  return (
    <section id="proyectos" className="bg-band-up py-24 relative z-10 flex flex-col items-center w-full" >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Cabecera de Sección Principal */}
        <div className="w-full flex flex-col items-center justify-center mb-16 mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Proyectos
          </div>
          
          <h2 className="font-display font-[800] text-white text-[clamp(28px,4vw,40px)] leading-[1.2] w-full max-w-[700px] mb-4 mx-auto">
            Ideas que convertimos en soluciones digitales
          </h2>
          
          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] w-full max-w-[700px] leading-relaxed mx-auto">
            Conoce algunos de los proyectos que hemos desarrollado para emprendedores y negocios.
          </p>
        </div>

        {/* Primera Fila: GRID DE PROYECTOS REALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {proyectosReales.map((item, index) => renderCard(item, index))}
        </div>

        {/* Separador e Introducción a la Segunda Fila */}
        <div className="w-full flex flex-col items-center justify-center mt-24 mb-16 text-center">
          <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10"></div>
          <h3 className="text-[26px] md:text-[32px] font-bold text-white mb-4">
            Tu proyecto puede ser el siguiente
          </h3>
          <p className="text-slate-400 text-[16px] max-w-[650px] leading-relaxed">
            También desarrollamos páginas para distintos rubros. Explora estas referencias visuales para imaginar lo que ENLACE puede crear para ti.
          </p>
        </div>

        {/* Segunda Fila: GRID DE PROYECTOS MODELO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosModelos.map((item, index) => renderCard(item, index + proyectosReales.length))}
        </div>

      </div>
    </section>
  );
}

