'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  locale: 'ar' | 'en';
  setLocale: (locale: 'ar' | 'en') => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  translations: {
    nav: {
      about: string;
      vision: string;
      goals: string;
      values: string;
      services: string;
      clients: string;
      team: string;
      contact: string;
    };
  };
}

export default function Navbar({ locale, setLocale, isDark, setIsDark, translations }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: translations.nav.about },
    { href: '#vision', label: translations.nav.vision },
    { href: '#goals', label: translations.nav.goals },
    { href: '#values', label: translations.nav.values },
    { href: '#services', label: translations.nav.services },
    { href: '#clients', label: translations.nav.clients },
    { href: '#team', label: translations.nav.team },
    { href: '#contact', label: translations.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--background)]/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Toggle */}
              <button
                onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] transition-colors text-sm font-medium"
                aria-label="Toggle language"
              >
                <Languages size={16} />
                <span className="hidden sm:inline">{locale === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-[var(--background)] mx-4 rounded-2xl shadow-xl p-6"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors py-2 border-b border-[var(--border)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

