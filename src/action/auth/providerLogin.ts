'use server';

import { signIn } from '@/auth';
import { DEFAULT_REDIRECT } from '@/routes';

export async function googleLogin() {
  console.log('DEFAULT_REDIRECT:', DEFAULT_REDIRECT);
  await signIn('google', {
    callBackUrl: DEFAULT_REDIRECT,
  });
}
