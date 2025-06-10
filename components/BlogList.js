import Link from 'next/link'
import { Calendar, Clock, ExternalLink } from './Icons'

export default function BlogList() {
  const blogPosts = [
    {
      title: "Seaborn Stories of Imagination and Visualization",
      excerpt: "Exploring the power of data visualization through Seaborn library with creative storytelling approaches. Learn how to create compelling visual narratives with your data.",
      date: "2024-12-15",
      readTime: "8 min read",
      url: "https://chandanmalakar.medium.com/seaborn-stories-of-imagination-and-visualization-1e4953174f24",
      platform: "Medium",
      category: "Data Visualization",
      featured: true
    },
    {
      title: "Limitless Farming",
      excerpt: "Insights into modern agricultural technology and data-driven farming solutions. Exploring how technology and data science can revolutionize farming practices for a sustainable future.",
      date: "2024-11-20",
      readTime: "6 min read",
      url: "https://delve-deeper.hashnode.dev/limitless-farming",
      platform: "Hashnode",
      category: "Technology",
      featured: true
    },
    {
      title: "Machine Learning in Real-World Applications",
      excerpt: "A deep dive into how machine learning is being applied across various industries and the challenges faced in production environments.",
      date: "2024-10-25",
      readTime: "10 min read",
      url: "#",
      platform: "Coming Soon",
      category: "Machine Learning",
      featured: false
    },
    {
      title: "Getting Started with Data Science",
      excerpt: "A beginner's guide to data science covering essential tools, technologies, and methodologies for aspiring data scientists.",
      date: "2024-09-30",
      readTime: "12 min read",
      url: "#",
      platform: "Coming Soon",
      category: "Data Science",
      featured: false
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Posts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights on data science, machine learning, and technology.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Featured Articles
          </h2>          <div className="space-y-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {post.platform}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                    {post.url !== "#" && (
                    <Link 
                      href={post.url}
                      target="_blank"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Read Article</span>
                      <ExternalLink size={16} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            More Articles
          </h2>          <div className="grid md:grid-cols-2 gap-6">
            {otherPosts.map((post, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(post.date)} • {post.readTime}
                  </div>
                    {post.url !== "#" ? (
                    <Link 
                      href={post.url}
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                    >
                      Read →
                    </Link>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      Coming Soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}      {/* Newsletter Signup */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Follow me on social media to get notified when I publish new articles about data science, machine learning, and technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="https://chandanmalakar.medium.com/"
            target="_blank"
            className="elegant-button"
          >
            Follow on Medium
          </Link>
          <Link 
            href="https://delve-deeper.hashnode.dev/"
            target="_blank"
            className="elegant-button bg-white/10 hover:bg-white/20 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
          >
            Follow on Hashnode
          </Link>
        </div>
      </div>
    </div>
  )
}
