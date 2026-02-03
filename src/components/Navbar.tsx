'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface NavbarProps {
  locale: 'ar' | 'en';
  setLocale: (locale: 'ar' | 'en') => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  translations: {
    nav: {
      about: string;
      goals: string;
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
    { href: '#goals', label: translations.nav.goals },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--background)]/95 backdrop-blur-md shadow-lg border-b border-[var(--border)]/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <Image
                src="/qefan-logo.svg"
                alt="Qefan"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-1/2" />
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] border border-[var(--border)]/50 hover:border-[var(--accent)]/30 transition-all text-sm font-medium"
                aria-label="Toggle language"
              >
                <Languages size={16} className="text-[var(--accent)]" />
                <span className="hidden sm:inline">{locale === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 md:p-2.5 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] border border-[var(--border)]/50 hover:border-[var(--accent)]/30 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} className="text-[var(--accent)]" /> : <Moon size={18} className="text-[var(--accent)]" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--card-hover)] border border-[var(--border)]/50 transition-all"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[var(--background)] mx-4 rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-center p-4 border-b border-[var(--border)]">
                <Image
                  src="/qefan-logo.svg"
                  alt="Qefan"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="flex items-center text-lg font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors py-3 border-b border-[var(--border)]/50 last:border-b-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]/30 mr-3 rtl:mr-0 rtl:ml-3" />
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

