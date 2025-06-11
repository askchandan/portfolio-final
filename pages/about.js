import Head from 'next/head'
import Layout from '../components/Layout'
import { 
  GraduationCap, 
  Building, 
  MapPin, 
  Code, 
  Database, 
  BarChart3, 
  Bot, 
  Settings, 
  Wrench, 
  Target, 
  Heart,
  Laptop,
  BrainCircuit,
  TrendingUp,
  Layers,
  Rocket,
  BookOpenCheck,
  Zap,
  Activity,
  Beaker,
  Clipboard
} from '../components/Icons'


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Chandan Malakar</title>
        <meta name="description" content="Learn more about Chandan Malakar, Data Science Aspirant and Machine Learning Engineer from Jamshedpur, Jharkhand." />
      </Head>
      <Layout>
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
              <div className="mb-4">
                <GraduationCap size={32} className="text-vibrant-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                BE in Computer Science and Engineering
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">2022 - Present</p>
            </div>

            <div className="contrast-card p-6 rounded-xl">
              <div className="mb-4">
                <Building size={32} className="text-vibrant-purple" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Current Role</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Data Analyst Intern at UNIDIF Consulting
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">2025 - Present</p>
            </div>

            <div className="contrast-card p-6 rounded-xl">
              <div className="mb-4">
                <MapPin size={32} className="text-vibrant-pink" />
              </div>
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
            </h2>              {/* Programming & ML Skills */}
            <div className="enhanced-skill-category">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4 category-icon">
                  <Laptop size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Programming & Machine Learning</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="contrast-skill-tag">
                  <Code size={16} />
                  <span className="ml-2">Python</span>
                </span>
                <span className="contrast-skill-tag">
                  <Bot size={16} />
                  <span className="ml-2">Machine Learning</span>
                </span>
                <span className="contrast-skill-tag">
                  <BrainCircuit size={16} />
                  <span className="ml-2">TensorFlow</span>
                </span>
                <span className="contrast-skill-tag">
                  <BarChart3 size={16} />
                  <span className="ml-2">Scikit-learn</span>
                </span>
                <span className="contrast-skill-tag">
                  <Layers size={16} />
                  <span className="ml-2">Pandas & NumPy</span>
                </span>
                <span className="contrast-skill-tag">
                  <TrendingUp size={16} />
                  <span className="ml-2">Data Science</span>
                </span>
                <span className="contrast-skill-tag">
                  <Rocket size={16} />
                  <span className="ml-2">Streamlit</span>
                </span>
                <span className="contrast-skill-tag">
                  <BookOpenCheck size={16} />
                  <span className="ml-2">Jupyter Notebooks</span>
                </span>
              </div>
            </div>            {/* Data & Analytics Skills */}
            <div className="enhanced-skill-category">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mr-4 category-icon">
                  <BarChart3 size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analytics & Tools</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="contrast-skill-tag">
                  <Database size={16} />
                  <span className="ml-2">SQL</span>
                </span>
                <span className="contrast-skill-tag">
                  <BarChart3 size={16} />
                  <span className="ml-2">Statistics</span>
                </span>
                <span className="contrast-skill-tag">
                  <TrendingUp size={16} />
                  <span className="ml-2">Data Visualization</span>
                </span>
                <span className="contrast-skill-tag">
                  <Rocket size={16} />
                  <span className="ml-2">Model Deployment</span>
                </span>                <span className="contrast-skill-tag">
                  <Zap size={16} />
                  <span className="ml-2">NLP</span>
                </span>
                <span className="contrast-skill-tag">
                  <Wrench size={16} />
                  <span className="ml-2">Data Preprocessing</span>
                </span>
                <span className="contrast-skill-tag">
                  <Settings size={16} />
                  <span className="ml-2">ML Pipelines</span>
                </span>
                <span className="contrast-skill-tag">
                  <Activity size={16} />
                  <span className="ml-2">Statistical Analysis</span>
                </span>
              </div>
            </div>
          </div>          {/* Personal Interests */}
          <div className="contrast-card gradient-bg-light p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Heart size={20} className="text-vibrant-pink mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What Drives Me</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Every dataset tells a story waiting to be discovered, and I believe that data science is the key to unlocking solutions that can transform industries and improve lives. What truly excites me is the endless possibility of turning raw numbers into meaningful insights that drive innovation. From optimizing manufacturing processes to predicting market trends, I'm driven by the vision that every algorithm we build today becomes the foundation for tomorrow's breakthroughs. The journey of a data science aspirant isn't just about mastering Python or SQL—it's about developing the curiosity to ask the right questions, the persistence to dig deeper into complex problems, and the creativity to find patterns where others see chaos. This field constantly challenges me to grow, learn, and push the boundaries of what's possible with data.
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
      </Layout>
    </>
  )
}
