'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  translations: {
    hero: {
      title: string;
      cta: string;
    };
  };
}

export default function Hero({ translations }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[var(--background)]">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.03] via-transparent to-transparent" />

        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C6B20' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
        <div className="absolute top-8 left-8 w-16 h-[1px] bg-gradient-to-r from-[var(--accent)]/30 to-transparent" />
        <div className="absolute top-8 left-8 h-16 w-[1px] bg-gradient-to-b from-[var(--accent)]/30 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48">
        <div className="absolute top-8 right-8 w-16 h-[1px] bg-gradient-to-l from-[var(--accent)]/30 to-transparent" />
        <div className="absolute top-8 right-8 h-16 w-[1px] bg-gradient-to-b from-[var(--accent)]/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48">
        <div className="absolute bottom-8 left-8 w-16 h-[1px] bg-gradient-to-r from-[var(--accent)]/30 to-transparent" />
        <div className="absolute bottom-8 left-8 h-16 w-[1px] bg-gradient-to-t from-[var(--accent)]/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48">
        <div className="absolute bottom-8 right-8 w-16 h-[1px] bg-gradient-to-l from-[var(--accent)]/30 to-transparent" />
        <div className="absolute bottom-8 right-8 h-16 w-[1px] bg-gradient-to-t from-[var(--accent)]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="-mt-10 sm:mt-0 mb-6 md:mb-8"
        >
          <div className="inline-flex items-center justify-center mb-6 md:mb-8">
            <div className="relative">
              {/* Subtle glow behind logo */}
              <div className="absolute inset-0 bg-[var(--accent)]/5 blur-3xl rounded-full scale-75" />
              <Image
                src="/qefan-logo.svg"
                alt="Qefan Logo"
                width={400}
                height={400}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Decorative line above title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--foreground)] mb-4 md:mb-6 leading-snug tracking-wide px-2"
        >
          {translations.hero.title}
        </motion.h1>

        {/* Decorative line below title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent mx-auto"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="relative">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[var(--foreground-muted)]/40 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
