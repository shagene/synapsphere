'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { Sun, Moon, ChevronRight, Shield, BarChart, Users, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Share2, Save, Edit } from "lucide-react"
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, ModalTrigger } from "@/components/ui/modal"
import { useRouter } from 'next/navigation'

export function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('authToken', 'dummyToken');
    console.log('Login submitted')
    router.push('/dashboard')
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('authToken', 'dummyToken');
    console.log('Signup submitted')
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <header className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-usmc-scarlet" />
            <span className="text-2xl font-bold text-navy-blue dark:text-usmc-gold">SynapSphere</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Home</a>
            <a href="#features" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Features</a>
            <a href="#create" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Create</a>
            <a href="#pricing" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Pricing</a>
            <a href="#about" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">About Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-light-accent dark:bg-dark-accent"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-usmc-gold" /> : <Moon className="h-5 w-5 text-navy-blue" />}
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6 text-navy-blue dark:text-usmc-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-light-bg dark:bg-dark-bg py-2">
            <a href="#" className="block px-4 py-2 text-navy-blue dark:text-usmc-gold hover:bg-usmc-scarlet hover:text-white">Home</a>
            <a href="#features" className="block px-4 py-2 text-navy-blue dark:text-usmc-gold hover:bg-usmc-scarlet hover:text-white">Features</a>
            <a href="#create" className="block px-4 py-2 text-navy-blue dark:text-usmc-gold hover:bg-usmc-scarlet hover:text-white">Create</a>
            <a href="#pricing" className="block px-4 py-2 text-navy-blue dark:text-usmc-gold hover:bg-usmc-scarlet hover:text-white">Pricing</a>
            <a href="#about" className="block px-4 py-2 text-navy-blue dark:text-usmc-gold hover:bg-usmc-scarlet hover:text-white">About Us</a>
          </div>
        )}
      </header>

      <main>
        <section className="hero bg-gradient-to-r from-usmc-scarlet to-navy-blue dark:from-gray-900 dark:to-usmc-scarlet text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Create, Share, and Master Knowledge Through Interactive Quizzes</h1>
                <p className="text-xl mb-8 text-white">Design, Drag, Drop, and Learn with SynapSphere</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Modal>
                    <ModalTrigger asChild>
                      <Button variant="default">Sign Up</Button>
                    </ModalTrigger>
                    <ModalContent>
                      <ModalHeader>
                        <ModalTitle>Sign Up</ModalTitle>
                        <ModalDescription>Create your SynapSphere account</ModalDescription>
                      </ModalHeader>
                      <form onSubmit={handleSignup}>
                        <div className="grid gap-4 py-4">
                          <Input id="name" placeholder="Name" />
                          <Input id="email" type="email" placeholder="Email" />
                          <Input id="password" type="password" placeholder="Password" />
                        </div>
                        <ModalFooter>
                          <Button type="submit">Sign Up</Button>
                        </ModalFooter>
                      </form>
                    </ModalContent>
                  </Modal>
                  <Modal>
                    <ModalTrigger asChild>
                      <Button variant="outline" >Log In</Button>
                    </ModalTrigger>
                    <ModalContent>
                      <ModalHeader>
                        <ModalTitle>Log In</ModalTitle>
                        <ModalDescription>Log in to your SynapSphere account</ModalDescription>
                      </ModalHeader>
                      <form onSubmit={handleLogin}>
                        <div className="grid gap-4 py-4">
                          <Input id="email" type="email" placeholder="Email" />
                          <Input id="password" type="password" placeholder="Password" />
                        </div>
                        <ModalFooter>
                          <Button type="submit">Log In</Button>
                        </ModalFooter>
                      </form>
                    </ModalContent>
                  </Modal>
                  <Button variant="ghost" onClick={() => router.push('/dashboard')}>Try for Free</Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=300&width=400" alt="SynapSphere Interface" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-light-bg dark:bg-dark-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-blue dark:text-usmc-gold">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-light-accent dark:bg-dark-accent rounded-full">
                  <Edit className="h-8 w-8 text-navy-blue dark:text-usmc-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-blue dark:text-usmc-gold">Create Custom Quizzes</h3>
                <p className="text-light-text dark:text-dark-text">Design your own quizzes with our intuitive drag-and-drop interface.</p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-light-accent dark:bg-dark-accent rounded-full">
                  <Share2 className="h-8 w-8 text-navy-blue dark:text-usmc-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-blue dark:text-usmc-gold">Share with Others</h3>
                <p className="text-light-text dark:text-dark-text">Paid users can share quizzes with friends, family, or students.</p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-light-accent dark:bg-dark-accent rounded-full">
                  <Save className="h-8 w-8 text-navy-blue dark:text-usmc-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-blue dark:text-usmc-gold">Save for Later</h3>
                <p className="text-light-text dark:text-dark-text">Registered users can save quizzes and track progress over time.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="create" className="bg-light-accent dark:bg-dark-accent py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-blue dark:text-usmc-gold">Create and Share Your Knowledge</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/placeholder.svg?height=300&width=400" alt="Quiz Creation Interface" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-navy-blue dark:text-usmc-gold">Empower Learning with Custom Quizzes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-navy-blue dark:text-usmc-gold mr-2 flex-shrink-0" />
                    <span className="text-light-text dark:text-dark-text">Create vocabulary lists for language classes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-navy-blue dark:text-usmc-gold mr-2 flex-shrink-0" />
                    <span className="text-light-text dark:text-dark-text">Design science quizzes matching elements to symbols</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-navy-blue dark:text-usmc-gold mr-2 flex-shrink-0" />
                    <span className="text-light-text dark:text-dark-text">Share history timelines with your study group</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-navy-blue dark:text-usmc-gold mr-2 flex-shrink-0" />
                    <span className="text-light-text dark:text-dark-text">Collaborate with colleagues on professional development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-light-bg dark:bg-dark-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-blue dark:text-usmc-gold">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light-accent dark:bg-dark-accent p-6 rounded-lg shadow-lg">
                <p className="mb-4 text-light-text dark:text-dark-text">"SynapSphere has revolutionized the way I create study materials for my students. The ability to share custom quizzes has made my job so much easier!"</p>
                <p className="font-semibold text-navy-blue dark:text-usmc-gold">- Sarah J., Teacher</p>
              </div>
              <div className="bg-light-accent dark:bg-dark-accent p-6 rounded-lg shadow-lg">
                <p className="mb-4 text-light-text dark:text-dark-text">"I love being able to create and save my own quizzes. It's perfect for reviewing complex topics and sharing with my study group."</p>
                <p className="font-semibold text-navy-blue dark:text-usmc-gold">- Mark T., University Student</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-light-accent dark:bg-dark-accent py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-blue dark:text-usmc-gold">Pricing</h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
              <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-lg shadow-lg flex-1 max-w-sm">
                <h3 className="text-2xl font-bold mb-4 text-navy-blue dark:text-usmc-gold">Free</h3>
                <ul className="mb-8 space-y-2">
                  <li className="text-light-text dark:text-dark-text">✓ Access to public quizzes</li>
                  <li className="text-light-text dark:text-dark-text">✓ Create basic quizzes</li>
                  <li className="text-light-text dark:text-dark-text">✓ Limited topic selection</li>
                  <li className="text-light-text dark:text-dark-text">✓ Basic progress tracking</li>
                  <li className="text-light-text dark:text-dark-text">✗ Save quizzes for later</li>
                  <li className="text-light-text dark:text-dark-text">✗ Share custom quizzes</li>
                </ul>
                <Button 
                  variant="default"
                  onClick={() => router.push('/dashboard')}
                >
                  Try for Free
                </Button>
              </div>
              <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-lg shadow-lg flex-1 max-w-sm border-4 border-navy-blue dark:border-usmc-gold">
                <h3 className="text-2xl font-bold mb-4 text-navy-blue dark:text-usmc-gold">Premium</h3>
                <ul className="mb-8 space-y-2">
                  <li className="text-light-text dark:text-dark-text">✓ Access to all quizzes</li>
                  <li className="text-light-text dark:text-dark-text">✓ Create unlimited custom quizzes</li>
                  <li className="text-light-text dark:text-dark-text">✓ Advanced quiz creation tools</li>
                  <li className="text-light-text dark:text-dark-text">✓ Share quizzes with others</li>
                  <li className="text-light-text dark:text-dark-text">✓ Save and organize quizzes</li>
                  <li className="text-light-text dark:text-dark-text">✓ Detailed progress tracking</li>
                  <li className="text-light-text dark:text-dark-text">✓ Priority support</li>
                </ul>
                <Button variant="default">
                  Upgrade to Premium
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-usmc-scarlet to-navy-blue dark:from-gray-900 dark:to-usmc-scarlet text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white dark:text-usmc-gold">Ready to Create and Share Your Knowledge?</h2>
            <Button variant="default" size="lg">
              Get Started Now
            </Button>
            <p className="mt-4">
              <a href="#" className="underline text-white hover:text-white/90 dark:text-usmc-gold dark:hover:text-usmc-gold/90">Request a Demo</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-light-accent dark:bg-dark-accent text-light-text-secondary dark:text-dark-text-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 SynapSphere. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Privacy Policy</a>
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Terms of Service</a>
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet">Contact Us</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-navy-blue dark:text-usmc-gold hover:text-usmc-scarlet"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4">
        <Button className="bg-usmc-scarlet hover:bg-usmc-scarlet/90 text-white rounded-full p-4">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}