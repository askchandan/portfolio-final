
# Chandan Malakar - Portfolio Website

A modern and responsive personal portfolio website meticulously crafted with Next.js and styled with Tailwind CSS. This site serves as a professional showcase of my skills, projects, and insights, while also providing a platform for networking and professional opportunities.

## 🚀 Live Demo

Explore the live website: [chandanmalakar.live](https://chandanmalakar.live)

## ✨ Key Features

*   **Sleek UI/UX**: A contemporary and clean design featuring smooth transitions and engaging micro-interactions.
*   **Dynamic Theme**: Effortless switching between light and dark modes, with automatic detection of system preferences.
*   **Responsive Design**: Fully optimized for seamless viewing across all devices and screen sizes.
*   **Optimized Performance**: Built using Next.js to ensure lightning-fast loading times and excellent SEO.
*   **Interactive Portfolio**: A detailed showcase of projects, complete with in-depth case studies.
*   **Integrated Blog**: A built-in blog system for sharing thoughts, experiences, and expertise.
*   **Easy Contact**: A professional contact form with robust validation to facilitate communication.
*   **Accessibility**: Adherence to WCAG guidelines, ensuring an inclusive and accessible user experience.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) - A React framework for building performant web applications.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - For seamless theme switching.
*   **Typography**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) - A modern and readable font.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) - For creating smooth transitions and animations.
*   **Deployment**: [Vercel](https://vercel.com/) - For effortless deployment and hosting.

## 🗂️ Project Structure

```
portfolio-final/
├── components/         # Reusable UI components
│   ├── layout/         # Layout-related components
│   │   └── Layout.js   # Main layout component
│   ├── ui/             # Collection of UI components
│   ├── BlogList.js     # Component for listing blog posts
│   ├── BlogPost.js     # Component for individual blog posts
│   ├── Contact.js      # Contact form component
│   ├── Hero.js         # Hero section for the homepage
│   ├── Icons.js        # Library of SVG icons
│   └── Links.js        # Social links component
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # Hook for using local storage
├── lib/                # Utility functions and API helpers
│   └── api.js          # API utility functions
├── pages/              # Next.js pages (file-based routing)
│   ├── blog/           # Blog-related pages
│   │   ├── [slug].js   # Dynamic blog post page
│   │   └── index.js    # Blog listing page
│   ├── _app.js         # Custom App component
│   ├── _document.js    # Custom Document component
│   ├── about.js        # About page
│   ├── contact.js      # Contact page
│   ├── index.js        # Homepage
│   ├── links.js        # Links page
│   ├── projects.js     # Projects page
│   └── resume.js       # Resume page
├── public/             # Static assets
│   ├── *.png, *.ico    # Images and icons
│   ├── my-photo.jpg    # Profile image
│   └── robots.txt      # SEO configuration
│   └── site.webmanifest # PWA manifest file
├── styles/             # Global styles
│   └── globals.css     # Global CSS file
├── utils/              # Utility functions and constants
│   └── constants.js    # Application constants
│   └── helpers.js      # Helper functions
├── next.config.js      # Next.js configuration file
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration file
└── tailwind.config.js  # Tailwind CSS configuration file
```

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   **Node.js**: v18.x or higher
*   **npm** or **yarn**: Package manager
*   **Git**: For version control

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/askchandan/portfolio-final.git
    cd portfolio-final
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open your browser and navigate to `http://localhost:3000` to view the portfolio.

### Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the project for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Runs ESLint for code linting.

## ⚙️ Configuration

### Theme

Customize the theme by modifying the `tailwind.config.js` file. You can change colors, fonts, and other design elements to match your personal style.

### Content

Update the content of the website by modifying the files in the `pages` directory. You can also update the `utils/constants.js` file to change the global settings.

## 🚀 Deployment

### Vercel

The easiest way to deploy this project is using Vercel.

1.  Import the project into Vercel.
2.  Vercel will automatically detect that it is a Next.js project and configure the settings accordingly.
3.  Deploy the project.

### Other Options

You can also deploy this project to Netlify, AWS, or any other hosting provider that supports Next.js.

## ➕ Future Enhancements

*   Integration with a headless CMS for easy content management.
*   Implementation of advanced analytics to track user behavior.
*   Adding interactive features such as project filtering and search.
*   Integration with the GitHub API to automatically update project information.
*   Creation of a testimonials system to showcase client feedback.
*   Implementation of a newsletter signup form.
*   Support for multiple languages.
*   Turning the portfolio into a Progressive Web App (PWA).

## 🏛️ Architecture Principles

*   **Component-Based**: The project is built using reusable components.
*   **Performance-Focused**: The project is optimized for performance.
*   **Accessible**: The project is designed to be accessible to everyone.
*   **SEO-Friendly**: The project is optimized for search engines.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

*   The Next.js team for creating such anamazing framework.
   • Vercel for providing a seamless deployment experience.
   • The Tailwind CSS team for creating such a useful CSS framework.
   • The open-source community for all the amazing tools and resources.

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
