import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroComplete() {
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
          </p>          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center space-x-1">
              <span role="img" aria-label="Location" className="inline-block w-4 h-4">📍</span>
              <span>Jamshedpur, Jharkhand → Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center space-x-1">
              <span role="img" aria-label="Calendar" className="inline-block w-4 h-4">📅</span>
              <span>Currently at UNIDIF Consulting</span>
            </div>
          </div>
          
          {/* Current Status */}
          <div className="inline-block elegant-card px-6 py-3 mb-8">
            <span className="text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              📊 Data Analyst Intern at UNIDIF Consulting (2025)
            </span>
          </div>
        </div>
          {/* Enhanced Stats with elegant styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center elegant-card p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Data Analytics</div>
          </div>
          <div className="text-center elegant-card p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">ML & Data Science</div>
          </div>
          <div className="text-center elegant-card p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Blog Posts</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Technical Writing</div>
          </div>
          <div className="text-center elegant-card p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Learning</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Continuous Growth</div>
          </div>
        </div>
        
        {/* Skills Highlight */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">🐍 Python</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">🤖 Machine Learning</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">📊 Data Analytics</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">📈 Tableau</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">🗄️ SQL</span>
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">📊 Power BI</span>
          </div>
        </div>
          {/* Featured Projects Preview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="https://chandan-laptop-price-prediction.streamlit.app/"
              target="_blank"
              className="group block elegant-card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                Laptop Price Prediction
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                ML model to predict laptop prices using various features. Built with Python, Streamlit, and scikit-learn for consumer decision support.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag primary">Python</span>
                <span className="skill-tag secondary">Streamlit</span>
                <span className="skill-tag accent">ML</span>
              </div>
            </Link>
            <Link 
              href="https://chandan-twitter-sentiment-analysis.streamlit.app/"
              target="_blank"
              className="group block elegant-card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                Twitter Sentiment Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                NLP application for real-time sentiment analysis with interactive visualization dashboard and comprehensive text processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag primary">Python</span>
                <span className="skill-tag secondary">NLP</span>
                <span className="skill-tag accent">NLTK</span>
              </div>
            </Link>
          </div>
        </div>
          {/* Blog Posts Preview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="https://chandanmalakar.medium.com/seaborn-stories-of-imagination-and-visualization-1e4953174f24"
              target="_blank"
              className="group block elegant-card p-6"
            >
              <div className="flex items-center mb-3">
                <span role="img" aria-label="Book" className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2">📚</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Medium</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                Seaborn Stories of Imagination and Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Exploring creative data visualization techniques using Seaborn library with storytelling approaches.
              </p>
            </Link>
            <Link 
              href="https://delve-deeper.hashnode.dev/limitless-farming"
              target="_blank"
              className="group block elegant-card p-6"
            >
              <div className="flex items-center mb-3">
                <span role="img" aria-label="Book" className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2">📚</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Hashnode</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                Limitless Farming
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Research on modern agricultural technology and data-driven farming solutions for sustainable agriculture.
              </p>
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-4">
            <Link 
              href="https://github.com/askchandan" 
              target="_blank"
              className="elegant-social-link"
            >
              <span role="img" aria-label="GitHub" className="text-xl">💻</span>
              <span>GitHub</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/chandanmalakar/" 
              target="_blank"
              className="elegant-social-link"
            >
              <span role="img" aria-label="LinkedIn" className="text-xl">👨‍💼</span>
              <span>LinkedIn</span>
            </Link>
            <Link 
              href="https://x.com/chandan6209" 
              target="_blank"
              className="elegant-social-link"
            >
              <span role="img" aria-label="Twitter" className="text-xl">🐦</span>
              <span>Twitter</span>
            </Link>
            <Link 
              href="https://www.instagram.com/chandanmalakar.ai" 
              target="_blank"
              className="elegant-social-link"
            >
              <span role="img" aria-label="Instagram" className="text-xl">📸</span>
              <span>Instagram</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="space-x-4">
            <Link 
              href="/resume"
              className="elegant-button"
            >
              View Resume
            </Link>
            <Link 
              href="/contact"
              className="elegant-button secondary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
