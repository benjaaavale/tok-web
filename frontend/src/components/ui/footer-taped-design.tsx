import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const FooterTaped = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-100">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="/">
              <img src="/images/logo-black.png" alt="ToK" className="h-8" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
              Automatiza tus ventas por mensajes con IA. WhatsApp, Instagram y Messenger en un solo lugar.
            </p>
            <div className="flex gap-3 mt-1">
              <a href="https://www.linkedin.com/company/tok-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/tok_ai" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/tok.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gray-700 transition-colors">
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

          {/* Compañía */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Compañía</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contacto</a></li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors flex items-center gap-1.5">
                  Blog <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400">pronto</span>
                </a>
              </li>
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
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-400">
          <p>© {currentYear} ToK. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en Chile 🇨🇱</p>
        </div>

      </div>
    </footer>
  );
};
