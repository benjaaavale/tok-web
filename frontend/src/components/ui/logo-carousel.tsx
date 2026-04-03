import { memo } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Logo data — ready to be replaced with real logos                    */
/* ------------------------------------------------------------------ */
interface Logo {
  name: string;
  /** URL or local path to a logo image */
  src: string;
}

/**
 * TODO: Reemplazar con logos reales de clientes.
 * Por ahora se usan los logos existentes del mock.
 */
const logos: Logo[] = [
  { name: "Clínica Dental Sonrisa", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/359dbea1aba89fd5e6b1646e870680db3b7831d4d5f7e8219b44d0e03985bb23.png" },
  { name: "Centro Médico Integral", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/1d218b2cedf720fd00f8488e683990e20343704b243d2800d943e2379b8bfffe.png" },
  { name: "Visión Clara", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/de6fcdb2d5d035cd15f4daf00114b3894b7118628b16f89cbacb1a1108be6d42.png" },
  { name: "Blanco Norte", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/289e4eb0d1172434199febb204fdfee2fb1c131377926308ef4eae03a549f227.png" },
  { name: "Velour Clínica Estética", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/095ccf41edea7469476a80a3aa271ed429d62829a55a5124495c01ff16197d38.png" },
  { name: "Raíz Salud", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/5c5e5a9adce33baaedaa661f920bc90afcbe9794e0a5d9893c613454982b2d82.png" },
];

/* ------------------------------------------------------------------ */
/* Single logo – lazy loaded                                           */
/* ------------------------------------------------------------------ */
const LogoItem = memo(({ logo }: { logo: Logo }) => (
  <div className="flex-shrink-0 w-36 h-20 mx-5 flex items-center justify-center">
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      decoding="async"
      className="max-w-full max-h-full object-contain opacity-50 dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    />
  </div>
));

LogoItem.displayName = "LogoItem";

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export function LogoCarousel() {
  // Duplicate logos enough for seamless infinite scroll
  const track = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          Empresas que ya confían en ToK
        </p>
      </motion.div>

      {/* Carousel container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f5f7fa] dark:from-[#0e0e0e] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f5f7fa] dark:from-[#0e0e0e] to-transparent pointer-events-none" />

        {/* Infinite ticker – CSS only, no JS, GPU accelerated */}
        <div
          className="flex will-change-transform"
          style={{
            animation: "logo-scroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {track.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* CSS keyframes inline – tiny footprint */}
      <style>{`
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-184px * ${logos.length})); }
        }
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
