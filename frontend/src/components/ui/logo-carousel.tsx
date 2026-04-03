"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// List of professional tech logos to use as default placeholders
export const defaultPartnerLogos = [
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  "https://cdn.worldvectorlogo.com/logos/vercel.svg",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
  "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",
  "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  "https://cdn.worldvectorlogo.com/logos/storybook-1.svg",
  "https://cdn.worldvectorlogo.com/logos/sanity.svg",
];

interface AnimatedCarouselProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  logos?: string[] | null;
  containerClassName?: string;
  carouselClassName?: string;
  logoClassName?: string;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  spacing?: string;
  padding?: string;
  logoContainerWidth?: string;
  logoContainerHeight?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
}

export const AnimatedCarousel = ({
  autoPlay = true,
  autoPlayInterval = 3000,
  logos = null,
  containerClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 3,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-10",
  logoContainerWidth = "w-24 md:w-48",
  logoContainerHeight = "h-16 md:h-24",
  logoImageWidth = "w-full",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "max-h-10 md:max-h-14",
}: AnimatedCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      // Loop seamlessly using Embla logic
      if (api.selectedScrollSnap() + 1 >= api.scrollSnapList().length) {
        api.scrollTo(0);
        setCurrent(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const logoItems = logos || defaultPartnerLogos;

  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <div className={cn("w-full bg-transparent overflow-hidden", padding, containerClassName)}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className={cn("flex flex-col", spacing)}>
          <div>
            <Carousel 
              setApi={setApi} 
              opts={{
                align: "start",
                loop: true,
              }}
              className={cn("w-full", carouselClassName)}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {logoItems.map((logo, index) => (
                  <CarouselItem 
                    className={cn(
                      "pl-2 md:pl-4",
                      `basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`
                    )} 
                    key={index}
                  >
                    <div className={cn(
                      "flex rounded-md items-center justify-center p-2 opacity-60 hover:opacity-100 transition-opacity duration-300",
                      logoContainerWidth, 
                      logoContainerHeight,
                      logoClassName
                    )}>
                      <img 
                        src={logo}
                        alt={`Partner Logo ${index + 1}`}
                        className={cn(
                          logoImageSizeClasses,
                          "object-contain filter grayscale hover:grayscale-0 dark:brightness-0 dark:invert transition-all duration-300"
                        )}
                        draggable={false}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
