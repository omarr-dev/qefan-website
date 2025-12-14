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
    <section id="about" className="py-20 md:py-32 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-8">
            {translations.about.title}
          </h2>
          
          <div className="flex justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center"
              >
                <feature.icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.color}`} />
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

