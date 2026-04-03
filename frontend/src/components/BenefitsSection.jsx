import React, { useState, useEffect, useRef } from "react";
import { benefits } from "../data/mock";
import { Sparkles, Target, Zap, Calendar, ChevronDown } from "lucide-react";

const iconMap = {
  0: Sparkles,
  1: Target,
  2: Zap,
  3: Calendar,
};

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="benefits" className="py-14 bg-transparent relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              ¿Por qué ToK?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Lo que nos hace{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              diferentes
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No somos una solución genérica. ToK ofrece automatización
            verdaderamente personalizada que se adapta a tu clínica.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-start">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[index];
            const isExpanded = expandedCard === index;
            
            return (
              <div
                key={benefit.id}
                data-testid={`benefit-card-${index}`}
                onClick={() => toggleCard(index)}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sky-300 overflow-hidden cursor-pointer ${
                  isVisible ? "animate-fade-in-up motion-reduce:animate-none" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-sky-200 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-150"></div>
                      <div className="relative bg-gradient-to-br from-sky-100 to-cyan-100 p-4 rounded-2xl inline-block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-sky-600" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300 flex-1 pr-16">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  {/* Number badge and Arrow - aligned vertically */}
                  <div className="absolute top-6 right-6 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-sky-100 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-xs font-bold text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                        {index + 1}
                      </span>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-sky-500" />
                    </div>
                  </div>
                  
                  {/* Expandable Description */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed text-base pl-16">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
