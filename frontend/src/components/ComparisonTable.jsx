import React from "react";
import { X, Check, Sparkles } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      manual: "Respuestas con demora",
      tok: "Respuestas instantáneas 24/7",
    },
    {
      manual: "Confirmaciones manuales",
      tok: "Agendamiento automático en Google Calendar con confirmación y recordatorios por correo",
    },
    {
      manual: "Se pierden leads",
      tok: "Cada lead es atendido y calificado",
    },
    {
      manual: "Muchas horas humanas",
      tok: "Ahorro brutal de tiempo",
    },
    {
      manual: "Difícil de escalar",
      tok: "Totalmente escalable",
    },
  ];

  return (
    <section className="py-14 bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            ¿Por qué cambiar a{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              ToK
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600">
            Compara tu situación actual con lo que puedes lograr
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Headers */}
          <div className="bg-gray-100 rounded-2xl p-4 md:p-6 flex items-center justify-center min-h-[88px]">
            <h3 className="text-lg md:text-xl font-bold text-gray-500">
              Respuestas Manuales
            </h3>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-4 md:p-6 flex items-center justify-center min-h-[88px]">
            <img 
              src="https://customer-assets.emergentagent.com/job_21b320ec-6500-44c0-8260-dd4b2f3c4f72/artifacts/pz2yzx51_logo%20negro%20png.png" 
              alt="ToK" 
              className="h-14 md:h-16 brightness-0 invert"
            />
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <React.Fragment key={index}>
              {/* Manual Column */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-5 flex items-center gap-3 border border-gray-200">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-gray-600 text-sm md:text-base">{item.manual}</span>
              </div>
              
              {/* ToK Column */}
              <div className="bg-sky-50 rounded-xl p-4 md:p-5 flex items-center gap-3 border border-sky-200">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">{item.tok}</span>
              </div>
            </React.Fragment>
          ))}

          {/* Extra Bonus Row */}
          <div className="col-span-2 mt-4">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-5 md:p-6 flex items-center justify-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Bonus</span>
                <p className="text-gray-800 font-bold text-lg md:text-xl">
                  Asistencia 24/7 de nuestro equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
