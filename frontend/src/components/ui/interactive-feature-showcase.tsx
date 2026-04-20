"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Send,
  CalendarCheck,
  Zap,
  UserCheck,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type ChatMessage = {
  id: string;
  role: "user" | "agent";
  text: string;
  time: string;
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
    id: "omnicanal",
    title: "Omnicanal: un solo panel para todo",
    description: "Gestiona WhatsApp, Instagram y Messenger desde una sola plataforma. Tu agente IA responde en todos los canales con el mismo tono y conocimiento de tu negocio.",
    icon: Layers,
    chat: [
      { id: "1", role: "user", text: "Hola! Vi su publicación en Instagram y me interesa saber más 👀", time: "11:02" },
      { id: "2", role: "agent", text: "¡Hola! Claro, con gusto te cuento. ¿Qué tipo de negocio tienes? Así te explico cómo ToK puede ayudarte 🚀", time: "11:02", agentSignature: true },
      { id: "3", role: "user", text: "Tengo una clínica estética, manejamos muchas citas por WhatsApp pero se nos va de las manos", time: "11:03" },
      { id: "4", role: "agent", text: "¡Perfecto caso de uso! ToK automatiza el agendamiento, confirmaciones y seguimiento. ¿Te agendo una demo esta semana? 📅", time: "11:04", agentSignature: true },
    ]
  },
  {
    id: "outbound",
    title: "Campañas outbound automatizadas",
    description: "Lanza campañas masivas a tu base de contactos y haz seguimiento automático. Reactiva leads fríos, comunica promociones y convierte más sin esfuerzo manual.",
    icon: Send,
    chat: [
      { id: "1", role: "agent", text: "¡Hola Camila! 👋 Te escribimos desde Clínica Belleza. Esta semana tenemos 20% off en todos nuestros tratamientos faciales. ¿Te interesa reservar?", time: "10:00", agentSignature: true },
      { id: "2", role: "user", text: "Hola! Sí, ¿tienen disponibilidad para el jueves?", time: "10:23" },
      { id: "3", role: "agent", text: "¡Claro! Tengo el jueves a las 11:00 y 15:30. ¿Cuál prefieres? El descuento aplica solo hasta el domingo 😊", time: "10:23", agentSignature: true },
      { id: "4", role: "user", text: "Las 11:00 perfecto!", time: "10:24" },
    ]
  },
  {
    id: "agendamiento",
    title: "Agendamiento y reagendamiento automático",
    description: "Tu agente IA consulta la disponibilidad en Google Calendar en tiempo real, agenda citas, envía confirmaciones y recuerda a tus clientes sin intervención humana.",
    icon: CalendarCheck,
    chat: [
      { id: "1", role: "user", text: "Hola, quisiera agendar una consulta para esta semana", time: "09:15" },
      { id: "2", role: "agent", text: "¡Hola! Con gusto. Tengo disponibilidad el miércoles a las 10:00, 12:00 y 16:00, y el viernes a las 09:00 y 14:00. ¿Cuál te acomoda mejor?", time: "09:15", agentSignature: true },
      { id: "3", role: "user", text: "El miércoles a las 12:00", time: "09:16" },
      { id: "4", role: "agent", text: "¡Listo! Agendé tu cita para el miércoles a las 12:00 📅 Recibirás un recordatorio 24h y 1h antes. ¿Necesitas algo más?", time: "09:16", agentSignature: true },
    ]
  },
  {
    id: "calificacion",
    title: "Calificación automática de leads",
    description: "La IA detecta el nivel de interés de cada prospecto, hace las preguntas correctas y prioriza los leads con mayor probabilidad de conversión para tu equipo.",
    icon: Zap,
    chat: [
      { id: "1", role: "user", text: "¿Cuánto cuesta el plan para empresas?", time: "14:10" },
      { id: "2", role: "agent", text: "El plan Enterprise parte en $499.990/mes. Para darte la mejor recomendación: ¿cuántos mensajes manejan hoy mensualmente?", time: "14:10", agentSignature: true },
      { id: "3", role: "user", text: "Unas 3.000 conversaciones al mes, somos equipo de 15 personas", time: "14:12" },
      { id: "4", role: "agent", text: "Con ese volumen, el plan Pro es perfecto para ustedes ✅ ¿Tienes 15 min para una demo esta semana con nuestro equipo?", time: "14:12", agentSignature: true },
    ]
  },
  {
    id: "derivacion",
    title: "Derivación inteligente al equipo humano",
    description: "Cuando la conversación lo requiere, la IA reconoce el momento exacto y transfiere al agente humano correcto con todo el contexto del chat, sin perder ningún detalle.",
    icon: UserCheck,
    chat: [
      { id: "1", role: "user", text: "Tuve una mala experiencia con mi último pedido y quiero hablar con alguien de atención al cliente", time: "16:45" },
      { id: "2", role: "agent", text: "Lamento mucho lo ocurrido, eso no debería pasar. Voy a conectarte ahora mismo con nuestra jefa de atención al cliente para resolver esto de inmediato 🙏", time: "16:45", agentSignature: true },
      { id: "3", role: "agent", text: "Ya le informé tu caso con el historial completo de la conversación. Sofía te responderá en menos de 2 minutos por este mismo chat.", time: "16:46", agentSignature: true },
    ]
  }
];

export function InteractiveFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userSelected, setUserSelected] = useState(false);

  useEffect(() => {
    if (isHovered || userSelected) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isHovered, userSelected]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setUserSelected(true);
  };

  const activeFeature = features[activeIndex];

  return (
    <div
      className="w-full max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN: Feature Selection */}
        <div className="flex flex-col space-y-2 relative lg:h-[600px] lg:overflow-hidden">

          {/* Vertical progress line */}
          <div className="absolute left-[40px] top-[40px] bottom-[56px] w-[1px] bg-gray-200 dark:bg-zinc-800" />

          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                onClick={() => handleSelect(index)}
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
        <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900/50 dark:to-zinc-900/80 border border-gray-200/50 dark:border-zinc-800/50 shadow-xl dark:shadow-2xl">

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

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
