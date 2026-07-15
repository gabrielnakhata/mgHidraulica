"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PhraseCarouselProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

export default function PhraseCarousel({
  phrases,
  interval = 5000,
  className = "",
}: PhraseCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <div className={`relative w-full ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="min-h-24 flex items-center justify-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
            {phrases[current]}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {phrases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary-600 w-8"
                : "bg-dark-300 w-2 hover:bg-dark-400"
            }`}
            aria-label={`Go to phrase ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
