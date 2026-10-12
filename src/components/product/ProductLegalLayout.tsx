import React from "react";
import Link from "next/link";
import ProductNavbar from "./ProductNavbar";
import ProductFooter from "./ProductFooter";
import { ProductConfig } from "@/types/product";

export interface ProductLegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  backHref?: string;
  backLabel?: string;
  config?: ProductConfig;
  children: React.ReactNode;
}

export default function ProductLegalLayout({
  title,
  subtitle,
  lastUpdated,
  backHref = "/",
  backLabel = "Volver a la herramienta",
  config,
  children,
}: ProductLegalLayoutProps) {
  const documentSubtitle = subtitle || `${config?.name || "ENLACE"} · Documentación Oficial`;

  return (
    <div className="min-h-screen bg-[#071a3a] text-slate-100 font-sans flex flex-col pt-16">
      {/* Navbar de producto */}
      <ProductNavbar config={config} />

      {/* Cabecera del documento legal */}
      <section className="relative pt-16 pb-12 px-6 bg-[#091f44] border-b border-blue-900/50">
        <div className="max-w-4xl mx-auto">
          {/* Botón Volver */}
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors mb-6 bg-orange-500/10 border border-orange-500/25 px-4 py-2 rounded-xl"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{backLabel}</span>
          </Link>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight text-white">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-200">
              <span className="text-orange-400">📄</span> {documentSubtitle}
            </span>
            {lastUpdated && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5 text-blue-300">
                  <span>📅</span> Última actualización: {lastUpdated}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cuerpo del documento */}
      <section className="py-12 px-6 flex-1 bg-[#071a3a]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0b244d]/80 border border-blue-900/60 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8 text-slate-200 leading-relaxed shadow-2xl backdrop-blur-md">
            {children}
          </div>
        </div>
      </section>

      {/* Footer de producto */}
      <ProductFooter config={config} />
    </div>
  );
}
