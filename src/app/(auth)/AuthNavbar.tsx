'use client';

import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
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
