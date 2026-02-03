'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ClientsProps {
  translations: {
    clients: {
      title: string;
      subtitle: string;
    };
  };
  locale: 'ar' | 'en';
}

const clientLogosRow1 = [
  { src: '/logos/شعار مسكن رخاء.jpg', alt: 'Maskan Rakhaa' },
  { src: '/logos/Rakhaa logo.svg', alt: 'Rakhaa' },
  { src: '/logos/logo drb.jpeg', alt: 'DRB' },
  { src: '/logos/logo stayel.jpeg', alt: 'Stayel' },
  { src: '/logos/sqygah logo.jpeg', alt: 'Sqygah' },
  { src: '/logos/PPI LOGO .svg', alt: 'PPI' },
  { src: '/logos/logio sab.jpeg', alt: 'SAB' },
  { src: '/logos/awqaf logo.jpeg', alt: 'Awqaf' },
];

const clientLogosRow2 = [
  { src: '/logos/Diri logo final.svg', alt: 'Diri' },
  { src: '/logos/logo almajdya.jpeg', alt: 'Al Majdiah' },
  { src: '/logos/quality move  (1).svg', alt: 'Quality Move' },
  { src: '/logos/logo 11-23 final PNG.png', alt: 'Client' },
  { src: '/logos/طولي رسمي.svg', alt: 'Touly' },
  { src: '/logos/Artboard 1.svg', alt: 'Client' },
  { src: '/logos/PHOTO-2025-11-24-10-18-38.jpg.jpeg', alt: 'Client' },
  { src: '/logos/logo for qefan.jpeg', alt: 'Qefan' },
];

export default function Clients({ translations, locale }: ClientsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogosRow1 = [...clientLogosRow1, ...clientLogosRow1];
  const duplicatedLogosRow2 = [...clientLogosRow2, ...clientLogosRow2];

  return (
    <section id="clients" className="py-20 md:py-32 bg-[var(--background)] overflow-hidden">
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
          <p className="mt-4 text-lg md:text-xl text-[var(--muted-foreground)]">
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex"
        >
          <div className={`flex gap-8 md:gap-12 ${locale === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
            {duplicatedLogosRow1.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 bg-white rounded-2xl shadow-lg flex items-center justify-center p-5 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second Row - Scrolls in opposite direction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex mt-8"
        >
          <div className={`flex gap-8 md:gap-12 ${locale === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
            {duplicatedLogosRow2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 bg-white rounded-2xl shadow-lg flex items-center justify-center p-5 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
