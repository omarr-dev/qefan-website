'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface ContactProps {
  translations: {
    contact: {
      title: string;
      subtitle: string;
      phone: string;
      email: string;
      whatsapp: string;
    };
  };
}

export default function Contact({ translations }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: translations.contact.phone,
      value: '0510107799',
      href: 'tel:+966510107799',
    },
    {
      icon: Mail,
      label: translations.contact.email,
      value: 'info@qefanlawfirm.com',
      href: 'mailto:info@qefanlawfirm.com',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[var(--background)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            {translations.contact.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/30 mx-auto mb-4 rounded-full"
          />
          <p className="text-lg text-[var(--foreground-muted)]">
            {translations.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card rounded-3xl p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {info.label}
                  </p>
                  <p className="font-semibold text-[var(--foreground)]" dir="ltr">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/966510107799"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-xl font-semibold transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            {translations.contact.whatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

