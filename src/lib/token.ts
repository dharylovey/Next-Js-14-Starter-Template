import { getVerificationTokenByEmail } from '@/services/verificationToken';
import { v4 as uuidv4 } from 'uuid';
import prisma from '@/lib/db';

export async function generateVerificationToken(email: string) {
  const token = uuidv4();
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  const existingUser = await getVerificationTokenByEmail(email);

  if (existingUser) {
    await prisma.verificationToken.delete({
      where: {
        id: existingUser.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
}
