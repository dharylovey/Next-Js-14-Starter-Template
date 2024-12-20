'use client';

import SubmitAuthBtn from '@/components/Auth_component/SubmitAuthBtn';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from '@/zodSchema/forgotPwSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'sonner';

export default function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: ForgotPasswordSchemaType) => {
    const delay: Promise<{ name: string }> = new Promise((resolve) =>
      setTimeout(() => resolve({ name: 'Reset link sent to your email' }), 2000)
    );
    const result = forgotPasswordSchema.safeParse(data);

    try {
      if (result.success) {
        toast.promise(delay, {
          loading: 'Sending reset password link...',
          success: (item) => `${item.name}`,
          error: (err) => `An error occurred: ${err.message}`,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      form.reset();
    }
  };

  return (
    <div className="mx-auto flex h-screen items-center justify-center px-6">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Forgot Password?</CardTitle>
          <CardDescription>
            Enter your email address and we will send you a link to reset your
            password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="example@mail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitAuthBtn isSubmitting={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <ClipLoader size={20} color="text-primary" />{' '}
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send link to reset password'
                )}
              </SubmitAuthBtn>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Separator />
          <Button variant={'link'} size={'sm'}>
            <Link href="/auth/login">Back to Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
