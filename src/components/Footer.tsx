import React from 'react';

/**
 * Footer clonado 1:1 del sitio original redenlace.cl
 * Valores tomados del bundle original:
 *  - footer: bg-navy-deep border-t border-border px-6 py-14
 *  - container: max-width 1280px, padding lateral 1.5rem
 *  - grid: md:grid-cols-[2fr_1fr_1fr] gap-10
 *  - logo "lg": img h-14 w-14 + texto text-2xl, font-display extrabold tracking-wider
 *  - textos: text-muted-foreground con opacidad 80% / 60%
 */

const COLORS = {
  navyDeep: 'hsl(222, 85%, 7%)',
  border: 'hsl(220, 55%, 26%)',
  muted: '215, 25%, 70%',
  blueGlow: 'hsl(209, 96%, 56%)',
  orange: 'hsl(30, 98%, 57%)',
  foreground: 'hsl(210, 33%, 96%)',
};

const URL_PLAY = 'https://play.google.com/store/apps/details?id=com.enlace&pcampaignid=web_share';

const enlaceLinks = [
  { label: 'Soluciones', href: '#soluciones', external: false },
  { label: 'Productos', href: '#productos', external: false },
  { label: 'Proyectos', href: '#proyectos', external: false },
  { label: 'Nosotros', href: '#nosotros', external: false },
  { label: 'Contacto', href: '#contacto', external: false },
];

const contactoLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/56941278725', external: true },
  { label: 'info@redenlace.cl', href: 'mailto:info@redenlace.cl', external: false },
  { label: 'Instagram', href: 'https://www.instagram.com/enlaceapp.oficial/', external: true },
  { label: 'Google Play', href: URL_PLAY, external: true },
  { label: 'Red Social ENLACE', href: 'https://redenlace.cl', external: true },
];

function FooterCol({ title, items }: { title: string; items: { label: string; href: string; external: boolean }[] }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "'Syne', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: COLORS.foreground,
          margin: '0 0 16px 0',
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="footer-link"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: `hsla(${COLORS.muted}, 0.8)`,
                textDecoration: 'none',
                transition: 'color .3s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: COLORS.navyDeep,
        borderTop: `1px solid ${COLORS.border}`,
        padding: '56px 24px',
        boxSizing: 'border-box',
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* container: max 1280px, centrado, padding lateral 1.5rem */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          boxSizing: 'border-box',
        }}
      >
        {/* Grid 2fr 1fr 1fr */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/enlace-logo.png"
                alt="ENLACE"
                style={{
                  width: '56px',
                  height: '56px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px hsla(209, 96%, 56%, 0.35))',
                }}
              />
              <div
                style={{
                  fontFamily: "'Syne', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: '24px',
                  lineHeight: 1,
                  letterSpacing: '0.05em',
                }}
              >
                <span style={{ color: COLORS.blueGlow }}>ENLA</span>
                <span style={{ color: COLORS.orange }}>CE</span>
              </div>
            </div>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.625,
                color: `hsla(${COLORS.muted}, 0.8)`,
                margin: '16px 0 0 0',
                maxWidth: '320px',
              }}
            >
              Soluciones digitales para emprendedores, empresas y negocios. Creamos páginas web, aplicaciones, software y herramientas pensadas para necesidades reales.
            </p>
            <p
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                color: `hsla(${COLORS.muted}, 0.6)`,
                margin: '12px 0 0 0',
              }}
            >
              La Serena · Coquimbo · Chile
            </p>

            {/* Redes Sociales Interactivas (Círculos idénticos a la referencia) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '18px' }}>
              {/* Instagram Interactivo */}
              <a
                href="https://www.instagram.com/enlaceapp.oficial/"
                target="_blank"
                rel="noreferrer"
                title="Instagram @enlaceapp.oficial"
                aria-label="Instagram @enlaceapp.oficial"
                className="w-11 h-11 rounded-full bg-[#132238] border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:shadow-[0_0_20px_rgba(225,48,108,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* TikTok Interactivo */}
              <a
                href="https://www.tiktok.com/@enlaceapp.oficial"
                target="_blank"
                rel="noreferrer"
                title="TikTok @enlaceapp.oficial"
                aria-label="TikTok @enlaceapp.oficial"
                className="w-11 h-11 rounded-full bg-[#132238] border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:border-cyan-400/50 hover:bg-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:info@redenlace.cl"
                title="Email: info@redenlace.cl"
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-[#132238] border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:border-blue-400/50 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/56941278725"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp: +56 9 4127 8725"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-[#132238] border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:border-emerald-400/50 hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          <FooterCol title="ENLACE" items={enlaceLinks} />
          <FooterCol title="Contacto" items={contactoLinks} />
        </div>

        {/* Barra inferior */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: `1px solid ${COLORS.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '12px', lineHeight: '16px', color: `hsla(${COLORS.muted}, 0.6)`, margin: 0 }}>
            © 2026 ENLACE Soluciones Digitales · Una iniciativa de Bajo Deslinde SPA
          </p>
          <p style={{ fontSize: '12px', lineHeight: '16px', color: `hsla(${COLORS.muted}, 0.6)`, margin: 0 }}>
            redenlace.cl
          </p>
        </div>
      </div>
    </footer>
  );
}
