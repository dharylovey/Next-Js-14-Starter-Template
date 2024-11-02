import {
  apiAuthRoutes,
  authRoutes,
  DEFAULT_REDIRECT,
  isPublicRoute,
} from '@/routes';
import NextAuth, { Session } from 'next-auth';
import authConfig from './auth.config';
import { NextRequest } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {
    const { nextUrl } = req;
    const isLogin = !!req.auth;

    const isApiRoute = nextUrl.pathname.startsWith(apiAuthRoutes);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isPublic = isPublicRoute.includes(nextUrl.pathname);

    if (isApiRoute) return;

    if (isAuthRoute) {
      if (isLogin) {
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl.origin));
      }
      return;
    }

    if (!isLogin && !isPublic) {
      return Response.redirect(new URL('/auth/login', nextUrl.origin));
    }

    return;
  }
);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
