import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logoPDC from "../../assets/5aee9ce828a02fe2bfa5abb3bc6a96e3a64ce317.png";

export function Footer() {
  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Propuestas", href: "#propuestas" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Eventos", href: "#eventos" },
  ];

  const legalLinks = [
    { label: "Política de Privacidad", href: "#" },
    { label: "Transparencia Electoral", href: "#" },
    { label: "Código de Ética", href: "#" },
    { label: "Denuncias", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/yerko.orozco.mariscal.2025", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/concejal.yerko/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ConcejalYerko", label: "X (Twitter)" },
    { icon: Youtube, href: "https://www.youtube.com/@YerkoOroscoCandidato", label: "YouTube" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@yerko.orosco.concejal", label: "TikTok" },
  ];

  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoPDC} 
                alt="PDC Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-lg text-white">PDC Santa Cruz</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Partido Demócrata Cristiano - Comprometido con el progreso y el futuro de Santa Cruz.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#2e7d32] flex-shrink-0 mt-1" size={20} />
                <span className="text-sm">Av. San Martín 456, Santa Cruz de la Sierra, Bolivia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#2e7d32] flex-shrink-0" size={20} />
                <a href="tel:+59178123456" className="text-sm hover:text-white transition-colors">
                  +591 7812 3456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#2e7d32] flex-shrink-0" size={20} />
                <a href="mailto:contacto@pdcsantacruz.bo" className="text-sm hover:text-white transition-colors">yerko.orosco.concejal@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white mb-4">Transparencia</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Síguenos</h3>
            <p className="text-gray-400 text-sm mb-4">
              Mantente informado de todas nuestras actividades y propuestas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2e7d32] transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 PDC Santa Cruz - Dr. Yerko Orozco. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Candidatura registrada ante el Tribunal Electoral Departamental de Santa Cruz
          </p>
        </div>
      </div>
    </footer>
  );
}