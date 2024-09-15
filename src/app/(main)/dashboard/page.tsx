'use client'

import Dashboard from "@/components/dashboard";
import { useAuth } from '@/hooks/useAuth'

export default function DashboardPage() {
  const { isAuthenticated } = useAuth()

  return <Dashboard isGuest={!isAuthenticated} />;
}