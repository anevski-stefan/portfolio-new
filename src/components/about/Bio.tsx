import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiGitBranch, FiMonitor, FiUsers } from 'react-icons/fi'
import { IconType } from 'react-icons'
import Timeline from './Timeline'

interface Skill {
  name: string
  icon: IconType
}

const skills: { [key: string]: Skill[] } = {
  frontend: [
    { name: 'HTML', icon: FiCode },
    { name: 'CSS', icon: FiLayout },
    { name: 'JavaScript', icon: FiCode },
    { name: 'React.js', icon: FiCode },
    { name: 'Next.js', icon: FiCode },
    { name: 'Solid.js', icon: FiCode },
    { name: 'Nuxt.js', icon: FiCode },
    { name: 'Tailwind CSS', icon: FiLayout },
  ],
  backend: [
    { name: 'Java', icon: FiServer },
    { name: 'Spring Boot', icon: FiServer },
    { name: 'Django', icon: FiServer },
    { name: 'PHP', icon: FiServer },
    { name: 'C/C++', icon: FiServer },
    { name: 'AEM', icon: FiServer },
  ],
  databases: [
    { name: 'MySQL', icon: FiDatabase },
    { name: 'PostgreSQL', icon: FiDatabase },
  ],
  tools: [
    { name: 'Git', icon: FiGitBranch },
    { name: 'GitHub', icon: FiGitBranch },
    { name: 'GitLab', icon: FiGitBranch },
    { name: 'Docker', icon: FiTool },
  ],
  platforms: [
    { name: 'Netlify', icon: FiMonitor },
    { name: 'Vercel', icon: FiMonitor },
    { name: 'Railway', icon: FiMonitor },
    { name: 'Render', icon: FiMonitor },
  ],
  softSkills: [
    { name: 'Agile', icon: FiUsers },
    { name: 'Problem-Solving', icon: FiUsers },
    { name: 'Communication', icon: FiUsers },
    { name: 'Critical Thinking', icon: FiUsers },
  ],
}

export default function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-8 text-lg text-foreground/80">
      As a software engineer, I am passionate about software engineering and am eager to apply my skills and knowledge to a career in this field. 
      I have gained a strong foundation in Java through my coursework, including experience with object-oriented programming and building SpringBoot applications. 
      I am a strong communicator and thrive in collaborative environments. In my free time, I enjoy staying up to date with the latest technologies. I am excited to connect with others and explore opportunities to grow and learn in my career as a software engineer.
      </p>
      
      <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
      
      <div className="flex flex-wrap gap-3 justify-start mb-8">
        {/* Frontend - Purple */}
        {skills.frontend.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full flex items-center gap-2 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
          >
            <skill.icon className="w-4 h-4" />
            {skill.name}
          </motion.span>
        ))}

        {/* Backend - Blue */}
        {skills.backend.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + skills.frontend.length) * 0.1 }}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full flex items-center gap-2 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
          >
            <skill.icon className="w-4 h-4" />
            {skill.name}
          </motion.span>
        ))}

        {/* Databases - Green */}
        {skills.databases.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + skills.frontend.length + skills.backend.length) * 0.1 }}
            className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full flex items-center gap-2 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
          >
            <skill.icon className="w-4 h-4" />
            {skill.name}
          </motion.span>
        ))}

        {/* Tools & Platforms - Orange */}
        {[...skills.tools, ...skills.platforms].map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + skills.frontend.length + skills.backend.length + skills.databases.length) * 0.1 }}
            className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full flex items-center gap-2 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
          >
            <skill.icon className="w-4 h-4" />
            {skill.name}
          </motion.span>
        ))}

        {/* Soft Skills - Pink */}
        {skills.softSkills.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + skills.frontend.length + skills.backend.length + skills.databases.length + skills.tools.length + skills.platforms.length) * 0.1 }}
            className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full flex items-center gap-2 hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
          >
            <skill.icon className="w-4 h-4" />
            {skill.name}
          </motion.span>
        ))}
      </div>

      <Timeline />
    </motion.div>
  )
} 