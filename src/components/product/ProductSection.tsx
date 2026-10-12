import React from "react";

export interface ProductSectionProps {
  id?: string;
  tag?: string;
  tagColor?: "blue" | "orange" | "green" | "purple" | "emerald";
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  variant?: "navy" | "card" | "deep" | "gradient";
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl";
  className?: string;
  children: React.ReactNode;
}

const BG_VARIANTS = {
  navy: "bg-[#071a3a]",
  card: "bg-[#091f44]",
  deep: "bg-[#091a38]",
  gradient: "bg-gradient-to-b from-[#071a3a] via-[#09224d] to-[#040f24]",
};

const TAG_COLORS = {
  blue: "text-blue-400",
  orange: "text-orange-500",
  green: "text-emerald-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
};

export default function ProductSection({
  id,
  tag,
  tagColor = "blue",
  title,
  subtitle,
  align = "left",
  variant = "navy",
  hasBorderTop = false,
  hasBorderBottom = false,
  maxWidth = "6xl",
  className = "",
  children,
}: ProductSectionProps) {
  const bgClass = BG_VARIANTS[variant] || BG_VARIANTS.navy;
  const tagColorClass = TAG_COLORS[tagColor] || TAG_COLORS.blue;
  const borderTopClass = hasBorderTop ? "border-t border-blue-900/40" : "";
  const borderBottomClass = hasBorderBottom ? "border-b border-blue-900/40" : "";

  const maxWClass =
    maxWidth === "4xl"
      ? "max-w-4xl"
      : maxWidth === "5xl"
      ? "max-w-5xl"
      : maxWidth === "7xl"
      ? "max-w-7xl"
      : "max-w-6xl";

  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={`py-20 scroll-mt-20 ${bgClass} ${borderTopClass} ${borderBottomClass} ${className}`}
    >
      <div className={`${maxWClass} mx-auto px-6`}>
        {(tag || title || subtitle) && (
          <div className={`mb-14 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
            {tag && (
              <span className={`text-xs font-bold tracking-widest uppercase ${tagColorClass}`}>
                {tag}
              </span>
            )}

            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2 leading-tight">
                {title}
              </h2>
            )}

            {subtitle && (
              <div className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                {subtitle}
              </div>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
