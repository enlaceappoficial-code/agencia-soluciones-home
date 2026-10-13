import React from "react";
import ProductLegalLayout from "@/components/product/ProductLegalLayout";
import { constructorProConfig } from "@/config/products/constructor-pro";

export const metadata = {
  title: "Prueba Gratuita y Activación — Enlace Constructor Pro",
  description: "Condiciones de evaluación gratuita y activación de licencias de Enlace Constructor Pro.",
};

export default function ActivacionPage() {
  return (
    <ProductLegalLayout
      title="Prueba Gratuita y Activación"
      subtitle="Enlace Constructor Pro · Bajo Deslinde SpA"
      lastUpdated="4 de agosto de 2026"
      backHref="/constructor-pro"
      backLabel="Volver a Enlace Constructor Pro"
      config={constructorProConfig}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">1. Periodo de Evaluación Gratuita</h2>
        <p>
          Enlace Constructor Pro incluye un periodo de evaluación gratuita de <strong>10 días contados desde la primera ejecución</strong> de la aplicación en el equipo.
        </p>
        <p>
          Durante el periodo de evaluación, el usuario tiene acceso a las funciones del plan Starter, pudiendo existir límites operativos temporales (tales como cantidad máxima de presupuestos creados).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">2. Estado al Finalizar la Evaluación</h2>
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-sm font-medium text-orange-200">
          📌 <strong>Conservación de Datos:</strong> Al finalizar el período de evaluación, tus datos se conservan. Podrás consultarlos y respaldarlos, pero necesitarás activar una licencia para volver a crear, editar y exportar.
        </div>
        <p>
          Cuando concluyen los 10 días de evaluación sin haber ingresado una clave activa:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
          <li>El usuario puede seguir ingresando normalmente a la aplicación.</li>
          <li>Puede consultar sus listados de clientes y presupuestos guardados.</li>
          <li>Puede abrir presupuestos existentes en modo de solo lectura.</li>
          <li>Puede ejecutar las funciones de respaldo local de datos.</li>
          <li>Puede acceder a la sección de licencias para ingresar una clave válida.</li>
          <li>No podrá crear, editar, eliminar, duplicar ni exportar presupuestos hasta realizar la activación.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">3. Activación de Licencias</h2>
        <p>
          La activación de la licencia se realiza de forma local en la aplicación mediante el ingreso de una clave o código de activación válido.
        </p>
        <p>
          Al ingresar un código válido, las funciones correspondientes al plan contratado se habilitan de inmediato, permitiendo continuar editando y creando proyectos sin perder la información previamente ingresada.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">4. Beneficios para la Comunidad Red Enlace</h2>
        <p>
          Los miembros elegibles de la Red Social Enlace pueden solicitar un código de regalo para acceder al plan Starter sin costo de licencia.
        </p>
      </section>
    </ProductLegalLayout>
  );
}
