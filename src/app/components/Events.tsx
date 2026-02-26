import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import eventoCultural from "../../assets/a063e2445a785d504f85083a79ed4d48d0def644.png";
import logoConcejales from "../../assets/7750aab80171457636918b2d13eaa87a2100869b.png";
import reunionPDC from "../../assets/8db4a9162b19d27bde4e435725d0f5cf8c7dad48.png";

const events = [
  {
    id: 1,
    title: "Encuentro con vecinos del Distrito 3",
    date: "15 Febrero 2026",
    time: "18:00 - 20:00",
    location: "Plaza Principal, Distrito 3",
    description: "Diálogo abierto sobre seguridad ciudadana y mejora de espacios públicos.",
    image: reunionPDC,
  },
  {
    id: 2,
    title: "Presentación de propuestas educativas",
    date: "18 Febrero 2026",
    time: "10:00 - 12:00",
    location: "Auditorio Municipal",
    description: "Detalle del plan de mejora educativa y becas para estudiantes cruceños.",
    image: logoConcejales,
  },
  {
    id: 3,
    title: "Participación en eventos culturales",
    date: "22 Febrero 2026",
    time: "15:00 - 19:00",
    location: "Recorrido por todos los distritos",
    description: "Recorrido por la ciudad para escuchar las necesidades de cada comunidad.",
    image: eventoCultural,
  },
];

export function Events() {
  return (
    <section id="eventos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
            Próximos <span className="text-[#e10915]">Eventos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Únete a nuestros encuentros ciudadanos y forma parte del cambio. 
            Tu voz es fundamental para construir el futuro de Santa Cruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => (
            <article
              key={event.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#e10915] text-white px-3 py-1 rounded-full text-sm">
                  Próximamente
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-4 group-hover:text-[#e10915] transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-[#2e7d32]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-[#2e7d32]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-[#2e7d32]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}