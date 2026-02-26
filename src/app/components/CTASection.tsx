import { Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#e10915] to-[#c00812] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl mb-6">
            ¿Quieres ser parte del cambio?
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-95 leading-relaxed">
            Tu apoyo es fundamental para construir la Santa Cruz que todos queremos.
            Únete a nuestro movimiento y trabaja con nosotros por un futuro mejor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+59178123456"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#e10915] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg min-w-[240px]"
            >
              <Phone size={20} />
              <span>+591 7812 3456</span>
            </a>
            <a
              href="mailto:contacto@santacruzalfrente.bo"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-[#e10915] transition-colors min-w-[240px]"
            >
              <Mail size={20} />
              <span>Enviar Email</span>
            </a>
          </div>

          <p className="text-sm opacity-90">
            Oficinas de campaña abiertas de lunes a viernes, 9:00 a 18:00h
          </p>
        </div>
      </div>
    </section>
  );
}