'use client'

import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

export function AuthCheck({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Add your authentication logic here
    // For now, we'll use a dummy check
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  return <>{children}</>;
}