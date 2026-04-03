import React from "react";
import { companyLogos } from "../data/mock";

const CompanyCarousel = () => {
  // Triplicamos los logos para asegurar continuidad visual
  const tripleLogos = [...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <section className="py-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">
          Clínicas que ya confían en ToK
        </p>

        <div className="relative overflow-hidden">
          {/* Infinite carousel container */}
          <div className="flex carousel-track">
            {tripleLogos.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 w-40 h-24 mx-6 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .carousel-track {
          animation: scroll-infinite 25s linear infinite;
          width: fit-content;
        }
        
        .carousel-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-208px * 6));
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .carousel-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyCarousel;
