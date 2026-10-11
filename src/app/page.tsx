import Hero from '@/components/Hero';
import Soluciones from '@/components/Soluciones';
import Productos from '@/components/Productos';
import Proyectos from '@/components/Proyectos';
import Proceso from '@/components/Proceso';
import Nosotros from '@/components/Nosotros';
import PorQueElegirnos from '@/components/PorQueElegirnos';
import EncuestaContacto from '@/components/EncuestaContacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(222,80%,11%)] text-slate-200">
      <Hero />
      <Soluciones />
      <Productos />
      <Proyectos />
      <Proceso />
      <Nosotros />
      <PorQueElegirnos />
      <EncuestaContacto />
      <Footer />
    </main>
  );
}

