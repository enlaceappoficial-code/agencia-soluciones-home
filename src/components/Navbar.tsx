"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import HerramientasDropdown from "./HerramientasDropdown";

/**
 * Barra superior clonada del sitio original redenlace.cl
 *  - nav: fixed top-0, z-50, glass (bg #0b1a3d99 + blur 16px), border-b border-border/60
 *  - container: max-width 1280px, padding lateral 1.5rem, h-16 (64px)
 *  - logo "md": img 40px + texto 20px, font-display extrabold tracking-wider
 *  - botón: rounded-xl, bg-gradient-blue, px-5 py-2.5, text-sm semibold, hover:shadow-glow
 */

const C = {
  blueGlow: "hsl(209, 96%, 56%)",
  orange: "hsl(30, 98%, 57%)",
  foreground: "hsl(210, 33%, 96%)",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // No renderizar el Navbar global de Agencia en páginas de producto (usan su propio ProductNavbar)
  const isProductPage =
    pathname === "/constructor-pro" ||
    pathname?.startsWith("/constructor-pro/") ||
    pathname === "/peluqueria" ||
    pathname?.startsWith("/peluqueria/");

  if (isProductPage) {
    return null;
  }

  const isRedSocial = pathname === "/red-social" || pathname?.startsWith("/red-social/");

  const navLinks = isRedSocial
    ? [
        { name: "Inicio Agencia", href: "/" },
        { name: "¿Qué es?", href: "#que-es" },
        { name: "¿Para quién?", href: "#para-quien" },
        { name: "Ecosistema", href: "#apps" },
        { name: "Cómo funciona", href: "#como-funciona" },
      ]
    : [
        { name: "Inicio", href: "#" },
        { name: "Soluciones", href: "#soluciones" },
        { name: "Productos", href: "#productos" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Nosotros", href: "#nosotros" },
      ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "auto",
        display: "block",
        background: "#0b1a3d99",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid hsla(220, 55%, 26%, 0.6)",
      }}
    >
      {/* container */}
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
        {/* Logo (size md) */}
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
            <span style={{ color: C.blueGlow }}>ENLA</span>
            <span style={{ color: C.orange }}>CE</span>
          </div>
        </Link>

        {/* Centro: enlaces (solo escritorio) */}
        <div className="hidden md:flex" style={{ justifySelf: "center", alignItems: "center", gap: "28px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="enlace-nav-link"
              style={{
                color: C.foreground,
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Derecha: botón Herramientas (Neón Naranjo) + botón Cuéntanos tu idea + hamburguesa móvil */}
        <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "12px" }}>
          <HerramientasDropdown />

          {isRedSocial ? (
            <a
              href="https://play.google.com/store/apps/details?id=com.enlace"
              target="_blank"
              rel="noopener noreferrer"
              className="enlace-nav-btn hidden md:inline-flex items-center gap-2"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(135deg, hsl(222, 93%, 45%) 0%, hsl(209, 96%, 56%) 100%)",
                padding: "10px 20px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                fontFamily: "'DM Sans', system-ui, sans-serif",
                color: "hsl(210, 40%, 98%)",
                textDecoration: "none",
                boxShadow: "0 0 16px rgba(59,130,246,0.3)",
                transition: "all .3s cubic-bezier(.4,0,.2,1)",
              }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.365-.33-.61-.83-.61-1.42V3.234c0-.59.245-1.09.61-1.42zm11.24 11.24l2.58 2.58-13.04 7.53 10.46-10.11zm0-2.108L4.39 1.056l13.04 7.53-2.58 2.36zm1.48 1.054l4.08 2.355c.92.53.92 1.402 0 1.933l-4.08 2.355-2.22-2.22 2.22-2.423z"/>
              </svg>
              Descargar App
            </a>
          ) : (
            <Link
              href="#contacto"
              className="enlace-nav-btn hidden md:inline-flex"
              style={{
                alignItems: "center",
                gap: "8px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, hsl(222, 93%, 45%) 0%, hsl(209, 96%, 56%) 100%)",
                padding: "10px 20px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                fontFamily: "'DM Sans', system-ui, sans-serif",
                color: "hsl(210, 40%, 98%)",
                textDecoration: "none",
                transition: "all .3s cubic-bezier(.4,0,.2,1)",
              }}
            >
              Cuéntanos tu idea
            </Link>
          )}

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
            style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown móvil */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "#0b1a3df2",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid hsla(220, 55%, 26%, 0.6)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{ color: "white", textDecoration: "none", fontSize: "15px" }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isRedSocial ? (
            <a
              href="https://play.google.com/store/apps/details?id=com.enlace"
              target="_blank"
              rel="noopener noreferrer"
              className="enlace-nav-btn flex items-center justify-center gap-2"
              style={{
                textAlign: "center",
                marginTop: "8px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, hsl(222, 93%, 45%) 0%, hsl(209, 96%, 56%) 100%)",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color: "hsl(210, 40%, 98%)",
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.365-.33-.61-.83-.61-1.42V3.234c0-.59.245-1.09.61-1.42zm11.24 11.24l2.58 2.58-13.04 7.53 10.46-10.11zm0-2.108L4.39 1.056l13.04 7.53-2.58 2.36zm1.48 1.054l4.08 2.355c.92.53.92 1.402 0 1.933l-4.08 2.355-2.22-2.22 2.22-2.423z"/>
              </svg>
              Descargar App
            </a>
          ) : (
            <Link
              href="#contacto"
              className="enlace-nav-btn"
              style={{
                textAlign: "center",
                marginTop: "8px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, hsl(222, 93%, 45%) 0%, hsl(209, 96%, 56%) 100%)",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color: "hsl(210, 40%, 98%)",
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              Cuéntanos tu idea
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
