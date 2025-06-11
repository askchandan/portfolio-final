import Head from 'next/head'
import StandardLayout from '../components/StandardLayout'
import Link from 'next/link'
import { ExternalLink, Github } from '../components/Icons'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Laptop Price Prediction",
      description: "A comprehensive machine learning model that predicts laptop prices based on various features like brand, specifications, and performance metrics. Built using Python, scikit-learn, and deployed with Streamlit for an interactive user experience.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Machine Learning"],
      liveUrl: "https://chandan-laptop-price-prediction.streamlit.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "A natural language processing application that analyzes sentiment in real-time Twitter data. Uses NLTK and TextBlob for text preprocessing and sentiment classification, with an interactive dashboard for visualization.",
      technologies: ["Python", "NLTK", "TextBlob", "Streamlit", "NLP"],
      liveUrl: "https://chandan-twitter-sentiment-analysis.streamlit.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Data Visualization with Seaborn",
      description: "Exploring creative data visualization techniques using Seaborn library. This project demonstrates various statistical plots and storytelling approaches through data visualization.",
      technologies: ["Python", "Seaborn", "Matplotlib", "Pandas", "Data Visualization"],
      liveUrl: "https://chandanmalakar.medium.com/seaborn-stories-of-imagination-and-visualization-1e4953174f24",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Agricultural Technology Analysis",
      description: "Research and analysis on modern agricultural technology and data-driven farming solutions. Explores how technology can revolutionize farming practices.",
      technologies: ["Research", "Data Analysis", "Agricultural Tech", "Sustainability"],
      liveUrl: "https://delve-deeper.hashnode.dev/limitless-farming",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <>
      <Head>
        <title>Projects - Chandan Malakar</title>
        <meta name="description" content="Explore Chandan Malakar's data science and machine learning projects including laptop price prediction and sentiment analysis." />      </Head>
      <StandardLayout>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the data science and machine learning projects I've worked on, showcasing my skills in predictive modeling, data analysis, and real-world problem solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Featured Projects
            </h2>            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="enhanced-project-card rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="contrast-skill-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>                    {/* Links */}
                    <div className="flex space-x-4">                      <Link 
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </Link>
                      {project.githubUrl !== "#" && (
                        <Link 
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >                          <Github size={16} />
                          <span>Code</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Research & Articles
              </h2>              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <div key={index} className="enhanced-project-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="contrast-skill-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>                    <Link 
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Read Article</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technology Stack
            </h2>            
            <div className="contrast-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Python', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
                  { name: 'Machine Learning', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
                  { name: 'Data Science', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
                  { name: 'Pandas', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
                  { name: 'NumPy', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },
                  { name: 'Scikit-learn', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' },
                  { name: 'TensorFlow', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
                  { name: 'Streamlit', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
                  { name: 'Jupyter', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
                  { name: 'SQL', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300' },
                  { name: 'Statistics', color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' },
                  { name: 'NLP', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
                  { name: 'Data Visualization', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
                  { name: 'Model Deployment', color: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' },
                  { name: 'Git', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
                  { name: 'GitHub', color: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300' }
                ].map((tech) => (
                  <span 
                    key={tech.name} 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>{/* Call to Action */}
          <div className="text-center tech-stack-container">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check out my GitHub profile for more projects and contributions to the open-source community.            </p>            <Link 
              href="https://github.com/askchandan"
              target="_blank"
              className="social-button inline-flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Github size={20} />
              <span>Visit GitHub Profile</span>
            </Link>
          </div>
        </div>
      </StandardLayout>
    </>
  )
}
