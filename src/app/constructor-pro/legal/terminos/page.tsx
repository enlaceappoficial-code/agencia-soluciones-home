import React from "react";
import ProductLegalLayout from "@/components/product/ProductLegalLayout";
import { constructorProConfig } from "@/config/products/constructor-pro";

export const metadata = {
  title: "Términos y Condiciones — Enlace Constructor Pro",
  description: "Términos y condiciones de uso de la aplicación de escritorio Enlace Constructor Pro.",
};

export default function TerminosPage() {
  return (
    <ProductLegalLayout
      title="Términos y Condiciones"
      subtitle="Enlace Constructor Pro · Bajo Deslinde SpA"
      lastUpdated="4 de agosto de 2026"
      backHref="/constructor-pro"
      backLabel="Volver a Enlace Constructor Pro"
      config={constructorProConfig}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">1. Naturaleza del Software</h2>
        <p>
          Enlace Constructor Pro es una aplicación de escritorio desarrollada para sistemas operativos Windows de 64 bits (x64). Está orientada a la elaboración, estructuración y gestión de presupuestos, análisis de precios unitarios (APU), cubicaciones, Carta Gantt y documentos de obra en Chile.
        </p>
        <p>
          El software funciona principalmente con datos almacenados de forma local en el equipo del usuario y no requiere conexión permanente a internet para sus funciones principales de presupuestación y gestión.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">2. Uso Permitido y Ámbito de Aplicación</h2>
        <p>
          El uso de Enlace Constructor Pro está permitido para fines personales o comerciales, según la modalidad y el plan contratado. Está diseñado como herramienta de trabajo para contratistas independientes, profesionales técnicos y empresas constructoras.
        </p>
        <p>
          Queda prohibida la redistribución no autorizada, la modificación del código, la ingeniería inversa o el uso de la aplicación para fines ilícitos o contrarios a la legislación vigente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">3. Responsabilidad sobre Datos, Cálculos y Documentos</h2>
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-sm font-medium text-orange-200">
          ⚠️ <strong>Advertencia de Responsabilidad Profesional:</strong> Los presupuestos, análisis de precios unitarios, cubicaciones, planificaciones y documentos generados por Enlace Constructor Pro son herramientas de apoyo. Su revisión matemática, técnica, contractual, tributaria y legal corresponde exclusivamente al profesional o empresa responsable de la obra.
        </div>
        <p>
          Enlace Constructor Pro no sustituye la revisión profesional ni la validación técnica en terreno, ni constituye asesoría legal, tributaria o de ingeniería.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">4. Servicios Externos y Conectividad</h2>
        <p>
          Determinadas funciones opcionales —tales como la consulta de indicadores económicos, herramientas de apoyo para Mercado Público o el envío de documentos por servicios externos— requieren conexión puntual a internet.
        </p>
        <p>
          Bajo Deslinde SpA no garantiza la disponibilidad ininterrumpida o perpetua de servicios web prestados por terceros ajenos a la aplicación.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">5. Propiedad Intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual sobre Enlace Constructor Pro, sus marcas, diseño de interfaz, estructura de datos y contenidos pertenecen exclusivamente a Bajo Deslinde SpA. La adquisición de una licencia otorga un derecho de uso sobre el programa, no la venta de su código fuente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">6. Modificaciones y Actualizaciones</h2>
        <p>
          Las mejoras y actualizaciones del programa se entregan mediante nuevas versiones del instalador. Las actualizaciones de contenido, catálogos o bases técnicas pueden distribuirse mediante paquetes compatibles con la aplicación.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">7. Contacto</h2>
        <p>
          Para consultas sobre estos términos, asistencia técnica o soporte de licencias, puedes comunicarte con el equipo de Enlace Constructor Pro a través de correo electrónico o WhatsApp oficial.
        </p>
      </section>
    </ProductLegalLayout>
  );
}
