import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import bcrypt from 'bcryptjs';

import { loginSchema } from './zodSchema/loginSchema';
import { getUserByEmail } from './services/user';

export default {
  providers: [
    GitHub,
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedData = loginSchema.safeParse(credentials);

        if (validatedData.success) {
          const { email, password } = validatedData.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
