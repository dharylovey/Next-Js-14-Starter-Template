'use server';

import { registerSchema } from '@/zodSchema/registerSchema';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';
import { getUserByEmail } from '@/services/user';
import { generateVerificationToken } from '@/lib/token';

export const register = async (data: z.infer<typeof registerSchema>) => {
  const validatedData = registerSchema.safeParse(data);

  if (!validatedData.success) {
    return { success: false, error: 'Invalid email or password' };
  }

  const { name, email, password } = validatedData.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { success: false, error: 'User already exists' };
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await generateVerificationToken(email);

    return { success: true, message: 'Email confirmation link has been sent!' };
  } catch (error) {
    console.error(error);

    // return error message
    return {
      success: false,
      error: 'An error occurred during registration. Please try again.',
    };
  }
};
