"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PeluqueriaPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(222,80%,11%)] text-slate-200 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="relative h-[calc(100vh-64px)] min-h-[640px] w-full bg-[#071A3A]">
          {!loaded && (
            <div className="absolute inset-0 z-10 grid place-items-center bg-[#071A3A]">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-[#0B2F6B]/60 px-6 py-3.5 font-semibold text-white backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <svg className="w-5 h-5 animate-spin text-blue-400" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Cargando Enlace Barbería Pro...</span>
              </div>
            </div>
          )}

          <iframe
            src="/barberia/index.html?embed=1"
            title="Enlace Barbería Pro"
            className="h-full w-full border-0"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
