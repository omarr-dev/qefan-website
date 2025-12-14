'use client';

interface FooterProps {
  translations: {
    footer: {
      rights: string;
      company: string;
    };
  };
}

export default function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[var(--foreground-muted)]">
            © {currentYear} {translations.footer.company}. {translations.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}

