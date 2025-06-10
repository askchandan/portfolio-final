import Head from 'next/head'
import StandardLayout from '../components/StandardLayout'


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Chandan Malakar</title>
        <meta name="description" content="Learn more about Chandan Malakar, Data Science Aspirant and Machine Learning Engineer from Jamshedpur, Jharkhand." />
      </Head>
      <StandardLayout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm Chandan Malakar, a passionate Data Science Aspirant and Machine Learning Engineer from Jamshedpur, Jharkhand. Currently based in Chennai, Tamil Nadu, I'm dedicated to solving real-world problems through data-driven insights and innovative AI solutions.
            </p>
          </div>          {/* Background Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="contrast-card p-6 rounded-xl">
              <div className="text-3xl text-vibrant-blue mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                BE in Computer Science and Engineering
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">2022 - Present</p>
            </div>

            <div className="contrast-card p-6 rounded-xl">
              <div className="text-3xl text-vibrant-purple mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Current Role</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Data Analyst Intern at UNIDIF Consulting
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">2025 - Present</p>
            </div>

            <div className="contrast-card p-6 rounded-xl">
              <div className="text-3xl text-vibrant-pink mb-4">📍</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                From Jamshedpur, Jharkhand
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Currently in Chennai, Tamil Nadu</p>
            </div>
          </div>{/* Skills & Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Skills & Technologies
            </h2>
              {/* Programming & ML Skills */}
            <div className="enhanced-skill-category">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4 category-icon">
                  <div className="text-xl text-white">💻</div>
                </div>
                <h3 className="text-xl font-bold">Programming & Machine Learning</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="contrast-skill-tag">
                  <span>🐍</span>
                  <span className="ml-2">Python</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🤖</span>
                  <span className="ml-2">Machine Learning</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🧠</span>
                  <span className="ml-2">TensorFlow</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>📊</span>
                  <span className="ml-2">Scikit-learn</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🐼</span>
                  <span className="ml-2">Pandas & NumPy</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>📈</span>
                  <span className="ml-2">Data Science</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🚀</span>
                  <span className="ml-2">Streamlit</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>📓</span>
                  <span className="ml-2">Jupyter Notebooks</span>
                </span>
              </div>
            </div>            {/* Data & Analytics Skills */}
            <div className="enhanced-skill-category">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mr-4 category-icon">
                  <div className="text-xl text-white">📊</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analytics & Tools</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="contrast-skill-tag">
                  <span>🗄️</span>
                  <span className="ml-2">SQL</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>📊</span>
                  <span className="ml-2">Statistics</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>📈</span>
                  <span className="ml-2">Data Visualization</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🚀</span>
                  <span className="ml-2">Model Deployment</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🔤</span>
                  <span className="ml-2">NLP</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>🔧</span>
                  <span className="ml-2">Data Preprocessing</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>⚙️</span>
                  <span className="ml-2">ML Pipelines</span>
                </span>
                <span className="contrast-skill-tag">
                  <span>📐</span>
                  <span className="ml-2">Statistical Analysis</span>
                </span>
              </div>
            </div>
          </div>          {/* Personal Interests */}
          <div className="contrast-card gradient-bg-light p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <span className="text-vibrant-pink mr-2">❤️</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What Drives Me</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm passionate about using data to solve real-world problems and make a positive impact. Whether it's predicting laptop prices to help consumers make informed decisions or analyzing sentiment to understand public opinion, I love working on projects that have practical applications. I believe in the power of continuous learning and am always excited to explore new technologies and methodologies in the ever-evolving field of AI and data science.
            </p>
          </div>

          {/* Goals & Vision */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My goal is to become a skilled data scientist who can bridge the gap between complex data and actionable insights. I'm committed to continuous learning, contributing to open-source projects, and eventually working on AI solutions that can make a meaningful difference in people's lives.
            </p>
          </div>        </div>
      </StandardLayout>
    </>
  )
}
