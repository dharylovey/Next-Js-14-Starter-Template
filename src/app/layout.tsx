import { ThemeProvider } from '@/components/theme-providers';
import type { Metadata } from 'next';
import { DynaPuff } from 'next/font/google';
import React from 'react';
import './globals.css';

const dynaPuffFont = DynaPuff({
  subsets: ['latin'],
  variable: '--font-dyna-puff',
  weight: ['400', '500', '600', '700'],
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
      <body className={` ${dynaPuffFont.variable} antialiased`}>
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
