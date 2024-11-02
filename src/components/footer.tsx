'use client';

import Link from 'next/link';
import React from 'react';

const features = ['About', 'Blog'];

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {features.map((item) => (
            <div key={item} className="px-5 py-2">
              <Link
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 Dharyl Almora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
