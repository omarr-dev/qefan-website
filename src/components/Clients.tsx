"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ClientsProps {
  translations: {
    clients: {
      title: string;
      subtitle: string;
    };
  };
}

const clientLogosRow1 = [
  { src: "/logos/jpg.png", alt: "Maskan Rakhaa" },
  { src: "/logos/2024-05-156.46.42.png", alt: "Rakhaa" },
  { src: "/logos/logodrb.png", alt: "DRB" },
  { src: "/logos/logostayel.png", alt: "Stayel" },
  { src: "/logos/sqygahlogo.png", alt: "Sqygah" },
  { src: "/logos/PPI LOGO .svg", alt: "PPI" },
  { src: "/logos/logiosab.png", alt: "SAB" },
  { src: "/logos/awqaflogo.png", alt: "Awqaf" },
];

const clientLogosRow2 = [
  { src: "/logos/Diri logo final.svg", alt: "Diri" },
  { src: "/logos/الماجدية.png", alt: "Al Majdiah" },
  { src: "/logos/quality move  (1).svg", alt: "Quality Move" },
  { src: "/logos/logo 11-23 final PNG.png", alt: "Client" },
  { src: "/logos/طولي رسمي.svg", alt: "Touly" },
  { src: "/logos/Artboard 1.svg", alt: "Client" },
  { src: "/logos/PHOTO-2025-11-24-10-18-38.png", alt: "Client" },
  { src: "/logos/abc.png", alt: "Qefan" },
];

export default function Clients({ translations }: ClientsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogosRow1 = [...clientLogosRow1, ...clientLogosRow1];
  const duplicatedLogosRow2 = [...clientLogosRow2, ...clientLogosRow2];

  return (
    <section
      id="clients"
      className="relative py-20 md:py-32 bg-[var(--background)] overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
            {translations.clients.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/30 mx-auto mt-4 mb-4 rounded-full"
          />
          <p className="text-lg md:text-xl text-[var(--foreground-muted)]">
            {translations.clients.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Logo Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        <motion.div
          dir="ltr"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex"
        >
          <div className="flex gap-8 md:gap-12 animate-marquee">
            {duplicatedLogosRow1.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 bg-[var(--dark-900)] dark:bg-card rounded-2xl shadow-lg dark:shadow-black/20 flex items-center justify-center p-5 hover:shadow-xl dark:hover:shadow-black/30 hover:scale-105 transition-all duration-300 border border-border"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300 brightness-0 invert dark:brightness-0 dark:invert"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second Row - Scrolls in opposite direction */}
        <motion.div
          dir="ltr"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex mt-8"
        >
          <div className="flex gap-8 md:gap-12 animate-marquee-reverse">
            {duplicatedLogosRow2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 bg-card rounded-2xl shadow-lg dark:shadow-black/20 flex items-center justify-center p-5 hover:shadow-xl dark:hover:shadow-black/30 hover:scale-105 transition-all duration-300 border border-border"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300 dark:brightness-0 dark:invert"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
