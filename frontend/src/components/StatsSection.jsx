import React from "react";
import { TrendingUp, Clock, MessageSquare, Calendar, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "3x",
      title: "Más conversiones",
      description: "Aumento promedio en citas agendadas automáticamente"
    },
    {
      icon: Clock,
      value: "15+",
      title: "Horas ahorradas",
      description: "Por semana en gestión manual de mensajes"
    },
    {
      icon: MessageSquare,
      value: "24/7",
      title: "Disponibilidad",
      description: "Respuestas instantáneas sin importar la hora"
    },
    {
      icon: Calendar,
      value: "65%",
      title: "Más citas",
      description: "Incremento en reservas confirmadas"
    },
    {
      icon: Zap,
      value: "<1min",
      title: "Tiempo de respuesta",
      description: "Respuestas inmediatas a tus pacientes"
    }
  ];

  return (
    <section className="pt-0 pb-10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Resultados Comprobados
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Los números hablan{" "}
          <span className="text-sky-500">por sí solos</span>
        </h2>
        <p className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto">
          Ve el impacto en métricas reales de clínicas que ya usan ToK
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-sky-200 hover:bg-sky-50/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:bg-sky-100 group-hover:border-sky-200 transition-colors shadow-sm">
                <stat.icon className="w-7 h-7 text-gray-500 group-hover:text-sky-600 transition-colors" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
