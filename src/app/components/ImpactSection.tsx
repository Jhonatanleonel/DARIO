import reunionPDC from "../../assets/8db4a9162b19d27bde4e435725d0f5cf8c7dad48.png";

export function ImpactSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={reunionPDC}
          alt="Reunión PDC Santa Cruz"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-5xl mb-6 leading-tight">
            Trabajando por una{" "}
            <span className="text-[#e10915]">Santa Cruz</span> más fuerte
          </h2>
          <p className="text-lg lg:text-xl mb-6 leading-relaxed opacity-90">
            Nuestra ciudad merece un liderazgo que escuche, que actúe y que genere
            resultados concretos. Juntos podemos construir el futuro que nuestras familias
            necesitan y merecen.
          </p>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
            Este proyecto político no es solo mío, es de todos los cruceños que creen en
            el progreso, en la justicia social y en el trabajo honesto. Es hora de que
            Santa Cruz dé un salto adelante.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl text-[#e10915] mb-2">15+</div>
              <div className="text-sm lg:text-base opacity-80">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl text-[#e10915] mb-2">50+</div>
              <div className="text-sm lg:text-base opacity-80">Proyectos ejecutados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl text-[#e10915] mb-2">100%</div>
              <div className="text-sm lg:text-base opacity-80">Compromiso ciudadano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}