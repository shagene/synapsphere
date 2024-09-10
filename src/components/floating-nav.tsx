'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Home, Book, BarChart2, Award, Settings, User } from 'lucide-react'

const NavItem: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({ href, icon, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-navy-700 text-white'
        : 'text-navy-100 hover:bg-navy-700 hover:text-white'
    }`}>
      {React.cloneElement(icon as React.ReactElement, {
        className: `mr-3 h-6 w-6 ${isActive ? 'text-gold-400' : 'text-navy-300 group-hover:text-white'}`,
      })}
      {children}
    </Link>
  )
}

export function FloatingNav() {
  return (
    <div className="fixed left-4 top-4 bottom-4 w-64 bg-navy-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
      <div className="p-4 flex items-center">
        <Shield className="h-8 w-8 text-scarlet-600 mr-2" />
        <span className="text-2xl font-bold text-gold-400">SynapSphere</span>
      </div>
      
      <nav className="flex-grow px-2 pb-4 space-y-1">
        <NavItem href="/dashboard" icon={<Home />}>Dashboard</NavItem>
        <NavItem href="/quizzes" icon={<Book />}>My Quizzes</NavItem>
        <NavItem href="/progress" icon={<BarChart2 />}>Progress</NavItem>
        <NavItem href="/achievements" icon={<Award />}>Achievements</NavItem>
        <NavItem href="/settings" icon={<Settings />}>Settings</NavItem>
      </nav>
      
      <div className="p-4 border-t border-navy-700">
        <Link href="/profile" className="flex items-center text-sm font-medium text-navy-100 hover:text-white transition-colors">
          <div className="w-8 h-8 rounded-full bg-navy-600 flex items-center justify-center mr-3">
            <User className="h-5 w-5 text-navy-300" />
          </div>
          <span>View Profile</span>
        </Link>
      </div>
    </div>
  )
}