import { Heart, Brain, Bus, Shield, Building, Vote, Users, Store } from "lucide-react";

const proposals = [
  {
    icon: Heart,
    title: "Protección real para nuestros adultos mayores",
    description: "Programa municipal de pensión alimentaria mensual en víveres y creación de un Hospital Geriátrico especializado, porque quienes nos dieron todo merecen dignidad y cuidado integral.",
  },
  {
    icon: Brain,
    title: "Atención profesional para personas con autismo",
    description: "Servicios especializados que garanticen diagnóstico, terapias y acompañamiento permanente para mejorar su desarrollo y calidad de vida.",
  },
  {
    icon: Bus,
    title: "Seguridad social para choferes de micros",
    description: "Promover aportes a la Gestora Pública para asegurar jubilación y seguro de salud, con implementación de turnos laborales de 8 horas, priorizando su bienestar y seguridad vial.",
  },
  {
    icon: Shield,
    title: "Defensoría del Adulto Mayor",
    description: "Institución municipal dedicada exclusivamente a la defensa y protección integral de los derechos de la tercera edad.",
  },
  {
    icon: Building,
    title: "Autonomía para la Villa Primero de Mayo",
    description: "Impulsar, en coordinación con la Asamblea Legislativa Nacional, una Ley que reconozca su condición de Gobierno Municipal Autónomo, fortaleciendo su desarrollo y representación.",
  },
  {
    icon: Vote,
    title: "Elección democrática de Subalcaldes",
    description: "Proponer que sean elegidos directamente por los ciudadanos de cada distrito, garantizando verdadera participación y control social.",
  },
  {
    icon: Users,
    title: "Impulso económico a clubes de madres",
    description: "Promover su constitución como microempresas para que puedan licitar programas de alimentación complementaria y desayuno escolar, generando ingresos y oportunidades.",
  },
  {
    icon: Store,
    title: "Seguridad jurídica para comerciantes de mercados",
    description: "Gestionar el cambio de la figura de usufructo o concesión a derecho propietario, brindando estabilidad y protección a quienes trabajan día a día.",
  },
];

export function Proposals() {
  return (
    <section id="propuestas" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
            Propuestas Firmes para{" "}
            <span className="text-[#e10915]">Transformar Nuestro Municipio</span>
          </h2>
          <p className="text-lg text-gray-600">
            Un plan concreto y humano, pensado para mejorar la calidad de vida de nuestra gente 
            y construir un municipio más justo, inclusivo y próspero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {proposals.map((proposal, index) => {
            const Icon = proposal.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-xl transition-all hover:border-[#2e7d32]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {proposal.title}
                  <span className="block w-12 h-1 bg-[#e10915] mt-2"></span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{proposal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}