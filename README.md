# Chandan Malakar - Personal Website

![Website Screenshot](public/my-photo.jpg)

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS. This website showcases my skills, projects, blog posts, and provides contact information.

## 🚀 Live Demo

Visit the live site: [chandanmalakar.live](https://chandanmalakar.live)

## ✨ Features

- **Modern UI Design** - Clean, elegant design with smooth animations
- **Dark/Light Mode** - Automatically switches based on system preferences, with option to toggle
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Project Showcase** - Highlighting featured projects with descriptions and links
- **Blog Integration** - Displaying latest blog posts from Medium and Hashnode
- **Contact Form** - Easy way for visitors to get in touch
- **SEO Optimized** - Meta tags for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Theme Toggling**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Fonts**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)
- **Deployment**: Vercel

## 📂 Project Structure

```
prakashpun.me/
├── components/         # Reusable UI components
│   ├── BlogList.js     # Blog listing component
│   ├── BlogPost.js     # Individual blog post component
│   ├── Contact.js      # Contact form component
│   ├── HeroComplete.js # Hero section component for homepage
│   ├── Icons.js        # SVG icon components
│   ├── LinksSimple.js  # Social links component
│   └── StandardLayout.js # Main layout wrapper component
├── pages/              # Next.js pages
│   ├── _app.js         # Custom App component
│   ├── _document.js    # Custom Document component
│   ├── about.js        # About page
│   ├── blog/           # Blog pages
│   │   ├── [slug].js   # Dynamic blog post page
│   │   └── index.js    # Blog listing page
│   ├── contact.js      # Contact page
│   ├── index.js        # Homepage
│   ├── links.js        # Links page
│   ├── projects.js     # Projects portfolio page
│   └── resume.js       # Resume/CV page
├── public/             # Static files
│   └── my-photo.jpg    # Profile photo
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind directives
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration for Tailwind
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/askchandan/chandanmalakar.live.git
   cd chandanmalakar.live
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

- Update `next.config.js` for any Next.js specific configurations
- Modify `tailwind.config.js` to customize your design system

## 🚢 Deployment

The site is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your custom domain if needed

## 🧩 Future Enhancements

- [ ] Add blog CMS integration
- [ ] Implement animated page transitions
- [ ] Add project filtering functionality
- [ ] Include testimonials section
- [ ] Integrate with GitHub API to automatically display latest projects

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About Me

I'm Chandan Malakar, a passionate Data Science Aspirant and Machine Learning Engineer from Jamshedpur, Jharkhand. Currently based in Chennai, Tamil Nadu, I'm dedicated to solving real-world problems through data-driven insights and innovative AI solutions.

## 📬 Contact

Feel free to reach out to me through:
- LinkedIn: [chandanmalakar](https://www.linkedin.com/in/chandanmalakar/)
- GitHub: [askchandan](https://github.com/askchandan)
- Twitter: [chandan6209](https://x.com/chandan6209)
- Instagram: [chandanmalakar.ai](https://www.instagram.com/chandanmalakar.ai)
