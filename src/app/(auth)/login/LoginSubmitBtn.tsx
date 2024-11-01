'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

interface Props {
  children: React.ReactNode;
  isSubmitting: boolean;
}

export default function LoginSubmitBtn({ children, isSubmitting }: Props) {
  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {children}
    </Button>
  );
}
