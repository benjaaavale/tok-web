import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const FooterTaped = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="/">
              <img src="/images/logo-white.png" alt="ToK" className="h-8" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
              Automatización inteligente de WhatsApp para negocios que quieren vender más.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/company/tok-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/tok_ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:text-white transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com/tok.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600">Producto</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="/#features" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Precios</a></li>
              <li>
                <a href="https://app.tok-ai.cl" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Plataforma
                </a>
              </li>
            </ul>
          </div>

          {/* Compañía */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600">Compañía</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  Blog
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-600">pronto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="/terms-of-use" className="hover:text-white transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-gray-600">
          <p>© {currentYear} ToK. Todos los derechos reservados.</p>
          <p className="text-gray-700">Hecho con ♥ en Chile 🇨🇱</p>
        </div>

      </div>
    </footer>
  );
};
