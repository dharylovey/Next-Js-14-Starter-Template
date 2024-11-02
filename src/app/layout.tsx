import { ThemeProvider } from '@/components/theme-providers';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import React from 'react';
import './globals.css';

const quicksandFont = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Dharyl Next JS Starter',
  description: 'Free Next JS starter with Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${quicksandFont.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
