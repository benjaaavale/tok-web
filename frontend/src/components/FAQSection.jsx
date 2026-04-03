import React from "react";
import { faqs } from "../data/mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="py-10 bg-white relative overflow-hidden">
      {/* Background decorations - dots and floating shapes only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0ea5e9"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-dots)" />
        </svg>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-[15%] left-[8%] w-16 h-16 border-2 border-gray-200 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute top-[25%] right-[10%] w-12 h-12 border-2 border-gray-200 rotate-45 opacity-25 animate-float-delayed"></div>
        <div className="absolute top-[50%] left-[5%] w-10 h-10 border-2 border-gray-200 rotate-45 opacity-20 animate-float-slow"></div>
        <div className="absolute top-[60%] right-[8%] w-14 h-14 border-2 border-gray-200 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute bottom-[20%] left-[12%] w-8 h-8 border-2 border-gray-200 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-[30%] right-[15%] w-10 h-10 border-2 border-gray-200 rotate-45 opacity-25 animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-sky-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber sobre ToK y nuestras automatizaciones.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-sky-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-sky-50 border-2 border-sky-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos por WhatsApp y resolvemos todas tus dudas al instante.
          </p>
          <a
            href="https://wa.me/56991224190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
