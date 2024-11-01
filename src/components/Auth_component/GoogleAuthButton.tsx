'use client';

import React, { PropsWithChildren } from 'react';
import { Button } from '../ui/button';

export default function GoogleAuthButton({ children }: PropsWithChildren) {
  return (
    <>
      <Button variant="outline" className="w-full">
        {children}
      </Button>
    </>
  );
}
