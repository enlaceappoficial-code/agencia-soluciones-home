import React from "react";
import Link from "next/link";
import { ProductAction } from "@/types/product";

export interface ProductCtaBannerProps {
  id?: string;
  badgeText?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryAction?: ProductAction;
  secondaryAction?: ProductAction;
  note?: string;
  variant?: "gradient" | "card";
  children?: React.ReactNode;
}

export default function ProductCtaBanner({
  id = "contacto",
  badgeText,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  note,
  variant = "gradient",
  children,
}: ProductCtaBannerProps) {
  const renderAction = (action?: ProductAction, isPrimary = false) => {
    if (!action) return null;
    const isExternal = action.external ?? action.href.startsWith("http");

    const className = isPrimary
      ? "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-base shadow-[0_12px_35px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 text-center"
      : action.variant === "whatsapp"
      ? "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_10px_25px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5 text-center"
      : "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold text-base transition-colors text-center";

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
    <section
      id={id}
      className={`py-24 relative overflow-hidden scroll-mt-20 ${
        variant === "gradient"
          ? "bg-gradient-to-b from-[#071a3a] via-[#09224d] to-[#040f24]"
          : "bg-[#081a38]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-6">
            <span>{badgeText}</span>
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-6 leading-tight">
          {title}
        </h2>

        {subtitle && (
          <div className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            {subtitle}
          </div>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {renderAction(primaryAction, true)}
            {renderAction(secondaryAction, false)}
          </div>
        )}

        {note && (
          <p className="text-xs text-slate-400 text-center max-w-md mx-auto">
            {note}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
