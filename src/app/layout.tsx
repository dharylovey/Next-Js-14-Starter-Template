import { ThemeProvider } from '@/components/theme-providers';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import React from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

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
          <Toaster
            duration={2000}
            position="top-center"
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
