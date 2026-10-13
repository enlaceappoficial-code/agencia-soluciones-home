import React from "react";
import ProductLegalLayout from "@/components/product/ProductLegalLayout";
import { constructorProConfig } from "@/config/products/constructor-pro";

export const metadata = {
  title: "Licencia de Uso — Enlace Constructor Pro",
  description: "Términos y condiciones de la licencia de uso de Enlace Constructor Pro.",
};

export default function LicenciaPage() {
  return (
    <ProductLegalLayout
      title="Licencia de Uso"
      subtitle="Enlace Constructor Pro · Bajo Deslinde SpA"
      lastUpdated="4 de agosto de 2026"
      backHref="/constructor-pro"
      backLabel="Volver a Enlace Constructor Pro"
      config={constructorProConfig}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">1. Concesión de Licencia</h2>
        <p>
          Bajo Deslinde SpA otorga al usuario una licencia no exclusiva e intransferible para instalar y ejecutar la aplicación de escritorio Enlace Constructor Pro en sistemas operativos Windows de 64 bits (x64).
        </p>
        <p>
          La compra o asignación de una licencia constituye la adquisición de un derecho de uso del software bajo los términos de la modalidad contratada (Starter, Básico, Constructor, Pro, Plus o Pro Cloud), no la venta del código fuente ni de la propiedad intelectual de la aplicación.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">2. Alcance y Modalidad de Uso</h2>
        <p>
          La licencia habilita el uso personal o comercial de la aplicación según las funciones, módulos y capacidades incluidas en el plan seleccionado.
        </p>
        <p>
          La activación de la licencia se realiza localmente en la aplicación. La ejecución del programa funciona principalmente en modalidad local y sin necesidad de validación permanente en la nube.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">3. Restricciones de Uso y Códigos de Activación</h2>
        <p>
          Queda expresamente prohibido redistribuir, alquilar, revender, modificar, descompilar o realizar ingeniería inversa sobre el software o cualquiera de sus componentes.
        </p>
        <p>
          Los códigos de activación o claves de producto entregados son de uso exclusivo del titular o empresa autorizada. Queda prohibida su publicación o difusión pública en redes sociales o foros abiertos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">4. Propiedad Intelectual y Bases de Datos</h2>
        <p>
          Todos los derechos sobre el diseño, marca, logotipos, código, catálogos y bases técnicas incluidas en la aplicación pertenecen exclusivamente a Bajo Deslinde SpA.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">5. Servicios Externos e Integraciones</h2>
        <p>
          Las funciones opcionales que interactúan con servicios o plataformas externas (tales como consulta de valores o Mercado Público) están sujetas a la disponibilidad técnica de dichos servicios de terceros. Bajo Deslinde SpA no garantiza la disponibilidad ininterrumpida o perpetua de plataformas externas ajenas al software.
        </p>
      </section>
    </ProductLegalLayout>
  );
}
