"use client";

import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Team from "@/components/Team";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, useState } from "react";

import arTranslations from "@/messages/ar.json";
import enTranslations from "@/messages/en.json";

type Locale = "ar" | "en";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const translations = locale === "ar" ? arTranslations : enTranslations;

  useEffect(() => {
    setMounted(true);

    // Check for saved preferences
    const savedLocale = localStorage.getItem("locale") as Locale;
    const savedTheme = localStorage.getItem("theme");

    if (savedLocale) {
      setLocale(savedLocale);
    }

    if (savedTheme === "dark") {
      setIsDark(true);
    } else if (savedTheme === "light") {
      setIsDark(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", isDark ? "dark" : "light");
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDark, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#9a7549] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar
        locale={locale}
        setLocale={setLocale}
        isDark={isDark}
        setIsDark={setIsDark}
        translations={translations}
      />
      <Hero translations={translations} />
      <About translations={translations} />
      <Goals translations={translations} />
      <Services translations={translations} />
      <Clients translations={translations} />
      <Team translations={translations} />
      <Contact translations={translations} />
      <Footer
        translations={{
          footer: translations.footer,
          nav: translations.nav,
          contact: translations.contact,
        }}
      />
      <WhatsAppButton />
    </main>
  );
}
