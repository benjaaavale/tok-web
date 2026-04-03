import React from "react";
import { Button } from "./ui/button";
import { Sparkles, CalendarDays } from "lucide-react";

const HeroSection = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Decorative corner elements - GPU optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient blobs - more visible */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply blur-2xl opacity-40 will-change-transform"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply blur-2xl opacity-30 will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-40 will-change-transform"></div>
        
        {/* Animated lines on sides - using Tailwind animation */}
        <div className="absolute left-0 top-1/4 w-2 h-48 bg-gradient-to-b from-transparent via-sky-400 to-transparent opacity-60 animate-slide-down will-change-transform motion-reduce:animate-none"></div>
        <div className="absolute right-0 top-1/3 w-2 h-56 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60 animate-slide-down will-change-transform motion-reduce:animate-none" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating geometric shapes - more visible */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-sky-300 rounded-2xl opacity-25 animate-float-slow will-change-transform motion-reduce:animate-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-cyan-300 rounded-full opacity-25 animate-float-delayed will-change-transform motion-reduce:animate-none"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-sky-300 rounded-lg opacity-15 animate-spin-very-slow will-change-transform motion-reduce:animate-none"></div>
        
        {/* Dots pattern - more visible */}
        <div className="absolute top-20 right-20 grid grid-cols-3 gap-3 opacity-40">
          <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
          <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
          <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
        </div>
        
        {/* Decorative circles - more visible */}
        <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-sky-300 rounded-full opacity-35"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-cyan-300 rounded-full opacity-30"></div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Automatización Inteligente para Clínicas</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 max-w-5xl">
            Ahorra Tiempo.
            <br />
            <span 
              className="bg-gradient-to-r from-sky-400 via-sky-600 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] motion-reduce:animate-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Cierra Más Ventas.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Automatización con IA para WhatsApp totalmente personalizada para
            tu clínica. Agenda citas, responde consultas y vende 24/7 sin
            esfuerzo.
          </p>

          {/* CTAs - Two buttons side by side */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
            <Button
              onClick={onCtaClick}
              size="lg"
              data-testid="hero-cta-demo"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 sm:px-8 md:px-10 h-[52px] sm:h-[60px] md:h-[68px] text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 hover:shadow-sky-500/50 w-full sm:w-auto flex items-center gap-2 justify-center"
            >
              <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6" />
              Agendar Demo Gratuita
            </Button>
            
            <a
              href="https://wa.me/56991224190"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-whatsapp"
              className="inline-flex border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 sm:px-8 md:px-10 h-[52px] sm:h-[60px] md:h-[68px] text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 items-center gap-2 w-full sm:w-auto justify-center rounded-md"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
