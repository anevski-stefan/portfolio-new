import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { fadeInUp, stagger } from '@/hooks/useScrollAnimation'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
  tags: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
  githubLink,
  tags
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      className="border border-foreground/10 rounded-lg overflow-hidden"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative h-48"
      >
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          className="object-cover transition-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      
      <motion.div
        variants={stagger}
        className="p-6"
      >
        <motion.h3 
          variants={fadeInUp}
          className="text-xl font-bold mb-2"
        >
          {title}
        </motion.h3>
        
        <motion.p 
          variants={fadeInUp}
          className="text-foreground/80 mb-4"
        >
          {description}
        </motion.p>
        
        <motion.div 
          variants={stagger}
          className="flex flex-wrap gap-2 mb-4"
        >
          {tags.map(tag => (
            <motion.span
              key={tag}
              variants={fadeInUp}
              className="px-3 py-1 text-sm rounded-full bg-foreground/5"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="flex gap-4"
        >
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground/80"
          >
            <FiExternalLink /> Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground/80"
          >
            <FiGithub /> Code
          </a>
        </motion.div>
      </motion.div>
    </motion.article>
  )
} 