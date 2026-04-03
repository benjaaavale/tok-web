import React from "react";

const DecorativeBackground = ({ children }) => {
  return (
    <div className="relative">
      {/* Full decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs distributed across the section */}
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-35"></div>
        <div className="absolute top-[35%] left-[15%] w-[450px] h-[450px] bg-sky-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-[45%] right-[5%] w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl opacity-45"></div>
        <div className="absolute top-[60%] left-[10%] w-[400px] h-[400px] bg-sky-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-[70%] right-[15%] w-[350px] h-[350px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-[85%] left-[20%] w-[450px] h-[450px] bg-sky-50 rounded-full blur-3xl opacity-35"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-40"></div>
        
        {/* Subtle dot pattern covering the full area */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0ea5e9"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-dots)" />
        </svg>
        
        {/* Subtle diagonal lines on both sides */}
        <div className="absolute top-0 left-0 w-1/4 h-full opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, #0ea5e9 30px, #0ea5e9 31px)'
        }}></div>
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, #06b6d4 30px, #06b6d4 31px)'
        }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-[10%] right-[20%] w-20 h-20 border-2 border-sky-200 rounded-full opacity-20"></div>
        <div className="absolute top-[25%] left-[8%] w-16 h-16 border-2 border-cyan-200 rotate-45 opacity-15"></div>
        <div className="absolute top-[40%] right-[12%] w-12 h-12 bg-sky-200 rounded-full opacity-10"></div>
        <div className="absolute top-[55%] left-[18%] w-14 h-14 border-2 border-sky-200 rotate-45 opacity-15"></div>
        <div className="absolute top-[65%] right-[25%] w-10 h-10 bg-cyan-200 rounded-full opacity-10"></div>
        <div className="absolute top-[80%] left-[12%] w-16 h-16 border-2 border-cyan-200 rounded-full opacity-15"></div>
        <div className="absolute bottom-[15%] right-[8%] w-12 h-12 border-2 border-sky-200 rotate-45 opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DecorativeBackground;
