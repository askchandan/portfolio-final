import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative">
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/my-photo.jpg"
                alt="Chandan Malakar"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800 ring-offset-4 ring-offset-blue-50 dark:ring-offset-gray-900 relative z-10"
                loading="eager"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Chandan Malakar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Data Science Aspirant & Machine Learning Engineer
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center space-x-1">
              <span>📍</span>
              <span>Jamshedpur, Jharkhand → Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📅</span>
              <span>Currently at UNIDIF Consulting</span>
            </div>
          </div>
          
          {/* Current Status */}
          <div className="inline-block bg-blue-50 dark:bg-blue-900/20 px-6 py-3 mb-8 rounded-lg">
            <span className="text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              📊 Data Analyst Intern at UNIDIF Consulting (2025)
            </span>
          </div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Data Analytics</div>
          </div>
          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">ML & Data Science</div>
          </div>
          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Python, R, SQL</div>
          </div>
          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Certifications</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">AWS, Google Cloud</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <span>Get in Touch</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
