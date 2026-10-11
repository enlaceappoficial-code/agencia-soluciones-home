"use client";

import Link from "next/link";
import { useState } from "react";

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

  const navLinks = [
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

        {/* Derecha: botón + hamburguesa móvil */}
        <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "16px" }}>
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
        </div>
      )}
    </nav>
  );
}
