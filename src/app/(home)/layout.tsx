import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl space-y-10 p-4">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
