import { useRouter } from 'next/router'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ExternalLink } from './Icons'

export default function BlogPost({ slug }) {
  const router = useRouter()

  // Mock blog post data (in a real app, this would come from a CMS or API)
  const blogPosts = {
    'seaborn-stories': {
      title: "Seaborn Stories of Imagination and Visualization",
      content: `
        <p>Data visualization is more than just charts and graphs—it's about telling compelling stories with data. In this article, I explore the creative possibilities of the Seaborn library and how we can use it to craft visual narratives that engage and inform.</p>
        
        <h2>The Power of Visual Storytelling</h2>
        <p>Every dataset has a story to tell. The challenge lies in finding the right visual language to communicate that story effectively. Seaborn, built on top of Matplotlib, provides us with powerful tools to create not just accurate visualizations, but beautiful and meaningful ones.</p>
        
        <h2>Key Techniques Covered</h2>
        <ul>
          <li>Creating compelling statistical plots</li>
          <li>Using color palettes for emotional impact</li>
          <li>Combining multiple visualizations for narrative flow</li>
          <li>Customizing aesthetics for brand consistency</li>
        </ul>
        
        <p>Through practical examples and case studies, we'll see how thoughtful visualization design can transform raw data into compelling stories that drive decision-making and inspire action.</p>
      `,
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Data Visualization",
      externalUrl: "https://chandanmalakar.medium.com/seaborn-stories-of-imagination-and-visualization-1e4953174f24"
    },
    'limitless-farming': {
      title: "Limitless Farming: Technology Meets Agriculture",
      content: `
        <p>The future of agriculture lies at the intersection of technology and traditional farming practices. In this research article, I explore how data-driven solutions and modern technology can revolutionize farming for a sustainable future.</p>
        
        <h2>The Challenge</h2>
        <p>With a growing global population and climate change affecting traditional farming methods, we need innovative solutions that can increase productivity while maintaining environmental sustainability.</p>
        
        <h2>Technology Solutions</h2>
        <ul>
          <li>IoT sensors for real-time monitoring</li>
          <li>Machine learning for crop prediction</li>
          <li>Drone technology for precision agriculture</li>
          <li>Data analytics for resource optimization</li>
        </ul>
        
        <h2>Impact and Future</h2>
        <p>The integration of these technologies shows promising results in pilot projects around the world. From reducing water usage to increasing crop yields, the potential for positive impact is enormous.</p>
      `,
      date: "2024-11-20",
      readTime: "6 min read",
      category: "Technology",
      externalUrl: "https://delve-deeper.hashnode.dev/limitless-farming"
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>
      </div>      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="skill-tag primary">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg dark:prose-dark max-w-none">
        <div 
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>      {/* External Link */}
      {post.externalUrl && (
        <div className="mt-12 elegant-card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Read the Full Article
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a preview of the article. Click below to read the complete post on the original platform.
          </p>
          <Link 
            href={post.externalUrl}
            target="_blank"
            className="elegant-button inline-flex items-center space-x-2"
          >
            <ExternalLink size={20} />
            <span>Read Full Article</span>
          </Link>
        </div>
      )}

      {/* Author Info */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <img
            src="/images/avatar.png"
            alt="Chandan Malakar"
            className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-700"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chandan Malakar
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Data Science Aspirant & Machine Learning Engineer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Passionate about using data and AI to solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          More Articles
        </h3>        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/blog"
            className="elegant-card group"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              View All Blog Posts
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Explore more articles on data science, machine learning, and technology.
            </p>
          </Link>
          
          <Link 
            href="/projects"
            className="elegant-card group"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Check Out My Projects
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              See the practical applications of the concepts discussed in my articles.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
