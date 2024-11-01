'use client';

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl transition-transform hover:underline">
          Next JS Starter
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button onClick={() => router.push('/login')}>Login</Button>
      </div>
    </nav>
  );
}
