import React from "react";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_21b320ec-6500-44c0-8260-dd4b2f3c4f72/artifacts/ds0urkqt_logo%20blanco%20png.png"
              alt="ToK Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Automatización inteligente con IA para WhatsApp. Soluciones
              personalizadas para clínicas y consultas médicas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("benefits");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("testimonials");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("faq");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/56991224190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors group"
              >
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-sky-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span>+56 9 9122 4190</span>
              </a>
              <a
                href="https://instagram.com/tok_cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors group"
              >
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-sky-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </div>
                <span>@tok_cl</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} ToK. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Automatización con IA para clínicas y consultas médicas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
