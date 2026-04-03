import React from 'react';
import { IconBrandWhatsapp, IconCalendarEvent, IconBolt } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { PricingSection4 } from '@/components/ui/pricing-section-4';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { Header1 } from '@/components/ui/header';
import { InteractiveFeatureShowcase } from '@/components/ui/interactive-feature-showcase';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { Typewriter } from '@/components/ui/typewriter';
import { FooterTaped } from '@/components/ui/footer-taped-design';
import { AnimatedStats } from '@/components/ui/animated-stats';
import { AnimatedCarousel } from '@/components/ui/logo-carousel';
import { HowItWorks } from '@/components/ui/how-it-works';
import { AnimatedFAQ } from '@/components/ui/animated-faq';
import AnimatedGradientButton from '@/components/ui/animated-gradient-button';

import { BackgroundPathsFixed } from '@/components/ui/background-paths';

function App() {
  return (
    <div className="min-h-screen text-black dark:text-white font-sans selection:bg-blue-500/30 relative">
      <BackgroundPathsFixed />
      <Header1 />

      <main>
        {/* Hero Section */}
        <section className="pt-20 relative z-10">
          <div className="flex flex-col">
            <ContainerScroll
              titleComponent={
                <div className="flex flex-col items-center pb-8 md:pb-12">
                  <h1 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-6 md:mb-10">
                    Escala tus ventas en WhatsApp <br />
                    <span 
                      className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600 dark:text-blue-500"
                    >
                      Con IA
                    </span>
                  </h1>
                  <div className="flex flex-row gap-2 sm:gap-6 w-full sm:w-auto items-start justify-center px-2">
                    <div className="flex flex-col items-center flex-1 sm:flex-auto">
                      <AnimatedGradientButton 
                        text="Pruébalo gratis" 
                      />
                      <span className="text-[10px] sm:text-sm font-medium text-gray-500 mt-2 sm:mt-3 flex items-center justify-center gap-1 text-center leading-tight">
                        <IconBolt size={12} className="text-amber-500 sm:w-4 sm:h-4" /> por 5 días
                      </span>
                    </div>
                    <div className="flex flex-col items-center flex-1 sm:flex-auto">
                      <AnimatedGradientButton 
                        text="Agenda con ventas" 
                        icon={<IconCalendarEvent size={24} />} 
                      />
                      <span className="text-[10px] sm:text-sm font-medium text-gray-500 mt-2 sm:mt-3 text-center leading-tight">
                        e impulsa tu negocio
                      </span>
                    </div>
                  </div>
                </div>
              }
            >
              <img
                src="/images/app-screenshot.png"
                alt="ToK Dashboard Interface"
                className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-gray-200/50 dark:border-white/10"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </section>

        {/* Text Reveal Description */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="-mt-16 md:-mt-24 relative z-10"
        >
          <TextRevealByWord 
            text="Automatiza citas, responde preguntas de tus clientes, integra tu calendario y gestiona campañas de marketing en un solo lugar."
            highlightWords={["citas", "preguntas", "clientes", "calendario", "en", "un", "solo", "lugar"]}
          />
        </motion.section>

        {/* Animated Stats Section (Transparent over ambient background) */}
        <div className="-mt-20 relative z-10 pb-20">
          <AnimatedStats />
        </div>

        {/* ELEVATED SECTIONS (on top of background paths) */}

        {/* Infinite Logo Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-20 -mt-20 md:-mt-32 pb-16"
        >
          <section className="relative w-full">
            <div className="w-full relative max-w-[100vw]">
              <AnimatedCarousel />
            </div>
          </section>
        </motion.div>

        {/* Interactive Feature Showcase Section */}
        <motion.section 
          id="features" 
          className="pt-0 pb-0 relative z-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">
                Todo lo que necesitas para{' '}
                <Typewriter
                  text={[
                    "cerrar más ventas",
                    "ahorrar tiempo",
                    "escalar tu negocio",
                  ]}
                  speed={70}
                  deleteSpeed={40}
                  waitTime={2000}
                  className="text-blue-600"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 600 }}
                  cursorChar="_"
                />
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Un set completo de herramientas de ventas diseñado para llevar tu canal de WhatsApp B2B en piloto automático.
              </p>
            </div>
            
            <InteractiveFeatureShowcase />
          </div>
        </motion.section>

        {/* How It Works Section — transparent over background paths */}
        <div className="relative z-10 pt-0 pb-12">
          <HowItWorks />
        </div>

        {/* Pricing Section (Transparent) */}
        <section id="pricing" className="relative z-10 pt-0 pb-12">
          <PricingSection4 />
        </section>

        {/* FAQ Section (Transparent over background paths) */}
        <section className="relative z-10 py-12">
          <AnimatedFAQ />
        </section>

        {/* CTA Section (Transparent) */}
        <section className="py-32 relative overflow-hidden z-10">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-black dark:text-white">
              ¿Listo para automatizar tus <br className="hidden md:block" /> ventas en WhatsApp?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Únete a decenas de equipos exitosos que usan ToK para agendar más reuniones y cerrar más ventas mientras duermen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonColorful className="h-14 px-8 text-lg rounded-full" label="Empieza tu Prueba Gratis" />
              <button className="h-14 px-8 text-lg font-medium rounded-full bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors text-black dark:text-white border border-gray-200 dark:border-white/10 backdrop-blur-md">
                Hablar con Ventas
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Transparent over background paths) */}
      <div className="relative z-10">
        <FooterTaped />
      </div>
    </div>
  );
}

export default App;
