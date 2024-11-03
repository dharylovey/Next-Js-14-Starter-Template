import { auth } from '@/auth';
import React from 'react';

export default async function DashboardPage() {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <h1 className="text-3xl">Dashboard</h1>
    </div>
  );
}
