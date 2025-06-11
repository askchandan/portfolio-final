// filepath: c:\Users\Chandan Malakar\Downloads\chandanmalakar.live\chandanmalakar.live\prakashpun.me\components\LinksSimple.js
import Link from 'next/link'

export default function Links() {
  const links = [
    {
      title: "Professional Profile",
      description: "Connect with me professionally",
      url: "https://www.linkedin.com/in/chandanmalakar/",
      emoji: "👔",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "GitHub Repository",
      description: "Explore my code and projects",
      url: "https://github.com/askchandan",
      emoji: "💻",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      title: "Follow on Twitter",
      description: "Get updates and thoughts",
      url: "https://x.com/chandan6209",
      emoji: "🐦",
      color: "bg-blue-400 hover:bg-blue-500"
    },
    {
      title: "Instagram",
      description: "Visual journey in AI/ML",
      url: "https://www.instagram.com/chandanmalakar.ai",
      emoji: "📸",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      title: "Medium Blog",
      description: "Technical articles and insights",
      url: "https://chandanmalakar.medium.com/",
      emoji: "📚",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Hashnode Blog",
      description: "Development blog and tutorials",
      url: "https://delve-deeper.hashnode.dev/",
      emoji: "📝",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Laptop Price Prediction",
      description: "ML model for price prediction",
      url: "https://chandan-laptop-price-prediction.streamlit.app/",
      emoji: "💻",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "NLP application for sentiment analysis",
      url: "https://chandan-twitter-sentiment-analysis.streamlit.app/",
      emoji: "🔍",
      color: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      title: "Email Me",
      description: "Let's discuss opportunities",
      url: "mailto:chandanmalakar6209@gmail.com",
      emoji: "📧",
      color: "bg-red-600 hover:bg-red-700"
    }
  ]

  const quickInfo = [
    {
      label: "Current Role",
      value: "Data Analyst Intern at UNIDIF Consulting",
      emoji: "💼"
    },
    {
      label: "Education",
      value: "BE - Aarupadai Veedu Institute of Technology, Chennai",
      emoji: "🎓"
    },
    {
      label: "Location",
      value: "From Jamshedpur, Jharkhand → Chennai, Tamil Nadu",
      emoji: "📍"
    }
  ]

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">        <div className="mb-6">
          <img
            src="/my-photo2.jpg?v=1&t=20250611155000"
            alt="Chandan Malakar"
            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Chandan Malakar
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Data Science Aspirant & Machine Learning Engineer
        </p>
        
        {/* Quick Info Cards */}
        <div className="grid gap-4 mb-8">
          {quickInfo.map((info, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-xl">{info.emoji}</span>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                  <div className="font-medium text-gray-900 dark:text-white">{info.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Links Grid */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            className={`${link.color} text-white rounded-lg p-4 flex items-center justify-center space-x-3 transition-all duration-200 hover:scale-105 hover:shadow-lg`}
          >
            <span className="text-xl">{link.emoji}</span>
            <div className="text-center">
              <div className="font-semibold">{link.title}</div>
              <div className="text-sm opacity-90">{link.description}</div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Chandan Malakar. Building the future with data and AI.
        </p>
        <div className="mt-2">
          <Link 
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-sm"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
