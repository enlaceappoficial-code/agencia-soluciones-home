import React from "react";
import ProductLegalLayout from "@/components/product/ProductLegalLayout";
import { constructorProConfig } from "@/config/products/constructor-pro";

export const metadata = {
  title: "Política de Privacidad — Enlace Constructor Pro",
  description: "Tratamiento de datos y política de privacidad de Enlace Constructor Pro.",
};

export default function PrivacidadPage() {
  return (
    <ProductLegalLayout
      title="Política de Privacidad"
      subtitle="Enlace Constructor Pro · Bajo Deslinde SpA"
      lastUpdated="4 de agosto de 2026"
      backHref="/constructor-pro"
      backLabel="Volver a Enlace Constructor Pro"
      config={constructorProConfig}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">1. Almacenamiento Local de Datos de Obra</h2>
        <p>
          Enlace Constructor Pro es una aplicación de escritorio orientada a la privacidad del usuario. Los datos de tus proyectos, listas de clientes, presupuestos, cubicaciones y análisis de costos se almacenan principalmente de forma local en el disco duro de tu equipo.
        </p>
        <p>
          La aplicación no realiza sincronización automática continua en la nube ni transmite tus proyectos privados a servidores externos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">2. Información Recopilada en la Web y Formularios</h2>
        <p>
          A través de nuestro sitio web (<code>redenlace.cl</code>), recopilamos únicamente la información que nos proporcionas de forma explícita y voluntaria (por ejemplo, al solicitar una licencia, código de regalo o soporte técnico mediante correo electrónico o WhatsApp).
        </p>
        <p>
          El sitio web puede recopilar datos técnicos mínimos y anónimos de navegación (tales como tipo de navegador o dirección IP) estrictamente necesarios para la seguridad, soporte y funcionamiento correcto de la página.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">3. No Comercialización de Datos</h2>
        <p>
          Bajo Deslinde SpA no vende, alquila ni cede datos personales o información técnica enviada por los usuarios a terceros con fines comerciales o de publicidad.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">4. Servicios Externos de Terceros</h2>
        <p>
          Si el usuario utiliza accesos o enlaces hacia plataformas externas (tales como WhatsApp o Mercado Público), el tratamiento de datos en dichas plataformas se rige por las políticas de privacidad propias de cada servicio.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-orange-400">5. Derechos del Usuario</h2>
        <p>
          Cualquier usuario puede solicitar el acceso, corrección o eliminación de los datos de contacto enviados voluntariamente a través de nuestro sitio web comunicándose con el equipo de soporte.
        </p>
      </section>
    </ProductLegalLayout>
  );
}
