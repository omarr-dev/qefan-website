'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Gavel,
  FileText,
  MessageSquare,
  UserCog,
  Wallet,
  Building,
  Search,
  GitMerge,
  Scale,
  ScrollText,
  LandPlot,
  X,
  Users,
  ListChecks,
} from 'lucide-react';

interface ServiceTranslation {
  title: string;
  description: string;
  audience: string;
  outputs: string;
}

interface ServicesProps {
  translations: {
    services: {
      title: string;
      learnMore: string;
      targetAudience: string;
      outputs: string;
      close: string;
      service1: ServiceTranslation;
      service2: ServiceTranslation;
      service3: ServiceTranslation;
      service4: ServiceTranslation;
      service5: ServiceTranslation;
      service6: ServiceTranslation;
      service7: ServiceTranslation;
      service8: ServiceTranslation;
      service9: ServiceTranslation;
      service10: ServiceTranslation;
      service11: ServiceTranslation;
    };
  };
}

export default function Services({ translations }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    { icon: Gavel, ...translations.services.service1 },
    { icon: FileText, ...translations.services.service2 },
    { icon: MessageSquare, ...translations.services.service3 },
    { icon: UserCog, ...translations.services.service4 },
    { icon: Wallet, ...translations.services.service5 },
    { icon: Building, ...translations.services.service6 },
    { icon: Search, ...translations.services.service7 },
    { icon: GitMerge, ...translations.services.service8 },
    { icon: Scale, ...translations.services.service9 },
    { icon: ScrollText, ...translations.services.service10 },
    { icon: LandPlot, ...translations.services.service11 },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-[var(--background-secondary)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
            {translations.services.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/30 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              onClick={() => setSelectedService(index)}
              className="card rounded-2xl p-5 md:p-6 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[var(--foreground)] mb-2 line-clamp-2">
                {service.title}
              </h3>
              <button className="text-sm text-[var(--accent)] font-medium hover:underline">
                {translations.services.learnMore}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[var(--card)] rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 left-4 right-auto rtl:right-4 rtl:left-auto p-2 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6">
                  {(() => {
                    const IconComponent = services[selectedService].icon;
                    return <IconComponent className="w-8 h-8 text-[var(--accent)]" />;
                  })()}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
                  {services[selectedService].title}
                </h3>

                <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                  {services[selectedService].description}
                </p>

                <div className="space-y-4">
                  <div className="bg-[var(--background-secondary)] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[var(--accent)]" />
                      <h4 className="font-semibold text-[var(--foreground)]">
                        {translations.services.targetAudience}
                      </h4>
                    </div>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {services[selectedService].audience}
                    </p>
                  </div>

                  <div className="bg-[var(--background-secondary)] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ListChecks className="w-5 h-5 text-[var(--accent)]" />
                      <h4 className="font-semibold text-[var(--foreground)]">
                        {translations.services.outputs}
                      </h4>
                    </div>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {services[selectedService].outputs}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="mt-6 w-full btn-primary py-3 rounded-xl font-semibold"
                >
                  {translations.services.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

