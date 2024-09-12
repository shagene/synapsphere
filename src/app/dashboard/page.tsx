'use client'

import { useEffect, useState } from 'react';
import Dashboard from "@/components/dashboard";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status
    const authToken = localStorage.getItem('authToken');
    setIsAuthenticated(!!authToken);
  }, []);

  if (isAuthenticated) {
    return <Dashboard />;
  } else {
    // If not authenticated, you can either show a guest version of the dashboard
    // or redirect to the landing page
    return <Dashboard isGuest={true} />;
    // Alternatively, to redirect:
    // router.push('/');
    // return null;
  }
}