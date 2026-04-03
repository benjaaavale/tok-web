"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineContentProps {
  children?: React.ReactNode;
  className?: string;
  as?: any;
  customVariants?: Variants;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
}

export const TimelineContent = ({
  children,
  className,
  as: Component = "div",
  customVariants,
  animationNum = 0,
  timelineRef,
  ...props
}: TimelineContentProps) => {
  const MotionComponent = React.useMemo(() => motion(Component as any), [Component]) as any;
  
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={customVariants}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
