"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AnimatedGradientButton({
  text = "Explore Patterns",
  onClick,
  icon,
  showArrow = true,
  containerClassName = "",
  className = "",
}: {
  text?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  showArrow?: boolean;
  containerClassName?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`inline-block group isolate ${containerClassName}`}
    >
      <div className={`relative p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300 ${className?.includes('w-full') ? 'w-full' : ''}`}>
        <Button
          variant="ghost"
          size="lg"
          onClick={onClick}
          className={`relative rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-6 text-[11px] sm:text-sm md:text-lg font-semibold
                      bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800
                      text-slate-900 dark:text-white transition-all duration-300
                      group-hover:-translate-y-1 group-hover:shadow-2xl
                      border-0 h-auto ${className}`}
        >
          <motion.span 
            className="flex items-center gap-1 md:gap-3"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon && <span className="text-blue-500">{icon}</span>}
            <span className="relative">
              {text}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </span>
            {showArrow !== false && (
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl"
              >
                →
              </motion.span>
            )}
          </motion.span>
        </Button>
      </div>
    </motion.div>
  )
}
