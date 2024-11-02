'use client';

import Link from 'next/link';
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

const features = [
  {
    name: 'Next JS 15.7.0',
    description:
      'Next.js 15: Fast, Scalable, and Secure Applications Build exceptional user experiences with Next.js 15, featuring:Server-side rendering Static site generation Image optimization Enhanced security Latest React features.Get started today and take your web development to the next level!',
  },
  {
    name: 'Tailwind CSS 3.3.3',
    description:
      'Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces. Learn more about Tailwind CSS in our docs.',
  },
  {
    name: 'React 19',
    description:
      'React: A JavaScript library for building user interfaces. Learn more about React in our docs.',
  },
  {
    name: 'Shadcn UI',
    description:
      'Shadcn UI: A fully accessible, fully customizable UI library. Learn more about Shadcn UI in our docs.',
  },
  {
    name: 'React Hook Form',
    description:
      'React Hook Form: A library for managing form state and validation in React. Learn more about React Hook Form in our docs.',
  },
  {
    name: 'Zod',
    description:
      'Zod: A TypeScript-based schema validation library. Learn more about Zod in our docs.',
  },
  {
    name: 'Vercel',
    description:
      'Vercel: A platform for hosting and deploying web applications. Learn more about Vercel in our docs.',
  },
  {
    name: 'Auth JS (Next Auth)',
    description:
      'Next Auth: An authentication library for Next.js. Learn more about Next Auth in our docs.',
  },
];

export default function LandingPage() {
  return (
    <main className="flex-grow">
      <div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="light:text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-indigo-600">Next JS Starter</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Kickstart your journey with our innovative solution. Easily
              organize your workflow, get more done in less time, and achieve
              your goals - even if youre just starting out.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/90 md:px-10 md:py-4 md:text-lg"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary">
              Features
            </h2>
            <p className="light:text-gray-900 mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Unlock your full potential with our product, built on the latest
              technologies:
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="light:text-gray-900 ml-16 text-lg font-medium leading-6">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
