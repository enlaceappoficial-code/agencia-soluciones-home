import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070e1e] text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18)_0%,rgba(249,115,22,0.08)_45%,transparent_70%)] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[hsla(30,98%,57%,0.3)] bg-[hsla(30,98%,57%,0.1)] text-[hsl(30,98%,57%)] text-xs font-semibold uppercase tracking-wider mb-6">
          Error 404 · No encontrado
        </div>

        {/* Big 404 Header */}
        <h1 className="font-['Syne',sans-serif] text-7xl md:text-8xl font-black tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-['Syne',sans-serif]">
          Esta página no está disponible
        </h2>

        <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-['DM_Sans',sans-serif]">
          El enlace que estás buscando no existe, ha cambiado de dirección o fue trasladado durante la modernización de nuestra plataforma.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Volver al Inicio
          </Link>

          <Link
            href="/#productos"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold transition-all text-center"
          >
            Explorar Herramientas
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
            Accesos directos a productos
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            <Link href="/constructor-pro" className="hover:text-orange-400 transition-colors">
              Constructor Pro
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/peluqueria" className="hover:text-blue-400 transition-colors">
              Barbería & Peluquería
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/red-social" className="hover:text-sky-400 transition-colors">
              Red Social ENLACE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
