'use client';

import { FadeLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { verification } from '@/action/auth/verification';

export default function VerificationForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(async () => {
    if (!token) {
      setError('Invalid token');
      return;
    }
    try {
      const result = await verification(token);
      if (result.success) {
        setSuccess(result.success);
      }
      if (result.error) {
        setError(result.error);
      }
    } catch {
      setError('Something went wrong');
    }
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div className="mx-auto flex h-[80vh] items-center justify-center px-6">
      <Card>
        <CardHeader>
          <CardTitle className="mb-4 text-3xl">
            Confirming your email verification
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          {!success && !error && <FadeLoader color="#3b82f6" />}
          <p
            className={cn('text-center text-xl', { 'text-green-500': success })}
          >
            {success}
          </p>
          <p className={cn('text-center text-xl', { 'text-red-500': error })}>
            {error}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button variant={'link'}>
            <Link href={'/auth/login'}>Back to login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
