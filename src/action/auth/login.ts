'use server';

import { loginSchema } from '@/zodSchema/loginSchema';
import { z } from 'zod';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/services/user';
import bcrypt from 'bcryptjs';

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validatedData = loginSchema.safeParse(data);

  if (!validatedData.success) {
    return { success: false, message: 'Invalid email or password' };
  }

  const { email, password } = validatedData.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.password || !existingUser.email) {
    return { error: 'Email does not exist' };
  }

  const passwordMatch = await bcrypt.compare(password, existingUser.password);

  if (!passwordMatch) {
    return { error: 'Invalid email or password' };
  }

  //todo email verification

  try {
    await signIn('credentials', {
      email: existingUser.email,
      password: existingUser.password,
      redirect: false,
    });

    return { success: true, message: 'Successfully logged in!' };
  } catch (error) {
    console.error('Error during sign-in:', error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid email or password!' };
        case 'AccessDenied':
          return { error: 'Please verify your email!' };
        default:
          return {
            error: 'Unexpected error occurred. Please try again later.',
          };
      }
    }
    throw error;
  }
};
