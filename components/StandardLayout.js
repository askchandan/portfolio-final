import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function StandardLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
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
    <div className="min-h-screen relative background-gradient">
      <nav className="relative z-50 sticky top-0 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
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

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mounted && (
                  theme === 'dark' ? 
                  <span role="img" aria-label="Sun" className="text-xl">☀️</span> :
                  <span role="img" aria-label="Moon" className="text-xl">🌙</span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isMenuOpen ? 
                    <span role="img" aria-label="Close" className="text-xl">❌</span> :
                    <span role="img" aria-label="Menu" className="text-xl">☰</span>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      <footer className="relative z-10 py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 backdrop-blur-sm dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-gray-700 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Chandan Malakar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-600 dark:text-gray-400">Made with</span>
              <span role="img" aria-label="Heart" className="text-red-500">❤️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
