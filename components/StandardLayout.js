import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunMedium, Moon, Menu, X } from './Icons'

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
    <div className="min-h-screen relative background-gradient">      <nav className="relative z-50 sticky top-0 bg-gradient-to-b from-white/85 to-white/70 backdrop-blur-xl dark:bg-gradient-to-b dark:from-black/85 dark:to-black/70 border-b border-gray-200/60 dark:border-gray-700/50 shadow-lg dark:shadow-black/40">
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
              {/* Theme Toggle */}              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mounted && (
                  theme === 'dark' ? 
                  <SunMedium size={20} /> :
                  <Moon size={20} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
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
          <div className="md:hidden p-4 bg-white/75 dark:bg-black/75 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
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
      </main>      <footer className="relative z-10 py-12 border-t border-gray-200/70 dark:border-gray-700/60 bg-gradient-to-t from-white/75 to-white/85 backdrop-blur-xl dark:bg-gradient-to-t dark:from-black/75 dark:to-black/85 shadow-xl dark:shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">{/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Chandan Malakar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "Every dataset tells a story, every algorithm solves a problem, and every line of code brings us closer to understanding the world through data."
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
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
            </div>

            {/* Theme & Status */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Preferences</h3>
              <div className="flex items-center justify-center md:justify-end mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-3">Theme</span>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    theme === 'dark' ? 
                    <SunMedium size={20} className="text-gray-600 dark:text-gray-400" /> :
                    <Moon size={20} className="text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                🟢 Available for opportunities
              </p>
            </div>
          </div>          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
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
