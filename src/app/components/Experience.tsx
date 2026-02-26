import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

const timeline = [
  {
    year: "2010 - 2015",
    icon: GraduationCap,
    title: "Formación Académica",
    description: "Maestría en Gestión Pública y Administración Municipal. Universidad Mayor de San Andrés.",
  },
  {
    year: "2015 - 2019",
    icon: Briefcase,
    title: "Director de Planificación",
    description: "Dirección de Planificación Urbana en el Gobierno Municipal. Implementación de 20+ proyectos de infraestructura.",
  },
  {
    year: "2019 - 2023",
    icon: Users,
    title: "Concejal Municipal",
    description: "Representante del Distrito 5. Impulsor de leyes de transparencia y desarrollo sostenible.",
  },
  {
    year: "Presente",
    icon: Award,
    title: "Candidato a Primer Concejal",
    description: "Liderando el proyecto 'Santa Cruz al Frente' con un equipo comprometido con el cambio real.",
  },
];

export function Experience() {
  return (
    <section id="trayectoria" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
            Experiencia y <span className="text-[#e10915]">Trayectoria</span>
          </h2>
          <p className="text-lg text-gray-600">
            Una carrera construida con dedicación, transparencia y resultados medibles al
            servicio de Santa Cruz y su gente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-full lg:w-5/12 ${
                        isEven ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
                        <div className="text-[#2e7d32] mb-2">{item.year}</div>
                        <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Icon - Center */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-full flex items-center justify-center shadow-lg relative z-10">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="lg:hidden w-14 h-14 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}