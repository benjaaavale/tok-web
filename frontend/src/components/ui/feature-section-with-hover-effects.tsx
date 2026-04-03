import { cn } from "@/lib/utils";
import {
  IconRobot,
  IconBrandWhatsapp,
  IconCalendarEvent,
  IconUsersGroup,
  IconBolt,
  IconHeadset,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Agente IA Experto",
      description:
        "Alimenta a nuestra IA con tus documentos. Responderá dudas muy complejas en automático 24/7 sin que muevas un dedo.",
      icon: <IconRobot />,
      highlights: ["IA", "documentos", "automático", "24/7"],
    },
    {
      title: "Enfoque Nativo en WhatsApp",
      description:
        "Atiende a tus clientes donde ya están. Gestiona todas las conversaciones fácilmente desde tu panel de ToK.",
      icon: <IconBrandWhatsapp />,
      highlights: ["clientes", "conversaciones", "ToK"],
    },
    {
      title: "Google Calendar Inteligente",
      description:
        "El Agente IA puede agendar, cancelar y reagendar citas directo a tu Google Calendar y el de tu equipo.",
      icon: <IconCalendarEvent />,
      highlights: ["agendar", "reagendar", "citas", "Google", "Calendar"],
    },
    {
      title: "Multi-Trabajadores",
      description: 
        "Asigna calendarios específicos a cada miembro del equipo. Supervisa todo desde la cuenta principal.",
      icon: <IconUsersGroup />,
      highlights: ["calendarios", "equipo", "Supervisa"],
    },
    {
      title: "Configuración Súper Rápida",
      description: 
        "Empieza a automatizar tus ventas en menos de 5 minutos. Sin código. Conecta tu WhatsApp, sube tus PDFs y la IA hace el resto.",
      icon: <IconBolt />,
      highlights: ["automatizar", "ventas", "5", "minutos", "WhatsApp", "PDFs"],
    },
    {
      title: "Soporte Prioritario",
      description:
        "Te guiamos paso a paso en tu integración y te ayudamos a escalar tus ventas sin fricciones.",
      icon: <IconHeadset />,
      highlights: ["integración", "escalar", "ventas"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  highlights = [],
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  highlights?: string[];
}) => {
  // Build a regex from highlights to split description into segments
  const renderDescription = () => {
    if (highlights.length === 0) return description;
    const escapedHighlights = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedHighlights.join('|')})`, 'gi');
    const parts = description.split(regex);
    return parts.map((part, i) => {
      const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
      if (isHighlight) {
        return <span key={i} className="italic text-blue-600 dark:text-blue-400 font-medium">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200 dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l border-gray-200 dark:border-neutral-800",
        index < 3 && "lg:border-b border-gray-200 dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        >
          {icon}
        </motion.div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {renderDescription()}
      </p>
    </motion.div>
  );
};
