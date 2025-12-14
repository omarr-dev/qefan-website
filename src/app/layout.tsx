import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "قفان للمحاماة والاستشارات القانونية | Qefan Law Firm",
  description: "شريكك القانوني المستدام نحو النجاح - Your Sustainable Legal Partner Towards Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
