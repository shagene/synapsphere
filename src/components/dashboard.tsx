"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { Sun, Moon, LogOut, Plus, Search, Book, BarChart2, Settings, ChevronRight, Award } from "lucide-react"
import { useQuizzes } from '@/hooks/useQuizzes'
import { FloatingNav } from './floating-nav'

interface DashboardProps {
  isGuest?: boolean;
}

export default function Dashboard({ isGuest = false }: DashboardProps) {
  return (
    <div>
      <h1>{isGuest ? "Guest Dashboard" : "Dashboard"}</h1>
      {/* Add your dashboard content here */}
      {isGuest && (
        <p>You are using a limited guest version. Sign up for full access!</p>
      )}
      {/* Rest of your dashboard content */}
    </div>
  );
}