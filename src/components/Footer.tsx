'use client';

import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  translations: {
    footer: {
      rights: string;
      company: string;
    };
    nav: {
      about: string;
      goals: string;
      services: string;
      clients: string;
      team: string;
      contact: string;
    };
    contact: {
      phone: string;
      email: string;
    };
  };
}

export default function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: '#about', label: translations.nav.about },
    { href: '#services', label: translations.nav.services },
    { href: '#team', label: translations.nav.team },
    { href: '#contact', label: translations.nav.contact },
  ];

  return (
    <footer className="relative bg-[var(--background-secondary)] border-t border-[var(--border)]">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="/qefan-logo.svg"
                alt="Qefan"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-[var(--foreground)]">
                {translations.footer.company}
              </span>
            </div>
            <div className="w-12 h-0.5 bg-[var(--accent)] mx-auto md:mx-0 mb-4" />
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-end">
            <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
              {translations.nav.contact}
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+966510107799"
                className="flex items-center justify-center md:justify-end gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone size={14} />
                <span dir="ltr">0510107799</span>
              </a>
              <a
                href="mailto:info@qefanlawfirm.com"
                className="flex items-center justify-center md:justify-end gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail size={14} />
                <span>info@qefanlawfirm.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm text-[var(--foreground-muted)]">
              © {currentYear} {translations.footer.company}
            </p>
            <p className="text-sm text-[var(--foreground-muted)]">
              {translations.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

