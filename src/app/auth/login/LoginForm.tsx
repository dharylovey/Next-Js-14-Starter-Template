'use client';

import GoogleAuthButton from '@/components/Auth_component/GoogleAuthButton';
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
import { loginSchema, LoginSchemaType } from '@/zodSchema/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import ClipLoader from 'react-spinners/ClipLoader';
import { z } from 'zod';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = loginSchema.safeParse(data);
    console.log(result);
  };

  return (
    <div className="flex items-center justify-center px-6">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@mail.com "
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder={
                            showPassword ? 'Enter your password' : '*********'
                          }
                          {...field}
                          disabled={isSubmitting}
                        />
                        <button
                          onClick={toggleShowPassword}
                          className="absolute right-6 top-1/2 -translate-y-1/2"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOpenIcon className="h-5 w-5" />
                          ) : (
                            <EyeClosedIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                    <Button variant="link" size={'sm'} asChild className="px-0">
                      <Link href={'/auth/forgot-password'}>
                        Forgot password?
                      </Link>
                    </Button>
                  </FormItem>
                )}
              />
              <SubmitAuthBtn isSubmitting={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <ClipLoader size={20} color="text-primary" />{' '}
                    <span>Logging in...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </SubmitAuthBtn>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Separator className="w-full" />
          <GoogleAuthButton>
            <FcGoogle className="h-6 w-6" />
            Continue with Google
          </GoogleAuthButton>
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/signup"
              className="font-medium underline underline-offset-4"
              prefetch={false}
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
