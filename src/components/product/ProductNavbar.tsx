"use client";

import React, { useState } from "react";
import Link from "next/link";
import HerramientasDropdown from "../HerramientasDropdown";
import { ProductAction, ProductConfig, ProductNavLink } from "@/types/product";

const COLORS = {
  blueGlow: "hsl(209, 96%, 56%)",
  orange: "hsl(30, 98%, 57%)",
  foreground: "hsl(210, 33%, 96%)",
};

export interface ProductNavbarProps {
  productName?: string;
  navLinks?: ProductNavLink[];
  primaryCta?: ProductAction;
  showAgencyLink?: boolean;
  config?: ProductConfig;
}

export default function ProductNavbar({
  productName,
  navLinks: customNavLinks,
  primaryCta: customPrimaryCta,
  showAgencyLink = true,
  config,
}: ProductNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Derivar enlaces y CTA a partir del config o de props directas
  const links = customNavLinks || config?.navLinks || [];
  const cta = customPrimaryCta || config?.primaryCta || {
    label: "Comenzar",
    href: "#contacto",
    variant: "primary",
  };

  // Opcionalmente agregar enlace a la Agencia al inicio si no está ya
  const allNavLinks: ProductNavLink[] = [
    ...(showAgencyLink ? [{ label: "Inicio Agencia", href: "/", external: false }] : []),
    ...links,
  ];

  const renderCtaButton = (isMobile = false) => {
    const isExternal = cta.external ?? cta.href.startsWith("http");
    const baseStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      borderRadius: "12px",
      padding: isMobile ? "12px 20px" : "10px 20px",
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 600,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: "hsl(210, 40%, 98%)",
      textDecoration: "none",
      transition: "all .3s cubic-bezier(.4,0,.2,1)",
      background:
        cta.variant === "whatsapp"
          ? "#25D366"
          : "linear-gradient(135deg, hsl(222, 93%, 45%) 0%, hsl(209, 96%, 56%) 100%)",
      boxShadow:
        cta.variant === "whatsapp"
          ? "0 0 16px rgba(37,211,102,0.3)"
          : "0 0 16px rgba(59,130,246,0.3)",
    };

    const content = (
      <>
        {cta.icon}
        <span>{cta.label}</span>
      </>
    );

    if (isExternal) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`enlace-nav-btn ${isMobile ? "w-full text-center" : "hidden md:inline-flex"}`}
          style={baseStyle}
          onClick={() => isMobile && setIsOpen(false)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={cta.href}
        className={`enlace-nav-btn ${isMobile ? "w-full text-center" : "hidden md:inline-flex"}`}
        style={baseStyle}
        onClick={() => isMobile && setIsOpen(false)}
      >
        {content}
      </Link>
    );
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "64px",
        background: "#0b1a3d99",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid hsla(220, 55%, 26%, 0.6)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          height: "64px",
          margin: "0 auto",
          padding: "0 24px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Logo ENLACE: Siempre redirige a la Agencia Home "/" */}
        <Link
          href="/"
          style={{
            justifySelf: "start",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            flexShrink: 0,
          }}
          title="ENLACE Soluciones Digitales — Volver a Inicio"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/enlace-logo.png"
            alt="ENLACE"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 0 10px hsla(209, 96%, 56%, 0.18))",
            }}
          />
          <div
            style={{
              fontFamily: "'Syne', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "20px",
              lineHeight: 1,
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ color: COLORS.blueGlow }}>ENLA</span>
            <span style={{ color: COLORS.orange }}>CE</span>
          </div>
          {productName && (
            <span
              className="hidden lg:inline-block text-xs font-semibold px-2 py-0.5 rounded-md border border-white/10 text-slate-300 ml-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {productName}
            </span>
          )}
        </Link>

        {/* Centro: Enlaces de navegación del producto (Escritorio) */}
        <div className="hidden md:flex" style={{ justifySelf: "center", alignItems: "center", gap: "24px" }}>
          {allNavLinks.map((link) => {
            const isExternal = link.external ?? link.href.startsWith("http");
            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enlace-nav-link"
                  style={{
                    color: COLORS.foreground,
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                  }}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className="enlace-nav-link"
                style={{
                  color: COLORS.foreground,
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Derecha: Herramientas Dropdown + Botón CTA + Hamburguesa */}
        <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "12px" }}>
          <HerramientasDropdown />
          {renderCtaButton(false)}

          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "#0b1a3df5",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid hsla(220, 55%, 26%, 0.6)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {allNavLinks.map((link) => {
            const isExternal = link.external ?? link.href.startsWith("http");
            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none", fontSize: "15px" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: "white", textDecoration: "none", fontSize: "15px" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">{renderCtaButton(true)}</div>
        </div>
      )}
    </nav>
  );
}
