import React from 'react';
import { IconBrandWhatsapp, IconBolt } from '@tabler/icons-react';
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

function Home() {
  return (
    <>
      <BackgroundPathsFixed />


      <main>
        {/* Hero Section */}
        <section className="pt-20 relative z-10">
          <div className="flex flex-col">
            <ContainerScroll
              titleComponent={
                <div className="flex flex-col items-center pb-8 md:pb-12">
                  <h1 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-6 md:mb-10">
                    Escala tus ventas por mensajes <br />
                    <span 
                      className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600 dark:text-blue-500"
                    >
                      Con IA
                    </span>
                  </h1>
                  <div className="flex flex-row gap-3 sm:gap-6 w-full justify-center items-start px-2">
                    <div className="flex flex-col items-center w-[148px] sm:w-[195px] md:w-[235px] lg:w-[270px]">
                      <AnimatedGradientButton
                        text="Empieza GRATIS"
                        showArrow={false}
                        containerClassName="w-full"
                        className="w-full justify-center text-center whitespace-nowrap px-2 sm:px-4"
                      />
                      <span className="text-[10px] sm:text-sm font-medium text-gray-500 mt-2 sm:mt-3 flex items-center justify-center gap-1 text-center leading-tight">
                        <IconBolt size={12} className="text-amber-500 sm:w-4 sm:h-4" /> por 5 días
                      </span>
                    </div>
                    <div className="flex flex-col items-center w-[148px] sm:w-[195px] md:w-[235px] lg:w-[270px]">
                      <a href="https://api.whatsapp.com/send?phone=56991224190&text=Hola%21+Quiero+más+información." target="_blank" rel="noopener noreferrer" className="w-full">
                        <AnimatedGradientButton
                          text="Hablar con ventas"
                          icon={<IconBrandWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0 text-green-500" />}
                          showArrow={false}
                          containerClassName="w-full"
                          className="w-full justify-center text-center whitespace-nowrap px-2 sm:px-4"
                        />
                      </a>
                      <span className="text-[10px] sm:text-sm font-medium text-gray-500 mt-2 sm:mt-3 text-center leading-tight">
                        e impulsa tu negocio
                      </span>
                    </div>
                  </div>
                </div>
              }
            >
              <div
                className="hidden md:block h-full w-full"
                style={{
                  backgroundImage: `url(/images/app-screenshot.png?v=1775508407)`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'top center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className="md:hidden h-full w-full bg-[#111]" />
            </ContainerScroll>
          </div>
        </section>

        {/* Infinite Logo Carousel — between hero and text reveal */}
        <div className="relative z-20 mt-4 md:mt-0 pb-6">
          <section className="relative w-full">
            <div className="w-full relative max-w-[100vw]">
              <AnimatedCarousel />
            </div>
          </section>
        </div>

        {/* Text Reveal Description */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-2 md:mt-8 relative z-10"
        >
          <TextRevealByWord 
            text="Automatiza citas, responde preguntas de tus clientes, integra tu calendario y gestiona campañas outbound en un solo lugar."
            highlightWords={["citas", "preguntas", "clientes", "calendario", "en", "un", "solo", "lugar"]}
          />
        </motion.section>

        {/* Animated Stats Section (Transparent over ambient background) */}
        <div className="-mt-20 relative z-10 pb-20">
          <AnimatedStats />
        </div>

        {/* ELEVATED SECTIONS (on top of background paths) */}

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
                Un set completo de herramientas diseñado para llevar tus canales de venta en piloto automático.
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
    </>
  );
}

export default Home;
