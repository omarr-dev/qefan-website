'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ClientsProps {
  translations: {
    clients: {
      title: string;
    };
  };
  locale: 'ar' | 'en';
}

const clientLogos = [
  { src: '/logos/شعار افنزور .jpg', alt: 'Afanzur' },
  { src: '/logos/شعار الماجديه .jpg', alt: 'Al Majdiah' },
  { src: '/logos/شعار تخير .jpg', alt: 'Takhir' },
  { src: '/logos/شعار ركيز .jpg', alt: 'Rakeez' },
  { src: '/logos/شعار سقيفه .jpg', alt: 'Saqeefah' },
  { src: '/logos/شعار مسكن رخاء.jpg', alt: 'Maskan Rakhaa' },
];

export default function Clients({ translations, locale }: ClientsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

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
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

