import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "قفان للمحاماة والاستشارات القانونية | Qefan Law Firm",
  description: "شريكك القانوني المستدام نحو النجاح - Your Sustainable Legal Partner Towards Success",
  icons: {
    icon: '/qefan-logo.svg',
    shortcut: '/qefan-logo.svg',
    apple: '/qefan-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <link rel="icon" href="/qefan-logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
