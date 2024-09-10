"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { Sun, Moon, LogOut, Plus, Search, Book, BarChart2, Settings, ChevronRight, Award } from "lucide-react"
import { useQuizzes } from '@/hooks/useQuizzes'

export default function Dashboard() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: quizzes, isLoading, error } = useQuizzes()

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-navy-blue dark:bg-dark-bg">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <span className="text-2xl font-bold text-usmc-gold">SynapSphere</span>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-usmc-scarlet text-white">
                    <Book className="mr-3 h-6 w-6 text-usmc-gold" />
                    My Quizzes
                  </a>
                  <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent hover:text-usmc-scarlet">
                    <BarChart2 className="mr-3 h-6 w-6 text-usmc-scarlet" />
                    Progress
                  </a>
                  <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent hover:text-usmc-scarlet">
                    <Award className="mr-3 h-6 w-6 text-usmc-scarlet" />
                    Achievements
                  </a>
                  <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent hover:text-usmc-scarlet">
                    <Settings className="mr-3 h-6 w-6 text-usmc-scarlet" />
                    Settings
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-light-accent dark:bg-dark-accent p-4">
                <a href="#" className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-9 w-9 rounded-full" src="/placeholder.svg?height=36&width=36" alt="Profile" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-light-text dark:text-dark-text">Tom Cook</p>
                      <p className="text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary group-hover:text-usmc-scarlet">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-light-text dark:text-dark-text hover:text-usmc-scarlet focus:outline-none focus:ring-2 focus:ring-inset focus:ring-usmc-scarlet"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-light-text dark:text-dark-text">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {isLoading ? (
                  <p>Loading quizzes...</p>
                ) : error ? (
                  <p>Error loading quizzes</p>
                ) : (
                  <ul className="mt-4 space-y-2">
                    {quizzes?.map((quiz) => (
                      <li key={quiz.id} className="bg-light-accent dark:bg-dark-accent p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-navy-blue dark:text-usmc-gold">{quiz.title}</h3>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'fixed inset-0 flex z-40' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-navy-blue dark:bg-dark-bg">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-2xl font-bold text-usmc-gold">SynapSphere</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md bg-usmc-scarlet text-white">
                <Book className="mr-4 h-6 w-6 text-usmc-gold" />
                My Quizzes
              </a>
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent hover:text-usmc-scarlet">
                <BarChart2 className="mr-4 h-6 w-6 text-usmc-scarlet" />
                Progress
              </a>
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent hover:text-usmc-scarlet">
                <Award className="mr-4 h-6 w-6 text-usmc-scarlet" />
                Achievements
              </a>
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent hover:text-usmc-scarlet">
                <Settings className="mr-4 h-6 w-6 text-usmc-scarlet" />
                Settings
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-light-accent dark:bg-dark-accent p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt="Profile" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-light-text dark:text-dark-text">Tom Cook</p>
                  <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary group-hover:text-usmc-scarlet">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-14"></div>
      </div>

      {/* Theme toggle and logout button */}
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-light-accent dark:bg-dark-accent"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5 text-usmc-gold" /> : <Moon className="h-5 w-5 text-navy-blue" />}
        </Button>
        <Button className="bg-usmc-scarlet hover:bg-usmc-scarlet/90 text-white rounded-full p-2">
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}