import React from "react";
import { testimonials } from "../data/mock";
import { Quote, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="pt-0 pb-14 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Casos de <span className="text-sky-600">éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clínicas y consultas que ya están ahorrando tiempo y cerrando más
            ventas con ToK.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-sky-600 opacity-50" />
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Results Badge */}
              <div className="bg-white border-2 border-sky-200 rounded-lg p-3 mb-6 inline-flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-sky-600" />
                <span className="text-sm font-bold text-sky-600">
                  {testimonial.results}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-sky-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
