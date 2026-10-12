import React from "react";
import Link from "next/link";
import { ProductAction, ProductConfig, ProductStat } from "@/types/product";

export interface ProductHeroProps {
  config?: ProductConfig;
  logoUrl?: string;
  badgeText?: string;
  badgeDotColor?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: ProductAction;
  secondaryCta?: ProductAction;
  whatsappCta?: ProductAction;
  stats?: ProductStat[];
  note?: string;
  children?: React.ReactNode;
}

export default function ProductHero({
  config,
  logoUrl: customLogo,
  badgeText: customBadgeText,
  badgeDotColor = "#10B981",
  title,
  subtitle,
  primaryCta: customPrimaryCta,
  secondaryCta: customSecondaryCta,
  whatsappCta,
  stats: customStats,
  note,
  children,
}: ProductHeroProps) {
  const logo = customLogo || config?.logoUrl || "/enlace-logo.png";
  const badge = customBadgeText || config?.badge?.text;
  const dotColor = config?.badge?.dotColor || badgeDotColor;
  const heroTitle = title || (
    <>
      Potencia tu trabajo con{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
        {config?.name || "ENLACE"}
      </span>
    </>
  );
  const heroSubtitle = subtitle || config?.tagline || config?.description;
  const primary = customPrimaryCta || config?.primaryCta;
  const secondary = customSecondaryCta || config?.secondaryCta;
  const heroStats = customStats || config?.heroStats || [];

  const renderActionButton = (action?: ProductAction, isPrimary = false) => {
    if (!action) return null;
    const isExternal = action.external ?? action.href.startsWith("http");

    const className = isPrimary
      ? "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-base shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
      : action.variant === "whatsapp"
      ? "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_10px_25px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5 text-center"
      : "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-base transition-colors text-center";

    const content = (
      <>
        {action.icon}
        <span>{action.label}</span>
      </>
    );

    if (isExternal) {
      return (
        <a
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={action.href} className={className}>
        {content}
      </Link>
    );
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 text-slate-100">
      {/* Orbs de iluminación ambiental */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Logo del producto */}
        {logo && (
          <div className="flex justify-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={config?.name || "ENLACE"}
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            />
          </div>
        )}

        {/* Badge superior */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-inner">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: dotColor }}
            />
            <span>{badge}</span>
          </div>
        )}

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.1] mb-6">
          {heroTitle}
        </h1>

        {/* Subtítulo descriptivo */}
        {heroSubtitle && (
          <div className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            {heroSubtitle}
          </div>
        )}

        {/* Botones de acción */}
        {(primary || secondary || whatsappCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {renderActionButton(primary, true)}
            {renderActionButton(secondary, false)}
            {renderActionButton(whatsappCta, false)}
          </div>
        )}

        {/* Nota complementaria bajo botones */}
        {note && (
          <p className="text-xs text-slate-400 text-center mb-12 max-w-md mx-auto">
            {note}
          </p>
        )}

        {/* Slot para mockups, imágenes o elementos visuales destacados */}
        {children && <div className="mt-8 mb-12">{children}</div>}

        {/* Barra de métricas / estadísticas destacadas */}
        {heroStats.length > 0 && (
          <div
            className={`grid grid-cols-${Math.min(
              heroStats.length,
              4
            )} max-w-2xl mx-auto gap-4 pt-8 border-t border-slate-800/80`}
          >
            {heroStats.map((stat, idx) => {
              const colorClass =
                stat.accentColor === "orange"
                  ? "text-orange-500"
                  : stat.accentColor === "green" || stat.accentColor === "emerald"
                  ? "text-emerald-400"
                  : "text-blue-400";

              return (
                <div
                  key={stat.label}
                  className={`p-3 text-center ${
                    idx > 0 && idx < heroStats.length ? "border-l border-slate-800/80" : ""
                  }`}
                >
                  <div className={`font-display font-extrabold text-xl md:text-2xl ${colorClass}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
