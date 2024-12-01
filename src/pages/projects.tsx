import LazyLoad from '@/components/common/LazyLoad'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import { MouseEvent } from 'react'

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

export default function Projects() {
  return (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.featured.map((project) => (
          <LazyLoad key={project.title}>
            <ProjectCard project={project} />
          </LazyLoad>
        ))}
      </div>
    </section>
  )
} 