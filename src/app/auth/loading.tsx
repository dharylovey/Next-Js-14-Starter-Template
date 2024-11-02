import React from 'react';

export default function AuthLoading() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}
