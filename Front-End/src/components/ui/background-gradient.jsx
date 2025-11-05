// Em: src/components/ui/background-gradient.jsx

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[6px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }
            : undefined
        }
        style={{
          backgroundSize: "400% 400%",
          backgroundImage:
            "conic-gradient(from 180deg at 50% 50%, #4f39f6 0deg, #00b8db 72deg, #4f39f6 144deg, #00b8db 216deg, #4f39f6 288deg, #00b8db 360deg)",
        }}
        className="absolute inset-0 rounded-lg z-0 opacity-75 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};