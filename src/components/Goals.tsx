'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Shield, Sparkles, UserCheck } from 'lucide-react';

interface GoalsProps {
  translations: {
    goals: {
      title: string;
      goal1: string;
      goal2: string;
      goal3: string;
      goal4: string;
    };
  };
}

export default function Goals({ translations }: GoalsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const goals = [
    { icon: CheckCircle2, text: translations.goals.goal1 },
    { icon: Shield, text: translations.goals.goal2 },
    { icon: Sparkles, text: translations.goals.goal3 },
    { icon: UserCheck, text: translations.goals.goal4 },
  ];

  return (
    <section id="goals" className="relative py-20 md:py-32 bg-[var(--background)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 right-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
            {translations.goals.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/30 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <goal.icon className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <p className="text-[var(--foreground)] font-medium leading-relaxed">
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

