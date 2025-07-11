'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  User,
  Search,
  Bell
} from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Centers', href: '/centers' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'AI Assistant', href: '/ai-assistant' },
    { name: 'About', href: '/about' }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MedBook</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>

            {/* Voice Booking */}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Voice Book</span>
            </button>

            {/* Telegram Bot */}
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Telegram</span>
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors w-full">
                    <Phone className="w-4 h-4" />
                    <span>Voice Book</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors w-full">
                    <MessageCircle className="w-4 h-4" />
                    <span>Telegram Bot</span>
                  </button>
                  
                  <div className="space-y-2">
                    <Link href="/login" className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                      Login
                    </Link>
                    <Link href="/signup" className="block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors text-center">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
} 