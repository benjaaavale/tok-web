import { useRef, useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  IconBrandWhatsapp,
  IconFileText,
  IconRocket,
} from "@tabler/icons-react";

/* ------------------------------------------------------------------ */
/* Steps data                                                          */
/* ------------------------------------------------------------------ */
const steps = [
  {
    number: "01",
    icon: <IconBrandWhatsapp className="w-6 h-6" stroke={1.6} />,
    title: "Conecta tu WhatsApp",
    description:
      "Vincula tu número de WhatsApp Business en minutos. Sin configuraciones complejas ni código.",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    number: "02",
    icon: <IconFileText className="w-6 h-6" stroke={1.6} />,
    title: "Entrena a tu Agente IA",
    description:
      "Sube tus documentos, PDFs e información de tu negocio. La IA aprende tu tono, tus servicios y tus precios.",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    number: "03",
    icon: <IconRocket className="w-6 h-6" stroke={1.6} />,
    title: "Vende en Automático",
    description:
      "La IA atiende, califica, agenda y recupera leads 24/7 mientras tú te enfocas en lo importante.",
    color: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
];

/* ------------------------------------------------------------------ */
/* Step card                                                           */
/* ------------------------------------------------------------------ */
const StepCard = memo(
  ({
    step,
    index,
  }: {
    step: (typeof steps)[number];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Icon container */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`relative z-10 w-16 h-16 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center mb-5 will-change-transform`}
      >
        {step.icon}
        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none`}
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
        {step.description}
      </p>
    </motion.div>
  )
);

StepCard.displayName = "StepCard";

/* ------------------------------------------------------------------ */
/* Connector line between steps (desktop only)                         */
/* ------------------------------------------------------------------ */
const ConnectorLine = memo(({ index }: { index: number }) => (
  <>
    {/* DESKTOP HORIZONTAL LINE */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
      className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] origin-left"
      style={{ zIndex: 5 }}
    >
      <div className="w-full h-full bg-gradient-to-r from-gray-200 dark:from-white/10 to-gray-200 dark:to-white/10 rounded-full" />
      {/* Animated dot — loops forever */}
      <motion.div
        animate={{ left: ["0%", "100%"] }}
        transition={{
          duration: 1.4,
          delay: index * 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
      />
    </motion.div>
  </>
));

ConnectorLine.displayName = "ConnectorLine";

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <IconRocket className="w-4 h-4" />
            Súper Simple
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
            Comienza en{" "}
            <span
              className="text-blue-600 dark:text-blue-500"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              3 simples pasos
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Configura tu agente IA de ventas en menos de 5 minutos. Sin código, sin complicaciones.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <StepCard step={step} index={index} />
              {/* Connector line after step 1 and 2 */}
              {index < steps.length - 1 && <ConnectorLine index={index} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
