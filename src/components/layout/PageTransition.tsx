import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  }
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
} 