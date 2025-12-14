'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Target } from 'lucide-react';

interface VisionProps {
  translations: {
    vision: {
      title: string;
      description: string;
      missionTitle: string;
      missionDescription: string;
    };
  };
}

export default function Vision({ translations }: VisionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-20 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card rounded-3xl p-8 md:p-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[var(--accent)]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              {translations.vision.title}
            </h3>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {translations.vision.description}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card rounded-3xl p-8 md:p-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[var(--accent)]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              {translations.vision.missionTitle}
            </h3>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              {translations.vision.missionDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

