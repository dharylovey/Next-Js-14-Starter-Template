import React from 'react';
import AuthNavbar from './AuthNavbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl space-y-10 p-4">
      <AuthNavbar />
      {children}
    </main>
  );
}
