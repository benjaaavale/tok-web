import { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconTrendingUp,
  IconClock,
  IconMessage2,
  IconCalendarEvent,
} from "@tabler/icons-react";

/* ------------------------------------------------------------------ */
/* Lightweight count-up hook                                           */
/* ------------------------------------------------------------------ */
const useCountUp = (end: number, duration = 1600, active: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, active]);
  return value;
};

/* ------------------------------------------------------------------ */
/* Stats data                                                          */
/* ------------------------------------------------------------------ */
const stats = [
  {
    id: "conversions",
    icon: <IconTrendingUp className="w-5 h-5" stroke={1.8} />,
    value: 3,
    suffix: "x",
    label: "Más conversiones",
    description:
      "Nuestros clientes ven un aumento promedio de 3x en citas agendadas automáticamente gracias a la IA que atiende, califica y agenda 24/7 sin intervención humana.",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500/30 dark:border-blue-400/30",
  },
  {
    id: "hours",
    icon: <IconClock className="w-5 h-5" stroke={1.8} />,
    value: 15,
    suffix: "+",
    label: "Horas ahorradas / semana",
    description:
      "Los equipos de ventas recuperan más de 15 horas semanales al eliminar la gestión manual de mensajes, seguimientos y coordinación de agendas.",
    color: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderColor: "border-violet-500/30 dark:border-violet-400/30",
  },
  {
    id: "availability",
    icon: <IconMessage2 className="w-5 h-5" stroke={1.8} />,
    value: 24,
    suffix: "/7",
    label: "Disponibilidad total",
    description:
      "Tu agente IA nunca duerme. Responde consultas, califica leads y agenda citas a cualquier hora, incluyendo fines de semana y feriados.",
    color: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/30 dark:border-emerald-400/30",
  },
  {
    id: "bookings",
    icon: <IconCalendarEvent className="w-5 h-5" stroke={1.8} />,
    value: 65,
    suffix: "%",
    label: "Más citas confirmadas",
    description:
      "Incremento promedio en reservas que llegan a concretarse gracias a los recordatorios automáticos y la recuperación inteligente de leads que no respondieron.",
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-500/30 dark:border-amber-400/30",
  },
];

/* ------------------------------------------------------------------ */
/* Tab button                                                          */
/* ------------------------------------------------------------------ */
const TabButton = memo(
  ({
    stat,
    isActive,
    onClick,
  }: {
    stat: (typeof stats)[number];
    isActive: boolean;
    onClick: () => void;
  }) => {
    const count = useCountUp(stat.value, 1200, isActive);

    return (
      <button
        onClick={onClick}
        className={`relative w-full text-left px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer group ${
          isActive
            ? `bg-white dark:bg-white/[0.06] shadow-lg dark:shadow-none border ${stat.borderColor}`
            : "bg-transparent border border-transparent hover:bg-white/60 dark:hover:bg-white/[0.03]"
        }`}
      >
        {/* Active indicator bar */}
        {isActive && (
          <motion.div
            layoutId="active-stat-bar"
            className={`absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b ${stat.color}`}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}

        <div className="flex items-center gap-4">
          {/* Icon */}
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isActive
                ? `${stat.iconBg} ${stat.iconColor}`
                : "bg-gray-100 dark:bg-white/[0.04] text-gray-400 dark:text-gray-500"
            }`}
          >
            {stat.icon}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div
              className={`text-2xl font-bold tracking-tight transition-colors ${
                isActive
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            >
              {isActive ? count : stat.value}
              {stat.suffix}
            </div>
            <div
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            >
              {stat.label}
            </div>
          </div>
        </div>
      </button>
    );
  }
);

TabButton.displayName = "TabButton";

/* ------------------------------------------------------------------ */
/* Per-stat visual elements                                            */
/* ------------------------------------------------------------------ */
const StatVisual = ({ id, color }: { id: string; color: string }) => {
  if (id === "conversions") return (
    <div className="flex items-end gap-2 h-16">
      {[30, 55, 90].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          className={`w-8 rounded-t-md bg-gradient-to-t ${color} opacity-${i === 2 ? "100" : i === 1 ? "60" : "30"}`}
          style={{ height: `${h}%` }}
        />
      ))}
      <div className="flex flex-col justify-end gap-1 ml-2 h-full pb-0.5">
        <span className="text-[11px] text-gray-400">antes</span>
        <span className="text-[11px] font-semibold text-gray-700">3x</span>
      </div>
    </div>
  );

  if (id === "hours") return (
    <div className="flex gap-1">
      {["L","M","M","J","V"].map((day, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`w-8 rounded-md bg-gradient-to-t ${color}`}
            style={{ height: `${[24, 32, 20, 36, 28][i]}px` }}
          />
          <span className="text-[10px] text-gray-400">{day}</span>
        </div>
      ))}
      <div className="ml-2 flex items-center">
        <span className="text-xs text-gray-500">≈3h/día</span>
      </div>
    </div>
  );

  if (id === "availability") return (
    <div className="flex items-center gap-3">
      {["00", "06", "12", "18", "23"].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`w-7 h-7 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}
          >
            <span className="text-[9px] text-white font-bold">{h}</span>
          </motion.div>
          <div className="w-0.5 h-3 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
      ))}
    </div>
  );

  if (id === "bookings") return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-gray-400 w-12">Antes</span>
        <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "38%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full rounded-full bg-gray-300 dark:bg-gray-600"
          />
        </div>
        <span className="text-[11px] text-gray-400 w-7">38%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 w-12">Ahora</span>
        <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          />
        </div>
        <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 w-7">65%</span>
      </div>
    </div>
  );

  return null;
};

/* ------------------------------------------------------------------ */
/* Detail panel                                                        */
/* ------------------------------------------------------------------ */
const DetailPanel = memo(
  ({ stat }: { stat: (typeof stats)[number] }) => {
    const count = useCountUp(stat.value, 1400, true);

    return (
      <motion.div
        key={stat.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-full flex flex-col justify-center w-full"
      >
        {/* Big number */}
        <div className="mb-4">
          <span className={`text-7xl md:text-8xl font-bold tracking-tight ${stat.iconColor}`}>
            {count}
            {stat.suffix}
          </span>
        </div>

        {/* Visual element */}
        <div className="mb-5">
          <StatVisual id={stat.id} color={stat.color} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
          {stat.description}
        </p>
      </motion.div>
    );
  }
);

DetailPanel.displayName = "DetailPanel";

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export function AnimatedStats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle through stats every 5s
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [inView]);

  const activeStat = stats[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/5 dark:bg-blue-500/[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <IconTrendingUp className="w-4 h-4" />
            Resultados Comprobados
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Los números hablan{" "}
            <span
              className="text-blue-600 dark:text-blue-500"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              por sí solos
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout: Tabs left, Detail right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left side: vertical tabs */}
          <div className="flex flex-col gap-2">
            {stats.map((stat, index) => (
              <TabButton
                key={stat.id}
                stat={stat}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right side: detail panel */}
          <div className="min-h-[320px] flex items-center rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 md:p-10 shadow-xl dark:shadow-none">
            <AnimatePresence mode="wait">
              <DetailPanel stat={activeStat} />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
