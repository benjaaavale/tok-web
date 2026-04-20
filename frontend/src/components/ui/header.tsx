"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonColorful } from "@/components/ui/button-colorful";

const navLinks = [
  { title: "Características", href: "/#features" },
  { title: "Precios", href: "/#pricing" },
  { title: "Integraciones", href: "/#features" },
  { title: "FAQs", href: "/#faq" },
  { title: "Contacto", href: "mailto:ventas@tok-ai.cl" },
];

function Header1() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-[100] fixed top-0 left-0 bg-[#f8fafc]/95 dark:bg-[#0e0e0e]/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl relative mx-auto min-h-16 md:min-h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo — left */}
        <a href="/" className="flex-shrink-0">
          <img src="/images/logo-black.png" alt="ToK" className="h-9 md:h-11 w-auto object-contain dark:hidden" />
          <img src="/images/logo-white.png" alt="ToK" className="h-9 md:h-11 w-auto object-contain hidden dark:block" />
        </a>

        {/* Desktop nav — center */}
        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://app.tok-ai.cl"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center text-sm font-semibold h-9 px-4 rounded-lg bg-white text-black hover:bg-gray-100 border border-gray-200 dark:border-gray-700 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors shadow-sm"
          >
            Acceder
          </a>
          <a href="https://app.tok-ai.cl" target="_blank" rel="noreferrer" className="hidden md:block">
            <ButtonColorful
              label="Empieza Gratis"
              className="h-9 px-4 text-sm rounded-lg"
            />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] text-black dark:text-white"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] px-4 py-3 flex flex-col gap-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-md transition-colors"
            >
              {link.title}
            </a>
          ))}
          <div className="pt-3 pb-1 flex flex-col gap-2">
            <a
              href="https://app.tok-ai.cl"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 text-sm font-semibold rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white"
            >
              Acceder a la plataforma
            </a>
            <a href="https://app.tok-ai.cl" target="_blank" rel="noreferrer">
              <ButtonColorful label="Empieza Gratis" className="w-full h-10 rounded-lg text-sm" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header1 };
