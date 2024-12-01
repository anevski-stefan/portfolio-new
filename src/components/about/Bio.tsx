import { motion } from 'framer-motion'
import { FiDownload, FiCode, FiLayout, FiGitBranch, FiDatabase, FiServer, FiLayers } from 'react-icons/fi'
import { IconType } from 'react-icons'

interface Skill {
  name: string
  icon: IconType
}

const skills: Skill[] = [
  { name: 'React', icon: FiCode },
  { name: 'TypeScript', icon: FiLayout },
  { name: 'Next.js', icon: FiServer },
  { name: 'Tailwind CSS', icon: FiLayers },
  { name: 'Git', icon: FiGitBranch },
  { name: 'Databases', icon: FiDatabase },
]

export default function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-6 text-lg text-foreground/80">
        I'm a passionate frontend developer with a keen eye for design and user experience.
        I specialize in building responsive, performant web applications using modern technologies.
      </p>
      
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="p-4 border border-foreground/10 rounded-lg"
          >
            <skill.icon className="mb-2 text-2xl" />
            <h4 className="font-semibold">{skill.name}</h4>
          </div>
        ))}
      </div>

      <motion.a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiDownload />
        Download CV
      </motion.a>
    </motion.div>
  )
} 