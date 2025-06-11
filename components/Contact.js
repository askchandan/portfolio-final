import { useState, useCallback } from 'react'
import Link from 'next/link'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  ExternalLink 
} from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  // Optimized form handlers with useCallback
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('https://formspree.io/f/xblyorjv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/askchandan',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-gray-300',
      description: 'Check out my code repositories and contributions'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chandanmalakar/',
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      description: 'Connect with me professionally'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/chandan6209',
      icon: Twitter,
      color: 'hover:text-blue-400 dark:hover:text-blue-300',
      description: 'Follow my thoughts and updates'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/chandanmalakar.ai',
      icon: Instagram,
      color: 'hover:text-pink-600 dark:hover:text-pink-400',
      description: 'See my visual journey in AI/ML'
    },
    {
      name: 'Medium',
      href: 'https://chandanmalakar.medium.com/',
      icon: ExternalLink,
      color: 'hover:text-green-600 dark:hover:text-green-400',
      description: 'Read my technical articles and insights'
    },    {
      name: 'Hashnode',
      href: 'https://delve-deeper.hashnode.dev/',
      icon: ExternalLink,
      color: 'hover:text-blue-500 dark:hover:text-blue-300',
      description: 'Explore my development blog'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Let's connect and discuss opportunities in data science, machine learning, 
          or any exciting projects you have in mind.
        </p>
      </div>      <div className="max-w-5xl mx-auto">
        {/* Single Combined Card for Contact Info and Form */}
        <div className="elegant-section p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">            {/* Contact Information Section */}
            <div className="pl-4 lg:pl-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      From Jamshedpur, Jharkhand<br />
                      Currently in Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:chandanmalakar6209@gmail.com"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                    >
                      chandanmalakar6209@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Mobile</h3>
                    <a 
                      href="tel:+916209141001"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      +91 6209141001
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect on Social Media
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        className={`elegant-social-link ${social.color} p-3`}
                      >
                        <Icon size={18} />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-sm">{social.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 break-words">
                            {social.description}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="elegant-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="elegant-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="elegant-input"
                    placeholder="What's this about?"
                  />
                </div>                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="elegant-input resize-none"
                    placeholder="Share your thoughts, project ideas, or collaboration opportunities..."
                  />
                </div>                <div className="pt-2">
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">                      <p className="text-green-700 dark:text-green-300 text-sm text-center">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-700 dark:text-red-300 text-sm text-center">
                        ❌ Failed to send message. Please try again or contact me directly.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex justify-center w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="elegant-button px-6 py-2 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
                    Your message will be sent directly to my email.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>      {/* Call to Action */}
      <div className="mt-16 flex justify-center">
        <div className="elegant-card max-w-md w-full mx-4 p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg">
          <div className="text-center">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Collaborate?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Let's discuss your next project or explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <Link 
                href="/resume"
                className="elegant-button px-4 py-2 text-sm font-medium"
              >
                View Resume
              </Link>
              <Link 
                href="/projects"
                className="elegant-button bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium"
              >
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
