import React from "react";
import ProductLegalLayout from "@/components/product/ProductLegalLayout";
import { constructorProConfig } from "@/config/products/constructor-pro";

export const metadata = {
  title: "Retracto y Devoluciones — Enlace Constructor Pro",
  description: "Política de derecho a retracto y devoluciones de licencias de Enlace Constructor Pro.",
};

export default function DevolucionesPage() {
  return (
    <ProductLegalLayout
      title="Retracto y Devoluciones"
      subtitle="Enlace Constructor Pro · Bajo Deslinde SpA"
      lastUpdated="4 de agosto de 2026"
      backHref="/constructor-pro"
      backLabel="Volver a Enlace Constructor Pro"
      config={constructorProConfig}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">1. Marco Legal y Productos Digitales</h2>
        <p>
          La procedencia del derecho de retracto o devolución de licencias de software se rige por la legislación chilena aplicable sobre protección de los derechos de los consumidores (Ley N° 19.496) y las condiciones de entrega o activación de productos digitales.
        </p>
        <p>
          Al tratarse de licencias digitales de software descargable con periodo de evaluación gratuita previo, la factibilidad de devolución dependerá del estado de entrega y activación de la clave correspondiente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">2. Casos Sujetos a Revisión Especial</h2>
        <p>
          Los usuarios podrán solicitar formalmente la revisión de su caso y el eventual reembolso en los siguientes eventos:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
          <li>Cobros duplicados o errores en el procesamiento del pago.</li>
          <li>Entrega de códigos o claves de activación inválidas o defectuosas.</li>
          <li>Imposibilidad técnica grave y no atribuible al equipo del usuario que impida la ejecución básica del producto.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">3. Procedimiento de Evaluación</h2>
        <p>
          Cada solicitud será evaluada individualmente analizando los antecedentes técnicos y comerciales presentados por el cliente. Para iniciar una solicitud, el usuario debe comunicarse con el equipo de soporte proporcionando el comprobante de compra y el detalle de la situación.
        </p>
        <p>
          Esta política no limita ni excluye los derechos legales irrenunciables que correspondan a los consumidores conforme a la ley vigente.
        </p>
      </section>
    </ProductLegalLayout>
  );
}
