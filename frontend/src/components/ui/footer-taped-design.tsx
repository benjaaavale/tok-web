import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

export const FooterTaped = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-100">

          {/* Brand + Social */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="/">
              <img src="/images/logo-black.png" alt="ToK" className="h-8" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
              Automatiza tus ventas por mensajes con IA. WhatsApp, Instagram y Messenger en un solo lugar.
            </p>
            <div className="flex gap-3 mt-1">
              <a href="https://www.facebook.com/profile.php?id=61572365215509" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/tok_cl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Producto</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="/#features" className="hover:text-gray-900 transition-colors">Características</a></li>
              <li><a href="/#pricing" className="hover:text-gray-900 transition-colors">Precios</a></li>
              <li><a href="https://app.tok-ai.cl" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Plataforma</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="/privacy-policy" className="hover:text-gray-900 transition-colors">Política de Privacidad</a></li>
              <li><a href="/terms-of-use" className="hover:text-gray-900 transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="tel:+56991224190" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +56 9 9122 4190
                </a>
              </li>
              <li>
                <a href="mailto:ventas@tok-ai.cl" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  ventas@tok-ai.cl
                </a>
              </li>
              <li>
                <a href="mailto:soporte@tok-ai.cl" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  soporte@tok-ai.cl
                </a>
              </li>
              <li>
                <a href="https://instagram.com/tok_cl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  @tok_cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Apoyado por */}
        <div className="pt-8 pb-2 flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Apoyado por</p>
          <img
            src="/images/openbeauchef.webp"
            alt="OpenBeauchef"
            className="h-8 md:h-9 w-auto object-contain opacity-90"
          />
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-400 border-t border-gray-100 mt-6">
          <p className="pt-4">© {currentYear} ToK. Todos los derechos reservados.</p>
          <p className="pt-4 sm:pt-4">Hecho con ♥ en Chile 🇨🇱</p>
        </div>

      </div>
    </footer>
  );
};
