"use client";

import React, { useState } from 'react';

// Opciones del Paso 1: ¿Qué necesitas?
const OPCIONES_PASO_1 = [
  {
    id: 'web',
    titulo: 'Página Web',
    descripcion: 'Corporativa, landing page o sitio informativo',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    titulo: 'Tienda Online',
    descripcion: 'Catálogo, carrito de compras y pagos en línea',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 'app',
    titulo: 'Aplicación',
    descripcion: 'App móvil (Android / iOS) o Progressive Web App',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'software',
    titulo: 'Software / Sistema',
    descripcion: 'Plataforma a medida, panel de control o gestión interna',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 4h16M9 4v16" />
      </svg>
    ),
  },
  {
    id: 'automatizacion',
    titulo: 'Automatización',
    descripcion: 'Bots, flujos de WhatsApp, CRM y procesos automáticos',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'asesoria',
    titulo: 'Asesoría Digital',
    descripcion: 'Diagnóstico técnico, arquitectura y orientación estratégica',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'no_seguro',
    titulo: 'No estoy seguro',
    descripcion: 'Tengo una idea pero necesito ayuda para definir el formato',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Opciones del Paso 2: ¿Para qué tipo de proyecto?
const OPCIONES_PASO_2 = [
  {
    id: 'emprendimiento',
    titulo: 'Emprendimiento',
    descripcion: 'Nuevo negocio o marca en crecimiento',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'empresa',
    titulo: 'Empresa',
    descripcion: 'Empresa constituida con operaciones activas',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'profesional',
    titulo: 'Profesional independiente',
    descripcion: 'Servicios profesionales, consultas o marca personal',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 'comercio',
    titulo: 'Comercio / Local',
    descripcion: 'Punto de venta físico, restaurante o negocio local',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'personal',
    titulo: 'Proyecto personal',
    descripcion: 'Iniciativa particular, portfolio o causa',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    id: 'otro',
    titulo: 'Otro',
    descripcion: 'Fundación, institución, comunidad o colectivo',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
  },
];

// Opciones del Paso 3: ¿En qué etapa estás?
const OPCIONES_PASO_3 = [
  {
    id: 'idea',
    titulo: 'Solo tengo la idea',
    descripcion: 'Quiero validar la viabilidad y saber por dónde comenzar',
  },
  {
    id: 'negocio_activo',
    titulo: 'Ya tengo un negocio funcionando',
    descripcion: 'Busco dar el salto digital para vender más o profesionalizarme',
  },
  {
    id: 'mejorar_web',
    titulo: 'Ya tengo una web y quiero mejorarla',
    descripcion: 'Necesito rediseño, modernización o mejor rendimiento y velocidad',
  },
  {
    id: 'nuevas_funciones',
    titulo: 'Ya tengo un sistema y necesito nuevas funciones',
    descripcion: 'Requiero integrar pasarelas, automatizaciones o módulos adicionales',
  },
  {
    id: 'desde_cero',
    titulo: 'Quiero empezar desde cero',
    descripcion: 'Busco un desarrollo integral completo llave en mano',
  },
];

interface FormData {
  queNecesitas: string;
  tipoProyecto: string;
  etapa: string;
  detalle: string;
  referencia: string;
  nombre: string;
  negocio: string;
  whatsapp: string;
  email: string;
  ciudad: string;
}

export default function EncuestaContacto() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    queNecesitas: '',
    tipoProyecto: '',
    etapa: '',
    detalle: '',
    referencia: '',
    nombre: '',
    negocio: '',
    whatsapp: '',
    email: '',
    ciudad: '',
  });

  const totalSteps = 5;

  const handleSelectOption = (field: 'queNecesitas' | 'tipoProyecto' | 'etapa', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1 && !formData.queNecesitas) {
      newErrors.queNecesitas = 'Por favor selecciona la opción que mejor describe lo que necesitas.';
    }

    if (currentStep === 2 && !formData.tipoProyecto) {
      newErrors.tipoProyecto = 'Por favor selecciona para qué tipo de proyecto es.';
    }

    if (currentStep === 3 && !formData.etapa) {
      newErrors.etapa = 'Por favor selecciona en qué etapa se encuentra tu proyecto.';
    }

    if (currentStep === 4) {
      if (!formData.detalle.trim()) {
        newErrors.detalle = 'Cuéntanos brevemente qué te gustaría crear, mejorar o resolver.';
      } else if (formData.detalle.trim().length < 10) {
        newErrors.detalle = 'Por favor escribe al menos 10 caracteres para entender mejor tu necesidad.';
      }
    }

    if (currentStep === 5) {
      if (!formData.nombre.trim()) {
        newErrors.nombre = 'Ingresa tu nombre para saber cómo llamarte.';
      }
      if (!formData.whatsapp.trim()) {
        newErrors.whatsapp = 'Ingresa tu número de WhatsApp para contactarte.';
      } else if (formData.whatsapp.trim().length < 8) {
        newErrors.whatsapp = 'Ingresa un número de WhatsApp válido.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Ingresa tu correo electrónico.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Ingresa un correo electrónico válido.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < totalSteps) {
        setStep(step + 1);
        // Desplazamiento suave para centrar la tarjeta si es en móvil
        const el = document.getElementById('contacto');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);

    try {
      // Estructura lista para enviar a API o servicio de correos
      const payload = {
        ...formData,
        fechaEnvio: new Date().toISOString(),
        origen: 'Home ENLACE Soluciones Digitales',
      };

      // Si existe un endpoint de backend más adelante, se consumirá aquí.
      // Por ahora simulamos una breve latencia para feedback visual impecable.
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Log para auditoría de desarrollo
      console.log('Proyecto enviado con éxito:', payload);

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error al enviar el proyecto:', err);
      setErrors({ submit: 'Ocurrió un error al enviar el formulario. Intenta nuevamente o contáctanos por WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mensaje pre-construido para WhatsApp con los datos recopilados
  const getWhatsAppMessage = () => {
    const mensaje = `Hola ENLACE! Acabo de completar el formulario en la web:\n\n` +
      `*Nombre:* ${formData.nombre || 'Interesado'}\n` +
      (formData.negocio ? `*Negocio:* ${formData.negocio}\n` : '') +
      `*Necesito:* ${formData.queNecesitas || 'Solución digital'}\n` +
      `*Tipo:* ${formData.tipoProyecto || 'Proyecto'}\n` +
      `*Etapa:* ${formData.etapa || 'Por definir'}\n` +
      (formData.ciudad ? `*Ciudad:* ${formData.ciudad}\n` : '') +
      `*Detalle:* ${formData.detalle || 'Me gustaría conversar sobre mi idea.'}\n\n` +
      `Me gustaría recibir orientación para mi proyecto.`;
    return encodeURIComponent(mensaje);
  };

  const resetForm = () => {
    setFormData({
      queNecesitas: '',
      tipoProyecto: '',
      etapa: '',
      detalle: '',
      referencia: '',
      nombre: '',
      negocio: '',
      whatsapp: '',
      email: '',
      ciudad: '',
    });
    setStep(1);
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="contacto"
      className="bg-band-beta pt-14 md:pt-20 pb-20 md:pb-28 relative z-10 flex flex-col items-center w-full"
    >
      <div className="w-full max-w-[960px] mx-auto px-4 sm:px-6">

        {/* Tarjeta Central Interactiva */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B1E38]/95 to-[#061224]/95 border border-blue-500/25 p-6 sm:p-10 md:p-12 shadow-[0_0_80px_rgba(37,99,235,0.15)] backdrop-blur-xl">

          {/* Luces Glow decorativas de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-blue-500/20 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 right-10 w-[200px] h-[150px] bg-orange-500/10 blur-[80px] pointer-events-none rounded-full"></div>

          {/* PANTALLA DE ÉXITO */}
          {isSubmitted ? (
            <div className="relative z-10 text-center py-8 sm:py-12 flex flex-col items-center">
              {/* Icono de Check con Glow */}
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-400/80 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_40px_rgba(16,185,129,0.35)] animate-bounce duration-1000">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Título de Confirmación */}
              <h3 className="font-display font-[800] text-white text-[28px] sm:text-[34px] leading-tight mb-4 max-w-[650px]">
                ¡Gracias! Ya tenemos una idea inicial de lo que necesitas.
              </h3>

              {/* Mensaje */}
              <p className="text-slate-300 text-[16px] sm:text-[18px] max-w-[620px] leading-relaxed mb-8">
                Nos pondremos en contacto contigo para revisar tu proyecto y orientarte sobre la mejor solución.
              </p>

              {/* Resumen de selección del cliente */}
              <div className="w-full max-w-[540px] bg-[#0E2442]/70 border border-blue-500/20 rounded-2xl p-5 mb-8 text-left text-[14px]">
                <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold mb-3">
                  Resumen de tu solicitud
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-400">Solución:</span>{' '}
                    <strong className="text-white">{formData.queNecesitas}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Para:</span>{' '}
                    <strong className="text-white">{formData.tipoProyecto}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Etapa:</span>{' '}
                    <strong className="text-white">{formData.etapa}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Contacto:</span>{' '}
                    <strong className="text-white">{formData.nombre}</strong>
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp Inmediato */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/56941278725?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[15px] sm:text-[16px] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Hablar ahora por WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-medium text-[14px] transition-all"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            /* FORMULARIO POR PASOS */
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col">

              {/* ENCABEZADO DE LA SECCIÓN */}
              <div className="text-center mb-8 flex flex-col items-center">
                {/* Badge con acento naranja */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[13px] font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(30,98%,57%)] shadow-[0_0_8px_hsl(30,98%,57%)]"></span>
                  Orientación para tu proyecto
                </div>

                {/* Título */}
                <h2 className="font-display font-[800] text-white text-[clamp(26px,4vw,40px)] leading-[1.2] max-w-[700px] mb-3">
                  Cuéntanos qué necesitas
                </h2>

                {/* Subtítulo */}
                <p className="text-slate-300 text-[15px] sm:text-[17px] max-w-[620px] leading-relaxed">
                  Responde unas preguntas y podremos orientarte mejor sobre la solución digital más adecuada para tu proyecto o negocio.
                </p>
              </div>

              {/* BARRA DE PROGRESO */}
              <div className="w-full mb-8">
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2.5">
                  <span className="text-blue-300 font-semibold tracking-wide">
                    Paso {step} de {totalSteps}
                  </span>
                  <span className="text-slate-400">
                    {step === 1 && '¿Qué necesitas?'}
                    {step === 2 && '¿Para qué tipo de proyecto?'}
                    {step === 3 && '¿En qué etapa estás?'}
                    {step === 4 && 'Cuéntanos un poco más'}
                    {step === 5 && 'Tus datos de contacto'}
                  </span>
                </div>

                {/* Barra interactiva de 5 segmentos */}
                <div className="grid grid-cols-5 gap-2 w-full h-2 rounded-full overflow-hidden bg-slate-800/80 p-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className={`h-full rounded-full transition-all duration-500 ${
                        s < step
                          ? 'bg-blue-500'
                          : s === step
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                          : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CONTENIDO DEL PASO ACTIVO */}
              <div className="min-h-[290px] flex flex-col justify-center">

                {/* PASO 1 — ¿Qué necesitas? */}
                {step === 1 && (
                  <div className="flex flex-col animate-fadeIn">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                      ¿Qué solución digital estás buscando?
                    </h3>
                    <p className="text-slate-400 text-sm mb-5">
                      Selecciona la alternativa que más se acerque a tu requerimiento.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {OPCIONES_PASO_1.map((opt) => {
                        const isSelected = formData.queNecesitas === opt.titulo;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleSelectOption('queNecesitas', opt.titulo)}
                            className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group ${
                              isSelected
                                ? 'bg-blue-600/25 border-blue-400 shadow-[0_0_24px_rgba(37,99,235,0.35)] translate-y-[-2px]'
                                : 'bg-[#0E223D]/60 hover:bg-[#0E223D] border-white/10 hover:border-blue-500/40 text-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full mb-2.5">
                              <span className={isSelected ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400 transition-colors'}>
                                {opt.icon}
                              </span>
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                  isSelected
                                    ? 'bg-blue-500 border-blue-400 text-white'
                                    : 'border-white/20 group-hover:border-white/40'
                                }`}
                              >
                                {isSelected && (
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                            </div>
                            <div>
                              <div className={`font-bold text-[15px] mb-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                {opt.titulo}
                              </div>
                              <div className="text-[12px] text-slate-400 leading-snug">
                                {opt.descripcion}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {errors.queNecesitas && (
                      <p className="text-rose-400 text-sm mt-3 flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.queNecesitas}
                      </p>
                    )}
                  </div>
                )}

                {/* PASO 2 — ¿Para qué tipo de proyecto? */}
                {step === 2 && (
                  <div className="flex flex-col animate-fadeIn">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                      ¿Para qué tipo de proyecto o cliente es?
                    </h3>
                    <p className="text-slate-400 text-sm mb-5">
                      Esto nos permite dimensionar el alcance y las tecnologías adecuadas.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {OPCIONES_PASO_2.map((opt) => {
                        const isSelected = formData.tipoProyecto === opt.titulo;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleSelectOption('tipoProyecto', opt.titulo)}
                            className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group ${
                              isSelected
                                ? 'bg-blue-600/25 border-blue-400 shadow-[0_0_24px_rgba(37,99,235,0.35)] translate-y-[-2px]'
                                : 'bg-[#0E223D]/60 hover:bg-[#0E223D] border-white/10 hover:border-blue-500/40 text-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full mb-2">
                              <span className={isSelected ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400 transition-colors'}>
                                {opt.icon}
                              </span>
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                  isSelected
                                    ? 'bg-blue-500 border-blue-400 text-white'
                                    : 'border-white/20 group-hover:border-white/40'
                                }`}
                              >
                                {isSelected && (
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                            </div>
                            <div>
                              <div className={`font-bold text-[15px] mb-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                {opt.titulo}
                              </div>
                              <div className="text-[12px] text-slate-400 leading-snug">
                                {opt.descripcion}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {errors.tipoProyecto && (
                      <p className="text-rose-400 text-sm mt-3 flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.tipoProyecto}
                      </p>
                    )}
                  </div>
                )}

                {/* PASO 3 — ¿En qué etapa estás? */}
                {step === 3 && (
                  <div className="flex flex-col animate-fadeIn">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                      ¿En qué etapa te encuentras actualmente?
                    </h3>
                    <p className="text-slate-400 text-sm mb-5">
                      Nos adaptamos a tu punto de partida, ya sea una idea o un sistema operativo.
                    </p>

                    <div className="flex flex-col gap-3">
                      {OPCIONES_PASO_3.map((opt) => {
                        const isSelected = formData.etapa === opt.titulo;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleSelectOption('etapa', opt.titulo)}
                            className={`p-4 rounded-xl text-left border transition-all duration-200 flex items-center justify-between group ${
                              isSelected
                                ? 'bg-blue-600/25 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)] translate-x-1'
                                : 'bg-[#0E223D]/60 hover:bg-[#0E223D] border-white/10 hover:border-blue-500/40 text-slate-300'
                            }`}
                          >
                            <div className="pr-4">
                              <div className={`font-bold text-[15px] mb-0.5 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                {opt.titulo}
                              </div>
                              <div className="text-[13px] text-slate-400">
                                {opt.descripcion}
                              </div>
                            </div>

                            <span
                              className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-blue-500 border-blue-400 text-white'
                                  : 'border-white/20 group-hover:border-white/40'
                              }`}
                            >
                              {isSelected && (
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {errors.etapa && (
                      <p className="text-rose-400 text-sm mt-3 flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.etapa}
                      </p>
                    )}
                  </div>
                )}

                {/* PASO 4 — Cuéntanos un poco más */}
                {step === 4 && (
                  <div className="flex flex-col animate-fadeIn">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                      Cuéntanos un poco más sobre tu idea
                    </h3>
                    <p className="text-slate-400 text-sm mb-5">
                      Entre más contexto nos des, más precisa y personalizada será nuestra propuesta.
                    </p>

                    {/* Campo Principal */}
                    <div className="mb-5">
                      <label htmlFor="detalle" className="block text-white font-medium text-sm mb-2">
                        ¿Qué quieres crear, mejorar o resolver? <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        id="detalle"
                        rows={4}
                        value={formData.detalle}
                        onChange={(e) => handleInputChange('detalle', e.target.value)}
                        placeholder="Ejemplo: Necesito una página para mostrar mis servicios, recibir consultas por WhatsApp y aparecer en Google."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#091526] border text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.detalle ? 'border-rose-400 focus:ring-rose-400' : 'border-white/15 focus:border-blue-400'
                        }`}
                      />
                      {errors.detalle && (
                        <p className="text-rose-400 text-sm mt-1.5 flex items-center gap-1.5">
                          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.detalle}
                        </p>
                      )}
                    </div>

                    {/* Campo Opcional: Referencia */}
                    <div>
                      <label htmlFor="referencia" className="block text-slate-300 font-medium text-sm mb-2">
                        ¿Tienes alguna referencia o página que te guste?{' '}
                        <span className="text-slate-500 text-xs font-normal">(Opcional)</span>
                      </label>
                      <input
                        type="text"
                        id="referencia"
                        value={formData.referencia}
                        onChange={(e) => handleInputChange('referencia', e.target.value)}
                        placeholder="Ej: https://misitiofavorito.cl o marcas que te inspiren"
                        className="w-full px-4 py-3 rounded-xl bg-[#091526] border border-white/15 text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* PASO 5 — Tus datos */}
                {step === 5 && (
                  <div className="flex flex-col animate-fadeIn">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                      ¿A dónde te enviamos la información?
                    </h3>
                    <p className="text-slate-400 text-sm mb-5">
                      Tus datos están protegidos. Solo los utilizaremos para responder tu consulta.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nombre */}
                      <div>
                        <label htmlFor="nombre" className="block text-white font-medium text-xs sm:text-sm mb-1.5">
                          Tu Nombre <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Ej: Carolina Morales"
                          className={`w-full px-4 py-3 rounded-xl bg-[#091526] border text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.nombre ? 'border-rose-400' : 'border-white/15 focus:border-blue-400'
                          }`}
                        />
                        {errors.nombre && <p className="text-rose-400 text-xs mt-1">{errors.nombre}</p>}
                      </div>

                      {/* Nombre del negocio */}
                      <div>
                        <label htmlFor="negocio" className="block text-slate-300 font-medium text-xs sm:text-sm mb-1.5">
                          Nombre del negocio <span className="text-slate-500 text-xs">(Opcional)</span>
                        </label>
                        <input
                          type="text"
                          id="negocio"
                          value={formData.negocio}
                          onChange={(e) => handleInputChange('negocio', e.target.value)}
                          placeholder="Ej: Florería La Serena"
                          className="w-full px-4 py-3 rounded-xl bg-[#091526] border border-white/15 text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                        />
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label htmlFor="whatsapp" className="block text-white font-medium text-xs sm:text-sm mb-1.5">
                          WhatsApp <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                          placeholder="+56 9 1234 5678"
                          className={`w-full px-4 py-3 rounded-xl bg-[#091526] border text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.whatsapp ? 'border-rose-400' : 'border-white/15 focus:border-blue-400'
                          }`}
                        />
                        {errors.whatsapp && <p className="text-rose-400 text-xs mt-1">{errors.whatsapp}</p>}
                      </div>

                      {/* Correo electrónico */}
                      <div>
                        <label htmlFor="email" className="block text-white font-medium text-xs sm:text-sm mb-1.5">
                          Correo electrónico <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="contacto@tunegocio.cl"
                          className={`w-full px-4 py-3 rounded-xl bg-[#091526] border text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.email ? 'border-rose-400' : 'border-white/15 focus:border-blue-400'
                          }`}
                        />
                        {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Ciudad / Región */}
                      <div className="sm:col-span-2">
                        <label htmlFor="ciudad" className="block text-slate-300 font-medium text-xs sm:text-sm mb-1.5">
                          Ciudad / Región <span className="text-slate-500 text-xs">(Opcional)</span>
                        </label>
                        <input
                          type="text"
                          id="ciudad"
                          value={formData.ciudad}
                          onChange={(e) => handleInputChange('ciudad', e.target.value)}
                          placeholder="Ej: La Serena, Coquimbo, Santiago, etc."
                          className="w-full px-4 py-3 rounded-xl bg-[#091526] border border-white/15 text-white placeholder-slate-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                        />
                      </div>
                    </div>

                    {errors.submit && (
                      <p className="text-rose-400 text-sm mt-3 flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.submit}
                      </p>
                    )}
                  </div>
                )}

              </div>

              {/* BOTONES DE NAVEGACIÓN */}
              <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-medium text-[14px] transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Atrás
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[15px] shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Continuar</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-[15px] shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando proyecto...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar mi proyecto</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* ENLACE DIRECTO ALTERNATIVO WHATSAPP */}
              <div className="mt-6 text-center text-xs text-slate-400">
                ¿Prefieres hablar directamente?{' '}
                <a
                  href="https://wa.me/56941278725?text=Hola!%20Tengo%20un%20proyecto%20y%20me%20gustar%C3%ADa%20conversar%20con%20ENLACE."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-colors"
                >
                  Escríbenos por WhatsApp (+56 9 4127 8725)
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
