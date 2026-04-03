"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  highlightWords = [],
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const words = text.split(" ");

  // Normalize highlight words to lowercase for matching
  const highlightSet = new Set(
    highlightWords.map((w) => w.toLowerCase().replace(/[.,!?]/g, ""))
  );

  return (
    <div
      ref={targetRef}
      className={cn("relative z-10 h-[150vh]", className)}
    >
      <div className="sticky top-0 mx-auto flex h-screen max-w-4xl items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent">
        <p 
          className="flex flex-wrap text-3xl md:text-5xl lg:text-6xl xl:text-7xl justify-center leading-tight md:leading-snug font-bold"
        >
          {words.map((word, i) => {
            const wordCount = words.length;
            const start = i / wordCount;
            const end = start + 1.5 / wordCount; // overlap for smoother feel
            const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
            const isHighlight = highlightSet.has(cleanWord);
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, Math.min(end, 1)]}
                isHighlight={isHighlight}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span 
      className={cn(
        "xl:lg-3 relative mx-1 lg:mx-2.5",
        isHighlight && "italic"
      )}
      style={isHighlight ? { fontFamily: "'Playfair Display', serif", fontWeight: 600 } : undefined}
    >
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{
          opacity: opacity,
          ...(isHighlight
            ? {
                textShadow:
                  "0 0 20px rgba(37, 99, 235, 0.4), 0 0 40px rgba(37, 99, 235, 0.2)",
              }
            : {}),
        }}
        className={cn(
          "text-black dark:text-white",
          isHighlight && "text-blue-600 dark:text-blue-400"
        )}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
