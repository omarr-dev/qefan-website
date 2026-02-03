'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Award } from 'lucide-react';

interface AboutProps {
  translations: {
    about: {
      title: string;
      description: string;
    };
  };
}

export default function About({ translations }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Building2, color: 'text-[var(--accent)]' },
    { icon: Users, color: 'text-[var(--accent)]' },
    { icon: Award, color: 'text-[var(--accent)]' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[var(--background-secondary)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section title with decorative line */}
          <div className="inline-block mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
              {translations.about.title}
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/30 mx-auto mt-4 rounded-full"
            />
          </div>

          <div className="flex justify-center gap-4 md:gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[var(--accent)]/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-lg flex items-center justify-center group-hover:border-[var(--accent)]/50 transition-colors">
                  <feature.icon className={`w-7 h-7 md:w-8 md:h-8 ${feature.color}`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-4xl mx-auto"
          >
            {translations.about.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

