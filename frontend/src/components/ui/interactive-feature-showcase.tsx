"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, 
  RotateCcw, 
  Clock, 
  Settings, 
  ClipboardList,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type ChatMessage = {
  id: string;
  role: "user" | "agent";
  text: string;
  time: string;
  products?: boolean;
  agentSignature?: boolean;
};

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  chat: ChatMessage[];
};

// --- Data ---
const features: Feature[] = [
  {
    id: "ventas",
    title: "Convierte conversaciones en ventas reales",
    description: "ToK guía la conversación, recomienda productos y acelera el cierre con respuestas precisas, en el momento correcto. Resuelve dudas, arma carritos y genera links de pago directamente desde el chat.",
    icon: ShoppingCart,
    chat: [
      { id: "1", role: "user", text: "Hola! Estoy buscando una crema para piel sensible", time: "14:34" },
      { id: "2", role: "agent", text: "¡Perfecto! Te dejo 3 opciones aptas para piel sensible y que ayudan a hidratar sin irritar.", time: "14:34", products: true },
      { id: "3", role: "user", text: "Me gusta la primera, la crema de rostro", time: "14:35" },
      { id: "4", role: "agent", text: "¡Listo! Te armé el carrito para pagar cuando quieras. ¡Disfruta tu compra! tok.shop/carrito/crema", time: "14:35", agentSignature: true },
    ]
  },
  {
    id: "recupera",
    title: "Recupera ingresos por abandono",
    description: "Contacta proactivamente a los prospectos que dejaron de responder o abandonaron el carrito, ofreciendo asistencia o incentivos para cerrar la venta.",
    icon: RotateCcw,
    chat: [
      { id: "1", role: "agent", text: "¡Hola María! Noté que dejaste unas cosas en tu carrito. ¿Tuviste algún problema con el pago? 🛒", time: "10:15", agentSignature: true },
      { id: "2", role: "user", text: "Sí, me dio error la tarjeta y me olvidé de volver a intentar", time: "10:42" },
      { id: "3", role: "agent", text: "No te preocupes. Te he generado un nuevo link seguro de pago, y te he sumado un 10% de descuento por las molestias. ¡Aquí lo tienes!", time: "10:43" },
    ]
  },
  {
    id: "atencion",
    title: "Atención inmediata 24/7",
    description: "Tus clientes siempre reciben una respuesta instantánea, de madrugada o en feriados, manteniendo perfectamente el tono de voz de tu marca.",
    icon: Clock,
    chat: [
      { id: "1", role: "user", text: "¿Están atendiendo hoy domingo? Necesito saber si el plan Pro incluye soporte", time: "03:12 am" },
      { id: "2", role: "agent", text: "¡Hola! Sí, el Plan Pro incluye manager de cuenta dedicado y soporte prioritario 24/7. Te dejo la tabla comparativa aquí.", time: "03:12 am", agentSignature: true },
      { id: "3", role: "user", text: "Genial, lo contrato ahora mismo", time: "03:14 am" },
    ]
  },
  {
    id: "setup",
    title: "Configuración rápida y ajustable",
    description: "Configura tu agente IA en cuestión de minutos suministrando tus PDFs, FAQs o base de conocimiento. Ajusta su comportamiento en tiempo real.",
    icon: Settings,
    chat: [
      { id: "1", role: "user", text: "¿Cómo configuro las políticas de devolución?", time: "11:00" },
      { id: "2", role: "agent", text: "Solo tienes que subir tu PDF de 'Políticas de Envío y Devolución' a la plataforma Tok. Yo leeré el documento y responderé basándome exactamente en tus reglas.", time: "11:00", agentSignature: true },
    ]
  },
  {
    id: "postventa",
    title: "Controla y organiza tu postventa",
    description: "Deriva automáticamente temas complejos o reclamos a tu equipo humano de atención al cliente, organizando los tickets por prioridad.",
    icon: ClipboardList,
    chat: [
      { id: "1", role: "user", text: "Tengo un problema con el pedido #4492, llegó una caja rota", time: "16:20" },
      { id: "2", role: "agent", text: "Lamento mucho escuchar eso. Estoy derivando este caso urgente a nuestro equipo humano de soporte con todas las fotos que enviaste. Un agente humano te responderá por este mismo canal en menos de 5 minutos.", time: "16:20", agentSignature: true },
    ]
  }
];

export function InteractiveFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through features
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 6000); // changes every 6s
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeFeature = features[activeIndex];

  return (
    <div 
      className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Feature Selection */}
        <div className="flex flex-col space-y-2 relative">
          
          {/* Vertical progress line */}
          <div className="absolute left-[31px] top-8 bottom-8 w-[1px] bg-gray-200 dark:bg-zinc-800" />
          
          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            const Icon = feature.icon;

            return (
              <div 
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className="relative z-10 cursor-pointer"
              >
                <div className={cn(
                  "flex items-start gap-6 p-4 rounded-2xl transition-all duration-300",
                  isActive 
                    ? "bg-white dark:bg-zinc-900/80 shadow-lg dark:shadow-none border border-gray-100 dark:border-zinc-800/50" 
                    : "hover:bg-gray-50 dark:hover:bg-zinc-900/30"
                )}>
                  {/* Icon Circle */}
                  <div className={cn(
                    "relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 z-20",
                    isActive 
                      ? "bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-md" 
                      : "bg-gray-100 dark:bg-zinc-900 border border-transparent shadow-none"
                  )}>
                    <Icon 
                      className={cn(
                        "w-5 h-5 transition-colors duration-500",
                        isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-zinc-500"
                      )} 
                    />
                    
                    {/* Active Glow/Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute inset-0 rounded-full ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col pt-3">
                    <h3 className={cn(
                      "text-lg font-semibold transition-colors duration-300",
                      isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-zinc-400"
                    )}>
                      {feature.title}
                    </h3>
                    
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm text-gray-500 dark:text-zinc-400 leading-relaxed pr-8">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Mock Chat UI */}
        <div className="relative h-[600px] w-full flex items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900/50 dark:to-zinc-900/80 border border-gray-200/50 dark:border-zinc-800/50 shadow-xl dark:shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Phone Frame wrapper */}
          <div className="relative w-full max-w-[400px] h-full max-h-[500px] flex flex-col mx-4 p-6 overflow-hidden">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/50 dark:border-zinc-800/50">
              <span className="font-semibold text-gray-800 dark:text-zinc-200">Cliente</span>
              <span className="text-xs bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 px-2 py-1 rounded-full font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                En línea
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 pb-10 space-y-4 no-scrollbar">
              <AnimatePresence mode="popLayout">
                {activeFeature.chat.map((msg, idx) => (
                  <motion.div
                    key={`${activeFeature.id}-${msg.id}`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.4 }}
                    className={cn(
                      "flex flex-col w-full max-w-[85%]",
                      msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    )}
                  >
                    <div className={cn(
                      "relative p-3.5 rounded-2xl shadow-sm text-[15px] leading-relaxed",
                      msg.role === "user" 
                        ? "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-zinc-200 rounded-tr-sm" 
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tl-sm"
                    )}>
                      {msg.text}

                      {/* Mock Products display */}
                      {msg.products && (
                        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                          {[1, 2, 3].map((p) => (
                            <div key={p} className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-lg border border-white/20 backdrop-blur-sm p-1 flex flex-col items-center justify-center gap-1">
                              <div className="w-8 h-8 bg-white/30 rounded-md" />
                              <div className="w-10 h-1.5 bg-white/40 rounded-full" />
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                    
                    <div className={cn(
                      "flex items-center gap-2 mt-1.5",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}>
                      {msg.agentSignature && (
                        <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1">
                          ✨ ToK AI
                        </span>
                      )}
                      <span className="text-[10px] text-gray-400 font-medium">
                        {msg.time}
                      </span>
                      {msg.role === "user" && (
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
