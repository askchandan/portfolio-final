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
  ];
    return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-indigo-50/90 to-purple-50/90 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Enhanced aesthetic background gradient system for dark theme */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-blue-900/30 pointer-events-none"></div>
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-teal-300/15 via-cyan-400/10 to-transparent dark:from-cyan-800/20 dark:via-blue-900/10 dark:to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-violet-400/10 via-purple-400/5 to-transparent dark:from-purple-900/30 dark:via-indigo-900/20 dark:to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-blue-200/10 to-transparent dark:from-transparent dark:via-violet-900/15 dark:to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.2),_transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(124,58,237,0.2),_transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05),_transparent_60%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,rgba(139,92,246,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.07)_1px,transparent_1px)] dark:bg-[size:60px_60px] pointer-events-none"></div>
      <div className="fixed inset-0 dark:bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.1),_transparent_50%)] pointer-events-none"></div>
      
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
