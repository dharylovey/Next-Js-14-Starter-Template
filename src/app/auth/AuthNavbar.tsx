'use client';

import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <h1 className="text-xl transition-transform hover:underline sm:text-3xl">
          Next JS Starter
        </h1>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <ModeToggle />
      </div>
    </nav>
  );
}
