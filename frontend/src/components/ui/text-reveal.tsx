"use client";

import { FC, ReactNode } from "react";

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
  const words = text.split(" ");

  // Normalize highlight words to lowercase for matching
  const highlightSet = new Set(
    highlightWords.map((w) => w.toLowerCase().replace(/[.,!?]/g, ""))
  );

  return (
    <div className={cn("relative z-10", className)}>
      <div className="mx-auto flex max-w-4xl items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-24 bg-transparent">
        <p
          className="flex flex-wrap text-3xl md:text-5xl lg:text-6xl xl:text-7xl justify-center leading-tight md:leading-snug font-bold"
        >
          {words.map((word, i) => {
            const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
            const isHighlight = highlightSet.has(cleanWord);
            return (
              <Word key={i} isHighlight={isHighlight}>
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
  isHighlight?: boolean;
}

const Word: FC<WordProps> = ({ children, isHighlight }) => {
  return (
    <span
      className={cn(
        "xl:lg-3 relative mx-1 lg:mx-2.5 group cursor-default",
        isHighlight && "italic"
      )}
      style={
        isHighlight
          ? { fontFamily: "'Playfair Display', serif", fontWeight: 600 }
          : undefined
      }
    >
      {/* Dim base layer (always visible) */}
      <span className="opacity-20 text-black dark:text-white">{children}</span>
      {/* Lit layer (fades in on hover) */}
      <span
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100",
          "text-black dark:text-white",
          isHighlight && "text-blue-600 dark:text-blue-400"
        )}
        style={
          isHighlight
            ? {
                textShadow:
                  "0 0 20px rgba(37, 99, 235, 0.4), 0 0 40px rgba(37, 99, 235, 0.2)",
              }
            : undefined
        }
      >
        {children}
      </span>
    </span>
  );
};

export { TextRevealByWord };
