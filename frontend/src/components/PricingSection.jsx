import React, { useState } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Descuento anual: 20% de descuento
  const annualDiscount = 0.20;

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 119990,
      implementationCost: 149990,
      icon: Zap,
      popular: false,
      features: [
        "0-200 conversaciones mensuales",
        "Respuestas Automáticas 24/7",
        "Agendamiento en Google Calendar",
        "Confirmaciones y recordatorios por correo",
        "Soporte por correo",
      ],
      extras: [],
    },
    {
      name: "Professional",
      monthlyPrice: 189990,
      implementationCost: 69990,
      icon: Star,
      popular: true,
      features: [
        "200-500 conversaciones mensuales",
        "Respuestas Automáticas 24/7",
        "Agendamiento en Google Calendar",
        "Confirmaciones y recordatorios por correo",
        "Reportes Mensuales",
      ],
      extras: [
        "Soporte 24/7",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 319990,
      pricePrefix: "Desde",
      icon: Crown,
      popular: false,
      features: [
        "500+ conversaciones mensuales",
        "IA personalizada para tu clínica",
        "Respuestas Automáticas 24/7",
        "Agendamiento en Google Calendar",
        "Confirmaciones y recordatorios por correo",
        "Reportes Semanales",
        "Soporte Dedicado 24/7",
      ],
      extras: [
        "Desarrollo a medida GRATIS",
        "Análisis para abordar leads que no convirtieron",
      ],
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL').format(price);
  };

  const getPrice = (monthlyPrice) => {
    if (isAnnual) {
      return Math.round(monthlyPrice * (1 - annualDiscount));
    }
    return monthlyPrice;
  };

  const getAnnualSavings = (monthlyPrice) => {
    return Math.round(monthlyPrice * 12 * annualDiscount);
  };

  return (
    <section id="pricing" className="py-8 bg-white relative overflow-hidden">
      {/* Background decorations - dots and floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0ea5e9"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-dots)" />
        </svg>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-[10%] left-[5%] w-16 h-16 border-2 border-gray-200 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute top-[20%] right-[8%] w-12 h-12 border-2 border-gray-200 rotate-45 opacity-25 animate-float-delayed"></div>
        <div className="absolute top-[60%] left-[8%] w-10 h-10 border-2 border-gray-200 rotate-45 opacity-20 animate-float-slow"></div>
        <div className="absolute top-[70%] right-[5%] w-14 h-14 border-2 border-gray-200 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute bottom-[15%] left-[12%] w-8 h-8 border-2 border-gray-200 rounded-full opacity-20 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Solo badge y toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-sm font-medium">
            <Star className="w-4 h-4" />
            Planes y Precios
          </span>

          {/* Toggle Mensual/Anual */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Anual
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-gradient-to-b from-sky-50 to-white border-2 border-sky-300 shadow-xl shadow-sky-100/50"
                  : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  plan.popular 
                    ? "bg-sky-100 border border-sky-200" 
                    : "bg-gray-100 border border-gray-200"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? "text-sky-600" : "text-gray-600"}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.pricePrefix && (
                  <span className="text-gray-500 text-sm block mb-1">{plan.pricePrefix}</span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 text-sm">$</span>
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(getPrice(plan.monthlyPrice))}
                  </span>
                  <span className="text-gray-500 text-sm">/mes</span>
                </div>
                {isAnnual && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">
                      ${formatPrice(plan.monthlyPrice)}/mes
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                      Ahorras ${formatPrice(getAnnualSavings(plan.monthlyPrice))}/año
                    </span>
                  </div>
                )}
                {plan.implementationCost && (
                  <div className="mt-3 text-sm text-gray-500">
                    Implementación: <span className="font-medium text-gray-700">${formatPrice(plan.implementationCost)}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-sky-100" : "bg-gray-100"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-sky-600" : "text-gray-600"}`} />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Extras (Free bonuses) */}
              {plan.extras.length > 0 && (
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <p className="text-green-700 font-semibold text-xs mb-2 flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-green-500 text-green-500" />
                    Incluido sin costo adicional:
                  </p>
                  <ul className="space-y-1.5">
                    {plan.extras.map((extra, extraIndex) => (
                      <li key={extraIndex} className="flex items-center gap-2 text-green-700 text-xs">
                        <Check className="w-3 h-3 text-green-600" />
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
