import { ArrowRight } from "lucide-react";
import candidatoHero from "../../assets/fb41cb705c8122bdd3df88e8e1ee95fe4e12e5f3.png";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-[#e10915] text-white px-4 py-2 rounded-full text-sm mb-6">
              Concejal del Pueblo y Para el Pueblo
            </div>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Dr. Yerko Orozco
              <br />
              <span className="text-[#e10915]">PDC Santa Cruz</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Comprometido con el progreso y el futuro de nuestra ciudad. 
              Juntos construiremos una Santa Cruz más justa, moderna y próspera para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#propuestas"
                className="inline-flex items-center justify-center gap-2 bg-[#e10915] text-white px-8 py-4 rounded-lg hover:bg-[#c00812] transition-colors shadow-lg hover:shadow-xl"
              >
                Súmate al cambio
                <ArrowRight size={20} />
              </a>
              <a
                href="#trayectoria"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-[#2e7d32] hover:text-[#2e7d32] transition-colors"
              >
                Conoce mi trayectoria
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={candidatoHero}
                  alt="Dr. Yerko Orozco - Concejal PDC"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#2e7d32] opacity-20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#e10915] opacity-20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-[#2e7d32] opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-[#e10915] opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}