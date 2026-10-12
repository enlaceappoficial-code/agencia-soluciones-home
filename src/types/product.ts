import React from "react";

export interface ProductNavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProductAction {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
}

export interface ProductStat {
  value: string;
  label: string;
  accentColor?: "orange" | "blue" | "green" | "emerald";
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string | React.ReactNode;
  tag?: string;
  accentColor?: "blue" | "orange" | "green" | "purple";
}

export interface ProductPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  monthlyEquivalent?: string;
  description: string;
  highlightNote?: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
  cta: ProductAction;
}

export interface ProductLegalLink {
  label: string;
  href: string;
  lastUpdated?: string;
}

export interface ProductContactLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export interface ProductConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logoUrl?: string;
  badge?: {
    text: string;
    dotColor?: string;
  };
  accentColor?: {
    primary?: string; // hex o clase de acento principal
    gradientText?: string; // clase Tailwind de degradado de texto
    accentHex?: string;
  };
  navLinks: ProductNavLink[];
  primaryCta: ProductAction;
  secondaryCta?: ProductAction;
  heroStats?: ProductStat[];
  features?: ProductFeature[];
  plans?: {
    title?: string;
    subtitle?: string;
    hasToggle?: boolean;
    items: ProductPlan[];
  };
  legalLinks?: ProductLegalLink[];
  contactLinks?: ProductContactLink[];
  location?: string;
}
