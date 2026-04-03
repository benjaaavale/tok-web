import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconMessageQuestion } from "@tabler/icons-react";
import { faqs } from "@/data/mock";

/* ------------------------------------------------------------------ */
/* Single FAQ item                                                     */
/* ------------------------------------------------------------------ */
const FAQItem = memo(
  ({
    faq,
    index,
    isOpen,
    onToggle,
  }: {
    faq: { id: number; question: string; answer: string };
    index: number;
    isOpen: boolean;
    onToggle: () => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left rounded-xl px-5 py-4 md:px-6 md:py-5 transition-colors duration-200 border ${
          isOpen
            ? "bg-blue-50/50 dark:bg-blue-500/[0.06] border-blue-200/60 dark:border-blue-500/20"
            : "bg-white/60 dark:bg-white/[0.02] border-gray-200/60 dark:border-white/[0.06] hover:bg-gray-50 dark:hover:bg-white/[0.04]"
        }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white pr-4">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0"
          >
            <IconChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
);

FAQItem.displayName = "FAQItem";

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export function AnimatedFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
            <IconMessageQuestion className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
            Preguntas{" "}
            <span
              className="text-amber-500"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              frecuentes
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Todo lo que necesitas saber sobre ToK y nuestras automatizaciones.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
