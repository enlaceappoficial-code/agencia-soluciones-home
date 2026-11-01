"use client";

import React, { useState, useEffect } from "react";

// ── CONFIGURACIÓN DEL ECOSISTEMA Y ALGORITMOS ──────────────────────────────
interface PlanInfo {
  id: string;
  name: string;
  priceAnual: string;
  priceSemestral?: string;
  priceDisplay: string;
  pNum: number;
  color: string;
  desc?: string;
}

interface AppInfo {
  id: string;
  name: string;
  icon: string;
  prefix: string;
  secret: string;
  tag: string;
  url: string;
  plans: Record<string, PlanInfo>;
  defaultPlan: string;
}

const APPS: Record<string, AppInfo> = {
  ecp: {
    id: "ecp",
    name: "Constructor Pro & Medidas",
    icon: "🏗️",
    prefix: "ECP",
    secret: "ECPv2#B7k$mP9@vX",
    tag: "Desktop & Web",
    url: "https://redenlace.cl/constructor-pro",
    plans: {
      starter:     { id: "starter",     name: "Starter (Red Enlace)", priceAnual: "$19.990", priceDisplay: "$19.990 (Pago único)", pNum: 1, color: "#10b981", desc: "Gratis miembros Red Enlace" },
      basico:      { id: "basico",      name: "Básico",              priceAnual: "$59.990", priceDisplay: "$59.990/año", pNum: 2, color: "#34d399", desc: "Presupuestos + Clientes + PDF" },
      constructor: { id: "constructor", name: "Constructor",         priceAnual: "$89.990", priceDisplay: "$89.990/año", pNum: 3, color: "#38bdf8", desc: "Todo Básico + APU + Catálogo" },
      pro:         { id: "pro",         name: "Pro (Más Popular)",   priceAnual: "$129.990", priceDisplay: "$129.990/año", pNum: 4, color: "#a78bfa", desc: "Cubicación + Gantt + App Medidas" },
      plus:        { id: "plus",        name: "Plus",                priceAnual: "$179.990", priceDisplay: "$179.990/año", pNum: 5, color: "#f5a020", desc: "Todo Pro + Mercado Público" },
      procloud:    { id: "procloud",    name: "Pro Cloud",           priceAnual: "$24.990/m", priceDisplay: "$24.990/mes", pNum: 6, color: "#f43f5e", desc: "Suscripción mensual" }
    },
    defaultPlan: "pro"
  },
  agenda: {
    id: "agenda",
    name: "Enlace Agenda Pro",
    icon: "🗓️",
    prefix: "ENL-AG",
    secret: "AGv1#Z9r$tK5@wM",
    tag: "PWA Web",
    url: "https://agenda.redenlace.cl",
    plans: {
      gratis:  { id: "gratis",  name: "Gratis",   priceAnual: "$0",       priceSemestral: "$0",       priceDisplay: "Gratis ($0)", pNum: 1, color: "#10b981", desc: "1 Profesional (30 citas/mes)" },
      inicial: { id: "inicial", name: "Inicial",  priceAnual: "$24.990",  priceSemestral: "$14.990",  priceDisplay: "$24.990/año ($14.990 sem)", pNum: 2, color: "#38bdf8", desc: "1 Profesional ilimitado" },
      pro:     { id: "pro",     name: "Pro",      priceAnual: "$49.990",  priceSemestral: "$29.990",  priceDisplay: "$49.990/año ($29.990 sem)", pNum: 3, color: "#f5a020", desc: "Hasta 3 Profesionales + Señas" },
      premium: { id: "premium", name: "Premium",  priceAnual: "$89.990",  priceSemestral: "$49.990",  priceDisplay: "$89.990/año ($49.990 sem)", pNum: 4, color: "#a855f7", desc: "Profesionales ilimitados" }
    },
    defaultPlan: "pro"
  },
  peluqueria: {
    id: "peluqueria",
    name: "Barbería & Peluquería Pro",
    icon: "💈",
    prefix: "ENL-BP",
    secret: "BPv1#X3k$qP8@vN",
    tag: "PWA Web",
    url: "https://barberia.redenlace.cl",
    plans: {
      gratis:  { id: "gratis",  name: "Gratis",   priceAnual: "$0",       priceSemestral: "$0",       priceDisplay: "Gratis ($0)", pNum: 1, color: "#10b981", desc: "1 Barbero (30 reservas/mes)" },
      inicial: { id: "inicial", name: "Inicial",  priceAnual: "$24.990",  priceSemestral: "$14.990",  priceDisplay: "$24.990/año ($14.990 sem)", pNum: 2, color: "#38bdf8", desc: "1 Barbero reservas ilimitadas" },
      plus:    { id: "plus",    name: "Plus",     priceAnual: "$49.990",  priceSemestral: "$29.990",  priceDisplay: "$49.990/año ($29.990 sem)", pNum: 3, color: "#f5a020", desc: "Hasta 3 Barberos/Sillones + Señas" },
      pro:     { id: "pro",     name: "Pro",      priceAnual: "$89.990",  priceSemestral: "$49.990",  priceDisplay: "$89.990/año ($49.990 sem)", pNum: 4, color: "#a855f7", desc: "Barberos y sillones ilimitados" }
    },
    defaultPlan: "plus"
  },
  eo: {
    id: "eo",
    name: "Enlace Obras (Faenas)",
    icon: "🦺",
    prefix: "EO",
    secret: "EOv1#N9x$mK3@wZ",
    tag: "Standalone",
    url: "https://obras.redenlace.cl",
    plans: {
      demo:    { id: "demo",    name: "Demo",      priceAnual: "Gratis",   priceDisplay: "Demo Gratis", pNum: 1, color: "#94a3b8" },
      obras:   { id: "obras",   name: "Obras",     priceAnual: "$149.000", priceDisplay: "$149.000",    pNum: 2, color: "#38bdf8" },
      pro:     { id: "pro",     name: "Pro Obras", priceAnual: "$249.000", priceDisplay: "$249.000",    pNum: 3, color: "#a78bfa" },
      empresa: { id: "empresa", name: "Empresa",   priceAnual: "$449.000", priceDisplay: "$449.000",    pNum: 4, color: "#f5a020" }
    },
    defaultPlan: "obras"
  },
  gd: {
    id: "gd",
    name: "Gestión Documental EGD",
    icon: "📁",
    prefix: "EGD",
    secret: "EGDv1#K2p$nR7@mQ",
    tag: "Standalone",
    url: "https://documentos.redenlace.cl",
    plans: {
      basico:   { id: "basico",   name: "Básico",          priceAnual: "$49.990",  priceDisplay: "$49.990",  pNum: 1, color: "#38bdf8" },
      estandar: { id: "estandar", name: "Estándar",        priceAnual: "$99.990",  priceDisplay: "$99.990",  pNum: 2, color: "#a78bfa" },
      full:     { id: "full",     name: "Full Subcontrato", priceAnual: "$149.990", priceDisplay: "$149.990", pNum: 3, color: "#f5a020" }
    },
    defaultPlan: "full"
  },
  restoran: {
    id: "restoran",
    name: "Enlace Restorán / POS",
    icon: "🍽️",
    prefix: "ENL-RT",
    secret: "RTv1#M7x$pL2@bV",
    tag: "PWA Web",
    url: "https://restoran.redenlace.cl",
    plans: {
      basico: { id: "basico", name: "Básico", priceAnual: "$39.990", priceDisplay: "$39.990/año", pNum: 1, color: "#38bdf8" },
      pro:    { id: "pro",    name: "Pro",    priceAnual: "$69.990", priceDisplay: "$69.990/año", pNum: 2, color: "#f5a020" }
    },
    defaultPlan: "pro"
  },
  almacen: {
    id: "almacen",
    name: "Enlace Almacén (Ventas)",
    icon: "🏪",
    prefix: "ENL-AL",
    secret: "ALv1#V4s$kY9@qZ",
    tag: "PWA Web",
    url: "https://almacen.redenlace.cl",
    plans: {
      basico: { id: "basico", name: "Básico", priceAnual: "$24.990", priceDisplay: "$24.990/año", pNum: 1, color: "#38bdf8" },
      pro:    { id: "pro",    name: "Pro",    priceAnual: "$49.990", priceDisplay: "$49.990/año", pNum: 2, color: "#f5a020" }
    },
    defaultPlan: "pro"
  },
  bienestar: {
    id: "bienestar",
    name: "Enlace Bienestar & Salud",
    icon: "🌿",
    prefix: "ENL-BN",
    secret: "BNv1#Q8w$jM6@xK",
    tag: "PWA Web",
    url: "https://bienestar.redenlace.cl",
    plans: {
      basico: { id: "basico", name: "Básico", priceAnual: "$29.990", priceDisplay: "$29.990/año", pNum: 1, color: "#38bdf8" },
      pro:    { id: "pro",    name: "Pro",    priceAnual: "$59.990", priceDisplay: "$59.990/año", pNum: 2, color: "#f5a020" }
    },
    defaultPlan: "pro"
  }
};

const EPOCH = new Date("2025-01-01T00:00:00");
const B36C = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Base34 segura sin confusiones I / O

function b36(n: number): string {
  n = Math.abs(Math.floor(n));
  if (!n) return "0";
  let r = "";
  while (n) {
    r = B36C[n % 34] + r;
    n = Math.floor(n / 34);
  }
  return r;
}

function djb2(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) & 0xffffffff;
  }
  return h;
}

function extractRutKey(rutRaw: string): string {
  if (!rutRaw) return "";
  const clean = rutRaw.replace(/[^0-9]/g, "").slice(0, -1);
  return clean.length >= 6 ? clean.slice(-8) : "";
}

function validarRutChileno(rutCompleto: string): boolean {
  if (!rutCompleto || typeof rutCompleto !== "string") return false;
  const clean = rutCompleto.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length < 8 || clean.length > 9) return false;
  const cuerpo = clean.slice(0, -1);
  const dv = clean.slice(-1);
  let suma = 0;
  let multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += multiplo * parseInt(cuerpo.charAt(i), 10);
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }
  const dvEsperadoNum = 11 - (suma % 11);
  let dvEsperado = "";
  if (dvEsperadoNum === 11) dvEsperado = "0";
  else if (dvEsperadoNum === 10) dvEsperado = "K";
  else dvEsperado = dvEsperadoNum.toString();
  return dv === dvEsperado;
}

function formatRut(value: string): string {
  const clean = value.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length <= 1) return clean;
  const cuerpo = clean.slice(0, -1);
  const dv = clean.slice(-1);
  let formatted = "";
  let count = 0;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    formatted = cuerpo.charAt(i) + formatted;
    count++;
    if (count % 3 === 0 && i !== 0) formatted = "." + formatted;
  }
  return `${formatted}-${dv}`;
}

export default function MasterLicenciasPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  // Form states
  const [appId, setAppId] = useState("agenda");
  const [planId, setPlanId] = useState("pro");
  const [rut, setRut] = useState("");
  const [isRutValid, setIsRutValid] = useState<boolean | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [duration, setDuration] = useState("12");
  const [expiry, setExpiry] = useState("");
  const [notes, setNotes] = useState("");

  // Result
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [waMessage, setWaMessage] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // History
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    // Calcular fecha por defecto
    const now = new Date();
    now.setMonth(now.getMonth() + 12);
    setExpiry(now.toISOString().split("T")[0]);

    // Cargar historial
    try {
      const stored = localStorage.getItem("enlace_master_license_history_v1");
      if (stored) setHistory(JSON.parse(stored));
    } catch {}
  }, []);

  const handleDurationChange = (months: number) => {
    setDuration(months.toString());
    const now = new Date();
    now.setMonth(now.getMonth() + months);
    setExpiry(now.toISOString().split("T")[0]);
  };

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRut(e.target.value);
    setRut(formatted);
    if (formatted.length >= 8) {
      setIsRutValid(validarRutChileno(formatted));
    } else {
      setIsRutValid(null);
    }
  };

  const checkPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === "enlace2026" || pinInput.trim() === "master77") {
      setAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const emitirLicencia = () => {
    if (!rut || !validarRutChileno(rut)) {
      alert("⚠️ Debes ingresar un RUT chileno válido (Persona o Empresa).");
      return;
    }
    if (!name.trim()) {
      alert("⚠️ Debes ingresar el Nombre o Razón Social.");
      return;
    }
    if (!phone.trim()) {
      alert("⚠️ Debes ingresar el Teléfono / WhatsApp.");
      return;
    }

    const app = APPS[appId];
    const plan = app.plans[planId] || Object.values(app.plans)[0];
    const rutKey = extractRutKey(rut);

    const expDate = new Date(expiry + "T23:59:59");
    const days = Math.floor((expDate.getTime() - EPOCH.getTime()) / 86400000);
    const packed = plan.pNum * 100000 + days;
    const payload = b36(packed).padStart(6, "0");
    const chk = b36(Math.abs(djb2(payload + app.secret + rutKey)) % (34 ** 4)).padStart(4, "0");
    const key = `${app.prefix}-${payload}-${chk}-${rutKey}`;

    const diasRestantes = Math.floor((expDate.getTime() - new Date().getTime()) / 86400000);

    setGeneratedKey(key);

    const precioAplicado = parseInt(duration, 10) <= 6 && plan.priceSemestral ? `${plan.priceSemestral} (Semestral)` : `${plan.priceAnual} (Anual)`;

    const primerNombre = name.split(" ")[0] || name;
    const msg = 
`¡Hola ${primerNombre}! 👋 Te damos la bienvenida a *RED ENLACE*.

Aquí tienes tu clave oficial de activación vinculada a tu RUT para *${app.name}*:

━━━━━━━━━━━━━━━━━━━━
📦 *Detalles de tu Licencia:*
• *Aplicación:* ${app.name}
• *Plan Activado:* ${plan.name} (${precioAplicado})
• *Empresa / Titular:* ${name}
• *RUT Registrado:* ${rut}
• *Vigencia:* ${expiry} (${diasRestantes} días)
━━━━━━━━━━━━━━━━━━━━

🔑 *Tu Clave de Activación Oficial:*
\`${key}\`

🌐 *Acceso a tu plataforma:*
${app.url}

💡 *Instrucciones:*
1. Abre tu aplicación o programa.
2. Ingresa a *Tu Plan / Licencia*.
3. Pega la clave generada y verifica que el RUT de tu empresa coincida con *${rut}*.

¡Cualquier consulta técnica estamos disponibles por este mismo canal! 🚀`;

    setWaMessage(msg);

    // Guardar en historial
    const newEntry = {
      clave: key,
      appId,
      appName: app.name,
      planName: `${plan.name} (${precioAplicado})`,
      clientName: name,
      clientRut: rut,
      clientPhone: phone,
      expDate: expiry,
      diasRestantes,
      createdAt: new Date().toISOString()
    };

    const updatedHist = [newEntry, ...history.slice(0, 199)];
    setHistory(updatedHist);
    try {
      localStorage.setItem("enlace_master_license_history_v1", JSON.stringify(updatedHist));
    } catch {}

    triggerToast("✅ ¡Licencia generada y vinculada al RUT!");
  };

  // ── PANTALLA DE ACCESO RESTRINGIDO (PIN) ──
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#050b14] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#0a1324] border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
          <div className="inline-block p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-4 text-3xl">
            🔐
          </div>
          <h1 className="text-xl font-black text-white uppercase tracking-wider mb-2">
            Panel Maestro de Licencias
          </h1>
          <p className="text-xs text-slate-400 mb-6">
            Acceso exclusivo de administración Red Enlace. Ingresa tu PIN de seguridad.
          </p>

          <form onSubmit={checkPin} className="space-y-4">
            <input
              type="password"
              placeholder="Ingresa clave maestra..."
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full bg-[#050b14] border border-white/10 rounded-xl px-4 py-3 text-white text-center font-mono text-lg tracking-widest focus:outline-none focus:border-orange-500 transition-colors"
              autoFocus
            />
            {pinError && (
              <p className="text-xs text-red-400 font-bold">PIN incorrecto. Revisa tus credenciales.</p>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-black font-black py-3 rounded-xl uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
            >
              Ingresar al Generador
            </button>
          </form>
        </div>
      </div>
    );
  }

  const currentApp = APPS[appId];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071328] via-[#050b14] to-[#02060d] text-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0a1324]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-black font-black text-xs px-3 py-1.5 rounded-lg shadow-lg shadow-orange-500/30">
              ENLACE
            </span>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">
                Generador Maestro de <span className="text-orange-400">Licencias Oficiales</span>
              </h1>
              <p className="text-xs text-slate-400">
                Tarifas oficiales sincronizadas · Sello criptográfico vinculado al RUT
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Modo Administrador Activo
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* FORMULARIO */}
          <div className="lg:col-span-7 bg-[#0a1324] border border-white/10 rounded-2xl p-6 space-y-5 shadow-2xl">
            
            {/* SELECTOR DE APP */}
            <div>
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                1. Selecciona la Aplicación
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.values(APPS).map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => {
                      setAppId(app.id);
                      setPlanId(app.defaultPlan);
                    }}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center text-center gap-1 transition-all cursor-pointer ${
                      appId === app.id
                        ? "bg-orange-500/15 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "bg-[#050b14] border-white/5 text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <span className="text-2xl">{app.icon}</span>
                    <span className="text-xs font-bold leading-tight">{app.name}</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                      {app.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RUT VINCULADO */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">
                  2. RUT de la Empresa o Persona <span className="text-orange-500">* (Obligatorio)</span>
                </label>
                {isRutValid !== null && (
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                    isRutValid ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-red-500/20 text-red-400 border border-red-500/40"
                  }`}>
                    {isRutValid ? "RUT Válido ✓" : "RUT Inválido ✕"}
                  </span>
                )}
              </div>
              <input
                type="text"
                placeholder="Ej: 76.543.210-K o 12.345.678-9"
                value={rut}
                onChange={handleRutChange}
                maxLength={12}
                className="w-full bg-[#050b14] border border-white/10 rounded-xl px-4 py-3 font-mono text-cyan-400 font-bold text-sm focus:outline-none focus:border-orange-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                🔒 La clave no funcionará en otro computador o sesión con un RUT diferente.
              </p>
            </div>

            {/* DATOS DEL CLIENTE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                  Nombre / Razón Social <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej: Salón Estilo o Constructora San Juan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#050b14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                  WhatsApp / Teléfono <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+56 9 8765 4321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#050b14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* SELECCIÓN DE PLAN (TARIFAS OFICIALES) */}
            <div>
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                Plan a Emitir (Valores Oficiales Publicados)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.values(currentApp.plans).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      planId === p.id
                        ? "bg-orange-500/15 border-orange-500 text-white"
                        : "bg-[#050b14] border-white/5 text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold" style={{ color: p.color }}>{p.name}</div>
                    <div className="text-[11px] text-orange-400 font-extrabold">{p.priceDisplay}</div>
                    {p.desc && <div className="text-[9px] text-slate-400 mt-0.5">{p.desc}</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* DURACIÓN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                  Duración del Contrato
                </label>
                <select
                  value={duration}
                  onChange={(e) => handleDurationChange(parseInt(e.target.value, 10))}
                  className="w-full bg-[#050b14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="1">1 Mes (Prueba / Mensual)</option>
                  <option value="3">3 Meses (Trimestral)</option>
                  <option value="6">6 Meses (Semestral)</option>
                  <option value="12">12 Meses (Plan Anual - Recomendado)</option>
                  <option value="24">24 Meses</option>
                  <option value="1200">Vitalicio (100 Años)</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                  Fecha de Vencimiento
                </label>
                <input
                  type="date"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full bg-[#050b14] border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={emitirLicencia}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-black font-black py-3.5 rounded-xl uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex justify-center items-center gap-2"
            >
              <span>⚡ Generar Clave Sellada al RUT</span>
            </button>
          </div>

          {/* RESULTADO Y WHATSAPP */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`bg-[#0a1324] border rounded-2xl p-6 shadow-2xl transition-all ${
              generatedKey ? "border-emerald-500/60 bg-emerald-950/10" : "border-white/10"
            }`}>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  Clave de Activación Oficial
                </span>
                {generatedKey && (
                  <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded">
                    SELLADO RUT ✓
                  </span>
                )}
              </div>

              <div className="bg-[#050b14] border border-white/10 rounded-xl p-4 text-center select-all font-mono font-black text-emerald-400 text-base break-all tracking-wider mb-4">
                {generatedKey || "COMPLETA EL FORMULARIO Y GENERA"}
              </div>

              {generatedKey && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded bg-white/5">
                      <span className="text-slate-400 block text-[10px]">App:</span>
                      <strong>{currentApp.name}</strong>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <span className="text-slate-400 block text-[10px]">RUT Sellado:</span>
                      <strong className="text-cyan-400 font-mono">{rut}</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(generatedKey);
                        triggerToast("📋 Clave copiada al portapapeles");
                      }}
                      className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      Copiar Clave
                    </button>
                    <button
                      onClick={() => {
                        const cleanPhone = phone.replace(/[^0-9]/g, "");
                        const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`;
                        window.open(url, "_blank");
                      }}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/30 cursor-pointer"
                    >
                      📲 WhatsApp
                    </button>
                  </div>

                  {/* PREVIEW WHATSAPP */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Mensaje Listo:</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(waMessage);
                          triggerToast("📄 Mensaje copiado");
                        }}
                        className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                      >
                        Copiar Todo
                      </button>
                    </div>
                    <div className="bg-[#0b141a] border border-white/5 rounded-xl p-3 text-[11px] text-slate-200 font-sans whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                      {waMessage}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* HISTORIAL RECIENTE */}
            <div className="bg-[#0a1324] border border-white/10 rounded-2xl p-5 shadow-2xl">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                Últimas Licencias Emitidas ({history.length})
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {history.length === 0 ? (
                  <p className="text-xs text-slate-500 text-center py-4">No hay emisiones recientes</p>
                ) : (
                  history.slice(0, 8).map((h, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">{h.clientName}</div>
                        <div className="text-[10px] text-cyan-400 font-mono">{h.clientRut} · {h.appName} · {h.planName}</div>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(h.clave);
                          triggerToast("Clave copiada: " + h.clave);
                        }}
                        className="text-[10px] font-bold bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-slate-300"
                      >
                        Copiar
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

      {toastMsg && (
        <div className="fixed bottom-6 right-6 bg-[#0a1324] border border-emerald-500 text-emerald-400 px-4 py-3 rounded-xl shadow-2xl text-xs font-bold z-50 animate-bounce">
          {toastMsg}
        </div>
      )}
    </div>
  );
}
