'use server';

import prisma from '@/lib/db';
import { getUserByEmail } from '@/services/user';
import { getVerificationToken } from '@/services/verificationToken';

export const verification = async (token: string) => {
  const existingToken = await getVerificationToken(token);
  if (!existingToken) {
    return { error: 'Invalid token' };
  }

  const hasExpired = new Date() > new Date(existingToken.expires);
  if (hasExpired) {
    return { error: 'Token has expired' };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: 'User does not exist' };
  }

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: { emailVerified: new Date(), email: existingToken.email },
  });

  await prisma.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: 'Successfully verified your email 🎉' };
};
