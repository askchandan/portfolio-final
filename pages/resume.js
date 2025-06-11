import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { Download, ExternalLink } from '../components/Icons'

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume - Chandan Malakar</title>
        <meta name="description" content="View Chandan Malakar's professional experience and skills in Data Science and Machine Learning." />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Chandan Malakar
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Data Science Aspirant & Machine Learning Engineer
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="text-gray-500">Jamshedpur, Jharkhand</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Currently in Chennai, Tamil Nadu</span>
            </div>            <div className="mt-6">
              <a 
                href="https://github.com/askchandan/attachments/raw/main/Chandan_Malakar_Resume.pdf"
                download="Chandan_Malakar_Resume.pdf"
                className="social-button inline-flex items-center px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Connect With Me */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h2>            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://www.linkedin.com/in/chandanmalakar/" target="_blank" rel="noopener noreferrer"
                 className="social-button p-4 rounded-lg transition-all duration-200 hover:scale-105 text-center">
                <div className="font-medium">LinkedIn</div>
              </a>
              <a href="https://x.com/chandan6209" target="_blank" rel="noopener noreferrer"
                 className="social-button p-4 rounded-lg transition-all duration-200 hover:scale-105 text-center">
                <div className="font-medium">Twitter</div>
              </a>
              <a href="https://www.instagram.com/chandanmalakar.ai" target="_blank" rel="noopener noreferrer"
                 className="social-button p-4 rounded-lg transition-all duration-200 hover:scale-105 text-center">
                <div className="font-medium">Instagram</div>
              </a>
              <a href="https://github.com/askchandan" target="_blank" rel="noopener noreferrer"
                 className="social-button p-4 rounded-lg transition-all duration-200 hover:scale-105 text-center">
                <div className="font-medium">GitHub</div>
              </a>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
            <div className="border-l-2 border-gray-200 pl-6">              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full -ml-8 mr-3"></div>
                  <h3 className="text-lg font-semibold">Data Analyst Intern</h3>
                </div>
                <p className="text-blue-600 font-medium">UNIDIF Consulting • 2025 - Present</p>
                <div className="text-gray-600 dark:text-gray-400 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Analyzed manufacturing production data using Python, NumPy, and Pandas to identify process inefficiencies and optimize production workflows</li>
                    <li>Performed correlation analysis and statistical modeling to determine relationships between manufacturing variables and quality metrics</li>
                    <li>Created comprehensive data visualizations with Seaborn and Matplotlib to present manufacturing trends and performance insights to management</li>
                    <li>Developed SQL queries to extract and analyze production data from manufacturing databases, identifying bottlenecks and improvement opportunities</li>
                    <li>Built automated reporting systems using Google Sheets and Excel to track KPIs, production metrics, and quality control measures</li>
                    <li>Conducted root cause analysis on manufacturing defects and downtime events, providing data-driven recommendations for process improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>            <div className="space-y-6">
              <div className="contrast-card rounded-lg p-6 transition-all duration-200">
                <h3 className="text-lg font-semibold mb-2">Bachelor of Engineering (BE)</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Aarupadai Veedu Institute of Technology</p>
                <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu • 2022 - Present</p>
              </div>
              <div className="contrast-card rounded-lg p-6 transition-all duration-200">
                <h3 className="text-lg font-semibold mb-2">Secondary Education</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">JKS Inter College of Commerce</p>
                <p className="text-gray-600 dark:text-gray-400">Jamshedpur, Jharkhand</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>            <div className="grid md:grid-cols-2 gap-6">
              <div className="enhanced-project-card rounded-lg p-6 transition-all duration-200">
                <h3 className="text-lg font-semibold mb-2">Laptop Price Prediction</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive machine learning model that predicts laptop prices based on various features like brand, specifications, and performance metrics. Built using Python, scikit-learn, and deployed with Streamlit.
                </p>                <div className="flex space-x-4">
                  <a 
                    href="https://chandan-laptop-price-prediction.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="enhanced-project-card rounded-lg p-6 transition-all duration-200">
                <h3 className="text-lg font-semibold mb-2">Twitter Sentiment Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A natural language processing application that analyzes sentiment in real-time Twitter data. Uses NLTK and TextBlob for text preprocessing and sentiment classification, with an interactive dashboard.
                </p>                <div className="flex space-x-4">
                  <a 
                    href="https://chandan-twitter-sentiment-analysis.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">              <div>
                <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Java', 'C++'].map(skill => (
                    <span key={skill} className="contrast-skill-tag px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Data Science & ML</h3>                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Deep Learning', 'NLP', 'Statistics'].map(skill => (
                    <span key={skill} className="contrast-skill-tag px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Tools & Libraries</h3>                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Streamlit'].map(skill => (
                    <span key={skill} className="contrast-skill-tag px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Blog Posts</h2>            <div className="space-y-4">
              <div className="contrast-card rounded-lg p-4 transition-all duration-200">
                <h3 className="font-semibold mb-2">Seaborn Stories of Imagination and Visualization</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Exploring creative data visualization techniques using Seaborn library with storytelling approaches.
                </p>
                <a 
                  href="https://chandanmalakar.medium.com/seaborn-stories-of-imagination-and-visualization-1e4953174f24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors"
                >
                  Read on Medium →
                </a>
              </div>

              <div className="contrast-card rounded-lg p-4 transition-all duration-200">
                <h3 className="font-semibold mb-2">Limitless Farming</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Research on modern agricultural technology and data-driven farming solutions for sustainable agriculture.
                </p>
                <a 
                  href="https://delve-deeper.hashnode.dev/limitless-farming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors"
                >
                  Read on Hashnode →
                </a>
              </div>            </div></div>
        </div>
      </Layout>
    </>
  )
}
