import React from "react";
import Link from "next/link";
import { ProductConfig, ProductContactLink, ProductLegalLink, ProductNavLink } from "@/types/product";

const COLORS = {
  navyDeep: "hsl(222, 85%, 7%)",
  border: "hsl(220, 55%, 26%)",
  muted: "215, 25%, 70%",
  blueGlow: "hsl(209, 96%, 56%)",
  orange: "hsl(30, 98%, 57%)",
  foreground: "hsl(210, 33%, 96%)",
};

export interface ProductFooterProps {
  productName?: string;
  description?: string;
  location?: string;
  productLinks?: ProductNavLink[];
  legalLinks?: ProductLegalLink[];
  contactLinks?: ProductContactLink[];
  config?: ProductConfig;
}

export default function ProductFooter({
  productName,
  description: customDescription,
  location: customLocation,
  productLinks: customProductLinks,
  legalLinks: customLegalLinks,
  contactLinks: customContactLinks,
  config,
}: ProductFooterProps) {
  const name = productName || config?.name || "ENLACE Soluciones";
  const desc =
    customDescription ||
    config?.description ||
    "Soluciones digitales para emprendedores, empresas y profesionales. Software, aplicaciones y herramientas con tecnología real.";
  const loc = customLocation || config?.location || "La Serena · Coquimbo · Chile";

  // Columna 2: Producto
  const pLinks = customProductLinks || config?.navLinks || [];

  // Columna 3: Legal (específico por producto)
  const lLinks = customLegalLinks || config?.legalLinks || [];

  // Columna 4: Contacto y Ecosistema
  const defaultContactLinks: ProductContactLink[] = [
    { label: "WhatsApp Soporte", href: "https://wa.me/56941278725", external: true },
    { label: "info@redenlace.cl", href: "mailto:info@redenlace.cl", external: false },
    { label: "Red Social ENLACE", href: "/red-social", external: false },
    { label: "Agencia ENLACE (Inicio)", href: "/", external: false },
  ];
  const cLinks = customContactLinks || config?.contactLinks || defaultContactLinks;

  const renderLinkItem = (item: { label: string; href: string; external?: boolean }) => {
    const isExternal = item.external ?? item.href.startsWith("http");
    const style: React.CSSProperties = {
      fontSize: "14px",
      lineHeight: "20px",
      color: `hsla(${COLORS.muted}, 0.8)`,
      textDecoration: "none",
      transition: "color .2s ease",
    };

    if (isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[hsl(209,96%,56%)] transition-colors"
          style={style}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className="hover:text-[hsl(209,96%,56%)] transition-colors"
        style={style}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: COLORS.navyDeep,
        borderTop: `1px solid ${COLORS.border}`,
        padding: "56px 24px 32px",
        boxSizing: "border-box",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          boxSizing: "border-box",
        }}
      >
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Marca y descripción */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/enlace-logo.png"
                alt="ENLACE"
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 10px hsla(209, 96%, 56%, 0.35))",
                }}
              />
              <div
                style={{
                  fontFamily: "'Syne', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "22px",
                  lineHeight: 1,
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ color: COLORS.blueGlow }}>ENLA</span>
                <span style={{ color: COLORS.orange }}>CE</span>
              </div>
            </Link>

            <p
              className="text-xs font-semibold text-[hsl(30,98%,57%)] mt-2 uppercase tracking-wider"
              style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
            >
              {name}
            </p>

            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: `hsla(${COLORS.muted}, 0.8)`,
                margin: "12px 0 0 0",
                maxWidth: "280px",
              }}
            >
              {desc}
            </p>

            <p
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: `hsla(${COLORS.muted}, 0.6)`,
                margin: "12px 0 0 0",
              }}
            >
              {loc}
            </p>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h4
              style={{
                fontFamily: "'Syne', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                color: COLORS.foreground,
                margin: "0 0 16px 0",
              }}
            >
              Producto
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {pLinks.map((item) => (
                <li key={item.label}>{renderLinkItem(item)}</li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Legal (específico para este producto) */}
          <div>
            <h4
              style={{
                fontFamily: "'Syne', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                color: COLORS.foreground,
                margin: "0 0 16px 0",
              }}
            >
              Legal
            </h4>
            {lLinks.length > 0 ? (
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {lLinks.map((item) => (
                  <li key={item.label}>{renderLinkItem(item)}</li>
                ))}
              </ul>
            ) : (
              <p style={{ fontSize: "13px", color: `hsla(${COLORS.muted}, 0.6)` }}>
                Términos generales vigentes según las políticas de ENLACE Soluciones Digitales.
              </p>
            )}
          </div>

          {/* Columna 4: Contacto y Ecosistema */}
          <div>
            <h4
              style={{
                fontFamily: "'Syne', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                color: COLORS.foreground,
                margin: "0 0 16px 0",
              }}
            >
              Contacto y Ecosistema
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {cLinks.map((item) => (
                <li key={item.label}>{renderLinkItem(item)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior común homologada */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: `1px solid ${COLORS.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "12px", lineHeight: "16px", color: `hsla(${COLORS.muted}, 0.6)`, margin: 0 }}>
            © 2026 ENLACE Soluciones Digitales · Una iniciativa de Bajo Deslinde SPA
          </p>
          <div className="flex items-center gap-4">
            <span style={{ fontSize: "12px", color: `hsla(${COLORS.muted}, 0.5)` }}>
              Ecosistema ENLACE
            </span>
            <Link
              href="/"
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: COLORS.blueGlow,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              redenlace.cl
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
