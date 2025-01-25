import LazyLoad from '@/components/common/LazyLoad'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import { MouseEvent, useState, useMemo } from 'react'
import SEO from '@/components/layout/SEO'
import FilterBar from '@/components/projects/FilterBar'

interface Project {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
  tags: string[]
  highlights: string[]
}

const projects: { featured: Project[] } = {
  featured: [
    {
      title: 'Green Zone Recycling App',
      description: 'A comprehensive recycling center locator with eco-chat functionality and secure authentication.',
      image: '/projects/green-zone.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/link',
      tags: ['NuxtJS', 'Spring Boot', 'PostgreSQL', 'Docker', 'Leaflet API', 'Java', 'Spring Security', 'Render', 'Netlify', 'REST API', 'Git', 'GitHub'],
      highlights: [
        'Implemented authorization and authentication system using spring security',
        'Created interactive map with recycling centers marked with markers',
        'Built eco-chat system for user inquiries',
        'Used agile methodology and Git best practices',
        'Regular code reviews for pull requests'
      ]
    },
    {
      title: 'Note Taking App',
      description: 'Privacy-focused note management application with export capabilities.',
      image: '/projects/notes.jpg',
      demoLink: 'https://your-app-link',
      githubLink: 'https://github.com/link',
      tags: ['HTML', 'CSS', 'React JS', 'Material UI', 'Tailwind CSS', 'JavaScript', 'Git'],
      highlights: [
        'Implemented tick and delete note functionality',
        'CSV export feature for local storage',
        'Privacy-focused design without permanent storage',
        'Clean and intuitive user interface'
      ]
    },
    {
      title: 'Library App',
      description: 'Full-featured library management system with real-time inventory tracking.',
      image: '/projects/library.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/link',
      tags: ['HTML', 'CSS', 'Hibernate', 'React JS', 'Spring Boot', 'Java', 'Bootstrap', 'APIs'],
      highlights: [
        'Complete book management system (add/edit/remove)',
        'Real-time copy availability tracking',
        'Axios integration for frontend-backend communication',
        'Comprehensive inventory management'
      ]
    },
    {
      title: 'Personal Blog',
      description: 'Feature-rich blogging platform with comprehensive admin dashboard.',
      image: '/projects/blog.jpg',
      demoLink: 'https://your-blog-link',
      githubLink: 'https://github.com/link',
      tags: ['HTML', 'CSS', 'NodeJS', 'Express JS', 'PostgreSQL', 'PassportJS', 'CKEditor'],
      highlights: [
        'Full blog post management system',
        'Like/dislike functionality with sorting',
        'Admin dashboard with comprehensive management',
        'Database integration for posts and user management'
      ]
    },
    {
      title: 'NextBook (Mega Hackathon 2023)',
      description: 'Collaborative project developed during Mega Hackathon 2023.',
      image: '/projects/nextbook.jpg',
      demoLink: 'https://your-video-link',
      githubLink: 'https://github.com/link',
      tags: ['Vite', 'HTML', 'CSS', 'React JS', 'Styled Components', 'Spring Boot', 'PostgreSQL'],
      highlights: [
        'Successfully integrated React.js with Spring Boot',
        'Enhanced application performance by 10%',
        'Managed cross-timezone team collaboration',
        'Implemented proactive module updates'
      ]
    },
    {
      title: 'Green Zone (Learn It Global Hackathon)',
      description: 'Award-winning recycling application developed during Learn It Global Hackathon.',
      image: '/projects/green-zone-hackathon.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/link',
      tags: ['NuxtJS', 'Spring Boot', 'Leaflet API', 'JavaScript', 'Tailwind CSS', 'Java', 'Spring Security', 'Docker', 'PostgreSQL'],
      highlights: [
        'Led team of three developers',
        'Implemented authentication & authorization',
        'Managed project using Jira',
        'Handled full-stack development responsibilities'
      ]
    },
    {
      title: 'CodeQuest - GitHub Contribution App',
      description: 'A modern web application that helps developers discover, track, and contribute to GitHub projects, featuring OAuth authentication and real-time analytics.',
      image: '/projects/codequest.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/anevski-stefan/codequest',
      tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Redux', 'GitHub OAuth', 'Chart.js'],
      highlights: [
        'Implemented secure GitHub OAuth2 authentication flow',
        'Built real-time contributor analytics with Chart.js visualization',
        'Optimized performance with memory caching and ETag support',
        'Integrated rate limiting and security best practices',
        'Designed responsive UI with dark mode support using Tailwind CSS'
      ]
    },
    {
      title: 'YouTube Video Transcriber',
      description: 'A web application that transcribes YouTube videos using YouTube\'s captions or Whisper AI for speech-to-text conversion, featuring automatic fallback and intelligent file management.',
      image: '/projects/youtube-transcriber.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/anevski-stefan/youtube-transcriber',
      tags: ['Python', 'FastAPI', 'Whisper AI', 'FFmpeg', 'HTML', 'CSS', 'JavaScript', 'OpenAI'],
      highlights: [
        'Built dual-mode transcription system with automatic fallback',
        'Integrated OpenAI Whisper model for speech-to-text conversion',
        'Implemented intelligent temporary file management system',
        'Designed responsive UI with modern CSS flexbox',
        'Developed robust error handling and recovery system'
      ]
    },
    {
      title: 'BookHive - Library Management System',
      description: 'A modern library management system with real-time notifications, barcode scanning, and comprehensive book tracking capabilities.',
      image: '/projects/bookhive.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/anevski-stefan/library-app',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux', 'WebSocket', 'TailwindCSS', 'Express'],
      highlights: [
        'Implemented real-time notifications using WebSocket',
        'Built role-based access control with JWT authentication',
        'Integrated barcode/QR scanning for efficient book management',
        'Developed automated due date reminder system',
        'Created comprehensive book tracking and request system'
      ]
    },
    {
      title: 'Tab Group Saver - Chrome Extension',
      description: 'A productivity-focused Chrome extension that helps users organize and manage browser tabs efficiently through customizable groups and quick actions.',
      image: '/projects/tab-saver.jpg',
      demoLink: 'https://chrome.google.com/webstore/detail/your-extension-id',
      githubLink: 'https://github.com/anevski-stefan/tab-manager-extension',
      tags: ['JavaScript', 'Chrome API', 'HTML', 'CSS', 'Chrome Storage', 'Manifest V3'],
      highlights: [
        'Built custom tab management system with group functionality',
        'Implemented Chrome Storage Sync for seamless data persistence',
        'Created context menu integration for quick tab actions',
        'Designed responsive popup interface with collapsible groups',
        'Developed selective tab saving with batch operations'
      ]
    },
    {
      title: 'Dev.to Article Scraper',
      description: 'A full-stack web application that scrapes and displays articles from dev.to based on user queries, featuring real-time status updates and persistent storage.',
      image: '/projects/devto-scraper.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/anevski-stefan/dev-scraper',
      tags: ['React', 'Vite', 'Flask', 'Playwright', 'Tailwind CSS', 'Python', 'Axios', 'Gunicorn'],
      highlights: [
        'Built real-time article scraping system with status updates',
        'Implemented persistent storage for search history',
        'Created responsive UI with Tailwind CSS and toast notifications',
        'Developed robust error handling and loading states',
        'Integrated Playwright for reliable web scraping'
      ]
    },
    {
      title: 'Weather Forecast Application',
      description: 'A modern, responsive weather application providing real-time forecasts, air quality monitoring, and detailed weather metrics using OpenWeatherMap API.',
      image: '/projects/weather-app.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/anevski-stefan/weatherapp',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'OpenWeatherMap API', 'Axios'],
      highlights: [
        'Built real-time weather tracking with 5-day forecasts',
        'Implemented air quality and UV index monitoring',
        'Created city search with autocomplete functionality',
        'Designed responsive UI with animated weather transitions',
        'Developed multi-location support with saved cities'
      ]
    },
    {
      title: 'Discord Weather Forecast Bot',
      description: 'A feature-rich Discord bot that provides real-time weather forecasts and astronomical data using WeatherAPI, built with Node.js and Discord.js.',
      image: '/projects/discord-bot.jpg',
      demoLink: 'https://discord.com/oauth2/authorize?client_id=your-client-id&scope=bot',
      githubLink: 'https://github.com/anevski-stefan/discord-bot',
      tags: ['Node.js', 'Discord.js', 'WeatherAPI', 'JavaScript', 'REST API', 'dotenv'],
      highlights: [
        'Implemented weather forecast commands with unit conversion',
        'Built astronomical data tracking functionality',
        'Created intuitive slash command system',
        'Developed real-time bot status monitoring',
        'Integrated secure environment configuration'
      ]
    },
    {
      title: 'Local LLM Chatbot',
      description: 'A locally-running AI chatbot that leverages CTransformers for inference and Chainlit for the interface, featuring multiple LLM models and conversational memory.',
      image: '/projects/llm-chatbot.jpg',
      demoLink: 'https://your-demo-link',
      githubLink: 'https://github.com/anevski-stefan/llm-chat',
      tags: ['Python', 'CTransformers', 'Chainlit', 'LangChain', 'Hugging Face', 'LLM'],
      highlights: [
        'Built local LLM inference system with multiple model support',
        'Implemented streaming responses and conversational memory',
        'Created clean chat interface with real-time updates',
        'Developed model switching between Orca Mini and Llama2',
        'Integrated VS Code development environment with linting'
      ]
    }
  ]
}

const ProjectCard = ({ project }: { project: Project }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(79, 70, 229, 0.15),
      transparent 80%
    )
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        className="relative flex flex-col h-full rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 overflow-hidden"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <FiCode className="text-2xl text-indigo-600 dark:text-indigo-400" />
            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="mb-6">
            <div className="space-y-2">
              {project.highlights.map((highlight: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  {highlight}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

type FilterCategory = 'all' | 'web' | 'mobile' | 'ai' | 'tools'

export default function Projects() {
  const [category, setCategory] = useState<FilterCategory>('all')

  // Filter projects based on main categories
  const filteredProjects = useMemo(() => {
    return projects.featured.filter(project => {
      if (category === 'all') return true;
      
      // Simple category matching based on project type
      switch (category) {
        case 'web':
          return project.title.toLowerCase().includes('app') || 
                 project.description.toLowerCase().includes('web') ||
                 project.tags.some(tag => ['React', 'Next.js', 'Vue', 'Angular'].includes(tag));
        case 'mobile':
          return project.title.toLowerCase().includes('mobile') ||
                 project.description.toLowerCase().includes('mobile') ||
                 project.tags.some(tag => ['React Native', 'Flutter', 'iOS', 'Android'].includes(tag));
        case 'ai':
          // More specific AI/ML project detection
          return project.tags.some(tag => 
            ['AI', 'Machine Learning', 'ML', 'LLM', 'Neural Network', 'Deep Learning', 'NLP', 'Whisper AI', 'OpenAI'].includes(tag)
          ) || 
          project.title.toLowerCase().includes('ai ') || // Add space to avoid partial matches
          project.title.toLowerCase().includes('ml ') ||
          project.title.toLowerCase().includes('machine learning') ||
          project.title.toLowerCase().includes('artificial intelligence');
        case 'tools':
          return project.title.toLowerCase().includes('tool') ||
                 project.description.toLowerCase().includes('utility') ||
                 project.tags.some(tag => ['Chrome Extension', 'CLI', 'Utility', 'Plugin', 'Extension'].includes(tag));
        default:
          return true;
      }
    })
  }, [category])

  return (
    <>
      <SEO title="Projects - Stefan Anevski" />
      <section className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-4">Featured Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my journey in software development, featuring full-stack applications
            and innovative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as FilterCategory)}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="all">All Projects</option>
            <option value="web">Web Applications</option>
            <option value="mobile">Mobile Apps</option>
            <option value="ai">AI & ML Projects</option>
            <option value="tools">Tools & Utilities</option>
          </select>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <LazyLoad key={project.title}>
                <ProjectCard project={project} />
              </LazyLoad>
            ))}
          </div>
        )}
      </section>
    </>
  )
} 