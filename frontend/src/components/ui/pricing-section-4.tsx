"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {VerticalCutReveal} from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const comingSoon = [
  "Llamadas de voz con IA",
  "Integración con Shopify",
  "Integración con CRMs",
];

const plans = [
  {
    name: "Starter",
    description:
      "Ideal para pequeños negocios y startups que buscan empezar con IA.",
    price: 119990,
    yearlyDiscount: 15,
    conversations: "500",
    buttonText: "Comenzar",
    buttonVariant: "outline" as const,
    includes: [
      "Agente IA entrenado con tu información",
      "Conecta 1 canal (WhatsApp, Instagram o Messenger)",
      "Respuestas automáticas 24/7",
      "Plantillas de agentes",
      "Campañas outbound",
      "Calificación automática de leads",
    ],
  },
  {
    name: "Pro",
    description:
      "El mejor valor para negocios listos para escalar sus ventas.",
    price: 254990,
    yearlyDiscount: 20,
    conversations: "2.000",
    buttonText: "Comenzar",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Agente IA entrenado con tu información",
      "Conecta hasta 2 canales de mensajería",
      "Respuestas automáticas 24/7",
      "Plantillas de agentes",
      "Campañas outbound",
      "Calificación automática de leads",
      "Sincronización con Google Calendar",
      "Agendamiento y Reagendamiento Automático",
      "Calendarios para Múltiples Trabajadores",
      "Reportes de conversaciones",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Plan avanzado con límites personalizados y soporte prioritario.",
    price: 499990,
    yearlyDiscount: 23,
    conversations: "5.000",
    buttonText: "Contactar Ventas",
    buttonVariant: "outline" as const,
    includes: [
      "Agente IA entrenado con tu información",
      "Conecta hasta 5 canales de mensajería",
      "Respuestas automáticas 24/7",
      "Plantillas de agentes",
      "Campañas outbound",
      "Calificación automática de leads",
      "Sincronización con Google Calendar",
      "Agendamiento y Reagendamiento Automático",
      "Calendarios para Múltiples Trabajadores",
      "Reportes avanzados y analíticas",
      "Manager de Cuenta Dedicado",
      "Soporte Prioritario 24/7",
    ],
  },
];

// Aplica el descuento y redondea al .990 más cercano
const getYearlyPrice = (price: number, discountPct: number) =>
  Math.floor((price * (1 - discountPct / 100)) / 1000) * 1000 + 990;

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-gray-100 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors cursor-pointer",
            selected === "0" ? "text-white" : "text-gray-500 hover:text-gray-700",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600/30 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Mensual</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors cursor-pointer",
            selected === "1" ? "text-white" : "text-gray-500 hover:text-gray-700",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600/30 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Anual <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full whitespace-nowrap hidden sm:block">Ahorra hasta 23%</span></span>
        </button>
      </div>
    </div>
  );
};

export function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="min-h-screen py-24 mx-auto relative bg-[#f5f7fa] overflow-x-hidden"
      ref={pricingRef}
      id="pricing"
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-full overflow-hidden [mask-image:radial-gradient(closest-side_at_50%_50%,white,transparent)] z-0"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e7eb40_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb40_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={150}
          direction="bottom"
          speed={1}
          color="#3b82f6"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(closest-side_at_50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-0 w-full h-[100vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <div
            className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 flex-none rounded-full"
            style={{
              border: "100px solid #93c5fd",
              filter: "blur(120px)",
              WebkitFilter: "blur(120px)",
              opacity: 0.12,
            }}
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-12 pt-0 max-w-3xl mx-auto space-y-4 relative z-30 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Precios Simples y Transparentes
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Automatiza tus ventas por mensajes con IA. Elige el plan que se adapta a tu volumen.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-6"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 max-w-6xl gap-6 py-8 mx-auto px-4 lg:px-8 relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="h-full"
          >
            <Card
              className={`relative h-full flex flex-col text-gray-900 transition-transform duration-300 md:hover:-translate-y-2 ${
                plan.popular
                  ? "bg-white border-blue-500/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] z-20 md:scale-105"
                  : "bg-white border-gray-200 shadow-sm z-10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Más Popular
                </div>
              )}
              <CardHeader className="text-left pb-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                  <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 shrink-0">
                    <img src="/images/openai.svg" className="h-3 w-auto opacity-70" alt="OpenAI" />
                    <span className="text-[11px] font-semibold text-gray-500">GPT-4.1</span>
                  </div>
                </div>
                <div className="flex items-baseline mt-4">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    $
                    <NumberFlow
                      format={{
                        style: "decimal",
                        useGrouping: true,
                      }}
                      value={isYearly ? getYearlyPrice(plan.price, plan.yearlyDiscount) : plan.price}
                      className="text-4xl font-bold tracking-tight inline-block"
                    />
                  </span>
                  <span className="text-gray-400 ml-2 font-medium">
                    /mes <span className="text-[10px] text-gray-400">+ IVA</span>
                  </span>
                </div>
                <div className="mt-2">
                  <span className="inline-flex items-center text-xs font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
                    {plan.conversations} conversaciones / mes
                  </span>
                </div>
                <p className={`text-xs text-blue-600 font-semibold mt-2 transition-opacity duration-200 ${isYearly ? "opacity-100" : "opacity-0"}`}>Facturado anualmente · Ahorra {plan.yearlyDiscount}%</p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed h-10">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-4 flex flex-col flex-1">
                <div className="space-y-4 pt-4 border-t border-gray-100 flex-1">
                  <h4 className="font-semibold text-sm text-gray-700 uppercase tracking-wider">
                    Incluye:
                  </h4>
                  <ul className="space-y-3">
                    {plan.includes.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Próximamente */}
                <div className="mt-6 pt-4 border-t border-dashed border-gray-100">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Próximamente</p>
                  <ul className="space-y-1.5">
                    {comingSoon.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full p-4 mt-6 text-sm md:text-base font-semibold rounded-xl transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-4 px-4 relative z-10">
        * Se cobra $300 + IVA por cada conversación adicional que supere el límite mensual del plan.
      </p>
    </div>
  );
}
