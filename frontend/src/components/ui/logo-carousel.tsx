"use client";

import { cn } from "@/lib/utils";

export type LogoItem = string | { src: string; maxHeight?: string };

export const defaultPartnerLogos: LogoItem[] = [
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  { src: "/images/mumu-audio-car.png", maxHeight: "max-h-9 md:max-h-11" },
  { src: "/images/upgrade-smart.png", maxHeight: "max-h-9 md:max-h-11" },
  { src: "/images/cloudflare.svg", maxHeight: "h-5 md:h-6" },
  { src: "/images/anthropic.svg", maxHeight: "h-3 md:h-4" },
  { src: "/images/openai.svg", maxHeight: "h-5 md:h-6" },
  { src: "/images/google-calendar.svg", maxHeight: "h-7 md:h-9" },
  { src: "/images/ycloud.png", maxHeight: "max-h-5 md:max-h-6" },
];

interface AnimatedCarouselProps {
  logos?: LogoItem[] | null;
  containerClassName?: string;
  logoClassName?: string;
  padding?: string;
  logoMaxHeight?: string;
  speed?: number;
}

const resolveLogo = (item: LogoItem) =>
  typeof item === "string" ? { src: item, maxHeight: undefined } : item;

export const AnimatedCarousel = ({
  logos = null,
  containerClassName = "",
  logoClassName = "",
  padding = "py-10",
  logoMaxHeight = "max-h-7 md:max-h-9",
  speed = 40,
}: AnimatedCarouselProps) => {
  const logoItems = logos || defaultPartnerLogos;
  // Duplicate for seamless loop
  const items = [...logoItems, ...logoItems];

  return (
    <div className={cn("w-full overflow-hidden", padding, containerClassName)}>
      <div className="marquee-track">
        {items.map((logoItem, index) => {
          const { src, maxHeight: itemMaxHeight } = resolveLogo(logoItem);
          const sizeClass = itemMaxHeight ?? logoMaxHeight;
          return (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center shrink-0 w-[140px] md:w-[180px] opacity-60 hover:opacity-100 transition-opacity duration-300",
                logoClassName
              )}
            >
              <img
                src={src}
                alt={`Partner Logo ${(index % logoItems.length) + 1}`}
                className={cn(
                  sizeClass,
                  "w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                )}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
