import React from "react";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";

const CTABanner = ({ onCtaClick }) => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background decorations - dots and floating shapes only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0ea5e9"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-[20%] left-[5%] w-16 h-16 border-2 border-gray-200 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute top-[30%] right-[8%] w-12 h-12 border-2 border-gray-200 rotate-45 opacity-25 animate-float-delayed"></div>
        <div className="absolute bottom-[25%] left-[10%] w-10 h-10 border-2 border-gray-200 rotate-45 opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-[20%] right-[12%] w-14 h-14 border-2 border-gray-200 rounded-full opacity-25 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Banner with optimized design */}
        <div className="relative bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">
          {/* Optimized background elements - using pulse-soft instead of pulse */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl opacity-10 animate-pulse-soft will-change-opacity motion-reduce:animate-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full blur-2xl opacity-10 animate-pulse-soft will-change-opacity motion-reduce:animate-none" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              ¿Listo para transformar tu clínica?
            </h3>
            <p className="text-sky-50 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Agenda una demo gratuita y descubre cómo ToK puede ahorrar tiempo y
              aumentar tus ventas.
            </p>
            <Button
              size="lg"
              data-testid="cta-banner-button"
              className="bg-white hover:bg-gray-100 text-sky-600 px-10 py-6 text-lg font-bold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 mx-auto"
              onClick={onCtaClick}
            >
              <CalendarDays className="w-5 h-5" />
              Agendar Demo Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
