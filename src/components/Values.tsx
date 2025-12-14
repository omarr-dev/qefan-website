'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Scale, HandHeart, BookOpen, Handshake } from 'lucide-react';

interface ValuesProps {
  translations: {
    values: {
      title: string;
      commitment: { title: string; description: string };
      integrity: { title: string; description: string };
      responsibility: { title: string; description: string };
      knowledge: { title: string; description: string };
      trust: { title: string; description: string };
    };
  };
}

export default function Values({ translations }: ValuesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Heart, ...translations.values.commitment },
    { icon: Scale, ...translations.values.integrity },
    { icon: HandHeart, ...translations.values.responsibility },
    { icon: BookOpen, ...translations.values.knowledge },
    { icon: Handshake, ...translations.values.trust },
  ];

  return (
    <section id="values" className="py-20 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
            {translations.values.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`card rounded-2xl p-6 md:p-8 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-5">
                <value.icon className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

