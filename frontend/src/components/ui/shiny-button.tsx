"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps: any = {
  initial: { "--x": "100%", scale: 1 } as any,
  animate: { "--x": "-100%", scale: 1 } as any,
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...animationProps}
      {...props as any}
      className={cn(
        "relative rounded-lg px-6 border-0 py-2.5 font-semibold transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 shadow-[0_4px_15px_rgba(37,99,235,0.4)] overflow-hidden flex items-center justify-center cursor-pointer",
        className
      )}
    >
      <span className="relative z-20 block text-sm uppercase tracking-wider text-white">
        {children}
      </span>
      {/* Moving Shine Overlay */}
      <span
        style={{
          maskImage:
            "linear-gradient(-75deg, transparent calc(var(--x) + 20%), white calc(var(--x) + 25%), transparent calc(var(--x) + 30%))",
        } as React.CSSProperties}
        className="absolute inset-0 z-10 block bg-white/40"
      />
    </motion.button>
  );
};
