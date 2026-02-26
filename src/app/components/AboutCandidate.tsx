import { CheckCircle } from "lucide-react";
import candidatoProfile from "../../assets/2f4fc1dd46ab33646704d10a892b381409c19502.png";

export function AboutCandidate() {
  const highlights = [
    "Más de 20 años de ejercicio profesional en el ámbito jurídico",
    "Docente universitario formando nuevos profesionales del Derecho",
    "Líder del Movimiento de Emergencia Nacional por la Seguridad Social",
    "Amplia experiencia en gestión pública y fiscalización",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src={candidatoProfile}
                alt="Dr. Yerko Orozco - Concejal del Pueblo y Para el Pueblo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Yerko Orozco Mariscal:{" "}
              <span className="text-[#e10915]">Experiencia y Compromiso</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Abogado con más de 20 años de ejercicio profesional, con una sólida trayectoria 
              en el ámbito jurídico, institucional y social en Bolivia, particularmente en 
              Santa Cruz de la Sierra.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Licenciado en Ciencias Jurídicas, Políticas y Sociales, con postgrados en 
              Derecho Penal y Procedimiento Penal, Derecho Laboral Corporativo y Seguridad Social, 
              y Educación Superior. Ha complementado su formación con cursos especializados en 
              Responsabilidad en la Función Pública y Administración Municipal.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Como docente universitario, contribuye a la formación de nuevos profesionales del 
              Derecho con énfasis en la ética y la responsabilidad pública.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Su experiencia incluye roles como Asesor del Directorio de EMACRUZ, Asesor en el 
              Concejo Municipal de Santa Cruz, Asesor legal en el Órgano Judicial, Autoridad 
              Sumariante del Consejo de la Magistratura, y líder nacional del Movimiento de 
              Emergencia Nacional por la Seguridad Social, defendiendo los derechos de jubilados 
              y adultos mayores.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#2e7d32] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}