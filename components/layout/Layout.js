import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunMedium, Moon, Menu, X } from '../Icons'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])
    const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Links', href: '/links' },
  ];  return (
    <div className="min-h-screen w-full background-gradient transition-all duration-300 ease-in-out">      <nav className="relative z-50 sticky top-0 bg-white/80 backdrop-blur-xl dark:bg-gray-900/90 border-b border-gray-200/60 dark:border-gray-700/50 shadow-lg dark:shadow-black/40 transition-all duration-300 ease-in-out flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 transition-all duration-300 ease-in-out">
              Chandan Malakar
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === 'dark' ? 
                  <SunMedium size={20} className="text-yellow-500" /> :
                  <Moon size={20} className="text-purple-500" />
                )}
              </button>              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? 
                    <X size={20} /> :
                    <Menu size={20} />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-white/75 dark:bg-gray-900/75 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>      <main className="relative z-10 flex-grow">
        {children}
      </main>      <footer className="relative z-10 py-8 border-t border-gray-200/70 dark:border-gray-700/60 bg-white/75 backdrop-blur-xl dark:bg-gray-900/75 shadow-xl dark:shadow-black/50 transition-all duration-300 ease-in-out flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">{/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 mb-3 transition-all duration-300 ease-in-out">Chandan Malakar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "Every dataset tells a story, every algorithm solves a problem, and every line of code brings us closer to understanding the world through data."
              </p>
            </div>            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 mb-3 transition-all duration-300 ease-in-out">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/projects" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Featured Projects
                </Link>
                <Link href="/blog" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Latest Articles
                </Link>
                <Link href="/contact" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>            {/* Theme & Status */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 mb-3 transition-all duration-300 ease-in-out">Preferences</h3>
              <div className="flex items-center justify-center md:justify-end mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-3">Theme</span>                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    theme === 'dark' ? 
                    <SunMedium size={20} className="text-yellow-500" /> :
                    <Moon size={20} className="text-purple-500" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                🟢 Available for opportunities
              </p>
            </div>
          </div>          {/* Bottom Bar */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Chandan Malakar. Crafted with precision and passion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
