'use client';

import GoogleAuthButton from '@/components/Auth_component/GoogleAuthButton';
import SubmitAuthBtn from '@/components/Auth_component/SubmitAuthBtn';
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
import { registerSchema, RegisterSchemaType } from '@/zodSchema/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import ClipLoader from 'react-spinners/ClipLoader';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: RegisterSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = registerSchema.safeParse(data);
    console.log(result);
  };

  return (
    <div className="flex items-center justify-center px-6">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Fill out the form below, to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Juan Dela Cruz"
                        {...field}
                        autoComplete=""
                        autoCapitalize="true"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder={
                            showConfirmPassword
                              ? 'Please re-enter your password'
                              : '*********'
                          }
                          {...field}
                          disabled={isSubmitting}
                        />
                        <button
                          onClick={toggleShowConfirmPassword}
                          className="absolute right-6 top-1/2 -translate-y-1/2"
                          tabIndex={-1}
                        >
                          {showConfirmPassword ? (
                            <EyeOpenIcon className="h-5 w-5" />
                          ) : (
                            <EyeClosedIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitAuthBtn isSubmitting={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <ClipLoader size={20} color="text-primary" />{' '}
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
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
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="font-medium underline underline-offset-4"
              prefetch={false}
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
