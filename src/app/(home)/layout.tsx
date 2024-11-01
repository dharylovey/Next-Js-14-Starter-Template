import React, { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl space-y-10 p-4">
      <Navbar />
      {children}
    </main>
  );
}
