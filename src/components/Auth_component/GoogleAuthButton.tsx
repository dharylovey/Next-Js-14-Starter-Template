'use client';

import React, { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import { googleLogin } from '@/action/auth/providerLogin';
export default function GoogleAuthButton({ children }: PropsWithChildren) {
  const handleClick = async () => {
    await googleLogin();
  };
  return (
    <>
      <Button variant="outline" className="w-full" onClick={handleClick}>
        {children}
      </Button>
    </>
  );
}
