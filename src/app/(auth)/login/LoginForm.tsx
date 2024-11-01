'use client';

import {
  Card,
  CardContent,
  CardDescription,
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
import { loginSchema } from '@/zodSchema/loginSchema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import LoginSubmitBtn from './LoginSubmitBtn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof loginSchema>>({
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
    <div className="flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please login to your account.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
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
                  <FormItem className="mb-4">
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
                    <Button variant="link" size={'sm'} asChild className="px-0">
                      <Link href={'/auth/forgot-password'}>
                        Forgot password?
                      </Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoginSubmitBtn isSubmitting={isSubmitting}>Login</LoginSubmitBtn>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
}
