# Chandan Malakar - Portfolio Website

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS. This professional website showcases skills, projects, blog posts, and provides an elegant platform for professional networking and opportunity discovery.

## 🚀 Live Demo

Visit the live site: [chandanmalakar.live](https://chandanmalakar.live)

## ✨ Features

- **Professional UI/UX** - Clean, modern design with smooth page transitions and micro-interactions
- **Theme Switching** - Dynamic dark/light mode with system preference detection
- **Mobile-First Design** - Fully responsive across all devices and screen sizes
- **Performance Optimized** - Built with Next.js for optimal loading speeds and SEO
- **Interactive Portfolio** - Comprehensive project showcase with detailed case studies
- **Content Management** - Integrated blog system for sharing insights and expertise
- **Contact Integration** - Professional contact form with form validation
- **Accessibility Focused** - WCAG compliant design for inclusive user experience

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js 13+](https://nextjs.org/) - React-based framework with SSR/SSG capabilities
- **Styling Framework**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - Advanced theme switching
- **Typography**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) - Modern, readable font system
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth page transitions and interactions
- **Image Optimization**: Next.js Image component with automatic optimization
- **Performance**: Built-in optimization with code splitting and lazy loading
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js applications

## 📂 Project Architecture

```
chandanmalakar.live/
├── components/              # Reusable UI components
│   ├── layout/             # Layout components
│   │   └── Layout.js       # Main layout wrapper with navigation
│   ├── ui/                 # UI component exports
│   ├── BlogList.js         # Blog listing component
│   ├── BlogPost.js         # Individual blog post component
│   ├── Contact.js          # Contact form component
│   ├── Hero.js             # Hero section component for homepage
│   ├── Icons.js            # SVG icon components library
│   └── Links.js            # Social links component
├── hooks/                  # Custom React hooks
│   └── useLocalStorage.js  # localStorage and utility hooks
├── lib/                    # Library functions
│   └── api.js              # API utility functions
├── pages/                  # Next.js pages (file-based routing)
│   ├── blog/               # Blog-related pages
│   │   ├── [slug].js       # Dynamic blog post page
│   │   └── index.js        # Blog listing page
│   ├── _app.js             # Custom App component with global providers
│   ├── _document.js        # Custom Document component
│   ├── about.js            # About page
│   ├── contact.js          # Contact page
│   ├── index.js            # Homepage
│   ├── links.js            # Links page
│   ├── projects.js         # Projects portfolio page
│   └── resume.js           # Resume/CV page
├── public/                 # Static assets
│   ├── *.png, *.ico        # Favicon and app icons
│   ├── my-photo.jpg        # Profile images
│   ├── robots.txt          # SEO configuration
│   └── site.webmanifest    # PWA manifest
├── styles/                 # Styling files
│   └── globals.css         # Global styles with Tailwind directives
├── utils/                  # Utility functions
│   ├── constants.js        # Application constants
│   └── helpers.js          # Helper functions
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🚀 Development Setup

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or **yarn** 1.22.x or later
- **Git** for version control

### Quick Start

1. **Clone the repository**:
   ```powershell
   git clone https://github.com/askchandan/chandanmalakar.live.git
   cd chandanmalakar.live
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   # or
   yarn install
   ```

3. **Start development server**:
   ```powershell
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**: Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```powershell
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```

## ⚙️ Configuration & Customization

### Theme Configuration
- Modify `tailwind.config.js` to customize the design system, colors, and spacing
- Update `styles/globals.css` for custom CSS properties and global styles

### Content Management
- Update personal information in `utils/constants.js`
- Modify page content directly in respective page files
- Add new projects by updating the projects data structure

### Performance Optimization
- Images are automatically optimized using Next.js Image component
- Built-in code splitting and lazy loading for optimal performance
- Configured for Core Web Vitals optimization

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Import your GitHub repository to [Vercel](https://vercel.com/)
2. **Configure Settings**: Vercel auto-detects Next.js configuration
3. **Deploy**: Automatic deployments on every push to main branch
4. **Custom Domain**: Configure your custom domain in Vercel dashboard

### Alternative Deployment Options
- **Netlify**: Compatible with static export configuration
- **Docker**: Containerized deployment for custom hosting
- **AWS/GCP**: Deploy using their respective Next.js compatible services

## 🔮 Future Enhancements

- [ ] **CMS Integration** - Headless CMS for dynamic content management
- [ ] **Advanced Analytics** - User behavior tracking and performance metrics
- [ ] **Interactive Features** - Project filtering, search functionality, and tags
- [ ] **API Integration** - GitHub API for automatic project updates
- [ ] **Testimonials System** - Client and colleague recommendation showcase
- [ ] **Newsletter Integration** - Email subscription for blog updates
- [ ] **Multi-language Support** - Internationalization for global reach
- [ ] **Progressive Web App** - Enhanced mobile experience with offline support

## 🏗️ Architecture Principles

- **Component-Driven Development** - Modular, reusable components
- **Performance First** - Optimized for Core Web Vitals and user experience
- **Accessibility Standards** - WCAG 2.1 compliant design
- **SEO Optimized** - Structured data, meta tags, and semantic HTML
- **Mobile-First Responsive** - Progressive enhancement approach
- **Modern Development** - Latest web standards and best practices

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/askchandan/chandanmalakar.live/issues).

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🌟 Acknowledgments

- **Next.js Team** - For the incredible React framework
- **Vercel** - For seamless deployment and hosting solutions
- **Tailwind CSS** - For the utility-first CSS framework
- **Open Source Community** - For the amazing tools and libraries

---

## 👨‍💻 About the Developer

**Chandan Malakar** - Data Science Aspirant & Machine Learning Engineer

🎯 **Mission**: Transforming complex data into actionable insights and building intelligent solutions that make a real-world impact.

📍 **Location**: Chennai, Tamil Nadu (Originally from Jamshedpur, Jharkhand)

🔬 **Focus Areas**: Machine Learning, Data Analytics, Artificial Intelligence, and Statistical Modeling

## 📞 Professional Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chandanmalakar/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/askchandan)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/chandan6209)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/chandanmalakar.ai)

**Email**: Available through the contact form on the website

---

<div align="center">
  <strong>⭐ Star this repository if you find it helpful!</strong>
  <br>
  <sub>Built with ❤️ by Chandan Malakar</sub>
</div>
