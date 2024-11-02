'use client';

import React, { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
export default function GoogleAuthButton({ children }: PropsWithChildren) {
  const handleClick = () => {
    toast.info('Google login is not implemented yet');
  };
  return (
    <>
      <Button variant="outline" className="w-full" onClick={handleClick}>
        {children}
      </Button>
    </>
  );
}
